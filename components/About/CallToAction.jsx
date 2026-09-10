"use client";

import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PHONE = "+919649957698";
const DISPLAY_PHONE = "+91 96499 57698";

export default function CallToAction() {
  return (
    <section className="bg-wm-surface-soft py-10 lg:py-12">
      <div className="wm-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden border border-wm-border bg-wm-navy"
        >
          {/* Technical lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(70,169,216,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(70,169,216,0.4) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <div className="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-wm-primary-light" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary-light">
                  Start a conversation
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Have a metal fabrication requirement?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Tell us what you need to fabricate, where the project is
                located and any dimensions or reference details you already
                have. We can discuss the suitable next step for your
                requirement.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
                <span>Custom MS fabrication</span>
                <span>Site measurement</span>
                <span>Installation support</span>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/enquiry"
                className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-[9px] bg-wm-primary px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-wm-primary-dark"
              >
                Request a Quote
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-[9px] border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10"
              >
                <Phone size={16} />
                {DISPLAY_PHONE}
              </a>

              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-[9px] border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}