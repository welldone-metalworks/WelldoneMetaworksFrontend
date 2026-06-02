"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BlogCategories = ({
  categories,
}) => {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Categories
      </h3>

      <div className="space-y-4">
        {categories?.map(
          (category) => (
            <Link
              key={category._id}
              href={`/blog/category/${category.slug}`}
              className="group flex items-center justify-between text-gray-600 hover:text-[#981d13] transition-all"
            >
              <span>
                {category.name}
              </span>

              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-all"
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BlogCategories;