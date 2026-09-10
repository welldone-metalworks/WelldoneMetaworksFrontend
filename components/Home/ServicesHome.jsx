"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Fence,
  Settings2,
  Warehouse,
  Trees,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Structural Fabrication",
    text: "Fabricated steel components, supports and structures for projects that require practical, site-specific metalwork.",
    href: "/services/structural-fabrication",
    featured: true,
  },

  {
    icon: Settings2,
    number: "02",
    title: "Custom Metal Fabrication",
    text: "Made-to-measure MS fabrication developed around your dimensions, layout and intended application.",
    href: "/services/custom-metal-fabrication",
  },

  {
    icon: Fence,
    number: "03",
    title: "Gates & Railings",
    text: "MS gates and railings fabricated for entrances, stairs, balconies and other suitable applications.",
    href: "/services/gates-railings",
  },

  {
    icon: Warehouse,
    number: "04",
    title: "Sheds & Canopies",
    text: "Functional steel structures for parking, utility areas and outdoor covered spaces.",
    href: "/services/sheds-canopies",
  },

  {
    icon: Trees,
    number: "05",
    title: "Gazebos & Outdoor",
    text: "Outdoor MS structures planned according to available space, dimensions and practical use.",
    href: "/services/gazebos-outdoor",
  },

  {
    icon: Wrench,
    number: "06",
    title: "Welding & Installation",
    text: "Welding, assembly and installation support for suitable fabricated metalwork.",
    href: "/services/welding-installation",
  },

  {
    icon: Building2,
    number: "07",
    title: "Staircase & Structural Metalwork",
    text: "MS staircase frames, supports and related metal structures fabricated according to site dimensions and project requirements.",
    href: "/services/staircase-structural-metalwork",
  },
];

export default function ServicesHome() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-wm-surface-blue/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-72 w-72 rounded-full bg-wm-surface-soft blur-3xl" />

      <div className="wm-container relative">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="flex flex-col gap-8 border-b border-wm-border pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Our Services
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.035em] text-wm-heading sm:text-4xl lg:text-[46px]">
              Metal fabrication services for projects that need the right
              fit, finish and structure.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-wm-body sm:text-base">
              From custom fabrication to gates, railings and outdoor
              structures, we provide practical MS metalwork based on the
              requirements of each project.
            </p>
          </div>

          {/* Header CTA */}

          <Link
            href="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-wm-navy px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(15,76,110,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-wm-primary"
          >
            Explore All Services

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* =========================================================
            SERVICE GRID
        ========================================================= */}

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {services.map((service) => {
            const Icon = service.icon;

            /*
             * Featured service gets more visual weight.
             * Remaining services stay compact and easy to scan.
             */

            if (service.featured) {
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative overflow-hidden rounded-[24px] border border-wm-border bg-wm-navy p-7 shadow-[0_20px_55px_rgba(15,76,110,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(15,76,110,0.16)] sm:p-8 lg:col-span-6"
                >
                  {/* Decorative circle */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[45px] border-white/[0.035]" />

                  <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full border border-wm-primary/20" />

                  <div className="relative flex h-full min-h-[300px] flex-col">
                    {/* Top row */}

                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wm-primary text-white shadow-[0_10px_30px_rgba(22,135,197,0.22)]">
                        <Icon size={25} strokeWidth={1.7} />
                      </div>

                      <span className="text-sm font-bold tracking-[0.12em] text-white/25">
                        {service.number}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="mt-auto pt-12">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fd4ef]">
                        Core Service
                      </p>

                      <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-white sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
                        {service.text}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-white">
                        Explore service

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-wm-primary">
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-wm-border bg-wm-surface-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-wm-border-blue hover:bg-white hover:shadow-[0_20px_50px_rgba(15,76,110,0.09)] sm:p-7 lg:col-span-3"
              >
                {/* Number */}

                <span className="absolute right-6 top-6 text-xs font-bold tracking-[0.12em] text-wm-border">
                  {service.number}
                </span>

                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-wm-primary shadow-sm ring-1 ring-wm-border transition-all duration-300 group-hover:bg-wm-primary group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(22,135,197,0.16)]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}

                <div className="mt-7">
                  <h3 className="max-w-[230px] text-lg font-bold leading-snug tracking-[-0.015em] text-wm-navy transition-colors duration-300 group-hover:text-wm-primary">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-wm-muted">
                    {service.text}
                  </p>
                </div>

                {/* Bottom CTA */}

                <div className="mt-auto flex items-center justify-between pt-7">
                  <span className="text-xs font-bold text-wm-primary">
                    View service
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-wm-border bg-white text-wm-muted transition-all duration-300 group-hover:border-wm-primary group-hover:text-wm-primary">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM SERVICE NOTE
        ========================================================= */}

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-wm-border bg-wm-surface-soft px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
              <CheckCircle2 size={16} />
            </div>

            <div>
              <p className="text-sm font-bold text-wm-navy">
                Looking for something specific?
              </p>

              <p className="mt-0.5 text-xs leading-5 text-wm-muted sm:text-sm">
                Share your dimensions, application or fabrication requirement
                and we can discuss a suitable approach.
              </p>
            </div>
          </div>

          <Link
            href="/enquiry"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Discuss Your Requirement

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}