"use client";

import BlogSearch from "./BlogSearch";
import BlogCategories from "./BlogCategories";
import BlogTags from "./BlogTags";

const BlogSidebar = ({
  categories,
  tags,
}) => {
  return (
    <aside className="space-y-5">

      <BlogSearch />

      <BlogCategories
        categories={categories}
      />

      <BlogTags
        tags={tags}
      />

      {/* Contact Card */}
      <div className="relative overflow-hidden rounded-2xl bg-[#12324a] p-6 text-white">

        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border-[22px] border-[#1687c5]/20" />

        <div className="relative">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#46a9d8]">
            Have a Project?
          </p>

          <h3 className="mt-2 text-xl font-black leading-tight">
            Need Custom Metal Fabrication?
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/65">
            Discuss your fabrication requirements with
            Welldone Metalworks.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex items-center rounded-xl bg-[#1687c5] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0b6fa8]"
          >
            Discuss Your Project
          </a>

        </div>

      </div>

    </aside>
  );
};

export default BlogSidebar;