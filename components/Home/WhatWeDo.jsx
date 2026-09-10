"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Fence,
  Hammer,
  Layers3,
  Ruler,
  Warehouse,
  Wrench,
} from "lucide-react";

const workTypes = [
  {
    icon: Fence,
    number: "01",
    title: "Gates",
    text: "Custom mild-steel gates made to suit the entrance size, required strength and overall look of the property.",
    href: "/services/gates-railings",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Railings",
    text: "Practical MS railings for staircases, balconies, terraces and other areas where safe and durable metalwork is required.",
    href: "/services/gates-railings",
  },
  {
    icon: Warehouse,
    number: "03",
    title: "Sheds & Canopies",
    text: "MS structures for parking, storage and outdoor coverage, planned around the available space and site conditions.",
    href: "/services/sheds-canopies",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Gazebos",
    text: "Outdoor metal structures fabricated according to the intended use, available area and project dimensions.",
    href: "/services/gazebos-outdoor",
  },
  {
    icon: Ruler,
    number: "05",
    title: "Pergolas",
    text: "Custom metal pergolas designed to add functional outdoor coverage while fitting naturally into the existing space.",
    href: "/services/gazebos-outdoor",
  },
  {
    icon: Wrench,
    number: "06",
    title: "Custom Metalwork",
    text: "Site-specific MS fabrication for requirements that need something different from a standard ready-made solution.",
    href: "/services/custom-metal-fabrication",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-wm-surface-soft py-10 sm:py-12 lg:py-14"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0f4c6e 1px, transparent 1px), linear-gradient(90deg, #0f4c6e 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border-[70px] border-wm-primary/[0.025]" />

      <div className="pointer-events-none absolute -left-52 bottom-0 h-[420px] w-[420px] rounded-full border border-wm-primary/[0.05]" />

      <div className="wm-container relative">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.72fr] lg:gap-20">

          {/* Heading */}
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              What We Do
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[46px]">
              Metal fabrication built around the way your project actually
              <span className="text-wm-primary"> needs to work.</span>
            </h2>
          </div>

          {/* Supporting copy */}
          <div className="lg:pb-1">

            <p className="text-sm leading-7 text-wm-body sm:text-base">
              We fabricate practical mild-steel structures for residential,
              commercial and outdoor requirements. Each job is considered
              around its dimensions, purpose and site conditions rather than
              treated as a standard product.
            </p>

            <div className="mt-5 flex items-center gap-3">

              <span className="h-px w-10 bg-wm-primary/50" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-wm-muted">
                Ahmedabad & Gandhinagar
              </span>

            </div>

          </div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

          {workTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative overflow-hidden rounded-[22px] border border-wm-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-wm-primary/25 hover:shadow-[0_22px_55px_rgba(15,76,110,0.10)] ${
                  index === 0
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >

                {/* Top accent */}
                <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-wm-primary transition-transform duration-500 group-hover:scale-x-100" />

                <div className="p-6 sm:p-7">

                  {/* =================================================
                      CARD HEADER
                  ================================================= */}

                  <div className="flex items-start justify-between">

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-wm-surface-icon text-wm-primary ring-1 ring-wm-primary/5 transition-all duration-300 group-hover:bg-wm-primary group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(22,135,197,0.20)]">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Number */}
                    <span className="text-[11px] font-bold tracking-[0.12em] text-slate-300 transition-colors duration-300 group-hover:text-wm-primary/40">
                      {item.number}
                    </span>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <h3 className="mt-6 text-[19px] font-bold tracking-[-0.02em] text-wm-navy transition-colors duration-300 group-hover:text-wm-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 min-h-[72px] text-sm leading-6 text-wm-muted">
                    {item.text}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-wm-border transition-colors duration-300 group-hover:bg-wm-primary/15" />

                  {/* Link */}
                  <div className="flex items-center justify-between">

                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-wm-primary">
                      View service
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-wm-border text-wm-muted transition-all duration-300 group-hover:border-wm-primary group-hover:bg-wm-primary group-hover:text-white">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM SERVICE STRIP
        ===================================================== */}

        <div className="mt-7 rounded-[20px] border border-wm-border bg-white px-5 py-4 shadow-[0_10px_35px_rgba(15,76,110,0.04)] sm:px-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                <Wrench
                  size={16}
                  strokeWidth={1.7}
                />
              </div>

              <p className="text-xs leading-5 text-wm-muted sm:text-sm">
                Have a fabrication requirement that is not listed above?
              </p>

            </div>

            <Link
              href="/services/custom-metal-fabrication"
              className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
            >
              Discuss Custom Work

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}