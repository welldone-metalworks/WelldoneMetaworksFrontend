"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {

  const contacts = [
    {
      icon: MapPin,
      title: "Our Office",
      detail: "123 Business Street, New Delhi, India",
    },
    {
      icon: Phone,
      title: "Phone Number",
      detail: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "info@company.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon - Sat : 9:00 AM - 6:00 PM",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-[#f9fafb] relative overflow-hidden">

      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#111827]">
            Contact Information
          </h2>

          <p className="text-[#6b7280] mt-4 max-w-xl mx-auto">
            Get in touch with Welldone Metalworks for premium fabrication,
            structural metal work, gazebo structures and roofing solutions.
          </p>

          <div className="w-24 h-[3px] mx-auto mt-6 rounded-full bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]"></div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contacts.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl p-8 bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >

                {/* gradient border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#981d13]/10 via-[#b72d2c]/10 to-[#cd2b14]/10"></div>

                {/* Icon */}
                <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-white shadow-md
                bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">

                  <Icon size={26} />

                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>

                {/* Detail */}
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {item.detail}
                </p>

                {/* bottom accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] rounded-b-3xl"></div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}