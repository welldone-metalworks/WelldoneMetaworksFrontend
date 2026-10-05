"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Check,
} from "lucide-react";

import api from "@/lib/api";

export default function AdminLogin() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", {
        email: form.email.trim(),
        password: form.password,
      });

      if (!res?.data?.token) {
        throw new Error("Authentication token not received.");
      }

      localStorage.setItem("admin_token", res.data.token);

      router.push("/admin/dashboard");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <div className="grid h-full w-full lg:grid-cols-[46%_54%]">

        {/* =====================================================
            LEFT — BRAND / BUSINESS PANEL
        ===================================================== */}
        <section className="relative hidden h-full overflow-hidden bg-[#12324a] lg:block">

          {/* Accent line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#1687c5]" />

          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Decorative circles */}
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#1687c5]/20" />

          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#1687c5]/10 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between px-10 py-8 xl:px-14">

            {/* Brand */}
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center bg-[#1687c5] text-sm font-black text-white">
                WM
              </div>

              <div>
                <div className="text-sm font-bold tracking-wide text-white">
                  WELLDONE
                </div>

                <div className="text-[10px] font-semibold tracking-[0.2em] text-white/45">
                  METALWORKS
                </div>
              </div>

            </div>

            {/* Main content */}
            <div className="max-w-[520px]">

              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#46a9d8]">

                <span className="h-px w-8 bg-[#1687c5]" />

                Administration
              </div>

              <h1 className="text-[42px] font-black leading-[1.05] tracking-[-0.045em] text-white xl:text-[52px]">

                Business control,
                <span className="block text-[#46a9d8]">
                  built smarter.
                </span>

              </h1>

              <p className="mt-6 max-w-[460px] text-sm leading-7 text-white/55 xl:text-base">
                A centralized workspace for managing website
                content, SEO blogs, enquiries, projects and
                business operations.
              </p>

              {/* Feature list */}
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">

                <Feature
                  title="Blog Management"
                  text="Create and publish SEO content."
                />

                <Feature
                  title="Enquiries"
                  text="Manage customer enquiries."
                />

                <Feature
                  title="Website Content"
                  text="Update business information."
                />

                <Feature
                  title="Secure Access"
                  text="Protected administration system."
                />

              </div>

            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/35">

              <span>Welldone Metalworks</span>

              <span>Admin System / 2026</span>

            </div>

          </div>
        </section>

        {/* =====================================================
            RIGHT — LOGIN
        ===================================================== */}
        <section className="relative flex h-full items-center justify-center overflow-hidden bg-[#f8fcfe] px-6">

          {/* Top accent */}
          <div className="absolute left-0 top-0 h-1 w-full bg-[#1687c5] lg:hidden" />

          <div className="w-full max-w-[430px]">

            {/* Mobile logo */}
            <div className="mb-7 flex items-center gap-3 lg:hidden">

              <div className="flex h-10 w-10 items-center justify-center bg-[#1687c5] text-xs font-black text-white">
                WM
              </div>

              <div>
                <div className="text-sm font-bold text-[#12324a]">
                  Welldone Metalworks
                </div>

                <div className="text-[9px] font-bold tracking-[0.18em] text-[#64748b]">
                  ADMINISTRATION
                </div>
              </div>

            </div>

            {/* Header */}
            <div className="mb-7">

              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#dceff7] bg-white text-[#1687c5] shadow-sm">
                <ShieldCheck size={21} />
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1687c5]">
                Secure Access
              </p>

              <h2 className="mt-2 text-[34px] font-black tracking-[-0.04em] text-[#12324a]">
                Welcome back.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                Sign in to continue to your administration
                workspace.
              </p>

            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 border-l-2 border-red-500 bg-red-50 px-4 py-3 text-xs leading-5 text-red-700">
                {error}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={submit}
              className="space-y-4"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#12324a]"
                >
                  Email Address
                </label>

                <div className="flex h-12 items-center border border-[#dceff7] bg-white transition-all focus-within:border-[#1687c5] focus-within:ring-4 focus-within:ring-[#1687c5]/10">

                  <Mail
                    size={17}
                    className="ml-4 text-[#94a3b8]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="admin@example.com"
                    autoComplete="email"
                    required
                    className="h-full w-full bg-transparent px-3 text-sm text-[#12324a] outline-none placeholder:text-[#94a3b8]"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#12324a]"
                >
                  Password
                </label>

                <div className="flex h-12 items-center border border-[#dceff7] bg-white transition-all focus-within:border-[#1687c5] focus-within:ring-4 focus-within:ring-[#1687c5]/10">

                  <Lock
                    size={17}
                    className="ml-4 text-[#94a3b8]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="h-full w-full bg-transparent px-3 text-sm text-[#12324a] outline-none placeholder:text-[#94a3b8]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="mr-3 text-[#94a3b8] transition hover:text-[#1687c5]"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>

              {/* Options */}
              <div className="flex items-center justify-between pt-1">

                <label className="flex items-center gap-2 text-xs text-[#64748b]">

                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-[#1687c5]"
                  />

                  Remember me

                </label>

                <button
                  type="button"
                  className="text-xs font-bold text-[#1687c5] hover:text-[#0b6fa8]"
                >
                  Forgot password?
                </button>

              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-2 flex h-12 w-full items-center justify-center gap-3 bg-[#12324a] text-sm font-bold text-white transition-all hover:bg-[#1687c5] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

            </form>

            {/* Register */}
            <div className="mt-7 border-t border-[#dceff7] pt-5 text-center">

              <p className="text-xs text-[#64748b]">
                Don't have an admin account?
              </p>

              <Link
                href="/admin/register"
                className="mt-2 inline-flex items-center gap-2 text-xs font-black text-[#1687c5] hover:text-[#0b6fa8]"
              >
                Create administrator account
                <ArrowRight size={14} />
              </Link>

            </div>

            <p className="mt-6 text-center text-[10px] text-[#94a3b8]">
              © 2026 Welldone Metalworks · Secure Administration
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div className="group">

      <div className="flex items-center gap-2">

        <span className="flex h-5 w-5 items-center justify-center border border-[#1687c5]/30 text-[#46a9d8]">
          <Check size={11} />
        </span>

        <h3 className="text-xs font-bold text-white">
          {title}
        </h3>

      </div>

      <p className="mt-1 pl-7 text-[10px] leading-4 text-white/40">
        {text}
      </p>

    </div>
  );
}