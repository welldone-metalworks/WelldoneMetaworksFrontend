"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceOverview({ data }) {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--wm-surface-soft)] py-10 sm:py-12 lg:py-14">
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

      <div className="wm-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Left */}
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

            <h2 className="wm-heading max-w-md text-4xl leading-[1.04] sm:text-5xl lg:text-[50px]">
              {data.title}
            </h2>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative border-l-2 border-[var(--wm-primary)] pl-6 sm:pl-8">
              <Quote
                size={28}
                strokeWidth={1.3}
                className="absolute -left-[15px] -top-2 bg-[var(--wm-surface-soft)] text-[var(--wm-primary)]"
              />

              <p className="text-xl font-semibold leading-[1.55] tracking-[-0.02em] text-[var(--wm-heading)] sm:text-2xl">
                {data.description}
              </p>
            </div>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {data.paragraphs?.map((paragraph, index) => (
                <div
                  key={index}
                  className="border-t border-[var(--wm-border)] pt-5"
                >
                  <span className="mb-3 block font-mono text-[10px] font-bold tracking-[0.15em] text-[var(--wm-primary)]">
                    0{index + 1}
                  </span>

                  <p className="wm-body text-sm">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}