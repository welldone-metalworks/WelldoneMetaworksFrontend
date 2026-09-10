"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  category: "",
  message: "",
};

const categories = [
  "Garden Structure",
  "Gazebo Structure",
  "Railing Structure",
  "Heavy Conventional",
  "Polycarbonate Roofing",
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState({
    loading: false,
    success: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.success !== null) {
      setStatus({
        loading: false,
        success: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: null,
    });

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_category: formData.category,
      message: formData.message,
    };

    try {
      /*
       * EmailJS
       * Existing working configuration retained.
       */
      await emailjs.send(
        "service_d3cmn09",
        "template_896zkcf",
        templateParams,
        "VNkGJBgBYKU8OjweK"
      );

      /*
       * Google Sheets
       * Existing integration retained.
       */
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

      setStatus({
        loading: false,
        success: true,
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setStatus({
        loading: false,
        success: false,
      });
    }
  };

  return (
    <section
      id="enquiry-form"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "linear-gradient(to top left, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to top left, black, transparent 75%)",
        }}
      />

      <div className="wm-container relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              03 / Project Enquiry
            </div>

            <h2 className="wm-heading mt-4 text-3xl leading-tight sm:text-4xl lg:text-[46px]">
              Tell us what you{" "}
              <span className="text-wm-primary">need to build.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
            Share the basic details of your fabrication requirement. The more
            information you provide about the project, dimensions,
            application or site, the easier it is to understand what you are
            looking for.
          </p>
        </motion.div>

        {/* Main Form Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          {/* LEFT PROJECT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative min-h-[540px] overflow-hidden border border-wm-border bg-wm-surface-soft">
              <Image
                src="/Banner/banner02.webp"
                alt="Welldone Metalworks custom metal fabrication"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Light image treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-wm-navy/85 via-wm-navy/20 to-transparent" />

              {/* Top reference */}
              <div className="absolute left-6 top-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center bg-white/95">
                  <Wrench
                    size={16}
                    strokeWidth={2}
                    className="text-wm-primary"
                  />
                </span>

                <span className="bg-white/95 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-heading">
                  Custom MS Fabrication
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-md">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/70">
                    Project Discussion
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                    Start with the requirement.
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/80">
                    Whether you are planning a railing, gate, garden
                    structure, gazebo, roofing structure or another
                    project-specific MS fabrication requirement, use the form
                    to tell us about the work.
                  </p>
                </div>

                {/* Mini info row */}
                <div className="mt-7 grid grid-cols-2 border-t border-white/20 pt-5">
                  <div className="flex items-center gap-3">
                    <Phone
                      size={16}
                      className="text-white"
                      strokeWidth={2}
                    />

                    <div>
                      <p className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-white/60">
                        Call
                      </p>

                      <a
                        href="tel:+919649957698"
                        className="mt-0.5 block text-xs font-bold text-white hover:underline"
                      >
                        +91 96499 57698
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail
                      size={16}
                      className="text-white"
                      strokeWidth={2}
                    />

                    <div>
                      <p className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-white/60">
                        Email
                      </p>

                      <a
                        href="mailto:info@welldonemetalworks.com"
                        className="mt-0.5 block truncate text-xs font-bold text-white hover:underline"
                      >
                        info@welldonemetalworks.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust details */}
            <div className="mt-4 grid border border-wm-border sm:grid-cols-2">
              <div className="flex items-start gap-3 border-b border-wm-border p-5 sm:border-b-0 sm:border-r">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-wm-primary"
                />

                <div>
                  <p className="text-xs font-extrabold text-wm-heading">
                    Project-focused discussion
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-wm-muted">
                    Share the actual requirement instead of selecting from a
                    fixed product size.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-wm-primary"
                />

                <div>
                  <p className="text-xs font-extrabold text-wm-heading">
                    Ahmedabad & Gandhinagar
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-wm-muted">
                    Serving fabrication requirements across the local service
                    area.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="border border-wm-border bg-wm-surface-soft"
          >
            {/* Form Header */}
            <div className="flex items-center justify-between border-b border-wm-border px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-wm-surface-icon">
                  <ClipboardList
                    size={18}
                    className="text-wm-primary"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-muted">
                    Enquiry Form
                  </p>

                  <h3 className="mt-1 text-base font-extrabold text-wm-heading">
                    Send Your Requirement
                  </h3>
                </div>
              </div>

              <span className="hidden text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-border-blue sm:block">
                WM / 03
              </span>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input
                  label="Full Name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {/* Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-wm-heading"
                  >
                    Service Category
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="h-[48px] w-full appearance-none border border-wm-border bg-white px-4 text-sm text-wm-heading outline-none transition-all duration-200 focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
                  >
                    <option value="">Select Category</option>

                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-wm-heading"
                  >
                    Project Requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, approximate dimensions, location, application or any other useful details..."
                    className="w-full resize-y border border-wm-border bg-white px-4 py-3.5 text-sm leading-6 text-wm-heading outline-none transition-all duration-200 placeholder:text-wm-placeholder focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="group flex w-full items-center justify-center gap-3 bg-wm-primary px-5 py-4 text-xs font-extrabold text-white transition-all duration-200 hover:bg-wm-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.loading ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />

                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      <Send
                        size={17}
                        strokeWidth={2}
                      />

                      Submit Enquiry

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </div>

              {/* Success */}
              {status.success === true && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-start gap-3 border border-green-200 bg-green-50 px-4 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <div>
                    <p className="text-sm font-extrabold text-green-800">
                      Enquiry submitted successfully.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-green-700">
                      Thank you for sharing your requirement with Welldone
                      Metalworks.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error */}
              {status.success === false && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 border border-red-200 bg-red-50 px-4 py-4"
                >
                  <p className="text-sm font-extrabold text-red-800">
                    Unable to submit the enquiry.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-700">
                    Please try again or contact us directly by phone or email.
                  </p>
                </motion.div>
              )}

              {/* Footer */}
              <div className="mt-6 flex items-start gap-3 border-t border-wm-border pt-5">
                <ShieldCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-wm-primary"
                />

                <p className="text-[10px] leading-5 text-wm-muted">
                  Please provide as much project information as possible so the
                  requirement can be understood more clearly.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-wm-heading"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="h-[48px] w-full border border-wm-border bg-white px-4 text-sm text-wm-heading outline-none transition-all duration-200 placeholder:text-wm-placeholder focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
      />
    </div>
  );
}