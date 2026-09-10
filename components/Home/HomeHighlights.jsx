"use client";

import {
  ClipboardCheck,
  MapPin,
  Ruler,
  Wrench,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Requirement-Based Work",
    text: "We fabricate according to the size, purpose and practical requirements of your project.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Measurement & Planning",
    text: "For suitable projects, dimensions and site conditions are considered before fabrication begins.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Fabrication to Installation",
    text: "We handle fabrication and provide installation support where the project requires it.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Ahmedabad & Gandhinagar",
    text: "Focused on residential, commercial and site-based metal fabrication requirements in the region.",
  },
];

export default function HomeHighlights() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-wm-navy text-white">

      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-wm-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full bg-wm-primary/[0.06] blur-3xl" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="wm-container relative">

        {/* =====================================================
            TOP INTRO
        ===================================================== */}

        <div className="flex flex-col gap-4 border-b border-white/10 py-8 sm:flex-row sm:items-end sm:justify-between lg:py-9">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-wm-primary" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary">
                How We Work
              </p>
            </div>

            <h2 className="mt-2.5 max-w-2xl text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl">
              Practical fabrication, from requirement to finished work.
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-slate-400 sm:text-right">
            We keep the process straightforward — understand the requirement,
            plan the work and build according to the project.
          </p>
        </div>

        {/* =====================================================
            HIGHLIGHT GRID
        ===================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group relative flex gap-4 py-8
                  sm:px-6
                  lg:py-9 lg:px-7
                  ${
                    index === 0
                      ? "lg:pl-0"
                      : "border-t border-white/10 sm:border-t-0"
                  }
                  ${index === 1 ? "sm:border-l" : ""}
                  ${index === 2 ? "lg:border-l" : ""}
                  ${index === 3 ? "lg:border-l lg:pr-0" : ""}
                  border-white/10
                `}
              >

                {/* Number */}
                <span className="absolute right-5 top-7 text-[9px] font-bold tracking-[0.18em] text-white/15 lg:right-6 lg:top-8">
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative flex h-11 w-11 shrink-0 items-center
                    justify-center rounded-xl
                    border border-white/10
                    bg-white/[0.06]
                    text-wm-primary
                    transition-all duration-300
                    group-hover:border-wm-primary/40
                    group-hover:bg-wm-primary/10
                    group-hover:text-white
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />

                  {/* Small corner detail */}
                  <span className="absolute -right-px -top-px h-2 w-2 rounded-tr-xl border-r border-t border-wm-primary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="min-w-0 pr-5">

                  <h3 className="text-sm font-bold leading-5 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-400 sm:text-xs">
                    {item.text}
                  </p>

                </div>

                {/* Bottom hover indicator */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-wm-primary transition-all duration-300 group-hover:w-12 lg:left-7" />

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM PROJECT NOTE
        ===================================================== */}

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-start gap-3">

            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-wm-primary/10 text-wm-primary">
              <ClipboardCheck size={14} />
            </div>

            <p className="max-w-2xl text-[11px] leading-5 text-slate-400 sm:text-xs">
              Have drawings, dimensions or a reference image?
              <span className="font-semibold text-slate-200">
                {" "}
                Share them with us to discuss your fabrication requirement.
              </span>
            </p>

          </div>

          <a
            href="/enquiry"
            className="
              group inline-flex w-fit shrink-0 items-center gap-2
              rounded-lg border border-white/10
              bg-white/[0.05]
              px-4 py-2.5
              text-xs font-bold
              text-white
              transition-all duration-300
              hover:border-wm-primary/40
              hover:bg-wm-primary
            "
          >
            Discuss a Project

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}