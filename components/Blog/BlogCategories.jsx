"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const BlogCategories = ({ categories }) => {
  if (!categories?.length) {
    return (
      <div className="rounded-2xl border border-[#dceff7] bg-white p-6">
        <h3 className="font-black text-[#12324a]">
          Categories
        </h3>

        <p className="mt-2 text-sm text-[#64748b]">
          No categories available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#dceff7] bg-white p-6 shadow-[0_8px_28px_rgba(15,76,110,0.05)]">

      <div className="mb-5 flex items-center justify-between">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1687c5]">
            Explore
          </p>

          <h3 className="mt-1 text-xl font-black text-[#12324a]">
            Categories
          </h3>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
          <ArrowUpRight size={17} />
        </div>

      </div>

      <div className="divide-y divide-[#e8f3f8]">

        {categories.map((category) => (
          <Link
            key={category?._id}
            href={`/blog/category/${category?.slug}`}
            className="group flex items-center justify-between py-3.5 text-sm font-semibold text-[#475569] transition-colors hover:text-[#1687c5]"
          >
            <span>
              {category?.name}
            </span>

            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        ))}

      </div>

    </div>
  );
};

export default BlogCategories;