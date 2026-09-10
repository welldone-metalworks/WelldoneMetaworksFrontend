"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageSquareMore,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--wm-border)] bg-[var(--wm-surface-blue)] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          TECHNICAL BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(22,135,197,0.05) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(22,135,197,0.05) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Atmospheric glow */}
        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-white opacity-70 blur-3xl" />

        <div className="absolute -bottom-56 -left-40 h-[500px] w-[500px] rounded-full bg-white opacity-50 blur-3xl" />
      </div>

      <div className="wm-container relative">
        {/* =======================================================
            MAIN CTA FRAME
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden border border-[var(--wm-border-blue)] bg-white"
        >
          {/* =====================================================
              TOP TECHNICAL BAR
          ===================================================== */}
          <div className="flex items-center justify-between border-b border-[var(--wm-border)] px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-muted)]">
                Start Your Project
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--wm-muted)]">
              WM / 06
            </span>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}
          <div className="grid lg:grid-cols-[1fr_0.72fr]">
            {/* ===================================================
                LEFT SIDE
            =================================================== */}
            <div className="relative p-7 sm:p-10 lg:p-14 xl:p-16">
              {/* Small section label */}
              <div className="wm-eyebrow">
                <span className="h-px w-8 bg-[var(--wm-primary)]" />
                <span>Fabrication Enquiry</span>
              </div>

              {/* Heading */}
              <h2 className="wm-heading mt-6 max-w-[700px] text-4xl leading-[1.02] sm:text-5xl lg:text-[58px]">
                Have a fabrication
                <span className="block text-[var(--wm-primary)]">
                  requirement?
                </span>
              </h2>

              {/* Description */}
              <p className="wm-body mt-6 max-w-[590px] text-sm sm:text-base">
                Tell us about the structure, application, dimensions and
                project requirements. We can discuss the appropriate
                fabrication approach for your requirement.
              </p>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="group inline-flex h-12 items-center gap-3 bg-[var(--wm-primary)] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--wm-primary-dark)]"
                >
                  Request an Enquiry

                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="tel:+919649957698"
                  className="group inline-flex h-12 items-center gap-3 border border-[var(--wm-border-blue)] bg-white px-5 text-sm font-bold text-[var(--wm-heading)] transition-all duration-300 hover:border-[var(--wm-primary)] hover:text-[var(--wm-primary)]"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.8}
                    className="text-[var(--wm-primary)]"
                  />

                  Call Us
                </a>
              </div>

              {/* =================================================
                  PROJECT INFORMATION STRIP
              ================================================= */}
              <div className="mt-10 grid max-w-[650px] border-y border-[var(--wm-border)] sm:grid-cols-3">
                <div className="border-b border-[var(--wm-border)] py-4 sm:border-b-0 sm:border-r sm:pr-5">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                    Material
                  </div>

                  <div className="mt-1.5 text-xs font-bold text-[var(--wm-heading)]">
                    Mild Steel
                  </div>
                </div>

                <div className="border-b border-[var(--wm-border)] py-4 sm:border-b-0 sm:border-r sm:px-5">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                    Service Area
                  </div>

                  <div className="mt-1.5 text-xs font-bold text-[var(--wm-heading)]">
                    Ahmedabad
                  </div>
                </div>

                <div className="py-4 sm:pl-5">
                  <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                    Approach
                  </div>

                  <div className="mt-1.5 text-xs font-bold text-[var(--wm-heading)]">
                    Project-based
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
                RIGHT CONTACT PANEL
            =================================================== */}
            <div className="relative overflow-hidden border-t border-[var(--wm-border)] bg-[var(--wm-navy)] p-7 text-white sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              {/* Technical grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to right,
                      white 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      to bottom,
                      white 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Decorative corner */}
              <div className="absolute right-6 top-6 h-12 w-12 border-r border-t border-white/20" />

              <div className="relative">
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10">
                  <MessageSquareMore
                    size={21}
                    strokeWidth={1.5}
                    className="text-[var(--wm-primary-light)]"
                  />
                </div>

                {/* Label */}
                <div className="mt-8 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/50">
                  Let's Talk
                </div>

                {/* Title */}
                <h3 className="mt-2 max-w-[300px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                  Let&apos;s discuss the requirement.
                </h3>

                {/* Short text */}
                <p className="mt-4 max-w-[330px] text-sm leading-6 text-white/65">
                  Share the basic details of your fabrication requirement and
                  we can take the conversation forward.
                </p>

                {/* =================================================
                    CONTACT DETAILS
                ================================================= */}
                <div className="mt-8 border-t border-white/15">
                  {/* Phone */}
                  <a
                    href="tel:+919649957698"
                    className="group flex items-center justify-between border-b border-white/15 py-5"
                  >
                    <div className="flex items-center gap-3">
                      <Phone
                        size={16}
                        strokeWidth={1.6}
                        className="text-[var(--wm-primary-light)]"
                      />

                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/45">
                          Phone
                        </div>

                        <div className="mt-1 text-sm font-bold text-white">
                          +91 96499 57698
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--wm-primary-light)]"
                    />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@welldonemetalworks.com"
                    className="group flex items-center justify-between py-5"
                  >
                    <div className="flex items-center gap-3">
                      <Mail
                        size={16}
                        strokeWidth={1.6}
                        className="text-[var(--wm-primary-light)]"
                      />

                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/45">
                          Email
                        </div>

                        <div className="mt-1 break-all text-sm font-bold text-white">
                          info@welldonemetalworks.com
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-3 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--wm-primary-light)]"
                    />
                  </a>
                </div>

                {/* Footer reference */}
                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--wm-primary-light)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
                    Ahmedabad / Gandhinagar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM BAR
          ===================================================== */}
          <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-6 py-4 sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                Custom Metal Fabrication
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                Requirement → Discussion → Fabrication
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}