"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const images = [
  {
    image:
      "/gazebo/gazebo_service.webp",
    title: "Luxury Gazebo",
    category: "Outdoor Living",
  },
  {
    image:
      "/gazebo/pergola_service.webp",
    title: "Modern Pergola",
    category: "Premium Architecture",
  },
  {
    image:
      "/gazebo/canopy_service.webp",
    title: "Designer Canopy",
    category: "Luxury Residential",
  },
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[130px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          PROJECTS
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
              Our Premium Gallery
            </p>

          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#111827]">

            Crafted Outdoor

            <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              Living Experiences
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
            Explore our luxury gazebo, pergola & canopy
            projects designed for villas, rooftops &
            premium outdoor residential spaces.
          </p>

        </motion.div>

        {/* GALLERY GRID */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">

          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative"
            >

              {/* CARD */}
              <div className="relative overflow-hidden rounded-[30px] bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] sm:h-[430px] object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7">

                  {/* CATEGORY */}
                  <p className="text-[#ffb199] uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
                    {item.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* BUTTON */}
                  <button className="mt-6 inline-flex items-center gap-3 text-white font-medium group-hover:text-[#ffb199] transition-all duration-300">

                    View Project

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#981d13] group-hover:via-[#b72d2c] group-hover:to-[#cd2b14] group-hover:border-transparent transition-all duration-300">

                      <ArrowUpRight className="w-5 h-5" />

                    </div>

                  </button>

                </div>

              </div>

              {/* FLOATING NUMBER */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-xl shadow-lg flex items-center justify-center">

                <span className="font-bold text-[#111827]">
                  0{index + 1}
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}