"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

import api from "@/lib/api";

export default function AdminRegister() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setSuccess("");

    if (form.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/register", {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });

      setSuccess(
        "Account created successfully. Redirecting..."
      );

      setTimeout(() => {
        router.push("/admin/login");
      }, 1200);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Unable to create the account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-full overflow-hidden bg-white">
      <div className="grid h-full w-full lg:grid-cols-[46%_54%]">

        {/* =====================================================
            LEFT PANEL
        ===================================================== */}
        <section className="relative hidden h-full overflow-hidden bg-[#12324a] lg:block">

          <div className="absolute left-0 top-0 h-full w-1 bg-[#1687c5]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Circles */}
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

            {/* Main */}
            <div className="max-w-[520px]">

              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#46a9d8]">

                <span className="h-px w-8 bg-[#1687c5]" />

                Administration
              </div>

              <h1 className="text-[42px] font-black leading-[1.05] tracking-[-0.045em] text-white xl:text-[52px]">

                One workspace,
                <span className="block text-[#46a9d8]">
                  complete control.
                </span>

              </h1>

              <p className="mt-6 max-w-[460px] text-sm leading-7 text-white/55 xl:text-base">
                Set up your administrator access and manage
                the digital operations of Welldone Metalworks
                from one professional workspace.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">

                <Benefit
                  title="Manage SEO Blogs"
                  text="Create, edit and publish website content."
                />

                <Benefit
                  title="Manage Enquiries"
                  text="Keep customer requests organized."
                />

                <Benefit
                  title="Manage Website Content"
                  text="Control projects, services and gallery."
                />

                <Benefit
                  title="Secure Administration"
                  text="Protected access to business tools."
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
            RIGHT REGISTER
        ===================================================== */}
        <section className="relative flex h-full items-center justify-center overflow-hidden bg-[#f8fcfe] px-6">

          <div className="absolute left-0 top-0 h-1 w-full bg-[#1687c5] lg:hidden" />

          <div className="w-full max-w-[430px]">

            {/* Mobile brand */}
            <div className="mb-6 flex items-center gap-3 lg:hidden">

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
            <div className="mb-5">

              <div className="mb-4 flex h-11 w-11 items-center justify-center border border-[#dceff7] bg-white text-[#1687c5] shadow-sm">
                <User size={20} />
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1687c5]">
                Administrator Setup
              </p>

              <h2 className="mt-2 text-[32px] font-black tracking-[-0.04em] text-[#12324a]">
                Create account.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                Set up your secure administration credentials.
              </p>

            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 border-l-2 border-red-500 bg-red-50 px-4 py-2.5 text-xs leading-5 text-red-700">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="mb-4 flex items-center gap-2 border-l-2 border-green-500 bg-green-50 px-4 py-2.5 text-xs leading-5 text-green-700">

                <CheckCircle2 size={15} />

                {success}

              </div>
            )}

            {/* Form */}
            <form
              onSubmit={submit}
              className="space-y-3.5"
            >

              {/* Name */}
              <Field
                label="Full Name"
                icon={<User size={16} />}
              >
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  autoComplete="name"
                  required
                  className="h-full w-full bg-transparent px-3 text-sm text-[#12324a] outline-none placeholder:text-[#94a3b8]"
                />
              </Field>

              {/* Email */}
              <Field
                label="Email Address"
                icon={<Mail size={16} />}
              >
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@example.com"
                  autoComplete="email"
                  required
                  className="h-full w-full bg-transparent px-3 text-sm text-[#12324a] outline-none placeholder:text-[#94a3b8]"
                />
              </Field>

              {/* Password */}
              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#12324a]">
                  Password
                </label>

                <div className="flex h-12 items-center border border-[#dceff7] bg-white transition-all focus-within:border-[#1687c5] focus-within:ring-4 focus-within:ring-[#1687c5]/10">

                  <Lock
                    size={16}
                    className="ml-4 text-[#94a3b8]"
                  />

                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    autoComplete="new-password"
                    minLength={6}
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
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>

                </div>

              </div>

              {/* Security note */}
              <div className="flex items-start gap-3 border border-[#dceff7] bg-white px-4 py-3">

                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-[#1687c5]"
                />

                <p className="text-[10px] leading-5 text-[#64748b]">
                  Use a strong password and keep your administrator
                  credentials private.
                </p>

              </div>

              {/* Terms */}
              <label className="flex items-start gap-2.5 pt-1 text-[10px] leading-4 text-[#64748b]">

                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#1687c5]"
                />

                <span>
                  I understand that this account provides access
                  to the Welldone Metalworks administration system.
                </span>

              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex h-12 w-full items-center justify-center gap-3 bg-[#12324a] text-sm font-bold text-white transition-all hover:bg-[#1687c5] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create administrator account

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

            </form>

            {/* Login */}
            <div className="mt-5 border-t border-[#dceff7] pt-4 text-center">

              <p className="text-xs text-[#64748b]">
                Already have an account?
              </p>

              <Link
                href="/admin/login"
                className="mt-1.5 inline-flex items-center gap-2 text-xs font-black text-[#1687c5] hover:text-[#0b6fa8]"
              >
                Sign in to dashboard
                <ArrowRight size={14} />
              </Link>

            </div>



          </div>

        </section>

      </div>
    </main>
  );
}

/* ============================================================
   FIELD
============================================================ */

function Field({ label, icon, children }) {
  return (
    <div>

      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#12324a]">
        {label}
      </label>

      <div className="flex h-12 items-center border border-[#dceff7] bg-white transition-all focus-within:border-[#1687c5] focus-within:ring-4 focus-within:ring-[#1687c5]/10">

        <span className="ml-4 shrink-0 text-[#94a3b8]">
          {icon}
        </span>

        {children}

      </div>

    </div>
  );
}

/* ============================================================
   BENEFIT
============================================================ */

function Benefit({ title, text }) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[#1687c5]/30 text-[#46a9d8]">
        <Check size={13} />
      </div>

      <div>

        <h3 className="text-xs font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-white/40">
          {text}
        </p>

      </div>

    </div>
  );
}