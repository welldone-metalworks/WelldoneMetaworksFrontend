"use client";

import Link from "next/link";

import {
  ArrowRight,
  Flame,
  TrendingUp,
} from "lucide-react";

const TrendingBlogs = ({ blogs = [] }) => {
  const trendingBlogs = blogs
    .filter(
      (blog) =>
        blog?.status === "published" ||
        !blog?.status
    )
    .slice(0, 5);

  if (!trendingBlogs.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#12324a] px-4 py-16 text-white sm:px-6 lg:py-20">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-[55px] border-[#1687c5]/10" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#1687c5]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px]">

        {/* HEADER */}

        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1687c5]">
                <Flame size={18} />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#46a9d8]">
                Trending Insights
              </span>

            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Popular Fabrication Articles
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
              Explore articles covering the fabrication topics
              readers are currently discovering.
            </p>

          </div>

          <div className="hidden items-center gap-2 text-xs font-semibold text-white/50 sm:flex">
            <TrendingUp
              size={15}
              className="text-[#46a9d8]"
            />
            Fabrication Knowledge
          </div>

        </div>

        {/* ARTICLES */}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

          {trendingBlogs.map((blog, index) => (
            <Link
              key={blog?._id}
              href={`/blog/${blog?.slug || ""}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-all duration-300 hover:border-[#1687c5]/50 hover:bg-white/[0.07]"
            >

              <div className="flex gap-4">

                {/* NUMBER */}

                <div className="shrink-0">

                  <span className="text-3xl font-black text-[#46a9d8]/35">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                </div>

                {/* CONTENT */}

                <div className="min-w-0">

                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#46a9d8]">
                    {blog?.category?.name ||
                      "Metal Fabrication"}
                  </div>

                  <h3 className="line-clamp-2 text-base font-bold leading-6 text-white transition-colors group-hover:text-[#46a9d8]">
                    {blog?.title}
                  </h3>

                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white/50 transition-colors group-hover:text-[#46a9d8]">
                    Read Article
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TrendingBlogs;