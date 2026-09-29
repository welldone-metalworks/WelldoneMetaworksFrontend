"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const faqs = [
  {
    q: "Do you provide custom gazebo designs?",
    a: "Yes, we provide fully customized gazebo, pergola and canopy solutions according to your outdoor space, architectural style and design preferences.",
  },
  {
    q: "What materials do you use?",
    a: "We specialize in MS (mild steel) fabrication and can customize the structure, roofing style and finishing according to your project requirements.",
  },
  {
    q: "Do you provide rooftop gazebo solutions?",
    a: "Yes, we specialize in rooftop gazebo and pergola structures for villas, penthouses and premium residential properties.",
  },
  {
    q: "Is the structure weather resistant?",
    a: "Our outdoor structures are designed with suitable materials, fabrication techniques and finishing to handle normal outdoor environmental conditions.",
  },
  {
    q: "Can I customize the design and color?",
    a: "Yes, the structure can be customized according to your preferred design, dimensions, roofing style, color and finishing requirements.",
  },
  {
    q: "How much time does installation take?",
    a: "Project timelines depend on the size, design complexity and fabrication requirements. Installation is scheduled after the fabrication stage is completed.",
  },
  {
    q: "Do you provide site visits?",
    a: "Yes, our team can visit the project location to understand the space, take measurements and discuss the design and fabrication requirements.",
  },
  {
    q: "Which areas do you serve?",
    a: "Welldone Metalworks provides custom gazebo, pergola, canopy and outdoor fabrication solutions across Ahmedabad, Gandhinagar and nearby areas.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f7fbfd] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -left-40 top-[-150px] h-[500px] w-[500px] rounded-full bg-wm-primary/[0.065] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-150px] h-[500px] w-[500px] rounded-full bg-wm-primary-light/[0.07] blur-[140px]" />

      {/* Architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18,50,74,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18,50,74,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* =========================================================
          BACKGROUND TYPOGRAPHY
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-5 hidden -translate-x-1/2 overflow-hidden lg:block">
        <span className="whitespace-nowrap text-[190px] font-black leading-none tracking-[0.15em] text-wm-navy/[0.025]">
          FAQ
        </span>
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-end gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* LEFT */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-3 rounded-full border border-wm-border bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wm-primary opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-wm-primary" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary-dark sm:text-xs">
                Frequently Asked Questions
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-xl text-[38px] font-bold leading-[1.04] tracking-[-0.035em] text-wm-heading sm:text-5xl md:text-[54px]">
              Everything You
              <span className="block bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-primary-light bg-clip-text text-transparent">
                Need To Know.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="relative lg:pb-1">
            <div className="absolute -left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-wm-primary/70 via-wm-primary/25 to-transparent lg:block" />

            <p className="max-w-2xl text-sm leading-7 text-wm-body sm:text-base sm:leading-8">
              Have questions about gazebo design, materials, customization,
              installation or service areas? Find straightforward answers
              to the questions clients commonly ask before starting a
              project.
            </p>

            {/* Small info row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-wm-primary" />

                <span className="text-xs font-semibold text-wm-heading">
                  Project Guidance
                </span>
              </div>

              <span className="h-3 w-px bg-wm-border" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-wm-body/45">
                Design • Fabrication • Installation
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN FAQ AREA
        ======================================================= */}

        <div className="mt-11 grid items-start gap-7 lg:mt-13 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">

          {/* =====================================================
              LEFT INFO CARD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden rounded-[28px] bg-wm-navy p-6 shadow-[0_20px_55px_rgba(18,50,74,0.14)] sm:p-7 lg:sticky lg:top-24"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-wm-primary/20 blur-[80px]" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-wm-primary/20 bg-wm-primary/10">
                <HelpCircle className="h-5 w-5 text-wm-primary-light" />
              </div>

              {/* Small heading */}
              <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.22em] text-wm-primary-light">
                Need More Information?
              </p>

              {/* Main text */}
              <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Let&apos;s discuss your project.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Every outdoor space is different. Tell us what you have in
                mind and we can discuss the design, measurements,
                fabrication and installation requirements.
              </p>

              {/* Contact CTA */}
              <a
                href="/enquiry"
                className="group mt-6 inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 transition-all duration-300 hover:border-wm-primary/40 hover:bg-wm-primary/10"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-wm-primary-light" />

                  <span className="text-xs font-bold text-white">
                    Start Your Enquiry
                  </span>
                </span>

                <ArrowUpRight className="h-4 w-4 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wm-primary-light" />
              </a>

              {/* Divider */}
              <div className="my-6 h-px bg-white/[0.08]" />

              {/* FAQ counter */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-black text-white">
                    {String(faqs.length).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                    Common Questions
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  {faqs.map((item, index) => (
                    <span
                      key={item.q}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-6 bg-wm-primary-light"
                          : "w-2 bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative number */}
            <span className="pointer-events-none absolute -bottom-8 -right-2 text-[130px] font-black leading-none text-white/[0.025]">
              ?
            </span>
          </motion.div>

          {/* =====================================================
              RIGHT FAQ LIST
          ===================================================== */}

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  className={`group relative overflow-hidden rounded-[22px] border bg-white transition-all duration-400 ${
                    isOpen
                      ? "border-wm-primary/25 shadow-[0_15px_40px_rgba(18,50,74,0.08)]"
                      : "border-wm-border shadow-[0_4px_18px_rgba(18,50,74,0.035)] hover:border-wm-primary/20 hover:shadow-[0_12px_30px_rgba(18,50,74,0.07)]"
                  }`}
                >
                  {/* Active left accent */}
                  <div
                    className={`absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-wm-primary-dark via-wm-primary to-wm-primary-light transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wm-primary focus-visible:ring-inset sm:px-6 sm:py-5"
                  >
                    {/* Number */}
                    <span
                      className={`hidden w-8 shrink-0 text-[10px] font-black tracking-[0.12em] transition-colors sm:block ${
                        isOpen
                          ? "text-wm-primary"
                          : "text-wm-navy/[0.18]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-bold leading-6 transition-colors sm:text-[15px] ${
                        isOpen
                          ? "text-wm-primary-dark"
                          : "text-wm-heading"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Toggle */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-wm-primary text-white shadow-wm-sm"
                          : "bg-wm-surface-blue text-wm-primary group-hover:bg-wm-primary group-hover:text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="px-5 pb-5 sm:pl-[68px] sm:pr-16 sm:pb-6">
                          <div className="mb-4 h-px w-full bg-wm-border" />

                          <p className="text-sm leading-7 text-wm-body">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-wm-border pt-5 sm:flex-row"
        >
          <p className="text-xs font-medium text-wm-body">
            Still have a question? We&apos;re happy to discuss your project.
          </p>

          <a
            href="/enquiry"
            className="group inline-flex items-center gap-2 text-xs font-bold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Talk About Your Project

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}