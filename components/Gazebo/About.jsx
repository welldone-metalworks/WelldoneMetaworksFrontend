"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, ShieldCheck } from "lucide-react";

export default function About() {
  const features = [
    "Premium Modern Designs",
    "Heavy Duty Metal Structures",
    "Waterproof Roofing Solutions",
    "Professional Installation Team",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#cd2b14]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#981d13]/10 blur-[120px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-6 md:top-10 left-0 w-full flex justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[170px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          WELLDONE
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* IMAGE BORDER */}
            <div className="p-[2px] rounded-[28px] bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">

              <div className="bg-white rounded-[26px] overflow-hidden shadow-2xl">

                <img
                  src="/gazebo/gazebo_about.webp"
                  alt="Welldone Metalworks"
                  className="w-full h-[320px] sm:h-[450px] md:h-[550px] object-cover"
                />

              </div>

            </div>

            {/* EXPERIENCE CARD */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-5 sm:left-8 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl shadow-2xl px-5 sm:px-7 py-4 sm:py-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center">

                  <Award className="w-6 h-6 text-white" />

                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                    15+
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base">
                    Years Experience
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* LABEL */}
            <div className="inline-flex items-center gap-2 bg-[#cd2b14]/10 border border-[#cd2b14]/20 px-5 py-2 rounded-full">

              <ShieldCheck className="w-4 h-4 text-[#cd2b14]" />

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#cd2b14]">
                About Welldone Metalworks
              </p>

            </div>

            {/* HEADING */}
            <h2 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#111827]">

              Crafted For

              <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                Premium Outdoor
              </span>

              Living Spaces

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 leading-8 sm:leading-9">
              At Welldone Metalworks, we specialize in luxury gazebo,
              pergola & canopy structures designed for villas,
              rooftops, farmhouses & premium residential spaces.
              Our focus is on delivering elegant architectural
              designs with durable metal craftsmanship.
            </p>

            {/* FEATURES */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle className="w-5 h-5 text-[#cd2b14] flex-shrink-0" />

                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* STATS */}
            <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-5 sm:gap-8">

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  150+
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
                  Projects Completed
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  15+
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
                  Years Experience
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  100%
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
                  Custom Solutions
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}