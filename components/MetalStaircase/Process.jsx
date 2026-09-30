"use client";

import { motion } from "framer-motion";
import {
  Check,
  DraftingCompass,
  Hammer,
  Ruler,
  Truck,
  Wrench,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Requirement",
    text: "Understand your staircase requirement, intended use and project expectations.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Measurement",
    text: "Review the available space, dimensions and site conditions.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Design",
    text: "Develop the staircase configuration around the available space.",
    icon: DraftingCompass,
  },
  {
    number: "04",
    title: "Fabrication",
    text: "Cut, assemble and weld the metal structure according to the design.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Finishing",
    text: "Prepare the fabricated structure for delivery and installation.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Installation",
    text: "Position, install and complete the staircase at the project site.",
    icon: Truck,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-[#1687c5]/[0.04] blur-3xl" />

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
          className="flex flex-col justify-between gap-5 border-b border-[#dceff7] pb-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#1687c5]" />

              <span className="text-[10px] font-black uppercase tracking-[0.26em] text-[#1687c5]">
                Our Process
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#12324a] sm:text-5xl lg:text-[56px]">
              From idea to{" "}
              <span className="text-[#1687c5]">
                installed staircase.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-black tracking-[-0.04em] text-[#12324a]">
              06
            </span>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                Project Stages
              </p>

              <p className="mt-0.5 text-xs font-bold text-[#1687c5]">
                One coordinated workflow
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            PROCESS TIMELINE
        ======================================================= */}

        <div className="relative mt-10">
          {/* Main horizontal line */}
          <div className="absolute left-[8.33%] right-[8.33%] top-[31px] hidden h-px bg-[#dceff7] lg:block" />

          {/* Active line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="absolute left-[8.33%] right-[8.33%] top-[31px] hidden h-px origin-left bg-[#1687c5]/50 lg:block"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group relative"
                >
                  {/* =================================================
                      STEP TOP
                  ================================================= */}

                  <div className="relative flex items-center lg:block">
                    {/* Number */}
                    <div className="absolute left-0 top-0 hidden text-[9px] font-black tracking-[0.18em] text-slate-300 lg:block">
                      {step.number}
                    </div>

                    {/* Circle */}
                    <div className="relative z-10 mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full border-[5px] border-white bg-[#12324a] text-white shadow-[0_8px_25px_rgba(18,50,74,.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#1687c5] group-hover:shadow-[0_12px_30px_rgba(22,135,197,.22)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="mt-5 rounded-[20px] border border-transparent p-4 text-center transition-all duration-300 group-hover:border-[#dceff7] group-hover:bg-[#f8fcfe]">
                    <div className="flex items-center justify-center gap-2 lg:hidden">
                      <span className="text-[9px] font-black tracking-[0.18em] text-[#1687c5]">
                        {step.number}
                      </span>

                      <span className="h-px w-4 bg-[#dceff7]" />
                    </div>

                    <h3 className="mt-1 text-base font-black tracking-[-0.01em] text-[#12324a]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-500">
                      {step.text}
                    </p>
                  </div>

                  {/* Mobile connector */}
                  {index !== steps.length - 1 && (
                    <div className="flex justify-center py-1 lg:hidden">
                      <div className="flex flex-col items-center gap-1">
                        <span className="h-3 w-px bg-[#dceff7]" />

                        <Check className="h-3.5 w-3.5 text-[#1687c5]" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM PROCESS BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex flex-col justify-between gap-4 rounded-[20px] border border-[#dceff7] bg-[#f8fcfe] px-5 py-4 sm:flex-row sm:items-center sm:px-6"
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              "Site Measurement",
              "Custom Design",
              "MS Fabrication",
              "Installation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[#1687c5]" />

                <span className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#1687c5] transition-colors hover:text-[#0b6fa8]"
          >
            Start Your Project

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}