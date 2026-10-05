"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Plus,
  RefreshCw,
  Search,
  TrendingUp,
} from "lucide-react";

import { getBlogs } from "@/lib/api";
import BlogTable from "./components/BlogTable";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await getBlogs();

      setBlogs(res.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const totalBlogs = blogs.length;

  const publishedBlogs = blogs.filter(
    (blog) =>
      blog.status === "published" ||
      blog.published === true
  ).length;

  const draftBlogs = blogs.filter(
    (blog) =>
      blog.status === "draft" ||
      blog.published === false
  ).length;

  return (
    <div className="space-y-6">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="relative overflow-hidden border border-[#dceff7] bg-white">

        {/* Industrial grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full border border-[#1687c5]/10" />

        <div className="pointer-events-none absolute -bottom-36 right-40 h-72 w-72 rounded-full border border-[#1687c5]/10" />

        <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="min-w-0">

            <div className="mb-4 inline-flex items-center gap-2 border border-[#bfe4f3] bg-[#eff9fe] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#1687c5]">
              <BookOpen size={13} />

              Content Management
            </div>

            <h1 className="text-3xl font-black tracking-[-0.045em] text-[#12324a] sm:text-4xl">
              Blog Management
            </h1>

            <p className="mt-2 max-w-[650px] text-sm leading-6 text-[#64748b]">
              Create, manage and publish SEO-focused content for
              the Welldone Metalworks website.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">

              <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15803d]" />
                Content system operational
              </div>

              <div className="hidden h-4 w-px bg-[#dceff7] sm:block" />

              <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                <TrendingUp size={14} className="text-[#1687c5]" />
                SEO content management
              </div>

            </div>
          </div>

          {/* ACTION */}
          <Link
            href="/admin/blogs/create"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#12324a] px-5 py-3.5 text-xs font-black text-white transition-all duration-200 hover:bg-[#1687c5]"
          >
            <Plus size={17} />

            Create Blog

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <BlogStat
          icon={FileText}
          label="Total Blogs"
          value={totalBlogs}
          description="All website articles"
        />

        <BlogStat
          icon={TrendingUp}
          label="Published"
          value={publishedBlogs}
          description="Live on website"
          accent="green"
        />

        <BlogStat
          icon={BookOpen}
          label="Drafts"
          value={draftBlogs}
          description="Work in progress"
          accent="orange"
        />

      </section>

      {/* =====================================================
          TABLE TOOLBAR
      ===================================================== */}

      <section className="border border-[#dceff7] bg-white">

        <div className="flex flex-col gap-4 border-b border-[#dceff7] p-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="flex items-center gap-2">

              <div className="h-6 w-1 bg-[#1687c5]" />

              <h2 className="text-base font-black tracking-[-0.02em] text-[#12324a]">
                Website Articles
              </h2>

            </div>

            <p className="mt-1 pl-3 text-[11px] text-[#64748b]">
              Manage your published and draft blog content.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">

            {/* Search visual */}
            <div className="flex h-10 min-w-[230px] items-center border border-[#dceff7] bg-[#f8fcfe] px-3 transition focus-within:border-[#1687c5]">
              <Search
                size={15}
                className="shrink-0 text-[#94a3b8]"
              />

              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full bg-transparent px-2.5 text-xs font-medium text-[#12324a] outline-none placeholder:text-[#94a3b8]"
              />
            </div>

            {/* Refresh */}
            <button
              type="button"
              onClick={fetchBlogs}
              disabled={loading}
              className="flex h-10 items-center justify-center gap-2 border border-[#dceff7] bg-white px-3 text-xs font-bold text-[#64748b] transition hover:border-[#1687c5] hover:text-[#1687c5] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={14}
                className={loading ? "animate-spin" : ""}
              />

              Refresh
            </button>

          </div>
        </div>

        {/* =================================================
            EXISTING BLOG TABLE
        ================================================= */}

        <BlogTable
          blogs={blogs}
          loading={loading}
          refreshBlogs={fetchBlogs}
        />

      </section>

    </div>
  );
};

export default BlogsPage;

/* ============================================================
   BLOG STAT
============================================================ */

function BlogStat({
  icon: Icon,
  label,
  value,
  description,
  accent = "blue",
}) {
  const accentStyles = {
    blue: {
      icon: "border-[#bfe4f3] bg-[#eff9fe] text-[#1687c5]",
      dot: "bg-[#1687c5]",
    },

    green: {
      icon: "border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d]",
      dot: "bg-[#15803d]",
    },

    orange: {
      icon: "border-[#fed7aa] bg-[#fff7ed] text-[#c2410c]",
      dot: "bg-[#c2410c]",
    },
  };

  const styles = accentStyles[accent];

  return (
    <div className="border border-[#dceff7] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bfe4f3] hover:shadow-[0_12px_35px_rgba(15,76,110,0.07)]">

      <div className="flex items-start justify-between">

        <div
          className={`flex h-10 w-10 items-center justify-center border ${styles.icon}`}
        >
          <Icon size={18} />
        </div>

        <span
          className={`mt-2 h-1.5 w-1.5 rounded-full ${styles.dot}`}
        />

      </div>

      <div className="mt-5">

        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#94a3b8]">
          {label}
        </p>

        <div className="mt-1 flex items-end justify-between gap-3">

          <h3 className="text-3xl font-black tracking-[-0.04em] text-[#12324a]">
            {value}
          </h3>

          <span className="pb-1 text-[10px] font-medium text-[#94a3b8]">
            {description}
          </span>

        </div>

      </div>

    </div>
  );
}