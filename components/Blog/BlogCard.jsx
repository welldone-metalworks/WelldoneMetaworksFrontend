"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { getImageUrl } from "@/lib/imageUrl";

export default function BlogCard({ blog }) {
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
    "Explore practical insights, fabrication guidance and metalwork expertise from Welldone Metalworks.";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(15,76,110,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe4f3] hover:shadow-[0_20px_50px_rgba(15,76,110,0.12)]">
      {/* =========================================================
          IMAGE
      ========================================================= */}
      <Link
        href={`/blog/${blog?.slug}`}
        className="block"
        aria-label={`Read ${blog?.title || "blog article"}`}
      >
        <div className="relative h-[230px] overflow-hidden bg-[#eff9fe]">
          <img
            src={imageUrl}
            alt={
              blog?.title ||
              "Welldone Metalworks blog"
            }
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            onError={(event) => {
              console.error(
                "BLOG IMAGE FAILED:",
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12324a]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Category */}
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold tracking-wide text-[#0b6fa8] shadow-sm backdrop-blur">
              {categoryName}
            </span>
          </div>
        </div>
      </Link>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Meta */}
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#64748b]">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays
              size={14}
              strokeWidth={1.8}
              className="text-[#1687c5]"
            />
            {formattedDate}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3
              size={14}
              strokeWidth={1.8}
              className="text-[#1687c5]"
            />
            {readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight tracking-[-0.02em] text-[#12324a] transition-colors duration-300 group-hover:text-[#0b6fa8]">
          <Link href={`/blog/${blog?.slug}`}>
            {blog?.title ||
              "Metal Fabrication Insights"}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-[#64748b]">
          {excerpt}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${blog?.slug}`}
          className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#1687c5] transition-all duration-300 hover:gap-3 hover:text-[#0b6fa8]"
        >
          Read Article
          <ArrowRight
            size={17}
            strokeWidth={2}
          />
        </Link>
      </div>
    </article>
  );
}