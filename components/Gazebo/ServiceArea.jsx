"use client";

import { motion } from "framer-motion";
import {
  MapPinned,
  Navigation,
  ArrowUpRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

const primaryAreas = [
  "Ahmedabad",
  "Gandhinagar",
];

const nearbyAreas = [
  "Bopal",
  "South Bopal",
  "Bodakdev",
  "Thaltej",
  "Satellite",
  "Prahladnagar",
  "SG Highway",
  "Vastrapur",
  "Gota",
  "Chandkheda",
  "Shilaj",
  "Shela",
  "Navrangpura",
  "Maninagar",
];

export default function ServiceArea() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081c2b] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      {/* Primary glow */}
      <div className="pointer-events-none absolute -left-48 top-[-120px] h-[600px] w-[600px] rounded-full bg-wm-primary/15 blur-[160px]" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute -right-48 bottom-[-160px] h-[600px] w-[600px] rounded-full bg-wm-primary-light/10 blur-[160px]" />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wm-primary/[0.045] blur-[140px]" />

      {/* =========================================================
          TECHNICAL GRID
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* =========================================================
          LARGE BACKGROUND TEXT
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-3 w-full -translate-x-1/2 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <span className="block whitespace-nowrap text-[80px] font-black leading-none tracking-[0.14em] text-white/[0.035] sm:text-[125px] md:text-[175px] lg:text-[205px]">
            AHMEDABAD
          </span>
        </div>
      </div>

      {/* =========================================================
          DECORATIVE RADAR / MAP CIRCLES
      ========================================================= */}

      <div className="pointer-events-none absolute right-[4%] top-[8%] hidden h-[440px] w-[440px] rounded-full border border-wm-primary-light/[0.08] lg:block" />

      <div className="pointer-events-none absolute right-[8%] top-[13%] hidden h-[340px] w-[340px] rounded-full border border-wm-primary-light/[0.07] lg:block" />

      <div className="pointer-events-none absolute right-[13%] top-[19%] hidden h-[240px] w-[240px] rounded-full border border-wm-primary-light/[0.06] lg:block" />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 backdrop-blur-xl">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-wm-primary/20">
              <MapPinned className="h-3.5 w-3.5 text-wm-primary-light" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary-light sm:text-xs">
              Service Coverage
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 max-w-2xl text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
            Outdoor Structures,
            <span className="block bg-gradient-to-r from-white via-wm-primary-light to-wm-primary bg-clip-text text-transparent">
              Across Ahmedabad.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            Welldone Metalworks provides custom MS gazebo, canopy and outdoor
            structure fabrication across Ahmedabad, Gandhinagar and nearby
            areas.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="mt-12 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">

          {/* =====================================================
              LEFT — LOCATION FEATURE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-white/[0.045] p-6 backdrop-blur-xl sm:p-7"
          >
            {/* Inner glow */}
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-wm-primary/15 blur-[90px]" />

            {/* Location icon */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-wm-primary/20 bg-wm-primary/10">
              <MapPinned className="h-6 w-6 text-wm-primary-light" />
            </div>

            {/* Main location */}
            <div className="relative mt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary-light">
                Primary Service Area
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ahmedabad
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Custom outdoor fabrication and installation for residential,
                commercial and premium outdoor spaces.
              </p>
            </div>

            {/* Coverage */}
            <div className="relative mt-7 space-y-3">
              {primaryAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-wm-primary-light" />

                  <span className="text-sm font-semibold text-white/80">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom information */}
            <div className="relative mt-7 border-t border-white/[0.08] pt-5">
              <div className="flex items-center gap-3">
                <Navigation className="h-4 w-4 text-wm-primary-light" />

                <span className="text-xs text-white/45">
                  On-site consultation & installation available
                </span>
              </div>
            </div>

            {/* Decorative number */}
            <span className="pointer-events-none absolute bottom-[-20px] right-[-5px] text-[120px] font-black leading-none text-white/[0.025]">
              A
            </span>
          </motion.div>

          {/* =====================================================
              RIGHT — AREA GRID
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
          >
            {/* Top heading */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wm-primary-light">
                  Nearby Coverage
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Areas We Serve
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-wm-primary-light shadow-[0_0_12px_rgba(70,169,216,0.8)]" />

                <span className="text-xs font-medium text-white/45">
                  Ahmedabad Region
                </span>
              </div>
            </div>

            {/* Area grid */}
            <div className="relative mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {nearbyAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.035,
                  }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 transition-all duration-300 hover:border-wm-primary/30 hover:bg-wm-primary/[0.08]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06] transition-colors group-hover:bg-wm-primary/20">
                    <MapPinned className="h-3 w-3 text-wm-primary-light/70 group-hover:text-wm-primary-light" />
                  </span>

                  <span className="truncate text-xs font-medium text-white/55 transition-colors group-hover:text-white/90 sm:text-sm">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom message */}
            <div className="relative mt-7 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Looking for fabrication outside these areas?
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Contact us to discuss your project location.
                </p>
              </div>

              <a
                href="/enquiry"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-wm-primary px-5 py-3 text-xs font-bold text-white shadow-[0_8px_25px_rgba(22,135,197,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-wm-primary-light"
              >
                Discuss Project

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM COVERAGE STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 backdrop-blur-xl sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <Building2 className="h-4 w-4 text-wm-primary-light" />

            <span className="text-xs font-medium text-white/55">
              Residential • Commercial • Outdoor Projects
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-wm-primary-light" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              Ahmedabad & Gandhinagar
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}