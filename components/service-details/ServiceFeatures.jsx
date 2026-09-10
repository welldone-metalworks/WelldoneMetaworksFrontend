"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceFeatures({ data }) {
  if (!data) return null;

  return (
    <section
      id="service-scope"
      className="relative overflow-hidden bg-[var(--wm-surface-blue)] py-10 sm:py-12 lg:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="wm-container relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-7 bg-[var(--wm-primary)]" />
              {data.number} / {data.eyebrow}
            </div>

            <h2 className="wm-heading max-w-xl text-4xl leading-[1.04] sm:text-5xl lg:text-[54px]">
              {data.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:ml-auto lg:max-w-xl"
          >
            <p className="wm-body text-sm sm:text-base">
              {data.description}
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-[var(--wm-border-blue)] pt-4">
              <Layers3
                size={16}
                className="text-[var(--wm-primary)]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                Explore the service scope
              </span>
            </div>
          </motion.div>
        </div>

        {/* Sub-service directory */}
        <div className="mt-12 border-y border-[var(--wm-border-blue)]">
          {data.items?.map((item, index) => (
            <motion.div
              key={item.slug || item.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <Link
                href={item.href}
                className="group grid gap-5 border-b border-[var(--wm-border-blue)] bg-white p-6 transition-all duration-300 last:border-b-0 hover:bg-[var(--wm-navy)] sm:grid-cols-[80px_1fr_42px] sm:items-center sm:px-8 sm:py-7"
              >
                {/* Number */}
                <span className="font-mono text-xs font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                  {item.number}
                </span>

                {/* Content */}
                <span>
                  <span className="block text-xl font-extrabold tracking-tight text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {item.title}
                  </span>

                  {item.description && (
                    <span className="mt-2 block max-w-2xl text-sm leading-6 text-[var(--wm-body)] transition-colors duration-300 group-hover:text-slate-300">
                      {item.description}
                    </span>
                  )}

                  <span className="mt-3 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
                    Explore service
                    <ArrowRight size={12} />
                  </span>
                </span>

                {/* Arrow */}
                <span className="flex h-10 w-10 items-center justify-center border border-[var(--wm-border-blue)] text-[var(--wm-primary)] transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Directory footer */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[var(--wm-border-blue)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
            {String(data.items?.length || 0).padStart(2, "0")} SERVICE AREAS
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Each requirement is project-specific
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}