"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Luxury Gazebo",
    description:
      "Elegant outdoor gazebo structures designed for villas, rooftops & premium residential spaces.",
    image: "/gazebo/gazebo_service.webp",
  },
  {
    title: "Modern Pergola",
    description:
      "Architectural pergola solutions crafted with modern styling and durable metal fabrication.",
    image: "/gazebo/pergola_service.webp",
  },
  {
    title: "Premium Canopy",
    description:
      "Stylish canopy structures with weather-resistant roofing & luxury finishing.",
    image: "/gazebo/canopy_service.webp",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#fcfbf8] py-10 sm:py-12 md:py-14 lg:py-16">
      {/* =====================================================
          PREMIUM LIGHT BACKGROUND
          ===================================================== */}

      {/* Soft White Light */}
      <div className="pointer-events-none absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-white/90 blur-[120px] sm:h-[520px] sm:w-[520px]" />

      {/* Champagne / Sand Glow */}
      <div className="pointer-events-none absolute top-[15%] -right-32 h-[380px] w-[380px] rounded-full bg-[#eee5d7]/55 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      {/* Bottom Soft Light */}
      <div className="pointer-events-none absolute -bottom-40 left-[38%] h-[420px] w-[420px] rounded-full bg-[#f3eee6]/70 blur-[130px]" />

      {/* =====================================================
          VERY SUBTLE ARCHITECTURAL GRID
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(23,59,42,0.022) 1px, transparent 1px),
              linear-gradient(90deg, rgba(23,59,42,0.022) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* =====================================================
          SOFT TOP LIGHT
          ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[260px] bg-gradient-to-b from-white via-white/60 to-transparent" />

      {/* =====================================================
          SOFT EDGE SHADOW
          ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[#f5f1e9]/40 to-transparent" />

      {/* =====================================================
          BACKGROUND WATERMARK
          ===================================================== */}

      <div className="pointer-events-none absolute top-6 left-0 flex w-full justify-center overflow-hidden sm:top-8">
        <h1 className="whitespace-nowrap text-[60px] font-extrabold tracking-[0.18em] text-wm-heading/[0.035] sm:text-[90px] md:text-[140px] lg:text-[180px]">
          SERVICES
        </h1>
      </div>

      {/* =====================================================
          CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =================================================
            TOP CONTENT
            ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* PREMIUM LABEL */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5c8] bg-white/80 px-5 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-wm-accent" />

            <p className="text-xs font-semibold uppercase tracking-[3px] text-wm-heading sm:text-sm">
              Our Premium Services
            </p>
          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-wm-heading sm:text-5xl md:text-6xl">
            Modern Outdoor

            <span className="block bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-accent bg-clip-text text-transparent">
              Living Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-wm-body sm:text-lg md:text-xl">
            Welldone Metalworks delivers premium gazebo,
            pergola & canopy structures crafted with modern
            architecture, elegant finishing & durable metal fabrication.
          </p>
        </motion.div>

        {/* =================================================
            SERVICES GRID
            ================================================= */}

        <div className="mt-14 grid grid-cols-1 gap-7 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-[#e2ddd5] bg-white shadow-wm-md transition-all duration-500 hover:-translate-y-3 hover:border-wm-border-green hover:shadow-wm-xl"
            >
              {/* CARD LIGHT */}
              <div className="pointer-events-none absolute -top-24 -right-24 z-20 h-52 w-52 rounded-full bg-white/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

              {/* =================================================
                  IMAGE
                  ================================================= */}

              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} by Welldone Metalworks`}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[380px]"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102b20] via-[#102b20]/15 to-transparent" />

                {/* HOVER LIGHT */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#eadcc8]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* NUMBER */}
                <div className="absolute top-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#102b20]/70 shadow-lg backdrop-blur-md">
                  <span className="text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                </div>

                {/* PREMIUM BADGE */}
                <div className="absolute top-5 right-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-[10px] font-semibold uppercase tracking-[2px] text-white">
                    Premium
                  </span>
                </div>
              </div>

              {/* =================================================
                  CONTENT
                  ================================================= */}

              <div className="relative z-20 bg-white p-6 sm:p-7">
                {/* TITLE */}
                <h3 className="text-2xl font-bold leading-tight text-wm-heading sm:text-3xl">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-7 text-wm-body sm:text-base">
                  {item.description}
                </p>

                {/* BUTTON */}
                <button
                  type="button"
                  className="group/button mt-6 inline-flex items-center gap-3 font-medium text-wm-heading transition-colors duration-300 hover:text-wm-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wm-primary focus-visible:ring-offset-2"
                >
                  Explore Design

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-wm-border bg-wm-surface-soft transition-all duration-300 group-hover/button:border-wm-primary group-hover/button:bg-wm-primary group-hover/button:text-white">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </span>
                </button>

                {/* BOTTOM ACCENT */}
                <div className="mt-7 h-[2px] w-12 rounded-full bg-gradient-to-r from-wm-primary-dark via-wm-primary to-wm-accent transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}