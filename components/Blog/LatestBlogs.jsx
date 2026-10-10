"use client";

import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import BlogCard from "./BlogCard";

const LatestBlogs = ({ blogs = [] }) => {
  const latestBlogs = blogs.slice(0, 3);

  if (!latestBlogs.length) {
    return null;
  }

  return (
    <section className="bg-[#f8fcfe] px-4 py-10 sm:px-6 sm:py-12 lg:py-14">

      <div className="mx-auto w-full max-w-[1280px]">

        {/* HEADER */}

        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1687c5]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1687c5]">
                Latest Articles
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#12324a] sm:text-4xl">
              Fresh From Our Knowledge Centre
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748b]">
              Practical fabrication insights and useful information
              for residential, commercial and industrial projects.
            </p>

          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#1687c5]"
          >
            View All Articles

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* BLOGS */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard
              key={blog?._id}
              blog={blog}
            />
          ))}
        </div>

        {/* Small info row */}

        <div className="mt-7 flex items-center gap-2 text-xs font-medium text-[#64748b]">
          <Clock3 size={14} className="text-[#1687c5]" />
          New fabrication insights added regularly
        </div>

      </div>

    </section>
  );
};

export default LatestBlogs;