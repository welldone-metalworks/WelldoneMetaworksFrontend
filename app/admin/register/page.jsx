"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function AdminRegister() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      alert("Admin registered");
      router.push("/admin/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-[var(--color-accent)]">
          Admin Register
        </h2>

        <div className="mt-6 space-y-4">
          <input
            placeholder="Name"
            required
            className="w-full border px-4 py-2 rounded-lg"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
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

          <button className="w-full bg-[var(--color-accent)] text-white py-2 rounded-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
