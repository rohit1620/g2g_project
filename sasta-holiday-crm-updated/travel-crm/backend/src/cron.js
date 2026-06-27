const cron = require("node-cron");
const { runReminderCheck } = require("./services/whatsappReminders");
require("dotenv").config();

// ============================================
// Schedules the daily WhatsApp trip-reminder check.
//
// Runs at WHATSAPP_REMINDER_HOUR:00 server time every day (default 9am).
// If reminders are disabled or Twilio isn't configured, the job still runs
// on schedule but exits immediately via runReminderCheck's own check —
// this keeps the on/off switch in one place (the .env file) rather than
// needing to also gate the cron registration itself.
// ============================================
function startReminderCron() {
  const hour = parseInt(process.env.WHATSAPP_REMINDER_HOUR, 10);
  const safeHour = Number.isInteger(hour) && hour >= 0 && hour <= 23 ? hour : 9;

  // node-cron format: minute hour day month weekday
  const schedule = `0 ${safeHour} * * *`;

  cron.schedule(schedule, async () => {
    console.log(`[whatsapp-reminders] Running daily check (scheduled for ${safeHour}:00)...`);
    try {
      const result = await runReminderCheck();
      if (result.skipped) {
        console.log(`[whatsapp-reminders] Skipped: ${result.reason}`);
      } else {
        console.log(
          `[whatsapp-reminders] Done. Sent ${result.sent}/${result.total} reminder(s).` +
            (result.failed ? ` ${result.failed} failed.` : "")
        );
      }
    } catch (err) {
      console.error("[whatsapp-reminders] Unexpected error running reminder check:", err);
    }
  });

  console.log(`[whatsapp-reminders] Scheduled daily check for ${safeHour}:00 server time.`);
}

module.exports = { startReminderCron };
