"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Maximize2 } from "lucide-react";

const projects = [
  {
    image: "/gazebo/gazebo_service.webp",
    title: "Luxury Gazebo",
    category: "Outdoor Living",
    number: "01",
    description:
      "Elegant gazebo structures designed for refined outdoor living spaces.",
  },
  {
    image: "/gazebo/pergola_service.webp",
    title: "Modern Pergola",
    category: "Premium Architecture",
    number: "02",
    description:
      "Contemporary pergola structures with clean architectural lines.",
  },
  {
    image: "/gazebo/canopy_service.webp",
    title: "Designer Canopy",
    category: "Luxury Residential",
    number: "03",
    description:
      "Stylish canopy solutions created for premium residential spaces.",
  },
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-10 sm:py-12 lg:py-14">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle blue glow */}
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#1687c5]/7 blur-[120px]" />

        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#46a9d8]/8 blur-[120px]" />

        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(18,50,74,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(18,50,74,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =========================================================
    WATERMARK
========================================================= */}

      <div className="pointer-events-none absolute inset-x-0 top-2">
        <div className="mx-auto w-full max-w-[1280px] overflow-hidden px-5 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <span className="whitespace-nowrap text-[90px] font-black tracking-[0.16em] text-[#12324a]/[0.035] sm:text-[140px] md:text-[170px] lg:text-[190px]">
              GALLERY
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =======================================================
            COMPACT HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-8 grid gap-5 border-b border-[#dceff7] pb-7 md:grid-cols-[0.8fr_1.2fr] md:items-end"
        >
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bfe4f3] bg-[#eff9fe] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#1687c5]" />

              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#0b6fa8] sm:text-xs">
                Our Premium Gallery
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-[#12324a] sm:text-5xl lg:text-6xl">
              Crafted Outdoor
              <span className="block bg-gradient-to-r from-[#0b6fa8] via-[#1687c5] to-[#46a9d8] bg-clip-text text-transparent">
                Living Spaces
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end md:pl-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1687c5]" />

              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#1687c5]">
                Selected Projects
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#475569] sm:text-base">
              Explore our luxury gazebo, pergola and canopy projects designed
              for villas, rooftops and premium outdoor residential spaces.
            </p>
          </div>
        </motion.div>

        {/* =======================================================
            MASONRY GALLERY
        ======================================================= */}

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          {/* =====================================================
              LEFT — TALL FEATURE
          ===================================================== */}

          <motion.article
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#12324a] shadow-[0_15px_50px_rgba(15,76,110,0.12)] sm:min-h-[620px]"
          >
            <img
              src={projects[0].image}
              alt={`${projects[0].title} - Welldone Metalworks`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061522]/90 via-[#061522]/20 to-transparent" />

            {/* Hover blue wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1687c5]/20 via-transparent to-[#46a9d8]/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Top information */}
            <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-7 sm:right-7 sm:top-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur-md">
                {projects[0].number}
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#7ec5e8] sm:text-xs">
                {projects[0].category}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                {projects[0].title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                {projects[0].description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-white/60">
                  Outdoor Architecture
                </span>

                <button
                  type="button"
                  aria-label={`View ${projects[0].title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#12324a] transition-all duration-300 hover:bg-[#1687c5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46a9d8] focus-visible:ring-offset-2"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* =====================================================
              RIGHT — TWO COMPACT PROJECTS
          ===================================================== */}

          <div className="grid gap-5">
            {projects.slice(1).map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative min-h-[250px] overflow-hidden rounded-[28px] bg-[#12324a] shadow-[0_12px_40px_rgba(15,76,110,0.10)] sm:min-h-[300px]"
              >
                <img
                  src={project.image}
                  alt={`${project.title} - Welldone Metalworks`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-800 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#061522]/85 via-[#061522]/35 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1687c5]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xs font-bold text-white backdrop-blur-md">
                  {project.number}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 max-w-xl p-6 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#7ec5e8] sm:text-xs">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-white/70 sm:text-sm">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    aria-label={`View ${project.title}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:text-[#7ec5e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46a9d8] focus-visible:ring-offset-2"
                  >
                    Explore Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =======================================================
            PROJECT INFORMATION BAR
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mt-5 grid overflow-hidden rounded-[24px] border border-[#dceff7] bg-white shadow-[0_8px_30px_rgba(15,76,110,0.06)] sm:grid-cols-3"
        >
          {/* Item 1 */}
          <div className="flex items-center gap-4 border-b border-[#dceff7] px-5 py-5 sm:border-b-0 sm:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe]">
              <Sparkles className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#12324a]">Premium Design</p>

              <p className="mt-1 text-xs text-[#64748b]">
                Modern outdoor aesthetics
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 border-b border-[#dceff7] px-5 py-5 sm:border-b-0 sm:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe]">
              <span className="text-sm font-bold text-[#1687c5]">02</span>
            </div>

            <div>
              <p className="text-sm font-bold text-[#12324a]">
                Custom Fabrication
              </p>

              <p className="mt-1 text-xs text-[#64748b]">
                Built around your space
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 px-5 py-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff9fe]">
              <ArrowUpRight className="h-5 w-5 text-[#1687c5]" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#12324a]">
                Professional Finish
              </p>

              <p className="mt-1 text-xs text-[#64748b]">
                Fabrication to installation
              </p>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM ACCENT
        ======================================================= */}

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#bfe4f3]" />

          <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#94a3b8]">
            Welldone Metalworks
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#bfe4f3]" />
        </div>
      </div>
    </section>
  );
}
