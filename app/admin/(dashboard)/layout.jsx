"use client";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fcfe]">

      {/* =====================================================
          FIXED SIDEBAR
      ===================================================== */}

      <Sidebar />

      {/* =====================================================
          MAIN APPLICATION AREA
      ===================================================== */}

      <div className="min-h-screen min-w-0 lg:ml-[248px]">

        {/* =================================================
            HEADER
        ================================================= */}

        <Header />

        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <main className="min-w-0 px-4 py-5 sm:px-6 lg:px-8 lg:py-6">

          <div className="mx-auto w-full max-w-[1280px]">
            {children}
          </div>

        </main>

      </div>
    </div>
  );
}