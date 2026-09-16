"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question:
      "What type of metal fabrication does Welldone Metalworks provide?",
    answer:
      "Welldone Metalworks provides custom mild-steel (MS) fabrication for gates, railings, sheds, gazebos, pergolas and other suitable custom metalwork requirements.",
  },
  {
    question: "Does Welldone Metalworks provide stainless steel fabrication?",
    answer:
      "No. Welldone Metalworks currently focuses on mild-steel (MS) fabrication and does not offer stainless steel (SS) fabrication.",
  },
  {
    question: "Does Welldone Metalworks provide aluminum fabrication?",
    answer:
      "No. Aluminum fabrication is not currently offered by Welldone Metalworks.",
  },
  {
    question: "Is site measurement available?",
    answer:
      "Yes. Site measurement is available for suitable fabrication projects where the actual site dimensions need to be reviewed.",
  },
  {
    question: "Do you provide installation?",
    answer:
      "Yes. Installation support is provided for suitable fabricated works.",
  },
  {
    question: "Can the fabrication dimensions be customized?",
    answer:
      "Yes. Custom fabrication can be planned around the available dimensions, intended application and project requirements.",
  },
  {
    question: "What information should I provide when requesting a quote?",
    answer:
      "Useful information includes the service you need, project location, approximate dimensions, intended application and any reference design or image you may have.",
  },
  {
    question: "Which areas does Welldone Metalworks serve?",
    answer:
      "Ahmedabad is the primary service market, with Gandhinagar also included in the core service area. Suitable projects are assessed based on the requirement and location.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="wm-container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="wm-eyebrow">
              <span className="h-px w-6 bg-[var(--wm-primary)]" />
              Frequently Asked
            </span>

            <h2 className="wm-heading mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Questions about MS fabrication.
            </h2>

            <p className="wm-body mt-5 text-sm sm:text-base">
              Clear answers to common questions customers have before
              requesting a custom metal fabrication quote.
            </p>

            <a
              href="/enquiry"
              className="mt-7 inline-flex items-center rounded-xl bg-[var(--wm-primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--wm-primary-dark)]"
            >
              Ask about your project
            </a>
          </div>

          {/* Accordion */}
          <div className="overflow-hidden rounded-2xl border border-[var(--wm-border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--wm-border-light)] last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-[var(--wm-surface-soft)] sm:px-7"
                  >
                    <span className="text-sm font-extrabold leading-6 text-[var(--wm-heading)] sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--wm-border)] text-[var(--wm-primary)] transition duration-300 ${
                        isOpen ? "rotate-180 bg-[var(--wm-surface-blue)]" : ""
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-7 text-[var(--wm-muted)] sm:px-7">
                        {faq.answer}
                      </p>
                    </div>
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