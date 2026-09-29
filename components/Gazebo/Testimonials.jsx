"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Villa Owner",
    review:
      "Amazing premium finish and professional installation experience. The gazebo completely transformed our outdoor living area.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    name: "Amit Shah",
    role: "Business Owner",
    review:
      "Our rooftop gazebo looks absolutely stunning. Welldone Metalworks delivered premium quality with elegant finishing.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
  {
    name: "Your Client Name",
    role: "Homeowner",
    review:
      "Replace this text with a genuine customer review about your gazebo, canopy or outdoor structure project.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7fbfd] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft atmospheric glow */}
      <div className="pointer-events-none absolute -left-40 top-[-120px] h-[500px] w-[500px] rounded-full bg-wm-primary/[0.065] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-150px] h-[500px] w-[500px] rounded-full bg-wm-primary-light/[0.075] blur-[150px]" />

      {/* Fine architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18,50,74,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(18,50,74,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-24 top-10 hidden h-[360px] w-[360px] rounded-full border border-wm-primary/[0.06] lg:block" />

      <div className="pointer-events-none absolute -right-2 top-22 hidden h-[250px] w-[250px] rounded-full border border-wm-primary/[0.05] lg:block" />

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
          transition={{ duration: 0.75, ease: "easeOut" }}
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
                Client Experiences
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-xl text-[38px] font-bold leading-[1.04] tracking-[-0.035em] text-wm-heading sm:text-5xl md:text-[54px]">
              Experiences That
              <span className="block bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-primary-light bg-clip-text text-transparent">
                Speak For Us.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="relative lg:pb-1">
            {/* Accent */}
            <div className="absolute -left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-wm-primary/70 via-wm-primary/25 to-transparent lg:block" />

            <p className="max-w-2xl text-sm leading-7 text-wm-body sm:text-base sm:leading-8">
              From private villas and rooftops to premium outdoor spaces,
              our goal is to make every project feel thoughtfully designed,
              carefully fabricated and professionally completed.
            </p>

            {/* Trust indicators */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3.5 w-3.5 fill-wm-warning text-wm-warning"
                    />
                  ))}
                </div>

                <span className="text-xs font-semibold text-wm-heading">
                  Client Feedback
                </span>
              </div>

              <span className="h-3 w-px bg-wm-border" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-wm-body/50">
                Outdoor Fabrication
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            TESTIMONIAL GRID
        ======================================================= */}

        <div className="mt-11 grid grid-cols-1 gap-5 sm:mt-13 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className={`group relative overflow-hidden rounded-[28px] border bg-white transition-all duration-500 ${
                index === 1
                  ? "border-wm-primary/20 shadow-[0_18px_55px_rgba(22,135,197,0.10)] lg:-translate-y-3"
                  : "border-wm-border shadow-[0_8px_30px_rgba(18,50,74,0.05)]"
              } hover:-translate-y-2 hover:border-wm-primary/25 hover:shadow-[0_24px_60px_rgba(18,50,74,0.11)]`}
            >
              {/* =================================================
                  CARD BACKGROUND
              ================================================= */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-wm-surface-blue/70 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top accent */}
              <div
                className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-primary-light ${
                  index === 1 ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Large quote */}
              <div className="pointer-events-none absolute right-5 top-4">
                <Quote className="h-16 w-16 text-wm-primary/[0.055]" />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative z-10 p-6 sm:p-7">

                {/* Client */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar */}
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={`${item.name} - ${item.role}`}
                        className="h-14 w-14 rounded-2xl border-2 border-white object-cover shadow-[0_5px_18px_rgba(18,50,74,0.12)]"
                      />

                      {/* Status */}
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-wm-primary">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-wm-heading">
                        {item.name}
                      </h3>

                      <p className="mt-0.5 text-xs text-wm-body">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Number */}
                  <span className="text-xs font-black tracking-[0.15em] text-wm-navy/[0.12]">
                    0{index + 1}
                  </span>
                </div>

                {/* Stars */}
                <div
                  className="mt-6 flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-wm-warning text-wm-warning"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="mt-5 min-h-[120px] text-[15px] leading-7 text-wm-body">
                  “{item.review}”
                </p>

                {/* Divider */}
                <div className="mt-5 border-t border-wm-border pt-5">
                  <div className="flex items-center justify-between">
                    {/* Accent */}
                    <div className="flex items-center gap-2">
                      <span className="h-[2px] w-8 rounded-full bg-wm-primary transition-all duration-500 group-hover:w-12" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-wm-body/40">
                        Client Review
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-wm-border transition-all duration-500 group-hover:border-wm-primary group-hover:bg-wm-primary">
                      <ArrowUpRight className="h-3.5 w-3.5 text-wm-body/40 transition-colors group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM TRUST BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col items-center justify-between gap-3 rounded-2xl border border-wm-border bg-white/70 px-5 py-4 shadow-sm backdrop-blur-md sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-wm-surface-blue">
              <Quote className="h-3.5 w-3.5 text-wm-primary" />
            </div>

            <p className="text-xs font-semibold text-wm-heading">
              Every project is built around quality, detail and client
              requirements.
            </p>
          </div>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-3.5 w-3.5 fill-wm-warning text-wm-warning"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}