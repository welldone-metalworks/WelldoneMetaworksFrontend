"use client";

import {
  ArrowDown,
  ArrowUpRight,
  ClipboardList,
  MapPin,
  Ruler,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

export default function EnquiryHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Technical background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[620px] w-[620px] opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.045) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent 72%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 72%)",
        }}
      />

      {/* Technical corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-24 hidden h-32 w-32 border-r border-t border-wm-border-blue lg:block"
      />

      <div className="wm-container relative">
        <div className="grid min-h-[590px] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20 lg:py-28">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-wm-primary" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-wm-primary">
                01 / Start Your Project
              </span>
            </div>

            {/* Heading */}
            <h1 className="wm-heading mt-7 max-w-4xl text-[44px] leading-[0.98] sm:text-[56px] lg:text-[70px]">
              Let&apos;s discuss your{" "}
              <span className="text-wm-primary">
                metal fabrication project.
              </span>
            </h1>

            {/* Description */}
            <p className="wm-body mt-7 max-w-2xl text-sm sm:text-base">
              Have a custom mild-steel fabrication requirement? Share your
              project details with Welldone Metalworks and start a discussion
              around the work, dimensions, application and site requirements.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry-form"
                className="group inline-flex items-center gap-3 bg-wm-primary px-5 py-3.5 text-xs font-extrabold text-white transition-all duration-200 hover:bg-wm-primary-dark"
              >
                Send Your Enquiry

                <ArrowDown
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform duration-200 group-hover:translate-y-1"
                />
              </a>

              <a
                href="tel:+919649957698"
                className="group inline-flex items-center gap-2 border border-wm-border bg-white px-5 py-3.5 text-xs font-extrabold text-wm-heading transition-all duration-200 hover:border-wm-primary hover:text-wm-primary"
              >
                Call +91 96499 57698

                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT TECHNICAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-5 top-0 hidden h-full w-px bg-wm-border lg:block" />

            <div className="border border-wm-border bg-wm-surface-soft">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-wm-border px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-wm-surface-icon">
                    <ClipboardList
                      size={19}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-muted">
                      Project Enquiry
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-wm-heading">
                      Start With Your Requirement
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold tracking-[0.18em] text-wm-border-blue">
                  01
                </span>
              </div>

              {/* Details */}
              <div className="px-6 py-6">
                <p className="text-sm font-semibold leading-6 text-wm-heading">
                  Tell us what you need to fabricate and provide the details
                  that can help us understand the project.
                </p>

                <div className="mt-6 border-y border-wm-border">
                  <InfoRow
                    icon={Wrench}
                    label="Material focus"
                    value="Mild Steel"
                  />

                  <InfoRow
                    icon={Ruler}
                    label="Project approach"
                    value="Custom Fabrication"
                  />

                  <InfoRow
                    icon={MapPin}
                    label="Service area"
                    value="Ahmedabad & Gandhinagar"
                    last
                  />
                </div>

                <a
                  href="#enquiry-form"
                  className="group mt-6 flex items-center justify-between border border-wm-border bg-white px-4 py-3.5 transition-all duration-200 hover:border-wm-primary"
                >
                  <span className="text-xs font-extrabold text-wm-heading transition-colors group-hover:text-wm-primary">
                    Start enquiry
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="text-wm-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-wm-primary" />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                  Enquiry Reference
                </span>
              </div>

              <span className="text-[10px] font-bold tracking-[0.12em] text-wm-placeholder">
                WM / ENQUIRY
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="border-y border-wm-border"
        >
          <div className="grid sm:grid-cols-3">
            <HeroStrip
              number="01"
              title="Share Requirement"
              text="Tell us about the work you need."
            />

            <HeroStrip
              number="02"
              title="Discuss Project"
              text="Discuss application and project details."
              border
            />

            <HeroStrip
              number="03"
              title="Plan The Work"
              text="Work around dimensions and site requirements."
            />
          </div>
        </motion.div>

        {/* Scroll */}
        <div className="flex justify-center py-6">
          <a
            href="#contact-information"
            className="group flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-muted transition-colors hover:text-wm-primary"
          >
            Explore enquiry options

            <span className="flex h-7 w-7 items-center justify-center border border-wm-border bg-white">
              <ArrowDown
                size={13}
                className="transition-transform duration-200 group-hover:translate-y-1"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, last }) {
  return (
    <div
      className={`flex items-center gap-3 py-4 ${
        !last ? "border-b border-wm-border" : ""
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-wm-surface-icon">
        <Icon size={15} className="text-wm-primary" />
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
        <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-wm-muted">
          {label}
        </span>

        <span className="text-right text-xs font-extrabold text-wm-heading">
          {value}
        </span>
      </div>
    </div>
  );
}

function HeroStrip({ number, title, text, border }) {
  return (
    <div
      className={`px-5 py-5 sm:px-6 ${
        border
          ? "border-b border-wm-border sm:border-b-0 sm:border-x"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-primary">
          {number}
        </p>

        <span className="h-1.5 w-1.5 bg-wm-border-blue" />
      </div>

      <p className="mt-3 text-xs font-extrabold text-wm-heading">
        {title}
      </p>

      <p className="mt-1 text-[11px] leading-5 text-wm-muted">
        {text}
      </p>
    </div>
  );
}