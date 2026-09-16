"use client";

import {
  ArrowRight,
  Building2,
  Fence,
  Grid3X3,
  Hammer,
  Home,
  Layers3,
  Ruler,
  ShieldCheck,
} from "lucide-react";

/* ============================================================
   SERVICES
   All services intentionally point to /services.
   ============================================================ */

const services = [
  {
    number: "01",
    title: "Custom MS Metal Fabrication",
    description:
      "Custom mild-steel fabrication planned around your dimensions, application and project requirements.",
    icon: Hammer,
  },
  {
    number: "02",
    title: "MS Gates",
    description:
      "Custom MS gates for residential and commercial entrances, boundaries and suitable property requirements.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "MS Railings",
    description:
      "Mild-steel railings for stairs, balconies, terraces and other suitable architectural applications.",
    icon: Fence,
  },
  {
    number: "04",
    title: "MS Sheds & Canopies",
    description:
      "Custom MS shed and canopy structures for parking, utility areas and other covered-space requirements.",
    icon: Home,
  },
  {
    number: "05",
    title: "MS Gazebos & Outdoor",
    description:
      "Custom MS gazebos and outdoor structures designed around gardens, terraces and available spaces.",
    icon: Building2,
  },
  {
    number: "06",
    title: "MS Pergolas",
    description:
      "Custom MS pergola structures for outdoor spaces, architectural features and suitable landscape applications.",
    icon: Layers3,
  },
  {
    number: "07",
    title: "MS Staircases & Handrails",
    description:
      "Custom MS staircase structures and handrails planned around site dimensions and intended use.",
    icon: Ruler,
  },
  {
    number: "08",
    title: "MS Grills & Safety Fabrication",
    description:
      "Practical MS grills and protective fabricated elements for suitable residential and commercial applications.",
    icon: Grid3X3,
  },
  {
    number: "09",
    title: "Architectural MS Metalwork",
    description:
      "Custom MS frames, partitions, screens and architectural metal elements for project-specific requirements.",
    icon: Building2,
  },
];

/* ============================================================
   ANALYTICS
   ============================================================ */

const trackServiceClick = (serviceName) => {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", "service_cta_click", {
      service: serviceName,
      page_type: "local_landing",
      destination: "/services",
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: "service_cta_click",
      service: serviceName,
      page_type: "local_landing",
      destination: "/services",
      page_path: window.location.pathname,
    });
  }
};

/* ============================================================
   COMPONENT
   ============================================================ */

export default function FabricationServices() {
  return (
    <section
      id="fabrication-services"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* ======================================================
         SUBTLE BACKGROUND DETAILS
         ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 75%)",
        }}
      />

      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[var(--wm-primary-light)]/5 blur-3xl" />

      <div className="wm-container relative z-10">
        {/* ====================================================
           SECTION HEADER
           ==================================================== */}

        <div className="max-w-4xl">
          {/* Eyebrow */}

          <div className="wm-eyebrow">
            <span className="h-px w-8 bg-[var(--wm-primary)]" />

            What We Fabricate
          </div>

          {/* Heading */}

          <h2 className="wm-heading mt-5 max-w-4xl text-3xl leading-[1.08] sm:text-4xl lg:text-[52px]">
            Custom MS fabrication for{" "}
            <span className="text-[var(--wm-primary)]">
              practical & architectural
            </span>{" "}
            requirements.
          </h2>

          {/* Description */}

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--wm-body)] sm:text-base">
            From gates and railings to sheds, gazebos, pergolas, staircases
            and custom architectural metalwork, Welldone Metalworks provides
            mild-steel fabrication tailored to suitable project requirements.
          </p>
        </div>

        {/* ====================================================
           HEADER META
           ==================================================== */}

        <div className="mt-9 flex flex-col justify-between gap-4 border-y border-[var(--wm-border-light)] py-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--wm-primary)]" />

              <span className="text-xs font-bold text-[var(--wm-heading)]">
                Mild Steel (MS)
              </span>
            </div>

            <div className="hidden h-4 w-px bg-[var(--wm-border)] sm:block" />

            <span className="text-xs text-[var(--wm-muted)]">
              Custom dimensions
            </span>

            <div className="hidden h-4 w-px bg-[var(--wm-border)] sm:block" />

            <span className="text-xs text-[var(--wm-muted)]">
              Site-specific fabrication
            </span>
          </div>

          <a
            href="/services"
            className="group inline-flex items-center gap-2 text-xs font-extrabold text-[var(--wm-primary)] transition hover:text-[var(--wm-primary-dark)]"
          >
            View all services
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* ====================================================
           SERVICES GRID
           ==================================================== */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.number}
                href="/services"
                onClick={() => trackServiceClick(service.title)}
                className="group relative flex min-h-[285px] flex-col overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--wm-border-blue)] hover:bg-white hover:shadow-[var(--wm-shadow-lg)] sm:p-7"
              >
                {/* ==================================================
                   TOP ROW
                   ================================================== */}

                <div className="flex items-start justify-between">
                  {/* Icon */}

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)] transition-all duration-300 group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Small decorative square */}

                    <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-sm border-2 border-[var(--wm-surface-soft)] bg-[var(--wm-primary-light)] transition-colors duration-300 group-hover:border-white" />
                  </div>

                  {/* Number */}

                  <span className="text-[11px] font-extrabold tracking-[0.16em] text-[var(--wm-border-blue)] transition-colors duration-300 group-hover:text-[var(--wm-primary-light)]">
                    {service.number}
                  </span>
                </div>

                {/* ==================================================
                   CONTENT
                   ================================================== */}

                <div className="mt-7">
                  <h3 className="max-w-[290px] text-lg font-extrabold leading-snug tracking-[-0.02em] text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--wm-muted)]">
                    {service.description}
                  </p>
                </div>

                {/* ==================================================
                   CARD FOOTER
                   ================================================== */}

                <div className="mt-auto flex items-center justify-between pt-7">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                    Explore service range
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--wm-border)] bg-white text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                {/* ==================================================
                   HOVER ACCENT
                   ================================================== */}

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--wm-primary)] transition-all duration-500 group-hover:w-full" />

                {/* Corner decoration */}

                <span className="absolute right-0 top-0 h-16 w-16 rounded-bl-[40px] bg-[var(--wm-primary)]/[0.025] transition-all duration-300 group-hover:h-20 group-hover:w-20 group-hover:bg-[var(--wm-primary)]/[0.05]" />
              </a>
            );
          })}
        </div>

        {/* ====================================================
           BOTTOM MATERIAL NOTE
           ==================================================== */}

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--wm-primary)] shadow-[var(--wm-shadow-sm)]">
              <Hammer size={17} />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[var(--wm-heading)]">
                One material focus: Mild Steel
              </p>

              <p className="mt-1 text-xs leading-5 text-[var(--wm-muted)]">
                Our current fabrication offering is focused on MS. Stainless
                Steel (SS) and Aluminum fabrication are not offered.
              </p>
            </div>
          </div>

          <a
            href="/services"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--wm-border)] bg-white px-5 py-3 text-xs font-extrabold text-[var(--wm-primary)] transition hover:border-[var(--wm-primary)] hover:bg-[var(--wm-primary)] hover:text-white"
          >
            Explore Services
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}