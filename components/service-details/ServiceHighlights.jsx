"use client";

import {
  ArrowRight,
  Check,
  MoveUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceHighlights({ data }) {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="wm-container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-7 bg-[var(--wm-primary)]" />
              {data.number} / {data.eyebrow}
            </div>

            <h2 className="wm-heading max-w-md text-4xl leading-[1.05] sm:text-5xl">
              {data.title}
            </h2>

            <p className="wm-body mt-6 max-w-md text-sm sm:text-base">
              {data.description}
            </p>

            <div className="mt-9 border-t border-[var(--wm-border)] pt-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-[var(--wm-border-blue)] text-[var(--wm-primary)]">
                  <MoveUpRight size={15} />
                </span>

                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                    Approach
                  </span>

                  <span className="mt-1 block text-xs font-bold text-[var(--wm-heading)]">
                    Project-specific fabrication
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid border-t border-[var(--wm-border)]">
            {data.items?.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group grid gap-5 border-b border-[var(--wm-border)] py-6 sm:grid-cols-[60px_1fr_30px] sm:items-start"
              >
                {/* Number */}
                <div>
                  <span className="font-mono text-xs font-bold tracking-[0.12em] text-[var(--wm-primary)]">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--wm-body)]">
                    {item.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="hidden justify-end sm:flex">
                  <span className="flex h-8 w-8 items-center justify-center border border-[var(--wm-border)] text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex items-center justify-between border-t border-[var(--wm-border)] pt-5">
          <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / FABRICATION
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Project Requirements
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}