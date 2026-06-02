"use client";

import BlogCard from "./BlogCard";

const RelatedBlogs = ({
  blogs = [],
}) => {
  //
  // NO RELATED BLOGS
  //
  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-24">
      {/* HEADER */}
      <div className="mb-14">
        <p className="uppercase tracking-widest text-[#cd2b14] font-semibold">
          Related Articles
        </p>

        <h2 className="text-4xl font-black text-gray-900 mt-3">
          You May Also Like
        </h2>
      </div>

      {/* BLOGS */}
      <div className="grid lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard
            key={
              blog._id
            }
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogs;