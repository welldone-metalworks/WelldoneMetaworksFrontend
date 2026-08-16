// app/services/[slug]/service-details/WhyChooseUs.jsx
'use client';
import { motion } from 'framer-motion';
import { Award, Clock, ShieldCheck, Users } from 'lucide-react';

const icons = [Award, Clock, ShieldCheck, Users];

export default function WhyChooseUs({ data }) {
  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#cd2b14] uppercase tracking-[3px] text-sm font-semibold">OUR PROMISE</span>
          <h2 className="text-5xl font-bold mt-4">Why Choose Welldone Metalworks?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-[#cd2b14] to-[#981d13] flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}