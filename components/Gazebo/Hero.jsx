"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  PhoneCall,
  Sparkles,
} from "lucide-react";

const PHONE = "9649957698";

const features = [
  "Custom Modern Designs",
  "Premium Powder Coating",
  "Waterproof Roofing",
  "Expert Installation",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcfa] pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      {/* =====================================================
          PREMIUM LIGHT BACKGROUND
          ===================================================== */}

      {/* Soft Green Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[320px] w-[320px] rounded-full bg-[#dceee3]/70 blur-[110px] sm:h-[430px] sm:w-[430px] md:h-[520px] md:w-[520px]" />

      {/* Warm Sand Glow */}
      <div className="pointer-events-none absolute top-[18%] -right-32 h-[320px] w-[320px] rounded-full bg-[#f0e6d7]/60 blur-[110px] sm:h-[430px] sm:w-[430px] md:h-[520px] md:w-[520px]" />

      {/* Bottom Green Glow */}
      <div className="pointer-events-none absolute -bottom-40 left-[28%] h-[360px] w-[360px] rounded-full bg-[#e4f1e8]/60 blur-[120px] sm:h-[450px] sm:w-[450px]" />

      {/* =====================================================
          ARCHITECTURAL GRID
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.45]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(47,107,79,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(47,107,79,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          SOFT TOP LIGHT
          ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[240px] bg-gradient-to-b from-white/90 via-white/40 to-transparent" />

      {/* =====================================================
          BACKGROUND WATERMARK
          ===================================================== */}

      <div className="pointer-events-none absolute top-4 left-0 flex w-full justify-center overflow-hidden sm:top-8">
        <h1 className="whitespace-nowrap text-[58px] font-extrabold tracking-[0.18em] text-wm-primary/[0.035] sm:text-[95px] md:text-[140px] lg:text-[185px]">
          LUXURY
        </h1>
      </div>

      {/* =====================================================
          CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-2 rounded-full border border-wm-border-green bg-wm-surface-green px-4 py-2 shadow-wm-sm sm:px-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wm-primary opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-wm-primary" />
              </span>

              <p className="text-[10px] font-bold uppercase tracking-[2px] text-wm-primary-dark sm:text-xs sm:tracking-[3px]">
                Premium Gazebo Solutions
              </p>
            </div>

            {/* HEADING */}
            <h2 className="mt-6 max-w-3xl text-[42px] font-bold leading-[1.04] tracking-[-0.04em] text-wm-heading sm:mt-8 sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px]">
              Create Your

              <span className="block bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-primary-light bg-clip-text pb-1 text-transparent">
                Dream Outdoor
              </span>

              Living Space
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-wm-body sm:mt-8 sm:text-lg sm:leading-9 md:text-xl">
              Premium gazebo, pergola & canopy structures crafted
              for villas, rooftops, penthouses & luxury residential
              spaces with elegant architectural finishing.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:mt-10 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wm-surface-green transition-colors duration-300 group-hover:bg-wm-primary">
                    <CheckCircle className="h-4 w-4 text-wm-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <p className="text-sm font-medium text-wm-text sm:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:gap-5">
              {/* CALL BUTTON */}
              <a
                href={`tel:${PHONE}`}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-primary-light px-7 py-4 text-base font-semibold text-white shadow-wm-md transition-all duration-300 hover:-translate-y-1 hover:shadow-wm-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wm-primary/20 sm:px-8 sm:text-lg"
              >
                <PhoneCall className="h-5 w-5" />

                Call Now

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/919649957698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-wm-border bg-white px-7 py-4 text-base font-semibold text-wm-heading shadow-wm-sm transition-all duration-300 hover:-translate-y-1 hover:border-wm-whatsapp hover:bg-wm-surface-green hover:text-wm-whatsapp hover:shadow-wm-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wm-whatsapp/20 sm:px-8 sm:text-lg"
              >
                WhatsApp Now
              </a>
            </div>

      
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative order-1 lg:order-2"
          >
            {/* DECORATIVE BACK FRAME */}
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-[30px] border border-wm-border-green bg-wm-surface-green sm:-right-5 sm:-bottom-5 sm:rounded-[36px]" />

            {/* IMAGE FRAME */}
            <div className="relative rounded-[28px] border border-wm-border bg-white p-2 shadow-wm-xl sm:rounded-[36px] sm:p-3">
              <div className="relative overflow-hidden rounded-[22px] sm:rounded-[29px]">
                <img
                  src="/gazebo/gazebo_hero.webp"
                  alt="Premium custom gazebo outdoor living structure by Welldone Metalworks"
                  className="h-[330px] w-full object-cover transition-transform duration-1000 hover:scale-[1.04] sm:h-[470px] md:h-[560px] lg:h-[610px] xl:h-[650px]"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-wm-navy-dark/70 via-transparent to-transparent" />

                {/* IMAGE TOP BADGE */}
                <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-wm-navy-dark/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:top-7 sm:left-7">
                  <Sparkles className="h-3.5 w-3.5 text-wm-primary-light" />
                  Premium Outdoor Design
                </div>

                {/* IMAGE BOTTOM INFO */}
                <div className="absolute right-5 bottom-5 left-5 sm:right-7 sm:bottom-7 sm:left-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[2px] text-wm-primary-light">
                        Welldone Metalworks
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                        Luxury Outdoor Living
                      </h3>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md sm:flex">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING PREMIUM CARD
                ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -bottom-6 left-4 rounded-2xl border border-wm-border bg-white/95 px-5 py-4 shadow-wm-xl backdrop-blur-xl sm:-bottom-7 sm:left-8 sm:rounded-3xl sm:px-7 sm:py-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wm-surface-green sm:h-12 sm:w-12">
                  <Sparkles className="h-5 w-5 text-wm-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-wm-heading sm:text-2xl">
                    Luxury
                  </h3>

                  <p className="mt-0.5 text-xs text-wm-body sm:text-sm">
                    Outdoor Living Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* LOCATION BADGE */}
            <div className="absolute -top-4 right-4 hidden items-center gap-2 rounded-2xl border border-wm-border bg-white/95 px-4 py-3 shadow-wm-md backdrop-blur-xl sm:flex lg:right-2">
              <MapPin className="h-4 w-4 text-wm-primary" />

              <span className="text-xs font-semibold text-wm-heading">
                Ahmedabad & Gandhinagar
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}