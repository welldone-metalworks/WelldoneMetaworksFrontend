"use client";

import {
  Users,
  Briefcase,
  Wrench,
  FileText,
  ArrowUpRight,
  Eye,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Leads",
      value: "1,248",
      growth: "+18%",
      icon: Users,
    },
    {
      title: "Projects",
      value: "86",
      growth: "+12%",
      icon: Briefcase,
    },
    {
      title: "Services",
      value: "24",
      growth: "+8%",
      icon: Wrench,
    },
    {
      title: "Published Blogs",
      value: "132",
      growth: "+32%",
      icon: FileText,
    },
  ];

  const recentLeads = [
    {
      name: "Rahul Sharma",
      service: "Roof Waterproofing",
      city: "Ahmedabad",
      status: "New",
    },
    {
      name: "Amit Patel",
      service: "Industrial Shed",
      city: "Surat",
      status: "Contacted",
    },
    {
      name: "Vikas Mehta",
      service: "SS Railing",
      city: "Rajkot",
      status: "Pending",
    },
    {
      name: "Deepak Joshi",
      service: "Metal Fabrication",
      city: "Vadodara",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-8">

      {/* TOP HERO */}
      <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] p-10 text-white shadow-2xl">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-2xl backdrop-blur-md">

              <TrendingUp size={18} />

              <span className="text-sm font-medium">
                Business Growth +28%
              </span>
            </div>

            <h1 className="text-5xl font-black mt-6 leading-tight">
              Welldone Admin
              <span className="block text-white/80">
                Dashboard
              </span>
            </h1>

            <p className="text-white/80 mt-5 text-lg max-w-2xl leading-relaxed">
              Monitor your leads, SEO blog traffic,
              services, projects, and complete
              business operations from one powerful
              dashboard.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-6 rounded-3xl min-w-[180px]">
              <p className="text-white/70 text-sm">
                Monthly Visitors
              </p>

              <h3 className="text-4xl font-black mt-3">
                28K
              </h3>

              <p className="text-green-300 mt-2 text-sm">
                +12% this month
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-6 rounded-3xl min-w-[180px]">
              <p className="text-white/70 text-sm">
                Active Leads
              </p>

              <h3 className="text-4xl font-black mt-3">
                124
              </h3>

              <p className="text-green-300 mt-2 text-sm">
                +18% this month
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-[30px] p-7 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center text-white shadow-lg">
                  <Icon size={28} />
                </div>

                <div className="flex items-center gap-1 text-green-500 font-semibold text-sm">
                  {item.growth}

                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="mt-7">
                <p className="text-gray-500 font-medium">
                  {item.title}
                </p>

                <h2 className="text-5xl font-black text-gray-800 mt-3">
                  {item.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Recent Leads */}
        <div className="xl:col-span-2 bg-white rounded-[30px] p-8 shadow-lg border border-gray-100">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-2xl font-black text-gray-800">
                Recent Leads
              </h2>

              <p className="text-gray-500 mt-1">
                Latest customer enquiries
              </p>
            </div>

            <button className="flex items-center gap-2 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
              <Eye size={18} />

              View All
            </button>
          </div>

          <div className="mt-8 overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="text-left text-gray-500 text-sm border-b">
                  <th className="pb-4">Client</th>
                  <th className="pb-4">Service</th>
                  <th className="pb-4">City</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>

                {recentLeads.map((lead, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-0"
                  >
                    <td className="py-5 font-semibold text-gray-800">
                      {lead.name}
                    </td>

                    <td className="py-5 text-gray-600">
                      {lead.service}
                    </td>

                    <td className="py-5 text-gray-600">
                      {lead.city}
                    </td>

                    <td className="py-5">

                      <span
                        className={`px-4 py-2 rounded-full text-xs font-semibold ${
                          lead.status === "New"
                            ? "bg-blue-100 text-blue-600"
                            : lead.status ===
                              "Contacted"
                            ? "bg-orange-100 text-orange-600"
                            : lead.status ===
                              "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {lead.status}
                      </span>

                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* SEO Card */}
          <div className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-black text-gray-800">
                SEO Overview
              </h2>

              <TrendingUp className="text-green-500" />
            </div>

            <div className="mt-8 space-y-6">

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Google Impressions</span>

                  <span className="font-bold">
                    82%
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[82%] h-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Keyword Rankings</span>

                  <span className="font-bold">
                    67%
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[67%] h-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Organic Traffic</span>

                  <span className="font-bold">
                    91%
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[91%] h-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] rounded-full"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Activity Card */}
          <div className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100">

            <div className="flex items-center gap-3">

              <CalendarDays className="text-[#b72d2c]" />

              <h2 className="text-2xl font-black text-gray-800">
                Recent Activity
              </h2>
            </div>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>

                <div>
                  <p className="font-semibold text-gray-800">
                    New blog published
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    2 hours ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

                <div>
                  <p className="font-semibold text-gray-800">
                    New lead received
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    4 hours ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-orange-500 mt-2"></div>

                <div>
                  <p className="font-semibold text-gray-800">
                    SEO updated
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Yesterday
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}