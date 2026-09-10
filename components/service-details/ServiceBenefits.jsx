"use client";

import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceBenefits({ data }) {
  if (!data) return null;

  const benefits = data.items || [];

  return (
    <section className="relative overflow-hidden border-y border-[var(--wm-border)] bg-[var(--wm-surface-soft)] py-10 sm:py-12 lg:py-14">
      {/* ============================================================
          TECHNICAL BACKGROUND
      ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Large background number */}
      <div
        className="pointer-events-none absolute -right-8 top-8 select-none font-mono text-[180px] font-bold leading-none tracking-[-0.08em] text-[var(--wm-primary)] opacity-[0.035] sm:text-[240px] lg:text-[300px]"
        aria-hidden="true"
      >
        06
      </div>

      <div className="wm-container relative z-10">
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* ========================================================
              LEFT INTRO
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Eyebrow */}
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />

              {data.number ? `${data.number} / ` : ""}
              {data.eyebrow || "Service Benefits"}
            </div>

            {/* Heading */}
            <h2 className="wm-heading max-w-xl text-4xl leading-[1.02] sm:text-5xl lg:text-[56px]">
              {data.title || "Why choose this service?"}
            </h2>

            {/* Description */}
            {data.description && (
              <p className="wm-body mt-6 max-w-md text-sm sm:text-base">
                {data.description}
              </p>
            )}

            {/* Approach panel */}
            <div className="mt-9 border-t border-[var(--wm-border)] pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--wm-primary)]">
                    Fabrication Approach
                  </span>

                  <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)]">
                    Built around the project requirement
                  </span>

                  <span className="mt-1 block max-w-sm text-xs leading-5 text-[var(--wm-muted)]">
                    Dimensions, application and site conditions can be
                    considered before fabrication.
                  </span>
                </div>
              </div>
            </div>

            {/* Technical marker */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
                WM / VALUE / {String(benefits.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT BENEFITS
          ======================================================== */}
          <div>
            {/* List heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center justify-between border-b border-[var(--wm-border)] pb-4"
            >
              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                Key Service Benefits
              </span>

              <span className="font-mono text-[9px] font-bold tracking-[0.14em] text-[var(--wm-primary)]">
                {String(benefits.length).padStart(2, "0")} ITEMS
              </span>
            </motion.div>

            {/* Benefit rows */}
            <div className="border-t border-[var(--wm-border)]">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative border-b border-[var(--wm-border)]"
                >
                  <div className="relative flex min-h-[88px] items-center gap-5 px-1 py-5 sm:min-h-[96px] sm:gap-7 sm:py-6">
                    {/* Active background */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 group-hover:w-full" />

                    {/* Number */}
                    <div className="relative z-10 w-8 shrink-0 sm:w-10">
                      <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-[var(--wm-primary)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Check icon */}
                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-soft)] text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white sm:h-10 sm:w-10">
                      <Check
                        size={15}
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Text */}
                    <div className="relative z-10 flex-1">
                      <span className="block text-sm font-extrabold leading-6 text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-base">
                        {item}
                      </span>

                      <span className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.13em] text-[var(--wm-muted)] sm:block">
                        Project-focused benefit
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="relative z-10 hidden sm:block">
                      <div className="flex h-8 w-8 items-center justify-center border border-[var(--wm-border)] text-[var(--wm-muted)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:text-[var(--wm-primary)]">
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          
          </div>
        </div>

        {/* ============================================================
            BOTTOM TECHNICAL FOOTER
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / SERVICE BENEFITS
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Built for project requirements
            <ArrowRight size={13} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}