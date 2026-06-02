"use client";

import Link from "next/link";

const BlogTags = ({ tags }) => {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Popular Tags
      </h3>

      <div className="flex flex-wrap gap-4">
        {tags?.map((tag) => (
          <Link
            key={tag._id}
            href={`/blog/tag/${tag.slug}`}
            className="px-5 py-3 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-[#981d13] hover:to-[#cd2b14] hover:text-white transition-all duration-300 text-sm font-semibold text-gray-700"
          >
            #{tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;