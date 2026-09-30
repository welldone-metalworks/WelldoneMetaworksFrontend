"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Compass,
  Hammer,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Custom Dimensions",
    text: "Built around your available space, measurements and project requirements.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Precision Fabrication",
    text: "Accurate metal fabrication focused on clean dimensions and consistent workmanship.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Strong Structure",
    text: "Structural components planned around the staircase configuration and intended use.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Professional Welding",
    text: "Reliable welding and connection work integrated into the fabrication process.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Modern Design",
    text: "Contemporary staircase forms developed to complement your architecture.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Accurate Installation",
    text: "Installation support focused on proper alignment, positioning and fit.",
    icon: Compass,
  },
  {
    number: "07",
    title: "Custom Railings",
    text: "Railing solutions developed to coordinate with the staircase structure.",
    icon: Wrench,
  },
  {
    number: "08",
    title: "Project Support",
    text: "Support from initial requirements through fabrication and installation.",
    icon: BadgeCheck,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#07131d] py-10 text-white sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#1687c5]/[0.07] blur-3xl" />

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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end"
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#1687c5]" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#46a9d8]">
                Why Choose Our Fabrication
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[54px]">
              Everything considered.
              <br />
              <span className="text-[#46a9d8]">Nothing overlooked.</span>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div>
              <p className="text-3xl font-black tracking-[-0.04em] text-white">
                08
              </p>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
                Key Features
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <p className="max-w-[170px] text-xs leading-5 text-white/35">
              Designed, fabricated and installed around your project.
            </p>
          </div>
        </motion.div>

        {/* =======================================================
            FEATURE GRID
        ======================================================= */}

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.045,
                }}
                className="group relative min-h-[225px] overflow-hidden bg-[#0b1c29] p-5 transition-colors duration-300 hover:bg-[#102b3d] sm:p-6"
              >
                {/* Background number */}
                <span className="pointer-events-none absolute -right-1 -top-5 text-[86px] font-black leading-none tracking-[-0.1em] text-white/[0.035] transition-colors duration-500 group-hover:text-[#46a9d8]/[0.09]">
                  {feature.number}
                </span>

                {/* =================================================
                    TOP
                ================================================= */}

                <div className="relative flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1687c5]/20 bg-[#1687c5]/10 text-[#46a9d8] transition-all duration-300 group-hover:border-[#1687c5] group-hover:bg-[#1687c5] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-[9px] font-black tracking-[0.18em] text-white/20">
                    {feature.number}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative mt-7">
                  <h3 className="text-[17px] font-black tracking-[-0.015em] text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-[260px] text-[13px] leading-6 text-white/35 transition-colors duration-300 group-hover:text-white/50">
                    {feature.text}
                  </p>
                </div>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="absolute bottom-5 left-5 right-5 flex items-center sm:left-6 sm:right-6">
                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/20 transition-colors group-hover:text-[#46a9d8]">
                    Staircase Fabrication
                  </span>

                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#46a9d8]" />
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#1687c5] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              "Custom Measurements",
              "MS Fabrication",
              "Professional Welding",
              "Installation Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1687c5]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/30">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#46a9d8] transition-colors hover:text-white"
          >
            Discuss Your Staircase

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}