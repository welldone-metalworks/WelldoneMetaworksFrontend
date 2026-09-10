"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Ruler,
  Phone,
  Factory,
  ShieldCheck,
  MoveUpRight,
} from "lucide-react";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-wm-surface pt-[65px] lg:pt-[70px]"
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large soft blue glow */}
        <div className="absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-wm-surface-blue opacity-70 blur-3xl" />

        {/* Bottom soft area */}
        <div className="absolute -left-48 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-wm-surface-soft opacity-90 blur-3xl" />

        {/* Industrial grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <div className="wm-container relative">
        {/* =======================================================
            HERO GRID
        ======================================================= */}

        <div className="grid min-h-[680px] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-20 xl:min-h-[700px]">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 rounded-full border border-wm-border bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wm-primary opacity-30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wm-primary" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-wm-navy">
                Welldone Metalworks
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mt-7 max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-heading sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[52px]">
              Metal fabrication built around your{" "}
              <span className="text-wm-primary">project requirements.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-wm-body sm:text-[17px] lg:text-[18px]">
              We fabricate practical mild-steel structures for residential,
              commercial and site-based requirements — from gates and railings
              to sheds, gazebos, pergolas and custom metalwork.
            </p>

            {/* ===================================================
                QUICK BENEFITS
            =================================================== */}

            <div className="mt-7 grid max-w-[650px] gap-x-8 gap-y-3 sm:grid-cols-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  size={18}
                  strokeWidth={2.2}
                  className="shrink-0 text-wm-primary"
                />

                <span className="text-sm font-semibold text-wm-navy">
                  Custom dimensions
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  size={18}
                  strokeWidth={2.2}
                  className="shrink-0 text-wm-primary"
                />

                <span className="text-sm font-semibold text-wm-navy">
                  Site-based requirements
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  size={18}
                  strokeWidth={2.2}
                  className="shrink-0 text-wm-primary"
                />

                <span className="text-sm font-semibold text-wm-navy">
                  Fabrication & finishing
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  size={18}
                  strokeWidth={2.2}
                  className="shrink-0 text-wm-primary"
                />

                <span className="text-sm font-semibold text-wm-navy">
                  Installation support
                </span>
              </div>
            </div>

            {/* ===================================================
                CTA BUTTONS
            =================================================== */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/enquiry"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-wm-primary px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(22,135,197,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-wm-primary-dark hover:shadow-[0_16px_36px_rgba(22,135,197,0.28)]"
              >
                Discuss Your Requirement
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="tel:+919649957698"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-xl border border-wm-border bg-white px-7 py-3.5 text-sm font-bold text-wm-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-wm-primary hover:text-wm-primary"
              >
                <Phone
                  size={17}
                  strokeWidth={2.1}
                  className="text-wm-primary"
                />

                <span>+91 96499 57698</span>
              </a>
            </div>

            {/* Small clarification */}
            <p className="mt-5 max-w-[570px] text-xs leading-5 text-wm-muted">
              Currently focused on mild-steel fabrication. Share your
              dimensions, drawing, reference image or site requirement and we
              can discuss the right fabrication approach.
            </p>

            {/* ===================================================
                LOCATION / SERVICE NOTE
            =================================================== */}

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-wm-border pt-6">
              <div className="flex items-center gap-2">
                <Factory
                  size={17}
                  className="text-wm-primary"
                  strokeWidth={2}
                />

                <span className="text-xs font-semibold text-wm-navy sm:text-sm">
                  Ahmedabad, Gujarat
                </span>
              </div>

              <div className="hidden h-4 w-px bg-wm-border sm:block" />

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={17}
                  className="text-wm-primary"
                  strokeWidth={2}
                />

                <span className="text-xs font-semibold text-wm-navy sm:text-sm">
                  Project-focused fabrication
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
    RIGHT HERO VISUAL
===================================================== */}

          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            {/* Main outer frame */}
            <div className="relative rounded-[30px] border border-wm-border bg-white p-3 shadow-[0_25px_70px_rgba(15,76,110,0.12)] sm:p-4">
              {/* Main dark visual */}
              <div className="relative min-h-[470px] overflow-hidden rounded-[24px] bg-wm-navy sm:min-h-[500px]">
                {/* =================================================
          TECHNICAL BACKGROUND
      ================================================= */}

                {/* Grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Soft glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-wm-primary/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-wm-primary/10 blur-3xl" />

                {/* Technical circles */}
                <div className="pointer-events-none absolute left-1/2 top-[42%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

                <div className="pointer-events-none absolute left-1/2 top-[42%] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-wm-primary/20" />

                <div className="pointer-events-none absolute left-1/2 top-[42%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[20px] border-wm-primary/[0.08]" />

                {/* Technical diagonal lines */}
                <div className="pointer-events-none absolute -right-24 top-28 h-px w-[430px] rotate-[-30deg] bg-white/[0.08]" />

                <div className="pointer-events-none absolute -left-28 top-48 h-px w-[450px] rotate-[24deg] bg-white/[0.06]" />

                {/* =================================================
          TOP HEADER
      ================================================= */}

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
                  {/* Fabrication label */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-wm-primary" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                      MS Metal Fabrication
                    </span>
                  </div>

                  {/* Small location indicator */}
                  <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 backdrop-blur-md sm:flex">
                    <Factory
                      size={13}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                      Ahmedabad
                    </span>
                  </div>
                </div>

                {/* =================================================
          CENTER FABRICATION VISUAL
      ================================================= */}

                <div className="absolute left-1/2 top-[40%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  {/* Main icon circle */}
                  <div className="relative flex h-[118px] w-[118px] items-center justify-center rounded-full border border-wm-primary/30 bg-wm-primary/[0.08]">
                    {/* Inner ring */}
                    <div className="absolute inset-[15px] rounded-full border border-white/[0.08]" />

                    {/* Inner glow */}
                    <div className="absolute inset-[28px] rounded-full bg-wm-primary/[0.10]" />

                    <Ruler
                      size={42}
                      strokeWidth={1.4}
                      className="relative z-10 text-white"
                    />
                  </div>

                  {/* Label */}
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary">
                    Made to Measure
                  </p>

                  <h2 className="mt-2 text-center text-xl font-bold tracking-[-0.02em] text-white sm:text-[22px]">
                    Fabricated for the space
                  </h2>

                  <p className="mt-2 max-w-[290px] text-center text-xs leading-5 text-slate-300">
                    Metalwork planned around the dimensions, purpose and
                    conditions of your project.
                  </p>
                </div>

                {/* =================================================
          BOTTOM PROCESS PANEL
      ================================================= */}

                <div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                  <div className="flex items-start gap-3.5">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wm-primary text-white shadow-[0_8px_20px_rgba(22,135,197,0.25)]">
                      <Factory size={20} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8fd4ef]">
                        From requirement to installation
                      </p>

                      <p className="mt-1.5 text-base font-bold text-white sm:text-lg">
                        Measure. Fabricate. Finish. Install.
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-slate-300 sm:text-xs sm:leading-5">
                        A straightforward fabrication process focused on fit,
                        function and the requirements of the site.
                      </p>
                    </div>
                  </div>

                  {/* Process indicators */}
                  <div className="mt-4 grid grid-cols-4 gap-1.5 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-wm-primary">
                        01
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-200">
                        Measure
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-wm-primary">
                        02
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-200">
                        Fabricate
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-wm-primary">
                        03
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-200">
                        Finish
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-wm-primary">
                        04
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-200">
                        Install
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
      SMALL OUTER DECORATIVE ELEMENT
      No overlap with main content
  ===================================================== */}

            <div className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 rounded-full border border-wm-primary/20 sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28" />

            <div className="pointer-events-none absolute -right-1 bottom-3 h-2 w-2 rounded-full bg-wm-primary sm:-right-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
