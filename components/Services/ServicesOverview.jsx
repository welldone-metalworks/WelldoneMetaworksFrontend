"use client";

import { ArrowUpRight, Check, Ruler, Building2, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Project-specific Mild Steel fabrication",
  "Residential and commercial applications",
  "Dimensions considered around the actual requirement",
  "Site details considered where applicable",
];

export default function ServicesOverview() {
  return (
    <section className="border-b border-[var(--wm-border-light)] bg-[var(--wm-surface-soft)] py-10 sm:py-12">
      <div className="wm-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />
              02 / What We Do
            </div>

            <h2 className="wm-heading mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">
              Fabrication that starts with the requirement.
            </h2>

            <p className="wm-body mt-6 max-w-xl text-base">
              Metal fabrication is rarely a one-size-fits-all requirement.
              Dimensions, available space, intended application and site
              conditions can all influence how a project is fabricated.
            </p>

            <p className="wm-body mt-4 max-w-xl text-base">
              Welldone Metalworks focuses on custom Mild Steel fabrication
              developed around these practical project requirements.
            </p>
          </motion.div>

          {/* Technical content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="border border-[var(--wm-border)] bg-white">
              <div className="flex items-center justify-between border-b border-[var(--wm-border)] px-5 py-4 sm:px-7">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-primary)]">
                  Project Approach
                </span>

                <span className="font-mono text-[10px] text-[var(--wm-muted)]">
                  WM / 02
                </span>
              </div>

              <div className="grid sm:grid-cols-3">
                <div className="border-b border-[var(--wm-border)] p-5 sm:border-b-0 sm:border-r sm:p-7">
                  <Ruler
                    size={21}
                    strokeWidth={1.6}
                    className="text-[var(--wm-primary)]"
                  />

                  <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Dimensions
                  </div>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--wm-heading)]">
                    Planned around the available project dimensions.
                  </p>
                </div>

                <div className="border-b border-[var(--wm-border)] p-5 sm:border-b-0 sm:border-r sm:p-7">
                  <Building2
                    size={21}
                    strokeWidth={1.6}
                    className="text-[var(--wm-primary)]"
                  />

                  <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Application
                  </div>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--wm-heading)]">
                    Residential, commercial and project-specific needs.
                  </p>
                </div>

                <div className="p-5 sm:p-7">
                  <Settings2
                    size={21}
                    strokeWidth={1.6}
                    className="text-[var(--wm-primary)]"
                  />

                  <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Fabrication
                  </div>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--wm-heading)]">
                    Custom Mild Steel work based on project requirements.
                  </p>
                </div>
              </div>

              <div className="border-t border-[var(--wm-border)] px-5 py-5 sm:px-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
                        <Check size={13} strokeWidth={2.5} />
                      </span>

                      <span className="text-sm leading-6 text-[var(--wm-body)]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 text-xs font-semibold text-[var(--wm-muted)]">
              <ArrowUpRight size={15} className="text-[var(--wm-primary)]" />
              Each project can require a different fabrication approach.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}   