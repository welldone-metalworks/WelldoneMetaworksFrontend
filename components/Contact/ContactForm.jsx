"use client";

import { useState } from "react";
import {
  Send,
  Loader2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { sendEnquiry } from "../../lib/api";

export default function ContactSection() {

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

    setStatus({
      loading: true,
      success: null,
    });

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
    <section className="py-24 bg-[#f9fafb]">

      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-bold text-[#111827]">
            Let’s Discuss Your Project
          </h2>

          <p className="text-[#6b7280] mt-4 max-w-xl mx-auto">
            Contact Welldone Metalworks for premium fabrication,
            metal structures, gazebo systems and custom steel work.
          </p>

          <div className="w-24 h-[3px] mx-auto mt-6 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] rounded-full"></div>

        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}

          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white shadow-lg">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#111827]">
                  Email Address
                </h3>

                <p className="text-[#6b7280]">
                  info@welldone-metalworks.in
                </p>
              </div>

            </div>

            <div className="flex gap-4 items-start">

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white shadow-lg">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#111827]">
                  Phone Number
                </h3>

                <p className="text-[#6b7280]">
                  +91 96499 57698
                </p>
              </div>

            </div>

            <div className="flex gap-4 items-start">

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white shadow-lg">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-[#111827]">
                  Office Address
                </h3>

                <p className="text-[#6b7280]">
                  Sola Gham, Ahmedabad
                </p>
              </div>

            </div>

          </div>


          {/* FORM */}

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />

              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />

              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#cd2b14] outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status.loading}
                className="w-full flex justify-center items-center gap-2
                bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]
                text-white py-3 rounded-xl font-semibold shadow-lg"
              >

                {status.loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <Send size={18} />
                )}

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

          </div>

        </div>

      </div>

    </section>
  );
}


function Input({ ...props }) {

  return (

    <input
      {...props}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#cd2b14] outline-none"
    />

  );

}