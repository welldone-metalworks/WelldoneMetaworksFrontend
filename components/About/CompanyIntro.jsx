"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Ruler,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

/*
|--------------------------------------------------------------------------
| IMAGE
|--------------------------------------------------------------------------
| Replace this path with your actual fabrication image.
|--------------------------------------------------------------------------
*/

const ABOUT_IMAGE = "/images/about-fabrication.jpg";

const points = [
  "Custom mild-steel fabrication for residential and commercial requirements",
  "Dimensions and fabrication planned around the actual project",
  "Site measurement available for suitable projects",
  "Installation support for suitable fabricated works",
];

const capabilities = [
  {
    icon: Wrench,
    label: "Core focus",
    value: "Custom MS Fabrication",
  },
  {
    icon: Ruler,
    label: "Available",
    value: "Site Measurement",
  },
  {
    icon: MapPin,
    label: "Local coverage",
    value: "Ahmedabad & Gandhinagar",
  },
];

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,135,197,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,135,197,0.035) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent 72%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 72%)",
        }}
      />

      <div className="wm-container relative">
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-5 border-b border-wm-border pb-7 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="wm-eyebrow">
              <span className="h-px w-8 bg-wm-primary" />
              01 / Who We Are
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-wm-muted">
              Understanding the requirement comes first. The fabrication
              follows the project.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-muted">
              Welldone Metalworks
            </p>

            <p className="mt-1 text-xs font-semibold text-wm-heading">
              Custom MS Fabrication
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN EDITORIAL LAYOUT
        ===================================================== */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          {/* ===================================================
              LEFT — IMAGE COMPOSITION
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden border border-wm-border-blue bg-wm-surface-soft p-2">
                <div className="relative aspect-[0.88/1] overflow-hidden bg-wm-surface-soft sm:aspect-[0.95/1] lg:aspect-[0.88/1]">
                  <Image
                    src={ABOUT_IMAGE}
                    alt="Custom mild-steel fabrication work by Welldone Metalworks"
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wm-navy/75 via-wm-navy/10 to-transparent" />

                  {/* Image information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-px w-6 bg-wm-primary-light" />

                          <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-wm-primary-light">
                            Fabrication
                          </span>
                        </div>

                        <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                          Made around the project.
                        </h3>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm sm:flex">
                        <Wrench
                          size={18}
                          className="text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  IMAGE FOOTER
              ================================================= */}
              <div className="grid grid-cols-2 border-x border-b border-wm-border-blue bg-wm-surface-soft">
                <div className="border-r border-wm-border-blue px-4 py-4">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                    Material
                  </p>

                  <p className="mt-1.5 text-sm font-extrabold text-wm-heading">
                    Mild Steel
                  </p>
                </div>

                <div className="px-4 py-4">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                    Approach
                  </p>

                  <p className="mt-1.5 text-sm font-extrabold text-wm-heading">
                    Requirement-led
                  </p>
                </div>
              </div>

              {/* Technical side label */}
              <div className="absolute -left-3 top-16 hidden -translate-x-full lg:block">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-wm-muted [writing-mode:vertical-rl]">
                  Custom Fabrication
                </span>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT — CONTENT
          =================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="lg:pt-2"
          >
            {/* Small label */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-wm-primary"
            >
              The company
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="wm-heading mt-4 max-w-2xl text-3xl leading-[1.1] sm:text-4xl lg:text-[48px]"
            >
              Fabrication that starts with the{" "}
              <span className="text-wm-primary">actual requirement.</span>
            </motion.h2>

            {/* Lead statement */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-7 max-w-2xl border-l-2 border-wm-primary pl-5"
            >
              <p className="text-base font-semibold leading-7 text-wm-heading sm:text-lg sm:leading-8">
                Welldone Metalworks provides custom mild-steel fabrication for
                residential, commercial and practical outdoor requirements
                across Ahmedabad and Gandhinagar.
              </p>
            </motion.div>

            {/* =================================================
                COMPANY STORY
            ================================================= */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-wm-body sm:text-[15px]"
            >
              <p>
                Every fabrication requirement comes with its own dimensions,
                available space and intended use. A gate, railing, shed,
                gazebo or pergola may look straightforward from the outside,
                but the details of the site can influence how the work needs
                to be planned and fabricated.
              </p>

              <p>
                Our approach is therefore based on understanding those details
                first. Depending on the project, the process can include
                discussing the requirement, checking dimensions, carrying out
                site measurement where suitable, planning the fabrication,
                producing the required mild-steel components and supporting
                installation at the site.
              </p>

              <p>
                The objective is simple: create metalwork that is appropriate
                for the actual project instead of forcing a standard solution
                into a space that may require something different.
              </p>
            </motion.div>


            {/* =================================================
                SERVICE LINK
            ================================================= */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-2"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-extrabold text-wm-primary transition-colors hover:text-wm-primary-dark"
              >
                Explore our fabrication services

                <ArrowUpRight
                  size={16}
                  strokeWidth={2.3}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            CAPABILITY BAR
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-6 border-y border-wm-border bg-wm-surface-soft lg:mt-20"
        >
          <div className="grid sm:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  className={`flex items-center gap-4 px-5 py-6 sm:px-7 ${
                    index < capabilities.length - 1
                      ? "border-b border-wm-border sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-wm-surface-icon">
                    <Icon
                      size={19}
                      strokeWidth={2}
                      className="text-wm-primary"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
                      {item.label}
                    </p>

                    <p className="mt-1.5 text-sm font-extrabold text-wm-heading">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}