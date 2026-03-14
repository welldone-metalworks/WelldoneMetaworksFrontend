"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CompanyIntro() {
  const features = [
    "High Quality Materials",
    "Expert Metal Fabrication",
    "Custom Architectural Designs",
    "Reliable Project Delivery",
  ];

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28 bg-white overflow-hidden">

      {/* Gradient Glow */}
      <div className="absolute -top-32 -left-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#cd2b14]/20 blur-[120px] md:blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#981d13]/20 blur-[120px] md:blur-[140px] rounded-full"></div>

      {/* Background Typography */}
      <div className="absolute top-6 md:top-10 left-0 w-full text-center pointer-events-none">
        <h1 className="text-[70px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest">
          METAL
        </h1>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Gradient Frame */}
          <div className="p-[2px] rounded-3xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/HomeImg/Sports.webp"
                alt="Metal Fabrication"
                width={700}
                height={500}
                className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
              />
            </div>

          </div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              absolute 
              -bottom-6 right-4
              sm:-bottom-8 sm:right-6
              md:-bottom-10 md:-right-10
              backdrop-blur-xl
              bg-white/80
              border border-gray-200
              shadow-2xl
              rounded-2xl
              px-5 py-4
              sm:px-6 sm:py-5
            "
          >
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              15+
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              Years Experience
            </p>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Label */}
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#cd2b14]">
            About Welldone Metalworks
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
            Engineering Durable
            <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              Metal Structures
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
            At Welldone Metalworks, we specialize in delivering high-quality
            metal fabrication solutions designed for durability, strength,
            and aesthetic excellence. Our expert craftsmen combine modern
            tools with traditional expertise to create structures that
            stand the test of time.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-md hover:shadow-xl transition"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white">
                  <CheckCircle size={16} />
                </div>

                <span className="text-gray-700 text-sm sm:text-base font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="
                text-center
                bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]
                text-white px-7 py-3
                rounded-full
                font-semibold
                shadow-lg
                hover:shadow-xl
                transition
              "
            >
              Get Free Quote
            </motion.a>

            <a
              href="#services"
              className="
                text-center
                border border-gray-300
                px-7 py-3
                rounded-full
                font-semibold
                hover:border-[#cd2b14]
                hover:text-[#cd2b14]
                transition
              "
            >
              View Services
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}