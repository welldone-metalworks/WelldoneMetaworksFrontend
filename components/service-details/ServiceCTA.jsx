"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquareMore,
  Phone,
  Ruler,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCTA({ data }) {
  if (!data) return null;

  return (
    <section className="relative overflow-hidden border-t border-[var(--wm-border)] bg-[var(--wm-surface-blue)] py-10 sm:py-12 lg:py-14">
      {/* ============================================================
          TECHNICAL GRID
      ============================================================ */}
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

      {/* Background technical mark */}
      <div
        className="pointer-events-none absolute -right-10 bottom-[-35px] select-none font-mono text-[170px] font-bold leading-none tracking-[-0.08em] text-[var(--wm-primary)] opacity-[0.025] sm:text-[230px] lg:text-[290px]"
        aria-hidden="true"
      >
        WM
      </div>

      <div className="wm-container relative z-10">
        {/* ============================================================
            MAIN CTA FRAME
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border border-[var(--wm-border-blue)] bg-white"
        >
          {/* ========================================================
              TOP BAR
          ======================================================== */}
          <div className="flex flex-col justify-between gap-3 border-b border-[var(--wm-border)] px-5 py-4 sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-primary)]">
                {data.eyebrow || "Project Enquiry"}
              </span>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
              WELLDONE METALWORKS / ENQUIRY
            </span>
          </div>

          {/* ========================================================
              MAIN INTRO
          ======================================================== */}
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            {/* LEFT */}
            <div className="p-7 sm:p-9 lg:p-12">
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-[var(--wm-surface-blue)] text-[var(--wm-primary)] sm:flex">
                  <MessageSquareMore
                    size={20}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <span className="font-mono text-[9px] font-bold tracking-[0.17em] text-[var(--wm-primary)]">
                    DISCUSS YOUR REQUIREMENT
                  </span>

                  <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-[-0.035em] text-[var(--wm-heading)] sm:text-5xl lg:text-[56px]">
                    {data.title}
                  </h2>
                </div>
              </div>

              {data.description && (
                <p className="wm-body mt-6 max-w-2xl text-sm sm:ml-[64px] sm:text-base">
                  {data.description}
                </p>
              )}

              {/* ====================================================
                  PROJECT INFORMATION
              ==================================================== */}
              <div className="mt-9 grid border-y border-[var(--wm-border)] sm:grid-cols-3">
                {/* MATERIAL */}
                <div className="border-b border-[var(--wm-border)] px-4 py-5 sm:border-b-0 sm:border-r sm:px-5">
                  <div className="flex items-center gap-2">
                    <Ruler
                      size={14}
                      strokeWidth={1.7}
                      className="text-[var(--wm-primary)]"
                    />

                    <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Material
                    </span>
                  </div>

                  <span className="mt-2 block text-sm font-extrabold text-[var(--wm-heading)]">
                    Mild Steel
                  </span>
                </div>

                {/* SERVICE */}
                <div className="border-b border-[var(--wm-border)] px-4 py-5 sm:border-b-0 sm:border-r sm:px-5">
                  <div className="flex items-center gap-2">
                    <MessageSquareMore
                      size={14}
                      strokeWidth={1.7}
                      className="text-[var(--wm-primary)]"
                    />

                    <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Requirement
                    </span>
                  </div>

                  <span className="mt-2 block text-sm font-extrabold text-[var(--wm-heading)]">
                    Project Based
                  </span>
                </div>

                {/* LOCATION */}
                <div className="px-4 py-5 sm:px-5">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={14}
                      strokeWidth={1.7}
                      className="text-[var(--wm-primary)]"
                    />

                    <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                      Service Area
                    </span>
                  </div>

                  <span className="mt-2 block text-sm font-extrabold text-[var(--wm-heading)]">
                    Ahmedabad & Gandhinagar
                  </span>
                </div>
              </div>
            </div>

            {/* ======================================================
                ENQUIRY PANEL
            ====================================================== */}
            <div className="border-t border-[var(--wm-border)] bg-[var(--wm-surface-soft)] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold tracking-[0.17em] text-[var(--wm-primary)]">
                  START A DISCUSSION
                </span>

                <span className="font-mono text-[9px] font-bold tracking-[0.14em] text-[var(--wm-muted)]">
                  WM / 01
                </span>
              </div>

              <p className="mt-5 max-w-md text-sm font-bold leading-6 text-[var(--wm-heading)]">
                Share your dimensions, application, reference or project
                details with our team.
              </p>

              {/* PRIMARY BUTTON */}
              <Link
                href={data.primaryCta?.href || "/enquiry"}
                className="group mt-7 flex w-full items-center justify-between border border-[var(--wm-primary)] bg-[var(--wm-primary)] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[var(--wm-primary-dark)]"
              >
                <span>
                  {data.primaryCta?.label || "Request an Enquiry"}
                </span>

                <span className="flex h-7 w-7 items-center justify-center border border-white/25">
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>

              {/* CONTACT DETAILS */}
              <div className="mt-7 border-t border-[var(--wm-border)] pt-6">
                {/* PHONE */}
                {data.phone && (
                  <a
                    href={`tel:${data.phone.replace(/\s+/g, "")}`}
                    className="group flex items-center justify-between gap-4 border-b border-[var(--wm-border)] py-4 first:pt-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                        <Phone
                          size={14}
                          strokeWidth={1.7}
                        />
                      </span>

                      <div>
                        <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                          Call
                        </span>

                        <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                          {data.phone}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--wm-primary)]"
                    />
                  </a>
                )}

                {/* EMAIL */}
                {data.email && (
                  <a
                    href={`mailto:${data.email}`}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)]">
                        <Mail
                          size={14}
                          strokeWidth={1.7}
                        />
                      </span>

                      <div className="min-w-0">
                        <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                          Email
                        </span>

                        <span className="mt-1 block truncate text-sm font-extrabold text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                          {data.email}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[var(--wm-border-blue)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--wm-primary)]"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM PROJECT BAR
          ======================================================== */}
          <div className="grid border-t border-[var(--wm-border)] sm:grid-cols-3">
            <div className="flex items-center gap-3 px-6 py-4 sm:border-r sm:border-[var(--wm-border)] sm:px-7">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                Requirement Discussion
              </span>
            </div>

            <div className="flex items-center gap-3 border-t border-[var(--wm-border)] px-6 py-4 sm:border-t-0 sm:border-r sm:border-[var(--wm-border)] sm:px-7">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                Dimensions & Application
              </span>
            </div>

            <div className="flex items-center gap-3 border-t border-[var(--wm-border)] px-6 py-4 sm:border-t-0 sm:px-7">
              <span className="h-1.5 w-1.5 bg-[var(--wm-primary)]" />

              <span className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                Fabrication Requirement
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            FOOTER
        ============================================================ */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[var(--wm-border-blue)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[var(--wm-muted)]">
            WELLDONE METALWORKS / PROJECT ENQUIRY
          </span>

          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
            Requirement → Discussion → Fabrication
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </section>
  );
}