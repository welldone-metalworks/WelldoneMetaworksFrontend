"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

import { sendEnquiry } from "../../lib/api";

export default function ContactEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: null });

    try {
      await sendEnquiry(formData);

      setStatus({
        loading: false,
        success: true,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      setStatus({
        loading: false,
        success: false,
      });

    }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#cd2b14]/10 blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#981d13]/10 blur-[160px]" />

      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">

            Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">
              Metal Project
            </span>

          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Tell us about your fabrication requirements and our team will
            contact you with the best possible solution.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

          {/* LEFT SIDE DARK PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#111827] to-[#1f2937] text-white p-12 flex flex-col justify-between"
          >

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Contact Welldone Metalworks
              </h3>

              <p className="text-gray-300 mb-10 max-w-sm">
                From custom gates and railings to large steel fabrication,
                we deliver precision craftsmanship and durable structures.
              </p>

              <div className="space-y-6">

                {[
                  {
                    icon: Mail,
                    text: "info@welldone-metalworks.in",
                  },
                  {
                    icon: Phone,
                    text: "+91 96499 57698",
                  },
                  {
                    icon: MapPin,
                    text: "Sola Gham, Ahmedabad",
                  },
                ].map((item, i) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4"
                    >

                      <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">
                        <Icon size={18} />
                      </div>

                      <span className="text-gray-200">
                        {item.text}
                      </span>

                    </motion.div>
                  );
                })}

              </div>

            </div>

            {/* Social */}
            <div className="flex gap-4 mt-10">

              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#cd2b14] transition cursor-pointer"
                >
                  <Icon size={18} />
                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12"
          >

            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Send Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div className="relative">

                <User className="absolute left-4 top-4 text-gray-400" size={18} />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#cd2b14] outline-none"
                />

              </div>

              {/* Email */}
              <div className="relative">

                <Mail className="absolute left-4 top-4 text-gray-400" size={18} />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#cd2b14] outline-none"
                />

              </div>

              {/* Subject */}
              <div className="relative">

                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#cd2b14] outline-none"
                />

              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#cd2b14] outline-none"
              />

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] shadow-lg"
              >

                <Send size={18} />

                {status.loading ? "Sending..." : "Send Message"}

              </motion.button>

              {status.success === true && (
                <p className="text-green-600 font-medium">
                  Message sent successfully!
                </p>
              )}

              {status.success === false && (
                <p className="text-red-500 font-medium">
                  Failed to send message.
                </p>
              )}

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}