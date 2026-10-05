"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Bell,
  ChevronDown,
  LogOut,
  Search,
  Settings,
  UserRound,
} from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  const getPageTitle = () => {
    if (pathname?.includes("/dashboard")) {
      return {
        title: "Dashboard",
        description: "Overview & business activity",
      };
    }

    if (pathname?.includes("/blogs")) {
      return {
        title: "Blogs",
        description: "Manage website content",
      };
    }

    if (pathname?.includes("/categories")) {
      return {
        title: "Categories",
        description: "Organize blog content",
      };
    }

    if (pathname?.includes("/tags")) {
      return {
        title: "Tags",
        description: "Manage content tags",
      };
    }

    if (pathname?.includes("/enquiries")) {
      return {
        title: "Enquiries",
        description: "Manage customer enquiries",
      };
    }

    if (pathname?.includes("/seo")) {
      return {
        title: "SEO",
        description: "Search visibility & metadata",
      };
    }

    if (pathname?.includes("/settings")) {
      return {
        title: "Settings",
        description: "Administration settings",
      };
    }

    return {
      title: "Administration",
      description: "Welldone Metalworks",
    };
  };

  const page = getPageTitle();

  return (
    <header className="sticky top-0 z-40 h-[72px] border-b border-[#dceff7] bg-white/95 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LEFT
        ===================================================== */}

        <div className="flex min-w-0 items-center gap-4">

          {/* Mobile Brand */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center bg-[#12324a] text-[10px] font-black text-white">
              WM
            </div>

            <div className="hidden sm:block">
              <p className="text-[10px] font-black tracking-[0.08em] text-[#12324a]">
                WELLDONE
              </p>

              <p className="text-[8px] font-bold tracking-[0.16em] text-[#94a3b8]">
                METALWORKS
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-[#dceff7] lg:block" />

          {/* Page Information */}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-[#94a3b8] sm:block">
                Admin
              </span>

              <span className="hidden text-[#cbd5e1] sm:block">
                /
              </span>

              <h1 className="truncate text-base font-black tracking-[-0.02em] text-[#12324a] sm:text-lg">
                {page.title}
              </h1>
            </div>

            <p className="mt-0.5 hidden text-[10px] font-medium text-[#94a3b8] sm:block">
              {page.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            RIGHT
        ===================================================== */}

        <div className="flex items-center gap-2 sm:gap-3">

          {/* Search */}
          <div className="hidden h-10 w-[220px] items-center border border-[#dceff7] bg-[#f8fcfe] transition-all focus-within:border-[#1687c5] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#1687c5]/10 md:flex">
            <Search
              size={16}
              className="ml-3 shrink-0 text-[#94a3b8]"
            />

            <input
              type="text"
              placeholder="Search..."
              className="h-full w-full bg-transparent px-2.5 text-xs font-medium text-[#12324a] outline-none placeholder:text-[#94a3b8]"
            />

            <span className="mr-2 hidden border border-[#dceff7] bg-white px-1.5 py-0.5 text-[9px] font-bold text-[#94a3b8] lg:block">
              /
            </span>
          </div>

          {/* Mobile Search */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5] md:hidden"
            aria-label="Search"
          >
            <Search size={17} />
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center border border-[#dceff7] bg-white text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5]"
            aria-label="Notifications"
          >
            <Bell size={17} />

            {/* Notification dot */}
            <span className="absolute right-[9px] top-[8px] h-1.5 w-1.5 rounded-full bg-[#1687c5] ring-2 ring-white" />
          </button>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-[#dceff7] sm:block" />

          {/* =================================================
              PROFILE
          ================================================= */}

          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setProfileOpen((prev) => !prev)
              }
              className="flex h-10 items-center gap-2 border border-transparent px-1.5 transition hover:border-[#dceff7] hover:bg-[#f8fcfe] sm:px-2"
            >
              {/* Avatar */}
              <div className="flex h-8 w-8 items-center justify-center bg-[#12324a] text-[10px] font-black text-white">
                W
              </div>

              {/* Profile Text */}
              <div className="hidden text-left sm:block">
                <p className="text-[11px] font-black leading-4 text-[#12324a]">
                  Welldone Admin
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#94a3b8]">
                  Super Admin
                </p>
              </div>

              <ChevronDown
                size={14}
                className={`hidden text-[#94a3b8] transition-transform sm:block ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-[48px] w-[220px] border border-[#dceff7] bg-white p-2 shadow-[0_15px_45px_rgba(15,76,110,0.12)]">

                <div className="border-b border-[#edf5f8] px-3 py-3">
                  <p className="text-xs font-black text-[#12324a]">
                    Welldone Admin
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#94a3b8]">
                    Administrator account
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    router.push("/admin/settings");
                  }}
                  className="mt-1 flex w-full items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-[#475569] transition hover:bg-[#f8fcfe] hover:text-[#1687c5]"
                >
                  <Settings size={15} />
                  Account Settings
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    handleLogout();
                  }}
                  className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-xs font-semibold text-[#dc2626] transition hover:bg-red-50"
                >
                  <LogOut size={15} />
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Desktop Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="hidden h-10 items-center gap-2 border border-[#dceff7] px-3.5 text-xs font-bold text-[#64748b] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 lg:flex"
          >
            <LogOut size={15} />
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}