"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  DraftingCompass,
  Handshake,
  ShieldCheck,
  Target,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Custom Approach",
    description:
      "Every staircase is considered around the available space, intended use and overall project requirements.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Quality Focus",
    description:
      "Attention to fabrication accuracy, welding quality, finishing and practical installation.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Practical Design",
    description:
      "Design decisions balance appearance, movement, usability and the realities of the installation space.",
    icon: Target,
  },
  {
    number: "04",
    title: "Skilled Fabrication",
    description:
      "Mild steel components are fabricated with a focus on accurate assembly and dependable execution.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Clear Communication",
    description:
      "Requirements, measurements, design considerations and project expectations stay clear throughout the process.",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Project Coordination",
    description:
      "Fabrication and installation activities are coordinated around the practical requirements of the site.",
    icon: Clock3,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#f8fcfe] py-10 sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BLUEPRINT GRID
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient shapes */}
      <div className="pointer-events-none absolute -left-48 top-[-180px] h-[520px] w-[520px] rounded-full bg-[#eff9fe] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-[-220px] h-[500px] w-[500px] rounded-full bg-[#1687c5]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col justify-between gap-6 border-b border-[#dceff7] pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1687c5]" />

              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#1687c5]">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#12324a] sm:text-4xl lg:text-5xl">
              The details behind
              <span className="text-[#1687c5]"> better fabrication.</span>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#12324a]/35">
              Our Approach
            </span>

            <span className="h-px w-10 bg-[#dceff7]" />

            <span className="text-sm font-black text-[#12324a]">
              06 Principles
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            INTRO STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid border-b border-[#dceff7] lg:grid-cols-[1fr_auto]"
        >
          <div className="py-7 lg:pr-12">
            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              A staircase is more than a fabricated structure. It needs to
              work with the space, support practical movement and integrate
              naturally with the surrounding architecture.
            </p>
          </div>

          <div className="flex items-center border-t border-[#dceff7] py-5 lg:border-l lg:border-t-0 lg:pl-10">
            <div>
              <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/35">
                Fabrication Focus
              </span>

              <span className="mt-1 block text-sm font-black text-[#12324a]">
                Design → Fabrication → Installation
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            REASONS MATRIX
        ========================================================= */}
        <div className="mt-8 overflow-hidden rounded-[28px] border border-[#dceff7] bg-white">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className={`group relative grid gap-5 px-5 py-6 transition-colors duration-300 hover:bg-[#f8fcfe] sm:px-7 lg:grid-cols-[90px_250px_1fr_50px] lg:items-center lg:px-8 ${
                  index !== reasons.length - 1
                    ? "border-b border-[#dceff7]"
                    : ""
                }`}
              >
                {/* Number */}
                <div className="flex items-center gap-4 lg:block">
                  <span className="text-xs font-black tracking-[0.15em] text-[#1687c5]">
                    {reason.number}
                  </span>

                  <div className="h-px w-8 bg-[#dceff7] lg:mt-3" />
                </div>

                {/* Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf7fd]">
                    <Icon className="h-5 w-5 text-[#1687c5]" />
                  </div>

                  <h3 className="text-base font-black text-[#12324a] sm:text-lg">
                    {reason.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-6 text-slate-500">
                  {reason.description}
                </p>

                {/* Arrow */}
                <div className="hidden justify-end lg:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dceff7] transition-all duration-300 group-hover:border-[#1687c5] group-hover:bg-[#1687c5]">
                    <ArrowUpRight className="h-4 w-4 text-[#1687c5] transition-colors group-hover:text-white" />
                  </div>
                </div>

                {/* Hover accent */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1687c5] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 flex flex-col justify-between gap-5 rounded-2xl border border-[#dceff7] bg-[#eff9fe] px-6 py-5 sm:flex-row sm:items-center sm:px-8"
        >
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1687c5]">
              Built For Real Projects
            </span>

            <p className="mt-1 text-sm font-bold text-[#12324a]">
              From site measurements to the final installation.
            </p>
          </div>

          <a
            href="#quote"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#12324a] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#1687c5]"
          >
            Start Your Project

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}