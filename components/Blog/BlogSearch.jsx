"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const BlogSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(
    searchParams.get("search") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = query.trim();

    if (!value) {
      router.push("/blog");
      return;
    }

    router.push(
      `/blog?search=${encodeURIComponent(value)}`
    );
  };

  return (
    <div className="rounded-2xl border border-[#dceff7] bg-white p-5 shadow-[0_8px_28px_rgba(15,76,110,0.05)]">

      <div className="mb-4">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1687c5]">
          Knowledge Centre
        </p>

        <h3 className="mt-1 text-xl font-black text-[#12324a]">
          Search Articles
        </h3>

      </div>

      <form
        onSubmit={handleSubmit}
        className="relative"
      >
        <Search
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
        />

        <input
          type="search"
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search articles..."
          className="h-12 w-full rounded-xl border border-[#dceff7] bg-[#f8fcfe] pl-11 pr-12 text-sm font-medium text-[#17384f] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1687c5] focus:bg-white focus:ring-4 focus:ring-[#1687c5]/10"
        />

        <button
          type="submit"
          aria-label="Search blogs"
          className="absolute right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1687c5] text-white transition hover:bg-[#0b6fa8]"
        >
          <Search size={16} />
        </button>

      </form>

    </div>
  );
};

export default BlogSearch;