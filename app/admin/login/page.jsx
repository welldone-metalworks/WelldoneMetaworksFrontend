"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("admin_token", res.data.token);
      router.push("/admin/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-dark)]">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-[var(--color-primary)]">
          Admin Login
        </h2>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border px-4 py-2 rounded-lg"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full border px-4 py-2 rounded-lg"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            disabled={loading}
            className="w-full bg-[var(--color-primary)] text-white py-2 rounded-lg hover:opacity-90"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
