"use client";

import {
  ArrowUpRight,
  Building2,
  Home,
  ParkingSquare,
  Store,
  Trees,
  Warehouse,
} from "lucide-react";

const applications = [
  {
    number: "01",
    icon: Home,
    title: "Residential Spaces",
    description:
      "Custom gates, railings, sheds and outdoor metalwork for suitable residential requirements.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Practical MS fabrication for entrances, boundaries, covered areas and other commercial requirements.",
  },
  {
    number: "03",
    icon: ParkingSquare,
    title: "Parking & Covered Areas",
    description:
      "Custom MS shed structures for suitable parking and covered-space requirements.",
  },
  {
    number: "04",
    icon: Trees,
    title: "Gardens & Outdoor Spaces",
    description:
      "Gazebos, pergolas and other outdoor MS structures designed around the available space.",
  },
  {
    number: "05",
    icon: Store,
    title: "Entrances & Boundaries",
    description:
      "Custom gates, grills and fabricated elements for suitable property entrances and boundaries.",
  },
  {
    number: "06",
    icon: Warehouse,
    title: "Utility & Practical Structures",
    description:
      "Site-specific frames and utility fabrication for requirements that need a custom approach.",
  },
];

export default function ApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          SUBTLE BACKGROUND GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 80%)",
        }}
      />

      {/* Soft decorative glow */}

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[var(--wm-primary-light)]/6 blur-3xl" />

      <div className="wm-container relative z-10">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          {/* Left heading */}

          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />

              Applications
            </div>

            <h2 className="wm-heading mt-5 max-w-2xl text-3xl leading-[1.08] sm:text-4xl lg:text-[50px]">
              Where custom MS fabrication can{" "}
              <span className="text-[var(--wm-primary)]">
                fit your project.
              </span>
            </h2>
          </div>

          {/* Right description */}

          <div className="lg:pb-1">
            <p className="wm-body max-w-2xl text-sm sm:text-[15px]">
              The right fabrication approach depends on the space, dimensions
              and intended use. We work on suitable residential, commercial
              and outdoor requirements across our service areas.
            </p>

            {/* Small information points */}

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--wm-primary)]" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--wm-heading)]">
                  Residential
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--wm-primary)]" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--wm-heading)]">
                  Commercial
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--wm-primary)]" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--wm-heading)]">
                  Outdoor
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            SECTION DIVIDER
        ========================================================== */}

        <div className="mt-10 flex items-center gap-4 border-y border-[var(--wm-border-light)] py-4">
          <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-primary)]">
            Fabrication Applications
          </span>

          <span className="h-px flex-1 bg-[var(--wm-border-light)]" />

          <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
            06 Areas
          </span>
        </div>

        {/* =========================================================
            APPLICATION GRID
        ========================================================== */}

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative min-h-[275px] overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--wm-border-blue)] hover:bg-white hover:shadow-[var(--wm-shadow-lg)] sm:p-7"
              >
                {/* =================================================
                    LARGE BACKGROUND NUMBER
                ================================================== */}

                <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[105px] font-black leading-none tracking-[-0.08em] text-[var(--wm-primary)]/[0.035] transition-all duration-500 group-hover:text-[var(--wm-primary)]/[0.07]">
                  {item.number}
                </span>

                {/* =================================================
                    TOP ROW
                ================================================== */}

                <div className="relative z-10 flex items-start justify-between">
                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--wm-border)] bg-white text-[var(--wm-primary)] shadow-[var(--wm-shadow-sm)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Number */}

                  <span className="text-[10px] font-extrabold tracking-[0.18em] text-[var(--wm-border-blue)] transition-colors duration-300 group-hover:text-[var(--wm-primary-light)]">
                    {item.number}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative z-10 mt-7">
                  <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[360px] text-sm leading-6 text-[var(--wm-muted)]">
                    {item.description}
                  </p>
                </div>

                {/* =================================================
                    BOTTOM ACTION
                ================================================== */}

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:left-7 sm:right-7">
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                    Suitable applications
                  </span>

                  
                </div>

                {/* =================================================
                    HOVER BOTTOM LINE
                ================================================== */}

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--wm-primary)] transition-all duration-500 group-hover:w-full" />

                {/* =================================================
                    CORNER ACCENT
                ================================================== */}

                <span className="absolute right-0 top-0 h-16 w-16 rounded-bl-[45px] bg-[var(--wm-primary)]/[0.025] transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:bg-[var(--wm-primary)]/[0.05]" />
              </div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM INFORMATION PANEL
        ========================================================== */}

        <div className="mt-8 overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-[var(--wm-surface-blue)]">
          <div className="grid md:grid-cols-[1.3fr_0.7fr]">
            {/* Main message */}

            <div className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--wm-primary)] shadow-[var(--wm-shadow-sm)]">
                  <Building2
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[var(--wm-heading)]">
                    Built around the application
                  </p>

                  <p className="mt-1.5 max-w-2xl text-xs leading-5 text-[var(--wm-muted)]">
                    The fabrication approach can be discussed according to
                    available space, dimensions, intended use and the
                    requirements of the installation location.
                  </p>
                </div>
              </div>
            </div>

            {/* MS badge */}

            <div className="flex items-center border-t border-[var(--wm-border)] bg-white p-6 md:border-l md:border-t-0 sm:p-7">
              <div className="flex w-full items-center justify-between gap-5">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-primary)]">
                    Material Focus
                  </span>

                  <p className="mt-1 text-base font-extrabold text-[var(--wm-heading)]">
                    Mild Steel (MS)
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] text-[var(--wm-primary)]">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FOOTNOTE
        ========================================================== */}

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[var(--wm-border-blue)]" />

          <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-[var(--wm-muted)]">
            Applications may vary according to project requirements
          </p>
        </div>
      </div>
    </section>
  );
}