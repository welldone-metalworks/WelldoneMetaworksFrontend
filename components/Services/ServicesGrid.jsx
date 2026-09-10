"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* ============================================================
          BACKGROUND TECHNICAL GRID
      ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Soft background atmosphere */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background: "rgba(70, 169, 216, 0.07)",
        }}
        aria-hidden="true"
      />

      <div className="wm-container relative z-10">
        {/* ============================================================
            SECTION INTRO
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          {/* Left */}
          <div>
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-7 bg-[var(--wm-primary)]" />
              01 / Our Capabilities
            </div>

            <h2 className="wm-heading max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-[58px]">
              Fabrication solutions
              <span className="block text-[var(--wm-primary)]">
                built around the project.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-2xl lg:ml-auto">
            <p className="wm-body text-base sm:text-lg">
              From structural and industrial fabrication to gates, railings,
              staircases, sheds and outdoor structures, Welldone Metalworks
              provides project-specific Mild Steel fabrication solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[var(--wm-border)] pt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--wm-muted)]">
              <span>08 Service Categories</span>
              <span className="hidden h-1 w-1 rounded-full bg-[var(--wm-primary)] sm:block" />
              <span>32 Service Applications</span>
              <span className="hidden h-1 w-1 rounded-full bg-[var(--wm-primary)] sm:block" />
              <span>Mild Steel</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            SERVICE LIST
        ============================================================ */}
        <div className="border-t border-[var(--wm-border)]">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(serviceIndex * 0.04, 0.2),
                }}
                className="group relative border-b border-[var(--wm-border)]"
              >
                <div className="grid lg:grid-cols-[110px_minmax(0,1fr)_0.95fr]">
                  {/* ====================================================
                      NUMBER
                  ==================================================== */}
                  <div className="hidden border-r border-[var(--wm-border)] py-9 pr-6 lg:block">
                    <div className="sticky top-32">
                      <span className="font-mono text-sm font-bold tracking-widest text-[var(--wm-primary)]">
                        {service.number}
                      </span>

                      <div className="mt-5 h-10 w-px bg-[var(--wm-border-blue)] transition-all duration-500 group-hover:h-16 group-hover:bg-[var(--wm-primary)]" />
                    </div>
                  </div>

                  {/* ====================================================
                      SERVICE IDENTITY
                  ==================================================== */}
                  <div className="relative p-7 sm:p-9 lg:border-r lg:border-[var(--wm-border)] lg:px-10 lg:py-11">
                    {/* Mobile number */}
                    <div className="mb-6 flex items-center justify-between lg:hidden">
                      <span className="font-mono text-sm font-bold tracking-widest text-[var(--wm-primary)]">
                        {service.number}
                      </span>

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
                        Service
                      </span>
                    </div>

                    {/* Image */}
                    {service.image && (
                      <div className="relative mb-8 aspect-[16/8.5] overflow-hidden bg-[var(--wm-surface-blue)]">
                        <Image
                          src={service.image}
                          alt={`${service.title} - Welldone Metalworks`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,50,74,0.68)] via-transparent to-transparent" />

                        {/* Image label */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center bg-white/95 text-[var(--wm-primary)]">
                            <Icon size={16} strokeWidth={1.8} />
                          </span>

                          <span className="bg-[var(--wm-navy)]/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                            {service.eyebrow}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Eyebrow */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-[var(--wm-primary)]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--wm-primary)]">
                        {service.eyebrow}
                      </span>
                    </div>

                    {/* Title */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/title inline-flex items-start gap-3"
                    >
                      <h3 className="wm-heading max-w-xl text-3xl leading-[1.08] transition-colors duration-300 group-hover:text-[var(--wm-primary)] sm:text-4xl">
                        {service.title}
                      </h3>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.7}
                        className="mt-1 shrink-0 text-[var(--wm-primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      />
                    </Link>

                    {/* Description */}
                    <p className="wm-body mt-5 max-w-xl text-sm sm:text-[15px]">
                      {service.description}
                    </p>

                    {/* Metadata */}
                    <div className="mt-7 grid grid-cols-2 gap-3 border-t border-[var(--wm-border)] pt-5">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                          Material
                        </div>

                        <div className="mt-1 text-sm font-bold text-[var(--wm-heading)]">
                          {service.material}
                        </div>
                      </div>

                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                          Application
                        </div>

                        <div className="mt-1 text-sm font-bold text-[var(--wm-heading)]">
                          {service.application}
                        </div>
                      </div>
                    </div>

                    {/* Parent service link */}
                    <div className="mt-7">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--wm-primary)] transition-all duration-300 hover:gap-3"
                      >
                        View Service
                        <ArrowRight size={15} strokeWidth={2} />
                      </Link>
                    </div>
                  </div>

                  {/* ====================================================
                      SUB-SERVICES
                  ==================================================== */}
                  <div className="bg-[var(--wm-surface-soft)] p-7 sm:p-9 lg:px-10 lg:py-11">
                    <div className="mb-7 flex items-end justify-between border-b border-[var(--wm-border)] pb-5">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--wm-primary)]">
                          Service Scope
                        </span>

                        <h4 className="mt-2 text-xl font-extrabold tracking-tight text-[var(--wm-heading)]">
                          What We Fabricate
                        </h4>
                      </div>

                      <span className="font-mono text-xs font-bold text-[var(--wm-muted)]">
                        {service.items?.length
                          ?.toString()
                          .padStart(2, "0") || "00"}{" "}
                        ITEMS
                      </span>
                    </div>

                    {/* Sub-service list */}
                    <div className="divide-y divide-[var(--wm-border)] border-y border-[var(--wm-border)]">
                      {service.items?.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="group/item flex items-center gap-4 py-4 transition-all duration-300 hover:pl-2"
                        >
                          {/* Number */}
                          <span className="w-7 shrink-0 font-mono text-[10px] font-bold text-[var(--wm-primary)]">
                            {item.number}
                          </span>

                          {/* Check */}
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--wm-border-blue)] bg-white text-[var(--wm-primary)] transition-all duration-300 group-hover/item:border-[var(--wm-primary)] group-hover/item:bg-[var(--wm-primary)] group-hover/item:text-white">
                            <Check size={13} strokeWidth={2.3} />
                          </span>

                          {/* Content */}
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold text-[var(--wm-heading)] transition-colors duration-300 group-hover/item:text-[var(--wm-primary)] sm:text-[15px]">
                              {item.name}
                            </span>

                            {item.description && (
                              <span className="mt-1 hidden text-xs leading-relaxed text-[var(--wm-muted)] sm:block">
                                {item.description}
                              </span>
                            )}
                          </span>

                          {/* Arrow */}
                          <ChevronRight
                            size={17}
                            strokeWidth={1.7}
                            className="shrink-0 text-[var(--wm-muted)] transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-[var(--wm-primary)]"
                          />
                        </Link>
                      ))}
                    </div>

                    {/* Bottom service scope */}
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                      {service.applications?.slice(0, 3).map((application) => (
                        <span
                          key={application}
                          className="border border-[var(--wm-border)] bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--wm-muted)]"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ============================================================
            BOTTOM SERVICE SUMMARY
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-px overflow-hidden border border-[var(--wm-border)] bg-[var(--wm-border)] sm:grid-cols-3"
        >
          {/* Item */}
          <div className="bg-white p-6 sm:p-7">
            <div className="font-mono text-xs font-bold text-[var(--wm-primary)]">
              08
            </div>

            <div className="mt-3 text-sm font-extrabold text-[var(--wm-heading)]">
              Service Categories
            </div>

            <p className="mt-2 text-xs leading-relaxed text-[var(--wm-muted)]">
              Core fabrication capabilities covering structural, industrial,
              architectural and outdoor requirements.
            </p>
          </div>

          {/* Item */}
          <div className="bg-white p-6 sm:p-7">
            <div className="font-mono text-xs font-bold text-[var(--wm-primary)]">
              32
            </div>

            <div className="mt-3 text-sm font-extrabold text-[var(--wm-heading)]">
              Sub-Service Areas
            </div>

            <p className="mt-2 text-xs leading-relaxed text-[var(--wm-muted)]">
              Specific fabrication applications organised for easier project
              selection.
            </p>
          </div>

          {/* Item */}
          <div className="bg-[var(--wm-navy)] p-6 sm:p-7">
            <div className="font-mono text-xs font-bold text-[var(--wm-primary-light)]">
              WM / MS
            </div>

            <div className="mt-3 text-sm font-extrabold text-white">
              Project-Based Fabrication
            </div>

            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Fabrication developed around dimensions, application and site
              requirements.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            CTA LINK
        ============================================================ */}
        <div className="mt-10 flex flex-col gap-5 border-t border-[var(--wm-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--wm-muted)]">
              Have a project requirement?
            </span>

            <p className="mt-1 text-sm font-bold text-[var(--wm-heading)]">
              Discuss your fabrication requirement with Welldone Metalworks.
            </p>
          </div>

          <Link
            href="/enquiry"
            className="group inline-flex w-fit items-center gap-3 border border-[var(--wm-primary)] bg-[var(--wm-primary)] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[var(--wm-primary-dark)]"
          >
            Request An Enquiry

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}