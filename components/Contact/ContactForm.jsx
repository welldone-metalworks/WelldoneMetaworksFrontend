"use client";

import { useState } from "react";
import {
  Send,
  Loader2,
  Mail,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_d3cmn09",
        "template_896zkcf",
        templateParams,
        "VNkGJBgBYKU8OjweK"
      )
      .then(() => {
        fetch(
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
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus({ loading: false, success: false });
      });
  };

  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 bg-gray-900/70 backdrop-blur-xl
                   border border-gray-800 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* LEFT */}
        <div className="p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let’s Connect 🚀
          </h2>

          <p className="text-gray-300 mb-8">
            Have a project in mind? Drop a message and I’ll get back to you.
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <Mail className="text-cyan-400" size={20} />
              panchalsourav32@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-purple-400" size={20} />
              +91 96499 57698
            </p>
          </div>

          <div className="flex gap-5 mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "subject"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.toUpperCase()}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white"
              />
            ))}

            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 text-white"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status.loading}
              className="w-full flex justify-center items-center gap-2
                         bg-gradient-to-r from-cyan-500 to-purple-500
                         text-white py-3 rounded-full"
            >
              {status.loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <Send size={18} />
              )}
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
