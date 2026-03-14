"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of metal fabrication do you offer?",
    answer:
      "We specialize in custom steel, aluminum, and polycarbonate fabrication for residential and commercial projects including gazebos, railings, gates, and decorative panels.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can fill out our enquiry form or contact us directly. Our team will review your requirements and provide a detailed quotation quickly.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes. Our experienced technicians handle full installation ensuring structural safety and professional finishing.",
  },
  {
    question: "Can I customize the designs?",
    answer:
      "Absolutely. All structures are fully customizable in terms of design, material, size, and finish.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use high-quality steel, aluminum, stainless steel, and polycarbonate to ensure durability and aesthetics.",
  },
  {
    question: "Do you provide maintenance services?",
    answer:
      "Yes, we also provide repair, maintenance, and support services for fabricated structures.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50">

      {/* Heading */}
      <div className="max-w-[1280px] mx-auto text-center  mb-16">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">
            Questions
          </span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Everything you need to know about our metal fabrication services.
        </p>

      </div>

      {/* FAQ Grid */}
      <div className="max-w-[1280px] mx-auto px-6 grid gap-6 md:grid-cols-2">

        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 overflow-hidden"
          >

            {/* Question */}
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center p-6 text-left"
            >

              <h3 className="text-lg font-semibold text-gray-800 pr-6">
                {faq.question}
              </h3>

              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-9 h-9 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg,#981d13,#b72d2c,#cd2b14)",
                }}
              >
                {openIndex === idx ? (
                  <Minus size={16} className="text-white" />
                ) : (
                  <Plus size={16} className="text-white" />
                )}
              </motion.div>

            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="px-6 pb-6 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}

      </div>

    </section>
  );
}