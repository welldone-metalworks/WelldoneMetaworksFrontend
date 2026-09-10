"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

export default function MapEmbed() {
  return (
    <section className="border-t border-wm-border  py-12 sm:py-14">
      <div className="wm-container">

        {/* Header */}
        <div className="flex flex-col gap-5 border-b border-wm-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Find Us
            </div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-wm-heading sm:text-3xl">
              Welldone Metalworks in Ahmedabad.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-wm-muted">
              Located in Ahmedabad and serving fabrication requirements across
              Ahmedabad and Gandhinagar.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Contact us

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-wm-border transition-all duration-300 group-hover:border-wm-primary">
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>

        {/* Map + information */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-wm-border bg-white">

          {/* Map */}
          <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[420px]">
            <iframe
              title="Welldone Metalworks Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.551184310247!2d72.51386717477196!3d23.08122021413805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8342441cd9ff%3A0x7f3b4b1c80023719!2sWellDone%20Metalworks!5e1!3m2!1sen!2sin!4v1773210364073!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* Location information */}
          <div className="grid border-t border-wm-border sm:grid-cols-3">

            {/* Location */}
            <div className="flex items-start gap-3 border-b border-wm-border px-5 py-4 sm:border-b-0 sm:border-r sm:px-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                <MapPin size={16} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-wm-muted">
                  Location
                </p>

                <p className="mt-1 text-sm font-bold text-wm-navy">
                  Ahmedabad, Gujarat
                </p>

                <p className="mt-0.5 text-[11px] leading-5 text-wm-muted">
                  Serving Ahmedabad & Gandhinagar
                </p>
              </div>
            </div>

            {/* Service */}
            <div className="flex items-start gap-3 border-b border-wm-border px-5 py-4 sm:border-b-0 sm:border-r sm:px-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                <Navigation size={16} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-wm-muted">
                  Service Coverage
                </p>

                <p className="mt-1 text-sm font-bold text-wm-navy">
                  Local Project Support
                </p>

                <p className="mt-0.5 text-[11px] leading-5 text-wm-muted">
                  Coverage depends on project requirements
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+919649957698"
              className="group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-wm-surface-soft sm:px-6"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                <Phone size={16} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-wm-muted">
                  Call
                </p>

                <p className="mt-1 text-sm font-bold text-wm-navy group-hover:text-wm-primary">
                  +91 96499 57698
                </p>

                <p className="mt-0.5 text-[11px] leading-5 text-wm-muted">
                  Discuss your fabrication requirement
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-5 text-wm-muted">
            Planning a site visit or installation? Confirm the project
            location with us before scheduling.
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=WellDone%20Metalworks"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 text-xs font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Get Directions

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
} 