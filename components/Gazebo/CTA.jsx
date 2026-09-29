"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071b2a] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      {/* Main blue glow */}
      <div className="pointer-events-none absolute -left-48 top-[-180px] h-[600px] w-[600px] rounded-full bg-wm-primary/[0.16] blur-[160px]" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute -right-48 bottom-[-200px] h-[650px] w-[650px] rounded-full bg-wm-primary-light/[0.10] blur-[170px]" />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wm-primary/[0.04] blur-[120px]" />

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
          LARGE BACKGROUND TEXT
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-5 hidden -translate-x-1/2 overflow-hidden lg:block">
        <span className="whitespace-nowrap text-[190px] font-black leading-none tracking-[0.13em] text-white/[0.025]">
          CONTACT
        </span>
      </div>

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================= */}

      <div className="pointer-events-none absolute -right-20 top-10 hidden h-[420px] w-[420px] rounded-full border border-wm-primary-light/[0.07] lg:block" />

      <div className="pointer-events-none absolute -right-2 top-20 hidden h-[300px] w-[300px] rounded-full border border-wm-primary-light/[0.05] lg:block" />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >

          {/* =====================================================
              LEFT — EDITORIAL CONTENT
          ===================================================== */}

          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wm-primary-light opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-wm-primary-light shadow-[0_0_12px_rgba(70,169,216,0.8)]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary-light sm:text-xs">
                Let&apos;s Build Something Premium
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-2xl text-[40px] font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-[60px]">
              Your Outdoor Space
              <span className="block bg-gradient-to-r from-white via-wm-primary-light to-wm-primary bg-clip-text text-transparent">
                Starts Here.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Have a gazebo, canopy or custom outdoor structure in mind?
              Tell us about your space and requirements, and let&apos;s
              discuss a solution designed around your project.
            </p>

            {/* =================================================
                FEATURE POINTS
            ================================================= */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Custom MS fabrication",
                "Design-focused solutions",
                "Professional installation",
                "Ahmedabad & nearby areas",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wm-primary/15">
                    <CheckCircle2 className="h-3 w-3 text-wm-primary-light" />
                  </span>

                  <span className="text-xs font-medium text-white/55 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                BOTTOM META
            ================================================= */}

            <div className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-wm-primary-light">
                  Project Consultation
                </p>

                <p className="mt-1 text-xs text-white/35">
                  Discuss your space, design & requirements
                </p>
              </div>

              <span className="h-8 w-px bg-white/10" />

              <span className="text-[10px] font-bold tracking-[0.18em] text-white/25">
                01
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONSULTATION CARD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[34px] bg-wm-primary/[0.06] blur-2xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.065] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8">

              {/* Card top highlight */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-wm-primary-light/70 to-transparent" />

              {/* Internal glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-wm-primary/15 blur-[90px]" />

              <div className="relative">

                {/* =================================================
                    CARD HEADER
                ================================================= */}

                <div className="flex items-start justify-between gap-5">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-wm-primary-dark via-wm-primary to-wm-primary-light shadow-[0_10px_30px_rgba(22,135,197,0.28)]">
                    <PhoneCall className="h-6 w-6 text-white" />
                  </div>

                  {/* Number */}
                  <span className="text-5xl font-black leading-none text-white/[0.055]">
                    01
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-7 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Let&apos;s discuss your
                  <span className="block text-wm-primary-light">
                    project.
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-white/45">
                  Speak directly with our team about your outdoor space,
                  preferred design, dimensions and fabrication requirements.
                </p>

                {/* =================================================
                    PRIMARY CTA
                ================================================= */}

                <a
                  href="tel:9649957698"
                  className="group mt-7 flex items-center justify-between rounded-2xl bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-primary-light px-5 py-4 shadow-[0_10px_30px_rgba(22,135,197,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(22,135,197,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wm-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b2a]"
                >
                  <span className="flex items-center gap-3">
                    <PhoneCall className="h-5 w-5 text-white" />

                    <span>
                      <span className="block text-sm font-bold text-white">
                        Call Now
                      </span>

                      <span className="mt-0.5 block text-[10px] text-white/60">
                        Speak with our team
                      </span>
                    </span>
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>

                {/* =================================================
                    SECONDARY CTA
                ================================================= */}

                <a
                  href="https://wa.me/919649957698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-wm-primary-light/30 hover:bg-wm-primary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wm-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b2a]"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-wm-primary-light" />

                    <span>
                      <span className="block text-sm font-bold text-white">
                        WhatsApp Now
                      </span>

                      <span className="mt-0.5 block text-[10px] text-white/35">
                        Send your project details
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wm-primary-light" />
                </a>

                {/* =================================================
                    CARD FOOTER
                ================================================= */}

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-wm-primary-light shadow-[0_0_10px_rgba(70,169,216,0.7)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                      Consultation
                    </span>
                  </div>

                  <span className="text-[9px] font-medium text-white/25">
                    Ahmedabad Region
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =======================================================
            BOTTOM CTA BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-5 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-wm-primary-light" />

            <p className="text-xs font-medium text-white/40">
              Custom outdoor fabrication designed around your space.
            </p>
          </div>

          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
            Welldone Metalworks
          </span>
        </motion.div>
      </div>
    </section>
  );
}