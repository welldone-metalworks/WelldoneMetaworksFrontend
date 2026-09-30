"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  MoveUpRight,
  Ruler,
  Sparkles,
} from "lucide-react";

const points = [
  {
    number: "01",
    title: "Custom Staircase Planning",
    description: "Designed around your space and project requirements.",
  },
  {
    number: "02",
    title: "Site-Specific Dimensions",
    description: "Measurements considered before fabrication begins.",
  },
  {
    number: "03",
    title: "Precision Fabrication",
    description: "Accurate cutting, assembly and metal workmanship.",
  },
  {
    number: "04",
    title: "Installation Support",
    description: "From fabricated structure to site installation.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#eff9fe] blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full bg-[#f8fcfe] blur-3xl" />

      {/* Blueprint lines */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          {/* =====================================================
              IMAGE SIDE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Outer frame */}
            <div className="absolute -inset-3 rounded-[34px] border border-[#1687c5]/10" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#12324a] p-2">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="/MetalStaircase/cruved_staircase.png"
                  alt="Custom curved metal staircase"
                  className="h-[460px] w-full object-cover object-center transition duration-700 hover:scale-[1.025] sm:h-[500px] lg:h-[550px]"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131d]/75 via-transparent to-transparent" />

                {/* Image top label */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#07131d]/55 px-3.5 py-2 backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5 text-[#46a9d8]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                    Custom Fabrication
                  </span>
                </div>

                {/* Bottom image label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46a9d8]">
                        Featured Structure
                      </p>

                      <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                        Curved Metal Staircase
                      </h3>
                    </div>

                    <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md sm:flex">
                      <MoveUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

      

            {/* Large decorative number */}
            <div className="absolute -left-8 bottom-4 hidden lg:block">
              <span className="text-[120px] font-black leading-none tracking-[-0.08em] text-[#12324a]/[0.035]">
                01
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              CONTENT SIDE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#1687c5]" />

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#1687c5]">
                Built Around Your Space
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#12324a] sm:text-5xl lg:text-[52px]">
              Where{" "}
              <span className="text-[#1687c5]">engineering</span>{" "}
              meets architectural design.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              A staircase is more than a connection between two levels. It is
              a structural element, a functional requirement and an important
              part of the overall architecture.
            </p>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
              Our approach combines practical planning, accurate fabrication
              and modern design to create metal staircases that fit the space,
              application and project requirements.
            </p>

            {/* =================================================
                FEATURE LIST
            ================================================= */}
            <div className="mt-7 grid gap-x-7 gap-y-4 sm:grid-cols-2">
              {points.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + index * 0.07,
                    duration: 0.45,
                  }}
                  className="group flex gap-3"
                >
                  {/* Number */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f8fcfe] text-[10px] font-black text-[#1687c5] ring-1 ring-[#dceff7] transition group-hover:bg-[#1687c5] group-hover:text-white">
                    {point.number}
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-[#12324a]">
                      {point.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#quote"
                className="group inline-flex items-center gap-2 rounded-full bg-[#12324a] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1687c5]"
              >
                Discuss Your Staircase

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="hidden h-8 w-px bg-[#dceff7] sm:block" />

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#1687c5]" />

                <span className="text-xs font-semibold text-slate-500">
                  Custom-built for your project
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}