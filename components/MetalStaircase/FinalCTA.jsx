"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#f8fcfe] py-16 sm:py-20 lg:py-24"
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

      <div className="pointer-events-none absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full bg-[#eff9fe] blur-3xl" />

      <div className="pointer-events-none absolute -left-48 bottom-[-350px] h-[650px] w-[650px] rounded-full bg-[#1687c5]/[0.04] blur-3xl" />

      {/* Architectural circles */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[560px] w-[560px] rounded-full border border-[#dceff7]" />

      <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full border border-[#dceff7]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            TOP LABEL
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between border-b border-[#dceff7] pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#1687c5]" />

            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#1687c5]">
              Start Your Project
            </span>
          </div>

          <div className="hidden items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/25 sm:flex">
            <span>Custom Fabrication</span>

            <span className="h-3 w-px bg-[#dceff7]" />

            <span>Ahmedabad · Gandhinagar</span>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <div className="grid gap-8 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pt-14">
          {/* =======================================================
              LEFT — TYPOGRAPHY
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#1687c5]" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#12324a]/35">
                Let's Make It Happen
              </span>
            </div>

            <h2 className="mt-5 max-w-4xl text-[50px] font-black leading-[0.94] tracking-[-0.055em] text-[#12324a] sm:text-[64px] lg:text-[78px]">
              Have a staircase
              <br />
              <span className="text-[#1687c5]">in mind?</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Tell us about your space, staircase type and project
              requirements. We'll help you take the next step toward a
              practical custom metal staircase.
            </p>

            {/* Main CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1687c5] px-7 py-4 text-sm font-black text-white shadow-[0_12px_35px_rgba(22,135,197,0.18)] transition hover:bg-[#0b6fa8]"
              >
                Request a Quote

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              <a
                href="tel:+919649957698"
                className="inline-flex items-center gap-3 rounded-full border border-[#dceff7] bg-white px-6 py-4 text-sm font-black text-[#12324a] transition hover:border-[#1687c5] hover:text-[#1687c5]"
              >
                <Phone className="h-4 w-4 text-[#1687c5]" />
                Call Now
              </a>
            </div>

            {/* Small reassurance */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#12324a]/30">
              <span>Custom Design</span>
              <span>MS Fabrication</span>
              <span>Installation Support</span>
            </div>
          </motion.div>

          {/* =======================================================
              RIGHT — ARCHITECTURAL VISUAL
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative min-h-[430px] lg:min-h-[500px]"
          >
            {/* Main visual panel */}
            <div className="absolute inset-0 overflow-hidden rounded-[36px] border border-[#dceff7] bg-white shadow-[0_20px_60px_rgba(18,50,74,0.07)]">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(#12324a 1px, transparent 1px), linear-gradient(90deg, #12324a 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Blue glow */}
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#eff9fe] blur-3xl" />

              {/* =================================================
                  ABSTRACT STAIRCASE
              ================================================= */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[280px] w-[280px]">
                  {/* Outer circle */}
                  <div className="absolute inset-0 rounded-full border border-[#dceff7]" />

                  {/* Middle circle */}
                  <div className="absolute inset-8 rounded-full border border-[#dceff7]" />

                  {/* Inner circle */}
                  <div className="absolute inset-16 rounded-full border border-[#1687c5]/20" />

                  {/* Staircase-inspired steps */}
                  <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <span
                        key={index}
                        className="absolute left-1/2 h-[2px] w-[105px] origin-left bg-[#1687c5]"
                        style={{
                          top: `${index * 20 + 8}px`,
                          transform: `translateX(-50%) rotate(${
                            index * 7 - 20
                          }deg)`,
                          opacity: 0.25 + index * 0.09,
                        }}
                      />
                    ))}

                    {/* Vertical support */}
                    <span className="absolute left-1/2 top-[8px] h-[125px] w-[2px] -translate-x-1/2 bg-[#12324a]/10" />
                  </div>

                  {/* Center marker */}
                  <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#12324a] shadow-[0_12px_40px_rgba(18,50,74,0.15)]">
                    <Ruler className="h-5 w-5 text-[#46a9d8]" />

                    <span className="mt-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/40">
                      Build
                    </span>

                    <span className="text-xs font-black text-white">
                      01
                    </span>
                  </div>

                  {/* Crosshair */}
                  <span className="absolute left-1/2 top-[-18px] h-8 w-px -translate-x-1/2 bg-[#1687c5]" />
                  <span className="absolute bottom-[-18px] left-1/2 h-8 w-px -translate-x-1/2 bg-[#1687c5]" />
                  <span className="absolute left-[-18px] top-1/2 h-px w-8 -translate-y-1/2 bg-[#1687c5]" />
                  <span className="absolute right-[-18px] top-1/2 h-px w-8 -translate-y-1/2 bg-[#1687c5]" />
                </div>
              </div>

              {/* Technical labels */}
              <span className="absolute left-6 top-6 text-[8px] font-black uppercase tracking-[0.2em] text-[#12324a]/25">
                Custom / MS
              </span>

              <span className="absolute right-6 top-6 text-[8px] font-black uppercase tracking-[0.2em] text-[#12324a]/25">
                WM / 01
              </span>

              <span className="absolute bottom-6 left-6 text-[8px] font-black uppercase tracking-[0.2em] text-[#12324a]/25">
                Design
              </span>

              <span className="absolute bottom-6 right-6 text-[8px] font-black uppercase tracking-[0.2em] text-[#12324a]/25">
                Fabrication
              </span>
            </div>

            {/* =================================================
                FLOATING INFO CARD
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-[#dceff7] bg-white p-4 shadow-[0_15px_40px_rgba(18,50,74,0.10)] sm:left-auto sm:w-[270px] lg:-left-8 lg:bottom-8 lg:right-auto"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7fd]">
                  <MessageCircle className="h-5 w-5 text-[#1687c5]" />
                </div>

                <div>
                  <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-[#1687c5]">
                    Quick Enquiry
                  </span>

                  <span className="mt-1 block text-xs font-bold text-[#12324a]">
                    Prefer WhatsApp?
                  </span>
                </div>

                <ArrowUpRight className="ml-auto h-4 w-4 text-[#1687c5]" />
              </div>

              <a
                href="#quote"
                className="mt-3 block rounded-xl bg-[#f8fcfe] px-3 py-2.5 text-center text-xs font-bold text-[#12324a] transition hover:bg-[#eff9fe]"
              >
                Start a Conversation
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM SERVICE BAR
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid overflow-hidden rounded-2xl border border-[#dceff7] bg-white sm:grid-cols-3"
        >
          <div className="border-b border-[#dceff7] px-6 py-5 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/30">
              01 / Design
            </span>

            <span className="mt-1 block text-sm font-black text-[#12324a]">
              Built around your space
            </span>
          </div>

          <div className="border-b border-[#dceff7] px-6 py-5 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/30">
              02 / Fabrication
            </span>

            <span className="mt-1 block text-sm font-black text-[#12324a]">
              Custom mild steel work
            </span>
          </div>

          <div className="px-6 py-5">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/30">
              03 / Installation
            </span>

            <span className="mt-1 block text-sm font-black text-[#12324a]">
              Project-based support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}