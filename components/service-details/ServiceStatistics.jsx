"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceStatistics({ data }) {
  if (!data) return null;

  return (
    <section className="border-b border-[var(--wm-border)] bg-white py-10 sm:py-12">
      <div className="wm-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="wm-eyebrow mb-3">
                <span className="h-px w-7 bg-[var(--wm-primary)]" />
                {data.number} / {data.eyebrow}
              </div>

              <h2 className="wm-heading text-2xl sm:text-3xl">
                {data.title}
              </h2>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
              TECHNICAL SUMMARY
            </span>
          </div>

          <div className="grid border-y border-[var(--wm-border)] sm:grid-cols-2 lg:grid-cols-4">
            {data.items?.map((item, index) => (
              <div
                key={item.label}
                className={`group relative p-6 sm:p-7 ${
                  index !== data.items.length - 1
                    ? "border-b border-[var(--wm-border)] sm:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--wm-primary)]"
                  />
                </div>

                <span className="mt-8 block text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                  {item.label}
                </span>

                <span className="mt-2 block text-base font-extrabold leading-tight text-[var(--wm-heading)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}