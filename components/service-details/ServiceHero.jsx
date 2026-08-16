// service-details/ServiceHero.jsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceHero({ data }) {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-[#0a0f1c] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cd2b14_0.7px,transparent_1px)] bg-[length:28px_28px] opacity-10" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0a0f1c]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-3xl border border-white/20">
              <Sparkles className="w-5 h-5 text-[#cd2b14]" />
              <span className="uppercase tracking-widest text-sm font-semibold text-white/90">
                {data.badge}
              </span>
            </div>

            {/* Headline with Brand Gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-[4.8rem] leading-[1.05] font-bold tracking-tighter text-white">
              {data.title.split(' ').map((word, i) => (
                <span 
                  key={i}
                  className={i === 1 || i === data.title.split(' ').length - 1 
                    ? "bg-gradient-to-r from-[#981d13] via-[#cd2b14] to-[#f87171] bg-clip-text text-transparent" 
                    : ""}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
              {data.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#cd2b14] via-[#b72d2c] to-[#981d13] text-white px-10 py-5 rounded-3xl font-semibold text-lg shadow-xl shadow-[#cd2b14]/40 hover:brightness-110 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 border-2 border-white/70 hover:border-white text-white px-9 py-5 rounded-3xl font-semibold text-lg backdrop-blur-md hover:bg-white/5 transition-all duration-300"
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>

          {/* Right Visual - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Decorative Accents */}
              <div className="absolute -top-8 -right-8 w-48 h-48 border border-[#cd2b14]/30 rounded-3xl -rotate-6" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-white/20 rounded-3xl rotate-12" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest text-gray-400"
      >
        SCROLL TO EXPLORE
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
      </motion.div>
    </section>
  );
}