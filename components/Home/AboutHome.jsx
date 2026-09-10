"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Factory,
  Ruler,
  MoveRight,
  MapPin,
} from "lucide-react";

const points = [
  "Mild-steel fabrication for residential and commercial requirements",
  "Fabrication planned around actual dimensions and intended use",
  "Site measurement support for suitable projects",
  "Installation support for fabricated work where required",
];

export default function AboutHome() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          SUBTLE BACKGROUND DETAILS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-wm-surface-blue/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-wm-surface-soft blur-3xl" />

      <div className="wm-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =================================================
    LEFT — FABRICATION VISUAL
================================================= */}

          <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
            {/* Main outer frame */}
            <div className="relative rounded-[32px] border border-wm-border bg-[#f7fbfd] p-3 shadow-[0_30px_80px_rgba(15,76,110,0.11)] sm:p-4">
              {/* Inner visual */}
              <div className="relative min-h-[500px] overflow-hidden rounded-[26px] bg-white sm:min-h-[535px]">
                {/* =================================================
          TECHNICAL GRID
      ================================================= */}

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.055]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#0f4c6e 1px, transparent 1px), linear-gradient(90deg, #0f4c6e 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                {/* Soft technical glow */}
                <div className="pointer-events-none absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full bg-wm-surface-blue/60 blur-3xl" />

                <div className="pointer-events-none absolute -left-32 bottom-0 h-[280px] w-[280px] rounded-full bg-wm-surface-soft blur-3xl" />

                {/* =================================================
          TOP HEADER
      ================================================= */}

                <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                  {/* Brand label */}
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-wm-border bg-white px-4 py-2.5 shadow-[0_8px_25px_rgba(15,76,110,0.07)]">
                    <span className="flex h-2 w-2 items-center justify-center rounded-full bg-wm-primary">
                      <span className="h-1 w-1 rounded-full bg-white" />
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-wm-navy">
                      Welldone Metalworks
                    </span>
                  </div>

                  {/* Fabrication icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-wm-border bg-white text-wm-primary shadow-[0_8px_25px_rgba(15,76,110,0.07)]">
                    <Factory size={17} strokeWidth={1.7} />
                  </div>
                </div>

                {/* =================================================
          CENTRAL FABRICATION VISUAL
      ================================================= */}

                <div className="absolute left-1/2 top-[46%] z-10 w-full -translate-x-1/2 -translate-y-1/2 px-6 sm:px-8">
                  <div className="flex flex-col items-center">
                    {/* Outer technical ring */}
                    <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full border border-wm-primary/15 bg-wm-surface-blue/50">
                      {/* Ring */}
                      <div className="absolute inset-3 rounded-full border border-wm-primary/10" />

                      {/* Measurement marks */}
                      <div className="absolute left-1/2 top-0 h-2.5 w-px -translate-x-1/2 bg-wm-primary/40" />
                      <div className="absolute bottom-0 left-1/2 h-2.5 w-px -translate-x-1/2 bg-wm-primary/40" />
                      <div className="absolute left-0 top-1/2 h-px w-2.5 -translate-y-1/2 bg-wm-primary/40" />
                      <div className="absolute right-0 top-1/2 h-px w-2.5 -translate-y-1/2 bg-wm-primary/40" />

                      {/* Icon container */}
                      <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-[22px] border border-wm-primary/10 bg-white shadow-[0_15px_35px_rgba(22,135,197,0.10)]">
                        <Ruler
                          size={36}
                          strokeWidth={1.5}
                          className="text-wm-primary"
                        />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="mt-7 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-wm-primary">
                        Custom Fabrication
                      </p>

                      <h3 className="mt-3 max-w-[390px] text-[27px] font-extrabold leading-[1.12] tracking-[-0.035em] text-wm-heading sm:text-[30px]">
                        Made to fit the space.
                        <span className="block text-wm-primary">
                          Built for the job.
                        </span>
                      </h3>

                      <p className="mx-auto mt-4 max-w-[370px] text-[12px] leading-6 text-wm-muted sm:text-[13px]">
                        Practical mild-steel fabrication based on your
                        dimensions, application and site requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
          TECHNICAL CORNER DETAILS
      ================================================= */}

                <div className="absolute bottom-[142px] left-6 hidden sm:block">
                  <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-wm-muted">
                    <span className="h-px w-5 bg-wm-primary/40" />
                    Fabrication
                  </div>

                  <p className="mt-1 text-[11px] font-semibold text-wm-navy">
                    Requirement → Fabrication
                  </p>
                </div>

                <div className="absolute right-6 top-[170px] hidden sm:block">
                  <div className="text-right">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-wm-muted">
                      Material
                    </p>

                    <p className="mt-1 text-[11px] font-semibold text-wm-navy">
                      Mild Steel
                    </p>
                  </div>
                </div>

                {/* =================================================
          BOTTOM INFORMATION PANEL
      ================================================= */}

                <div className="absolute bottom-5 left-5 right-5 z-20 rounded-[20px] border border-wm-border bg-[#f8fbfd] p-4 shadow-[0_12px_35px_rgba(15,76,110,0.07)] sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-wm-primary">
                        Our Approach
                      </p>

                      <p className="mt-1.5 text-sm font-bold text-wm-navy sm:text-[15px]">
                        Understand. Measure. Fabricate. Install.
                      </p>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white text-wm-primary shadow-sm sm:flex">
                      <Ruler size={18} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px bg-wm-border" />

                  {/* Bottom stats */}
                  <div className="grid grid-cols-3 divide-x divide-wm-border">
                    <div className="pr-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-wm-muted">
                        Work
                      </p>

                      <p className="mt-1 text-[11px] font-bold text-wm-navy sm:text-xs">
                        Custom
                      </p>
                    </div>

                    <div className="px-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-wm-muted">
                        Material
                      </p>

                      <p className="mt-1 text-[11px] font-bold text-wm-navy sm:text-xs">
                        Mild Steel
                      </p>
                    </div>

                    <div className="pl-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-wm-muted">
                        Service
                      </p>

                      <p className="mt-1 text-[11px] font-bold text-wm-navy sm:text-xs">
                        Local
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
      SERVICE AREA BADGE
  ================================================= */}

            <div className="absolute -bottom-6 right-4 z-30 rounded-2xl border border-wm-border bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,76,110,0.14)] sm:right-[-18px] sm:px-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wm-surface-blue text-wm-primary">
                  <MapPin size={17} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-wm-muted">
                    Service Area
                  </p>

                  <p className="mt-1 text-xs font-bold text-wm-navy sm:text-[13px]">
                    Ahmedabad & Gandhinagar
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
      LEFT DECORATIVE LINE
  ================================================= */}

            <div className="pointer-events-none absolute -left-6 top-20 hidden h-36 w-px bg-gradient-to-b from-transparent via-wm-primary/30 to-transparent lg:block" />
          </div>
          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}

          <div>
            {/* Eyebrow */}
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              About Welldone Metalworks
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[46px]">
              Fabrication starts with understanding the work.
            </h2>

            {/* Intro */}
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-wm-body sm:text-base sm:leading-8">
              Welldone Metalworks provides custom mild-steel fabrication for
              residential, commercial and outdoor requirements across Ahmedabad
              and Gandhinagar.
            </p>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-wm-body sm:text-base sm:leading-8">
              We work with the actual dimensions, available space and intended
              use of the project rather than treating every requirement as a
              standard product. Depending on the work, our involvement can
              include measurement, fabrication planning, workshop fabrication
              and installation support.
            </p>

            {/* =================================================
                KEY POINTS
            ================================================= */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="group flex items-start gap-3 rounded-xl border border-wm-border bg-wm-surface-soft/60 p-3.5 transition-all duration-300 hover:border-wm-primary/25 hover:bg-wm-surface-blue/40"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wm-primary/10 text-wm-primary transition-colors group-hover:bg-wm-primary group-hover:text-white">
                    <Check size={11} strokeWidth={3} />
                  </span>

                  <span className="text-xs font-semibold leading-5 text-wm-navy sm:text-[13px]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                CTA / NOTE
            ================================================= */}

            <div className="mt-8 flex flex-col gap-5 border-t border-wm-border pt-7 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-2 rounded-xl bg-wm-primary px-5 py-3.5 text-xs font-bold text-white shadow-[0_10px_25px_rgba(22,135,197,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-wm-primary-dark"
              >
                More About Welldone Metalworks
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <div className="flex items-center gap-2 text-[11px] font-semibold text-wm-muted">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-wm-surface-blue text-wm-primary">
                  <MoveRight size={13} />
                </span>
                Custom work based on project requirements
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
