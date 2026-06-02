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
  User,
} from "lucide-react";

import api from "@/lib/api";

export default function AdminRegister() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await api.post("/auth/register", form);

      alert("Admin Registered Successfully");

      router.push("/admin/login");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Register failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#981d13] via-[#b72d2c] to-[#cd2b14]">

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-80px] w-[320px] h-[320px] bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] left-[-80px] w-[350px] h-[350px] bg-black/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-20 text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-3 rounded-2xl w-fit mb-8">

            <ShieldCheck size={20} />

            <span className="font-medium">
              Business Management System
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-black leading-tight">
            Create Your
            <span className="block text-white/90">
              Admin Account
            </span>
          </h1>

          <p className="text-lg text-white/80 mt-8 max-w-xl leading-relaxed">
            Register securely and access your
            professional business dashboard for
            managing SEO blogs, customer leads,
            projects, services, and analytics.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5 mt-14">

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                SEO Blog CMS
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Manage high-ranking SEO blogs.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                Customer Leads
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Track all enquiry submissions.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                Analytics
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Monitor business growth metrics.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                Secure Access
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Protected admin authentication.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          {/* Card */}
          <div className="bg-white shadow-2xl rounded-[35px] p-10 border border-gray-100">

            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center text-white text-4xl font-black shadow-xl">
                W
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mt-8">
              <h2 className="text-4xl font-black text-gray-800">
                Create Account
              </h2>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Register to access your professional
                admin dashboard.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={submit}
              className="mt-10 space-y-5"
            >

              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Full Name
                </label>

                <div className="flex items-center h-14 border border-gray-200 rounded-2xl px-4 focus-within:border-[#b72d2c] transition-all">

                  <User
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Enter full name"
                    required
                    className="w-full px-3 outline-none bg-transparent"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Email Address
                </label>

                <div className="flex items-center h-14 border border-gray-200 rounded-2xl px-4 focus-within:border-[#b72d2c] transition-all">

                  <Mail
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-3 outline-none bg-transparent"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Password
                </label>

                <div className="flex items-center h-14 border border-gray-200 rounded-2xl px-4 focus-within:border-[#b72d2c] transition-all">

                  <Lock
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create password"
                    required
                    className="w-full px-3 outline-none bg-transparent"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password:
                          e.target.value,
                      })
                    }
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 text-sm text-gray-600">

                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />

                <p>
                  I agree to the terms and conditions
                  and admin access policies.
                </p>
              </div>

              {/* Button */}
              <button
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
              >
                {loading
                  ? "Creating Account..."
                  : "Create Admin Account"}

                {!loading && (
                  <ArrowRight size={20} />
                )}
              </button>
            </form>

            {/* Login */}
            <div className="mt-8 text-center">

              <p className="text-gray-500">
                Already have an account?
              </p>

              <Link
                href="/admin/login"
                className="inline-flex items-center gap-2 mt-3 font-bold text-[#b72d2c] hover:underline"
              >
                Login Here

                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            © 2026 Welldone Metalworks. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}