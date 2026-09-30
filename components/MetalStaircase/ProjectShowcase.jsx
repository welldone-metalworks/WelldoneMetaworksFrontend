"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Ruler,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const projectDetails = [
  {
    icon: Ruler,
    label: "Approach",
    value: "Space-specific design",
  },
  {
    icon: Settings2,
    label: "Fabrication",
    value: "Custom MS fabrication",
  },
  {
    icon: Wrench,
    label: "Execution",
    value: "Welding & installation",
  },
  {
    icon: ShieldCheck,
    label: "Focus",
    value: "Strength & finish",
  },
];

const projectPoints = [
  "Custom staircase configuration",
  "Fabricated around available space",
  "Precision MS component fabrication",
  "Professional welding and assembly",
];

export default function ProjectShowcase() {
  return (
    <section
      id="project-showcase"
      className="relative overflow-hidden bg-[#07131d] py-10 sm:py-12 lg:py-14"
    >
      {/* Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-[-220px] h-[520px] w-[520px] rounded-full bg-[#1687c5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-[-240px] h-[520px] w-[520px] rounded-full bg-[#46a9d8]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#46a9d8]" />

              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#46a9d8]">
                Project Showcase
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              One project.
              <span className="text-[#46a9d8]"> Carefully engineered.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
            <span>Featured Work</span>
            <span className="h-px w-8 bg-white/15" />
            <span>01 / 01</span>
          </div>
        </motion.div>

        {/* =========================================================
            FEATURED PROJECT
        ========================================================= */}
        <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1d2a] lg:grid-cols-[1.35fr_1fr]">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[600px]"
          >
            <img
              src="/MetalStaircase/Custom_Staircases.png"
              alt="Custom spiral metal staircase fabricated by Welldone Metalworks"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07131d]/90 via-transparent to-[#07131d]/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c1d2a]/30" />

            {/* Top label */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-[#07131d]/60 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#46a9d8]" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Custom MS Staircase
                </span>
              </div>
            </div>

            {/* Image bottom information */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                    Project Type
                  </span>

                  <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                    Custom Spiral Staircase
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                  <ArrowUpRight className="h-5 w-5 text-[#46a9d8]" />
                </div>
              </div>
            </div>

            {/* Corner markers */}
            <span className="absolute left-0 top-0 h-8 w-px bg-[#46a9d8]" />
            <span className="absolute left-0 top-0 h-px w-8 bg-[#46a9d8]" />

            <span className="absolute bottom-0 right-0 h-8 w-px bg-[#46a9d8]" />
            <span className="absolute bottom-0 right-0 h-px w-8 bg-[#46a9d8]" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col p-6 sm:p-8 lg:p-10 xl:p-12"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#46a9d8]">
                Built Around The Space
              </span>

              <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Designed to fit.
                <br />
                <span className="text-white/45">Built to last.</span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                A custom-fabricated staircase developed around the available
                space, desired appearance and practical requirements of the
                project.
              </p>
            </div>

            {/* Technical Details */}
            <div className="mt-8 grid grid-cols-2 border-y border-white/10">
              {projectDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`py-5 ${
                      index % 2 === 0 ? "border-r border-white/10 pr-4" : "pl-4"
                    } ${
                      index < 2 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 text-[#46a9d8]" />

                    <span className="mt-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                      {item.label}
                    </span>

                    <span className="mt-1 block text-xs font-bold text-white/75">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Project Points */}
            <div className="mt-7 space-y-3">
              {projectPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#46a9d8]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#quote"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1687c5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#46a9d8]"
              >
                Discuss Your Staircase

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM TECHNICAL STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-3"
        >
          <div className="border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
              Design
            </span>

            <span className="mt-1 block text-xs font-bold text-white/65">
              Space-specific configuration
            </span>
          </div>

          <div className="border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
              Material
            </span>

            <span className="mt-1 block text-xs font-bold text-white/65">
              Mild steel fabrication
            </span>
          </div>

          <div className="px-5 py-4">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
              Execution
            </span>

            <span className="mt-1 block text-xs font-bold text-white/65">
              Fabrication & installation support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}