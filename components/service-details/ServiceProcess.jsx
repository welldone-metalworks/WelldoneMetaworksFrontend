"use client";

import {
  ArrowRight,
  Check,
  ClipboardList,
  Ruler,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceProcess({ data }) {
  if (!data) return null;

  const steps = data.items || [];

  return (
    <section className="relative overflow-hidden border-y border-[var(--wm-border)] bg-[var(--wm-surface-blue)] py-10 sm:py-12 lg:py-14">
      {/* ============================================================
          TECHNICAL GRID
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

      {/* Large background technical number */}
      <div
        className="pointer-events-none absolute -left-8 bottom-0 select-none font-mono text-[190px] font-bold leading-none tracking-[-0.08em] text-[var(--wm-primary)] opacity-[0.035] sm:text-[250px] lg:text-[320px]"
        aria-hidden="true"
      >
        07
      </div>

      <div className="wm-container relative z-10">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />

              {data.number ? `${data.number} / ` : ""}
              {data.eyebrow || "How We Work"}
            </div>

            <h2 className="wm-heading max-w-xl text-3xl leading-[1.02] sm:text-4xl lg:text-[44px]">
              {data.title || "From requirement to completion."}
            </h2>
          </motion.div>

          {/* Right intro */}
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

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--wm-border-blue)] pt-5">
              <div className="flex items-center gap-2">
                <ClipboardList
                  size={15}
                  className="text-[var(--wm-primary)]"
                />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Requirement
                </span>
              </div>

              <ArrowRight
                size={13}
                className="hidden text-[var(--wm-border-blue)] sm:block"
              />

              <div className="flex items-center gap-2">
                <Ruler
                  size={15}
                  className="text-[var(--wm-primary)]"
                />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Fabrication
                </span>
              </div>

              <ArrowRight
                size={13}
                className="hidden text-[var(--wm-border-blue)] sm:block"
              />

              <div className="flex items-center gap-2">
                <Wrench
                  size={15}
                  className="text-[var(--wm-primary)]"
                />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Installation
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            PROCESS HEADER BAR
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex items-center justify-between border-y border-[var(--wm-border-blue)] py-4"
        >
          <span className="font-mono text-[9px] font-bold tracking-[0.17em] text-[var(--wm-muted)]">
            PROJECT WORKFLOW
          </span>

          <span className="font-mono text-[9px] font-bold tracking-[0.17em] text-[var(--wm-primary)]">
            {String(steps.length).padStart(2, "0")} STAGES
          </span>
        </motion.div>

        {/* ============================================================
            DESKTOP PROCESS
        ============================================================ */}
        <div className="relative mt-14 hidden lg:block">
          {/* Main connector */}
          <div className="absolute left-[10%] right-[10%] top-[31px] h-px bg-[var(--wm-border-blue)]" />

          {/* Active connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: "left center",
            }}
            className="absolute left-[10%] right-[10%] top-[31px] h-px bg-[var(--wm-primary)] opacity-70"
          />

          <div
            className={`grid ${
              steps.length >= 5
                ? "grid-cols-5"
                : steps.length === 4
                  ? "grid-cols-4"
                  : "grid-cols-3"
            }`}
          >
            {steps.map((item, index) => (
              <motion.div
                key={item.number || item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.09,
                }}
                className="group relative px-4"
              >
                {/* Node */}
                <div className="relative z-10 mx-auto flex h-[62px] w-[62px] items-center justify-center border border-[var(--wm-primary)] bg-white transition-all duration-300 group-hover:bg-[var(--wm-primary)]">
                  <span className="font-mono text-xs font-bold tracking-[0.1em] text-[var(--wm-primary)] transition-colors duration-300 group-hover:text-white">
                    {item.number}
                  </span>

                  {/* Corner marker */}
                  <span className="absolute -right-1 -top-1 h-2 w-2 bg-[var(--wm-primary)] transition-colors duration-300 group-hover:bg-white" />
                </div>

                {/* Step content */}
                <div className="mt-8 text-center">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
                    Stage {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-base font-extrabold tracking-tight text-[var(--wm-heading)]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[215px] text-xs leading-6 text-[var(--wm-body)]">
                    {item.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="mx-auto mt-5 h-px w-0 bg-[var(--wm-primary)] transition-all duration-500 group-hover:w-12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================================================
            MOBILE PROCESS
        ============================================================ */}
        <div className="mt-12 lg:hidden">
          {steps.map((item, index) => (
            <motion.div
              key={item.number || item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="group relative flex gap-5 pb-10 last:pb-0"
            >
              {/* Connector */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[22px] top-[50px] bottom-0 w-px bg-[var(--wm-border-blue)]" />
              )}

              {/* Node */}
              <div className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center border border-[var(--wm-primary)] bg-white transition-colors duration-300 group-hover:bg-[var(--wm-primary)]">
                <span className="font-mono text-[10px] font-bold text-[var(--wm-primary)] group-hover:text-white">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 border-b border-[var(--wm-border)] pb-7 last:border-0">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
                  Stage {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-base font-extrabold text-[var(--wm-heading)]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--wm-body)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================
            WORKFLOW SUMMARY
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid gap-px border border-[var(--wm-border-blue)] bg-[var(--wm-border-blue)] sm:grid-cols-3"
        >
          {/* Requirement */}
          <div className="bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[var(--wm-primary)]">
                01
              </span>

              <ClipboardList
                size={16}
                className="text-[var(--wm-border-blue)]"
              />
            </div>

            <h3 className="mt-6 text-sm font-extrabold text-[var(--wm-heading)]">
              Understand the requirement
            </h3>

            <p className="mt-2 text-xs leading-5 text-[var(--wm-muted)]">
              Discuss the application, dimensions and project scope.
            </p>
          </div>

          {/* Fabrication */}
          <div className="bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[var(--wm-primary)]">
                02
              </span>

              <Ruler
                size={16}
                className="text-[var(--wm-border-blue)]"
              />
            </div>

            <h3 className="mt-6 text-sm font-extrabold text-[var(--wm-heading)]">
              Fabricate for the project
            </h3>

            <p className="mt-2 text-xs leading-5 text-[var(--wm-muted)]">
              Develop the required Mild Steel components around the agreed
              requirements.
            </p>
          </div>

          {/* Installation */}
          <div className="bg-[var(--wm-navy)] p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[var(--wm-primary-light)]">
                03
              </span>

              <Check
                size={16}
                className="text-[var(--wm-primary-light)]"
              />
            </div>

            <h3 className="mt-6 text-sm font-extrabold text-white">
              Complete the project
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-300">
              Installation is carried out where it forms part of the
              project requirement.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            FOOTER
        ============================================================ */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[var(--wm-border-blue)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / FABRICATION WORKFLOW
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Requirement to execution
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}