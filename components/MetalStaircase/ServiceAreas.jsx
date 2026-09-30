"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Route,
} from "lucide-react";

const primaryAreas = [
  "Bopal",
  "South Bopal",
  "Bodakdev",
  "Thaltej",
  "Satellite",
  "Prahladnagar",
];

const extendedAreas = [
  "SG Highway",
  "Vastrapur",
  "Gota",
  "Chandkheda",
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
 

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-48 top-[-180px] h-[520px] w-[520px] rounded-full border border-[#dceff7]" />

      <div className="pointer-events-none absolute -right-32 top-[-100px] h-[360px] w-[360px] rounded-full border border-[#dceff7]" />

      <div className="pointer-events-none absolute -left-40 bottom-[-260px] h-[520px] w-[520px] rounded-full bg-[#eff9fe] blur-3xl" />

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
                Service Coverage
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-[-0.035em] text-[#12324a] sm:text-4xl lg:text-5xl">
              Fabrication support across
              <span className="text-[#1687c5]">
                {" "}
                Ahmedabad & Gandhinagar.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-[#1687c5]" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#12324a]/40">
              Local Project Coverage
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN COVERAGE AREA
        ========================================================= */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_1.85fr]">
          {/* =======================================================
              PRIMARY CITIES
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] bg-[#12324a] p-7 sm:p-8 lg:p-10"
          >
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1687c5]/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#46a9d8]">
                  Primary Coverage
                </span>

                <Navigation className="h-5 w-5 text-[#46a9d8]" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-white sm:text-4xl">
                Ahmedabad
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                Staircase fabrication and installation support across
                residential, commercial and industrial project locations.
              </p>

              {/* Secondary city */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                  Secondary Coverage
                </span>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1687c5]">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>

                  <div>
                    <h4 className="text-base font-black text-white">
                      Gandhinagar
                    </h4>

                    <span className="text-[10px] text-white/35">
                      Project-based support
                    </span>
                  </div>
                </div>
              </div>

              {/* Route indicator */}
              <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                <Route className="h-4 w-4 text-[#46a9d8]" />
                Ahmedabad → Gandhinagar
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              LOCAL NETWORK
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border border-[#dceff7] bg-[#f8fcfe] p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col justify-between gap-4 border-b border-[#dceff7] pb-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1687c5]">
                  Nearby Areas
                </span>

                <h3 className="mt-2 text-2xl font-black text-[#12324a]">
                  Ahmedabad project network
                </h3>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#12324a]/30">
                {primaryAreas.length + extendedAreas.length} Areas
              </span>
            </div>

            {/* Primary local areas */}
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {primaryAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group flex items-center justify-between rounded-xl border border-[#dceff7] bg-white px-4 py-3.5 transition-all duration-300 hover:border-[#1687c5]/40 hover:shadow-[0_8px_25px_rgba(18,50,74,0.05)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf7fd]">
                      <MapPin className="h-3.5 w-3.5 text-[#1687c5]" />
                    </span>

                    <span className="text-sm font-bold text-[#12324a]">
                      {area}
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-[#12324a]/15 transition-colors group-hover:text-[#1687c5]" />
                </motion.div>
              ))}
            </div>

            {/* Extended areas */}
            <div className="mt-7 border-t border-[#dceff7] pt-6">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#12324a]/30">
                Extended Coverage
              </span>

              <div className="mt-4 flex flex-wrap gap-2">
                {extendedAreas.map((area) => (
                  <div
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-[#dceff7] bg-white px-4 py-2.5 text-xs font-bold text-[#12324a]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1687c5]" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM CTA STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 flex flex-col justify-between gap-5 rounded-2xl border border-[#dceff7] bg-white px-6 py-5 sm:flex-row sm:items-center sm:px-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7fd]">
              <MapPin className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>
              <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#1687c5]">
                Planning a project?
              </span>

              <p className="mt-1 text-sm font-bold text-[#12324a]">
                Share your project location with our team.
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#1687c5] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#0b6fa8]"
          >
            Discuss Your Project

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}