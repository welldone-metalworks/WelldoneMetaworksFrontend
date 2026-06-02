"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Villa Owner",
    review:
      "Amazing premium finish and professional installation experience. The gazebo completely transformed our outdoor living area.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    name: "Amit Shah",
    role: "Business Owner",
    review:
      "Our rooftop gazebo looks absolutely stunning. Welldone Metalworks delivered premium quality with elegant finishing.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[130px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          REVIEWS
        </h1>

      </div>

      {/* CONTAINER */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* LABEL */}
          <div className="inline-flex items-center gap-2 bg-[#cd2b14]/10 border border-[#cd2b14]/20 px-5 py-2 rounded-full">

            <span className="w-2 h-2 rounded-full bg-[#cd2b14]" />

            <p className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold text-[#cd2b14]">
              Client Testimonials
            </p>

          </div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#111827]">

            Trusted By

            <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
              Premium Clients
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
            Discover why homeowners & premium property
            owners trust Welldone Metalworks for luxury
            outdoor gazebo, pergola & canopy solutions.
          </p>

        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-[32px] bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#981d13]/5 via-[#b72d2c]/5 to-[#cd2b14]/10 transition-all duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 p-7 sm:p-10">

                {/* TOP */}
                <div className="flex items-start justify-between gap-5">

                  {/* CLIENT */}
                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                    />

                    <div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.role}
                      </p>

                    </div>

                  </div>

                  {/* QUOTE ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center shadow-xl">

                    <Quote className="w-7 h-7 text-white" />

                  </div>

                </div>

                {/* STARS */}
                <div className="mt-8 flex items-center gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}

                </div>

                {/* REVIEW */}
                <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
                  “{item.review}”
                </p>

                {/* BOTTOM LINE */}
                <div className="mt-8 w-16 h-[3px] rounded-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]" />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}