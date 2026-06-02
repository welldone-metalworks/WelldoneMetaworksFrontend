"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-14 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] bg-[#cd2b14]/10 blur-[100px] md:blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] bg-[#981d13]/10 blur-[100px] md:blur-[140px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-6 md:top-10 left-0 w-full flex justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[55px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          LUXURY
        </h1>
      </div>

      {/* CONTAINER */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            {/* LABEL */}
            <div className="inline-flex items-center gap-2 bg-[#cd2b14]/10 border border-[#cd2b14]/20 px-4 sm:px-5 py-2 rounded-full">

              <span className="w-2 h-2 rounded-full bg-[#cd2b14]" />

              <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-[#cd2b14]">
                Premium Gazebo Solutions
              </p>

            </div>

            {/* HEADING */}
            <h2 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#111827]">

              Create Your

              <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                Dream Outdoor
              </span>

              Living Space

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 leading-8 sm:leading-9 max-w-2xl">
              Premium gazebo, pergola & canopy structures crafted
              for villas, rooftops, penthouses & luxury residential
              spaces with elegant architectural finishing.
            </p>

            {/* FEATURES */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#cd2b14] flex-shrink-0" />

                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  Custom Modern Designs
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#cd2b14] flex-shrink-0" />

                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  Premium Powder Coating
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#cd2b14] flex-shrink-0" />

                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  Waterproof Roofing
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#cd2b14] flex-shrink-0" />

                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  Expert Installation
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">

              {/* CALL BUTTON */}
              <a
                href="tel:9649957698"
                className="group bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3"
              >

                Call Now

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />

              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/919649957698"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 text-[#111827] px-6 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-sm flex items-center justify-center"
              >
                WhatsApp Now
              </a>

            </div>

            {/* STATS */}
            <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-5 sm:gap-8">

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  150+
                </h3>

                <p className="mt-2 text-gray-500 text-xs sm:text-sm md:text-base">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  15+
                </h3>

                <p className="mt-2 text-gray-500 text-xs sm:text-sm md:text-base">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  100%
                </h3>

                <p className="mt-2 text-gray-500 text-xs sm:text-sm md:text-base">
                  Custom Solutions
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >

            {/* IMAGE FRAME */}
            <div className="p-[2px] rounded-[24px] sm:rounded-[30px] bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">

              <div className="bg-white rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-2xl">

                <img
                  src="/gazebo/gazebo_hero.webp"
                  alt="Gazebo"
                  className="w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover"
                />

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-5 sm:-bottom-8 left-4 sm:left-8 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl shadow-2xl px-5 sm:px-8 py-4 sm:py-6">

              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                Luxury
              </h3>

              <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">
                Outdoor Living Experience
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}