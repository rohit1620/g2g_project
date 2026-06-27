const express = require("express");
const cors = require("cors");
require("dotenv").config();

const requireAuth = require("./middleware/requireAuth");
const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employees");
const vendorRoutes = require("./routes/vendors");
const leadRoutes = require("./routes/leads");
const bookingRoutes = require("./routes/bookings");
const itineraryRoutes = require("./routes/itineraries");
const dashboardRoutes = require("./routes/dashboard");

// The WhatsApp reminder cron job depends on the "node-cron" and "twilio"
// packages. Both are optional for everyday use of the CRM (the feature is
// off unless WHATSAPP_REMINDERS_ENABLED=true), so if those packages haven't
// been installed yet (e.g. right after pulling new code, before running
// `npm install`), the whole server should still start normally instead of
// crashing — just without the reminder job running.
let startReminderCron = () => {};
try {
  startReminderCron = require("./cron").startReminderCron;
} catch (err) {
  console.warn(
    "[whatsapp-reminders] Skipping the reminder cron job — couldn't load it (run `npm install` if you intend to use it):",
    err.message
  );
}

const app = express();

app.use(cors());
app.use(express.json());

// Health check (no auth needed) — useful to confirm the server + DB are reachable
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Public route — logging in
app.use("/api/auth", authRoutes);

// Everything below requires a valid login token
app.use("/api/employees", requireAuth, employeeRoutes);
app.use("/api/vendors", requireAuth, vendorRoutes);
app.use("/api/leads", requireAuth, leadRoutes);
app.use("/api/leads", requireAuth, bookingRoutes); // booking routes are nested under /leads/:leadId/booking
app.use("/api/leads", requireAuth, itineraryRoutes); // itinerary routes are nested under /leads/:leadId/itineraries
app.use("/api/dashboard", requireAuth, dashboardRoutes);

// Fallback 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Sasta Holiday CRM backend running on http://localhost:${PORT}`);
  startReminderCron();
});
