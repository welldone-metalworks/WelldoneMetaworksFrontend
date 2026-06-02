"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import api from "@/lib/api";

export default function AdminLogin() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "admin_token",
        res.data.token
      );

      router.push("/admin/dashboard");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#981d13] via-[#b72d2c] to-[#cd2b14]">

        {/* Background Glow */}
        <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] left-[-100px] w-[350px] h-[350px] bg-black/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-20 text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl w-fit mb-8">

            <ShieldCheck size={20} />

            <span className="font-medium">
              Secure Business Dashboard
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-black leading-tight">
            Welldone
            <span className="block text-white/90">
              Admin Portal
            </span>
          </h1>

          <p className="text-lg text-white/80 mt-8 max-w-xl leading-relaxed">
            Manage SEO blogs, customer leads,
            gallery, projects, services, and complete
            business operations from one powerful
            dashboard.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5 mt-14">

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                SEO Blog CMS
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Publish high-ranking SEO content.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                Leads Tracking
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Manage all customer enquiries.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                Analytics
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Monitor business growth instantly.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-3xl">
              <h3 className="font-bold text-lg">
                Secure Access
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Protected authentication system.
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
                Welcome Back
              </h2>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Login to access your admin dashboard
                and manage your business platform.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={submit}
              className="mt-10 space-y-5"
            >

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
                    placeholder="Enter password"
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

              {/* Options */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />

                  Remember me
                </label>

                <button
                  type="button"
                  className="text-[#b72d2c] font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Button */}
              <button
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
              >
                {loading
                  ? "Logging in..."
                  : "Login to Dashboard"}

                {!loading && (
                  <ArrowRight size={20} />
                )}
              </button>
            </form>

            {/* Register */}
            <div className="mt-8 text-center">

              <p className="text-gray-500">
                Don’t have an account?
              </p>

              <Link
                href="/admin/register"
                className="inline-flex items-center gap-2 mt-3 font-bold text-[#b72d2c] hover:underline"
              >
                Create Admin Account

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