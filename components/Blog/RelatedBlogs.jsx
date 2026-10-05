"use client";

import BlogCard from "./BlogCard";

const RelatedBlogs = ({ blogs = [] }) => {
  if (!blogs.length) {
    return null;
  }

  return (
    <section className="border-t border-[#dceff7] py-16 lg:py-20">

      {/* HEADER */}

      <div className="mb-9">

        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[#1687c5]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1687c5]">
            Continue Reading
          </span>
        </div>

        <h2 className="text-3xl font-black tracking-tight text-[#12324a] sm:text-4xl">
          Related Articles
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748b]">
          Explore more fabrication insights and articles
          related to this topic.
        </p>

      </div>

      {/* BLOGS */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard
            key={blog?._id}
            blog={blog}
          />
        ))}
      </div>

    </section>
  );
};

export default RelatedBlogs;