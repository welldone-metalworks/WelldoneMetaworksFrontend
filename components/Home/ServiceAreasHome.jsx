"use client";

import Link from "next/link";
import { ArrowUpRight, Check, MapPin, Navigation } from "lucide-react";

const primaryAreas = [
  {
    name: "Ahmedabad",
    description: "Primary service area",
  },
  {
    name: "Gandhinagar",
    description: "Primary service area",
  },
];

const nearbyAreas = [
  "Bopal",
  "South Bopal",
  "Bodakdev",
  "Thaltej",
  "Satellite",
  "Prahladnagar",
  "SG Highway",
  "Vastrapur",
  "Gota",
  "Chandkheda",
  "Shilaj",
];

export default function ServiceAreasHome() {
  return (
    <section className="border-t border-wm-border bg-white py-10 sm:py-12">
      <div className="wm-container">
        {/* Header */}
        <div className="grid gap-6 border-b border-wm-border pb-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Service Areas
            </div>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-wm-heading sm:text-4xl lg:text-[40px] xl:text-[44px]">
              Local fabrication support across Ahmedabad & Gandhinagar.
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto lg:pb-1">
            <p className="text-sm leading-6 text-wm-body sm:text-[15px] sm:leading-7">
              Welldone Metalworks primarily serves Ahmedabad and Gandhinagar for
              custom mild-steel fabrication. Coverage for individual projects
              depends on the site location, work involved and installation
              requirements.
            </p>
          </div>
        </div>

        {/* Coverage */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          {/* Primary locations */}
          <div className="rounded-2xl border border-wm-border bg-wm-surface-soft p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                <MapPin size={16} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-wm-primary">
                  Primary Coverage
                </p>

                <p className="mt-0.5 text-sm font-bold text-wm-navy">
                  Ahmedabad Region
                </p>
              </div>
            </div>

            <div className="mt-5 divide-y divide-wm-border rounded-xl border border-wm-border bg-white">
              {primaryAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center justify-between gap-4 px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-wm-surface-blue text-wm-primary">
                      <MapPin size={14} />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-wm-navy">
                        {area.name}
                      </p>

                      <p className="mt-0.5 text-[11px] text-wm-muted">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  <Check
                    size={16}
                    className="shrink-0 text-wm-primary"
                    strokeWidth={2}
                  />
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-wm-border pt-5">
              <p className="text-xs leading-5 text-wm-muted">
                Looking for fabrication outside these areas? Contact us with
                your project location and requirements to check availability.
              </p>

              <Link
                href="/contact"
                className="group mt-4 inline-flex items-center gap-2 text-xs font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
              >
                Check project coverage
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Nearby areas */}
          <div className="rounded-2xl border border-wm-border bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-wm-border pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                  <Navigation size={17} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-wm-primary">
                    Nearby Locations
                  </p>

                  <h3 className="mt-0.5 text-base font-bold text-wm-navy">
                    Areas around Ahmedabad
                  </h3>
                </div>
              </div>

              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-wm-muted sm:block">
                Local coverage
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center rounded-md border border-wm-border bg-wm-surface-soft px-3 py-2 text-xs font-medium text-wm-body transition-colors hover:border-wm-primary/30 hover:bg-wm-surface-blue hover:text-wm-navy"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Local service note */}
            <div className="mt-6 grid gap-4 border-t border-wm-border pt-5 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-wm-muted">
                  Service Type
                </p>

                <p className="mt-1.5 text-sm font-bold text-wm-navy">
                  Custom MS Fabrication
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-wm-muted">
                  Project Support
                </p>

                <p className="mt-1.5 text-sm font-bold text-wm-navy">
                  Fabrication & Installation
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-wm-surface-soft px-4 py-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-wm-primary" />

              <p className="text-[11px] leading-5 text-wm-muted">
                Exact service availability can vary by project. Share your
                location and fabrication requirement with us before planning the
                work.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-col gap-4 border-t border-wm-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-wm-navy">
              Have a fabrication requirement in Ahmedabad or Gandhinagar?
            </p>

            <p className="mt-1 text-xs text-wm-muted">
              Share your location, dimensions and what you need fabricated.
            </p>
          </div>

          <Link
            href="/enquiry"
            className="group inline-flex w-fit items-center gap-2 rounded-lg bg-wm-primary px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-wm-primary-dark"
          >
            Discuss Your Project
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
