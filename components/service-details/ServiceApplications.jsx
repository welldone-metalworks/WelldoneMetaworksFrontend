"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPinned,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceApplications({ data }) {
  if (!data) return null;

  const applications = data.items || [];

  return (
    <section className="relative overflow-hidden border-y border-[var(--wm-border)] bg-white py-10 sm:py-12 lg:py-14">
      {/* ============================================================
          TECHNICAL GRID
      ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Large technical background number */}
      <div
        className="pointer-events-none absolute -right-6 top-4 select-none font-mono text-[180px] font-bold leading-none tracking-[-0.08em] text-[var(--wm-primary)] opacity-[0.025] sm:text-[240px] lg:text-[300px]"
        aria-hidden="true"
      >
        09
      </div>

      <div className="wm-container relative z-10">
        {/* ============================================================
            SECTION HEADER
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
              {data.eyebrow || "Applications"}
            </div>

            <h2 className="wm-heading max-w-xl text-4xl leading-[1.02] sm:text-5xl lg:text-[56px]">
              {data.title || "Built around the application."}
            </h2>
          </motion.div>

          {/* RIGHT INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:ml-auto lg:max-w-2xl"
          >
            {data.description && (
              <p className="wm-body max-w-xl text-sm sm:text-base">
                {data.description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--wm-border)] pt-5">
              <div className="flex items-center gap-2">
                <MapPinned
                  size={15}
                  strokeWidth={1.7}
                  className="text-[var(--wm-primary)]"
                />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Application focused
                </span>
              </div>

              <span className="hidden h-3 w-px bg-[var(--wm-border-blue)] sm:block" />

              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                {String(applications.length).padStart(2, "0")} APPLICATIONS
              </span>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            APPLICATION HEADER BAR
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
              Application Areas
            </span>
          </div>

          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
            WM / APPLICATION MATRIX
          </span>
        </motion.div>

        {/* ============================================================
            HORIZONTAL APPLICATION MATRIX
        ============================================================ */}
        <div
          className={`mt-0 grid border-l border-[var(--wm-border)] border-t ${
            applications.length >= 4
              ? "lg:grid-cols-4"
              : applications.length === 3
                ? "lg:grid-cols-3"
                : applications.length === 2
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-1"
          }`}
        >
          {applications.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="group relative min-h-[190px] border-b border-r border-[var(--wm-border)] bg-white"
            >
              {/* Hover background */}
              <div className="pointer-events-none absolute inset-0 bg-[var(--wm-surface-blue)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--wm-primary)]"
                  />
                </div>

                {/* CENTER */}
                <div className="mt-auto">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center border border-[var(--wm-border-blue)] text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                      <Check
                        size={13}
                        strokeWidth={2.5}
                      />
                    </div>

                    <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Application
                    </span>
                  </div>

                  <h3 className="max-w-[230px] text-base font-extrabold leading-6 tracking-tight text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-lg">
                    {item}
                  </h3>
                </div>

                {/* BOTTOM */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-px w-6 bg-[var(--wm-border-blue)] transition-all duration-300 group-hover:w-10 group-hover:bg-[var(--wm-primary)]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--wm-placeholder)]">
                    Project use
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================
            PROJECT APPLICATION STRIP
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 grid border border-[var(--wm-border)] sm:grid-cols-[1.25fr_0.75fr]"
        >
          {/* LEFT */}
          <div className="bg-[var(--wm-surface-soft)] p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                  <MapPinned
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <span className="block font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                    APPLICATION CONSIDERATION
                  </span>

                  <p className="mt-1.5 max-w-lg text-sm font-bold leading-6 text-[var(--wm-heading)]">
                    Application is considered around the intended use,
                    available dimensions and project requirements.
                  </p>
                </div>
              </div>

              <div className="hidden shrink-0 items-center gap-2 border-l border-[var(--wm-border)] pl-6 sm:flex">
                <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                  SCOPE
                </span>

                <ArrowRight
                  size={14}
                  className="text-[var(--wm-primary)]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-6 sm:border-l sm:border-t-0 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                PROJECT FIT
              </span>

              <span className="font-mono text-[9px] font-bold text-[var(--wm-muted)]">
                WM / 09
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-sm font-extrabold text-[var(--wm-heading)]">
                Requirement → Application
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            TECHNICAL FOOTER
        ============================================================ */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / APPLICATIONS
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Application → Requirement → Fabrication
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}