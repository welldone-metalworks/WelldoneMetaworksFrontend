"use client";

import { Search } from "lucide-react";

const BlogSearch = () => {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Search Blogs
      </h3>

      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full h-14 rounded-full border border-gray-200 px-6 pr-14 outline-none focus:border-[#cd2b14] transition-all"
        />

        <button className="absolute right-2 top-2 w-10 h-10 rounded-full bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white flex items-center justify-center">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default BlogSearch;