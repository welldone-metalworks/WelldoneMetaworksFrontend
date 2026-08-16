// app/services/[slug]/service-details/ServiceApplications.jsx
'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ServiceApplications({ data }) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-7 py-3.5 rounded-3xl shadow-sm mb-6">
            <Sparkles className="w-5 h-5 text-[#cd2b14]" />
            <span className="uppercase tracking-widest text-sm font-semibold text-[#cd2b14]">APPLICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Where We Excel
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Delivering exceptional metal fabrication solutions across diverse sectors
          </p>
        </div>

        {/* Masonry-like Grid with Alternating Heights */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {data.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -12 }}
              className="group break-inside-avoid bg-white border border-gray-100 hover:border-[#cd2b14]/30 rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#cd2b14] to-[#b72d2c] flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🏗️</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-[#cd2b14] transition-colors" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
                {app}
              </h3>

              <p className="text-gray-500 text-[15px]">
                High-performance metal solutions engineered for this sector.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}