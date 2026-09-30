"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
  Ruler,
  Settings2,
  Wrench,
} from "lucide-react";

const faqs = [
  {
    number: "01",
    q: "What types of metal staircases do you fabricate?",
    a: "We can fabricate different staircase configurations including spiral, curved, straight, industrial, fire escape and custom staircase designs based on project requirements.",
    icon: Settings2,
  },
  {
    number: "02",
    q: "Can you build a custom spiral staircase?",
    a: "Yes. Spiral staircases can be developed around the available space, required access and overall design requirements.",
    icon: Ruler,
  },
  {
    number: "03",
    q: "Do you provide site measurements?",
    a: "Site measurement requirements can be coordinated before fabrication so that the staircase design is developed around the actual project conditions.",
    icon: Ruler,
  },
  {
    number: "04",
    q: "Can staircase dimensions be customized?",
    a: "Yes. Staircase dimensions and configuration can be customized according to the available space, application and project requirements.",
    icon: Settings2,
  },
  {
    number: "05",
    q: "Do you provide installation?",
    a: "Installation support can be provided depending on the project scope and location.",
    icon: Wrench,
  },
  {
    number: "06",
    q: "Can you fabricate industrial staircases?",
    a: "Yes. Industrial staircase structures can be fabricated for factories, warehouses, platforms and other industrial applications.",
    icon: Wrench,
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
  

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-48 top-[-220px] h-[560px] w-[560px] rounded-full bg-[#eff9fe] blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col justify-between gap-6 border-b border-[#dceff7] pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1687c5]" />

              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#1687c5]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#12324a] sm:text-4xl lg:text-5xl">
              Before we
              <span className="text-[#1687c5]"> build.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <HelpCircle className="h-4 w-4 text-[#1687c5]" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#12324a]/35">
              Project Questions
            </span>

            <span className="h-px w-8 bg-[#dceff7]" />

            <span className="text-xs font-black text-[#12324a]">
              06 Answers
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            FAQ CONTENT
        ========================================================= */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          {/* =======================================================
              LEFT INFORMATION PANEL
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] bg-[#12324a] p-7 sm:p-8 lg:p-10"
          >
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1687c5]/20 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1687c5]">
                <HelpCircle className="h-5 w-5 text-white" />
              </div>

              <h3 className="mt-8 max-w-sm text-3xl font-black leading-tight text-white sm:text-4xl">
                Have questions about your
                <span className="text-[#46a9d8]"> staircase project?</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                Every project can have different space, access, design and
                installation requirements. These answers cover some of the
                common questions we receive.
              </p>

              {/* Process mini list */}
              <div className="mt-auto pt-10">
                <div className="border-t border-white/10 pt-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                    Typical Project Flow
                  </span>

                  <div className="mt-5 space-y-4">
                    {[
                      ["01", "Discuss requirements"],
                      ["02", "Review measurements"],
                      ["03", "Fabricate staircase"],
                      ["04", "Coordinate installation"],
                    ].map(([number, label]) => (
                      <div
                        key={number}
                        className="flex items-center gap-4"
                      >
                        <span className="text-[10px] font-black text-[#46a9d8]">
                          {number}
                        </span>

                        <span className="h-px w-5 bg-white/10" />

                        <span className="text-xs font-bold text-white/60">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              ACCORDION
          ======================================================= */}
          <div className="overflow-hidden rounded-[28px] border border-[#dceff7] bg-[#f8fcfe]">
            {faqs.map((faq, index) => {
              const isOpen = active === index;
              const Icon = faq.icon;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className={`relative border-b border-[#dceff7] last:border-b-0 ${
                    isOpen ? "bg-white" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                  >
                    {/* Number */}
                    <span
                      className={`hidden w-7 shrink-0 text-[10px] font-black tracking-[0.15em] sm:block ${
                        isOpen ? "text-[#1687c5]" : "text-[#12324a]/20"
                      }`}
                    >
                      {faq.number}
                    </span>

                    {/* Icon */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen
                          ? "bg-[#1687c5] text-white"
                          : "bg-[#eaf7fd] text-[#1687c5]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-black sm:text-base ${
                        isOpen ? "text-[#12324a]" : "text-[#12324a]/80"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "border-[#1687c5] bg-[#1687c5] text-white"
                          : "border-[#dceff7] bg-white text-[#1687c5]"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:pl-[110px] sm:pr-16">
                          <div className="border-l-2 border-[#1687c5]/20 pl-4">
                            <p className="text-sm leading-7 text-slate-500">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active line */}
                  {isOpen && (
                    <motion.span
                      layoutId="faq-active-line"
                      className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#1687c5]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 flex flex-col justify-between gap-5 rounded-2xl border border-[#dceff7] bg-white px-6 py-5 sm:flex-row sm:items-center sm:px-8"
        >
          <div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1687c5]">
              Still Have Questions?
            </span>

            <p className="mt-1 text-sm font-bold text-[#12324a]">
              Discuss your staircase requirements with our team.
            </p>
          </div>

          <a
            href="#quote"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#12324a] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#1687c5]"
          >
            Discuss Your Project

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}