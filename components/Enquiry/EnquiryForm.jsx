"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: true, success: null });

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_category: formData.category,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_d3cmn09",
        "template_896zkcf",
        templateParams,
        "VNkGJBgBYKU8OjweK"
      );

      await fetch(
        "https://script.google.com/macros/s/AKfycbz3fVU1goR7DCWhPm-wXYeGYHpAFfv9sjsGfXpCfDQa3ol2JYikB-gn43z8ZhaV145Wjw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(templateParams),
        }
      );

      setStatus({ loading: false, success: true });

      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
      });
    } catch (error) {
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[520px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/fabrication-contact.jpg"
            alt="Metal Fabrication"
            fill
            className="object-cover"
          />

          {/* light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* text */}
          <div className="absolute bottom-10 left-10 text-white max-w-sm">

            <h2 className="text-3xl font-bold leading-snug">
              Let's Build Your
              <span className="block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-transparent bg-clip-text">
                Metal Project
              </span>
            </h2>

            <p className="text-gray-200 mt-4 text-sm">
              Welldone Metalworks provides premium fabrication solutions
              for residential and commercial structures.
            </p>

          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-[#111827] mb-8">
            Send an Enquiry
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            {/* Category */}
            <div>
              <label className="block text-sm text-[#374151] mb-2">
                Service Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:ring-2 focus:ring-[#cd2b14] outline-none"
              >
                <option value="">Select Category</option>
                <option>Garden Structure</option>
                <option>Gazebo Structure</option>
                <option>Railing Structure</option>
                <option>Heavy Conventional</option>
                <option>Polycarbonate Roofing</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm text-[#374151] mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:ring-2 focus:ring-[#cd2b14] outline-none"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2
                bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]
                text-white py-4 rounded-xl font-semibold
                hover:scale-[1.02] transition"
              >
                {status.loading ? "Submitting..." : (
                  <>
                    <Send size={18} /> Submit Enquiry
                  </>
                )}
              </button>
            </div>

          </form>

          {status.success === true && (
            <p className="text-green-600 mt-4 text-center">
              Enquiry submitted successfully!
            </p>
          )}

          {status.success === false && (
            <p className="text-red-600 mt-4 text-center">
              Failed to submit enquiry.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* INPUT */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm text-[#374151] mb-2">
        {label}
      </label>

      <input
        {...props}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-xl
        focus:ring-2 focus:ring-[#cd2b14] outline-none"
      />
    </div>
  );
}