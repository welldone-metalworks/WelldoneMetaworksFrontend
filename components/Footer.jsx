"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "Custom MS Fabrication",
    href: "/services/custom-metal-fabrication",
  },
  {
    name: "Structural Fabrication",
    href: "/services/structural-fabrication",
  },
  {
    name: "Gates & Railings",
    href: "/services/gates-railings",
  },
  {
    name: "Sheds & Canopies",
    href: "/services/sheds-canopies",
  },
  {
    name: "Gazebos & Outdoor",
    href: "/services/gazebos-outdoor",
  },
  {
    name: "Welding & Installation",
    href: "/services/welding-installation",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    name: "Sitemap",
    href: "/sitemap",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wm-navy text-white">

      {/* Subtle top accent */}
      <div className="h-1 w-full bg-wm-primary" />

      <div className="wm-container">

        {/* =========================================================
            TOP CTA
        ========================================================== */}
        <div className="border-b border-white/10 py-9 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fd4ef]">
                <span className="h-px w-7 bg-wm-primary" />
                Welldone Metalworks
              </div>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Have a mild-steel fabrication requirement?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                Share your requirement, project location, dimensions or
                reference image and discuss the next step with our team.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/enquiry"
                className="group inline-flex items-center gap-3 rounded-lg bg-wm-primary px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-wm-primary-dark"
              >
                Request a Quote

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>

          </div>
        </div>

        {/* =========================================================
            MAIN FOOTER
        ========================================================== */}
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1fr_1fr] lg:gap-12">

       {/* Brand */}
<div className="lg:pr-6">

  {/* Logo + Description */}
  <div className="flex items-start gap-5">

    {/* Logo */}
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="Welldone Metalworks Home"
    >
      <div className="flex h-[92px] w-[110px] items-center justify-center rounded-lg bg-white px-2.5 py-2">
        <Image
          src="/welldone_metalworks_logo.png"
          alt="Welldone Metalworks"
          width={100}
          height={45}
          className="h-auto w-[100px] object-contain"
        />
      </div>
    </Link>

    {/* Description */}
    <p className="pt-1 text-sm leading-6 text-white/55">
      Custom mild-steel fabrication for residential, commercial and suitable
      outdoor requirements across Ahmedabad and Gandhinagar.
    </p>

  </div>

  {/* Location */}
  <div className="mt-6 flex items-start gap-3">

    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#8fd4ef]">
      <MapPin size={15} strokeWidth={1.8} />
    </div>

    <div>
      <p className="text-xs font-bold text-white">
        Ahmedabad, Gujarat
      </p>

      <p className="mt-0.5 text-[11px] text-white/45">
        Serving Ahmedabad & Gandhinagar
      </p>
    </div>

  </div>

  {/* Social */}
  <div className="mt-5 flex items-center gap-2.5">

    <a
      href="#"
      aria-label="Facebook"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-wm-primary hover:bg-wm-primary hover:text-white"
    >
      <FaFacebookF size={13} />
    </a>

    <a
      href="#"
      aria-label="Instagram"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-wm-primary hover:bg-wm-primary hover:text-white"
    >
      <FaInstagram size={14} />
    </a>

    <a
      href="https://wa.me/919649957698"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-wm-primary hover:bg-wm-primary hover:text-white"
    >
      <FaWhatsapp size={15} />
    </a>

  </div>

</div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-wm-primary transition-all duration-300 group-hover:w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-wm-primary transition-all duration-300 group-hover:w-4" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              {/* Phone */}
              <a
                href="tel:+919649957698"
                className="group flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#8fd4ef] transition-colors group-hover:bg-wm-primary group-hover:text-white">
                  <Phone size={14} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                    +91 96499 57698
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@welldonemetalworks.in"
                className="group flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#8fd4ef] transition-colors group-hover:bg-wm-primary group-hover:text-white">
                  <Mail size={14} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                    info@welldonemetalworks.in
                  </p>
                </div>
              </a>

              {/* Service area */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#8fd4ef]">
                  <MapPin size={14} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Service Area
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/75">
                    Ahmedabad & Gandhinagar
                  </p>
                </div>
              </div>

            </div>

            {/* Contact link */}
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#8fd4ef] transition-colors hover:text-white"
            >
              Contact Welldone Metalworks

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* =========================================================
            LEGAL / BOTTOM
        ========================================================== */}
        <div className="border-t border-white/10">

          <div className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Copyright */}
            <p className="text-[11px] leading-5 text-white/40">
              © {new Date().getFullYear()} Welldone Metalworks. All rights
              reserved.
            </p>

            {/* Legal */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map((item, index) => (
                <div key={item.name} className="flex items-center gap-5">
                  <Link
                    href={item.href}
                    className="text-[11px] text-white/40 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>

                  {index !== legalLinks.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-white/15" />
                  )}
                </div>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-[11px] font-medium text-white/40">
              Custom MS fabrication · Ahmedabad & Gandhinagar
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}