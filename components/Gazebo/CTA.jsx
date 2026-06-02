"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-10 sm:py-14 md:py-18 lg:py-12">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#981d13]/10 blur-[130px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute top-8 left-0 w-full flex justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-extrabold text-gray-100 tracking-widest whitespace-nowrap">
          CONTACT
        </h1>

      </div>

      {/* CONTAINER */}
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >

          {/* LEFT CONTENT */}
          <div>

            {/* LABEL */}
            <div className="inline-flex items-center gap-2 bg-[#cd2b14]/10 border border-[#cd2b14]/20 px-5 py-2 rounded-full">

              <Sparkles className="w-4 h-4 text-[#cd2b14]" />

              <p className="text-xs sm:text-sm uppercase tracking-[3px] font-semibold text-[#cd2b14]">
                Let’s Build Something Premium
              </p>

            </div>

            {/* HEADING */}
            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#111827]">

              Ready To Upgrade

              <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                Your Outdoor Lifestyle?
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-600 leading-8 sm:leading-9 max-w-2xl">
              Get premium gazebo, pergola & canopy solutions
              designed for villas, rooftops & luxury residential
              spaces with elegant architectural finishing.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  150+
                </h3>

                <p className="mt-2 text-gray-600">
                  Premium Projects
                </p>

              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                  15+
                </h3>

                <p className="mt-2 text-gray-600">
                  Years Experience
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="relative">

            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[35px] bg-white border border-gray-200 shadow-2xl p-8 sm:p-10 lg:p-12">

              {/* INNER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#981d13]/5 via-[#b72d2c]/5 to-[#cd2b14]/10" />

              <div className="relative z-10">

                {/* TOP */}
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] flex items-center justify-center shadow-2xl">

                  <PhoneCall className="w-10 h-10 text-white" />

                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-3xl sm:text-4xl font-bold text-[#111827] leading-tight">

                  Book Your

                  <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] bg-clip-text text-transparent">
                    Free Consultation
                  </span>

                </h3>

                {/* DESCRIPTION */}
                <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
                  Talk with our experts and get customized
                  outdoor structure solutions tailored for
                  your space & lifestyle.
                </p>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-col gap-5">

                  {/* CALL BUTTON */}
                  <a
                    href="tel:9649957698"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:scale-105 transition-all duration-300"
                  >

                    <PhoneCall className="w-5 h-5" />

                    Call Now

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />

                  </a>

                  {/* WHATSAPP BUTTON */}
                  <a
                    href="https://wa.me/919649957698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 border border-gray-300 bg-white hover:border-[#25D366] hover:text-[#25D366] text-[#111827] px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-sm transition-all duration-300"
                  >

                    <MessageCircle className="w-5 h-5" />

                    WhatsApp Now

                  </a>

                </div>

              </div>

            </div>

           

          </div>

        </motion.div>

      </div>
    </section>
  );
}