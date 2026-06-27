-- Migration: Add WhatsApp trip reminder tracking
-- Run this in pgAdmin 4 Query Tool on your existing database.
--
-- Tracks whether the automated "trip in 2 days" WhatsApp reminder has
-- already been sent for a lead, so the daily cron job never sends the
-- same reminder twice (e.g. if the server restarts or the job runs more
-- than once on the same day).

ALTER TABLE leads ADD COLUMN whatsapp_reminder_sent_at TIMESTAMPTZ;
