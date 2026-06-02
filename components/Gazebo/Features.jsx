"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  PaintBucket,
  Wrench,
  BadgeCheck,
  Building2,
} from "lucide-react";

const features = [
  {
    title: "Premium Powder Coating",
    icon: PaintBucket,
    description:
      "High-quality powder coating finish for elegant appearance & long-lasting durability.",
  },
  {
    title: "Heavy Duty Structure",
    icon: Building2,
    description:
      "Strong metal fabrication engineered for stability, durability & modern outdoor spaces.",
  },
  {
    title: "Weather Resistant Design",
    icon: ShieldCheck,
    description:
      "Designed to handle heat, rain & outdoor conditions with reliable performance.",
  },
  {
    title: "Luxury Architectural Finish",
    icon: Sparkles,
    description:
      "Modern premium finishing crafted to enhance villas & luxury residential properties.",
  },
  {
    title: "Custom Design Options",
    icon: Wrench,
    description:
      "Tailor-made gazebo, pergola & canopy solutions according to your space & style.",
  },
  {
    title: "Professional Installation",
    icon: BadgeCheck,
    description:
      "Expert installation with clean finishing, precision execution & quality workmanship.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[130px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          QUALITY
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
          <div className="inline-flex items-center gap-2 bg-[#cd2b14]/10 border border-[#cd2b14]/20 px-5 py-2 rounded-full">

            <span className="w-2 h-2 rounded-full bg-[#cd2b14]" />

            <p className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold text-[#cd2b14]">
              Why Choose Welldone Metalworks
            </p>

          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#111827]">

            Crafted With

            <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              Premium Quality
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
            We combine modern design, durable fabrication &
            premium finishing to deliver elegant outdoor
            structures for luxury residential spaces.
          </p>

        </motion.div>

        {/* FEATURES GRID */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[30px] bg-white border border-gray-200 p-7 sm:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#981d13]/5 via-[#b72d2c]/5 to-[#cd2b14]/10 transition-all duration-500" />

                {/* ICON */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center shadow-lg">

                  <Icon className="w-8 h-8 text-white" />

                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-7 text-2xl font-bold text-[#111827] leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-4 text-gray-600 leading-7 text-sm sm:text-base">
                  {item.description}
                </p>

                {/* NUMBER */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
                  0{index + 1}
                </div>

                {/* BOTTOM LINE */}
                <div className="relative z-10 mt-8 w-12 h-[3px] rounded-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}