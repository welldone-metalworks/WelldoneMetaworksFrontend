"use client";

import { motion } from "framer-motion";
import {
  MapPinned,
  PencilRuler,
  Box,
  Hammer,
  Wrench,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Site Visit",
    description:
      "Understanding your outdoor space, measurements & project requirements.",
    icon: MapPinned,
  },
  {
    title: "Design Consultation",
    description:
      "Modern design planning tailored to your villa or rooftop aesthetics.",
    icon: PencilRuler,
  },
  {
    title: "3D Planning",
    description:
      "Professional 3D visualization before fabrication execution starts.",
    icon: Box,
  },
  {
    title: "Fabrication",
    description:
      "Premium metal fabrication using durable & high-quality materials.",
    icon: Hammer,
  },
  {
    title: "Installation",
    description:
      "Expert installation process with precision finishing & detailing.",
    icon: Wrench,
  },
  {
    title: "Final Finishing",
    description:
      "Luxury finishing inspection for a premium outdoor living experience.",
    icon: Sparkles,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[140px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-white/[0.03] tracking-widest whitespace-nowrap">
          PROCESS
        </h1>

      </div>

      {/* CONTAINER */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* LABEL */}
          <div className="inline-flex items-center gap-2 border border-[#cd2b14]/20 bg-[#cd2b14]/10 px-5 py-2 rounded-full">

            <span className="w-2 h-2 rounded-full bg-[#cd2b14]" />

            <p className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold text-[#cd2b14]">
              Our Working Process
            </p>

          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-white">

            From Concept To

            <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              Luxury Installation
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-8 max-w-3xl mx-auto">
            Our streamlined process ensures premium quality,
            modern design execution & a smooth installation
            experience for every outdoor structure project.
          </p>

        </motion.div>

        {/* PROCESS GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 sm:p-8 hover:border-[#cd2b14]/40 transition-all duration-500"
              >

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#981d13]/10 via-[#b72d2c]/5 to-[#cd2b14]/10 transition-all duration-500" />

                {/* STEP NUMBER */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-white/[0.05]">
                  0{index + 1}
                </div>

                {/* ICON */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center shadow-xl">

                  <Icon className="w-8 h-8 text-white" />

                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-7 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-4 text-gray-400 leading-7 text-sm sm:text-base">
                  {step.description}
                </p>

                {/* BOTTOM LINE */}
                <div className="relative z-10 mt-8 w-14 h-[3px] rounded-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}