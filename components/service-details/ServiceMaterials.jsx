"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceMaterials({ data }) {
  if (!data) return null;

  const materials = data.items || [];

  return (
    <section className="relative overflow-hidden border-y border-[var(--wm-border)] bg-white py-10 sm:py-12 lg:py-14">
      {/* ============================================================
          TECHNICAL BACKGROUND
      ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Background material mark */}
      <div
        className="pointer-events-none absolute -right-8 top-10 select-none font-mono text-[170px] font-bold leading-none tracking-[-0.08em] text-[var(--wm-primary)] opacity-[0.035] sm:text-[230px] lg:text-[300px]"
        aria-hidden="true"
      >
        MS
      </div>

      <div className="wm-container relative z-10">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Left intro */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow */}
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />

              {data.number ? `${data.number} / ` : ""}
              {data.eyebrow || "Materials"}
            </div>

            {/* Heading */}
            <h2 className="wm-heading max-w-xl text-4xl leading-[1.02] sm:text-5xl lg:text-[56px]">
              {data.title || "Material selected for the project."}
            </h2>

            {/* Description */}
            {data.description && (
              <p className="wm-body mt-6 max-w-md text-sm sm:text-base">
                {data.description}
              </p>
            )}

            {/* Material identity */}
            <div className="mt-9 border-t border-[var(--wm-border)] pt-6">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)]">
                  <Layers3
                    size={22}
                    strokeWidth={1.5}
                    className="text-[var(--wm-primary)]"
                  />

                  <span className="absolute -right-1 -top-1 h-2 w-2 bg-[var(--wm-primary)]" />
                </div>

                <div>
                  <span className="block font-mono text-[9px] font-bold tracking-[0.17em] text-[var(--wm-primary)]">
                    PRIMARY MATERIAL
                  </span>

                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-[var(--wm-heading)]">
                    Mild Steel
                  </h3>

                  <p className="mt-1 max-w-sm text-xs leading-5 text-[var(--wm-muted)]">
                    Fabrication material considered according to the
                    requirements of the project.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical footer */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
                WM / MATERIAL / MS
              </span>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT MATERIAL CONTENT
          ======================================================== */}
          <div>
            {/* Top specification bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between border-y border-[var(--wm-border)] py-4"
            >
              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                Material Information
              </span>

              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                {String(materials.length).padStart(2, "0")} TYPES
              </span>
            </motion.div>

            {/* Material list */}
            <div className="border-b border-[var(--wm-border)]">
              {materials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="group relative border-b border-[var(--wm-border)] last:border-b-0"
                >
                  {/* Hover background */}
                  <div className="pointer-events-none absolute inset-0 bg-[var(--wm-surface-blue)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex gap-5 px-1 py-7 sm:gap-7 sm:px-2 sm:py-8">
                    {/* Number */}
                    <div className="w-8 shrink-0 pt-1 sm:w-10">
                      <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Material icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                      <Layers3
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Material information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                            MATERIAL / {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-2xl">
                            {item.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="mt-1 shrink-0 text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--wm-primary)]"
                        />
                      </div>

                      {item.description && (
                        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--wm-body)]">
                          {item.description}
                        </p>
                      )}

                      {/* Material suitability */}
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                          <Check
                            size={13}
                            className="text-[var(--wm-primary)]"
                          />
                          Project suitable
                        </span>

                        <span className="hidden h-3 w-px bg-[var(--wm-border-blue)] sm:block" />

                        <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                          <ShieldCheck
                            size={13}
                            className="text-[var(--wm-primary)]"
                          />
                          Fabrication focused
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ======================================================
                MATERIAL NOTE
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 grid gap-px border border-[var(--wm-border)] bg-[var(--wm-border)] sm:grid-cols-[1fr_0.85fr]"
            >
              <div className="bg-[var(--wm-surface-soft)] p-6 sm:p-7">
                <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  MATERIAL / CONSIDERATION
                </span>

                <p className="mt-3 text-sm font-bold leading-6 text-[var(--wm-heading)]">
                  Material selection is considered around the intended
                  application and project requirement.
                </p>
              </div>

              <div className="bg-[var(--wm-navy)] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary-light)]">
                    FABRICATION
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-[var(--wm-primary-light)]"
                  />
                </div>

                <p className="mt-3 text-sm font-bold leading-6 text-white">
                  Dimensions and application are considered before fabrication.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM TECHNICAL BAR
        ============================================================ */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--wm-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / MATERIAL SPECIFICATION
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Material → Application → Fabrication
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}