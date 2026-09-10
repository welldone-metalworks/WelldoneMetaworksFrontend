"use client";

import { useState } from "react";
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
} from "lucide-react";
import { sendEnquiry } from "../../lib/api";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

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

    try {
      await sendEnquiry(formData);

      setStatus({
        loading: false,
        success: true,
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus({
        loading: false,
        success: false,
      });
    }
  };

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden border-y border-wm-border bg-wm-surface-soft py-10 sm:py-12 lg:py-14"
    >
      <div className="wm-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              04 / Send A Message
            </div>

            <h2 className="wm-heading mt-4 text-3xl sm:text-4xl lg:text-[46px]">
              Tell us about your{" "}
              <span className="text-wm-primary">
                project.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
            Use the form to share your contact details and project requirement.
            Include any information that can help us understand what you need.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          {/* LEFT CONTACT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <div className="border border-wm-border bg-white">
              <div className="border-b border-wm-border p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-wm-surface-icon">
                    <ClipboardList
                      size={18}
                      className="text-wm-primary"
                    />
                  </div>

                  <span className="text-[9px] font-extrabold tracking-[0.18em] text-wm-border-blue">
                    WM / 04
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-wm-heading">
                  Start a conversation.
                </h3>

                <p className="mt-3 text-sm leading-6 text-wm-muted">
                  Have a question, fabrication requirement or project idea?
                  Send us the details and start the discussion.
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <ContactLink
                  icon={Phone}
                  label="Phone"
                  value="+91 96499 57698"
                  href="tel:+919649957698"
                />

                <ContactLink
                  icon={Mail}
                  label="Email"
                  value="info@welldonemetalworks.com"
                  href="mailto:info@welldonemetalworks.com"
                />

                <ContactLink
                  icon={MapPin}
                  label="Location"
                  value="Sola Gham, Ahmedabad"
                />
              </div>
            </div>

            <div className="mt-4 border border-wm-border bg-white p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-wm-primary"
                />

                <div>
                  <p className="text-xs font-extrabold text-wm-heading">
                    Project information
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-wm-muted">
                    If available, include approximate dimensions, location,
                    application or reference details in your message.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="border border-wm-border bg-white"
          >
            <div className="flex items-center justify-between border-b border-wm-border px-6 py-5 sm:px-8">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                  Contact Form
                </p>

                <h3 className="mt-1 text-base font-extrabold text-wm-heading">
                  Send Your Message
                </h3>
              </div>

              <span className="hidden text-[9px] font-extrabold uppercase tracking-[0.15em] text-wm-muted sm:block">
                Required fields marked automatically
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

                <div className="md:col-span-2">
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-wm-heading"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, requirement, approximate dimensions, location or any other useful information..."
                    className="w-full resize-y border border-wm-border bg-white px-4 py-3.5 text-sm leading-6 text-wm-heading outline-none transition-all placeholder:text-wm-placeholder focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="group flex w-full items-center justify-center gap-3 bg-wm-primary px-5 py-4 text-xs font-extrabold text-white transition-colors hover:bg-wm-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.loading ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />

                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={17} />

                      Send Message

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </div>

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
                      Message sent successfully.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-green-700">
                      Thank you for contacting Welldone Metalworks.
                    </p>
                  </div>
                </motion.div>
              )}

              {status.success === false && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 border border-red-200 bg-red-50 px-4 py-4"
                >
                  <p className="text-sm font-extrabold text-red-800">
                    Unable to send the message.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-700">
                    Please try again or contact us directly by phone or email.
                  </p>
                </motion.div>
              )}
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
  value,
  onChange,
  placeholder,
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
        className="h-[48px] w-full border border-wm-border bg-white px-4 text-sm text-wm-heading outline-none transition-all placeholder:text-wm-placeholder focus:border-wm-primary focus:ring-2 focus:ring-wm-primary/10"
      />
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-wm-surface-icon">
        <Icon
          size={16}
          className="text-wm-primary"
        />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
          {label}
        </p>

        <p className="mt-1 break-words text-xs font-extrabold text-wm-heading">
          {value}
        </p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div className="flex items-center gap-3 border-b border-wm-border py-4 last:border-b-0">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="group flex items-center gap-3 border-b border-wm-border py-4 last:border-b-0"
    >
      {content}

      <ArrowUpRight
        size={14}
        className="ml-auto shrink-0 text-wm-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}