"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Ruler,
  Target,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Discuss the intended use, available space and fabrication requirement.",
    icon: Target,
  },
  {
    number: "02",
    title: "Measure",
    text: "Check dimensions and site conditions for suitable projects.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Fabricate",
    text: "Plan and fabricate the required mild-steel components.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Install",
    text: "Complete suitable fabricated works with on-site installation support.",
    icon: ArrowUpRight,
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-wm-surface-soft py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          TECHNICAL BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.035) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 75%)",
        }}
      />

      <div className="wm-container relative">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="border-b border-wm-border pb-9"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-14">
            {/* Main heading */}
            <div>
              <div className="wm-eyebrow">
                <span className="h-px w-8 bg-wm-primary" />
                02 / Our Approach
              </div>

              <h2 className="wm-heading mt-5 max-w-[850px] text-3xl leading-[1.08] sm:text-4xl lg:text-[48px]">
                A practical process from requirement to{" "}
                <span className="text-wm-primary">finished metalwork.</span>
              </h2>

              <p className="wm-body mt-5 max-w-[760px] text-sm sm:text-base">
                Good fabrication begins before the first piece of metal is
                cut. Understanding the requirement, checking dimensions and
                confirming practical details helps create work that is
                appropriate for the space and intended use.
              </p>
            </div>

            {/* Working principle */}
            <div className="border-l-2 border-wm-primary pl-5 lg:ml-auto lg:max-w-[250px]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                Working Principle
              </p>

              <p className="mt-3 text-base font-extrabold leading-6 text-wm-heading">
                Requirement first.
                <br />
                Fabrication follows.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-px w-6 bg-wm-border-blue" />
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-wm-muted">
                  Project-led approach
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            MISSION / WORKING PHILOSOPHY
        ========================================================= */}
        <div className="mt-10 grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="border border-wm-border bg-white p-7 sm:p-9 lg:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-wm-primary">
                  Mission
                </p>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-wm-heading sm:text-3xl">
                  Make the requirement clear.
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-wm-border bg-wm-surface-icon">
                <Target
                  size={21}
                  strokeWidth={2}
                  className="text-wm-primary"
                />
              </div>
            </div>

            <div className="mt-8 h-px bg-wm-border" />

            <p className="mt-7 max-w-xl text-sm leading-7 text-wm-body sm:text-[15px]">
              Our focus is to understand what the customer actually needs,
              translate the requirement into practical fabrication details and
              produce custom MS metalwork suited to the project.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-wm-primary" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                Requirement-led fabrication
              </span>
            </div>
          </motion.div>

          {/* Working philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative overflow-hidden border border-wm-navy bg-wm-navy p-7 sm:p-9 lg:p-10"
          >
            {/* Technical grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                maskImage:
                  "linear-gradient(to left, black, transparent 90%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black, transparent 90%)",
              }}
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-wm-primary-light">
                    Working Philosophy
                  </p>

                  <h3 className="mt-4 max-w-xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Build around the actual space.
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-white/10">
                  <Compass
                    size={21}
                    strokeWidth={2}
                    className="text-wm-primary-light"
                  />
                </div>
              </div>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                Custom fabrication is rarely about simply choosing a standard
                product. Dimensions, layout, intended use and installation
                conditions can all influence the final work. Our approach keeps
                these practical factors at the centre of the process.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-wm-primary-light" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  Built around the project
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PROCESS HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col gap-4 border-b border-wm-border pb-6 sm:flex-row sm:items-end sm:justify-between lg:mt-16"
        >
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-wm-primary">
              Fabrication Flow
            </p>

            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-wm-heading sm:text-2xl">
              From requirement to installation.
            </h3>
          </div>

          <p className="max-w-md text-xs leading-6 text-wm-muted sm:text-right">
            Each project can vary depending on the requirement, dimensions and
            site conditions.
          </p>
        </motion.div>

        {/* =========================================================
            PROCESS WORKFLOW
        ========================================================= */}
        <div className="mt-8 grid gap-0 lg:grid-cols-4">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="group relative border-b border-wm-border bg-white p-6 first:border-t lg:border-b-0 lg:border-l lg:first:border-t-0 lg:last:border-r"
              >
                {/* Connecting line */}
                {index < process.length - 1 && (
                  <div className="absolute right-0 top-[38px] hidden w-7 translate-x-1/2 items-center lg:flex">
                    <span className="h-px w-full bg-wm-border-blue" />

                    <span className="absolute right-0 h-1.5 w-1.5 bg-wm-primary" />
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <span className="text-3xl font-extrabold tracking-[-0.05em] text-wm-border-blue transition-colors duration-300 group-hover:text-wm-primary">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-wm-border bg-wm-surface-icon transition-all duration-300 group-hover:border-wm-border-blue group-hover:bg-wm-surface-blue">
                    <Icon
                      size={17}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />
                  </div>
                </div>

                <h4 className="mt-8 text-lg font-extrabold text-wm-heading">
                  {item.title}
                </h4>

                <p className="mt-2 max-w-xs text-sm leading-6 text-wm-muted">
                  {item.text}
                </p>

                <div className="mt-7 flex items-center gap-2">
                  <span className="h-px w-6 bg-wm-border-blue transition-all duration-300 group-hover:w-10 group-hover:bg-wm-primary" />

                  <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-placeholder">
                    Step {item.number}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM PRINCIPLE BAR
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-8 border border-wm-border bg-white"
        >
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <div className="mt-1 h-2 w-2 shrink-0 bg-wm-primary" />

              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                  The Welldone Approach
                </p>

                <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-wm-heading">
                  Understand the requirement, work with the actual dimensions
                  and build the fabrication around the project.
                </p>
              </div>
            </div>

            <div className="border-t border-wm-border px-5 py-4 lg:border-l lg:border-t-0 lg:px-7">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-wm-primary">
                Ahmedabad & Gandhinagar
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}