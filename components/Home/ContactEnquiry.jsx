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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <section className="py-10 px-6 bg-gradient-to-b from-gray-150 to-gray-300">

      {/* Heading */}
      <div className="max-w-[1280px] mx-auto text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch With Us
        </h1>

        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Whether you have a question, a project idea, or need a quote,
          our team is ready to assist you.
        </p>

      </div>

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden flex flex-col justify-between"
        >

          <div>

            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Contact Info
            </h2>

            <div className="space-y-5 text-gray-700">

              <p className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-500" />
                panchalsourav32@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <Phone size={20} className="text-purple-500" />
                +91 96499 57698
              </p>

              <p className="flex items-center gap-3">
                <MapPin size={20} className="text-yellow-500" />
                2 Laxmi Chuna Factory, Sola Gham, Ahmedabad
              </p>

            </div>

          </div>

          <div className="mt-10">

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Follow Us
            </h3>

            <div className="flex gap-4 text-gray-600">
              <Facebook size={24} />
              <Instagram size={24} />
              <Linkedin size={24} />
            </div>

          </div>

        </motion.div>


        {/* Enquiry Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-12"
        >

          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Send an Enquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {["name", "email", "subject"].map((field) => (

              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
              />

            ))}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success === true && (
              <p className="text-green-500 font-semibold">
                Message sent successfully!
              </p>
            )}

            {status.success === false && (
              <p className="text-red-500 font-semibold">
                Failed to send message.
              </p>
            )}

          </form>

        </motion.div>

      </div>

    </section>
  );
}