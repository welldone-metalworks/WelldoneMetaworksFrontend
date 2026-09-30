"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
  Star,
  MapPin,
  MessageSquareQuote,
} from "lucide-react";

/*
  IMPORTANT:
  Replace these with genuine customer reviews before publishing.
  Do not use placeholder/fabricated testimonials as real customer feedback.
*/

const testimonials = [
  {
    id: "01",
    name: "Nirav Patel",
    location: "Ahmedabad",
    text: "Add a genuine customer review here describing their experience with the staircase design, fabrication or installation.",
  },
  {
    id: "02",
    name: "Brijesh Sharma",
    location: "Gandhinagar",
    text: "Add a genuine customer review here describing the project experience and the quality of communication or execution.",
  },
  {
    id: "03",
    name: "Parth Kumar",
    location: "Ahmedabad",
    text: "Add a genuine customer review here describing the completed staircase project and overall experience.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f8fcfe] py-10 sm:py-12 lg:py-14"
    >

      {/* Ambient shapes */}
      <div className="pointer-events-none absolute -right-48 top-[-220px] h-[560px] w-[560px] rounded-full bg-[#eff9fe] blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-[-220px] h-[480px] w-[480px] rounded-full bg-[#1687c5]/[0.035] blur-3xl" />

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
                Customer Feedback
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#12324a] sm:text-4xl lg:text-5xl">
              Real projects.
              <span className="text-[#1687c5]"> Real experiences.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <MessageSquareQuote className="h-4 w-4 text-[#1687c5]" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#12324a]/35">
              Project Feedback
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            FEATURED REVIEW AREA
        ========================================================= */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          {/* =======================================================
              FEATURED TESTIMONIAL
          ======================================================= */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] bg-[#12324a] p-7 sm:p-9 lg:p-11"
          >
            {/* Background number */}
            <span className="pointer-events-none absolute -right-5 -top-10 text-[180px] font-black leading-none text-white/[0.025]">
              01
            </span>

            {/* Decorative quote */}
            <Quote className="absolute right-8 top-8 h-16 w-16 text-[#46a9d8]/10" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#46a9d8]">
                  Featured Feedback
                </span>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3.5 w-3.5 fill-[#46a9d8] text-[#46a9d8]"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="mt-10 max-w-3xl text-2xl font-bold leading-[1.5] text-white sm:text-3xl lg:text-[34px]">
                “{testimonials[0].text}”
              </blockquote>

              <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-end">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                    Customer
                  </span>

                  <h3 className="mt-2 text-base font-black text-white">
                    {testimonials[0].name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-xs text-white/40">
                    <MapPin className="h-3.5 w-3.5 text-[#46a9d8]" />
                    {testimonials[0].location}
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                  Review / {testimonials[0].id}
                </span>
              </div>
            </div>
          </motion.article>

          {/* =======================================================
              REVIEW INDEX
          ======================================================= */}
          <div className="rounded-[28px] border border-[#dceff7] bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#dceff7] pb-5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1687c5]">
                  Feedback Index
                </span>

                <h3 className="mt-2 text-xl font-black text-[#12324a]">
                  Project experiences
                </h3>
              </div>

              <span className="text-2xl font-black text-[#12324a]/10">
                03
              </span>
            </div>

            <div className="mt-2">
              {testimonials.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group py-6 ${
                    index === 0 ? "border-b border-[#dceff7]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf7fd] text-[10px] font-black text-[#1687c5]">
                        {item.id}
                      </span>

                      <div>
                        <h4 className="text-sm font-black text-[#12324a]">
                          {item.name}
                        </h4>

                        <div className="mt-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-[#12324a]/35">
                          <MapPin className="h-3 w-3 text-[#1687c5]" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-[#12324a]/15 transition-colors group-hover:text-[#1687c5]" />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    “{item.text}”
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            TRUST STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 grid overflow-hidden rounded-2xl border border-[#dceff7] bg-white sm:grid-cols-3"
        >
          <div className="border-b border-[#dceff7] px-6 py-5 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/30">
              Feedback
            </span>

            <span className="mt-1 block text-sm font-black text-[#12324a]">
              Genuine project experiences
            </span>
          </div>

          <div className="border-b border-[#dceff7] px-6 py-5 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/30">
              Coverage
            </span>

            <span className="mt-1 block text-sm font-black text-[#12324a]">
              Ahmedabad & Gandhinagar
            </span>
          </div>

          <div className="px-6 py-5">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/30">
              Focus
            </span>

            <span className="mt-1 block text-sm font-black text-[#12324a]">
              Design, fabrication & installation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}