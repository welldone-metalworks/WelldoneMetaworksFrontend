"use client";

import {
  Check,
  MapPin,
  Ruler,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Wrench,
    title: "Custom MS fabrication",
    text: "Fabrication planned around the individual project requirement.",
  },
  {
    icon: Ruler,
    title: "Project dimensions",
    text: "Dimensions and available space are considered before fabrication.",
  },
  {
    icon: MapPin,
    title: "Local service area",
    text: "Serving residential and commercial requirements across Ahmedabad and Gandhinagar.",
  },
];

const considerations = [
  "Actual project dimensions",
  "Available space and layout",
  "Intended use",
  "Site conditions",
];

const applications = [
  "Garden Structures",
  "Gazebo Structures",
  "Railings",
  "Heavy Conventional Work",
  "Polycarbonate Roofing",
];

export default function GallerySeoContent() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          SUBTLE TECHNICAL BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-60"
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
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="border-b border-wm-border pb-9"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            {/* Heading */}
            <div>
              <div className="wm-eyebrow">
                <span className="h-px w-8 bg-wm-primary" />
                02 / About The Work
              </div>

              <h2 className="wm-heading mt-5 max-w-3xl text-3xl leading-[1.08] sm:text-4xl lg:text-[46px]">
                Custom MS fabrication projects across{" "}
                <span className="text-wm-primary">
                  Ahmedabad & Gandhinagar.
                </span>
              </h2>
            </div>

            {/* Intro */}
            <div className="max-w-3xl">
              <p className="text-sm leading-7 text-wm-body sm:text-[15px]">
                Welldone Metalworks showcases a range of custom mild-steel
                fabrication work completed for residential, commercial and
                practical outdoor requirements across Ahmedabad and Gandhinagar.
                Our gallery brings together different types of metalwork to show
                how fabrication can be adapted to the dimensions, available
                space and intended use of an individual project.
              </p>

              <p className="mt-5 text-sm leading-7 text-wm-body sm:text-[15px]">
                Our work includes garden structures, gazebo structures,
                railings, heavy conventional fabrication and polycarbonate
                roofing structures. Each category represents a different type
                of fabrication requirement, and the final approach can vary
                depending on the site, dimensions, layout and purpose of the
                work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            HIGHLIGHTS
        ========================================================= */}
        <div className="mt-8 grid border border-wm-border sm:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className={`group p-6 sm:p-7 ${
                  index < highlights.length - 1
                    ? "border-b border-wm-border sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-wm-border bg-wm-surface-icon">
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />
                  </div>

                  <span className="text-[10px] font-extrabold tracking-[0.18em] text-wm-border-blue">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-extrabold text-wm-heading">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-wm-muted">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            MAIN CONTENT AREA
        ========================================================= */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* =======================================================
              LEFT INFORMATION PANEL
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
          >
            <div className="border border-wm-border bg-wm-surface-soft">
              <div className="border-b border-wm-border px-6 py-5 sm:px-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                  Project Considerations
                </p>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-wm-heading">
                  The project determines the fabrication.
                </h3>
              </div>

              <div className="px-6 py-6 sm:px-7">
                <div className="border-l-2 border-wm-primary pl-5">
                  <p className="text-sm font-semibold leading-7 text-wm-heading">
                    Custom metalwork starts with understanding what needs to be
                    built and where it needs to work.
                  </p>
                </div>

                <div className="mt-7">
                  {considerations.map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 py-3.5 ${
                        index < considerations.length - 1
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

                      <span className="text-xs font-bold text-wm-heading">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service area panel */}
            <div className="mt-4 border border-wm-border bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-wm-surface-icon">
                  <MapPin
                    size={17}
                    className="text-wm-primary"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                    Service Area
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-wm-heading">
                    Ahmedabad & Gandhinagar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              ARTICLE CONTENT
          ======================================================= */}
          <motion.article
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="space-y-7 text-sm leading-7 text-wm-body sm:text-[15px]">
              <p>
                Custom fabrication is different from selecting a standard
                ready-made product. A railing may need to follow an existing
                boundary or staircase. A garden structure may need to fit
                within a specific outdoor area. A gazebo or roofing structure
                may need to work with the available space and existing
                surroundings. These practical considerations can influence the
                way the fabrication is planned and installed.
              </p>

              <p>
                Welldone Metalworks focuses specifically on mild-steel
                fabrication. Depending on the project, the process may include
                understanding the requirement, checking dimensions, carrying
                out site measurement where suitable, planning the fabrication,
                producing the required components and supporting installation
                at the site.
              </p>

              {/* Inline emphasis */}
              <div className="border-y border-wm-border bg-wm-surface-soft px-5 py-6 sm:px-7">
                <p className="text-base font-bold leading-7 text-wm-heading sm:text-lg">
                  The objective is not to force every project into the same
                  format. The fabrication is planned around what the project
                  actually requires.
                </p>
              </div>

              <p>
                The photographs in this gallery provide a practical view of the
                types of metalwork we undertake. They also help customers
                understand the range of applications possible with custom MS
                fabrication. The appearance, dimensions and construction
                approach of a finished project can vary according to the
                individual requirement rather than following one fixed design.
              </p>

              <p>
                For customers looking for metal fabrication in Ahmedabad or
                Gandhinagar, the gallery provides a visual starting point for
                discussing a project. Whether the requirement involves a gate,
                railing, garden structure, gazebo, roofing structure or another
                site-specific MS fabrication requirement, the important first
                step is understanding what needs to be built and where it needs
                to be installed.
              </p>

              <p>
                Our approach remains centred on practical fabrication:
                understand the requirement, work with the actual dimensions and
                develop the metalwork around the project. This allows the
                discussion to begin with the customer's requirement instead of
                forcing every project into a standard product category.
              </p>

              <p>
                The gallery therefore represents more than a collection of
                finished photographs. It provides examples of different
                fabrication applications and demonstrates the variety possible
                when mild-steel work is planned around a specific project.
                Every requirement can have different dimensions, surroundings
                and functional considerations, which is why the fabrication
                process starts with understanding the work itself.
              </p>
            </div>
          </motion.article>
        </div>

        {/* =========================================================
            APPLICATION STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-14 border-y border-wm-border"
        >
          <div className="grid sm:grid-cols-[190px_1fr]">
            <div className="border-b border-wm-border bg-wm-surface-soft px-5 py-5 sm:border-b-0 sm:border-r sm:px-6">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary">
                Applications
              </p>

              <p className="mt-1 text-xs text-wm-muted">
                Areas represented in our gallery
              </p>
            </div>

            <div className="flex flex-wrap">
              {applications.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 border-b border-wm-border px-4 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-wm-primary" />

                  <span className="text-[11px] font-bold text-wm-heading">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            SMALL NAVIGATION
        ========================================================= */}
        <div className="mt-7 flex justify-end">
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 text-xs font-extrabold text-wm-primary transition-colors hover:text-wm-primary-dark"
          >
            Back to project gallery

            <ArrowUpRight
              size={15}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}