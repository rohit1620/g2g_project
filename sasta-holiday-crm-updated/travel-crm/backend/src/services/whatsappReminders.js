const pool = require("../db/pool");
require("dotenv").config();

// ============================================
// Twilio WhatsApp trip reminders
//
// Sends an approved WhatsApp template message to clients whose trip departs
// in exactly 2 days. Runs once a day via the cron job set up in cron.js.
//
// The Twilio client is created lazily (only when actually needed) so the
// server doesn't crash on startup if Twilio credentials aren't configured
// yet — the job simply logs a warning and skips sending in that case.
// ============================================

function isConfigured() {
  return Boolean(
    process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_WHATSAPP_FROM &&
      process.env.TWILIO_REMINDER_TEMPLATE_SID
  );
}

function getTwilioClient() {
  const twilio = require("twilio");
  return twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

function formatDateForMessage(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

// Normalizes a saved phone number into the "whatsapp:+<countrycode><number>"
// format Twilio requires. Assumes Indian 10-digit numbers when no country
// code is present, since that's this CRM's primary market — adjust here if
// the agency starts serving other countries.
function toWhatsAppAddress(phone) {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return `whatsapp:${digits}`;
  if (digits.length === 10) return `whatsapp:+91${digits}`;
  if (digits.startsWith("91") && digits.length === 12) return `whatsapp:+${digits}`;
  return `whatsapp:+${digits}`;
}

// Finds leads whose trip departs in exactly 2 days, hasn't already had a
// reminder sent, and isn't Cancelled/Lost.
async function findLeadsDueForReminder() {
  const result = await pool.query(
    `SELECT id, lead_number, customer_name, phone, destination, travel_date
     FROM leads
     WHERE travel_date = CURRENT_DATE + INTERVAL '2 days'
       AND status NOT IN ('Cancelled', 'Lost')
       AND whatsapp_reminder_sent_at IS NULL`
  );
  return result.rows;
}

async function sendReminderForLead(client, lead) {
  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_FROM,
    to: toWhatsAppAddress(lead.phone),
    contentSid: process.env.TWILIO_REMINDER_TEMPLATE_SID,
    contentVariables: JSON.stringify({
      1: lead.customer_name,
      2: lead.destination || "your destination",
      3: formatDateForMessage(lead.travel_date),
    }),
  });

  await pool.query("UPDATE leads SET whatsapp_reminder_sent_at = NOW() WHERE id = $1", [lead.id]);
}

// Runs the full check-and-send cycle once. Returns a small summary object so
// callers (the cron job, or a manual "run now" admin action) can log or
// display what happened.
async function runReminderCheck() {
  if (process.env.WHATSAPP_REMINDERS_ENABLED !== "true") {
    return { skipped: true, reason: "WhatsApp reminders are disabled (WHATSAPP_REMINDERS_ENABLED is not 'true')." };
  }
  if (!isConfigured()) {
    return { skipped: true, reason: "Twilio credentials are not fully configured in .env." };
  }

  const leads = await findLeadsDueForReminder();
  if (leads.length === 0) {
    return { skipped: false, sent: 0, failed: 0, total: 0 };
  }

  const client = getTwilioClient();
  let sent = 0;
  let failed = 0;
  const errors = [];

  for (const lead of leads) {
    try {
      await sendReminderForLead(client, lead);
      sent++;
    } catch (err) {
      failed++;
      errors.push({ leadId: lead.id, leadNumber: lead.lead_number, error: err.message });
      console.error(`Failed to send WhatsApp reminder for lead ${lead.lead_number}:`, err.message);
    }
  }

  return { skipped: false, sent, failed, total: leads.length, errors };
}

module.exports = { runReminderCheck, findLeadsDueForReminder, isConfigured };
