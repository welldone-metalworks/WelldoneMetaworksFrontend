"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Images,
  MoveDownRight,
  Ruler,
} from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Technical background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute right-0 top-0 h-[620px] w-[620px] opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,135,197,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.045) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom left, black, transparent 72%)",
            WebkitMaskImage:
              "linear-gradient(to bottom left, black, transparent 72%)",
          }}
        />

        <div className="absolute right-[8%] top-24 h-px w-32 bg-wm-border-blue" />
        <div className="absolute right-[8%] top-24 h-32 w-px bg-wm-border-blue" />

        <div className="absolute bottom-0 left-0 h-40 w-40 border-r border-t border-wm-border opacity-60" />
      </div>

      <div className="wm-container relative">
        {/* Main hero */}
        <div className="grid min-h-[620px] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20 lg:py-28">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-wm-primary" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-wm-primary">
                01 / Our Work
              </span>
            </div>

            {/* Heading */}
            <h1 className="wm-heading mt-7 max-w-5xl text-[44px] leading-[0.98] sm:text-[56px] lg:text-[72px] xl:text-[78px]">
              Metalwork made for{" "}
              <span className="text-wm-primary">real projects.</span>
            </h1>

            {/* Description */}
            <p className="wm-body mt-7 max-w-2xl text-sm sm:text-base">
              Explore selected mild-steel fabrication work by Welldone
              Metalworks. From gates and railings to garden structures,
              gazebos, roofing solutions and project-specific fabrication,
              each project is developed around its practical requirement,
              dimensions and site conditions.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#gallery"
                className="group inline-flex items-center gap-3 bg-wm-primary px-5 py-3.5 text-xs font-extrabold text-white transition-all duration-200 hover:bg-wm-primary-dark"
              >
                Explore Project Gallery

                <ArrowDown
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform duration-200 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#gallery"
                className="group inline-flex items-center gap-2 border border-wm-border bg-white px-5 py-3.5 text-xs font-extrabold text-wm-heading transition-all duration-200 hover:border-wm-primary hover:text-wm-primary"
              >
                View Categories

                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — technical portfolio panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            {/* Vertical technical line */}
            <div className="absolute -left-5 top-0 hidden h-full w-px bg-wm-border lg:block" />

            <div className="border border-wm-border bg-wm-surface-soft">
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-wm-border px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-wm-surface-icon">
                    <Images
                      size={19}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-muted">
                      Portfolio
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-wm-heading">
                      Fabrication Gallery
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold tracking-[0.18em] text-wm-border-blue">
                  01
                </span>
              </div>

              {/* Panel body */}
              <div className="px-6 py-6">
                <p className="text-sm font-semibold leading-6 text-wm-heading">
                  A visual reference of custom MS fabrication work across
                  different project applications.
                </p>

                <div className="mt-6 border-y border-wm-border">
                  <div className="flex items-center justify-between py-4">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
                      Material
                    </span>

                    <span className="text-xs font-extrabold text-wm-heading">
                      Mild Steel
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-wm-border py-4">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
                      Work
                    </span>

                    <span className="text-xs font-extrabold text-wm-heading">
                      Custom Fabrication
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-wm-border py-4">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
                      Area
                    </span>

                    <span className="text-xs font-extrabold text-wm-heading">
                      Ahmedabad & Gandhinagar
                    </span>
                  </div>
                </div>

                <a
                  href="#gallery"
                  className="group mt-6 flex items-center justify-between border border-wm-border bg-white px-4 py-3.5 transition-all duration-200 hover:border-wm-primary"
                >
                  <span className="text-xs font-extrabold text-wm-heading transition-colors group-hover:text-wm-primary">
                    Explore projects
                  </span>

                  <MoveDownRight
                    size={16}
                    strokeWidth={2}
                    className="text-wm-primary transition-transform duration-200 group-hover:translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Small technical marker */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-wm-primary" />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                  Project Reference
                </span>
              </div>

              <span className="text-[10px] font-bold tracking-[0.12em] text-wm-placeholder">
                WM / GALLERY
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom specification strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="border-y border-wm-border"
        >
          <div className="grid sm:grid-cols-3">
            {/* Item 1 */}
            <div className="group flex items-center gap-4 border-b border-wm-border px-5 py-5 sm:border-b-0 sm:border-r sm:px-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-wm-surface-icon">
                <Ruler
                  size={16}
                  strokeWidth={2}
                  className="text-wm-primary"
                />
              </div>

              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                  Fabrication approach
                </p>

                <p className="mt-1 text-xs font-extrabold text-wm-heading">
                  Project-specific
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 border-b border-wm-border px-5 py-5 sm:border-b-0 sm:border-r sm:px-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-wm-surface-icon">
                <Images
                  size={16}
                  strokeWidth={2}
                  className="text-wm-primary"
                />
              </div>

              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                  Portfolio focus
                </p>

                <p className="mt-1 text-xs font-extrabold text-wm-heading">
                  Real fabrication work
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 px-5 py-5 sm:px-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-wm-surface-icon">
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="text-wm-primary"
                />
              </div>

              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                  Service area
                </p>

                <p className="mt-1 text-xs font-extrabold text-wm-heading">
                  Ahmedabad & Gandhinagar
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="flex justify-center py-6">
          <a
            href="#gallery"
            aria-label="Scroll to gallery"
            className="group flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-muted transition-colors hover:text-wm-primary"
          >
            <span>Scroll to projects</span>

            <span className="flex h-7 w-7 items-center justify-center border border-wm-border bg-white transition-all group-hover:border-wm-primary">
              <ArrowDown
                size={13}
                className="transition-transform duration-200 group-hover:translate-y-1"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}