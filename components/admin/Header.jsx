"use client";

import { useRouter } from "next/navigation";

import {
  Bell,
  Search,
  LogOut,
} from "lucide-react";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");

    router.push("/admin/login");
  };

  return (
    <header className="h-[85px] bg-white border-b border-gray-200 px-8 flex items-center justify-between">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Welcome back to Welldone Admin Panel
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-3 rounded-2xl w-[260px]">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none px-3 text-sm w-full"
          />
        </div>

        {/* Notification */}
        <button className="relative w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
          <Bell size={20} className="text-gray-700" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="hidden md:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-2xl">
          
          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
            W
          </div>

          <div>
            <h4 className="font-semibold text-sm">
              Welldone Admin
            </h4>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-red-500/20"
        >
          <LogOut size={18} />

          <span className="hidden md:block">
            Logout
          </span>
        </button>
      </div>
    </header>
  );
}