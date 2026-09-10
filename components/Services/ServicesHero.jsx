"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Ruler,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--wm-border)] bg-white">
      {/* =========================================================
          TECHNICAL BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Engineering grid */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(22,135,197,0.055) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(22,135,197,0.055) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Soft blue atmosphere */}
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--wm-surface-blue)] opacity-70 blur-3xl" />

        {/* Bottom soft area */}
        <div className="absolute -bottom-48 left-[35%] h-[400px] w-[400px] rounded-full bg-[var(--wm-surface-blue)] opacity-40 blur-3xl" />
      </div>

      <div className="wm-container relative">
        <div className="grid min-h-[620px] items-center gap-12 pb-14 pt-24 sm:pb-16 sm:pt-28 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:pb-20 lg:pt-28 xl:min-h-[650px] xl:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />
              <span>01 / Our Services</span>
            </div>

            {/* Heading */}
            <h1 className="wm-heading mt-6 max-w-[720px] text-[44px] leading-[0.98] sm:text-[52px] md:text-[60px] lg:text-[60px] xl:text-[66px]">
              Metal fabrication
              <span className="block text-[var(--wm-primary)]">
                designed around
              </span>
              <span className="block">the project.</span>
            </h1>

            {/* Description */}
            <p className="wm-body mt-7 max-w-[610px] text-[15px] sm:text-base">
              Custom Mild Steel fabrication for residential, commercial and
              project-specific requirements across Ahmedabad and Gandhinagar.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#services"
                className="group inline-flex h-12 items-center gap-3 bg-[var(--wm-primary)] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--wm-primary-dark)]"
              >
                Explore Services
                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/enquiry"
                className="group inline-flex h-12 items-center gap-3 border border-[var(--wm-border-blue)] bg-white px-5 text-sm font-bold text-[var(--wm-heading)] transition-all duration-300 hover:border-[var(--wm-primary)] hover:text-[var(--wm-primary)]"
              >
                Discuss Your Requirement
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* =================================================
                TECHNICAL INFORMATION STRIP
            ================================================= */}
            <div className="mt-10 max-w-[650px] border-y border-[var(--wm-border)]">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {/* Material */}
                <div className="border-b border-[var(--wm-border)] py-4 sm:border-b-0 sm:border-r sm:pr-5">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-muted)]">
                    Material
                  </div>

                  <div className="mt-1.5 text-sm font-bold text-[var(--wm-heading)]">
                    Mild Steel
                  </div>
                </div>

                {/* Approach */}
                <div className="border-b border-[var(--wm-border)] py-4 sm:border-b-0 sm:border-r sm:px-5">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-muted)]">
                    Approach
                  </div>

                  <div className="mt-1.5 text-sm font-bold text-[var(--wm-heading)]">
                    Custom Fabrication
                  </div>
                </div>

                {/* Area */}
                <div className="py-4 sm:pl-5">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-muted)]">
                    Service Area
                  </div>

                  <div className="mt-1.5 text-sm font-bold text-[var(--wm-heading)]">
                    Ahmedabad & Gandhinagar
                  </div>
                </div>
              </div>
            </div>

            {/* Small technical reference */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--wm-border-blue)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                WM / FABRICATION / 01
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE COMPOSITION
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
              {/* =================================================
                  IMAGE FRAME
              ================================================= */}
              <div className="relative aspect-[1.12/1] overflow-hidden border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] shadow-[var(--wm-shadow-lg)]">
                <Image
                  src="/Banner/banner02.webp"
                  alt="Metal fabrication services by Welldone Metalworks"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />

                {/* Very subtle image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,50,74,0.28)] via-transparent to-transparent" />

                {/* Image top technical label */}
                <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/30 bg-[rgba(18,50,74,0.55)] px-3 py-2 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 bg-[var(--wm-primary-light)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    Metal Fabrication
                  </span>
                </div>

                {/* Image bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="max-w-[330px]">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Fabrication Focus
                    </div>

                    <div className="mt-1.5 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                      Project-specific MS work
                    </div>
                  </div>
                </div>

                {/* Corner technical marks */}
                <div className="absolute right-4 top-4 h-10 w-10 border-r border-t border-white/35" />

                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-white/35 text-white">
                  <ArrowUpRight size={15} />
                </div>
              </div>


              {/* =================================================
                  EXTERNAL TECHNICAL CORNERS
              ================================================= */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 hidden h-16 w-16 border-r border-t border-[var(--wm-primary-light)] lg:block"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 hidden h-16 w-16 border-b border-l border-[var(--wm-primary-light)] lg:block"
              />

              {/* Vertical measurement line */}
              <div
                aria-hidden="true"
                className="absolute -right-7 top-[18%] hidden h-[46%] w-px bg-[var(--wm-border-blue)] xl:block"
              >
                <span className="absolute -right-1.5 top-0 h-3 w-3 border border-[var(--wm-primary)] bg-white" />
                <span className="absolute -right-1.5 bottom-0 h-3 w-3 border border-[var(--wm-primary)] bg-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--wm-muted)]">
          Explore services
        </span>

        <span className="h-8 w-px bg-[var(--wm-border-blue)]" />
      </div>
    </section>
  );
}