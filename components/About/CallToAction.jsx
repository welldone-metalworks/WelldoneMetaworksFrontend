"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="w-full py-24 bg-[#f9fafb]">
      <div className="max-w-[1280px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            grid
            lg:grid-cols-2
            rounded-3xl
            overflow-hidden
            shadow-2xl
            bg-white
          "
        >

          {/* LEFT CONTENT */}
          <div className="p-10 md:p-14 flex flex-col justify-center">

            <h2 className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-[#111827]
              leading-tight
            ">
              Modern
              <span className="
                block
                bg-gradient-to-r
                from-[#981d13]
                via-[#b72d2c]
                to-[#cd2b14]
                bg-clip-text
                text-transparent
              ">
                Metal Interiors
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-[520px]">
              Welldone Metalworks creates custom metal decor,
              wall shelves, railings, gates and architectural
              metal elements that elevate modern homes and spaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="
                  px-8
                  py-3
                  rounded-full
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-[#981d13]
                  via-[#b72d2c]
                  to-[#cd2b14]
                  shadow-lg
                  hover:shadow-xl
                  transition
                "
              >
                Start Your Project
              </Link>

              <Link
                href="/services"
                className="
                  px-8
                  py-3
                  rounded-full
                  font-semibold
                  border
                  border-gray-300
                  text-gray-700
                  hover:border-[#cd2b14]
                  hover:text-[#cd2b14]
                  transition
                "
              >
                Explore Services
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[360px] md:h-[460px] lg:h-full">

            <Image
              src="/HomeImg/AboutCallAction.webp"
              alt="Metal wall shelves"
              fill
              className="object-cover object-center"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* floating badge */}
            <div className="
              absolute
              bottom-6
              right-6
              bg-white
              px-6
              py-4
              rounded-xl
              shadow-xl
            ">
              <p className="font-bold text-[#cd2b14] text-lg">
                Custom Metal Work
              </p>
              <p className="text-gray-500 text-sm">
                Interior & Exterior Solutions
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}