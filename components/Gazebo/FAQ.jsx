"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you provide custom gazebo designs?",
    a: "Yes, we provide fully customized gazebo, pergola & canopy solutions according to your outdoor space and design preferences.",
  },
  {
    q: "What materials do you use?",
    a: "We use premium MS, GI, powder-coated metal structures and weather-resistant roofing materials for long-lasting durability.",
  },
  {
    q: "Do you provide rooftop gazebo solutions?",
    a: "Yes, we specialize in rooftop gazebo and pergola structures for villas, penthouses & premium residential properties.",
  },
  {
    q: "Is the structure weather resistant?",
    a: "Absolutely. Our structures are designed to withstand rain, sunlight & outdoor environmental conditions with premium finishing.",
  },
  {
    q: "Can I customize the design and color?",
    a: "Yes, we offer complete customization including structure design, roofing style, color combinations & finishing options.",
  },
  {
    q: "How much time does installation take?",
    a: "Project timelines depend on design complexity, but most installations are completed within a few days after fabrication.",
  },
  {
    q: "Do you provide site visits?",
    a: "Yes, our team provides professional site visits and consultations before starting the project.",
  },
  {
    q: "Which areas do you serve?",
    a: "Welldone Metalworks provides premium gazebo, pergola & canopy solutions across residential and commercial locations.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[130px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          FAQ
        </h1>

      </div>

      {/* CONTAINER */}
      <div className="relative max-w-[950px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          {/* LABEL */}
          <div className="inline-flex items-center gap-2 bg-[#cd2b14]/10 border border-[#cd2b14]/20 px-5 py-2 rounded-full">

            <span className="w-2 h-2 rounded-full bg-[#cd2b14]" />

            <p className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold text-[#cd2b14]">
              Frequently Asked Questions
            </p>

          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#111827]">

            Everything You Need

            <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              To Know Before Starting
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
            Get answers to common questions about our
            premium gazebo, pergola & canopy solutions,
            materials, customization & installation process.
          </p>

        </motion.div>

        {/* FAQ LIST */}
        <div className="mt-14 space-y-5">

          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[28px] bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-5 text-left p-6 sm:p-7"
                >

                  <h3 className="text-lg sm:text-xl font-semibold text-[#111827] leading-8">
                    {item.q}
                  </h3>

                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center shadow-lg">

                    {isOpen ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}

                  </div>

                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-6 sm:px-7 pb-7">

                      <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]" />

                      <p className="mt-5 text-gray-600 leading-8 text-sm sm:text-base">
                        {item.a}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}