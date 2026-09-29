"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  PaintBucket,
  Wrench,
  BadgeCheck,
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    title: "Premium Powder Coating",
    icon: PaintBucket,
    description:
      "High-quality powder coating finish for elegant appearance & long-lasting durability.",
  },
  {
    title: "Heavy Duty Structure",
    icon: Building2,
    description:
      "Strong metal fabrication engineered for stability, durability & modern outdoor spaces.",
  },
  {
    title: "Weather Resistant Design",
    icon: ShieldCheck,
    description:
      "Designed to handle heat, rain & outdoor conditions with reliable performance.",
  },
  {
    title: "Luxury Architectural Finish",
    icon: Sparkles,
    description:
      "Modern premium finishing crafted to enhance villas & luxury residential properties.",
  },
  {
    title: "Custom Design Options",
    icon: Wrench,
    description:
      "Tailor-made gazebo, pergola & canopy solutions according to your space & style.",
  },
  {
    title: "Professional Installation",
    icon: BadgeCheck,
    description:
      "Expert installation with clean finishing, precision execution & quality workmanship.",
  },
];

const benefits = [
  "Custom-built for your space",
  "Precision fabrication",
  "Premium finishing",
  "Professional installation",
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#fcfbf8] py-12 sm:py-14 lg:py-16">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft white light */}
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white blur-[110px]" />

        {/* Champagne glow */}
        <div className="absolute right-[-120px] top-[15%] h-[420px] w-[420px] rounded-full bg-wm-sand/20 blur-[120px]" />

        {/* Soft green accent */}
        <div className="absolute bottom-[-160px] left-[-100px] h-[420px] w-[420px] rounded-full bg-wm-primary/5 blur-[120px]" />

        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(23,59,42,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(23,59,42,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Large watermark */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 overflow-hidden whitespace-nowrap">
        <span className="text-[90px] font-black tracking-[0.18em] text-wm-heading/[0.035] sm:text-[150px] lg:text-[210px]">
          QUALITY
        </span>
      </div>

      <div className="wm-container relative">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 rounded-full border border-wm-border-sand bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-wm-accent" />

            <span className="text-[11px] font-bold uppercase tracking-[3px] text-wm-accent-dark sm:text-xs">
              Why Choose Welldone Metalworks
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-wm-heading sm:text-5xl md:text-6xl lg:text-[68px]">
            Designed With Purpose.
            <span className="block bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-accent bg-clip-text text-transparent">
              Built To Last.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-wm-body sm:text-lg">
            Every outdoor structure is carefully designed, precisely fabricated
            and professionally installed to create a refined balance of
            durability, functionality and architectural elegance.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN FEATURE LAYOUT
        ========================================================= */}

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
          {/* =======================================================
              FEATURED QUALITY PANEL
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75 }}
            className="group relative overflow-hidden rounded-[32px] border border-wm-border bg-wm-surface-dark p-8 shadow-wm-lg sm:p-10 lg:col-span-5 lg:min-h-[620px] lg:p-12"
          >
            {/* Background glow */}
            <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-wm-primary/20 blur-[90px]" />

            <div className="absolute bottom-[-120px] left-[-100px] h-[300px] w-[300px] rounded-full bg-wm-accent/10 blur-[100px]" />

            {/* Decorative circle */}
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/10 sm:h-32 sm:w-32" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[3px] text-wm-text-light-muted">
                  Our Standard
                </span>

                <span className="text-sm font-semibold text-wm-text-light-muted">
                  01 — 06
                </span>
              </div>

              {/* Icon */}
              <div className="mt-14 flex h-20 w-20 items-center justify-center rounded-[22px] border border-white/10 bg-white/10 shadow-lg backdrop-blur-md">
                <ShieldCheck className="h-10 w-10 text-wm-accent-light" />
              </div>

              {/* Content */}
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-wm-accent-light">
                  Built For Performance
                </p>

                <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight text-wm-text-light sm:text-4xl">
                  Quality that stands up to everyday outdoor life.
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-7 text-wm-text-light-muted sm:text-base">
                  From structural strength to finishing details, every element
                  is considered to deliver an outdoor structure that looks
                  refined and performs reliably for years.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-auto pt-10">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-wm-accent-light" />

                      <span className="text-xs font-medium text-wm-text-light-muted">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              FEATURE CARDS
          ======================================================= */}

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {features.slice(0, 4).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-wm-border bg-white p-7 shadow-wm-sm transition-all duration-500 hover:-translate-y-2 hover:border-wm-border-green hover:shadow-wm-lg sm:p-8"
                >
                  {/* Hover background */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-wm-primary/[0.04] via-transparent to-wm-sand/[0.12] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Decorative number */}
                  <span className="absolute right-6 top-5 text-5xl font-black tracking-tight text-wm-heading/[0.045] transition-colors duration-500 group-hover:text-wm-primary/[0.09]">
                    0{index + 2}
                  </span>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-wm-border-green bg-wm-surface-green transition-all duration-500 group-hover:scale-105 group-hover:border-wm-primary group-hover:bg-wm-primary">
                      <Icon className="h-7 w-7 text-wm-primary transition-colors duration-500 group-hover:text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-7 text-xl font-bold leading-snug text-wm-heading sm:text-2xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-wm-body sm:text-base">
                      {item.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className="mt-7 flex items-center justify-between">
                      <div className="h-[3px] w-10 rounded-full bg-gradient-to-r from-wm-primary-dark to-wm-primary transition-all duration-500 group-hover:w-16" />

                      <ArrowUpRight className="h-5 w-5 text-wm-muted opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-wm-primary group-hover:opacity-100" />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* =====================================================
                BOTTOM WIDE FEATURE
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-[26px] border border-wm-border-sand bg-gradient-to-br from-wm-surface-sand to-white p-7 shadow-wm-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-wm-md sm:col-span-2 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-wm-accent/10 blur-[70px]" />

              <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-wm-accent-dark via-wm-accent to-wm-accent-light shadow-wm-md">
                    <Wrench className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-[2px] text-wm-accent-dark">
                        Made For You
                      </span>

                      <span className="h-1 w-1 rounded-full bg-wm-accent" />
                    </div>

                    <h3 className="mt-2 text-2xl font-bold text-wm-heading">
                      Custom Design & Professional Installation
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-wm-body">
                      Tailored outdoor structures designed around your
                      dimensions, architectural style and functional
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-wm-primary">
                  <span>Precision Workmanship</span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM ASSURANCE STRIP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[22px] border border-wm-border bg-white/80 shadow-wm-sm backdrop-blur-md"
        >
          <div className="grid divide-y divide-wm-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center gap-3 px-6 py-5">
              <ShieldCheck className="h-5 w-5 text-wm-primary" />

              <span className="text-sm font-semibold text-wm-heading">
                Durable MS Fabrication
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 px-6 py-5">
              <Sparkles className="h-5 w-5 text-wm-accent" />

              <span className="text-sm font-semibold text-wm-heading">
                Premium Finishing
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 px-6 py-5">
              <BadgeCheck className="h-5 w-5 text-wm-primary" />

              <span className="text-sm font-semibold text-wm-heading">
                Professional Execution
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}