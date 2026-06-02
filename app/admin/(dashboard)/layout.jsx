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
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}