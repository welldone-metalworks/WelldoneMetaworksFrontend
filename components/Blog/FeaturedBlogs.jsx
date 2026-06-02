"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

const FeaturedBlog = ({
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
    <section className="bg-gray-50 rounded-[40px] overflow-hidden shadow-xl border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="relative h-[350px] md:h-[500px] bg-gray-200 overflow-hidden">
          <Image
            src={imageSrc}
            alt={
              blog?.title ||
              "Featured Blog"
            }
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-10 lg:p-14">
          <span className="inline-block bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            Featured Article
          </span>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mt-6">
            {blog?.title}
          </h2>

          {/* EXCERPT */}
          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            {blog?.excerpt}
          </p>

          {/* BUTTON */}
          <Link
            href={`/blog/${blog?.slug}`}
            className="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Read Full Article

            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;