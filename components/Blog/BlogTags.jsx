"use client";

import Link from "next/link";
import { Hash } from "lucide-react";

const BlogTags = ({ tags }) => {
  if (!tags?.length) {
    return (
      <div className="rounded-2xl border border-[#dceff7] bg-white p-6">
        <h3 className="font-black text-[#12324a]">
          Popular Topics
        </h3>

        <p className="mt-2 text-sm text-[#64748b]">
          No tags available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#dceff7] bg-white p-6 shadow-[0_8px_28px_rgba(15,76,110,0.05)]">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
          <Hash size={17} />
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1687c5]">
            Topics
          </p>

          <h3 className="mt-0.5 text-xl font-black text-[#12324a]">
            Popular Tags
          </h3>
        </div>

      </div>

      <div className="flex flex-wrap gap-2">

        {tags.map((tag) => (
          <Link
            key={tag?._id}
            href={`/blog/tag/${tag?.slug}`}
            className="rounded-lg border border-[#dceff7] bg-[#f8fcfe] px-3 py-2 text-xs font-semibold text-[#475569] transition-all duration-300 hover:border-[#bfe4f3] hover:bg-[#eff9fe] hover:text-[#1687c5]"
          >
            #{tag?.name}
          </Link>
        ))}

      </div>

    </div>
  );
};

export default BlogTags;