// service-details/ServiceOverview.jsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock } from 'lucide-react';

export default function ServiceOverview({ data }) {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Main Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-3xl border border-gray-100 shadow-sm mb-6">
            <span className="text-[#cd2b14] font-semibold tracking-widest text-sm uppercase">
              OUR EXPERTISE
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
            {data.title}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#cd2b14] to-transparent mx-auto mt-6" />
        </div>

        {/* Two Column Content - Same Height */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex-1 space-y-10">
              <div className="space-y-8 text-[1.08rem] leading-relaxed text-gray-600">
                {data.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200 mt-auto">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Precision</div>
                    <div className="text-sm text-gray-500">Every detail matters</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="w-8 h-8 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Excellence</div>
                    <div className="text-sm text-gray-500">Certified standards</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-8 h-8 text-[#cd2b14] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Reliability</div>
                    <div className="text-sm text-gray-500">On-time delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 flex items-center"
          >
            <div className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-300/60 border border-gray-100">
              <Image
                src={data.image}
                alt={data.title}
                width={900}
                height={680}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Overlay & Floating Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-7 py-5 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#cd2b14] rounded-full animate-pulse" />
                  <div>
                    <p className="font-semibold text-gray-900">Premium Quality</p>
                    <p className="text-sm text-gray-500">Guaranteed Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}