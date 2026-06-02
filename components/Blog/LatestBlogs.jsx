"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const LatestBlogs = ({
  blogs = [],
}) => {
  // ONLY LATEST 3 BLOGS
  const latestBlogs =
    blogs.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <p className="text-[#cd2b14] font-semibold uppercase tracking-widest">
              Latest Articles
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Latest Blog Updates
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-[#981d13] font-semibold hover:gap-3 transition-all"
          >
            View All

            <ArrowRight
              size={18}
            />
          </Link>
        </div>

        {/* BLOGS */}
        <div className="grid lg:grid-cols-3 gap-8">
          {latestBlogs.map(
            (blog) => {
              //
              // SAFE IMAGE
              //
              const imageSrc =
                blog?.featuredImage
                  ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${blog.featuredImage.replace(
                      /\\/g,
                      "/"
                    )}`
                  : "/placeholder.jpg";

              return (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={
                    blog._id
                  }
                  className="group bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100 hover:scale-[1.02] transition-all duration-300"
                >
                  {/* IMAGE */}
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={
                        imageSrc
                      }
                      alt={
                        blog.title
                      }
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-500"
                    />

                    <div className="absolute top-5 left-5 bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {blog
                        ?.category
                        ?.name ||
                        "Industrial"}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <CalendarDays
                        size={16}
                      />

                      {new Date(
                        blog.createdAt
                      ).toDateString()}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#981d13] transition-all">
                      {blog.title}
                    </h3>

                    <div className="mt-6 flex items-center gap-2 text-[#981d13] font-semibold">
                      Read More

                      <ArrowRight
                        size={18}
                      />
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;