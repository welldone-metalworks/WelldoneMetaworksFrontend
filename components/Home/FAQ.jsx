"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What type of metal fabrication does Welldone Metalworks provide?",
    answer:
      "Welldone Metalworks currently focuses on mild-steel (MS) fabrication. The work can include custom gates, railings, sheds, gazebos, pergolas and other suitable site-specific metalwork.",
  },
  {
    question: "Do you provide stainless steel or aluminum fabrication?",
    answer:
      "No. Our current fabrication offering is focused on mild steel. Stainless steel and aluminum fabrication are not currently offered.",
  },
  {
    question: "Can the fabrication be made according to custom dimensions?",
    answer:
      "Yes. Custom fabrication can be planned around the dimensions, available space and intended use of the project.",
  },
  {
    question: "Do you provide site measurement?",
    answer:
      "Site measurement is available for suitable fabrication projects. The requirement and location can be discussed when you contact us.",
  },
  {
    question: "Do you provide installation after fabrication?",
    answer:
      "Yes. Installation support is available for suitable fabricated works. The installation requirement can be confirmed when the project is discussed.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "Welldone Metalworks primarily serves Ahmedabad and Gandhinagar. Coverage for a specific project can depend on the location and fabrication requirement.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can contact us by phone, WhatsApp or through the enquiry form. Sharing the service you need, project location, approximate dimensions and reference images can help us understand the requirement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-wm-border bg-wm-surface-soft py-10 sm:py-12">
      <div className="wm-container">

        {/* Header */}
        <div className="grid gap-6 border-b border-wm-border pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Frequently Asked Questions
            </div>

            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-heading sm:text-4xl lg:text-[42px]">
              Before you start your fabrication project.
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:max-w-2xl lg:ml-auto">
            <p className="text-sm leading-7 text-wm-body sm:text-[15px]">
              Here are some of the common questions customers ask about MS
              fabrication, custom dimensions, site measurement, installation
              and service coverage.
            </p>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 text-xs font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
            >
              Still have a question?

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-wm-border transition-all duration-300 group-hover:border-wm-primary">
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* FAQ content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-12">

          {/* Side information */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                <MessageCircle size={18} strokeWidth={1.8} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-wm-primary">
                Need clarity?
              </p>

              <p className="mt-3 text-sm leading-6 text-wm-muted">
                Every fabrication project can have different dimensions,
                materials, site conditions and installation requirements.
              </p>

              <Link
                href="/enquiry"
                className="group mt-5 inline-flex items-center gap-2 text-xs font-bold text-wm-navy transition-colors hover:text-wm-primary"
              >
                Discuss your requirement

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div className="overflow-hidden rounded-2xl border border-wm-border bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={
                    index !== faqs.length - 1
                      ? "border-b border-wm-border"
                      : ""
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-wm-surface-soft sm:px-6"
                  >
                    {/* Number */}
                    <span
                      className={`hidden w-7 shrink-0 text-[10px] font-extrabold tracking-[0.12em] sm:block ${
                        isOpen
                          ? "text-wm-primary"
                          : "text-wm-muted"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-bold leading-6 transition-colors sm:text-[15px] ${
                        isOpen
                          ? "text-wm-primary"
                          : "text-wm-navy group-hover:text-wm-primary"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                        isOpen
                          ? "bg-wm-primary text-white"
                          : "bg-wm-surface-icon text-wm-primary group-hover:bg-wm-surface-blue"
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:pl-[4.75rem] sm:pr-14">
                        <div className="border-l-2 border-wm-primary/20 pl-4">
                          <p className="text-sm leading-7 text-wm-muted">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="mt-7 flex flex-col gap-4 border-t border-wm-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-wm-navy">
              Have a fabrication requirement?
            </p>

            <p className="mt-1 text-xs text-wm-muted">
              Share your location, dimensions or reference image with us.
            </p>
          </div>

          <Link
            href="/enquiry"
            className="group inline-flex w-fit items-center gap-2 rounded-lg bg-wm-primary px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-wm-primary-dark"
          >
            Request a Quote

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}