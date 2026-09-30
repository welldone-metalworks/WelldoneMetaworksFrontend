"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";

const images = [
  {
    src: "/MetalStaircase/spiral_staircase.png",
    category: "Spiral",
    title: "Modern Spiral Staircase",
  },
  {
    src: "/MetalStaircase/Curved_Staircases.png",
    category: "Curved",
    title: "Curved Metal Staircase",
  },
  {
    src: "/MetalStaircase/Industrial_Staircases.png",
    category: "Industrial",
    title: "Industrial Staircase",
  },
  {
    src: "/MetalStaircase/Straight_Staircases.png",
    category: "Straight",
    title: "Straight Staircase",
  },
  {
    src: "/MetalStaircase/Custom_Staircases.png",
    category: "Custom",
    title: "Custom Staircase",
  },
  {
    src: "/MetalStaircase/spiral_staircase.png",
    category: "Spiral",
    title: "Architectural Spiral Staircase",
  },
];

const filters = [
  "All",
  "Spiral",
  "Curved",
  "Straight",
  "Industrial",
  "Custom",
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? images
      : images.filter((item) => item.category === filter);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

 
{/* 
      <div className="pointer-events-none absolute -right-60 top-[-250px] h-[600px] w-[600px] rounded-full bg-[#eff9fe] blur-3xl" />

      <div className="pointer-events-none absolute -left-60 bottom-[-300px] h-[600px] w-[600px] rounded-full bg-[#1687c5]/[0.035] blur-3xl" /> */}

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 border-b border-[#dceff7] pb-7 lg:flex-row lg:items-end"
        >
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#1687c5]" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1687c5]">
                Project Gallery
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#12324a] sm:text-5xl lg:text-[56px]">
              See the work{" "}
              <span className="text-[#1687c5]">up close.</span>
            </h2>

            <p className="mt-4 max-w-[580px] text-sm leading-7 text-slate-500">
              Explore examples of spiral, curved, straight, industrial and
              custom metal staircase fabrication.
            </p>
          </div>

          {/* =====================================================
              FILTERS
          ===================================================== */}

          <div className="flex max-w-full flex-wrap gap-2 lg:max-w-[570px] lg:justify-end">
            {filters.map((item) => {
              const active = filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-full border px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.12em] transition-all duration-300 ${
                    active
                      ? "border-[#1687c5] bg-[#1687c5] text-white shadow-[0_5px_18px_rgba(22,135,197,.18)]"
                      : "border-[#dceff7] bg-white text-slate-400 hover:border-[#1687c5]/40 hover:text-[#1687c5]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* =======================================================
            GALLERY
        ======================================================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid gap-4 lg:grid-cols-12"
          >
            {/* =================================================
                FEATURED IMAGE
            ================================================= */}

            {filtered[0] && (
              <GalleryImage
                item={filtered[0]}
                featured
                className="lg:col-span-7"
              />
            )}

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
              {filtered.slice(1, 5).map((item, index) => (
                <GalleryImage
                  key={item.src}
                  item={item}
                  index={index + 1}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* =======================================================
            REMAINING IMAGE
        ======================================================= */}

        {filtered.length > 5 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <GalleryImage item={filtered[5]} wide />
            </motion.div>
          </AnimatePresence>
        )}

        {/* =======================================================
            BOTTOM STRIP
        ======================================================= */}

        <div className="mt-7 flex flex-col justify-between gap-4 border-t border-[#dceff7] pt-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-[-0.04em] text-[#12324a]">
              {filtered.length}
            </span>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                Projects Shown
              </p>

              <p className="text-xs font-bold text-[#1687c5]">
                {filter === "All" ? "All staircase designs" : `${filter} designs`}
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#1687c5] transition-colors hover:text-[#0b6fa8]"
          >
            Discuss Your Staircase

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   GALLERY IMAGE
=============================================================== */

function GalleryImage({
  item,
  featured = false,
  wide = false,
  className = "",
  index = 0,
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      className={`group relative overflow-hidden rounded-[24px] border border-[#dceff7] bg-[#f8fcfe] shadow-[0_8px_30px_rgba(18,50,74,.06)] ${className}`}
    >
      <div
        className={`relative overflow-hidden ${
          featured
            ? "h-[480px] sm:h-[520px] lg:h-[590px]"
            : wide
              ? "h-[300px] sm:h-[340px]"
              : "h-[250px] sm:h-[270px]"
        }`}
      >
        {/* Image */}
        <img
          src={item.src}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07131d]/85 via-[#07131d]/10 to-transparent" />

        {/* Subtle blue hover overlay */}
        <div className="absolute inset-0 bg-[#1687c5]/0 transition-colors duration-500 group-hover:bg-[#1687c5]/[0.06]" />

        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <div className="absolute left-5 top-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#07131d]/55 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8]" />
            {item.category}
          </span>
        </div>

        {/* Number */}
        <span className="absolute right-5 top-3 text-[70px] font-black leading-none tracking-[-0.1em] text-white/[0.13]">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* =====================================================
            BOTTOM CONTENT
        ===================================================== */}

        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#46a9d8]">
                Metal Staircase
              </p>

              <h3
                className={`mt-1 font-black leading-tight tracking-[-0.02em] text-white ${
                  featured ? "text-2xl sm:text-3xl" : "text-lg"
                }`}
              >
                {item.title}
              </h3>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#46a9d8] group-hover:bg-[#1687c5]">
              <Maximize2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
            </div>
          </div>
        </div>

        {/* Corner markers */}
        <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-white/20" />
        <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-white/20" />
        <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/20" />
        <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/20" />
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#1687c5] transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}