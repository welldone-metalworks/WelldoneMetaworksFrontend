"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryCTA() {
  return (
    <section className="bg-wm-surface-soft py-10 sm:py-12 lg:py-14">
      <div className="wm-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden border border-wm-navy bg-wm-navy"
        >
          {/* Technical grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              maskImage:
                "linear-gradient(to left, black, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to left, black, transparent 90%)",
            }}
          />

          <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-wm-primary-light" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-wm-primary-light">
                  Start Your Project
                </p>
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl">
                Have a fabrication requirement?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Tell us what you need to build. We can discuss the requirement,
                dimensions and practical details for your project.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400">
                <MapPin size={14} className="text-wm-primary-light" />

                Ahmedabad & Gandhinagar
              </div>
            </div>

            <div>
              <Link
                href="/enquiry"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-wm-primary px-6 py-3.5 text-sm font-extrabold text-white transition-colors duration-200 hover:bg-wm-primary-dark sm:px-7"
              >
                Start an Enquiry

                <ArrowRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}