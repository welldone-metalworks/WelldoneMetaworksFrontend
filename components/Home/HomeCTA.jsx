"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Ruler,
  MapPin,
  MessageSquare,
} from "lucide-react";

const projectDetails = [
  {
    icon: Ruler,
    title: "Dimensions",
    text: "Approximate size or measurements",
  },
  {
    icon: MapPin,
    title: "Project Location",
    text: "Ahmedabad, Gandhinagar or nearby",
  },
  {
    icon: MessageSquare,
    title: "Requirement",
    text: "What you need fabricated",
  },
];

export default function HomeCTA() {
  return (
    <section className="border-t border-wm-border bg-wm-surface-soft py-10 sm:py-12">
      <div className="wm-container">

        {/* Main CTA */}
        <div className="overflow-hidden rounded-2xl border border-wm-border bg-white">

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* Left content */}
            <div className="relative p-6 sm:p-8 lg:p-10">

              {/* Small accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-wm-primary" />

              <div className="pl-2">
                <div className="wm-eyebrow">
                  <span className="h-px w-7 bg-wm-primary" />
                  Start Your Project
                </div>

                <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[42px]">
                  Have a fabrication requirement?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
                  Tell us what you need, where the project is located and any
                  dimensions or reference images you have. We can discuss the
                  fabrication requirement and the next step.
                </p>

                {/* Project information */}
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {projectDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-wm-border bg-wm-surface-soft px-3.5 py-3"
                      >
                        <div className="flex items-center gap-2">
                          <Icon
                            size={15}
                            strokeWidth={1.8}
                            className="text-wm-primary"
                          />

                          <span className="text-xs font-bold text-wm-navy">
                            {item.title}
                          </span>
                        </div>

                        <p className="mt-1.5 text-[10px] leading-4 text-wm-muted">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right contact panel */}
            <div className="border-t border-wm-border bg-wm-surface-soft p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-wm-primary">
                  Get in touch
                </p>

                <h3 className="mt-2 text-xl font-extrabold tracking-[-0.025em] text-wm-navy">
                  Discuss your requirement
                </h3>

                <p className="mt-2 text-xs leading-5 text-wm-muted">
                  Share the basic project details and we'll take it from
                  there.
                </p>
              </div>

              {/* Contact details */}
              <div className="mt-6 divide-y divide-wm-border rounded-xl border border-wm-border bg-white">

                <a
                  href="tel:+919649957698"
                  className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-wm-surface-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                    <Phone size={15} strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-wm-muted">
                      Call
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-wm-navy group-hover:text-wm-primary">
                      +91 96499 57698
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-wm-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wm-primary"
                  />
                </a>

                <a
                  href="mailto:info@welldonemetalworks.in"
                  className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-wm-surface-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                    <Mail size={15} strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-wm-muted">
                      Email
                    </p>

                    <p className="mt-0.5 truncate text-sm font-bold text-wm-navy group-hover:text-wm-primary">
                      info@welldonemetalworks.in
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="ml-auto shrink-0 text-wm-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wm-primary"
                  />
                </a>

              </div>

              {/* Buttons */}
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                <Link
                  href="/enquiry"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-wm-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-wm-primary-dark"
                >
                  Request a Quote

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="tel:+919649957698"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-wm-border bg-white px-5 py-3 text-sm font-bold text-wm-navy transition-colors hover:border-wm-primary/30 hover:text-wm-primary"
                >
                  <Phone size={15} />
                  Call Welldone Metalworks
                </a>
              </div>

            </div>
          </div>

          {/* Bottom information bar */}
          <div className="flex flex-col gap-2 border-t border-wm-border bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p className="text-[11px] leading-5 text-wm-muted">
              Custom mild-steel fabrication for residential, commercial and
              suitable outdoor requirements.
            </p>

            <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-wm-muted">
              Ahmedabad · Gandhinagar
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}