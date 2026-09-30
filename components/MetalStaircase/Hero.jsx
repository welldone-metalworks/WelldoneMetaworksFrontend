"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "9649957698";
const WHATSAPP = "919649957698";

const whatsappMessage =
  "Hi Welldone Metalworks, I am interested in a custom metal staircase. Please share details and a quotation.";

const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const highlights = [
  {
    icon: Ruler,
    text: "Custom Design",
  },
  {
    icon: ShieldCheck,
    text: "Strong Structure",
  },
  {
    icon: CheckCircle2,
    text: "Precision Work",
  },
  {
    icon: Phone,
    text: "Installation",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07131d] text-white">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/images/metal-staircase/hero.jpg"
          alt="Custom metal staircase fabrication"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark image treatment */}
      <div className="absolute inset-0 -z-20 bg-[#07131d]/80" />

      {/* Left-heavy gradient for text readability */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#07131d] via-[#07131d]/95 to-[#07131d]/55" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-20 h-40 bg-gradient-to-t from-[#07131d] to-transparent" />

      {/* =========================================================
          BLUEPRINT GRID
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* =========================================================
          DECORATIVE ARCHITECTURAL CIRCLES
      ========================================================= */}
      <div className="pointer-events-none absolute -right-[240px] top-[-180px] -z-10 h-[620px] w-[620px] rounded-full border border-white/[0.07]" />

      <div className="pointer-events-none absolute -right-[120px] top-[-40px] -z-10 h-[420px] w-[420px] rounded-full border border-[#1687c5]/20" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[-200px] -z-10 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[690px] items-center gap-10 py-12 sm:py-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:py-14">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 backdrop-blur-xl"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1687c5]/20">
                <Sparkles className="h-3.5 w-3.5 text-[#46a9d8]" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                Custom Metal Staircase Fabrication
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="max-w-[760px] text-[46px] font-black leading-[0.94] tracking-[-0.045em] sm:text-[58px] md:text-[64px] lg:text-[68px] xl:text-[76px]">
              <span className="block text-white">Staircases</span>

              <span className="block text-[#46a9d8]">
                Built to Rise.
              </span>

              <span className="block text-white/95">
                Designed to Impress.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8">
              Custom-fabricated metal staircases designed around your space,
              architectural requirements and functional needs — from elegant
              spiral and curved staircases to robust industrial structures.
            </p>

            {/* =================================================
                CTA
            ================================================= */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {/* CALL NOW */}
              <a
                href={`tel:${PHONE}`}
                aria-label="Call Welldone Metalworks"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1687c5] px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_45px_rgba(22,135,197,.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#46a9d8] hover:shadow-[0_18px_50px_rgba(22,135,197,.4)] sm:px-7 sm:py-4"
              >
                <Phone className="h-4 w-4" />

                Call Now

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Welldone Metalworks on WhatsApp"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 sm:px-7 sm:py-4"
              >
                <FaWhatsapp className="h-5 w-5 text-[#25D366]" />

                WhatsApp

                <ArrowRight className="h-4 w-4 text-[#46a9d8] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}
            <div className="mt-8 grid max-w-[650px] grid-cols-2 gap-x-5 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                      duration: 0.45,
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1687c5]/15">
                      <Icon className="h-3.5 w-3.5 text-[#46a9d8]" />
                    </div>

                    <span className="text-[11px] font-semibold leading-4 text-white/60 sm:text-xs">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            {/* Outer glow */}
            <div className="absolute -inset-5 rounded-[38px] bg-[#1687c5]/10 blur-2xl" />

            {/* Technical corner markers */}
            <div className="absolute -left-3 -top-3 z-20 h-12 w-12 border-l border-t border-[#46a9d8]/60" />

            <div className="absolute -bottom-3 -right-3 z-20 h-12 w-12 border-b border-r border-[#46a9d8]/60" />

            {/* Image frame */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.06] p-2.5 shadow-2xl backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[23px]">
                <img
                  src="/MetalStaircase/spiral_staircase.png"
                  alt="Premium custom spiral metal staircase"
                  className="h-[570px] w-full object-cover object-center transition duration-700 hover:scale-[1.025]"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131d]/90 via-transparent to-transparent" />

                {/* Vertical label */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#07131d]/55 px-3 py-2 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#46a9d8] shadow-[0_0_12px_#46a9d8]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                    Featured Staircase
                  </span>
                </div>

                {/* Image bottom card */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#07131d]/80 p-4 backdrop-blur-xl">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#46a9d8]">
                        Signature Design
                      </p>

                      <h3 className="mt-1 text-base font-black text-white sm:text-lg">
                        Custom Spiral Staircase
                      </h3>

                      <p className="mt-1 text-xs text-white/45">
                        Designed • Fabricated • Installed
                      </p>
                    </div>

                    {/* WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp about custom spiral staircase"
                      className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1687c5] transition hover:bg-[#25D366]"
                    >
                      <FaWhatsapp className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING TECHNICAL BADGE
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-7 -left-8 z-30 hidden rounded-2xl border border-white/10 bg-[#102433]/95 p-4 shadow-2xl backdrop-blur-xl xl:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1687c5]/20">
                  <Ruler className="h-5 w-5 text-[#46a9d8]" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Approach
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    Measure • Design • Build
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating number */}
            <div className="absolute -right-5 top-14 hidden xl:block">
              <span className="text-[110px] font-black leading-none tracking-[-0.08em] text-white/[0.035]">
                01
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================= */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex">
        <span className="h-px w-8 bg-white/20" />

        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
          Explore
        </span>

        <span className="h-px w-8 bg-white/20" />
      </div>
    </section>
  );
}