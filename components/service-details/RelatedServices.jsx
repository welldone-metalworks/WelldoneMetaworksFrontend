// app/services/[slug]/service-details/RelatedServices.jsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function RelatedServices({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900">
            Related Services
          </h3>
          <p className="mt-4 text-gray-600">Explore more ways we can help you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((serviceSlug, i) => {
            const title = serviceSlug
              .replace(/-/g, ' ')
              .replace(/\b\w/g, char => char.toUpperCase());

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/services/${serviceSlug}`}
                  className="group flex items-center justify-between bg-white border border-gray-100 hover:border-[#cd2b14] rounded-3xl px-8 py-8 transition-all duration-500 hover:shadow-xl"
                >
                  <div>
                    <p className="font-semibold text-xl text-gray-900 group-hover:text-[#cd2b14] transition-colors">
                      {title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Professional Service</p>
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 group-hover:bg-[#cd2b14] rounded-2xl transition-colors">
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}