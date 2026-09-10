"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Factory,
  MapPinned,
} from "lucide-react";
import { motion } from "framer-motion";

export default function IndustriesServed({ data }) {
  if (!data) return null;

  const industries = data.items || [];

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
        10
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

              {data.number ? `${data.number} / ` : ""}
              {data.eyebrow || "Industries Served"}
            </div>

            <h2 className="wm-heading max-w-2xl text-3xl leading-[1.02] sm:text-4xl lg:text-[44px]">
              {data.title || "Project environments we serve."}
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
            {data.description && (
              <p className="wm-body text-sm sm:text-base">
                {data.description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--wm-border)] pt-5">
              <div className="flex items-center gap-2">
                <Factory
                  size={15}
                  strokeWidth={1.7}
                  className="text-[var(--wm-primary)]"
                />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Project environments
                </span>
              </div>

              <span className="hidden h-3 w-px bg-[var(--wm-border-blue)] sm:block" />

              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                {String(industries.length).padStart(2, "0")} ENVIRONMENTS
              </span>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            SECTION BAR
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
              Industry & Project Environments
            </span>
          </div>

          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
            WM / ENVIRONMENT INDEX
          </span>
        </motion.div>

        {/* ============================================================
            HORIZONTAL INDUSTRY LIST
        ============================================================ */}
        <div className="border-l border-[var(--wm-border)] border-t">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="group relative border-b border-r border-[var(--wm-border)] bg-white"
            >
              {/* Hover background */}
              <div className="pointer-events-none absolute inset-0 bg-[var(--wm-surface-blue)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 grid min-h-[150px] items-center gap-6 p-6 sm:p-7 lg:grid-cols-[90px_0.75fr_1.25fr_150px_40px] lg:gap-8 lg:px-8">
                {/* ==================================================
                    NUMBER
                ================================================== */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl font-bold leading-none tracking-[-0.06em] text-[var(--wm-border-blue)] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="hidden h-8 w-px bg-[var(--wm-border)] lg:block" />
                </div>

                {/* ==================================================
                    TITLE / ICON
                ================================================== */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                    <Building2
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
                      Environment / {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 text-lg font-extrabold tracking-tight text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* ==================================================
                    DESCRIPTION
                ================================================== */}
                <div className="lg:border-l lg:border-[var(--wm-border)] lg:pl-8">
                  <p className="max-w-xl text-sm leading-7 text-[var(--wm-body)]">
                    {item.description}
                  </p>
                </div>

                {/* ==================================================
                    PROJECT TYPE
                ================================================== */}
                <div className="flex items-center gap-3 lg:justify-end">
                  <div className="hidden h-8 w-8 items-center justify-center border border-[var(--wm-border-blue)] text-[var(--wm-primary)] sm:flex">
                    <Check
                      size={13}
                      strokeWidth={2.5}
                    />
                  </div>

                  <span className="text-[8px] font-bold uppercase leading-4 tracking-[0.14em] text-[var(--wm-muted)]">
                    Relevant
                    <br />
                    project type
                  </span>
                </div>

                {/* ==================================================
                    ARROW
                ================================================== */}
                <div className="hidden lg:flex lg:justify-end">
                  <ArrowUpRight
                    size={17}
                    className="text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--wm-primary)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================
            BOTTOM PROJECT ENVIRONMENT STRIP
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 grid border border-[var(--wm-border)] sm:grid-cols-[1fr_0.7fr]"
        >
          {/* LEFT */}
          <div className="bg-white p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)]">
                <MapPinned
                  size={17}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <span className="block font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  PROJECT ENVIRONMENT
                </span>

                <p className="mt-1.5 max-w-xl text-sm font-bold leading-6 text-[var(--wm-heading)]">
                  Fabrication requirements can vary according to the
                  environment, application and available site conditions.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-6 sm:border-l sm:border-t-0 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                COVERAGE
              </span>

              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                {String(industries.length).padStart(2, "0")} LISTED
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-sm font-extrabold text-[var(--wm-heading)]">
                Project environment → Fabrication
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            FOOTER
        ============================================================ */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / INDUSTRIES SERVED
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Environment → Application → Execution
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}