"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

const getImageUrl = (featuredImage) => {
  if (!featuredImage) {
    return "/placeholder.jpg";
  }

  if (
    featuredImage.startsWith("http://") ||
    featuredImage.startsWith("https://")
  ) {
    return featuredImage;
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_IMAGE_URL ||
    process.env.NEXT_PUBLIC_API_URL?.replace(
      /\/api\/?$/,
      ""
    ) ||
    "http://localhost:5000";

  const cleanPath = featuredImage
    .replace(/\\/g, "/")
    .replace(/^\/+/, "");

  if (cleanPath.startsWith("uploads/")) {
    return `${baseUrl}/${cleanPath}`;
  }

  return `${baseUrl}/uploads/${cleanPath}`;
};

const formatDate = (date) => {
  if (!date) return "Recently Published";

  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
};

const FeaturedBlog = ({ blog }) => {
  if (!blog) return null;

  const imageSrc = getImageUrl(
    blog?.featuredImage
  );

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#dceff7] bg-[#f8fcfe] shadow-[0_12px_40px_rgba(15,76,110,0.08)]">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* IMAGE */}

        <Link
          href={`/blog/${blog?.slug || ""}`}
          className="relative block min-h-[330px] overflow-hidden sm:min-h-[420px] lg:min-h-[500px]"
        >
          <Image
            src={imageSrc}
            alt={
              blog?.title ||
              "Featured metal fabrication article"
            }
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#12324a]/70 via-[#12324a]/10 to-transparent" />

          {/* Featured Badge */}
          <div className="absolute left-5 top-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#12324a]/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
              <Sparkles
                size={14}
                className="text-[#46a9d8]"
              />
              Featured Article
            </span>
          </div>

          {/* Category */}
          <div className="absolute bottom-5 left-5">
            <span className="rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#12324a] shadow-lg">
              {blog?.category?.name ||
                "Metal Fabrication"}
            </span>
          </div>
        </Link>

        {/* CONTENT */}

        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1687c5]">
            Featured Insight
          </p>

          <h2 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-[#12324a] sm:text-4xl lg:text-[42px]">
            {blog?.title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
            {blog?.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#64748b]">

            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} />
              {formatDate(blog?.createdAt)}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} />
              5 min read
            </span>

          </div>

          <Link
            href={`/blog/${blog?.slug || ""}`}
            className="group/cta mt-8 inline-flex w-fit items-center gap-2.5 rounded-xl bg-[#1687c5] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(22,135,197,0.2)] transition-all duration-300 hover:bg-[#0b6fa8]"
          >
            Read Full Article

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </Link>

        </div>
      </div>
    </article>
  );
};

export default FeaturedBlog;