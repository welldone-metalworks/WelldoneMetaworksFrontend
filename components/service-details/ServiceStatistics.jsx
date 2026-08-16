// app/services/[slug]/service-details/ServiceStatistics.jsx
"use client";

import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Users, Clock, TrendingUp } from "lucide-react";

const icons = [Award, Users, Clock, TrendingUp];

function AnimatedCounter({ end, suffix = "" }) {
  const [value, setValue] = useState(0);
  const count = useMotionValue(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, end, {
            duration: 2,
            ease: "easeOut",
            onUpdate(latest) {
              setValue(Math.floor(latest));
            },
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function ServiceStatistics({ data }) {
  return (
    <section className="relative py-10 bg-[#f8fafc] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

      {/* Soft Accent Glows */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#cd2b14]/5 blur-[110px]" />
        <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-amber-100/70 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-[#cd2b14]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#cd2b14]">
            OUR IMPACT
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Trusted Results
            <span className="block text-[#cd2b14]">That Matter</span>
          </h2>
        </motion.div>

        {/* Statistics Grid with Grid-style Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((stat, index) => {
            const Icon = icons[index % icons.length];
            const number = parseInt(stat.number.replace(/[^0-9]/g, "")) || 0;
            const suffix = stat.number.replace(/[0-9]/g, "");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border border-gray-100 hover:border-[#cd2b14]/30 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Subtle Inner Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />

                {/* Icon */}
                <div className="relative z-10 h-12 w-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#cd2b14] to-[#f87171] shadow-md transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Number */}
                <div className="relative z-10 mt-8 text-4xl font-bold tracking-tighter text-gray-900">
                  <AnimatedCounter end={number} suffix={suffix} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-3 text-[17px] font-semibold text-gray-800 leading-tight">
                  {stat.title}
                </h3>

                {/* Accent Line */}
                <div className="relative z-10 mt-auto pt-8">
                  <div className="h-0.5 w-10 bg-gradient-to-r from-[#cd2b14] to-amber-500 rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}