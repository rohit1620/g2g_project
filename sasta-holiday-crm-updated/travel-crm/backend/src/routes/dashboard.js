const express = require("express");
const pool = require("../db/pool");
const { runReminderCheck, isConfigured } = require("../services/whatsappReminders");

const router = express.Router();

// GET /api/dashboard — summary stats for the dashboard page
router.get("/", async (req, res) => {
  try {
    const [totalLeads, statusCounts, revenue, recentLeads, tripReminders] = await Promise.all([
      pool.query("SELECT COUNT(*) FROM leads"),
      pool.query("SELECT status, COUNT(*) FROM leads GROUP BY status"),
      pool.query(
        "SELECT COALESCE(SUM(total_amount), 0) AS total, COALESCE(SUM(advance_paid), 0) AS collected FROM bookings"
      ),
      pool.query(
        `SELECT l.id, l.lead_number, l.customer_name, l.destination, l.travel_date, l.status,
                e.name AS assigned_to_name
         FROM leads l
         LEFT JOIN employees e ON e.id = l.assigned_to
         ORDER BY l.created_at DESC
         LIMIT 5`
      ),
      // Trips departing today, tomorrow, or in 2 days. Past trips are never
      // shown here — once a trip's date has passed, it drops off this list.
      // Cancelled/Lost leads are excluded since there's nothing to remind about.
      pool.query(
        `SELECT l.id, l.lead_number, l.customer_name, l.phone, l.destination, l.travel_date, l.status,
                e.name AS assigned_to_name,
                (l.travel_date - CURRENT_DATE) AS days_until_travel,
                l.whatsapp_reminder_sent_at
         FROM leads l
         LEFT JOIN employees e ON e.id = l.assigned_to
         WHERE l.travel_date IS NOT NULL
           AND l.travel_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '2 days'
           AND l.status NOT IN ('Cancelled', 'Lost')
         ORDER BY l.travel_date ASC`
      ),
    ]);

    const total = parseInt(totalLeads.rows[0].count, 10);
    const confirmed =
      parseInt(
        statusCounts.rows.find((r) => r.status === "Confirmed")?.count || 0,
        10
      ) || 0;
    const conversionRate = total ? Math.round((confirmed / total) * 100) : 0;

    res.json({
      totalLeads: total,
      conversionRate,
      revenue: Number(revenue.rows[0].total),
      collected: Number(revenue.rows[0].collected),
      statusCounts: statusCounts.rows.reduce(
        (acc, row) => ({ ...acc, [row.status]: parseInt(row.count, 10) }),
        {}
      ),
      recentLeads: recentLeads.rows,
      tripReminders: tripReminders.rows.map((r) => ({ ...r, days_until_travel: Number(r.days_until_travel) })),
      whatsappRemindersConfigured: isConfigured() && process.env.WHATSAPP_REMINDERS_ENABLED === "true",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch dashboard stats." });
  }
});

// POST /api/dashboard/send-whatsapp-reminders — manually trigger the same
// check the daily cron job runs, for when staff want to send reminders
// right away instead of waiting for the scheduled time.
router.post("/send-whatsapp-reminders", async (req, res) => {
  try {
    const result = await runReminderCheck();
    if (result.skipped) {
      return res.status(400).json({ error: result.reason });
    }
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send WhatsApp reminders." });
  }
});

module.exports = router;
