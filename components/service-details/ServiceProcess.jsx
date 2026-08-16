// app/services/[slug]/service-details/ServiceProcess.jsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ServiceProcess({ data }) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-7 py-3.5 rounded-3xl shadow-sm mb-6">
            <span className="text-[#cd2b14] uppercase tracking-widest text-sm font-semibold">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            6 Steps to Perfection
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Structured excellence from initial consultation to final handover
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-gray-100 hover:border-[#cd2b14]/30 rounded-3xl p-9 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#cd2b14] to-[#b72d2c] text-white text-4xl font-bold shadow-lg group-hover:rotate-12 transition-transform">
                  {step.step}
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-widest text-gray-400">STEP</div>
                  <div className="text-2xl font-bold text-[#cd2b14]">{step.step}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-10 flex items-center justify-between pt-6 border-t border-gray-100">
                <CheckCircle className="w-6 h-6 text-[#cd2b14]" />
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#cd2b14] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 text-sm text-gray-500">
          Every step is monitored with strict quality control and client approval
        </div>
      </div>
    </section>
  );
}