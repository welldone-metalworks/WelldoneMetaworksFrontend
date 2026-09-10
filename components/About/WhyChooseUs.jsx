"use client";

import {
  CheckCircle2,
  MapPin,
  Ruler,
  Wrench,
  Layers3,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    icon: Wrench,
    title: "Custom-Focused",
    description:
      "Fabrication is planned around the actual requirement, dimensions and intended application rather than a fixed standard template.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "MS Specialization",
    description:
      "Welldone Metalworks focuses on mild-steel fabrication for the services currently offered.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Site Measurement",
    description:
      "Site measurement is available for suitable projects where dimensions and site conditions need to be assessed.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Clear Requirements",
    description:
      "Important project details can be discussed and confirmed before fabrication begins.",
  },
  {
    number: "05",
    icon: MapPin,
    title: "Local Coverage",
    description:
      "The primary service area is Ahmedabad and Gandhinagar, subject to the location and requirements of the individual project.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Installation Support",
    description:
      "Suitable fabricated works can be supported with on-site installation after fabrication.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10 lg:py-12">
      <div className="wm-container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Why Welldone
            </div>

            <h2 className="wm-heading mt-5 text-3xl leading-tight sm:text-4xl">
              Built around the requirement, not a standard template.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-wm-muted">
              For custom fabrication, the details of the project matter.
              These are the practical principles that shape how Welldone
              Metalworks approaches its work.
            </p>

            <div className="mt-8 border-l-2 border-wm-primary bg-wm-surface-blue px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-wm-primary">
                Material scope
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-wm-heading">
                Mild Steel (MS) fabrication only. Stainless steel and aluminum
                fabrication are not currently offered.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="border-t border-wm-border">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="group grid gap-5 border-b border-wm-border py-6 sm:grid-cols-[55px_45px_1fr] sm:items-start"
                >
                  <div className="text-xs font-extrabold tracking-[0.16em] text-wm-primary">
                    {reason.number}
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-wm-surface-icon transition-colors duration-200 group-hover:bg-wm-surface-blue">
                    <Icon
                      size={18}
                      className="text-wm-primary"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-wm-heading">
                      {reason.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-wm-muted">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}