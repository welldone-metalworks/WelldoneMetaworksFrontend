"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const staircaseTypes = [
  "Spiral Staircase",
  "Curved Staircase",
  "Straight Staircase",
  "Industrial Staircase",
  "Fire Escape",
  "Custom Staircase",
];

const processSteps = [
  "Share your requirements",
  "Review project details",
  "Discuss fabrication",
];

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-[#07131d] py-10 text-white sm:py-12 lg:py-14"
    >
      {/* =========================================================
          BLUEPRINT GRID
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#1687c5]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-[#46a9d8]/[0.08] blur-3xl" />

      {/* Technical circles */}
      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute right-[-100px] top-[28%] h-[340px] w-[340px] rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#46a9d8]" />

              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#46a9d8]">
                Request a Quote
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Let's build your
              <span className="text-[#46a9d8]"> staircase.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
              Project Enquiry
            </span>

            <span className="h-px w-8 bg-white/10" />

            <span className="text-xs font-black text-white/60">
              01 / Start
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN ENQUIRY AREA
        ========================================================= */}
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =======================================================
              LEFT PROJECT PANEL
          ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1d2a] p-7 sm:p-9 lg:p-10"
          >
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1687c5]/15 blur-3xl" />

            <div className="relative flex h-full flex-col">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#46a9d8]">
                  Start Your Project
                </span>

                <span className="text-[10px] font-black tracking-[0.15em] text-white/20">
                  WM / 01
                </span>
              </div>

              <h3 className="mt-8 max-w-md text-3xl font-black leading-tight sm:text-4xl">
                Tell us what you
                <span className="text-[#46a9d8]"> need built.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                Share a few details about your staircase, project location and
                requirements. This helps us understand the scope before
                discussing the next steps.
              </p>

              {/* Contact details */}
              <div className="mt-9 space-y-4">
                <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Phone className="h-4 w-4 text-[#46a9d8]" />
                  </div>

                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                      Call
                    </span>

                    <span className="mt-1 block text-sm font-bold text-white/75">
                      +91 9649957698
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Mail className="h-4 w-4 text-[#46a9d8]" />
                  </div>

                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                      Email
                    </span>

                    <span className="mt-1 block text-sm font-bold text-white/75">
                      info@welldone-metalworks.in
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <MapPin className="h-4 w-4 text-[#46a9d8]" />
                  </div>

                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                      Service Coverage
                    </span>

                    <span className="mt-1 block text-sm font-bold text-white/75">
                      Ahmedabad & Gandhinagar
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini process */}
              <div className="mt-auto border-t border-white/10 pt-7">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                  What Happens Next
                </span>

                <div className="mt-4 space-y-3">
                  {processSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#46a9d8]/30 text-[9px] font-black text-[#46a9d8]">
                        0{index + 1}
                      </span>

                      <span className="text-xs font-bold text-white/50">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              FORM
          ======================================================= */}
          <motion.form
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#46a9d8]">
                  Project Details
                </span>

                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                  Tell us about your requirement
                </h3>
              </div>

              <span className="hidden text-[9px] font-bold uppercase tracking-[0.15em] text-white/20 sm:block">
                Required fields *
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Your Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#1687c5] focus:bg-white/[0.07]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter phone number"
                  className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#1687c5] focus:bg-white/[0.07]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#1687c5] focus:bg-white/[0.07]"
                />
              </div>

              {/* Staircase */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Staircase Type
                </label>

                <select
                  name="staircaseType"
                  defaultValue=""
                  className="h-13 w-full rounded-xl border border-white/10 bg-[#10202c] px-4 text-sm text-white/70 outline-none transition focus:border-[#1687c5]"
                >
                  <option value="" disabled>
                    Select staircase type
                  </option>

                  {staircaseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Project Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Ahmedabad, Gandhinagar or nearby area"
                  className="h-13 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#1687c5] focus:bg-white/[0.07]"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Project Requirement
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about the staircase, available space, application or any other project details..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#1687c5] focus:bg-white/[0.07]"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#1687c5] text-sm font-black text-white transition hover:bg-[#46a9d8]"
                >
                  Send Project Enquiry

                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Trust note */}
            <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#46a9d8]" />

              <p className="text-[11px] leading-5 text-white/30">
                Share only the project details you are comfortable providing.
                Requirements can be discussed further with the team.
              </p>
            </div>
          </motion.form>
        </div>

        {/* =========================================================
            BOTTOM SERVICE STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-3"
        >
          <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
              Material
            </span>

            <span className="mt-1 block text-sm font-bold text-white/65">
              Mild steel fabrication
            </span>
          </div>

          <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r">
            <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
              Project Types
            </span>

            <span className="mt-1 block text-sm font-bold text-white/65">
              Residential · Commercial · Industrial
            </span>
          </div>

          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                Coverage
              </span>

              <span className="mt-1 block text-sm font-bold text-white/65">
                Ahmedabad & Gandhinagar
              </span>
            </div>

            <ArrowUpRight className="h-4 w-4 text-[#46a9d8]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}