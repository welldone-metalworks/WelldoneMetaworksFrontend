"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function Lifestyle() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[130px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          LIFESTYLE
        </h1>

      </div>

      {/* CONTAINER */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* LABEL */}
            <div className="inline-flex items-center gap-2 bg-[#cd2b14]/10 border border-[#cd2b14]/20 px-5 py-2 rounded-full">

              <Sparkles className="w-4 h-4 text-[#cd2b14]" />

              <p className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold text-[#cd2b14]">
                Luxury Outdoor Lifestyle
              </p>

            </div>

            {/* HEADING */}
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#111827]">

              More Than A Structure

              <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                It’s A Lifestyle Experience
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-600 leading-8 sm:leading-9">
              Create elegant outdoor environments designed
              for relaxation, family gatherings & luxury
              living. Our premium gazebo, pergola &
              canopy solutions transform ordinary spaces
              into stunning lifestyle destinations.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">

                <CheckCircle2 className="w-5 h-5 text-[#cd2b14] mt-1" />

                <p className="text-gray-700 font-medium">
                  Premium outdoor spaces crafted for modern living
                </p>

              </div>

              <div className="flex items-start gap-4">

                <CheckCircle2 className="w-5 h-5 text-[#cd2b14] mt-1" />

                <p className="text-gray-700 font-medium">
                  Elegant architectural designs with luxury finishing
                </p>

              </div>

              <div className="flex items-start gap-4">

                <CheckCircle2 className="w-5 h-5 text-[#cd2b14] mt-1" />

                <p className="text-gray-700 font-medium">
                  Perfect for villas, rooftops & premium residences
                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <a
                href="tel:9649957698"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919649957698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-gray-300 bg-white hover:border-[#25D366] hover:text-[#25D366] text-[#111827] px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-sm transition-all duration-300"
              >
                WhatsApp Now
              </a>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 gap-5">

              {/* LARGE IMAGE */}
              <div className="col-span-2 overflow-hidden rounded-[30px] shadow-2xl">

                <img
                  src="/gazebo/gazebo_luxury.webp"
                  alt="Luxury Outdoor"
                  className="w-full h-[260px] sm:h-[350px] object-cover hover:scale-110 transition-all duration-700"
                />

              </div>

              {/* SMALL IMAGE */}
              <div className="overflow-hidden rounded-[25px] shadow-xl">

                <img
                  src="/gazebo/canopy_luxury.webp"
                  alt="Gazebo"
                  className="w-full h-[220px] sm:h-[260px] object-cover hover:scale-110 transition-all duration-700"
                />

              </div>

              {/* SMALL IMAGE */}
              <div className="overflow-hidden rounded-[25px] shadow-xl">

                <img
                  src="/gazebo/gazebo_luxury2.webp"
                  alt="Pergola"
                  className="w-full h-[220px] sm:h-[260px] object-cover hover:scale-110 transition-all duration-700"
                />

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 left-6 sm:left-10 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl px-6 py-5">

              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                Premium
              </h3>

              <p className="mt-2 text-gray-600">
                Outdoor Living Experience
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}