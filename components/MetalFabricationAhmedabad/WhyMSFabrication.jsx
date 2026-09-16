"use client";

import {
  Check,
  Layers,
  MoveDiagonal,
  PenTool,
  Ruler,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const points = [
  {
    icon: MoveDiagonal,
    number: "01",
    title: "Built Around Your Dimensions",
    description:
      "Custom fabrication can be planned around the available space, dimensions and intended application.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design Flexibility",
    description:
      "Suitable patterns, layouts and design details can be discussed according to the project requirement.",
  },
  {
    icon: Ruler,
    number: "03",
    title: "Site-Based Planning",
    description:
      "Site measurement helps establish practical dimensions before fabrication where required.",
  },
  {
    icon: Layers,
    number: "04",
    title: "Application-Focused Work",
    description:
      "The fabrication approach is based on what the finished structure needs to do and where it will be installed.",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Installation Support",
    description:
      "Suitable fabricated works can be supported with on-site installation.",
  },
  {
    icon: Check,
    number: "06",
    title: "Clear Material Scope",
    description:
      "Welldone Metalworks focuses on mild-steel fabrication rather than presenting an unclear all-material offering.",
  },
];

export default function WhyMSFabrication() {
  return (
    <section className="relative overflow-hidden bg-[var(--wm-surface-blue)] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to left, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to left, black, transparent 85%)",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--wm-primary-light)]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[var(--wm-primary)]/7 blur-3xl" />

      <div className="wm-container relative z-10">
        {/* =========================================================
            MAIN LAYOUT
        ========================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}

          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Eyebrow */}

            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-[var(--wm-primary)]" />

              Why Custom MS
            </div>

            {/* Heading */}

            <h2 className="wm-heading mt-5 text-3xl leading-[1.08] sm:text-4xl lg:text-[48px] xl:text-[52px]">
              Fabrication planned around the{" "}
              <span className="text-[var(--wm-primary)]">
                actual requirement.
              </span>
            </h2>

            {/* Description */}

            <p className="wm-body mt-6 max-w-xl text-sm sm:text-[15px]">
              Custom fabrication is useful when a standard off-the-shelf
              product does not fit the dimensions, layout or intended
              application. We focus on practical MS fabrication for
              site-specific requirements.
            </p>

            {/* =====================================================
                MATERIAL CARD
            ====================================================== */}

            <div className="relative mt-8 overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-md)]">
              {/* Accent line */}

              <div className="h-1 w-full bg-[var(--wm-primary)]" />

              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-primary)] text-white shadow-[0_8px_20px_rgba(22,135,197,0.18)]">
                    <Check
                      size={20}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Text */}

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-extrabold text-[var(--wm-heading)]">
                        Mild Steel Focused
                      </h3>

                      <span className="rounded-full bg-[var(--wm-surface-icon)] px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.14em] text-[var(--wm-primary)]">
                        MS
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-[var(--wm-muted)]">
                      MS is the current material scope of Welldone
                      Metalworks. SS and aluminum fabrication are not
                      offered.
                    </p>
                  </div>
                </div>

                {/* Material strip */}

                <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[var(--wm-border)]">
                  <div className="border-r border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-3 py-3">
                    <span className="block text-[8px] font-extrabold uppercase tracking-[0.12em] text-[var(--wm-muted)]">
                      Material
                    </span>

                    <span className="mt-1 block text-xs font-extrabold text-[var(--wm-heading)]">
                      MS
                    </span>
                  </div>

                  <div className="border-r border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-3 py-3">
                    <span className="block text-[8px] font-extrabold uppercase tracking-[0.12em] text-[var(--wm-muted)]">
                      Approach
                    </span>

                    <span className="mt-1 block text-xs font-extrabold text-[var(--wm-heading)]">
                      Custom
                    </span>
                  </div>

                  <div className="bg-[var(--wm-surface-soft)] px-3 py-3">
                    <span className="block text-[8px] font-extrabold uppercase tracking-[0.12em] text-[var(--wm-muted)]">
                      Planning
                    </span>

                    <span className="mt-1 block text-xs font-extrabold text-[var(--wm-heading)]">
                      Site-based
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small supporting line */}

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--wm-border-blue)]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                Designed around the project
              </span>
            </div>
          </div>

          {/* =======================================================
              RIGHT FEATURE GRID
          ======================================================== */}

          <div>
            {/* Grid heading */}

            <div className="mb-6 flex items-end justify-between gap-5 border-b border-[var(--wm-border)] pb-5">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-primary)]">
                  Fabrication Approach
                </p>

                <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-[var(--wm-heading)] sm:text-2xl">
                  What goes into the work
                </h3>
              </div>

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--wm-muted)] sm:block">
                06 capabilities
              </span>
            </div>

            {/* =====================================================
                FEATURE CARDS
            ====================================================== */}

            <div className="grid gap-4 sm:grid-cols-2">
              {points.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group relative min-h-[260px] overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--wm-border-blue)] hover:shadow-[var(--wm-shadow-lg)] sm:p-7"
                  >
                    {/* Background number */}

                    <span className="pointer-events-none absolute -right-3 -top-5 select-none text-[92px] font-black leading-none tracking-[-0.08em] text-[var(--wm-primary)]/[0.035] transition-all duration-500 group-hover:text-[var(--wm-primary)]/[0.07]">
                      {item.number}
                    </span>

                    {/* Top row */}

                    <div className="relative z-10 flex items-start justify-between">
                      {/* Icon */}

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--wm-border)] bg-[var(--wm-surface-icon)] text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Number */}

                      <span className="text-[10px] font-extrabold tracking-[0.18em] text-[var(--wm-border-blue)]">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="relative z-10 mt-7">
                      <h4 className="max-w-[280px] text-lg font-extrabold leading-snug tracking-[-0.02em] text-[var(--wm-heading)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                        {item.title}
                      </h4>

                      <p className="mt-3 max-w-[330px] text-sm leading-6 text-[var(--wm-muted)]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom action */}

                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:left-7 sm:right-7">
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)] transition-colors duration-300 group-hover:text-[var(--wm-primary)]">
                        Fabrication detail
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--wm-border)] text-[var(--wm-primary)] transition-all duration-300 group-hover:border-[var(--wm-primary)] group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>

                    {/* Bottom hover line */}

                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--wm-primary)] transition-all duration-500 group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM INFORMATION BAR
        ========================================================== */}

        <div className="mt-10 grid overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-sm)] sm:grid-cols-3">
          {/* Item 1 */}

          <div className="flex items-center gap-3 border-b border-[var(--wm-border)] p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
              <Ruler size={17} />
            </div>

            <div>
              <p className="text-xs font-extrabold text-[var(--wm-heading)]">
                Dimensions
              </p>

              <p className="mt-0.5 text-[10px] text-[var(--wm-muted)]">
                Planned around available space
              </p>
            </div>
          </div>

          {/* Item 2 */}

          <div className="flex items-center gap-3 border-b border-[var(--wm-border)] p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
              <PenTool size={17} />
            </div>

            <div>
              <p className="text-xs font-extrabold text-[var(--wm-heading)]">
                Design
              </p>

              <p className="mt-0.5 text-[10px] text-[var(--wm-muted)]">
                Discussed around the application
              </p>
            </div>
          </div>

          {/* Item 3 */}

          <div className="flex items-center gap-3 p-5 sm:p-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
              <Wrench size={17} />
            </div>

            <div>
              <p className="text-xs font-extrabold text-[var(--wm-heading)]">
                Installation
              </p>

              <p className="mt-0.5 text-[10px] text-[var(--wm-muted)]">
                On-site support where suitable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}