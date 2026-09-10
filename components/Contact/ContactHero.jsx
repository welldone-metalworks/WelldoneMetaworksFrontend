"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Technical background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[620px] w-[620px] opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.045) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent 72%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-24 hidden h-32 w-32 border-r border-t border-wm-border-blue lg:block"
      />

      <div className="wm-container relative">
        <div className="grid min-h-[570px] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20 lg:py-28">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-wm-primary" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-wm-primary">
                01 / Contact
              </span>
            </div>

            <h1 className="wm-heading mt-7 max-w-4xl text-[44px] leading-[0.98] sm:text-[56px] lg:text-[70px]">
              Let&apos;s talk about your{" "}
              <span className="text-wm-primary">
                next metalwork project.
              </span>
            </h1>

            <p className="wm-body mt-7 max-w-2xl text-sm sm:text-base">
              Connect with Welldone Metalworks for custom mild-steel
              fabrication requirements in Ahmedabad and Gandhinagar. Tell us
              what you need, where the work is required and what you are
              looking to build.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 bg-wm-primary px-5 py-3.5 text-xs font-extrabold text-white transition-colors hover:bg-wm-primary-dark"
              >
                Send a Message

                <ArrowDown
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-y-1"
                />
              </a>

              <a
                href="tel:+919649957698"
                className="group inline-flex items-center gap-2 border border-wm-border bg-white px-5 py-3.5 text-xs font-extrabold text-wm-heading transition-colors hover:border-wm-primary hover:text-wm-primary"
              >
                Call +91 96499 57698

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-5 top-0 hidden h-full w-px bg-wm-border lg:block" />

            <div className="border border-wm-border bg-wm-surface-soft">
              <div className="flex items-center justify-between border-b border-wm-border px-6 py-5">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                    Contact Desk
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-wm-heading">
                    Welldone Metalworks
                  </p>
                </div>

                <span className="text-[10px] font-extrabold tracking-[0.18em] text-wm-border-blue">
                  01
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold leading-6 text-wm-heading">
                  Reach us directly or send your requirement through the
                  contact form.
                </p>

                <div className="mt-6 border-y border-wm-border">
                  <ContactRow
                    icon={Phone}
                    label="Phone"
                    value="+91 96499 57698"
                    href="tel:+919649957698"
                  />

                  <ContactRow
                    icon={Mail}
                    label="Email"
                    value="info@welldonemetalworks.com"
                    href="mailto:info@welldonemetalworks.com"
                  />

                  <ContactRow
                    icon={MapPin}
                    label="Location"
                    value="Ahmedabad, Gujarat"
                    last
                  />
                </div>

                <a
                  href="#contact-information"
                  className="group mt-6 flex items-center justify-between border border-wm-border bg-white px-4 py-3.5 transition-colors hover:border-wm-primary"
                >
                  <span className="text-xs font-extrabold text-wm-heading group-hover:text-wm-primary">
                    View contact details
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-wm-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                Ahmedabad / Gujarat
              </span>

              <span className="text-[10px] font-bold tracking-[0.12em] text-wm-placeholder">
                WM / CONTACT
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <div className="border-y border-wm-border">
          <div className="grid sm:grid-cols-3">
            <HeroItem
              number="01"
              title="Direct Contact"
              text="Call or email us directly."
            />

            <HeroItem
              number="02"
              title="Project Discussion"
              text="Share your fabrication requirement."
              border
            />

            <HeroItem
              number="03"
              title="Local Service Area"
              text="Ahmedabad & Gandhinagar."
            />
          </div>
        </div>

        <div className="flex justify-center py-6">
          <a
            href="#contact-information"
            className="group flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-muted hover:text-wm-primary"
          >
            Explore contact options

            <span className="flex h-7 w-7 items-center justify-center border border-wm-border">
              <ArrowDown
                size={13}
                className="transition-transform group-hover:translate-y-1"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  last,
}) {
  const content = (
    <>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-wm-surface-icon">
        <Icon size={15} className="text-wm-primary" />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-wm-muted">
          {label}
        </p>

        <p className="mt-1 break-words text-xs font-extrabold text-wm-heading">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`flex items-center gap-3 py-4 transition-colors hover:text-wm-primary ${
          !last ? "border-b border-wm-border" : ""
        }`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={`flex items-center gap-3 py-4 ${
        !last ? "border-b border-wm-border" : ""
      }`}
    >
      {content}
    </div>
  );
}

function HeroItem({ number, title, text, border }) {
  return (
    <div
      className={`px-5 py-5 sm:px-6 ${
        border ? "border-y border-wm-border sm:border-y-0 sm:border-x" : ""
      }`}
    >
      <div className="flex justify-between">
        <span className="text-[9px] font-extrabold tracking-[0.18em] text-wm-primary">
          {number}
        </span>

        <span className="h-1.5 w-1.5 bg-wm-border-blue" />
      </div>

      <p className="mt-3 text-xs font-extrabold text-wm-heading">
        {title}
      </p>

      <p className="mt-1 text-[11px] leading-5 text-wm-muted">
        {text}
      </p>
    </div>
  );
}   