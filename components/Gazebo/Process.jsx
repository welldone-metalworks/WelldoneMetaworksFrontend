"use client";

import { motion } from "framer-motion";
import {
  MapPinned,
  PencilRuler,
  Box,
  Hammer,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Site Visit",
    tag: "DISCOVER",
    description:
      "We study your space, take accurate measurements and understand the purpose behind your outdoor structure.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Design Consultation",
    tag: "DESIGN",
    description:
      "A tailored design direction is developed around your architecture, lifestyle and available space.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "3D Planning",
    tag: "VISUALIZE",
    description:
      "Visual planning gives you a clear understanding of the proposed structure before fabrication begins.",
    icon: Box,
  },
  {
    number: "04",
    title: "Fabrication",
    tag: "CRAFT",
    description:
      "Your approved design is transformed into a durable MS structure through precise fabrication.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Installation",
    tag: "ASSEMBLE",
    description:
      "Our team installs the structure with careful alignment, secure assembly and professional execution.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Final Finishing",
    tag: "REFINE",
    description:
      "The final structure is inspected, refined and prepared for a clean, polished outdoor experience.",
    icon: Sparkles,
  },
];

export default function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071b2a] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      {/* Left blue glow */}
      <div className="pointer-events-none absolute -left-48 top-[-180px] h-[600px] w-[600px] rounded-full bg-wm-primary/[0.14] blur-[160px]" />

      {/* Right blue glow */}
      <div className="pointer-events-none absolute -right-48 bottom-[-220px] h-[650px] w-[650px] rounded-full bg-wm-primary-light/[0.09] blur-[170px]" />

      {/* Center subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wm-primary/[0.035] blur-[140px]" />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================= */}

      <div className="pointer-events-none absolute -right-24 top-16 hidden h-[360px] w-[360px] rounded-full border border-wm-primary-light/[0.07] lg:block" />

      <div className="pointer-events-none absolute -right-4 top-28 hidden h-[250px] w-[250px] rounded-full border border-wm-primary-light/[0.06] lg:block" />

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
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20"
        >
          {/* =====================================================
              LEFT — TITLE
          ===================================================== */}

          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wm-primary-light opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-wm-primary-light shadow-[0_0_12px_rgba(70,169,216,0.8)]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary-light sm:text-xs">
                Our Working Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-[600px] text-[38px] font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl md:text-[54px]">
              From Vision
              <span className="block bg-gradient-to-r from-white via-wm-primary-light to-wm-primary bg-clip-text text-transparent">
                To Reality.
              </span>
            </h2>

            {/* Accent */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-[2px] w-12 rounded-full bg-wm-primary-light" />

              <span className="h-[2px] w-5 rounded-full bg-wm-primary/50" />

              <span className="h-[2px] w-2 rounded-full bg-wm-primary/25" />
            </div>
          </div>

          {/* =====================================================
              RIGHT — DESCRIPTION
          ===================================================== */}

          <div className="relative lg:pb-1">
            {/* Vertical accent */}
            <div className="absolute -left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-wm-primary-light/70 via-wm-primary/30 to-transparent lg:block" />

            <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Every project follows a carefully structured journey — from
              understanding your space and developing the design to precise
              MS fabrication, professional installation and final finishing.
              Our process keeps every stage clear, coordinated and focused
              on the finished result.
            </p>

            {/* Process indicators */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {["Plan", "Design", "Fabricate", "Install"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-wm-primary-light" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                      {item}
                    </span>

                    {index < 3 && (
                      <span className="hidden h-px w-4 bg-white/10 sm:block" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            PROCESS GRID
        ======================================================= */}

        <div className="relative mt-11 sm:mt-14">

          {/* =====================================================
              DESKTOP CONNECTOR
          ===================================================== */}

          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[34px] hidden lg:block">
            <div className="h-px bg-gradient-to-r from-transparent via-wm-primary/30 to-transparent" />
          </div>

          {/* Animated connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="pointer-events-none absolute left-[8%] right-[8%] top-[34px] hidden origin-left lg:block"
          >
            <div className="h-px bg-gradient-to-r from-wm-primary-dark via-wm-primary-light to-wm-primary" />
          </motion.div>

          {/* =====================================================
              3 × 2 GRID
          ===================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  className="group relative"
                >
                  {/* =================================================
                      TOP NODE
                  ================================================= */}

                  <div className="relative z-20 flex items-center justify-between px-4">
                    {/* Number */}
                    <div className="relative flex h-[68px] w-[68px] items-center justify-center">
                      {/* Outer ring */}
                      <div className="absolute inset-0 rounded-full border border-wm-primary/25 bg-[#071b2a]" />

                      {/* Glow */}
                      <div className="absolute inset-2 rounded-full bg-wm-primary/10 blur-md transition-all duration-500 group-hover:bg-wm-primary/25" />

                      {/* Icon */}
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-wm-primary-dark via-wm-primary to-wm-primary-light shadow-[0_0_25px_rgba(22,135,197,0.22)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(22,135,197,0.4)]">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Step number */}
                    <span className="text-[10px] font-bold tracking-[0.18em] text-white/25">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div className="relative mt-[-10px] min-h-[235px] overflow-hidden rounded-[26px] border border-white/[0.09] bg-white/[0.045] px-5 pb-5 pt-8 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-wm-primary/30 group-hover:bg-white/[0.07] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.28)] sm:px-6 sm:pb-6">

                    {/* Hover gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-wm-primary/[0.10] via-transparent to-wm-primary-light/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top highlight */}
                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-wm-primary-light/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Giant background number */}
                    <span className="pointer-events-none absolute -right-2 -top-5 text-[105px] font-black leading-none tracking-[-0.08em] text-white/[0.035] transition-all duration-500 group-hover:text-wm-primary/[0.10]">
                      {step.number}
                    </span>

                    {/* Tag */}
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-wm-primary-light" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-wm-primary-light">
                        {step.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 mt-3 text-xl font-bold tracking-tight text-white sm:text-[22px]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 mt-2.5 max-w-sm text-sm leading-6 text-white/50">
                      {step.description}
                    </p>

                    {/* Bottom */}
                    <div className="relative z-10 mt-5 flex items-center justify-between">
                      {/* Progress line */}
                      <div className="flex items-center gap-2">
                        <span className="h-[2px] w-7 rounded-full bg-wm-primary/40 transition-all duration-500 group-hover:w-12 group-hover:bg-wm-primary-light" />

                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/25">
                          Stage {step.number}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-wm-primary/30 group-hover:bg-wm-primary">
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/30 transition-colors duration-500 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-5 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-wm-primary-light shadow-[0_0_10px_rgba(70,169,216,0.7)]" />

            <span className="text-xs font-medium text-white/45">
              Planned with precision. Built with purpose.
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {steps.map((step, index) => (
              <span
                key={step.number}
                className={`h-1 rounded-full transition-all ${
                  index === 0
                    ? "w-8 bg-wm-primary-light"
                    : "w-4 bg-white/10"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}