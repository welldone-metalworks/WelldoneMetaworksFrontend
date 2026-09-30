"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Home,
  Hotel,
  Store,
  Warehouse,
} from "lucide-react";

const applications = [
  {
    number: "01",
    title: "Residential",
    word: "HOME",
    description:
      "Custom metal staircases for homes, villas, duplexes, terraces and private architectural spaces.",
    icon: Home,
  },
  {
    number: "02",
    title: "Commercial",
    word: "BUILD",
    description:
      "Practical and architectural staircase solutions for commercial buildings and properties.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Offices",
    word: "WORK",
    description:
      "Modern staircase structures designed to integrate naturally into office environments.",
    icon: Store,
  },
  {
    number: "04",
    title: "Restaurants & Hotels",
    word: "HOSPITALITY",
    description:
      "Statement staircase solutions for restaurants, hotels and hospitality environments.",
    icon: Hotel,
  },
  {
    number: "05",
    title: "Factories",
    word: "INDUSTRY",
    description:
      "Heavy-duty metal staircase structures for industrial access and operational areas.",
    icon: Factory,
  },
  {
    number: "06",
    title: "Warehouses",
    word: "ACCESS",
    description:
      "Durable staircase solutions for warehouses, storage facilities and service areas.",
    icon: Warehouse,
  },
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative overflow-hidden bg-[#f8fcfe] py-10 sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

   
      {/* Soft architectural glow */}
      <div className="pointer-events-none absolute -right-60 -top-60 h-[650px] w-[650px] rounded-full bg-[#1687c5]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -left-60 bottom-[-300px] h-[650px] w-[650px] rounded-full bg-[#46a9d8]/[0.05] blur-3xl" />

      {/* Architectural rings */}
      <div className="pointer-events-none absolute -right-[250px] top-[100px] h-[600px] w-[600px] rounded-full border-[70px] border-[#eff9fe]" />

      <div className="pointer-events-none absolute -right-[150px] top-[200px] h-[400px] w-[400px] rounded-full border border-[#dceff7]" />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 border-b border-[#dceff7] pb-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#1687c5]" />

              <span className="text-[10px] font-black uppercase tracking-[0.26em] text-[#1687c5]">
                Applications
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#12324a] sm:text-5xl lg:text-[58px]">
              One staircase.
              <br />
              <span className="text-[#1687c5]">
                Different environments.
              </span>
            </h2>
          </div>

          <div className="max-w-[400px] lg:text-right">
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              Staircase fabrication adapted to residential, commercial,
              hospitality and industrial spaces.
            </p>

            <div className="mt-4 flex items-center gap-3 lg:justify-end">
              <span className="text-3xl font-black tracking-[-0.04em] text-[#12324a]">
                06
              </span>

              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                Application Types
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            APPLICATION LIST
        ======================================================= */}

        <div className="mt-7 overflow-hidden rounded-[26px] border border-[#dceff7] bg-white shadow-[0_10px_40px_rgba(18,50,74,.045)]">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group relative border-b border-[#edf4f7] last:border-b-0"
              >
                {/* =================================================
                    ROW
                ================================================= */}

                <div className="relative grid min-h-[118px] items-center gap-5 px-5 py-5 sm:grid-cols-[65px_52px_1fr_auto] sm:gap-6 sm:px-7 sm:py-5 lg:px-8">
                  {/* Number */}
                  <div className="hidden sm:block">
                    <span className="text-[11px] font-black tracking-[0.18em] text-slate-300 transition-colors duration-300 group-hover:text-[#1687c5]">
                      {item.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dceff7] bg-[#f8fcfe] text-[#1687c5] transition-all duration-300 group-hover:border-[#1687c5] group-hover:bg-[#1687c5] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="relative min-w-0">
                    {/* Large faded word */}
                    <span className="pointer-events-none absolute -top-5 left-0 whitespace-nowrap text-[40px] font-black leading-none tracking-[-0.04em] text-[#12324a]/[0.035] transition-all duration-500 group-hover:text-[#1687c5]/[0.065] sm:text-[50px]">
                      {item.word}
                    </span>

                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1687c5] sm:hidden">
                          {item.number}
                        </span>

                        <h3 className="text-xl font-black tracking-[-0.02em] text-[#12324a] sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-[700px] text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="hidden items-center gap-5 sm:flex">
                    <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-300 transition-colors group-hover:text-[#1687c5]">
                      Explore
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dceff7] bg-[#f8fcfe] text-slate-400 transition-all duration-300 group-hover:border-[#1687c5] group-hover:bg-[#1687c5] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#1687c5] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-6 flex flex-col justify-between gap-4 rounded-[20px] border border-[#dceff7] bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:px-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eaf7fd] text-[#1687c5]">
              <Building2 className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-bold text-[#12324a]">
                Have a different staircase application?
              </p>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Let's discuss a custom metal staircase solution.
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#1687c5] transition-colors hover:text-[#0b6fa8]"
          >
            Discuss Your Project

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}