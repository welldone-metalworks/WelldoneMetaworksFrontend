"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryShowcase() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="wm-container">
        <div className="mb-10 flex flex-col gap-4 border-b border-wm-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              Featured Work
            </div>

            <h2 className="wm-heading mt-4 text-3xl sm:text-4xl">
              A closer look at the work.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-wm-muted sm:text-right">
            Browse the gallery below to explore different types of custom
            fabrication completed for practical and architectural requirements.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]"
        >
          <div className="group relative min-h-[420px] overflow-hidden bg-wm-surface-soft sm:min-h-[520px]">
            <Image
              src="/gallery/garden/garden01.jpg"
              alt="Custom mild-steel garden structure"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-wm-navy/80 via-wm-navy/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary-light">
                Garden Structure
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Built around the space.
              </h3>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-5">
            <div className="border border-wm-border bg-wm-surface-soft p-7 sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                Fabrication focus
              </p>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-wm-heading">
                Practical details matter.
              </h3>

              <p className="mt-4 text-sm leading-7 text-wm-body">
                Dimensions, available space, intended use and installation
                conditions can influence how a custom fabrication project is
                planned.
              </p>

              <a
                href="#gallery"
                className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-wm-primary"
              >
                View gallery
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="bg-wm-navy p-7 sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary-light">
                Custom MS Work
              </p>

              <p className="mt-5 text-lg font-bold leading-7 text-white">
                From individual metalwork pieces to larger structural
                requirements, every project starts with the requirement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}