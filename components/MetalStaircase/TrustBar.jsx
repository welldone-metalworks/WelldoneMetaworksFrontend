"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Hammer,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const items = [
  {
    number: "01",
    icon: Ruler,
    label: "Custom Measurements",
    description: "Built around your space",
  },
  {
    number: "02",
    icon: Hammer,
    label: "Precision Fabrication",
    description: "Accurate metal workmanship",
  },
  {
    number: "03",
    icon: ShieldCheck,
    label: "Strong Construction",
    description: "Designed for durability",
  },
  {
    number: "04",
    icon: Wrench,
    label: "Professional Installation",
    description: "Complete site support",
  },
  {
    number: "05",
    icon: BadgeCheck,
    label: "Project-Focused Service",
    description: "From design to completion",
  },
];

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden border-b border-[#dceff7] bg-[#f8fcfe]"
    >
      {/* =========================================================
          SUBTLE BLUEPRINT BACKGROUND
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#1687c5 1px, transparent 1px), linear-gradient(90deg, #1687c5 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-[#1687c5]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className={`
                  group relative flex min-h-[104px] items-center gap-3
                  px-4 py-4
                  transition-all duration-300
                  hover:bg-white
                  sm:px-5
                  lg:px-6
                  ${
                    index !== 0
                      ? "border-l border-[#dceff7]"
                      : ""
                  }
                  ${
                    index >= 2
                      ? "border-t border-[#dceff7] md:border-t-0"
                      : ""
                  }
                `}
              >
                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#1687c5] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Number */}
                <div className="absolute right-3 top-2 hidden text-[10px] font-black tracking-[0.15em] text-[#12324a]/10 sm:block">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dceff7] bg-white text-[#1687c5] shadow-sm transition-all duration-300 group-hover:border-[#1687c5]/20 group-hover:bg-[#1687c5] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(22,135,197,.18)]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase leading-4 tracking-[0.06em] text-[#12324a] sm:text-xs">
                    {item.label}
                  </p>

                  <p className="mt-1 hidden text-[10px] leading-4 text-slate-400 sm:block">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}