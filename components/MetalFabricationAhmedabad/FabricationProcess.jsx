"use client";

import {
  ArrowRight,
  ClipboardList,
  DraftingCompass,
  Hammer,
  Ruler,
  Truck,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Discuss the Requirement",
    description:
      "We understand the intended application, approximate dimensions, location and design requirements.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Site Measurement",
    description:
      "Where required, site dimensions are reviewed to establish practical fabrication requirements.",
  },
  {
    number: "03",
    icon: DraftingCompass,
    title: "Plan the Fabrication",
    description:
      "Dimensions, layout and relevant fabrication details are confirmed before work proceeds.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "MS Fabrication",
    description:
      "Required components are fabricated according to the confirmed project requirements.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Finishing & Preparation",
    description:
      "The fabricated work is prepared according to the agreed project requirements.",
  },
  {
    number: "06",
    icon: Truck,
    title: "Installation Support",
    description:
      "Suitable fabricated work can be transported and installed on site.",
  },
];

export default function FabricationProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--wm-navy)] py-10 text-white sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Background glow */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--wm-primary)]/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--wm-primary-light)]/10 blur-3xl" />

      <div className="wm-container relative z-10">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[var(--wm-primary-light)]">
              <span className="h-px w-8 bg-[var(--wm-primary-light)]" />

              How We Work
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-[50px]">
              From requirement to{" "}
              <span className="text-[var(--wm-primary-light)]">
                finished fabrication.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-[15px]">
              A straightforward process helps establish the project
              requirements before fabrication and installation.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--wm-primary-light)]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/35">
                Requirement-led fabrication workflow
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            PROCESS HEADER BAR
        ========================================================== */}

        <div className="mt-12 flex items-center justify-between border-y border-white/10 py-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">
              Process
            </span>

            <span className="h-px w-8 bg-white/15" />

            <span className="text-xs font-bold text-white/65">
              Six stages from planning to installation
            </span>
          </div>

          <span className="hidden text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/25 sm:block">
            01 — 06
          </span>
        </div>

        {/* =========================================================
            DESKTOP HORIZONTAL PROCESS
        ========================================================== */}

        <div className="relative mt-12">
          {/* Main connector */}

          <div
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-[35px] hidden h-px bg-white/10 lg:block"
          />

          {/* Active connector */}

          <div
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-[35px] hidden h-px bg-gradient-to-r from-[var(--wm-primary)]/70 via-[var(--wm-primary-light)]/30 to-transparent lg:block"
          />

          {/* ======================================================
              STEP GRID
          ======================================================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative"
                >
                  {/* =================================================
                      STEP NODE
                  ================================================== */}

                  <div className="relative z-10 flex items-center gap-3 lg:block">
                    {/* Number / Icon */}

                    <div className="relative mx-0 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[20px] border border-white/10 bg-[var(--wm-navy-dark)] shadow-[0_0_0_8px_var(--wm-navy)] transition-all duration-300 group-hover:border-[var(--wm-primary)]/60 group-hover:bg-[var(--wm-primary)] group-hover:shadow-[0_0_0_8px_var(--wm-navy),0_12px_30px_rgba(22,135,197,0.2)] lg:mx-auto">
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                        className="text-[var(--wm-primary-light)] transition-colors duration-300 group-hover:text-white"
                      />

                      {/* Number badge */}

                      <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border border-[var(--wm-navy)] bg-[var(--wm-primary)] px-1.5 text-[8px] font-extrabold tracking-wide text-white">
                        {step.number}
                      </span>
                    </div>

                    {/* Mobile title */}

                    <div className="lg:hidden">
                      <span className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-white/25">
                        Step {step.number}
                      </span>

                      <h3 className="mt-1 text-sm font-extrabold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* =================================================
                      DESKTOP CONTENT
                  ================================================== */}

                  <div className="mt-7 hidden text-center lg:block">
                    <span className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-primary-light)]/70">
                      Step {step.number}
                    </span>

                    <h3 className="mx-auto mt-2 min-h-[40px] max-w-[170px] text-[13px] font-extrabold leading-[1.35] text-white transition-colors duration-300 group-hover:text-[var(--wm-primary-light)]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[175px] text-[11px] leading-[1.65] text-white/40 transition-colors duration-300 group-hover:text-white/55">
                      {step.description}
                    </p>
                  </div>

                  {/* =================================================
                      MOBILE DESCRIPTION
                  ================================================== */}

                  <p className="mt-4 pl-[83px] text-xs leading-5 text-white/40 lg:hidden">
                    {step.description}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div className="mx-auto mt-6 hidden h-[2px] w-10 overflow-hidden rounded-full bg-white/5 lg:block">
                    <span className="block h-full w-0 bg-[var(--wm-primary)] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}