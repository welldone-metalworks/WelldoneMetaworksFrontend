"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  MapPin,
  MessageSquare,
  Ruler,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Share Your Requirement",
    text: "Tell us what you are looking to fabricate and provide the basic project details.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Discuss The Project",
    text: "Discuss the intended application, design requirement and practical considerations.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Dimensions & Details",
    text: "Project dimensions, available space and other relevant information can be discussed.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Fabrication Planning",
    text: "The fabrication approach is considered around the individual project requirement.",
  },
  {
    number: "05",
    icon: MapPin,
    title: "Installation",
    text: "Where applicable, installation requirements can be coordinated at the project site.",
  },
];

export default function EnquiryProcess() {
  return (
    <section className="relative overflow-hidden border-y border-wm-border bg-wm-surface-soft py-10 sm:py-12">
      <div className="wm-container">
        {/* Header */}
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
              04 / How It Starts
            </div>

            <h2 className="wm-heading mt-4 text-3xl sm:text-4xl lg:text-[46px]">
              From requirement to{" "}
              <span className="text-wm-primary">fabrication.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
            Every fabrication requirement can have different dimensions,
            surroundings and functional considerations. The enquiry process
            begins by understanding what the project actually needs.
          </p>
        </motion.div>

        {/* Process */}
        <div className="mt-12 border border-wm-border bg-white">
          <div className="grid lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className={`group relative p-6 sm:p-7 ${
                    index < steps.length - 1
                      ? "border-b border-wm-border lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-[0.18em] text-wm-primary">
                      {step.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center bg-wm-surface-icon">
                      <Icon
                        size={16}
                        strokeWidth={2}
                        className="text-wm-primary"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-sm font-extrabold leading-5 text-wm-heading">
                    {step.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-3 text-xs leading-6 text-wm-muted">
                    {step.text}
                  </p>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <span className="absolute right-[-4px] top-1/2 z-10 hidden h-2 w-2 -translate-y-1/2 bg-wm-primary lg:block" />
                  )}

                  {/* Bottom accent */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-wm-primary transition-all duration-300 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-7 flex flex-col gap-4 border-l-2 border-wm-primary bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-3xl text-sm font-bold leading-6 text-wm-heading">
            The objective is simple: understand the requirement first and
            develop the fabrication around the project.
          </p>

          <a
            href="#enquiry-form"
            className="shrink-0 text-xs font-extrabold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Start an enquiry →
          </a>
        </motion.div>
      </div>
    </section>
  );
}