"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Navigation,
} from "lucide-react";

const areas = [
  "Satellite",
  "Bodakdev",
  "Thaltej",
  "SG Highway",
  "Prahladnagar",
  "Bopal",
  "South Bopal",
  "Shilaj",
  "Shela",
  "Chandkheda",
  "Gota",
  "Vastrapur",
  "Navrangpura",
  "Maninagar",
];

export default function AhmedabadServiceArea() {
  return (
    <section className="relative overflow-hidden bg-[var(--wm-surface-blue)] py-210 lg:py-14">
      {/* Technical background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="wm-container relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="wm-eyebrow flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-[var(--wm-primary)]" />
            Local Service Coverage
            <span className="h-px w-7 bg-[var(--wm-primary)]" />
          </div>

          <h2 className="wm-heading mt-4 text-3xl leading-[1.08] sm:text-4xl lg:text-[48px]">
            MS Metal Fabrication Across
            <span className="text-[var(--wm-primary)]">
              {" "}
              Ahmedabad.
            </span>
          </h2>

          <p className="wm-body mx-auto mt-5 max-w-2xl text-sm sm:text-base">
            Welldone Metalworks serves suitable custom MS fabrication
            requirements across Ahmedabad, with Gandhinagar also included in
            the core service area.
          </p>
        </div>

        {/* Main coverage panel */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-md)]">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* Location overview */}
            <div className="relative overflow-hidden bg-[var(--wm-navy)] p-8 sm:p-10 lg:p-12">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[var(--wm-primary)]/20" />

              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[var(--wm-primary)]/10" />

              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[var(--wm-primary)]/10 blur-3xl" />

              {/* Blueprint grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: "34px 34px",
                }}
              />

              <div className="relative z-10">
                {/* Label */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2">
                  <MapPin
                    size={14}
                    className="text-[var(--wm-primary-light)]"
                  />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/75">
                    Ahmedabad & Gandhinagar
                  </span>
                </div>

                {/* Main location */}
                <div className="mt-8">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-primary-light)]">
                    Primary Market
                  </p>

                  <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
                    Ahmedabad
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                    Local fabrication requirements can be discussed based on
                    the project location, dimensions, service required and
                    intended application.
                  </p>
                </div>

                {/* Location cards */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--wm-primary)]/15 text-[var(--wm-primary-light)]">
                        <Building2 size={17} />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-white">
                          Ahmedabad
                        </p>

                        <p className="mt-0.5 text-[11px] text-white/45">
                          Primary market
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--wm-primary)]/15 text-[var(--wm-primary-light)]">
                        <Navigation size={17} />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-white">
                          Gandhinagar
                        </p>

                        <p className="mt-0.5 text-[11px] text-white/45">
                          Core service area
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[var(--wm-primary)] px-5 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:bg-[var(--wm-primary-light)]"
                >
                  Contact Welldone Metalworks

                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition duration-300 group-hover:bg-white/20">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>
            </div>

            {/* Area coverage */}
            <div className="p-8 sm:p-10 lg:p-12">
              {/* Section heading */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-[var(--wm-heading)]">
                        Ahmedabad Areas
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--wm-muted)]">
                        Local service relevance
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden rounded-full border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-3 py-1.5 sm:block">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-primary)]">
                    {areas.length} Areas
                  </span>
                </div>
              </div>

              {/* Areas */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {areas.map((area, index) => (
                  <div
                    key={area}
                    className="group flex items-center gap-2.5 rounded-xl border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-3.5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--wm-border-blue)] hover:bg-white hover:shadow-[var(--wm-shadow-sm)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--wm-surface-icon)] text-[9px] font-black text-[var(--wm-primary)] transition duration-300 group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-bold text-[var(--wm-body)] transition group-hover:text-[var(--wm-heading)] sm:text-[13px]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              {/* Service note */}
              <div className="mt-8 rounded-2xl border border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-5">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[var(--wm-primary)]"
                  />

                  <div>
                    <p className="text-sm font-extrabold text-[var(--wm-heading)]">
                      Project suitability is checked individually
                    </p>

                    <p className="mt-1.5 text-xs leading-6 text-[var(--wm-body)]">
                      Service coverage depends on the project requirement,
                      location and scope of work. Site measurement is available
                      for suitable projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom information */}
              <div className="mt-6 grid gap-4 border-t border-[var(--wm-border)] pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                    Service Focus
                  </p>

                  <p className="mt-1.5 text-sm font-bold text-[var(--wm-heading)]">
                    Custom MS Fabrication
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                    Project Support
                  </p>

                  <p className="mt-1.5 text-sm font-bold text-[var(--wm-heading)]">
                    Measurement & Installation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom SEO / location strip */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[var(--wm-border)] bg-white px-6 py-5 shadow-[var(--wm-shadow-sm)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
              <Navigation size={15} />
            </div>

            <p className="max-w-3xl text-xs leading-5 text-[var(--wm-muted)]">
              Area references communicate local service relevance and are not
              separate location-specific service pages.
            </p>
          </div>

          <a
            href="/enquiry"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--wm-primary)] transition hover:text-[var(--wm-primary-dark)]"
          >
            Start an Enquiry
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}