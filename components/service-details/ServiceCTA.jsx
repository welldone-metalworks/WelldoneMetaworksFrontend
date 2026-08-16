// app/services/[slug]/service-details/ServiceCTA.jsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCTA({ data }) {
  return (
    <section className="relative py-32 bg-[#0a0f1c] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#cd2b14_0.8px,transparent_1px)] bg-[length:30px_30px] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/70" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-3xl border border-white/20 mb-8">
          <Sparkles className="w-5 h-5 text-[#cd2b14]" />
          <span className="uppercase tracking-widest text-sm font-semibold text-white">NEXT STEP</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
          {data.title}
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#cd2b14] via-[#b72d2c] to-[#981d13] hover:brightness-110 px-14 py-6 rounded-3xl font-bold text-xl shadow-2xl shadow-[#cd2b14]/40 transition-all"
          >
            {data.primaryButton}
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 border-2 border-white/60 hover:border-white px-12 py-6 rounded-3xl font-semibold text-xl backdrop-blur-md hover:bg-white/10 transition-all"
          >
            {data.secondaryButton}
          </motion.a>
        </div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#cd2b14]/10 rounded-full blur-[120px]" />
    </section>
  );
}                                            