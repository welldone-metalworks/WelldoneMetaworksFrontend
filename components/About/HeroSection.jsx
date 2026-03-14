"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection({ title, breadcrumb, bgImage }) {
  return (
    <section
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative max-w-[1280px] mx-auto px-6 w-full">

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px]"
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>

          {/* Divider Line */}
          <div className="mt-6 w-16 h-[3px] bg-[#cd2b14] rounded-full"></div>

          {/* Breadcrumb */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-lg shadow-lg text-sm sm:text-base">
            <Link
              href="/"
              className="text-[#cd2b14] font-semibold hover:underline"
            >
              Home
            </Link>

            <span className="text-gray-400">/</span>

            <span className="text-gray-700 font-medium">{breadcrumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}