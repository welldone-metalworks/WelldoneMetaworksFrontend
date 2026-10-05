import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Hash,
  Sparkles,
} from "lucide-react";

import BlogCard from "@/components/Blog/BlogCard";
import BlogSidebar from "@/components/Blog/BlogSidebar";

import serverApi from "@/lib/serverApi";

/* =========================================================
   HELPERS
========================================================= */

function formatTagName(slug = "") {
  return slug
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const slug = resolvedParams?.slug || "";

  const tagName = formatTagName(slug);

  return {
    title: `#${tagName} | Metal Fabrication Blog | Welldone Metalworks`,

    description: `Explore ${tagName.toLowerCase()} articles, fabrication insights, project guidance and practical metalwork information from Welldone Metalworks.`,

    alternates: {
      canonical: `https://welldone-metalworks.in/blog/tag/${slug}`,
    },

    openGraph: {
      title: `#${tagName} | Metal Fabrication Blog | Welldone Metalworks`,
      description: `Explore ${tagName.toLowerCase()} articles and metal fabrication insights from Welldone Metalworks.`,
      url: `https://welldone-metalworks.in/blog/tag/${slug}`,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `#${tagName} | Welldone Metalworks`,
      description: `Explore ${tagName.toLowerCase()} articles and metal fabrication insights.`,
    },
  };
}

/* =========================================================
   FETCH TAG BLOGS
========================================================= */

async function fetchTagBlogs(slug) {
  try {
    const [blogsRes, categoriesRes, tagsRes] =
      await Promise.all([
        serverApi.get(`/blogs/tag/${slug}`),
        serverApi.get("/categories"),
        serverApi.get("/tags"),
      ]);

    const blogs = Array.isArray(blogsRes?.data)
      ? blogsRes.data
      : [];

    /*
     * Public tag pages should only show published articles.
     * The fallback keeps compatibility with older blog records
     * that may not contain a status field.
     */
    const publishedBlogs = blogs.filter(
      (blog) =>
        blog?.status === "published" ||
        !blog?.status
    );

    return {
      blogs: publishedBlogs,

      categories: Array.isArray(categoriesRes?.data)
        ? categoriesRes.data
        : [],

      tags: Array.isArray(tagsRes?.data)
        ? tagsRes.data
        : [],
    };
  } catch (error) {
    console.error(
      "TAG BLOG PAGE ERROR:",
      error
    );

    return {
      blogs: [],
      categories: [],
      tags: [],
    };
  }
}

/* =========================================================
   PAGE
========================================================= */

export default async function TagPage({ params }) {
  const resolvedParams = await params;

  const slug = resolvedParams?.slug || "";

  const tagName = formatTagName(slug);

  const {
    blogs,
    categories,
    tags,
  } = await fetchTagBlogs(slug);

  return (
    <main className="min-h-screen bg-[#f8fcfe]">
      {/* =====================================================
          TAG HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#dceff7] bg-[#12324a]">
        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Primary Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#1687c5]/25 blur-3xl" />

        {/* Secondary Glow */}
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#46a9d8]/10 blur-3xl" />

        {/* Decorative Rings */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-[#46a9d8]/10 lg:block" />

        <div className="pointer-events-none absolute right-[11%] top-1/2 hidden h-52 w-52 -translate-y-1/2 rounded-full border border-[#46a9d8]/10 lg:block" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm"
          >
            <Link
              href="/"
              className="text-white/55 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-white/25">/</span>

            <Link
              href="/blog"
              className="text-white/55 transition hover:text-white"
            >
              Blog
            </Link>

            <span className="text-white/25">/</span>

            <span className="font-medium text-[#46a9d8]">
              #{tagName}
            </span>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#46a9d8]/25 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#46a9d8]">
              <Hash className="h-4 w-4" />
              Blog Tag
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              #{tagName}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Discover practical fabrication insights, project
              guidance and industry knowledge related to{" "}
              <span className="font-semibold text-white">
                #{tagName}
              </span>
              .
            </p>

            {/* Stats / Navigation */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white">
                <BookOpen className="h-4 w-4 text-[#46a9d8]" />

                {blogs.length}{" "}
                {blogs.length === 1
                  ? "Article"
                  : "Articles"}
              </div>

              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/75 transition hover:border-[#46a9d8]/30 hover:bg-white/[0.08] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* =================================================
              ARTICLES
          ================================================= */}

          <div className="min-w-0">
            {blogs.length > 0 ? (
              <>
                {/* Section Header */}
                <div className="mb-8 flex flex-col gap-4 border-b border-[#dceff7] pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#1687c5]">
                      <Sparkles className="h-4 w-4" />

                      Tagged Insights
                    </div>

                    <h2 className="text-2xl font-black tracking-tight text-[#12324a] sm:text-3xl">
                      Articles tagged #{tagName}
                    </h2>
                  </div>

                  <div className="inline-flex w-fit items-center rounded-xl border border-[#dceff7] bg-white px-4 py-2.5 text-sm font-semibold text-[#64748b] shadow-[0_4px_18px_rgba(15,76,110,0.05)]">
                    {blogs.length}{" "}
                    {blogs.length === 1
                      ? "article"
                      : "articles"}{" "}
                    found
                  </div>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-7 md:grid-cols-2">
                  {blogs.map((blog) => (
                    <BlogCard
                      key={blog._id}
                      blog={blog}
                    />
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(15,76,110,0.07)]">
                  <div className="relative p-6 sm:p-8">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#eff9fe] blur-2xl" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#1687c5]">
                          Start Your Project
                        </p>

                        <h3 className="mt-2 text-xl font-black text-[#12324a]">
                          Need a custom fabrication solution?
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748b]">
                          Discuss your mild steel fabrication,
                          structural, staircase, gate, railing or
                          custom metalwork requirements with
                          Welldone Metalworks.
                        </p>
                      </div>

                      <Link
                        href="/contact"
                        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1687c5] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,135,197,0.22)] transition hover:bg-[#0b6fa8]"
                      >
                        Discuss Your Project

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* =================================================
                 EMPTY STATE
              ================================================= */

              <div className="relative overflow-hidden rounded-3xl border border-[#dceff7] bg-white px-6 py-16 text-center shadow-[0_10px_40px_rgba(15,76,110,0.06)] sm:px-10">
                <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#eff9fe] blur-3xl" />

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#eaf7fd] text-[#1687c5]">
                  <Hash className="h-9 w-9" />
                </div>

                <h2 className="relative mt-7 text-3xl font-black text-[#12324a]">
                  No Articles Found
                </h2>

                <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-[#64748b]">
                  There are currently no published articles
                  associated with the{" "}
                  <span className="font-semibold text-[#475569]">
                    #{tagName}
                  </span>{" "}
                  tag. Check back later for new fabrication
                  insights and project guidance.
                </p>

                <Link
                  href="/blog"
                  className="group relative mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1687c5] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0b6fa8]"
                >
                  Browse All Articles

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="lg:sticky lg:top-28">
            <BlogSidebar
              categories={categories}
              tags={tags}
            />
          </aside>
        </div>
      </section>
    </main>
  );
}