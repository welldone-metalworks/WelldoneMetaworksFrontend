"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.04) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "linear-gradient(to bottom right, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom right, black, transparent 75%)",
        }}
      />

      <div className="wm-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="border border-wm-border bg-wm-surface-soft"
        >
          <div className="grid lg:grid-cols-[1fr_370px]">
            {/* Main */}
            <div className="border-b border-wm-border p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="wm-eyebrow">
                <span className="h-px w-8 bg-wm-primary" />
                06 / Let&apos;s Connect
              </div>

              <h2 className="wm-heading mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-[48px]">
                Have a project in mind?{" "}
                <span className="text-wm-primary">
                  Start the conversation.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
                Tell Welldone Metalworks what you are looking to build and
                share the details that matter to your project.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 bg-wm-primary px-5 py-3.5 text-xs font-extrabold text-white transition-colors hover:bg-wm-primary-dark"
                >
                  Send a Message

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="tel:+919649957698"
                  className="inline-flex items-center gap-2 border border-wm-border bg-white px-5 py-3.5 text-xs font-extrabold text-wm-heading transition-colors hover:border-wm-primary hover:text-wm-primary"
                >
                  <Phone size={15} />

                  Call Us
                </a>
              </div>
            </div>

            {/* Direct contact */}
            <div className="p-7 sm:p-10 lg:p-8">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                Direct Contact
              </p>

              <div className="mt-6">
                <a
                  href="tel:+919649957698"
                  className="group flex items-start gap-4 border-b border-wm-border pb-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-wm-surface-icon">
                    <Phone
                      size={16}
                      className="text-wm-primary"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-extrabold text-wm-heading group-hover:text-wm-primary">
                      +91 96499 57698
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@welldonemetalworks.com"
                  className="group flex items-start gap-4 pt-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-wm-surface-icon">
                    <Mail
                      size={16}
                      className="text-wm-primary"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-extrabold text-wm-heading group-hover:text-wm-primary">
                      info@welldonemetalworks.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-7 border-t border-wm-border pt-5">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
                  Service Area
                </p>

                <p className="mt-2 text-sm font-extrabold text-wm-heading">
                  Ahmedabad & Gandhinagar
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}