"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Lifestyle() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      {/* Soft blue atmospheric glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-wm-primary/[0.08] blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-wm-primary-light/[0.08] blur-[140px]" />

      {/* Architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18,50,74,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18,50,74,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Large background typography */}
      <div className="pointer-events-none absolute left-1/2 top-0 w-full -translate-x-1/2 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <span className="block whitespace-nowrap text-[80px] font-black leading-none tracking-[0.12em] text-wm-navy/[0.035] sm:text-[130px] md:text-[180px] lg:text-[215px]">
            LIFESTYLE
          </span>
        </div>
      </div>

      {/* Decorative circle */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-40 rounded-full border border-wm-primary/[0.08] lg:block" />

      <div className="pointer-events-none absolute right-[9.8%] top-[20.2%] hidden h-32 w-32 rounded-full border border-wm-primary/[0.06] lg:block" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-24">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Premium eyebrow */}
            <div className="inline-flex items-center gap-3 rounded-full border border-wm-border bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-md">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-wm-surface-blue">
                <Sparkles className="h-3.5 w-3.5 text-wm-primary" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-wm-primary-dark sm:text-xs">
                Luxury Outdoor Living
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 max-w-[650px] text-[42px] font-bold leading-[1.05] tracking-[-0.035em] text-wm-heading sm:text-5xl md:text-6xl lg:text-[64px]">
              More Than
              <span className="block">A Structure.</span>

              <span className="mt-2 block bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-primary-light bg-clip-text text-transparent">
                It’s A Lifestyle.
              </span>
            </h2>

            {/* Accent line */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-14 bg-wm-primary" />
              <span className="h-[2px] w-3 bg-wm-primary-light" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-wm-body">
                Designed for living
              </span>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-[16px] leading-8 text-wm-body sm:text-lg sm:leading-9">
              Transform ordinary outdoor spaces into elegant destinations
              designed for relaxation, family gatherings and premium living.
              Our custom MS gazebo, pergola and canopy structures combine
              architectural character with practical outdoor comfort.
            </p>

            {/* =================================================
                PREMIUM FEATURES
            ================================================= */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Premium outdoor environments",
                "Elegant architectural detailing",
                "Custom MS fabrication",
                "Built for villas & rooftops",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-wm-border bg-white/70 px-4 py-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-wm-primary/30 hover:shadow-wm-md"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wm-surface-blue">
                    <Check className="h-3.5 w-3.5 text-wm-primary" />
                  </span>

                  <span className="text-sm font-semibold text-wm-text">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* Primary CTA */}
              <a
                href="tel:9649957698"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-wm-navy px-7 py-4 text-sm font-bold text-white shadow-wm-lg transition-all duration-300 hover:-translate-y-1 hover:bg-wm-primary-dark sm:px-8 sm:text-base"
              >
                <Phone className="h-4 w-4" />

                <span>Discuss Your Project</span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="https://wa.me/919649957698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-wm-border bg-white px-7 py-4 text-sm font-bold text-wm-heading shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-wm-primary/30 hover:text-wm-primary hover:shadow-wm-md sm:px-8 sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />

                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — PREMIUM IMAGE COMPOSITION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative"
          >
            {/* Outer architectural frame */}
            <div className="relative">

              {/* Decorative border frame */}
              <div className="pointer-events-none absolute -right-4 -top-4 hidden h-full w-full rounded-[34px] border border-wm-primary/[0.10] lg:block" />

              {/* Main image */}
              <div className="group relative overflow-hidden rounded-[30px] border border-white bg-white p-2 shadow-[0_30px_80px_rgba(18,50,74,0.14)]">
                <div className="relative overflow-hidden rounded-[24px]">
                  <img
                    src="/gazebo/gazebo_luxury.webp"
                    alt="Luxury gazebo outdoor living space by Welldone Metalworks"
                    className="h-[350px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-[440px] lg:h-[500px]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wm-navy/65 via-transparent to-transparent" />

                  {/* Image label */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                        Outdoor Architecture
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                        Luxury Gazebo
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTTOM IMAGE GRID
              ================================================= */}

              <div className="mt-5 grid grid-cols-2 gap-5">
                {/* Image 2 */}
                <div className="group relative overflow-hidden rounded-[24px] border border-white bg-white p-1.5 shadow-wm-md">
                  <div className="relative overflow-hidden rounded-[19px]">
                    <img
                      src="/gazebo/canopy_luxury.webp"
                      alt="Premium outdoor canopy by Welldone Metalworks"
                      className="h-[190px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[220px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-wm-navy/55 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-white">
                      Premium Canopy
                    </span>
                  </div>
                </div>

                {/* Image 3 */}
                <div className="group relative overflow-hidden rounded-[24px] border border-white bg-white p-1.5 shadow-wm-md">
                  <div className="relative overflow-hidden rounded-[19px]">
                    <img
                      src="/gazebo/gazebo_luxury2.webp"
                      alt="Luxury outdoor gazebo structure by Welldone Metalworks"
                      className="h-[190px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[220px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-wm-navy/55 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-white">
                      Custom Gazebo
                    </span>
                  </div>
                </div>
              </div>


              {/* Small floating number */}
              <div className="absolute -right-3 top-8 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-wm-md backdrop-blur-xl sm:block">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-wm-body">
                  Crafted
                </span>

                <span className="mt-1 block text-sm font-bold text-wm-navy">
                  For Your Space
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM DECORATIVE LINE
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden w-full max-w-[1280px] -translate-x-1/2 px-5 sm:block sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-wm-border to-transparent" />
      </div>
    </section>
  );
}