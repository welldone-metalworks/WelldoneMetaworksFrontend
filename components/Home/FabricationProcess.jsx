"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  Hammer,
  MessageSquareText,
  Ruler,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Discuss",
    heading: "Understand the requirement",
    text: "We start by understanding what you need, where it will be used and the practical requirements of the project.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Measure",
    heading: "Check dimensions & site conditions",
    text: "For suitable projects, dimensions and relevant site conditions are checked before fabrication is planned.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Confirm",
    heading: "Finalize the details",
    text: "Dimensions, design preferences, application and other important fabrication details are confirmed before work begins.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Plan",
    heading: "Prepare the fabrication",
    text: "The fabrication approach is planned around the confirmed dimensions, structure and intended use.",
  },
  {
    number: "05",
    icon: Hammer,
    title: "Fabricate",
    heading: "Build the metalwork",
    text: "Mild-steel components are cut, assembled and welded according to the agreed fabrication requirements.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Check",
    heading: "Inspect & prepare",
    text: "The finished fabrication is checked and prepared for transportation, assembly or installation.",
  },
  {
    number: "07",
    icon: Wrench,
    title: "Install",
    heading: "Complete at site",
    text: "Where installation support is required, the fabricated work is assembled and installed at the project site.",
  },
];

export default function FabricationProcess() {
  return (
    <section className="relative overflow-hidden bg-wm-surface-soft py-10 sm:py-12 lg:py-14">
      {/* Background detail */}
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full border border-wm-primary/10" />
      <div className="pointer-events-none absolute right-8 top-8 h-[280px] w-[280px] translate-x-1/3 -translate-y-1/3 rounded-full border border-wm-primary/5" />

      <div className="wm-container relative">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-10 border-b border-wm-border pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              How We Work
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[48px]">
              From your requirement to finished metalwork.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-wm-body sm:text-base">
              Good fabrication starts with understanding the requirement
              properly. We keep the important details clear before material
              is fabricated and the finished work reaches the site.
            </p>
          </div>

          <div className="lg:pb-1">
            <div className="border-l-2 border-wm-primary pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-wm-primary">
                Requirement → Fabrication → Installation
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-wm-muted">
                A straightforward approach for custom MS fabrication projects
                across Ahmedabad and Gandhinagar.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROCESS INTRO STRIP
        ====================================================== */}
        <div className="grid border-b border-wm-border sm:grid-cols-3">
          <div className="border-b border-wm-border py-6 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-wm-primary">
              01 — Understand
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-wm-navy">
              Start with the actual project requirement.
            </p>
          </div>

          <div className="border-b border-wm-border py-6 sm:border-b-0 sm:px-8 sm:border-r">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-wm-primary">
              02 — Fabricate
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-wm-navy">
              Build the metalwork around confirmed details.
            </p>
          </div>

          <div className="py-6 sm:pl-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-wm-primary">
              03 — Complete
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-wm-navy">
              Prepare and install where the project requires it.
            </p>
          </div>
        </div>

        {/* =====================================================
            DESKTOP PROCESS TIMELINE
        ====================================================== */}
        <div className="mt-14 hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-[27px] h-px bg-wm-border" />

            <div className="grid grid-cols-7 gap-5">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative">
                    {/* Number + node */}
                    <div className="relative z-10 flex items-center">
                      <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border border-wm-border bg-wm-surface-soft text-wm-primary shadow-sm">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-7 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-wm-primary">
                          {step.number}
                        </span>

                        <span className="h-px w-5 bg-wm-border" />
                      </div>

                      <h3 className="mt-3 text-base font-extrabold tracking-[-0.015em] text-wm-navy">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm font-semibold leading-5 text-wm-heading">
                        {step.heading}
                      </p>

                      <p className="mt-3 text-xs leading-5 text-wm-muted">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET PROCESS
        ====================================================== */}
        <div className="mt-12 lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-7 left-[27px] top-7 w-px bg-wm-border" />

            <div className="space-y-8">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative grid grid-cols-[55px_1fr] gap-5"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full border border-wm-border bg-wm-surface-soft text-wm-primary shadow-sm">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-wm-primary">
                          {step.number}
                        </span>

                        <span className="text-xs font-bold uppercase tracking-[0.12em] text-wm-muted">
                          {step.title}
                        </span>
                      </div>

                      <h3 className="mt-2 text-lg font-extrabold tracking-[-0.02em] text-wm-navy">
                        {step.heading}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-wm-muted">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <div className="mt-16 overflow-hidden rounded-[24px] bg-wm-navy">
          <div className="relative px-6 py-8 sm:px-8 sm:py-9 lg:px-10">
            {/* Decorative geometry */}
            <div className="pointer-events-none absolute right-[-70px] top-[-100px] h-[260px] w-[260px] rounded-full border-[38px] border-white/[0.035]" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fd4ef]">
                  Before fabrication starts
                </p>

                <h3 className="mt-2 text-xl font-extrabold tracking-[-0.025em] text-white sm:text-2xl">
                  The important project details are discussed first.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Dimensions, application, design preferences and site
                  conditions can all affect the fabrication. Getting those
                  details clear helps keep the work practical from the
                  beginning.
                </p>
              </div>

              <Link
                href="/enquiry"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-wm-primary px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-wm-primary-dark"
              >
                Discuss Your Project

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            SMALL FOOTNOTE
        ====================================================== */}
        <div className="mt-5 flex items-center gap-2 text-xs text-wm-muted">
          <ArrowRight size={13} className="text-wm-primary" />
          <span>
            Process details may vary depending on the type and scale of the
            fabrication project.
          </span>
        </div>
      </div>
    </section>
  );
}