"use client";

import BlogSearch from "./BlogSearch";
import BlogCategories from "./BlogCategories";
import BlogTags from "./BlogTags";

const BlogSidebar = ({
  categories,
  tags,
}) => {
  return (
    <aside className="space-y-8 sticky top-24">
      <BlogSearch />

      <BlogCategories
        categories={categories}
      />

      <BlogTags tags={tags} />
    </aside>
  );
};

export default BlogSidebar;