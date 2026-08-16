// app/services/[slug]/service-details/ServiceGallery.jsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function ServiceGallery({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="relative py-28 bg-[#f8fafc] overflow-hidden" id="gallery">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#cd2b14_0.6px,transparent_1px)] bg-[length:30px_30px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-7 py-3.5 rounded-3xl shadow-sm mb-6">
            <Sparkles className="w-5 h-5 text-[#cd2b14]" />
            <span className="uppercase tracking-widest text-sm font-semibold text-[#cd2b14]">GALLERY</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Project Gallery
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-md mx-auto">
            Real projects. Real craftsmanship.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-gray-300/50 border border-gray-100 hover:border-[#cd2b14]/30 transition-all duration-500"
            >
              <Image
                src={img}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-medium">Project Showcase</p>
                    <p className="text-xs opacity-75">View Details</p>
                  </div>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">Swipe or scroll for more projects →</p>
        </div>
      </div>
    </section>
  );
}