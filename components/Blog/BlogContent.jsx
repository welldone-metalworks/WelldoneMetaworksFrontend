"use client";

const BlogContent = ({ content }) => {
  return (
    <div
      className="
      prose 
      prose-lg 
      max-w-none
      prose-headings:text-gray-900
      prose-headings:font-black
      prose-p:text-gray-600
      prose-p:leading-relaxed
      prose-a:text-[#981d13]
      prose-strong:text-gray-900
      prose-img:rounded-[30px]
      prose-img:shadow-xl
      prose-ul:text-gray-600
      prose-li:marker:text-[#cd2b14]
    "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;