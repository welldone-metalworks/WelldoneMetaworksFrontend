"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Luxury Gazebo",
    description:
      "Elegant outdoor gazebo structures designed for villas, rooftops & premium residential spaces.",
    image:
      "/gazebo/gazebo_service.webp",
  },
  {
    title: "Modern Pergola",
    description:
      "Architectural pergola solutions crafted with modern styling and durable metal fabrication.",
    image:
      "/gazebo/pergola_service.webp",
  },
  {
    title: "Premium Canopy",
    description:
      "Stylish canopy structures with weather-resistant roofing & luxury finishing.",
    image:
      "/gazebo/canopy_service.webp",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[140px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-white/[0.03] tracking-widest whitespace-nowrap">
          SERVICES
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
              Our Premium Services
            </p>

          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-white">

            Modern Outdoor

            <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              Living Solutions
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-8 max-w-3xl mx-auto">
            Welldone Metalworks delivers premium gazebo,
            pergola & canopy structures crafted with modern
            architecture, elegant finishing & durable metal fabrication.
          </p>

        </motion.div>

        {/* SERVICES GRID */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-[30px] bg-[#181818] border border-white/5 hover:border-[#cd2b14]/30 transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7">

                {/* NUMBER */}
                <div className="mb-5">

                  <span className="text-sm text-[#cd2b14] font-semibold tracking-[3px]">
                    0{index + 1}
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-300 leading-7 text-sm sm:text-base">
                  {item.description}
                </p>

                {/* BUTTON */}
                <button className="mt-6 inline-flex items-center gap-3 text-white font-medium group-hover:text-[#cd2b14] transition-all duration-300">

                  Explore Design

                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#cd2b14] transition-all duration-300">

                    <ArrowUpRight className="w-5 h-5" />

                  </div>

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}