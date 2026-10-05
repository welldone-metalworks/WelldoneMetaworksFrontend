"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Edit3,
  FileText,
  Loader2,
  RefreshCw,
} from "lucide-react";

import { getBlogs } from "@/lib/api";
import BlogForm from "../../components/BlogForm";

const EditBlogPage = () => {
  const params = useParams();
  const router = useRouter();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await getBlogs();

      const foundBlog = res.data.find(
        (item) => item._id === params.id
      );

      if (!foundBlog) {
        setError(
          "The blog article you are looking for could not be found."
        );
        return;
      }

      setBlog(foundBlog);
    } catch (error) {
      console.error("Failed to fetch blog:", error);

      setError(
        error?.response?.data?.message ||
          "Unable to load this blog. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchBlog();
    }
  }, [params?.id]);

  /* =========================================================
     LOADING
  ========================================================= */
  if (loading) {
    return (
      <div className="space-y-6">
        <section className="relative overflow-hidden border border-[#dceff7] bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1687c5_1px,transparent_1px),linear-gradient(to_bottom,#1687c5_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.035]" />

          <div className="relative flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf7fd]">
              <Edit3 className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>
              <div className="h-3 w-28 animate-pulse rounded-full bg-[#e8f3f8]" />
              <div className="mt-3 h-7 w-52 animate-pulse rounded-lg bg-[#e8f3f8]" />
            </div>
          </div>
        </section>

        <div className="flex min-h-[500px] items-center justify-center border border-[#dceff7] bg-white">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff9fe]">
              <Loader2 className="h-6 w-6 animate-spin text-[#1687c5]" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#12324a]">
              Loading article
            </h2>

            <p className="mt-1 text-sm text-[#64748b]">
              Preparing the blog editor...
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     NOT FOUND / ERROR
  ========================================================= */
  if (error || !blog) {
    return (
      <div className="space-y-6">
        <section className="relative overflow-hidden border border-[#dceff7] bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1687c5_1px,transparent_1px),linear-gradient(to_bottom,#1687c5_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.035]" />

          <div className="relative flex flex-col gap-5 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <button
                type="button"
                onClick={() => router.push("/admin/blogs")}
                className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#12324a] transition hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1687c5]">
                  <BookOpen className="h-3.5 w-3.5" />
                  Blog Management
                  <span className="text-[#94a3b8]">/</span>
                  Edit
                </div>

                <h1 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                  Edit Blog
                </h1>

                <p className="mt-1.5 text-sm leading-6 text-[#64748b]">
                  Update your existing article and SEO settings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border border-[#dceff7] bg-white p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eff9fe]">
            <FileText className="h-7 w-7 text-[#1687c5]" />
          </div>

          <h2 className="mt-5 text-xl font-bold text-[#12324a]">
            Blog not found
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748b]">
            {error ||
              "The requested blog article does not exist or may have been removed."}
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={fetchBlog}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dceff7] bg-white px-5 py-3 text-sm font-bold text-[#12324a] transition hover:border-[#1687c5] hover:bg-[#eff9fe]"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/blogs")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1687c5] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,135,197,0.22)] transition hover:bg-[#0b6fa8]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </button>
          </div>
        </section>
      </div>
    );
  }

  /* =========================================================
     EDIT BLOG
  ========================================================= */
  return (
    <div className="space-y-6">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <section className="relative overflow-hidden border border-[#dceff7] bg-white">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1687c5_1px,transparent_1px),linear-gradient(to_bottom,#1687c5_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.035]" />

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[30px] border-[#eff9fe]" />

        <div className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT */}
          <div className="flex items-start gap-4">
            <button
              type="button"
              onClick={() => router.push("/admin/blogs")}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#12324a] transition hover:border-[#1687c5] hover:bg-[#eff9fe] hover:text-[#1687c5]"
              aria-label="Back to blogs"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex min-w-0 items-start gap-3">
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe] sm:flex">
                <Edit3 className="h-5 w-5 text-[#1687c5]" />
              </div>

              <div className="min-w-0">
                <div className="mb-1.5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1687c5]">
                  <span>Blog Management</span>
                  <span className="text-[#94a3b8]">/</span>
                  <span className="text-[#64748b]">
                    Edit Article
                  </span>
                </div>

                <h1 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                  Edit Blog
                </h1>

                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#64748b]">
                  Update your article content, featured image,
                  publishing settings, and SEO configuration.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dceff7] bg-white px-3.5 py-2 text-xs font-bold text-[#12324a]">
              <span className="h-2 w-2 rounded-full bg-[#1687c5]" />
              Editing Mode
            </div>

            <div className="hidden items-center gap-2 rounded-full bg-[#f8fcfe] px-3.5 py-2 text-xs font-semibold text-[#64748b] sm:inline-flex">
              <FileText className="h-3.5 w-3.5 text-[#1687c5]" />
              Existing Article
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT ARTICLE
      ===================================================== */}
      <section className="border border-[#dceff7] bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1687c5]">
              Currently Editing
            </p>

            <h2 className="mt-1 truncate text-lg font-bold text-[#12324a]">
              {blog.title || "Untitled Blog"}
            </h2>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748b]">
              {blog.slug && (
                <span>
                  Slug:{" "}
                  <span className="font-medium text-[#475569]">
                    /{blog.slug}
                  </span>
                </span>
              )}

              {blog.status && (
                <span className="capitalize">
                  Status:{" "}
                  <span className="font-semibold text-[#12324a]">
                    {blog.status}
                  </span>
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => router.push("/admin/blogs")}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#dceff7] bg-white px-4 py-2.5 text-sm font-bold text-[#12324a] transition hover:border-[#1687c5] hover:bg-[#eff9fe]"
          >
            <ArrowLeft className="h-4 w-4" />
            All Blogs
          </button>
        </div>
      </section>

      {/* =====================================================
          BLOG FORM
      ===================================================== */}
      <BlogForm
        initialData={blog}
        isEdit={true}
      />
    </div>
  );
};

export default EditBlogPage;