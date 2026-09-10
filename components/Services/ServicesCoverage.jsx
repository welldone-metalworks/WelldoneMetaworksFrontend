"use client";

import { ArrowUpRight, MapPin, Navigation, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import { serviceCoverage } from "@/data/services";

export default function ServicesCoverage() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--wm-border)] bg-[var(--wm-surface-soft)] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          TECHNICAL BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-50"
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

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--wm-surface-blue)] opacity-70 blur-3xl" />
      </div>

      <div className="wm-container relative">
        {/* =======================================================
            SECTION HEADER
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
                <span>05 / Service Coverage</span>
              </div>

              <h2 className="wm-heading mt-5 max-w-[760px] text-4xl leading-[1.04] sm:text-5xl lg:text-[58px]">
                Local fabrication
                <span className="block text-[var(--wm-primary)]">
                  for project requirements.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-[430px] lg:pb-1">
              <p className="wm-body text-sm sm:text-base">
                Welldone Metalworks serves project requirements across
                Ahmedabad and Gandhinagar, with the scope of work determined
                by the individual project and site requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            SERVICE AREA HEADER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--wm-border)] py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[var(--wm-surface-icon)]">
              <Navigation
                size={16}
                strokeWidth={1.7}
                className="text-[var(--wm-primary)]"
              />
            </div>

            <div>
              <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                Service Area
              </div>

              <div className="mt-0.5 text-xs font-bold text-[var(--wm-heading)]">
                Ahmedabad & Gandhinagar
              </div>
            </div>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--wm-muted)]">
            WM / COVERAGE / 05
          </div>
        </motion.div>

        {/* =======================================================
            MAIN LOCATION PANEL
        ======================================================= */}
        <div className="grid border-b border-l border-[var(--wm-border)] lg:grid-cols-2">
          {serviceCoverage.map((item, index) => (
            <motion.article
              key={item.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border-r border-t border-[var(--wm-border)] bg-white p-7 transition-colors duration-300 hover:bg-[var(--wm-surface-blue)] sm:p-9 lg:p-10"
            >
              {/* =================================================
                  TOP ROW
              ================================================= */}
              <div className="flex items-start justify-between">
                {/* Location icon */}
                <div className="flex h-12 w-12 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-icon)] transition-all duration-300 group-hover:border-[var(--wm-primary)]">
                  <MapPin
                    size={20}
                    strokeWidth={1.6}
                    className="text-[var(--wm-primary)]"
                  />
                </div>

                {/* Number */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--wm-border-blue)]" />

                  <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-[var(--wm-muted)]">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* =================================================
                  LOCATION TITLE
              ================================================= */}
              <div className="mt-10">
                <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-primary)]">
                  Service Location
                </div>

                <h3 className="wm-heading mt-2 text-3xl tracking-tight transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-4xl">
                  {item.city}
                </h3>
              </div>

              {/* Description */}
              <p className="wm-body mt-5 max-w-[500px] text-sm sm:text-base">
                {item.description}
              </p>

              {/* =================================================
                  SERVICE TYPES
              ================================================= */}
              <div className="mt-8 grid border-y border-[var(--wm-border)] sm:grid-cols-3">
                <div className="border-b border-[var(--wm-border)] py-4 sm:border-b-0 sm:border-r sm:pr-4">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Residential
                  </div>

                  <div className="mt-1 text-xs font-bold text-[var(--wm-heading)]">
                    Available
                  </div>
                </div>

                <div className="border-b border-[var(--wm-border)] py-4 sm:border-b-0 sm:border-r sm:px-4">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Commercial
                  </div>

                  <div className="mt-1 text-xs font-bold text-[var(--wm-heading)]">
                    Available
                  </div>
                </div>

                <div className="py-4 sm:pl-4">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Fabrication
                  </div>

                  <div className="mt-1 text-xs font-bold text-[var(--wm-heading)]">
                    Mild Steel
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="mt-7 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Project-based service

                  <ArrowUpRight
                    size={13}
                    className="text-[var(--wm-primary)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                <div className="font-mono text-[9px] text-[var(--wm-muted)]">
                  23°N
                </div>
              </div>

              {/* Hover corner */}
              <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-transparent transition-all duration-300 group-hover:border-[var(--wm-primary-light)]" />
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM TECHNICAL INFORMATION
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="grid border-b border-l border-[var(--wm-border)] sm:grid-cols-2"
        >
          {/* Area */}
          <div className="border-r border-t border-[var(--wm-border)] bg-white p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[var(--wm-surface-icon)]">
                <MapPin
                  size={16}
                  strokeWidth={1.7}
                  className="text-[var(--wm-primary)]"
                />
              </div>

              <div>
                <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                  Coverage
                </div>

                <div className="mt-1.5 text-sm font-bold text-[var(--wm-heading)]">
                  Ahmedabad & Gandhinagar
                </div>

                <p className="mt-2 text-xs leading-5 text-[var(--wm-body)]">
                  Service scope is considered according to the project
                  requirement and location.
                </p>
              </div>
            </div>
          </div>

          {/* Fabrication */}
          <div className="border-r border-t border-[var(--wm-border)] bg-white p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[var(--wm-surface-icon)]">
                <Ruler
                  size={16}
                  strokeWidth={1.7}
                  className="text-[var(--wm-primary)]"
                />
              </div>

              <div>
                <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                  Fabrication Focus
                </div>

                <div className="mt-1.5 text-sm font-bold text-[var(--wm-heading)]">
                  Custom Mild Steel Work
                </div>

                <p className="mt-2 text-xs leading-5 text-[var(--wm-body)]">
                  Dimensions, application and site conditions can influence
                  the fabrication approach.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            FINAL SERVICE AREA NOTE
        ======================================================= */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
              Ahmedabad / Gandhinagar
            </span>
          </div>

          <p className="text-xs text-[var(--wm-muted)]">
            Project requirements are evaluated individually.
          </p>
        </div>
      </div>
    </section>
  );
}