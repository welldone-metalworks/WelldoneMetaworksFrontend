"use client";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Wrench,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "919649957698";

const whatsappMessage =
  "Hi, I need custom MS metal fabrication service in Ahmedabad. Please share details.";

const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  whatsappMessage
)}`;

/* ============================================================
   ANALYTICS
   ============================================================ */

const trackEvent = (event, params = {}) => {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", event, params);
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event,
      page_type: "local_landing",
      page_path: window.location.pathname,
      ...params,
    });
  }
};

/* ============================================================
   COMPONENT
   ============================================================ */

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--wm-navy-dark)] py-10 text-white sm:py-12 lg:py-14">
      {/* ========================================================
         BACKGROUND DECORATION
         ======================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--wm-primary)]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--wm-primary-light)]/15 blur-3xl" />

      <div className="wm-container relative z-10">
        {/* ======================================================
           MAIN CTA PANEL
           ====================================================== */}

        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-[1fr_420px]">
            {/* ==================================================
               LEFT CONTENT
               ================================================== */}

            <div className="relative p-7 sm:p-10 lg:p-14 xl:p-16">
              {/* Decorative number */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-4 select-none text-[110px] font-black leading-none text-white/[0.025] sm:text-[150px]"
              >
                01
              </div>

              <div className="relative">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--wm-primary-light)]" />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/65">
                    Start Your Project
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[52px]">
                  Have a metal fabrication requirement in
                  <span className="text-[var(--wm-primary-light)]">
                    {" "}
                    Ahmedabad?
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  Tell us what you need to fabricate. Share your requirement,
                  dimensions, location or reference details and start a
                  conversation with Welldone Metalworks.
                </p>

                {/* ==================================================
                   QUICK INFORMATION
                   ================================================== */}

                <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                  <Feature
                    icon={Wrench}
                    text="MS fabrication only"
                  />

                  <Feature
                    icon={MapPin}
                    text="Ahmedabad & Gandhinagar"
                  />

                  <Feature
                    icon={Ruler}
                    text="Site measurement available"
                  />

                  <Feature
                    icon={CheckCircle2}
                    text="Installation support"
                  />
                </div>

                {/* Location / email */}
                <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-7">
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={17}
                      className="text-[var(--wm-primary-light)]"
                    />

                    <span className="text-xs font-semibold text-white/55">
                      Ahmedabad, Gujarat
                    </span>
                  </div>

                  <div className="hidden h-4 w-px bg-white/10 sm:block" />

                  <a
                    href="mailto:info@welldonemetalworks.com"
                    onClick={() =>
                      trackEvent("click_email", {
                        cta_location: "final_cta",
                      })
                    }
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <Mail
                      size={17}
                      className="text-[var(--wm-primary-light)]"
                    />

                    <span className="text-xs font-semibold text-white/55">
                      info@welldonemetalworks.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ==================================================
               RIGHT ACTION PANEL
               ================================================== */}

            <div className="border-t border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="flex h-full flex-col justify-center">
                {/* Panel heading */}
                <div className="mb-6">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-primary-light)]">
                    Choose how to connect
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-white">
                    Let&apos;s discuss your requirement.
                  </h3>
                </div>

                {/* ==================================================
                   QUOTE BUTTON
                   ================================================== */}

                <a
                  href="/enquiry"
                  onClick={() =>
                    trackEvent("quote_request", {
                      cta_location: "final_cta",
                    })
                  }
                  className="group flex min-h-[58px] items-center justify-between gap-4 rounded-xl bg-[var(--wm-primary)] px-5 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(22,135,197,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--wm-primary-light)] hover:shadow-[0_16px_38px_rgba(22,135,197,0.28)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <Wrench size={16} />
                    </span>

                    Request a Quote
                  </span>

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* ==================================================
                   PHONE
                   ================================================== */}

                <a
                  href={`tel:+${PHONE}`}
                  onClick={() =>
                    trackEvent("click_phone", {
                      cta_location: "final_cta",
                    })
                  }
                  className="group mt-3 flex min-h-[58px] items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.045] px-5 text-sm font-extrabold text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <Phone size={16} />
                    </span>

                    +91 96499 57698
                  </span>

                  <ArrowRight
                    size={17}
                    className="text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>

                {/* ==================================================
                   WHATSAPP
                   ================================================== */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("click_whatsapp", {
                      cta_location: "final_cta",
                    })
                  }
                  className="group mt-3 flex min-h-[58px] items-center justify-between gap-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-5 text-sm font-extrabold text-white transition duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/20"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]/20">
                      <FaWhatsapp size={18} />
                    </span>

                    WhatsApp Us
                  </span>

                  <ArrowRight
                    size={17}
                    className="text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>

                {/* Small note */}
                <p className="mt-5 text-center text-[10px] leading-5 text-white/35">
                  Share your project details and we&apos;ll understand the
                  requirement before discussing the next steps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
           BOTTOM BUSINESS BAR
           ====================================================== */}

        <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
          {/* Business */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] text-[var(--wm-primary-light)]">
              <Wrench size={16} />
            </div>

            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/30">
                Business
              </p>

              <p className="mt-0.5 text-xs font-bold text-white/60">
                Welldone Metalworks
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] text-[var(--wm-primary-light)]">
              <Mail size={16} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/30">
                Email
              </p>

              <p className="mt-0.5 truncate text-xs font-bold text-white/60">
                info@welldonemetalworks.com
              </p>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-center gap-3 sm:justify-end">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] text-[var(--wm-primary-light)]">
              <MapPin size={16} />
            </div>

            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/30">
                Office Hours
              </p>

              <p className="mt-0.5 text-xs font-bold text-white/60">
                9 AM – 7 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==============================================================
   FEATURE
   ============================================================== */

function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-white/15 hover:bg-white/[0.06]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--wm-primary)]/15 text-[var(--wm-primary-light)]">
        <Icon size={15} />
      </span>

      <span className="text-xs font-semibold text-white/60">
        {text}
      </span>
    </div>
  );
}