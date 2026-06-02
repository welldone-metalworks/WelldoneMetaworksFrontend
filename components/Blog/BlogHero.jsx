"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0b1728] to-[#07111f] text-white py-28 px-6">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#cd2b14]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-gradient-to-r from-[#981d13] to-[#cd2b14] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
            Welldone Metalworks Blog
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6">
            Industrial Insights & Engineering Knowledge
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-8 leading-relaxed">
            Explore premium articles about stainless steel products,
            industrial applications, fabrication technology, engineering
            solutions, and metal industry innovations.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Contact Us
              <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </Link>

            <Link
              href="/products"
              className="border border-white/20 hover:border-[#cd2b14] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;