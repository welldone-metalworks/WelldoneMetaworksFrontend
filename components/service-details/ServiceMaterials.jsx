// components/service-details/ServiceMaterials.jsx
'use client';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ServiceMaterials({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        No materials data available.
      </div>
    );
  }

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cd2b14_0.7px,transparent_1px)] bg-[length:35px_35px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white shadow border border-gray-100 px-7 py-3.5 rounded-3xl mb-6">
            <Sparkles className="w-5 h-5 text-[#cd2b14]" />
            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#cd2b14]">
              PREMIUM MATERIALS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Materials We Work With
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully selected for strength, beauty, and long-term performance
          </p>
        </div>

        {/* Materials Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white border border-gray-100 hover:border-[#cd2b14] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Top Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-[#cd2b14] via-[#b72d2c] to-[#981d13]" />

              <div className="p-10 text-center">
                {/* Material Icon / Visual */}
                <div className="mx-auto mb-8 w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 group-hover:border-[#cd2b14]/30 transition-colors">
                  <span className="text-6xl drop-shadow-md">🔩</span>
                </div>

                {/* Material Name */}
                <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  {material}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-500 mt-2">Premium Grade</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}