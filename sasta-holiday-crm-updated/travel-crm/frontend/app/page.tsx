"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrendingUp, Users, IndianRupee, Percent, ArrowRight, Phone, BellRing, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { api } from "@/lib/api";
import { statusOptions } from "@/lib/options";
import { DashboardStats, LeadStatus, TripReminder } from "@/lib/types";

function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function reminderUrgency(daysUntil: number): { label: string; color: string; background: string } {
  if (daysUntil < 0) {
    const daysAgo = Math.abs(daysUntil);
    return {
      label: `Started ${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`,
      color: "#9B3A37",
      background: "#FBEAE9",
    };
  }
  if (daysUntil === 0) {
    return { label: "Departs today", color: "#9B3A37", background: "#FBEAE9" };
  }
  if (daysUntil === 1) {
    return { label: "Departs tomorrow", color: "#A15C00", background: "#FCEFD9" };
  }
  return { label: `In ${daysUntil} days`, color: "#A15C00", background: "#FCEFD9" };
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function loadStats() {
    return api
      .get<DashboardStats>("/dashboard")
      .then(setStats)
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load dashboard."));
  }

  useEffect(() => {
    loadStats().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <PageHeader title="Dashboard" description="Overview of leads, conversions, and revenue" />
        <p className="px-8 text-[13px]" style={{ color: "var(--muted)" }}>
          Loading...
        </p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div>
        <PageHeader title="Dashboard" description="Overview of leads, conversions, and revenue" />
        <p className="px-8 text-[13px] rounded-lg" style={{ color: "#9B3A37" }}>
          {error || "Something went wrong."}
        </p>
      </div>
    );
  }

  const pending = stats.revenue - stats.collected;
  const statBarMax = Math.max(...statusOptions.map((s) => stats.statusCounts[s] || 0), 1);

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of leads, conversions, and revenue"
      />

      <div className="px-8 grid grid-cols-4 gap-4">
        <StatCard
          icon={<Users size={18} />}
          label="Total leads"
          value={String(stats.totalLeads)}
          sub={`${(stats.statusCounts["Lost"] || 0) + (stats.statusCounts["Cancelled"] || 0)} lost or cancelled`}
        />
        <StatCard
          icon={<Percent size={18} />}
          label="Conversion rate"
          value={`${stats.conversionRate}%`}
          sub={`${stats.statusCounts["Confirmed"] || 0} confirmed bookings`}
        />
        <StatCard
          icon={<IndianRupee size={18} />}
          label="Revenue (confirmed)"
          value={formatINR(stats.revenue)}
          sub={`${formatINR(pending)} balance pending`}
        />
        <StatCard
          icon={<TrendingUp size={18} />}
          label="Collected so far"
          value={formatINR(stats.collected)}
          sub="across all bookings"
        />
      </div>

      <div className="px-8 mt-6">
        <TripReminders
          reminders={stats.tripReminders}
          configured={stats.whatsappRemindersConfigured}
          onSent={loadStats}
        />
      </div>

      <div className="px-8 mt-6 grid grid-cols-3 gap-5">
        <div
          className="col-span-1 rounded-xl border p-5"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
        >
          <h3 className="text-[14px] font-medium mb-4">Leads by status</h3>
          <div className="space-y-3">
            {statusOptions.map((status) => (
              <div key={status} className="flex items-center gap-3">
                <span className="text-[12px] w-[88px] shrink-0" style={{ color: "var(--muted)" }}>
                  {status}
                </span>
                <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: "var(--background)" }}>
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${((stats.statusCounts[status] || 0) / statBarMax) * 100}%`,
                      backgroundColor: "var(--primary-light)",
                    }}
                  />
                </div>
                <span className="text-[12px] w-5 text-right font-medium">
                  {stats.statusCounts[status] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="col-span-2 rounded-xl border p-5"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-medium">Recent leads</h3>
            <Link
              href="/leads"
              className="text-[13px] font-medium flex items-center gap-1"
              style={{ color: "var(--accent)" }}
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-1">
            {stats.recentLeads.map((lead) => (
              <Link
                key={lead.id}
                href={`/leads/${lead.id}`}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 -mx-3 hover:bg-[var(--background)] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-medium"
                    style={{ backgroundColor: "#E3EFFC", color: "#0F3D6E" }}
                  >
                    {lead.customer_name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium truncate">{lead.customer_name}</p>
                    <p className="text-[12px] truncate" style={{ color: "var(--muted)" }}>
                      {lead.destination ?? "No destination yet"} · {formatDate(lead.travel_date)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                    {lead.assigned_to_name ?? "Unassigned"}
                  </span>
                  <StatusBadge status={lead.status} />
                </div>
              </Link>
            ))}

            {stats.recentLeads.length === 0 && (
              <p className="text-[13px] py-6 text-center" style={{ color: "var(--muted)" }}>
                No leads yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-2 mb-3" style={{ color: "var(--muted)" }}>
        {icon}
        <span className="text-[13px]">{label}</span>
      </div>
      <p className="text-[24px] font-medium" style={{ color: "var(--foreground)" }}>
        {value}
      </p>
      <p className="text-[12px] mt-1" style={{ color: "var(--muted)" }}>
        {sub}
      </p>
    </div>
  );
}

function TripReminders({
  reminders,
  configured,
  onSent,
}: {
  reminders: TripReminder[];
  configured: boolean;
  onSent: () => void;
}) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<string>("");

  const pendingCount = reminders.filter((r) => !r.whatsapp_reminder_sent_at && r.days_until_travel === 2).length;

  async function handleSendNow() {
    setSending(true);
    setSendResult("");
    try {
      const result = await api.post<{ sent: number; failed: number; total: number }>(
        "/dashboard/send-whatsapp-reminders"
      );
      setSendResult(
        result.total === 0
          ? "No reminders were due to be sent."
          : `Sent ${result.sent} of ${result.total} reminder${result.total > 1 ? "s" : ""}.` +
              (result.failed ? ` ${result.failed} failed — check the server logs.` : "")
      );
      onSent();
    } catch (err) {
      setSendResult(err instanceof Error ? err.message : "Failed to send reminders.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <BellRing size={16} style={{ color: "var(--accent)" }} />
          <h3 className="text-[14px] font-medium">Upcoming trip reminders</h3>
          {reminders.length > 0 && (
            <span
              className="text-[12px] font-medium rounded-full px-2.5 py-0.5"
              style={{ backgroundColor: "#FBEAE9", color: "#9B3A37" }}
            >
              {reminders.length}
            </span>
          )}
        </div>

        {configured && (
          <button
            onClick={handleSendNow}
            disabled={sending || pendingCount === 0}
            className="flex items-center gap-1.5 text-[12px] font-medium rounded-lg px-3 py-1.5 border disabled:opacity-50"
            style={{ borderColor: "var(--border)", color: "#1F7A4D" }}
          >
            <MessageCircle size={13} />
            {sending ? "Sending..." : `Send WhatsApp reminders${pendingCount ? ` (${pendingCount})` : ""}`}
          </button>
        )}
      </div>
      <p className="text-[12px] mb-1" style={{ color: "var(--muted)" }}>
        Trips departing today, tomorrow, or in 2 days.
        {!configured && " WhatsApp reminders aren't configured yet — ask an admin to set up Twilio in .env."}
      </p>
      {sendResult && (
        <p className="text-[12px] mb-3" style={{ color: "#1F7A4D" }}>
          {sendResult}
        </p>
      )}

      {reminders.length === 0 ? (
        <p className="text-[13px] py-4 text-center" style={{ color: "var(--muted)" }}>
          No trips departing in the next 2 days. You&apos;re all caught up.
        </p>
      ) : (
        <div className="space-y-2 mt-3">
          {reminders.map((r) => {
            const urgency = reminderUrgency(r.days_until_travel);
            return (
              <div
                key={r.id}
                onClick={() => router.push(`/leads/${r.id}`)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push(`/leads/${r.id}`);
                }}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 -mx-3 hover:bg-[var(--background)] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-medium"
                    style={{ backgroundColor: urgency.background, color: urgency.color }}
                  >
                    {r.customer_name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-medium truncate">{r.customer_name}</p>
                      <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                        {r.lead_number}
                      </span>
                      {r.whatsapp_reminder_sent_at && (
                        <span
                          className="flex items-center gap-1 text-[11px] font-medium rounded-full px-2 py-0.5"
                          style={{ backgroundColor: "#E3F3EA", color: "#1F7A4D" }}
                        >
                          <MessageCircle size={10} />
                          Reminder sent
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`tel:${r.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-[12px] hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        <Phone size={11} />
                        {r.phone}
                      </a>
                      <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                        · {r.destination ?? "No destination set"} · {formatDate(r.travel_date)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                    {r.assigned_to_name ?? "Unassigned"}
                  </span>
                  <span
                    className="text-[12px] font-medium rounded-full px-2.5 py-1 whitespace-nowrap"
                    style={{ backgroundColor: urgency.background, color: urgency.color }}
                  >
                    {urgency.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
