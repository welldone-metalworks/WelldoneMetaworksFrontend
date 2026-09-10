"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    title: "+91 96499 57698",
    description: "Discuss your fabrication requirement.",
    href: "tel:+919649957698",
  },
  {
    icon: Mail,
    label: "Email",
    title: "info@welldonemetalworks.com",
    description: "Send your project details by email.",
    href: "mailto:info@welldonemetalworks.com",
  },
  {
    icon: MapPin,
    label: "Office",
    title: "Sola Gham, Ahmedabad",
    description: "Ahmedabad, Gujarat.",
    href: null,
  },
  {
    icon: Clock3,
    label: "Working Hours",
    title: "9:00 AM – 7:00 PM",
    description: "Contact us during working hours.",
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <section
      id="contact-information"
      className="border-b border-wm-border bg-wm-surface-soft py-10 sm:py-12"
    >
      <div className="wm-container">
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
              02 / Contact Information
            </div>

            <h2 className="wm-heading mt-4 text-3xl sm:text-4xl">
              Connect with{" "}
              <span className="text-wm-primary">
                Welldone Metalworks.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
            Choose the contact method that works best for you. For a detailed
            project requirement, you can also use the enquiry form below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid border border-wm-border bg-white sm:grid-cols-2 lg:grid-cols-4"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            const content = (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-wm-surface-icon">
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />
                  </div>

                  <span className="text-[9px] font-extrabold tracking-[0.16em] text-wm-border-blue">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                  {contact.label}
                </p>

                <p className="mt-2 break-words text-sm font-extrabold leading-6 text-wm-heading">
                  {contact.title}
                </p>

                <p className="mt-2 text-[11px] leading-5 text-wm-muted">
                  {contact.description}
                </p>

                {contact.href && (
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-extrabold text-wm-primary">
                    Contact directly

                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                )}
              </>
            );

            if (contact.href) {
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative p-6 transition-colors hover:bg-wm-surface-soft ${
                    index < contacts.length - 1
                      ? "border-b border-wm-border sm:border-r lg:border-b-0"
                      : ""
                  }`}
                >
                  {content}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-wm-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              );
            }

            return (
              <motion.div
                key={contact.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`group relative p-6 transition-colors hover:bg-wm-surface-soft ${
                  index < contacts.length - 1
                    ? "border-b border-wm-border sm:border-r lg:border-b-0"
                    : ""
                }`}
              >
                {content}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-wm-primary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}