"use client";

import {
  ArrowUpRight,
  Building2,
  Check,
  Home,
  TreePine,
} from "lucide-react";

const applications = [
  {
    number: "01",
    icon: Home,
    title: "Residential",
    shortTitle: "For Homes",
    description:
      "Custom MS fabrication for homes where dimensions, appearance and everyday use need to work together.",
    items: [
      "Entrance gates",
      "Stair & balcony railings",
      "Parking sheds",
      "Outdoor structures",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: Building2,
    title: "Commercial",
    shortTitle: "For Businesses",
    description:
      "Practical fabrication for commercial spaces where the metalwork needs to suit the site, purpose and available layout.",
    items: [
      "Gates & railings",
      "Utility structures",
      "Custom frames",
      "Covered structures",
    ],
  },
  {
    number: "03",
    icon: TreePine,
    title: "Outdoor",
    shortTitle: "Outdoor Spaces",
    description:
      "MS structures for outdoor areas where available space, dimensions and intended use guide the fabrication.",
    items: [
      "Gazebos",
      "Pergolas",
      "Sheds",
      "Custom outdoor structures",
    ],
  },
];

export default function ApplicationsHome() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Subtle technical background */}
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full border border-wm-primary/10" />

      <div className="wm-container relative">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="grid gap-8 border-b border-wm-border pb-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              Applications
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[48px]">
              Fabrication that fits the space it is made for.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-wm-body sm:text-base">
              Different spaces require different fabrication approaches. We
              consider the available area, dimensions, intended use and
              practical requirements when working on custom MS metalwork.
            </p>
          </div>
        </div>

        {/* =====================================================
            APPLICATION GRID
        ====================================================== */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[24px] border border-wm-border ${
                  item.featured
                    ? "bg-wm-navy text-white lg:col-span-6"
                    : "bg-wm-surface-soft lg:col-span-3"
                }`}
              >
                {/* Decorative technical detail */}
                <div
                  className={`pointer-events-none absolute right-[-55px] top-[-55px] h-40 w-40 rounded-full border-[24px] ${
                    item.featured
                      ? "border-white/[0.035]"
                      : "border-wm-primary/[0.05]"
                  }`}
                />

                <div className="relative flex min-h-[390px] flex-col p-7 sm:p-8">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        item.featured
                          ? "bg-wm-primary text-white"
                          : "bg-white text-wm-primary ring-1 ring-wm-border"
                      }`}
                    >
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <span
                      className={`text-xs font-bold tracking-[0.15em] ${
                        item.featured
                          ? "text-white/25"
                          : "text-wm-border"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Main */}
                  <div className="mt-9">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                        item.featured
                          ? "text-[#8fd4ef]"
                          : "text-wm-primary"
                      }`}
                    >
                      {item.shortTitle}
                    </p>

                    <h3
                      className={`mt-2 text-2xl font-extrabold tracking-[-0.025em] ${
                        item.featured
                          ? "text-white sm:text-3xl"
                          : "text-wm-navy"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-6 ${
                        item.featured
                          ? "text-slate-300"
                          : "text-wm-muted"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Applications list */}
                  <div
                    className={`mt-auto border-t pt-6 ${
                      item.featured
                        ? "border-white/10"
                        : "border-wm-border"
                    }`}
                  >
                    <p
                      className={`mb-4 text-[10px] font-bold uppercase tracking-[0.16em] ${
                        item.featured
                          ? "text-white/45"
                          : "text-wm-muted"
                      }`}
                    >
                      Typical applications
                    </p>

                    <div className="grid gap-3">
                      {item.items.map((value) => (
                        <div
                          key={value}
                          className="flex items-center gap-2.5"
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              item.featured
                                ? "bg-wm-primary/20 text-[#8fd4ef]"
                                : "bg-wm-surface-blue text-wm-primary"
                            }`}
                          >
                            <Check size={11} strokeWidth={2.5} />
                          </span>

                          <span
                            className={`text-xs font-semibold ${
                              item.featured
                                ? "text-slate-200"
                                : "text-wm-body"
                            }`}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM INFORMATION BAR
        ====================================================== */}
        <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-wm-border bg-wm-surface-soft px-6 py-6 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-wm-primary shadow-sm ring-1 ring-wm-border sm:flex">
              <Building2 size={18} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-sm font-bold text-wm-navy">
                Need a fabrication for a different application?
              </p>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-wm-muted sm:text-sm">
                If your requirement does not fit one of the applications above,
                share the dimensions, purpose or reference and we can discuss
                a suitable MS fabrication approach.
              </p>
            </div>
          </div>

          <a
            href="/enquiry"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Discuss Your Requirement

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-wm-border bg-white transition-all duration-300 group-hover:border-wm-primary">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        {/* =====================================================
            SERVICE AREA NOTE
        ====================================================== */}
        <div className="mt-5 flex items-center gap-2 text-xs text-wm-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-wm-primary" />
          <span>
            Serving residential, commercial and outdoor fabrication
            requirements across Ahmedabad and Gandhinagar.
          </span>
        </div>
      </div>
    </section>
  );
}