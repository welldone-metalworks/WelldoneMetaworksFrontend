"use client";

import {
  BadgeCheck,
  ClipboardList,
  MapPinned,
  Ruler,
  ShieldCheck,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const trustPoints = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Custom-Focused",
    text: "Fabrication is planned around the actual requirement rather than a one-size-fits-all approach.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "MS Specialization",
    text: "Our current offering is focused on mild-steel fabrication.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Site Measurement",
    text: "Measurement support is available for suitable projects before fabrication.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Installation Support",
    text: "Suitable fabricated works can be followed by on-site installation.",
  },
  {
    number: "05",
    icon: MapPinned,
    title: "Local Coverage",
    text: "We primarily work across Ahmedabad and Gandhinagar.",
  },
  {
    number: "06",
    icon: ClipboardList,
    title: "Clear Requirements",
    text: "Dimensions, application and project details are discussed before fabrication.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-wm-surface-soft py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          SUBTLE BACKGROUND DETAIL
      ====================================================== */}
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full border border-wm-primary/[0.06]" />

      <div className="pointer-events-none absolute right-[-55px] top-[-55px] h-44 w-44 rounded-full border border-wm-primary/[0.05]" />

      <div className="wm-container relative">
        {/* =====================================================
            HEADER / INTRO
        ====================================================== */}
        <div className="grid gap-8 border-b border-wm-border pb-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Why Welldone
            </div>

            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[46px]">
              Built around the requirement, not a standard template.
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-1">
            <p className="text-sm leading-7 text-wm-body sm:text-base">
              Good fabrication starts with understanding what the finished
              metalwork needs to do. We focus on the requirement, dimensions
              and application before moving into fabrication.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-wm-muted">
              <span>Requirement</span>
              <span className="text-wm-primary">→</span>
              <span>Dimensions</span>
              <span className="text-wm-primary">→</span>
              <span>Fabrication</span>
              <span className="text-wm-primary">→</span>
              <span>Completion</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
          {/* LEFT SIDE */}
          <div className="relative overflow-hidden rounded-2xl border border-wm-border bg-white p-6 sm:p-7">
            {/* Technical line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-wm-primary" />

            <div className="pl-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-wm-primary">
                Fabrication Approach
              </p>

              <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-[-0.025em] text-wm-navy sm:text-2xl">
                Clear details lead to better fabrication decisions.
              </h3>

              <p className="mt-3 text-sm leading-6 text-wm-muted">
                Each project can have different dimensions, site conditions
                and intended uses. Our approach starts by understanding those
                details before fabrication begins.
              </p>

              {/* Mini specification */}
              <div className="mt-7 border-t border-wm-border pt-5">
                <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-wm-muted">
                      Material
                    </p>

                    <p className="mt-1 text-sm font-bold text-wm-navy">
                      Mild Steel
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-wm-muted">
                      Coverage
                    </p>

                    <p className="mt-1 text-sm font-bold text-wm-navy">
                      Ahmedabad & Gandhinagar
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-wm-muted">
                      Approach
                    </p>

                    <p className="mt-1 text-sm font-bold text-wm-navy">
                      Requirement-led
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-wm-muted">
                      Support
                    </p>

                    <p className="mt-1 text-sm font-bold text-wm-navy">
                      Fabrication + Installation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="overflow-hidden rounded-2xl border border-wm-border bg-white">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group grid grid-cols-[42px_42px_1fr] items-center gap-3 px-5 py-4 transition-colors duration-300 hover:bg-wm-surface-soft sm:grid-cols-[50px_48px_1fr] sm:px-6 ${
                    index !== trustPoints.length - 1
                      ? "border-b border-wm-border"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <span className="text-[10px] font-extrabold tracking-[0.12em] text-wm-primary">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary transition-all duration-300 group-hover:bg-wm-primary group-hover:text-white">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-wm-navy transition-colors duration-300 group-hover:text-wm-primary sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-xs leading-5 text-wm-muted sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <div className="mt-7 flex flex-col gap-4 border-t border-wm-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-wm-primary text-white">
              <BadgeCheck size={15} strokeWidth={2} />
            </div>

            <p className="text-sm font-semibold text-wm-navy">
              Practical fabrication. Clear requirements. Local service.
            </p>
          </div>

          <a
            href="/enquiry"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Discuss Your Requirement

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-wm-border transition-all duration-300 group-hover:border-wm-primary">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}