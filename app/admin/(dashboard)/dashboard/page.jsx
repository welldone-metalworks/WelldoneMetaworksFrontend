"use client";

import {
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  FolderKanban,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Tags,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Enquiries",
      value: "124",
      change: "+18.4%",
      description: "vs last month",
      icon: MessageSquareText,
      tone: "blue",
    },
    {
      label: "Published Blogs",
      value: "32",
      change: "+12.5%",
      description: "content published",
      icon: FileText,
      tone: "navy",
    },
    {
      label: "Categories",
      value: "8",
      change: "+2",
      description: "active categories",
      icon: FolderKanban,
      tone: "cyan",
    },
    {
      label: "Tags",
      value: "24",
      change: "+6",
      description: "content tags",
      icon: Tags,
      tone: "green",
    },
  ];

  const recentEnquiries = [
    {
      name: "Rahul Sharma",
      service: "Structural Fabrication",
      location: "Ahmedabad",
      time: "18 min ago",
      status: "New",
      initials: "RS",
    },
    {
      name: "Amit Patel",
      service: "Industrial Shed",
      location: "Gandhinagar",
      time: "1 hr ago",
      status: "Contacted",
      initials: "AP",
    },
    {
      name: "Vikas Mehta",
      service: "MS Staircase",
      location: "Ahmedabad",
      time: "3 hrs ago",
      status: "Pending",
      initials: "VM",
    },
    {
      name: "Deepak Joshi",
      service: "Custom Metal Fabrication",
      location: "Vadodara",
      time: "5 hrs ago",
      status: "Completed",
      initials: "DJ",
    },
  ];

  const activities = [
    {
      title: "New enquiry received",
      description: "Structural fabrication enquiry from Ahmedabad",
      time: "18 minutes ago",
      icon: MessageSquareText,
      tone: "blue",
    },
    {
      title: "Blog published",
      description: "New fabrication guide published successfully",
      time: "2 hours ago",
      icon: BookOpen,
      tone: "green",
    },
    {
      title: "SEO content updated",
      description: "Meta information updated for service page",
      time: "4 hours ago",
      icon: TrendingUp,
      tone: "purple",
    },
    {
      title: "Admin settings updated",
      description: "Website configuration was modified",
      time: "Yesterday",
      icon: Settings2,
      tone: "orange",
    },
  ];

  const quickActions = [
    {
      title: "Create Blog",
      description: "Publish new content",
      icon: Plus,
      href: "/admin/blogs/create",
    },
    {
      title: "View Enquiries",
      description: "Manage customer requests",
      icon: MessageSquareText,
      href: "/admin/enquiries",
    },
    {
      title: "Manage Categories",
      description: "Organize blog content",
      icon: FolderKanban,
      href: "/admin/categories",
    },
    {
      title: "Manage Tags",
      description: "Maintain content tags",
      icon: Tags,
      href: "/admin/tags",
    },
  ];

  return (
    <main className="min-h-full bg-[#f8fcfe] text-[#12324a]">
      <div className="mx-auto w-full max-w-[1280px] space-y-6">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <section className="relative overflow-hidden border border-[#dceff7] bg-white">
          {/* Industrial grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="absolute right-[-80px] top-[-120px] h-[320px] w-[320px] rounded-full border border-[#1687c5]/10" />

          <div className="absolute bottom-[-180px] right-[120px] h-[360px] w-[360px] rounded-full border border-[#1687c5]/10" />

          <div className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 border border-[#bfe4f3] bg-[#eff9fe] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#1687c5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1687c5]" />
                Administration Center
              </div>

              <h1 className="text-3xl font-black tracking-[-0.04em] text-[#12324a] sm:text-4xl">
                Good afternoon, Admin.
              </h1>

              <p className="mt-2 max-w-[650px] text-sm leading-6 text-[#64748b]">
                Manage your Welldone Metalworks website, enquiries,
                blogs and content from one centralized workspace.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                  <CheckCircle2
                    size={15}
                    className="text-[#15803d]"
                  />
                  System operational
                </div>

                <div className="h-4 w-px bg-[#dceff7]" />

                <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                  <Clock3 size={14} />
                  Last updated today
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-3 sm:min-w-[360px]">
              <div className="border border-[#dceff7] bg-[#f8fcfe] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94a3b8]">
                  Website Status
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#15803d]" />
                  <span className="text-sm font-black text-[#12324a]">
                    Online
                  </span>
                </div>
              </div>

              <div className="border border-[#dceff7] bg-[#f8fcfe] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#94a3b8]">
                  Content Health
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-black text-[#12324a]">
                    94%
                  </span>
                  <span className="text-[10px] font-bold text-[#15803d]">
                    Excellent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group border border-[#dceff7] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bfe4f3] hover:shadow-[0_12px_35px_rgba(15,76,110,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#dceff7] bg-[#eff9fe] text-[#1687c5]">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#15803d]">
                    <ArrowUpRight size={13} />
                    {stat.change}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold text-[#64748b]">
                    {stat.label}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h2 className="text-3xl font-black tracking-[-0.04em] text-[#12324a]">
                      {stat.value}
                    </h2>

                    <span className="pb-1 text-[10px] font-semibold text-[#94a3b8]">
                      {stat.description}
                    </span>
                  </div>
                </div>

                {/* Mini trend */}
                <div className="mt-5 flex h-8 items-end gap-1">
                  {[35, 48, 42, 58, 52, 70, 64, 82, 76, 94].map(
                    (height, index) => (
                      <span
                        key={index}
                        className={`w-full ${
                          index === 9
                            ? "bg-[#1687c5]"
                            : "bg-[#dceff7]"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <section>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1687c5]">
                Quick Access
              </p>

              <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-[#12324a]">
                Common actions
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <a
                  key={action.title}
                  href={action.href}
                  className="group flex items-center gap-4 border border-[#dceff7] bg-white p-4 transition-all hover:border-[#1687c5] hover:shadow-[0_10px_30px_rgba(15,76,110,0.07)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#eff9fe] text-[#1687c5] transition-colors group-hover:bg-[#1687c5] group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black text-[#12324a]">
                      {action.title}
                    </p>

                    <p className="mt-0.5 text-[11px] text-[#94a3b8]">
                      {action.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-[#94a3b8] transition-transform group-hover:translate-x-1 group-hover:text-[#1687c5]"
                  />
                </a>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">

          {/* RECENT ENQUIRIES */}
          <div className="border border-[#dceff7] bg-white">

            <div className="flex flex-col gap-4 border-b border-[#dceff7] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-1 bg-[#1687c5]" />

                  <h2 className="text-lg font-black tracking-[-0.02em] text-[#12324a]">
                    Recent Enquiries
                  </h2>
                </div>

                <p className="mt-1 pl-3 text-xs text-[#64748b]">
                  Latest customer enquiries received through the website.
                </p>
              </div>

              <a
                href="/admin/enquiries"
                className="inline-flex items-center justify-center gap-2 border border-[#dceff7] px-4 py-2.5 text-xs font-bold text-[#12324a] transition-colors hover:border-[#1687c5] hover:text-[#1687c5]"
              >
                View all
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="border-b border-[#dceff7] bg-[#f8fcfe] text-left">
                    <th className="px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#94a3b8]">
                      Customer
                    </th>

                    <th className="px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#94a3b8]">
                      Service
                    </th>

                    <th className="px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#94a3b8]">
                      Location
                    </th>

                    <th className="px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#94a3b8]">
                      Status
                    </th>

                    <th className="px-5 py-3 text-right text-[10px] font-black uppercase tracking-[0.14em] text-[#94a3b8]">
                      Time
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentEnquiries.map((item) => (
                    <tr
                      key={item.name}
                      className="border-b border-[#edf5f8] last:border-0 hover:bg-[#f8fcfe]"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#12324a] text-[10px] font-black text-white">
                            {item.initials}
                          </div>

                          <div>
                            <p className="text-xs font-black text-[#12324a]">
                              {item.name}
                            </p>

                            <p className="mt-0.5 text-[10px] text-[#94a3b8]">
                              Website enquiry
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-xs font-semibold text-[#475569]">
                        {item.service}
                      </td>

                      <td className="px-5 py-4 text-xs text-[#64748b]">
                        {item.location}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={item.status} />
                      </td>

                      <td className="px-5 py-4 text-right text-[10px] font-semibold text-[#94a3b8]">
                        {item.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CONTENT PERFORMANCE */}
          <div className="border border-[#dceff7] bg-white">

            <div className="border-b border-[#dceff7] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1687c5]">
                    Performance
                  </p>

                  <h2 className="mt-1 text-lg font-black tracking-[-0.02em] text-[#12324a]">
                    Content Overview
                  </h2>
                </div>

                <BarChart3
                  size={20}
                  className="text-[#1687c5]"
                />
              </div>
            </div>

            <div className="space-y-6 p-5">
              <ProgressItem
                label="Published Content"
                value="86%"
                progress="86%"
              />

              <ProgressItem
                label="SEO Optimization"
                value="74%"
                progress="74%"
              />

              <ProgressItem
                label="Blog Coverage"
                value="68%"
                progress="68%"
              />

              <ProgressItem
                label="Content Completeness"
                value="91%"
                progress="91%"
              />
            </div>

            <div className="mx-5 mb-5 border border-[#dceff7] bg-[#f8fcfe] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#eff9fe] text-[#1687c5]">
                  <TrendingUp size={15} />
                </div>

                <div>
                  <p className="text-xs font-black text-[#12324a]">
                    Content is moving in the right direction
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#64748b]">
                    Continue publishing location-focused fabrication
                    content to strengthen organic visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ACTIVITY + SYSTEM
        ===================================================== */}

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr]">

          {/* ACTIVITY */}
          <div className="border border-[#dceff7] bg-white">
            <div className="flex items-center justify-between border-b border-[#dceff7] p-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1687c5]">
                  Timeline
                </p>

                <h2 className="mt-1 text-lg font-black text-[#12324a]">
                  Recent Activity
                </h2>
              </div>

              <button
                type="button"
                className="text-[#94a3b8] hover:text-[#12324a]"
              >
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="divide-y divide-[#edf5f8]">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="flex gap-4 p-5"
                  >
                    <div className="relative">
                      <div className="flex h-9 w-9 items-center justify-center border border-[#dceff7] bg-[#f8fcfe] text-[#1687c5]">
                        <Icon size={16} />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row">
                        <p className="text-xs font-black text-[#12324a]">
                          {activity.title}
                        </p>

                        <span className="text-[10px] font-semibold text-[#94a3b8]">
                          {activity.time}
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] leading-5 text-[#64748b]">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SYSTEM STATUS */}
          <div className="border border-[#dceff7] bg-[#12324a] text-white">

            <div className="border-b border-white/10 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#46a9d8]">
                System
              </p>

              <h2 className="mt-1 text-lg font-black">
                Platform Status
              </h2>
            </div>

            <div className="space-y-1 p-5">
              <SystemItem
                label="Website"
                status="Operational"
              />

              <SystemItem
                label="API Server"
                status="Operational"
              />

              <SystemItem
                label="Database"
                status="Connected"
              />

              <SystemItem
                label="Content System"
                status="Operational"
              />
            </div>

            <div className="mx-5 mb-5 border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#46d47a]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="flex flex-col gap-2 border-t border-[#dceff7] py-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8] sm:flex-row sm:items-center sm:justify-between">
          <span>Welldone Metalworks Administration</span>

          <span>Admin System · 2026</span>
        </div>
      </div>
    </main>
  );
}

/* ============================================================
   STATUS BADGE
============================================================ */

function StatusBadge({ status }) {
  const styles = {
    New: "border-[#bfe4f3] bg-[#eff9fe] text-[#1687c5]",
    Contacted: "border-[#fde7b2] bg-[#fff9e8] text-[#a16207]",
    Pending: "border-[#fed7aa] bg-[#fff7ed] text-[#c2410c]",
    Completed: "border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d]",
  };

  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.08em] ${
        styles[status] ||
        "border-[#dceff7] bg-[#f8fcfe] text-[#64748b]"
      }`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

/* ============================================================
   PROGRESS ITEM
============================================================ */

function ProgressItem({ label, value, progress }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold text-[#475569]">
          {label}
        </span>

        <span className="text-xs font-black text-[#12324a]">
          {value}
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden bg-[#eaf4f8]">
        <div
          className="h-full bg-[#1687c5]"
          style={{ width: progress }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   SYSTEM ITEM
============================================================ */

function SystemItem({ label, status }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-3 last:border-0">
      <span className="text-xs font-medium text-white/60">
        {label}
      </span>

      <span className="flex items-center gap-2 text-[10px] font-bold text-white/80">
        <span className="h-1.5 w-1.5 rounded-full bg-[#46d47a]" />
        {status}
      </span>
    </div>
  );
}