// app/services/[slug]/service-details/ServiceFeatures.jsx
'use client';
import { motion } from 'framer-motion';
import { Settings, Award, Zap, Shield, CheckCircle } from 'lucide-react';

const iconMap = {
  Settings: Settings,
  Award: Award,
  Zap: Zap,
  Shield: Shield,
};

export default function ServiceFeatures({ data }) {
  return (
    <section className="py-10 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Premium Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-3xl border border-gray-100 shadow-sm mb-6">
            <CheckCircle className="w-5 h-5 text-[#cd2b14]" />
            <span className="text-[#cd2b14] uppercase tracking-widest text-sm font-semibold">
              OUR CAPABILITIES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Advanced Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Engineered for performance, built for reliability
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Settings;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative bg-white border border-gray-100 hover:border-[#cd2b14]/20 rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#cd2b14] to-[#b72d2c] flex items-center justify-center shadow-xl shadow-[#cd2b14]/20 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className="mt-10 h-1 w-12 bg-gradient-to-r from-[#cd2b14] to-[#f87171] rounded-full group-hover:w-20 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}