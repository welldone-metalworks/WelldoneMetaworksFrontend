"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

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
      // 1️⃣ EmailJS
      await emailjs.send(
        "service_d3cmn09",
        "template_896zkcf",
        templateParams,
        "VNkGJBgBYKU8OjweK"
      );

      // 2️⃣ Google Sheet
      await fetch(
        "https://script.google.com/macros/s/AKfycbz3fVU1goR7DCWhPm-wXYeGYHpAFfv9sjsGfXpCfDQa3ol2JYikB-gn43z8ZhaV145Wjw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
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
      console.error("Enquiry Error:", error);
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-16 px-6">
      <div className="max-w-3xl w-full bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.2)] p-10 border border-gray-700">

        <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Send Us an Enquiry
        </h2>

        <p className="text-center text-gray-400 mb-10">
          We’re here to assist you with our services.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Name */}
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />

          {/* Email */}
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          {/* Phone */}
          <Input
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
          />

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Service Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 focus:ring-2 focus:ring-fuchsia-400 outline-none"
            >
              <option value="">Select a category</option>
              <option>Garden Structure</option>
              <option>Gazebo Structure</option>
              <option>Railing Structure</option>
              <option>Heavy Conventional</option>
              <option>Polycarbonate Roofing</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-cyan-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={status.loading}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
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
          <p className="text-green-400 text-center mt-4">
            ✅ Enquiry submitted successfully!
          </p>
        )}
        {status.success === false && (
          <p className="text-red-400 text-center mt-4">
            ❌ Failed to submit enquiry. Try again!
          </p>
        )}
      </div>
    </section>
  );
}

/* Reusable Input */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-cyan-400 mb-2">
        {label}
      </label>
      <input
        {...props}
        required
        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-gray-100 focus:ring-2 focus:ring-cyan-400 outline-none"
      />
    </div>
  );
}
