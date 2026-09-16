import {
  ArrowRight,
  CheckCircle2,
  MapPinned,
  Ruler,
  Wrench,
} from "lucide-react";

export default function MeasurementInstallation() {
  return (
    <section className="overflow-hidden bg-[var(--wm-surface-soft)] py-10 lg:py-14">
      <div className="wm-container">
        <div className="overflow-hidden rounded-[28px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-md)]">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* Visual */}
            <div className="relative min-h-[430px] overflow-hidden">
              <img
                src="/Banner/banner02.webp"
                alt="MS fabrication work prepared for installation"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[var(--wm-navy-dark)]/55" />

              <div className="absolute inset-x-6 bottom-6">
                <div className="rounded-2xl border border-white/15 bg-[var(--wm-navy-dark)]/75 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--wm-primary)] text-white">
                      <MapPinned size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-white">
                        Ahmedabad & Gandhinagar
                      </p>
                      <p className="mt-0.5 text-xs text-white/55">
                        Core service areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 sm:p-10 lg:p-14">
              <span className="wm-eyebrow">
                <span className="h-px w-6 bg-[var(--wm-primary)]" />
                From Site to Installation
              </span>

              <h2 className="wm-heading mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
                Measurement and installation support for suitable projects.
              </h2>

              <p className="wm-body mt-5 max-w-2xl text-sm sm:text-base">
                Custom fabrication often depends on the actual site. Getting
                the dimensions right before fabrication can help the finished
                work fit the intended location and application.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
                    <Ruler size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[var(--wm-heading)]">
                      Site Measurement
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[var(--wm-muted)]">
                      Measurement support is available for requirements where
                      site dimensions need to be reviewed before fabrication.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
                    <Wrench size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[var(--wm-heading)]">
                      Installation Support
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[var(--wm-muted)]">
                      Suitable fabricated works can be installed on site as
                      part of the project execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-5">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[var(--wm-primary)]"
                  />

                  <p className="text-sm leading-6 text-[var(--wm-body)]">
                    When requesting a quote, sharing the project location,
                    approximate dimensions, service required and any reference
                    design can help us understand the requirement.
                  </p>
                </div>
              </div>

              <a
                href="/enquiry"
                className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--wm-primary)] transition hover:text-[var(--wm-primary-dark)]"
              >
                Start your enquiry
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}