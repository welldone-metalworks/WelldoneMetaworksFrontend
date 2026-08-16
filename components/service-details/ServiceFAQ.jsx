// app/services/[slug]/service-details/ServiceFAQ.jsx
'use client';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceFAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-28 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-6 py-3 rounded-3xl shadow-sm mb-6">
            <HelpCircle className="w-6 h-6 text-[#cd2b14]" />
            <span className="uppercase tracking-widest text-sm font-semibold text-[#cd2b14]">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {data.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-100 hover:border-[#cd2b14]/20 rounded-3xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-7 flex items-center justify-between text-left hover:bg-gray-50 group"
              >
                <span className="font-semibold text-lg pr-6 text-gray-900 group-hover:text-[#cd2b14] transition-colors">
                  {faq.question}
                </span>
                
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${openIndex === index ? 'bg-[#cd2b14] border-[#cd2b14]' : 'border-gray-300'}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}