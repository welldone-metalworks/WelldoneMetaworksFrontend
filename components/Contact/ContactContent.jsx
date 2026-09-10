"use client";

import { motion } from "framer-motion";
import {
  Check,
  MapPin,
  Ruler,
  Wrench,
} from "lucide-react";

const points = [
  "Custom mild-steel fabrication requirements",
  "Project dimensions and available space",
  "Residential and commercial applications",
  "Ahmedabad and Gandhinagar service requirements",
];

export default function ContactContent() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12">
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.035) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 75%)",
        }}
      />

      <div className="wm-container relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 border-b border-wm-border pb-9 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              03 / Talk To Us
            </div>

            <h2 className="wm-heading mt-5 text-3xl leading-tight sm:text-4xl lg:text-[46px]">
              Contact us about your{" "}
              <span className="text-wm-primary">
                fabrication requirement.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-wm-body sm:text-[15px]">
            The right fabrication approach starts with understanding the
            project. Whether you already have a clear design or are beginning
            with a practical requirement, contacting us is the first step
            towards discussing the work.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <div className="border border-wm-border bg-wm-surface-soft">
              <div className="border-b border-wm-border px-6 py-5 sm:px-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                  Useful Information
                </p>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-wm-heading">
                  What you can discuss with us.
                </h3>
              </div>

              <div className="px-6 py-5 sm:px-7">
                {points.map((point, index) => (
                  <div
                    key={point}
                    className={`flex items-center gap-3 py-4 ${
                      index < points.length - 1
                        ? "border-b border-wm-border"
                        : ""
                    }`}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-wm-surface-icon">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="text-wm-primary"
                      />
                    </div>

                    <span className="text-xs font-bold leading-5 text-wm-heading">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid border border-wm-border bg-white sm:grid-cols-3">
              <MiniPoint
                icon={Wrench}
                title="Fabrication"
                text="Mild Steel"
              />

              <MiniPoint
                icon={Ruler}
                title="Dimensions"
                text="Project specific"
                border
              />

              <MiniPoint
                icon={MapPin}
                title="Area"
                text="Ahmedabad"
              />
            </div>
          </motion.div>

          {/* RIGHT ARTICLE */}
          <motion.article
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="space-y-6 text-sm leading-7 text-wm-body sm:text-[15px]">
              <p>
                Welldone Metalworks is available for customers looking to
                discuss custom mild-steel fabrication requirements in
                Ahmedabad and Gandhinagar. Our work is focused on practical
                metal fabrication for projects where the dimensions,
                application and available space can vary from one requirement
                to another.
              </p>

              <p>
                If you are planning a gate, railing, garden structure, gazebo,
                roofing structure or another custom MS fabrication requirement,
                you can contact us with the basic details of the work. Sharing
                the intended use, approximate dimensions, project location and
                any available reference information can make the initial
                discussion more useful.
              </p>

              <div className="border-y border-wm-border bg-wm-surface-soft px-5 py-6 sm:px-7">
                <p className="text-base font-bold leading-7 text-wm-heading sm:text-lg">
                  A good project discussion starts with the actual requirement,
                  not a standard product description.
                </p>
              </div>

              <p>
                Custom fabrication can involve different considerations
                depending on where the metalwork will be installed. A railing
                may need to follow an existing staircase or boundary. A garden
                structure may need to fit within a particular outdoor area.
                Roofing and gazebo structures may need to work with existing
                surroundings and available dimensions. Discussing these
                details helps establish a clearer understanding of the work.
              </p>

              <p>
                Welldone Metalworks focuses on mild-steel fabrication and can
                discuss suitable project requirements, dimensions and
                installation considerations where applicable. The purpose of
                the contact process is to understand what needs to be built,
                where it needs to be installed and what the customer expects
                from the finished fabrication.
              </p>

              <p>
                Customers in Ahmedabad and Gandhinagar can contact us directly
                by phone or email, or use the enquiry form on this website.
                For projects that require more information, you can include
                photographs, reference ideas, approximate measurements or a
                description of the intended application when discussing the
                requirement.
              </p>

              <p>
                Whether the project is residential or commercial, the initial
                conversation should focus on the actual work involved. This
                allows the requirement to be discussed clearly before moving
                towards fabrication planning and, where applicable, site
                measurement and installation.
              </p>

              <p>
                If you already have a project in mind, get in touch with
                Welldone Metalworks and share the details. We serve Ahmedabad
                and Gandhinagar with a practical approach to custom mild-steel
                fabrication and project-specific metalwork.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function MiniPoint({
  icon: Icon,
  title,
  text,
  border,
}) {
  return (
    <div
      className={`p-5 ${
        border
          ? "border-y border-wm-border sm:border-y-0 sm:border-x"
          : ""
      }`}
    >
      <Icon
        size={17}
        className="text-wm-primary"
      />

      <p className="mt-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-wm-muted">
        {title}
      </p>

      <p className="mt-1 text-xs font-extrabold text-wm-heading">
        {text}
      </p>
    </div>
  );
}