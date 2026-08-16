// app/services/[slug]/service-details/ServiceBenefits.jsx
'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function ServiceBenefits({ data }) {
  return (
    <section className="relative py-10 bg-[#0a0f1c] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#cd2b14_0.6px,transparent_1px)] bg-[length:30px_30px] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-3xl border border-white/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#cd2b14]" />
            <span className="uppercase tracking-widest text-sm font-semibold text-[#cd2b14]">
              BENEFITS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Why Clients Trust Us
          </h2>
          <p className="mt-5 text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the difference with every project we deliver
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#cd2b14]/40 rounded-3xl p-10 transition-all duration-500 flex gap-7"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#cd2b14] to-[#f87171] flex items-center justify-center shadow-lg shadow-[#cd2b14]/30 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[1.1rem] leading-relaxed text-gray-200">
                  {benefit}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-8 right-8 h-2 w-2 rounded-full bg-[#cd2b14]/30 group-hover:bg-[#cd2b14] transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#cd2b14]/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}