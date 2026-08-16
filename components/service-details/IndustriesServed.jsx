// app/services/[slug]/service-details/ServiceIndustries.jsx
'use client';
import { motion } from 'framer-motion';
import { Factory, Sparkles } from 'lucide-react';

export default function ServiceIndustries({ data }) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <section className="relative py-28 bg-[#f8fafc] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cd2b14_0.6px,transparent_1px)] bg-[length:36px_36px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#cd2b14] to-[#b72d2c] rounded-3xl shadow-xl">
              <Factory className="w-10 h-10 text-white" />
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-7 py-3.5 rounded-3xl shadow-sm mb-6">
            <Sparkles className="w-5 h-5 text-[#cd2b14]" />
            <span className="uppercase tracking-widest text-sm font-semibold text-[#cd2b14]">INDUSTRIES WE SERVE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Industries We Serve
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto">
            Trusted metal fabrication partner across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {data.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group bg-white border border-gray-100 hover:border-[#cd2b14]/30 rounded-3xl p-10 text-center shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center"
            >
              {/* Visual Icon */}
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl mb-8 group-hover:border-[#cd2b14]/30 transition-colors">
                <span className="text-5xl">🏭</span>
              </div>

              {/* Industry Name */}
              <p className="font-semibold text-xl text-gray-900 tracking-tight group-hover:text-[#cd2b14] transition-colors">
                {industry}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}