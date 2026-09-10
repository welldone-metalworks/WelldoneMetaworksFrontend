"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceFAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!data?.length) return null;

  return (
    <section className="relative overflow-hidden border-y border-[var(--wm-border)] bg-[var(--wm-surface-soft)] py-10 sm:py-12 lg:py-14">
      {/* ============================================================
          TECHNICAL GRID
      ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Large background number */}
      <div
        className="pointer-events-none absolute -right-8 bottom-0 select-none font-mono text-[180px] font-bold leading-none tracking-[-0.08em] text-[var(--wm-primary)] opacity-[0.025] sm:text-[240px] lg:text-[310px]"
        aria-hidden="true"
      >
        12
      </div>

      <div className="wm-container relative z-10">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />
              FAQ / Common Questions
            </div>

            <h2 className="wm-heading max-w-xl text-4xl leading-[1.02] sm:text-5xl lg:text-[56px]">
              Questions before starting the project.
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:ml-auto lg:max-w-xl"
          >
            <p className="wm-body text-sm sm:text-base">
              Common questions about the fabrication requirement, project
              scope and information that may be discussed before work begins.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--wm-border)] pt-5">
              <div className="flex items-center gap-2">
                <HelpCircle
                  size={15}
                  strokeWidth={1.7}
                  className="text-[var(--wm-primary)]"
                />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Service information
                </span>
              </div>

              <span className="hidden h-3 w-px bg-[var(--wm-border-blue)] sm:block" />

              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                {String(data.length).padStart(2, "0")} QUESTIONS
              </span>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            FAQ HEADER BAR
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex items-center justify-between border-y border-[var(--wm-border)] py-4 sm:mt-14"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
              Frequently Asked Questions
            </span>
          </div>

          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
            WM / FAQ REGISTER
          </span>
        </motion.div>

        {/* ============================================================
            FAQ REGISTER
        ============================================================ */}
        <div className="border-l border-[var(--wm-border)] border-t">
          {data.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group border-b border-r border-[var(--wm-border)] bg-white"
              >
                {/* ==================================================
                    QUESTION ROW
                ================================================== */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="relative flex w-full items-center gap-5 px-5 py-5 text-left transition-colors duration-300 hover:bg-[var(--wm-surface-blue)] sm:gap-7 sm:px-7 sm:py-6 lg:px-8"
                  aria-expanded={isOpen}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-0 top-0 w-[3px] bg-[var(--wm-primary)] transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Number */}
                  <span className="w-8 shrink-0 font-mono text-xs font-bold tracking-[0.1em] text-[var(--wm-primary)] sm:w-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Divider */}
                  <span className="hidden h-8 w-px bg-[var(--wm-border)] sm:block" />

                  {/* Question */}
                  <span className="flex-1 text-sm font-extrabold leading-6 text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-base lg:text-lg">
                    {item.question}
                  </span>

                  {/* Status */}
                  <span className="hidden font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--wm-muted)] md:block">
                    {isOpen ? "OPEN" : "VIEW"}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "border-[var(--wm-primary)] bg-[var(--wm-primary)] text-white"
                        : "border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]"
                    }`}
                  >
                    <ChevronDown
                      size={15}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* ==================================================
                    ANSWER
                ================================================== */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.28,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-soft)]">
                        <div className="grid gap-5 px-5 py-6 sm:grid-cols-[58px_1fr_auto] sm:gap-7 sm:px-7 sm:py-7 lg:px-8">
                          {/* Answer marker */}
                          <div className="hidden sm:block">
                            <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                              ANSWER
                            </span>

                            <div className="mt-3 h-px w-8 bg-[var(--wm-primary)]" />
                          </div>

                          {/* Answer text */}
                          <div>
                            <p className="max-w-3xl text-sm leading-7 text-[var(--wm-body)] sm:text-[15px]">
                              {item.answer}
                            </p>
                          </div>

                          {/* Answer status */}
                          <div className="hidden items-start justify-end sm:flex">
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

                              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--wm-muted)]">
                                Service information
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================
            BOTTOM INFORMATION STRIP
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
          className="mt-6 grid border border-[var(--wm-border)] sm:grid-cols-[1.15fr_0.85fr]"
        >
          {/* LEFT */}
          <div className="bg-white p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                <HelpCircle
                  size={17}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <span className="block font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  NEED MORE INFORMATION?
                </span>

                <p className="mt-1.5 text-sm font-bold leading-6 text-[var(--wm-heading)]">
                  Project requirements can be discussed directly before
                  fabrication.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-6 sm:border-l sm:border-t-0 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                NEXT STEP
              </span>

              <ArrowUpRight
                size={15}
                className="text-[var(--wm-primary)]"
              />
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-sm font-extrabold text-[var(--wm-heading)]">
                Discuss your requirement
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            TECHNICAL FOOTER
        ============================================================ */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / FAQ
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Questions → Information → Requirement
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}