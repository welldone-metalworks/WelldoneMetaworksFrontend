"use client";

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Ruler,
  Wrench,
} from "lucide-react";

const PHONE = "919649957698";

const trackEvent = (event, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }

  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event,
      page_type: "local_landing",
      page_path: window.location.pathname,
      ...params,
    });
  }
};

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--wm-navy-dark)] text-white">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(70,169,216,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(22,135,197,0.18),transparent_35%)]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="wm-container relative z-10">
        <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          {/* Content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[var(--wm-primary-light)] shadow-[0_0_14px_rgba(70,169,216,0.8)]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                Custom MS Metal Fabrication
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[68px]">
              Custom Metal
              <span className="block text-[var(--wm-primary-light)]">
                Fabrication
              </span>
              <span className="block text-white">in Ahmedabad</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Custom mild-steel fabrication for gates, railings, sheds,
              gazebos, pergolas and other site-specific requirements, with
              measurement and installation support.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/enquiry"
                onClick={() =>
                  trackEvent("quote_request", {
                    service: "metal-fabrication",
                    cta_location: "hero",
                    cta_label: "Request a Quote",
                  })
                }
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[var(--wm-primary)] px-7 text-sm font-bold text-white shadow-[0_14px_40px_rgba(22,135,197,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--wm-primary-light)]"
              >
                Request a Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:+${PHONE}`}
                onClick={() =>
                  trackEvent("click_phone", {
                    service: "metal-fabrication",
                    cta_location: "hero",
                    cta_label: "Call Now",
                  })
                }
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-7 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/10"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Qualification */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                Material specialization
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                We work with{" "}
                <strong className="text-white">Mild Steel (MS)</strong>.
                Stainless Steel (SS) and Aluminum fabrication are not
                currently offered.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[var(--wm-primary-light)]">
                  <MapPin size={17} />
                </div>

                <span className="text-xs font-semibold text-white/75">
                  Ahmedabad & Gandhinagar
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[var(--wm-primary-light)]">
                  <Ruler size={17} />
                </div>

                <span className="text-xs font-semibold text-white/75">
                  Site Measurement
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[var(--wm-primary-light)]">
                  <Wrench size={17} />
                </div>

                <span className="text-xs font-semibold text-white/75">
                  Installation Support
                </span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
            {/* Decorative frame */}
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-2xl border border-[var(--wm-primary-light)]/20" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-2xl border border-[var(--wm-primary-light)]/20" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[22px]">
                <img
                  src="/Banner/banner05.webp"
                  alt="Custom MS metal fabrication work by Welldone Metalworks"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--wm-navy-dark)]/85 via-[var(--wm-navy-dark)]/10 to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/10 bg-[var(--wm-navy-dark)]/75 p-4 backdrop-blur-md">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-primary)]">
                        <CheckCircle2 size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Built around your requirement
                        </p>

                        <p className="mt-1 text-xs leading-5 text-white/60">
                          Custom dimensions, fabrication planning and
                          installation support for suitable projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 hidden rounded-2xl border border-[var(--wm-border)] bg-white p-4 shadow-[var(--wm-shadow-lg)] sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--wm-primary)]">
                Local Fabrication
              </p>
              <p className="mt-1 text-sm font-extrabold text-[var(--wm-heading)]">
                Ahmedabad
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}