"use client";

import { motion } from "framer-motion";
import {
  Box,
  Gauge,
  GitBranch,
  Layers3,
  MoveDiagonal,
  Ruler,
  ArrowUpRight,
  Check,
} from "lucide-react";

const specs = [
  {
    icon: Ruler,
    number: "01",
    title: "Site Dimensions",
    text: "Design developed around available space, measurements and site conditions.",
  },
  {
    icon: MoveDiagonal,
    number: "02",
    title: "Stair Geometry",
    text: "Riser, tread, radius and staircase configuration considered during planning.",
  },
  {
    icon: Box,
    number: "03",
    title: "Support Structure",
    text: "Stringers, supports and structural members planned for the intended application.",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Load Considerations",
    text: "Construction planned around usage, movement and project requirements.",
  },
  {
    icon: GitBranch,
    number: "05",
    title: "Connection Details",
    text: "Welding and connection points considered during fabrication and assembly.",
  },
  {
    icon: Layers3,
    number: "06",
    title: "Finishing",
    text: "Surface preparation and finishing selected according to the project.",
  },
];

export default function TechnicalDesigns() {
  return (
    <section
      id="technical-design"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BLUEPRINT BACKGROUND
      ========================================================= */}



      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-[#eff9fe] blur-3xl" />

      <div className="pointer-events-none absolute -right-60 bottom-0 h-[550px] w-[550px] rounded-full bg-[#eff9fe] blur-3xl" />

      {/* Decorative technical circle */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border-[70px] border-[#eff9fe]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end"
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#1687c5]" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1687c5]">
                Technical Approach
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-[#12324a] sm:text-5xl lg:text-[56px]">
              Designed with{" "}
              <span className="text-[#1687c5]">precision.</span>
            </h2>

            <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
              Every staircase has different spatial, structural and functional
              requirements. We consider the critical details before fabrication
              begins.
            </p>
          </div>

          {/* Technical counter */}
          <div className="flex items-center gap-3 self-start rounded-2xl border border-[#dceff7] bg-[#f8fcfe] px-4 py-3 lg:self-auto">
            <div className="text-2xl font-black tracking-tight text-[#12324a]">
              06
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                Design Factors
              </p>

              <p className="mt-0.5 text-xs font-bold text-[#1687c5]">
                Before Fabrication
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN TECHNICAL LAYOUT
        ======================================================= */}

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          {/* =====================================================
              LEFT TECHNICAL PANEL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[28px] bg-[#07131d] p-6 text-white sm:p-7"
          >
            {/* Blueprint grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1687c5]/20 blur-3xl" />

            {/* Large background number */}
            <span className="pointer-events-none absolute right-5 top-0 text-[150px] font-black leading-none tracking-[-0.1em] text-white/[0.035]">
              01
            </span>

            <div className="relative">
              {/* Label */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#46a9d8]">
                  Engineering Principle
                </span>

                <span className="text-[9px] font-bold text-white/25">
                  WM / 01
                </span>
              </div>

              {/* Icon */}
              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1687c5] shadow-[0_10px_30px_rgba(22,135,197,.25)]">
                <Ruler className="h-6 w-6" />
              </div>

              <h3 className="mt-6 max-w-[340px] text-2xl font-black leading-tight tracking-[-0.025em] sm:text-3xl">
                Measure first.
                <br />
                Build with confidence.
              </h3>

              <p className="mt-4 max-w-[390px] text-sm leading-6 text-white/50">
                A staircase starts with understanding the space. Dimensions,
                geometry, support requirements and installation conditions are
                considered before fabrication.
              </p>

              {/* Process */}
              <div className="mt-8 space-y-3">
                {[
                  "Measure",
                  "Design",
                  "Fabricate",
                  "Install",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 border-b border-white/[0.08] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[9px] font-black text-[#46a9d8]">
                      0{index + 1}
                    </span>

                    <span className="text-xs font-bold text-white/75">
                      {step}
                    </span>

                    {index < 3 && (
                      <span className="ml-auto text-[9px] text-white/20">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom specification */}
              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5">
                <Check className="h-4 w-4 text-[#46a9d8]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">
                  Project-specific fabrication
                </span>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SPECIFICATION GRID
          ===================================================== */}

          <div className="grid gap-4 sm:grid-cols-2">
            {specs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-[#dceff7] bg-white p-5 shadow-[0_8px_30px_rgba(18,50,74,.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe3f2] hover:shadow-[0_18px_45px_rgba(18,50,74,.10)] sm:p-6"
                >
                  {/* Background number */}
                  <span className="pointer-events-none absolute right-4 top-1 text-[70px] font-black leading-none tracking-[-0.08em] text-[#12324a]/[0.035] transition-colors duration-300 group-hover:text-[#1687c5]/[0.07]">
                    {item.number}
                  </span>

                  {/* Icon + number */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#1687c5] transition-all duration-300 group-hover:bg-[#1687c5] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[9px] font-black tracking-[0.16em] text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="mt-5 text-lg font-black tracking-[-0.015em] text-[#12324a]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom interaction */}
                  <div className="mt-5 flex items-center gap-2 border-t border-[#edf4f7] pt-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-300 transition-colors group-hover:text-[#1687c5]">
                      Technical Detail
                    </span>

                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1687c5]" />
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#1687c5] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}