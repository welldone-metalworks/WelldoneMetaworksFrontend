"use client";

import { ArrowRight, CheckCircle2, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import { serviceProcess } from "@/data/services";

export default function ServicesProcess() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--wm-border)] bg-white py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          SUBTLE TECHNICAL BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(22,135,197,0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(22,135,197,0.045) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Soft blue glow */}
        <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--wm-surface-blue)] opacity-60 blur-3xl" />

        <div className="absolute -bottom-52 left-1/3 h-[420px] w-[420px] rounded-full bg-[var(--wm-surface-blue)] opacity-30 blur-3xl" />
      </div>

      <div className="wm-container relative">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-b border-[var(--wm-border)] pb-8"
        >
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            {/* Heading */}
            <div>
              <div className="wm-eyebrow">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                <span>04 / How The Work Starts</span>
              </div>

              <h2 className="wm-heading mt-5 max-w-3xl text-4xl leading-[1.04] sm:text-5xl lg:text-[58px]">
                From requirement
                <span className="text-[var(--wm-primary)]">
                  {" "}
                  to fabrication.
                </span>
              </h2>
            </div>

            {/* Right description */}
            <div className="max-w-[470px] lg:pb-1">
              <p className="wm-body text-sm sm:text-base">
                Every fabrication project begins by understanding what needs
                to be made, where it will be used and how the available
                dimensions influence the work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            PROCESS META BAR
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--wm-border)] py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-[var(--wm-surface-icon)]">
              <Ruler
                size={15}
                strokeWidth={1.7}
                className="text-[var(--wm-primary)]"
              />
            </div>

            <div>
              <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                Project Approach
              </div>

              <div className="mt-0.5 text-xs font-bold text-[var(--wm-heading)]">
                Requirement-led fabrication
              </div>
            </div>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--wm-muted)]">
            WM / PROCESS / 04
          </div>
        </motion.div>

        {/* =======================================================
            DESKTOP PROCESS
        ======================================================= */}
        <div className="mt-12 hidden lg:block">
          <div className="relative">
            {/* Main horizontal line */}
            <div
              aria-hidden="true"
              className="absolute left-[38px] right-[38px] top-[24px] h-px bg-[var(--wm-border-blue)]"
            />

            {/* Blue progress line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "calc(100% - 76px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[38px] top-[24px] h-px bg-[var(--wm-primary)]"
            />

            <div className="grid grid-cols-5">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative px-5 first:pl-0 last:pr-0"
                >
                  {/* Number node */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-[var(--wm-border-blue)] bg-white font-mono text-xs font-bold text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="mt-9">
                    <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-muted)]">
                      Stage {step.number}
                    </div>

                    <h3 className="mt-2.5 min-h-[28px] text-lg font-extrabold tracking-tight text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[210px] text-sm leading-6 text-[var(--wm-body)]">
                      {step.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className="mt-7 flex items-center gap-2">
                      <span className="h-px w-6 bg-[var(--wm-border-blue)] transition-all duration-300 group-hover:w-10 group-hover:bg-[var(--wm-primary)]" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Arrow between stages */}
                  {index < serviceProcess.length - 1 && (
                    <div className="absolute right-1 top-[19px] z-20 flex h-3 w-3 items-center justify-center bg-white text-[var(--wm-primary)]">
                      <ArrowRight size={13} strokeWidth={1.8} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            MOBILE / TABLET PROCESS
        ======================================================= */}
        <div className="mt-10 lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[23px] top-8 w-px bg-[var(--wm-border-blue)]"
            />

            <div className="space-y-0">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group relative flex gap-5 border-b border-[var(--wm-border)] py-7 first:pt-0 last:border-b-0"
                >
                  {/* Number */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white font-mono text-xs font-bold text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                      Stage {step.number}
                    </div>

                    <h3 className="mt-2 text-lg font-extrabold tracking-tight text-[var(--wm-heading)] group-hover:text-[var(--wm-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-6 text-[var(--wm-body)]">
                      {step.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Continue
                      <ArrowRight
                        size={13}
                        className="text-[var(--wm-primary)]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM PROJECT NOTE
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-10 border border-[var(--wm-border-blue)] bg-[var(--wm-surface-soft)]"
        >
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-white">
                <CheckCircle2
                  size={16}
                  strokeWidth={1.8}
                  className="text-[var(--wm-primary)]"
                />
              </div>

              <div>
                <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-primary)]">
                  Project Note
                </div>

                <p className="mt-1 text-sm leading-6 text-[var(--wm-body)]">
                  The exact scope depends on the individual project,
                  dimensions, application and site requirements.
                </p>
              </div>
            </div>

            <div className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--wm-muted)] sm:block">
              REQUIREMENT → FABRICATION
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}