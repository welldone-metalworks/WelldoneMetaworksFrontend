"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RelatedServices({ services = [] }) {
  if (!services?.length) return null;

  return (
    <section className="relative overflow-hidden border-y border-[var(--wm-border)] bg-[var(--wm-surface-blue)] py-10 sm:py-12 lg:py-14">
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

      {/* Large technical background number */}
      <div
        className="pointer-events-none absolute -right-8 bottom-0 select-none font-mono text-[180px] font-bold leading-none tracking-[-0.08em] text-[var(--wm-primary)] opacity-[0.025] sm:text-[240px] lg:text-[300px]"
        aria-hidden="true"
      >
        13
      </div>

      <div className="wm-container relative z-10">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 border-b border-[var(--wm-border-blue)] pb-7 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          {/* LEFT */}
          <div>
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />
              Related Services
            </div>

            <h2 className="wm-heading max-w-2xl text-4xl leading-[1.02] sm:text-5xl lg:text-[52px]">
              You may also need.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
                RELATED SERVICE DIRECTORY
              </span>

              <span className="h-px w-8 bg-[var(--wm-border-blue)]" />
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-primary)]"
            >
              View All Services

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* ============================================================
            SERVICE COUNT BAR
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex items-center justify-between border-b border-[var(--wm-border-blue)] py-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
              Explore Related Fabrication
            </span>
          </div>

          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
            {String(services.length).padStart(2, "0")} SERVICES
          </span>
        </motion.div>

        {/* ============================================================
            IMAGE SERVICE GRID
        ============================================================ */}
        <div
          className={`grid border-l border-[var(--wm-border-blue)] border-t ${
            services.length >= 3
              ? "lg:grid-cols-3"
              : services.length === 2
                ? "lg:grid-cols-2"
                : "lg:grid-cols-1"
          }`}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.slug || service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group border-b border-r border-[var(--wm-border-blue)] bg-white"
            >
              <Link
                href={service.href}
                className="block"
              >
                {/* ==================================================
                    IMAGE
                ================================================== */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--wm-border-blue)] bg-[var(--wm-surface-soft)]">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title || "Related service"}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-mono text-5xl font-bold tracking-[-0.06em] text-[var(--wm-border-blue)]">
                        {service.number ||
                          String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(18,50,74,0.58)] via-transparent to-transparent opacity-70" />

                  {/* Image top metadata */}
                  <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-5 sm:p-6">
                    <span className="bg-white/95 px-3 py-2 font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-primary)] backdrop-blur-sm">
                      {service.number ||
                        String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center border border-white/60 bg-white/90 text-[var(--wm-primary)] backdrop-blur-sm transition-all duration-300 group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                  {/* Image bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-white/75">
                      RELATED SERVICE /{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
                        Fabrication Service
                      </span>

                      <h3 className="mt-2 text-xl font-extrabold leading-7 tracking-tight text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="hidden shrink-0 font-mono text-[10px] font-bold text-[var(--wm-border-blue)] sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Bottom action */}
                  <div className="mt-7 flex items-center justify-between border-t border-[var(--wm-border)] pt-5">
                    <span className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
                      Explore Service

                      <ArrowRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>

                    <MoveUpRight
                      size={15}
                      className="text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--wm-primary)]"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ============================================================
            BOTTOM DIRECTORY STRIP
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.18,
          }}
          className="mt-6 grid border border-[var(--wm-border-blue)] sm:grid-cols-[1fr_auto]"
        >
          {/* LEFT */}
          <div className="bg-white p-6 sm:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] text-[var(--wm-primary)]">
                <ArrowUpRight size={15} />
              </span>

              <div>
                <span className="block font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-primary)]">
                  SERVICE DIRECTORY
                </span>

                <p className="mt-1 text-sm font-bold text-[var(--wm-heading)]">
                  Explore other fabrication services for your project.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <Link
            href="/services"
            className="group flex items-center justify-between gap-6 border-t border-[var(--wm-border-blue)] bg-[var(--wm-surface-soft)] px-6 py-5 transition-colors duration-300 hover:bg-white sm:min-w-[220px] sm:border-l sm:border-t-0 sm:px-7"
          >
            <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
              All Services
            </span>

            <ArrowRight
              size={15}
              className="text-[var(--wm-primary)] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* ============================================================
            FOOTER
        ============================================================ */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--wm-border-blue)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / RELATED SERVICES
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Related service → Project requirement
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}