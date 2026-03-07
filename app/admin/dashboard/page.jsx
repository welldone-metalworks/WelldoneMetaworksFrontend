"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Total Leads</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Projects</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Services</h3>
          <p className="text-2xl mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
