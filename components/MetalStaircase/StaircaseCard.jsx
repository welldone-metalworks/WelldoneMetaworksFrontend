"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Ruler } from "lucide-react";

export default function StaircaseCard({
  image,
  number,
  title,
  description,
  tag = "Custom Fabrication",
}) {
  return (
    <motion.article
      whileHover={{ y: -7 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[28px] border border-[#dceff7] bg-white shadow-[0_10px_35px_rgba(18,50,74,0.07)] transition-shadow duration-500 hover:shadow-[0_22px_60px_rgba(18,50,74,0.14)]"
    >
      {/* =========================================================
          IMAGE AREA
      ========================================================= */}

      <div className="relative h-[320px] overflow-hidden sm:h-[330px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07131d]/85 via-[#07131d]/10 to-transparent" />

        {/* Subtle blue hover wash */}
        <div className="absolute inset-0 bg-[#1687c5]/0 transition-colors duration-500 group-hover:bg-[#1687c5]/[0.06]" />

        {/* =====================================================
            TOP LEFT TAG
        ===================================================== */}

        <div className="absolute left-5 top-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#07131d]/65 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
            {tag}
          </span>
        </div>

        {/* =====================================================
            TECHNICAL NUMBER
        ===================================================== */}

        <div className="absolute right-5 top-4">
          <span className="text-[68px] font-black leading-none tracking-[-0.08em] text-white/[0.16] transition-colors duration-500 group-hover:text-[#46a9d8]/25">
            {number}
          </span>
        </div>

        {/* =====================================================
            BOTTOM IMAGE CONTENT
        ===================================================== */}

        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-[#46a9d8]">
                Staircase / {number}
              </p>

              <h3 className="text-[25px] font-black leading-tight tracking-[-0.025em] text-white">
                {title}
              </h3>
            </div>

            {/* Image arrow */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#46a9d8] group-hover:bg-[#1687c5]">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* =====================================================
            IMAGE CORNER MARKERS
        ===================================================== */}

        <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-white/20" />

        <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-white/20" />

        <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/20" />

        <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/20" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="p-5 sm:p-6">
        {/* Small technical label */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf7fd] text-[#1687c5]">
            <Ruler className="h-3.5 w-3.5" />
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
            Site-Specific Fabrication
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-slate-500">
          {description}
        </p>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="mt-5 flex items-center justify-between border-t border-[#edf4f7] pt-4">
          <a
            href="#quote"
            className="text-xs font-black text-[#12324a] transition-colors duration-300 hover:text-[#1687c5]"
          >
            Discuss This Design
          </a>

          <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-300">
            MS Fabrication
          </span>
        </div>
      </div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================= */}

      <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#1687c5] transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}