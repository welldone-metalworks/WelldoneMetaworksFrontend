"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  MoveRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceHero({ data }) {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden border-b border-[var(--wm-border)] bg-white">
      {/* Technical background */}
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

      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background: "rgba(70,169,216,0.08)",
        }}
      />

      <div className="wm-container relative z-10 pt-28 sm:pt-32 lg:pt-36">
        {/* Breadcrumb / top metadata */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--wm-border)] pb-5"
        >
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
            <Link
              href="/services"
              className="transition-colors hover:text-[var(--wm-primary)]"
            >
              Services
            </Link>

            <span>/</span>

            <span className="text-[var(--wm-primary)]">
              {data.title}
            </span>
          </div>

          <div className="font-mono text-[10px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WM / SERVICE / {data.number}
          </div>
        </motion.div>

        <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-20">
          {/* ============================================================
              LEFT CONTENT
          ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[var(--wm-primary)]" />

              <span className="wm-eyebrow">
                {data.eyebrow}
              </span>
            </div>

            {/* Number */}
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-xs font-bold tracking-[0.18em] text-[var(--wm-primary)]">
                {data.number}
              </span>

              <span className="h-px w-12 bg-[var(--wm-border-blue)]" />
            </div>

            {/* Heading */}
            <h1 className="wm-heading text-[46px] leading-[0.98] sm:text-[58px] lg:text-[68px] xl:text-[76px]">
              {data.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-7 max-w-xl text-xl font-semibold leading-[1.45] tracking-[-0.02em] text-[var(--wm-heading)] sm:text-[22px]">
              {data.subtitle}
            </p>

            {/* Description */}
            <p className="wm-body mt-5 max-w-xl text-sm sm:text-base">
              {data.description}
            </p>

            {/* Technical details */}
            <div className="mt-8 grid max-w-xl grid-cols-2 border-y border-[var(--wm-border)] sm:grid-cols-3">
              <div className="border-r border-[var(--wm-border)] py-4 pr-4">
                <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Material
                </span>

                <span className="mt-1 block text-sm font-bold text-[var(--wm-heading)]">
                  {data.material}
                </span>
              </div>

              <div className="border-r border-[var(--wm-border)] px-4 py-4">
                <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Application
                </span>

                <span className="mt-1 block text-sm font-bold text-[var(--wm-heading)]">
                  {data.application}
                </span>
              </div>

              <div className="col-span-2 py-4 pl-4 sm:col-span-1">
                <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  Service Area
                </span>

                <span className="mt-1 flex items-center gap-1.5 text-sm font-bold text-[var(--wm-heading)]">
                  <MapPin
                    size={13}
                    className="text-[var(--wm-primary)]"
                  />
                  Ahmedabad & Gandhinagar
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={data.primaryCta?.href || "/enquiry"}
                className="group inline-flex items-center justify-center gap-3 bg-[var(--wm-primary)] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[var(--wm-primary-dark)]"
              >
                {data.primaryCta?.label || "Request an Enquiry"}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href={data.secondaryCta?.href || "#service-scope"}
                className="group inline-flex items-center justify-center gap-3 border border-[var(--wm-border-blue)] bg-white px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--wm-heading)] transition-all duration-300 hover:border-[var(--wm-primary)] hover:text-[var(--wm-primary)]"
              >
                {data.secondaryCta?.label || "Explore Service Scope"}

                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--wm-muted)]">
              <CheckCircle2
                size={14}
                className="text-[var(--wm-primary)]"
              />

              Project-specific Mild Steel fabrication
            </div>
          </motion.div>

          {/* ============================================================
              RIGHT IMAGE
          ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[1.08/1] overflow-hidden bg-[var(--wm-surface-blue)]">
              {data.image && (
                <Image
                  src={data.image}
                  alt={`${data.title} - Welldone Metalworks`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,50,74,0.7)] via-transparent to-transparent" />

              {/* Image corner marker */}
              <div className="absolute left-5 top-5 border border-white/30 bg-[var(--wm-navy)]/80 px-3 py-2 backdrop-blur-sm">
                <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-white">
                  WM / FABRICATION
                </span>
              </div>

              {/* Bottom image information */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                      Service Category
                    </span>

                    <span className="mt-1 block text-sm font-bold text-white">
                      {data.application}
                    </span>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>
            </div>

            {/* Technical side label */}
            <div className="absolute -right-3 top-10 hidden lg:block">
              <div className="flex items-center gap-3 bg-white px-3 py-3 shadow-[var(--wm-shadow-md)]">
                <span className="h-2 w-2 bg-[var(--wm-primary)]" />

                <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-heading)]">
                  PROJECT BASED
                </span>
              </div>
            </div>

            {/* Bottom technical bar */}
            <div className="mt-3 flex items-center justify-between border-t border-[var(--wm-border)] pt-3">
              <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
                WELLDONE METALWORKS
              </span>

              <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
                <MoveRight size={13} />
                Ahmedabad
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}