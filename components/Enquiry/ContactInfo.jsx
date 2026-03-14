"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  const contacts = [
    {
      icon: <MapPin size={26} />,
      title: "Our Office",
      detail: "123 Business Street, New Delhi, India",
    },
    {
      icon: <Phone size={26} />,
      title: "Phone Number",
      detail: "+91 98765 43210",
    },
    {
      icon: <Mail size={26} />,
      title: "Email Address",
      detail: "info@company.com",
    },
    {
      icon: <Clock size={26} />,
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
    <section className="py-20 bg-[#f9fafb] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-[#111827]">
            Get In Touch With Us
          </h2>

          <p className="text-[#6b7280] mt-3 max-w-xl mx-auto">
            Have a project in mind? Contact Welldone Metalworks for custom
            fabrication, structural solutions, and premium metal work.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contacts.map((item, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl text-white mb-6 shadow-md
                bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]"
              >
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                {item.title}
              </h3>

              <p className="text-[#6b7280] text-sm leading-relaxed">
                {item.detail}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] rounded-b-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}