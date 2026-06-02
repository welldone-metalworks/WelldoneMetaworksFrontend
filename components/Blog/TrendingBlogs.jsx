"use client";

import Link from "next/link";
import { Flame, ArrowRight } from "lucide-react";

const trending = [
  "Difference Between Seamless & Welded Pipes",
  "Best Stainless Steel Grades For Industry",
  "Industrial Pipe Fittings Buying Guide",
  "How Stainless Steel Prevents Corrosion",
  "Top Applications of Industrial Flanges",
];

const TrendingBlogs = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#07111f] to-[#0d1728] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#cd2b14]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-14">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#981d13] to-[#cd2b14] flex items-center justify-center shadow-xl">
            <Flame size={28} />
          </div>

          <div>
            <p className="uppercase tracking-widest text-[#cd2b14] font-semibold">
              Trending Now
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Most Popular Articles
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trending.map((item, index) => (
            <Link
              href="/blog"
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:border-[#cd2b14]/50 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-[#cd2b14] text-5xl font-black mb-5">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold leading-snug group-hover:text-[#cd2b14] transition-all">
                {item}
              </h3>

              <div className="flex items-center gap-2 mt-8 text-[#cd2b14] font-semibold">
                Read Article
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBlogs; 