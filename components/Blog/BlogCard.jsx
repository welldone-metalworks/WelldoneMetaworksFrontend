"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const BlogCard = ({
  blog,
}) => {
  //
  // SAFE IMAGE URL
  //
  const imageSrc =
    blog?.featuredImage
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.featuredImage.replace(
          /\\/g,
          "/"
        )}`
      : "/placeholder.jpg";

  return (
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={
            blog?.title ||
            "Industrial Blog"
          }
          fill
          className="object-cover group-hover:scale-110 transition-all duration-700"
        />

        {/* CATEGORY */}
        <div className="absolute top-5 left-5 bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {blog?.category
            ?.name ||
            "Industrial"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        {/* DATE */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <CalendarDays
            size={16}
          />

          {blog?.createdAt
            ? new Date(
                blog.createdAt
              ).toDateString()
            : "Recently Published"}
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#981d13] transition-all duration-300">
          {blog?.title}
        </h3>

        {/* EXCERPT */}
        <p className="text-gray-600 leading-relaxed mt-4 line-clamp-3">
          {blog?.excerpt}
        </p>

        {/* BUTTON */}
        <Link
          href={`/blog/${blog?.slug || ""}`}
          className="inline-flex items-center gap-2 mt-6 text-[#981d13] font-semibold hover:gap-3 transition-all duration-300"
        >
          Read More

          <ArrowRight
            size={18}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;