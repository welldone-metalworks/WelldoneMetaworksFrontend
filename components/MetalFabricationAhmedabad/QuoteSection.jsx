"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  category: "",
  message: "",
};

const categories = [
  "Custom MS Metal Fabrication",
  "MS Gates",
  "MS Railings",
  "MS Sheds",
  "MS Gazebos",
  "MS Pergolas",
  "MS Staircases & Handrails",
  "MS Grills & Safety Fabrication",
  "MS Partitions & Architectural Metalwork",
  "Custom MS Structural Fabrication",
  "Other MS Fabrication Requirement",
];

/* ============================================================
   ANALYTICS
   ============================================================ */

const trackEvent = (event, params = {}) => {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", event, params);
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event,
      page_type: "local_landing",
      page_path: window.location.pathname,
      ...params,
    });
  }
};

/* ============================================================
   COMPONENT
   ============================================================ */

export default function QuoteSection() {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState({
    loading: false,
    success: null,
  });

  const [formStarted, setFormStarted] = useState(false);

  /* ============================================================
     HANDLE INPUT
     ============================================================ */

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

  /* ============================================================
     FORM START TRACKING
     ============================================================ */

  const handleFormFocus = () => {
    if (formStarted) return;

    setFormStarted(true);

    trackEvent("contact_form_start", {
      form_name: "metal_fabrication_quote",
      form_location: "metal_fabrication_ahmedabad",
    });
  };

  /* ============================================================
     SUBMIT FORM
     ============================================================ */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status.loading) return;

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
      /* ========================================================
         EMAILJS
         Existing working configuration retained
         ======================================================== */

      await emailjs.send(
        "service_d3cmn09",
        "template_896zkcf",
        templateParams,
        "VNkGJBgBYKU8OjweK"
      );

      /* ========================================================
         GOOGLE SHEETS
         Existing integration retained
         ======================================================== */

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

      /* ========================================================
         SUCCESS TRACKING
         ======================================================== */

      trackEvent("enquiry_submit", {
        form_name: "metal_fabrication_quote",
        form_location: "metal_fabrication_ahmedabad",
        method: "emailjs",
      });

      trackEvent("generate_lead", {
        method: "form",
        form_name: "metal_fabrication_quote",
      });

      trackEvent("quote_request", {
        form_name: "metal_fabrication_quote",
      });

      setStatus({
        loading: false,
        success: true,
      });

      setFormData(initialFormData);
      setFormStarted(false);
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setStatus({
        loading: false,
        success: false,
      });
    }
  };

  /* ============================================================
     JSX
     ============================================================ */

  return (
    <section
      id="enquiry-form"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* ========================================================
         BACKGROUND
         ======================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--wm-primary-light)]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[var(--wm-primary)]/10 blur-3xl" />

      <div className="wm-container relative z-10">
        {/* ======================================================
           HEADER
           ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="wm-eyebrow flex items-center justify-center gap-2">
            <span className="h-px w-7 bg-[var(--wm-primary)]" />
            Project Enquiry
            <span className="h-px w-7 bg-[var(--wm-primary)]" />
          </div>

          <h2 className="wm-heading mt-4 text-3xl leading-[1.08] sm:text-4xl lg:text-[52px]">
            Tell us what you
            <span className="text-[var(--wm-primary)]">
              {" "}
              need to fabricate.
            </span>
          </h2>

          <p className="wm-body mx-auto mt-5 max-w-2xl text-sm sm:text-base">
            Share your fabrication requirement, project location, approximate
            dimensions or reference details. We can then understand the scope
            of your MS fabrication requirement.
          </p>
        </motion.div>

        {/* ======================================================
           MAIN PANEL
           ====================================================== */}

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          {/* ====================================================
             LEFT INFORMATION
             ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col"
          >
            {/* Image panel */}
            <div className="group relative min-h-[510px] overflow-hidden rounded-[26px] bg-[var(--wm-navy)] shadow-[var(--wm-shadow-lg)]">
              <Image
                src="/Banner/banner02.webp"
                alt="MS metal fabrication work by Welldone Metalworks"
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--wm-navy-dark)] via-[var(--wm-navy)]/40 to-[var(--wm-navy)]/10" />

              {/* Technical grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "34px 34px",
                }}
              />

              {/* Top label */}
              <div className="absolute left-5 right-5 top-5 sm:left-6 sm:right-6 sm:top-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--wm-primary)] shadow-lg">
                      <Wrench size={18} />
                    </div>

                    <div className="rounded-xl border border-white/15 bg-[var(--wm-navy-dark)]/70 px-3.5 py-2.5 backdrop-blur-md">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                        Fabrication
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-white">
                        MS Metalwork
                      </p>
                    </div>
                  </div>

                  <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/70 backdrop-blur-md sm:block">
                    WM / 01
                  </span>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-primary-light)]">
                  Start With The Requirement
                </p>

                <h3 className="mt-2 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
                  Let&apos;s discuss your project.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
                  Share the application, approximate dimensions, location and
                  any reference design that can help explain your requirement.
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="mt-4 grid divide-y overflow-hidden rounded-2xl border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-sm)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <a
                href="tel:+919649957698"
                onClick={() =>
                  trackEvent("click_phone", {
                    cta_location: "quote_section",
                  })
                }
                className="group flex items-center gap-3 p-4 transition hover:bg-[var(--wm-surface-soft)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)] transition group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                  <Phone size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Call Us
                  </span>

                  <span className="mt-1 block text-sm font-extrabold text-[var(--wm-heading)]">
                    +91 96499 57698
                  </span>
                </span>
              </a>

              <a
                href="mailto:info@welldonemetalworks.com"
                onClick={() =>
                  trackEvent("click_email", {
                    cta_location: "quote_section",
                  })
                }
                className="group flex items-center gap-3 p-4 transition hover:bg-[var(--wm-surface-soft)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)] transition group-hover:bg-[var(--wm-primary)] group-hover:text-white">
                  <Mail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    Email Us
                  </span>

                  <span className="mt-1 block truncate text-xs font-extrabold text-[var(--wm-heading)]">
                    info@welldonemetalworks.com
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          {/* ====================================================
             RIGHT FORM
             ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[26px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-lg)]"
          >
            {/* Form header */}
            <div className="border-b border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[var(--wm-primary)]">
                    <ClipboardList size={20} />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--wm-muted)]">
                      Enquiry Form
                    </p>

                    <h3 className="mt-1 text-base font-extrabold text-[var(--wm-heading)] sm:text-lg">
                      Send Your Requirement
                    </h3>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-[var(--wm-border)] bg-white px-3 py-1.5 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--wm-success)]" />

                  <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[var(--wm-muted)]">
                    Online Enquiry
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              onFocus={handleFormFocus}
              className="p-6 sm:p-8 lg:p-9"
            >
              {/* Fields */}
              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="Full Name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />

                {/* Category */}
                <div>
                  <label
                    htmlFor="wm-category"
                    className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--wm-heading)]"
                  >
                    Service Category
                  </label>

                  <div className="relative">
                    <select
                      id="wm-category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="h-[50px] w-full appearance-none rounded-xl border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-4 pr-11 text-sm text-[var(--wm-heading)] outline-none transition-all duration-200 focus:border-[var(--wm-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--wm-primary)]/10"
                    >
                      <option value="">Select a service</option>

                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>

                    <ArrowRight
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[var(--wm-muted)]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="wm-message"
                    className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--wm-heading)]"
                  >
                    Project Requirement
                  </label>

                  <textarea
                    id="wm-message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, approximate dimensions, location, application or reference design..."
                    className="w-full resize-y rounded-xl border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-4 py-3.5 text-sm leading-6 text-[var(--wm-heading)] outline-none transition-all duration-200 placeholder:text-[var(--wm-placeholder)] focus:border-[var(--wm-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--wm-primary)]/10"
                  />
                </div>
              </div>

              {/* Helpful information */}
              <div className="mt-5 rounded-2xl border border-[var(--wm-border)] bg-[var(--wm-surface-blue)] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--wm-primary)] shadow-[var(--wm-shadow-sm)]">
                    <Ruler size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-[var(--wm-heading)]">
                      Helpful project details
                    </p>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {[
                        "Project location",
                        "Approximate dimensions",
                        "Required fabrication",
                        "Reference design",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-[var(--wm-primary)]"
                          />

                          <span className="text-xs text-[var(--wm-body)]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* MS notice */}
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] p-4">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--wm-primary)]"
                />

                <p className="text-xs leading-5 text-[var(--wm-body)]">
                  <strong className="text-[var(--wm-heading)]">
                    MS fabrication only:
                  </strong>{" "}
                  Welldone Metalworks provides mild-steel fabrication.
                  Stainless Steel and Aluminum fabrication are not offered.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="group mt-6 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-[var(--wm-primary)] px-6 text-sm font-extrabold text-white shadow-[0_12px_32px_rgba(22,135,197,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--wm-primary-dark)] hover:shadow-[0_16px_40px_rgba(22,135,197,0.25)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-70"
              >
                {status.loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />

                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    <Send size={17} />

                    Submit Enquiry

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition group-hover:bg-white/20">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </>
                )}
              </button>

              {/* Success */}
              {status.success === true && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2
                        size={18}
                        className="text-green-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-green-800">
                        Enquiry submitted successfully.
                      </p>

                      <p className="mt-1 text-xs leading-5 text-green-700">
                        Thank you for sharing your requirement with Welldone
                        Metalworks. We have received your enquiry.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error */}
              {status.success === false && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <Phone
                        size={17}
                        className="text-red-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold text-red-800">
                        Unable to submit the enquiry.
                      </p>

                      <p className="mt-1 text-xs leading-5 text-red-700">
                        Please try again. If the issue continues, contact
                        Welldone Metalworks directly by phone or email.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Footer */}
              <div className="mt-6 flex items-start gap-3 border-t border-[var(--wm-border-light)] pt-5">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--wm-primary)]"
                />

                <p className="text-[10px] leading-5 text-[var(--wm-muted)]">
                  Serving suitable custom MS fabrication requirements across
                  Ahmedabad, with Gandhinagar included in the core service
                  area.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ======================================================
           BOTTOM PROCESS STRIP
           ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-sm)]"
        >
          <div className="grid md:grid-cols-3">
            <InfoStep
              number="01"
              title="Share Requirement"
              description="Tell us what you need fabricated."
            />

            <InfoStep
              number="02"
              title="Discuss Project"
              description="Provide location, dimensions and details."
              bordered
            />

            <InfoStep
              number="03"
              title="Move Forward"
              description="Proceed based on the project requirement."
              bordered
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==============================================================
   INPUT
   ============================================================== */

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <div>
      <label
        htmlFor={`wm-${name}`}
        className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-[var(--wm-heading)]"
      >
        {label}
      </label>

      <input
        id={`wm-${name}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="h-[50px] w-full rounded-xl border border-[var(--wm-border)] bg-[var(--wm-surface-soft)] px-4 text-sm text-[var(--wm-heading)] outline-none transition-all duration-200 placeholder:text-[var(--wm-placeholder)] focus:border-[var(--wm-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--wm-primary)]/10"
      />
    </div>
  );
}

/* ==============================================================
   BOTTOM INFO STEP
   ============================================================== */

function InfoStep({
  number,
  title,
  description,
  bordered = false,
}) {
  return (
    <div
      className={`flex items-center gap-4 p-5 sm:p-6 ${
        bordered
          ? "border-t border-[var(--wm-border)] md:border-l md:border-t-0"
          : ""
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--wm-surface-icon)] text-[10px] font-black text-[var(--wm-primary)]">
        {number}
      </span>

      <div>
        <p className="text-xs font-extrabold text-[var(--wm-heading)]">
          {title}
        </p>

        <p className="mt-1 text-[11px] leading-5 text-[var(--wm-muted)]">
          {description}
        </p>
      </div>
    </div>
  );
}