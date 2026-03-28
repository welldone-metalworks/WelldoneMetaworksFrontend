"use client";

import {
  Phone,
  Hammer,
  Factory,
  Wrench,
  Building2,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { sendEnquiry } from "../../lib/api"; 
export default function LandingPage() {
  const phone = "919649957598";
  const message =
    "Hi, I need metal fabrication service in Ahmedabad. Please share details.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      setStatus({
        loading: false,
        success: false,
      });
    }
}
  return (
    <div className="bg-white font-sans">
      {/* 🔥 PREMIUM HERO (SPLIT DESIGN) */}
      <section className="relative min-h-[85vh] flex items-center ">
        {/* Background Image (Right side) */}
        <div className="absolute inset-0">
          <img
            src="/banner/banner05.webp"
            className="w-full h-full object-cover opacity-70"
            alt="Metal Fabrication"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="text-white">
              {/* Tag */}
              <span className="inline-block bg-[#cd2b14] px-4 py-2 rounded-full text-sm mb-4">
                Trusted Fabrication Experts
              </span>

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Metal Fabrication Services
                <span className="block text-[#cd2b14] mt-2">in Ahmedabad</span>
              </h1>

              {/* Description */}
              <p className="mt-5 text-black text-base md:text-lg">
                Get high-quality MS fabrication, sheds, railings & custom steel
                work with fast delivery and expert craftsmanship.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`tel:${phone}`}
                  className="bg-[#cd2b14] hover:bg-red-700 px-6 py-3 rounded-lg flex items-center gap-2 shadow-xl transition hover:scale-105"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg flex items-center gap-2 shadow-xl transition hover:scale-105"
                >
                  <FaWhatsapp />
                  Get Quote
                </a>
              </div>

              {/* Urgency */}
              <p className="mt-4 text-sm text-red-400"></p>
            </div>
          </div>
        </div>
      </section>
      {/* 🔥 TRUST - PREMIUM SOLID */}
      <section className="py-16 bg-white ">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Top Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Proven Results You Can Trust
            </h2>
            <p className="text-gray-500 mt-2">
              Strong structures. Reliable service. Trusted by clients across
              Gujarat.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* ITEM */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              <p className="text-sm text-gray-500 mb-1">Projects Completed</p>
              <h3 className="text-3xl font-bold text-[#cd2b14]">50+</h3>
            </div>

            {/* ITEM */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              <p className="text-sm text-gray-500 mb-1">Years of Experience</p>
              <h3 className="text-3xl font-bold text-[#cd2b14]">5+</h3>
            </div>

            {/* ITEM */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              <p className="text-sm text-gray-500 mb-1">Client Satisfaction</p>
              <h3 className="text-3xl font-bold text-[#cd2b14]">100%</h3>
            </div>

            {/* ITEM */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              <p className="text-sm text-gray-500 mb-1">Service Location</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#cd2b14] break-words">
                Ahmedabad
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our <span className="text-[#cd2b14]">Services</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Durable, precise and customized metal fabrication solutions
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "MS Shed Construction",
                icon: <Building2 size={28} />,
              },
              {
                title: "Steel Fabrication Works",
                icon: <Factory size={28} />,
              },
              {
                title: "Custom Metal Work",
                icon: <Settings size={28} />,
              },
              {
                title: "Railings & Gates",
                icon: <ShieldCheck size={28} />,
              },
              {
                title: "Industrial Fabrication",
                icon: <Hammer size={28} />,
              },
              {
                title: "Repair & Maintenance",
                icon: <Wrench size={28} />,
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#cd2b14] to-orange-400"></div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#cd2b14]/10 text-[#cd2b14] mb-4 group-hover:scale-110 transition">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2">
                  High-quality {s.title.toLowerCase()} with precision and
                  durability.
                </p>

                {/* Hover Arrow */}
                <span className="absolute bottom-4 right-5 text-[#cd2b14] opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 WORK - PREMIUM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our <span className="text-[#cd2b14]">Work</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Real projects. Real quality. Built to last.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/banner/banner01.webp",
                title: "MS Shed Project",
              },
              {
                img: "/banner/banner02.webp",
                title: "Industrial Fabrication",
              },
              {
                img: "/banner/banner03.webp",
                title: "Custom Metal Work",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>

                  {/* Hover Button */}
                  <button className="mt-2 text-sm text-white border border-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-[#cd2b14] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a82210] transition">
              Get Free Quote →
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 FORM - PREMIUM MODERN */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#cd2b14]/10 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-orange-400/10 blur-[120px]" />

        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Get Your <span className="text-[#cd2b14]">Free Quote</span> Today
            </h2>

            <p className="text-gray-500 mt-4 max-w-md">
              Share your requirement and our expert team will contact you within
              minutes.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {[
                "Quick Response within 10 Minutes",
                "Best Market Pricing Guaranteed",
                "Experienced Fabrication Experts",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#cd2b14]/10 text-[#cd2b14] text-sm">
                    ✔
                  </div>

                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            {/* Trust Line */}
            <p className="mt-8 text-sm text-gray-400">
              Trusted by 100+ clients across Gujarat
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cd2b14] outline-none transition"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cd2b14] outline-none transition"
              />

              {/* Requirement */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Requirement..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cd2b14] outline-none transition"
              />

              {/* Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#cd2b14] to-orange-500 hover:opacity-90 transition shadow-md"
              >
                {status.loading ? "Sending..." : "Get Free Quote →"}
              </button>

              {/* Status */}
              {status.success === true && (
                <p className="text-green-600 text-sm">
                  ✅ Enquiry sent successfully!
                </p>
              )}

              {status.success === false && (
                <p className="text-red-500 text-sm">
                  ❌ Failed to send enquiry
                </p>
              )}
            </form>
          </div>
        </div>
      </section>


     {/* 🔥 FINAL CTA */}
<section className="bg-[#cd2b14] text-white text-center py-12">
  <h2 className="text-2xl font-bold">
    Need Metal Fabrication Service in Ahmedabad?
  </h2>

  <div className="mt-4 flex justify-center gap-4 flex-wrap">
    
    <a
      href={`tel:${phone}`}
      className="bg-white text-[#cd2b14] px-6 py-2.5 rounded-full font-medium shadow hover:scale-105 transition"
    >
      📞 Call Now
    </a>

    <a
      href={whatsappUrl}
      className="bg-green-500 text-white px-6 py-2.5 rounded-full font-medium shadow hover:scale-105 transition"
    >
      💬 WhatsApp
    </a>

    {/* 🏠 Home Button */}
    <a
      href="/"
      className="bg-black text-white px-6 py-2.5 rounded-full font-medium shadow hover:bg-gray-800 hover:scale-105 transition"
    >
      🏠 Go to Home
    </a>

  </div>
</section>
 
    </div>
  );
}
