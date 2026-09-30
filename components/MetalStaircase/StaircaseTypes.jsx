"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import StaircaseCard from "./StaircaseCard";

const staircases = [
  {
    number: "01",
    title: "Spiral Staircases",
    image: "/MetalStaircase/Spiral_Staircase_Service.png",
    description:
      "Space-efficient spiral staircase solutions designed for residential, commercial and architectural applications.",
  },
  {
    number: "02",
    title: "Curved Staircases",
    image: "/MetalStaircase/Curved_Staircases.png",
    description:
      "Elegant curved structures designed to create a strong architectural focal point.",
  },
  {
    number: "03",
    title: "Straight Staircases",
    image: "/MetalStaircase/Straight_Staircases.png",
    description:
      "Clean and practical straight staircases developed around your available space and requirements.",
  },
  {
    number: "04",
    title: "Industrial Staircases",
    image: "/MetalStaircase/Industrial_Staircases.png",
    description:
      "Heavy-duty staircase structures for factories, warehouses and industrial environments.",
  },
  {
    number: "05",
    title: "Fire Escape Staircases",
    image: "/MetalStaircase/Fire_Escape_Staircases.png",
    description:
      "Functional emergency access staircase structures designed around site requirements.",
  },
  {
    number: "06",
    title: "Custom Staircases",
    image: "/MetalStaircase/Custom_Staircases.png",
    description:
      "Unique staircase concepts developed specifically around your project and architectural requirements.",
  },
];

export default function StaircaseTypes() {
  return (
    <section
      id="staircase-types"
      className="relative overflow-hidden bg-[#f8fcfe] py-10 sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -left-60 top-0 h-[550px] w-[550px] rounded-full bg-[#1687c5]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -right-60 bottom-0 h-[550px] w-[550px] rounded-full bg-[#46a9d8]/[0.07] blur-3xl" />

      {/* Architectural circles */}
      <div className="pointer-events-none absolute -right-[220px] top-[80px] h-[560px] w-[560px] rounded-full border border-[#1687c5]/[0.06]" />

      <div className="pointer-events-none absolute -right-[120px] top-[180px] h-[360px] w-[360px] rounded-full border border-[#1687c5]/[0.07]" />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#1687c5]" />

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#1687c5]">
                Staircase Collection
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#12324a] sm:text-5xl lg:text-[58px]">
              Staircases designed for{" "}
              <span className="text-[#1687c5]">every space.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
              Explore custom metal staircase solutions ranging from elegant
              spiral and curved designs to practical straight, industrial and
              fire escape structures.
            </p>
          </div>

          {/* =====================================================
              DESIGN RANGE BADGE
          ===================================================== */}

          <div className="shrink-0">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[#dceff7] bg-white px-5 py-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5]">
                <Layers3 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Design Range
                </p>

                <p className="mt-1 text-sm font-black text-[#12324a]">
                  06 Staircase Types
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            CARDS
        ======================================================= */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {staircases.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
            >
              <StaircaseCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col justify-between gap-4 border-t border-[#dceff7] pt-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-semibold text-slate-400">
              Looking for something different?
            </p>

            <p className="mt-1 text-sm font-bold text-[#12324a]">
              We can develop a staircase around your project.
            </p>
          </div>

          <a
            href="#quote"
            className="group inline-flex items-center gap-2 text-sm font-black text-[#1687c5] transition hover:text-[#0b6fa8]"
          >
            Discuss a Custom Design

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}