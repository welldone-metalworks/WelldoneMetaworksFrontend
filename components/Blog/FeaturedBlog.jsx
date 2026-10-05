"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Star,
} from "lucide-react";

import { getImageUrl } from "@/lib/imageUrl";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  const imageUrl = getImageUrl(blog?.featuredImage);

  const categoryName =
    typeof blog?.category === "object"
      ? blog?.category?.name
      : blog?.categoryName || "Metal Fabrication";

  const formattedDate = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Recently";

  const readingTime =
    blog?.readingTime ||
    blog?.readTime ||
    "5 Min Read";

  const excerpt =
    blog?.excerpt ||
    "Explore practical metal fabrication insights, project guidance and expert knowledge from Welldone Metalworks.";

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#dceff7] bg-white shadow-[0_20px_60px_rgba(15,76,110,0.10)]">
      <div className="grid min-h-[480px] grid-cols-1 lg:grid-cols-2">
        {/* =======================================================
            IMAGE
        ======================================================= */}
        <Link
          href={`/blog/${blog?.slug}`}
          className="block"
          aria-label={`Read ${blog?.title || "featured blog article"}`}
        >
          <div className="relative h-[300px] overflow-hidden bg-[#eff9fe] sm:h-[400px] lg:h-full lg:min-h-[480px]">
            <img
              src={imageUrl}
              alt={
                blog?.title ||
                "Featured Welldone Metalworks blog"
              }
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
              onError={(event) => {
                console.error(
                  "FEATURED BLOG IMAGE FAILED:",
                  imageUrl
                );

                if (
                  event.currentTarget.src !==
                  `${window.location.origin}/placeholder.jpg`
                ) {
                  event.currentTarget.src =
                    "/placeholder.jpg";
                }
              }}
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12324a]/45 via-[#12324a]/5 to-transparent" />

            {/* Featured badge */}
            <div className="absolute left-5 top-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#12324a]/90 px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur">
                <Star
                  size={14}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
                Featured Article
              </span>
            </div>
          </div>
        </Link>

        {/* =======================================================
            CONTENT
        ======================================================= */}
        <div className="flex flex-col justify-center bg-white p-7 sm:p-9 lg:p-12">
          {/* Category */}
          <div className="mb-5">
            <span className="inline-flex rounded-full bg-[#eaf7fd] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0b6fa8]">
              {categoryName}
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-2xl text-3xl font-black leading-[1.12] tracking-[-0.035em] text-[#12324a] sm:text-4xl lg:text-[42px]">
            <Link
              href={`/blog/${blog?.slug}`}
              className="transition-colors duration-300 hover:text-[#0b6fa8]"
            >
              {blog?.title ||
                "Metal Fabrication Insights & Expertise"}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748b] sm:text-[17px]">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#64748b]">
            <span className="inline-flex items-center gap-2">
              <CalendarDays
                size={16}
                strokeWidth={1.8}
                className="text-[#1687c5]"
              />
              {formattedDate}
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock3
                size={16}
                strokeWidth={1.8}
                className="text-[#1687c5]"
              />
              {readingTime}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href={`/blog/${blog?.slug}`}
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#1687c5] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,135,197,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b6fa8] hover:shadow-[0_14px_30px_rgba(22,135,197,0.28)]"
            >
              Read Full Article
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="mt-9 h-px w-full bg-[#dceff7]" />

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-[#94a3b8]">
            Welldone Metalworks · Fabrication Expertise
          </p>
        </div>
      </div>
    </article>
  );
}