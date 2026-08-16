// app/services/[slug]/service-details/ServiceHighlights.jsx
'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function ServiceHighlights({ data }) {
  return (
    <section className="relative py-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cd2b14_0.8px,transparent_1px)] bg-[length:32px_32px] opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white shadow border border-gray-100 px-7 py-3.5 rounded-3xl mb-6">
            <Sparkles className="w-5 h-5 text-[#cd2b14]" />
            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#cd2b14]">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tighter">
            Key Highlights
            <span className="block bg-gradient-to-r from-[#981d13] via-[#cd2b14] to-[#f87171] bg-clip-text text-transparent mt-2">
              Built With Excellence
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            What makes our service truly exceptional
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="group bg-white border border-gray-100 hover:border-[#cd2b14]/30 rounded-3xl p-9 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="mb-9">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#cd2b14] via-[#b72d2c] to-[#981d13] shadow-xl shadow-[#cd2b14]/20 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle className="w-11 h-11 text-white" />
                </div>
              </div>

              {/* Highlight Text */}
              <p className="flex-1 text-[1.1rem] leading-tight font-semibold text-gray-900 tracking-tight">
                {highlight}
              </p>

              {/* Premium Accent Line */}
              <div className="mt-10 h-1 w-14 bg-gradient-to-r from-[#cd2b14] to-[#f87171] rounded-full group-hover:w-24 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cd2b14]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-20 left-12 w-64 h-64 bg-amber-100/30 rounded-full blur-[90px] -z-10" />
    </section>
  );
}