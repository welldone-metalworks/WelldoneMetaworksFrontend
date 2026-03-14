"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  const items = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      description:
        "Deliver precision-driven metal fabrication solutions with unmatched quality, reliability, and craftsmanship for modern architectural projects.",
    },
    {
      icon: <FaEye />,
      title: "Our Vision",
      description:
        "To become a trusted leader in metal fabrication by continuously innovating and delivering sustainable structural solutions worldwide.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#f9fafb] overflow-hidden">

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-gray-100 tracking-widest">
          METALWORKS
        </h1>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Our Mission & Vision
          </h2>

          <div className="w-20 h-[4px] bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">
            Building the future of metal fabrication with innovation,
            craftsmanship, and architectural excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="
                relative
                backdrop-blur-xl
                bg-white/80
                border border-gray-200
                rounded-3xl
                p-10
                shadow-xl
                hover:shadow-2xl
                transition
              "
            >

              {/* icon */}
              <div className="
                w-16 h-16
                flex items-center justify-center
                rounded-2xl
                text-white
                text-2xl
                mb-6
                bg-gradient-to-r
                from-[#981d13]
                via-[#b72d2c]
                to-[#cd2b14]
              ">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                {item.title}
              </h3>

              {/* text */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* decorative corner */}
              <div className="
                absolute
                top-0
                right-0
                w-20
                h-20
                bg-gradient-to-br
                from-[#981d13]/10
                to-[#cd2b14]/10
                rounded-bl-3xl
              "></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}