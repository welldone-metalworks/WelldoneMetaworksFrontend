"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users2, Hammer, Star } from "lucide-react";

export default function AboutHome() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Image container */}
          <div className="relative h-[320px] sm:h-[380px] md:h-[420px]">

            {/* Main Image */}
            <div className="absolute w-[85%] h-[85%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/HomeImg/AboutImg1.webp"
                fill
                alt="Metal Fabrication"
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Small Image */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/HomeImg/AboutImg.webp"
                fill
                alt="Metal Structure"
                className="object-cover"
              />
            </div>

          </div>

          {/* Experience Badge */}
          <div className="mt-6 md:absolute md:-bottom-6 md:left-10 flex justify-center md:justify-start">

            <div className="bg-white shadow-lg rounded-xl px-6 py-4 border text-center md:text-left">

              <p className="text-[#cd2b14] font-bold text-2xl md:text-3xl">
                5+
              </p>

              <p className="text-gray-600 text-xs md:text-sm">
                Years Experience
              </p>

            </div>

          </div>

        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-[#cd2b14] text-sm font-semibold uppercase tracking-widest mb-3">
            About Welldone Metalworks
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-5">

            Strong Fabrication
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">
              Built With Precision
            </span>

          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Welldone Metalworks delivers high-quality metal fabrication
            solutions for modern residential and commercial structures.
            Our skilled team builds durable gazebos, railings, steel frames,
            and polycarbonate roofing with precision craftsmanship.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">

            <div className="flex flex-col items-center text-center p-4 md:p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <Users2 size={26} className="text-[#cd2b14]" />
              <h4 className="mt-2 md:mt-3 text-sm md:text-base font-semibold text-gray-800">
                Skilled Team
              </h4>
            </div>

            <div className="flex flex-col items-center text-center p-4 md:p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <Hammer size={26} className="text-[#cd2b14]" />
              <h4 className="mt-2 md:mt-3 text-sm md:text-base font-semibold text-gray-800">
                Quality Work
              </h4>
            </div>

            <div className="flex flex-col items-center text-center p-4 md:p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition col-span-2 sm:col-span-1">
              <Star size={26} className="text-[#cd2b14]" />
              <h4 className="mt-2 md:mt-3 text-sm md:text-base font-semibold text-gray-800">
                Trusted Clients
              </h4>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}