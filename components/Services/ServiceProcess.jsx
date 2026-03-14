"use client";

import { motion } from "framer-motion";
import { FaRegLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegLightbulb />,
    title: "Consultation",
    description:
      "We understand your requirements and provide expert advice for your metalwork project.",
  },
  {
    icon: <FaTools />,
    title: "Design & Fabrication",
    description:
      "Our team designs and fabricates precise, high-quality metal components tailored to your needs.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Delivery & Support",
    description:
      "We ensure timely delivery and provide ongoing support for maintenance and modifications.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-10 bg-[#f9fafb]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Our Process
          </h2>

          <div className="w-20 h-[4px] bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
            From consultation to final delivery, we follow a structured workflow
            to ensure precision, quality, and customer satisfaction.
          </p>

        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 text-center"
            >

              {/* Step Number */}
              <div className="absolute top-6 right-6 text-gray-200 text-5xl font-bold">
                {`0${index + 1}`}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl text-white text-2xl mb-6 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#111827] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}