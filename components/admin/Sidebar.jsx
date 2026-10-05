"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Tags,
  Mail,
  Search,
  Settings,
  ChevronRight,
  LogOut,
  ExternalLink,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Blogs",
    path: "/admin/blogs",
    icon: FileText,
  },
  {
    name: "Categories",
    path: "/admin/categories",
    icon: FolderOpen,
  },
  {
    name: "Tags",
    path: "/admin/tags",
    icon: Tags,
  },
  {
    name: "Enquiries",
    path: "/admin/enquiries",
    icon: Mail,
  },
  {
    name: "SEO",
    path: "/admin/seo",
    icon: Search,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[248px] overflow-hidden border-r border-white/10 bg-[#12324a] text-white lg:flex lg:flex-col">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#46a9d8]/10" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-[#46a9d8]/10" />

      {/* =====================================================
          BRAND
      ===================================================== */}

      <div className="relative z-10 border-b border-white/10 px-5 py-5">

        <div className="flex items-center gap-3">

          {/* Logo */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#1687c5] text-xs font-black tracking-tight text-white shadow-[0_8px_25px_rgba(22,135,197,0.25)]">
            WM
          </div>

          {/* Brand */}
          <div className="min-w-0">
            <h2 className="truncate text-sm font-black tracking-[0.04em] text-white">
              WELLDONE
            </h2>

            <p className="mt-0.5 text-[9px] font-bold tracking-[0.2em] text-white/40">
              METALWORKS
            </p>
          </div>
        </div>

        {/* Admin label */}
        <div className="mt-5 flex items-center justify-between border border-white/10 bg-white/[0.035] px-3 py-2.5">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-white/35">
              Workspace
            </p>

            <p className="mt-0.5 text-[11px] font-bold text-white/75">
              Administration
            </p>
          </div>

          <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider text-[#46a9d8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
            Live
          </span>
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <div className="relative z-10 px-4 pt-6">

        <p className="mb-3 px-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
          Main Navigation
        </p>

      </div>

      <nav className="relative z-10 flex-1 overflow-y-auto px-4 pb-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">

        <div className="space-y-1">

          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.path ||
              pathname.startsWith(`${item.path}/`);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative flex h-11 items-center gap-3 overflow-hidden px-3 transition-all duration-200 ${
                  isActive
                    ? "bg-[#1687c5] text-white shadow-[0_8px_25px_rgba(22,135,197,0.18)]"
                    : "text-white/55 hover:bg-white/[0.055] hover:text-white"
                }`}
              >

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-0.5 bg-[#46a9d8]" />
                )}

                {/* Icon */}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/45 group-hover:text-[#46a9d8]"
                  }`}
                >
                  <Icon size={17} strokeWidth={1.9} />
                </span>

                {/* Label */}
                <span
                  className={`flex-1 text-xs font-bold ${
                    isActive
                      ? "text-white"
                      : "text-white/60 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {/* Arrow */}
                <ChevronRight
                  size={14}
                  className={`transition-all ${
                    isActive
                      ? "translate-x-0 text-white/80"
                      : "-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-white/50"
                  }`}
                />
              </Link>
            );
          })}

        </div>
      </nav>

      {/* =====================================================
          WEBSITE LINK
      ===================================================== */}

      <div className="relative z-10 px-4 pb-3">

        <Link
          href="/"
          target="_blank"
          className="group flex items-center gap-3 border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-[#1687c5]/40 hover:bg-white/[0.06]"
        >
          <div className="flex h-8 w-8 items-center justify-center text-white/45 group-hover:text-[#46a9d8]">
            <ExternalLink size={15} />
          </div>

          <div className="flex-1">
            <p className="text-[10px] font-bold text-white/65 group-hover:text-white">
              View Website
            </p>

            <p className="mt-0.5 text-[8px] text-white/30">
              Open public website
            </p>
          </div>

          <ChevronRight
            size={13}
            className="text-white/20 group-hover:text-white/50"
          />
        </Link>

      </div>

      {/* =====================================================
          FOOTER / ADMIN
      ===================================================== */}

      <div className="relative z-10 border-t border-white/10 p-4">

        {/* Admin identity */}
        <div className="mb-3 flex items-center gap-3 px-1">

          <div className="flex h-8 w-8 items-center justify-center bg-white/10 text-[10px] font-black text-white">
            W
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-black text-white/80">
              Welldone Admin
            </p>

            <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-white/30">
              Super Admin
            </p>
          </div>

          <span className="h-1.5 w-1.5 rounded-full bg-[#46d47a]" />
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="group flex h-10 w-full items-center justify-center gap-2 border border-white/10 bg-white/[0.035] text-[11px] font-bold text-white/50 transition hover:border-red-400/20 hover:bg-red-500/10 hover:text-red-300"
        >
          <LogOut
            size={15}
            className="transition-transform group-hover:-translate-x-0.5"
          />

          Sign Out
        </button>

      </div>
    </aside>
  );
}