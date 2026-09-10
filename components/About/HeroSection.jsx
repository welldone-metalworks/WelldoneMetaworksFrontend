"use client";

import {
  ArrowRight,
  Check,
  MapPin,
  Ruler,
  Wrench,
  MoveUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const heroPoints = [
  "Custom mild-steel fabrication",
  "Site measurement for suitable projects",
  "Installation support for fabricated works",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-wm-border bg-wm-surface-soft">
      {/* -------------------------------------------------------
          BACKGROUND GRID
      ------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,50,74,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(18,50,74,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft blue technical glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-wm-surface-blue opacity-80 blur-3xl"
      />

      <div className="wm-container relative">
        <div className="grid min-h-[650px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-24">
          {/* ===================================================
              LEFT — CONTENT
          =================================================== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="wm-eyebrow mb-6"
            >
              <span className="h-px w-8 bg-wm-primary" />
              About Welldone Metalworks
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="wm-heading max-w-3xl text-4xl leading-[1.04] sm:text-5xl lg:text-[60px]"
            >
              Custom MS metal fabrication
              <span className="block text-wm-primary">
                built around your project.
              </span>
            </motion.h1>

            {/* Main introduction */}
            <motion.p
              variants={fadeUp}
              className="wm-body mt-7 max-w-2xl text-base sm:text-lg"
            >
              Welldone Metalworks provides custom mild-steel fabrication for
              residential, commercial and practical outdoor requirements
              across Ahmedabad and Gandhinagar.
            </motion.p>

            {/* Supporting content */}
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-sm leading-7 text-wm-muted sm:text-[15px]"
            >
              Our approach starts with understanding what needs to be
              fabricated, how the finished work will be used and what the
              available space requires. Depending on the project, this can
              include site measurement, fabrication planning, workshop
              fabrication and suitable on-site installation.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/enquiry"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] bg-wm-primary px-6 py-3.5 text-sm font-bold text-white shadow-[var(--wm-shadow-sm)] transition-all duration-200 hover:bg-wm-primary-dark hover:shadow-[var(--wm-shadow-md)]"
              >
                Discuss Your Requirement

                <ArrowRight
                  size={17}
                  strokeWidth={2.2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] border border-wm-border-blue bg-white px-6 py-3.5 text-sm font-bold text-wm-heading transition-all duration-200 hover:border-wm-primary hover:bg-wm-surface-blue"
              >
                Explore Our Services

                <MoveUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Qualification note */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex items-start gap-3 border-l-2 border-wm-border-blue pl-4"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wm-surface-icon">
                <Check
                  size={12}
                  strokeWidth={3}
                  className="text-wm-primary"
                />
              </div>

              <p className="max-w-xl text-xs leading-5 text-wm-muted sm:text-sm">
                We currently specialize in mild-steel (MS) fabrication.
                Stainless steel and aluminum fabrication are not currently
                offered.
              </p>
            </motion.div>
          </motion.div>

          {/* ===================================================
              RIGHT — FABRICATION PROFILE
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative">
              {/* Main profile panel */}
              <div className="overflow-hidden border border-wm-border-blue bg-white shadow-[var(--wm-shadow-md)]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-wm-border bg-wm-surface-soft px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                      Fabrication profile
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-wm-heading">
                      Welldone Metalworks
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-wm-surface-icon">
                    <Wrench
                      size={19}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />
                  </div>
                </div>

                {/* Visual area */}
                <div className="p-5 sm:p-6">
                  <div className="relative overflow-hidden border border-wm-border bg-wm-surface-soft">
                    {/* Blueprint grid */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-60"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(18,50,74,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(18,50,74,0.055) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Blueprint visual */}
                    <div className="relative flex aspect-[1.25/0.92] items-center justify-center p-8">
                      <div className="relative h-full w-full max-w-[390px]">
                        {/* Outer fabrication frame */}
                        <div className="absolute left-[10%] right-[10%] top-[13%] bottom-[14%] border-[3px] border-wm-navy" />

                        {/* Inner frame */}
                        <div className="absolute left-[16%] right-[16%] top-[20%] bottom-[21%] border border-wm-primary" />

                        {/* Vertical members */}
                        <div className="absolute left-[31%] top-[20%] h-[59%] w-[3px] bg-wm-navy" />

                        <div className="absolute left-1/2 top-[20%] h-[59%] w-[3px] -translate-x-1/2 bg-wm-primary" />

                        <div className="absolute right-[31%] top-[20%] h-[59%] w-[3px] bg-wm-navy" />

                        {/* Diagonal members */}
                        <div className="absolute left-[31%] top-1/2 h-[3px] w-[19%] origin-left rotate-[29deg] bg-wm-primary" />

                        <div className="absolute left-1/2 top-1/2 h-[3px] w-[19%] origin-left -rotate-[29deg] bg-wm-primary" />

                        {/* Dimension line - horizontal */}
                        <div className="absolute bottom-[7%] left-[10%] right-[10%] h-px bg-wm-primary">
                          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-wm-surface-soft px-3 text-[8px] font-extrabold tracking-[0.18em] text-wm-primary">
                            CUSTOM DIMENSION
                          </span>
                        </div>

                        {/* Dimension line - vertical */}
                        <div className="absolute bottom-[14%] right-[5%] top-[13%] w-px bg-wm-border-blue" />

                        <span className="absolute right-[-2%] top-1/2 -translate-y-1/2 rotate-90 bg-wm-surface-soft px-2 text-[7px] font-bold tracking-[0.16em] text-wm-muted">
                          SITE REQUIREMENT
                        </span>
                      </div>
                    </div>

                    {/* Visual label */}
                    <div className="absolute bottom-4 left-4 border border-wm-border-blue bg-white px-3 py-2">
                      <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-wm-primary">
                        MS fabrication
                      </p>
                    </div>
                  </div>

                  {/* Profile details */}
                  <div className="mt-5 grid border border-wm-border sm:grid-cols-2">
                    <div className="border-b border-wm-border p-4 sm:border-r">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-wm-muted">
                        Material
                      </p>

                      <p className="mt-1.5 text-sm font-extrabold text-wm-heading">
                        Mild Steel (MS)
                      </p>
                    </div>

                    <div className="border-b border-wm-border p-4 sm:border-b">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-wm-muted">
                        Fabrication
                      </p>

                      <p className="mt-1.5 text-sm font-extrabold text-wm-heading">
                        Custom Requirement
                      </p>
                    </div>

                    <div className="border-b border-wm-border p-4 sm:border-b-0 sm:border-r">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-wm-muted">
                        Coverage
                      </p>

                      <p className="mt-1.5 text-sm font-extrabold text-wm-heading">
                        Ahmedabad & Gandhinagar
                      </p>
                    </div>

                    <div className="p-4">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-wm-muted">
                        Support
                      </p>

                      <p className="mt-1.5 text-sm font-extrabold text-wm-heading">
                        Measurement + Installation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom profile bar */}
                <div className="border-t border-wm-border bg-wm-surface-soft px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 text-wm-primary"
                    />

                    <p className="text-xs font-semibold leading-5 text-wm-body">
                      Serving residential, commercial and suitable outdoor
                      fabrication requirements across Ahmedabad and Gandhinagar.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  SERVICE FOCUS STRIP
              ================================================= */}
              <div className="mt-4 grid border border-wm-border-blue bg-white sm:grid-cols-3">
                {heroPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`flex items-start gap-3 p-4 ${
                      index !== heroPoints.length - 1
                        ? "border-b border-wm-border sm:border-b-0 sm:border-r"
                        : ""
                    }`}
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-wm-surface-icon">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="text-wm-primary"
                      />
                    </div>

                    <p className="text-xs font-bold leading-5 text-wm-heading">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* =================================================
                  LOCATION LINE
              ================================================= */}
              <div className="mt-4 flex items-center justify-between border-t border-wm-border pt-4">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={15}
                    className="text-wm-primary"
                  />

                  <span className="text-xs font-semibold text-wm-muted">
                    Ahmedabad & Gandhinagar
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Ruler
                    size={15}
                    className="text-wm-primary"
                  />

                  <span className="text-xs font-semibold text-wm-muted">
                    Site measurement available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}