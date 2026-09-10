"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  ArrowUpRight,
  Facebook,
  Linkedin,
  Instagram,
  Building2,
  Factory,
  Settings2,
  Fence,
  Layers3,
  Warehouse,
  Trees,
  Wrench,
  Hammer,
  Ruler,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);
  const [activeService, setActiveService] = useState(null);

  const servicesRef = useRef(null);

  // ============================================================
  // SERVICES
  // ============================================================

  const services = [
    {
      title: "Structural Fabrication",
      href: "/services/structural-fabrication",
      description:
        "Strong and precise fabricated structures for commercial projects.",
      icon: Building2,
      items: [
        {
          name: "Structural Frames",
          href: "/services/structural-fabrication/structural-frames",
        },
        {
          name: "Support Structures",
          href: "/services/structural-fabrication/support-structures",
        },
        {
          name: "Heavy Fabrication",
          href: "/services/structural-fabrication/heavy-fabrication",
        },
        {
          name: "Custom Structures",
          href: "/services/structural-fabrication/custom-structures",
        },
      ],
    },

    {
      title: "Industrial Fabrication",
      href: "/services/industrial-fabrication",
      description:
        "Reliable fabrication solutions for industrial applications.",
      icon: Factory,
      items: [
        {
          name: "Industrial Frames",
          href: "/services/industrial-fabrication/industrial-frames",
        },
        {
          name: "Machine Structures",
          href: "/services/industrial-fabrication/machine-structures",
        },
        {
          name: "Platforms",
          href: "/services/industrial-fabrication/platforms",
        },
        {
          name: "Industrial Supports",
          href: "/services/industrial-fabrication/industrial-supports",
        },
      ],
    },

    {
      title: "Custom Metal Fabrication",
      href: "/services/custom-metal-fabrication",
      description:
        "Made-to-measure fabrication based on your exact requirements.",
      icon: Settings2,
      items: [
        {
          name: "Custom Fabrication",
          href: "/services/custom-metal-fabrication/custom-fabrication",
        },
        {
          name: "Precision Fabrication",
          href: "/services/custom-metal-fabrication/precision-fabrication",
        },
        {
          name: "Sheet Fabrication",
          href: "/services/custom-metal-fabrication/sheet-fabrication",
        },
        {
          name: "Project Fabrication",
          href: "/services/custom-metal-fabrication/project-fabrication",
        },
      ],
    },

    {
      title: "Gates & Railings",
      href: "/services/gates-railings",
      description: "Elegant and durable gates and railing solutions.",
      icon: Fence,
      items: [
        {
          name: "Main Gates",
          href: "/services/gates-railings/main-gates",
        },
        {
          name: "Entrance Gates",
          href: "/services/gates-railings/entrance-gates",
        },
        {
          name: "Balcony Railings",
          href: "/services/gates-railings/balcony-railings",
        },
        {
          name: "Staircase Railings",
          href: "/services/gates-railings/staircase-railings",
        },
      ],
    },

    {
      title: "Staircase Fabrication",
      href: "/services/staircase-fabrication",
      description: "Modern staircase structures designed for safety and style.",
      icon: Layers3,
      items: [
        {
          name: "Straight Staircases",
          href: "/services/staircase-fabrication/straight-staircases",
        },
        {
          name: "Spiral Staircases",
          href: "/services/staircase-fabrication/spiral-staircases",
        },
        {
          name: "Industrial Stairs",
          href: "/services/staircase-fabrication/industrial-stairs",
        },
        {
          name: "Fire Escape Stairs",
          href: "/services/staircase-fabrication/fire-escape-stairs",
        },
      ],
    },

    {
      title: "Sheds & Canopies",
      href: "/services/sheds-canopies",
      description:
        "Functional covered structures for industrial and commercial spaces.",
      icon: Warehouse,
      items: [
        {
          name: "Industrial Sheds",
          href: "/services/sheds-canopies/industrial-sheds",
        },
        {
          name: "Warehouse Sheds",
          href: "/services/sheds-canopies/warehouse-sheds",
        },
        {
          name: "Parking Sheds",
          href: "/services/sheds-canopies/parking-sheds",
        },
        {
          name: "Entrance Canopies",
          href: "/services/sheds-canopies/entrance-canopies",
        },
      ],
    },

    {
      title: "Gazebos & Outdoor",
      href: "/services/gazebos-outdoor",
      description:
        "Stylish outdoor fabricated structures for residential and commercial spaces.",
      icon: Trees,
      items: [
        {
          name: "Garden Gazebos",
          href: "/services/gazebos-outdoor/garden-gazebos",
        },
        {
          name: "Outdoor Structures",
          href: "/services/gazebos-outdoor/outdoor-structures",
        },
        {
          name: "Seating Structures",
          href: "/services/gazebos-outdoor/seating-structures",
        },
        {
          name: "Custom Gazebos",
          href: "/services/gazebos-outdoor/custom-gazebos",
        },
      ],
    },

    {
      title: "Welding & Installation",
      href: "/services/welding-installation",
      description:
        "Professional welding, assembly and on-site installation services.",
      icon: Wrench,
      items: [
        {
          name: "MIG Welding",
          href: "/services/welding-installation/mig-welding",
        },
        {
          name: "Arc Welding",
          href: "/services/welding-installation/arc-welding",
        },
        {
          name: "On-Site Welding",
          href: "/services/welding-installation/on-site-welding",
        },
        {
          name: "Installation",
          href: "/services/welding-installation/installation",
        },
      ],
    },
  ];

  // ============================================================
  // CLOSE OUTSIDE
  // ============================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
        setActiveService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ============================================================
  // RESET MOBILE ON DESKTOP
  // ============================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setMobileServicesOpen(false);
        setMobileCategoryOpen(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ============================================================
  // RETURN
  // ============================================================

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ========================================================
          NAVBAR
      ======================================================== */}

      <div className="w-full bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-[0_4px_25px_rgba(15,76,110,0.08)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="h-[92px] flex items-center justify-between">
            {/* ==================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              className="flex items-center shrink-0 group"
              onClick={() => {
                setIsOpen(false);
                setServicesOpen(false);
                setActiveService(null);
              }}
            >
              <Image
                src="/welldone_metalworks_logo.png"
                alt="Welldone Metalworks"
                width={180}
                height={72}
                priority
                className="h-[70px] sm:h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden md:flex items-center gap-7 lg:gap-10">
              {/* HOME */}
              <Link
                href="/"
                className="relative py-8 text-[16px] font-semibold text-[#17384F] hover:text-[#1687C5] transition-colors duration-300 group"
              >
                Home
                <span className="absolute left-0 right-0 bottom-[18px] mx-auto h-[2px] w-0 rounded-full bg-[#1687C5] transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* ABOUT */}
              <Link
                href="/about"
                className="relative py-8 text-[16px] font-semibold text-[#17384F] hover:text-[#1687C5] transition-colors duration-300 group"
              >
                About
                <span className="absolute left-0 right-0 bottom-[18px] mx-auto h-[2px] w-0 rounded-full bg-[#1687C5] transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* ==================================================
                  SERVICES
              ================================================== */}

              <div
                ref={servicesRef}
                className="h-[92px] flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen((prev) => !prev);
                    setActiveService(null);
                  }}
                  className={`relative flex items-center gap-2 py-8 text-[16px] font-semibold transition-colors duration-300 ${
                    servicesOpen
                      ? "text-[#1687C5]"
                      : "text-[#17384F] hover:text-[#1687C5]"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={17}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 right-0 bottom-[18px] mx-auto h-[2px] rounded-full bg-[#1687C5] transition-all duration-300 ${
                      servicesOpen ? "w-full" : "w-0"
                    }`}
                  />
                </button>

                {/* =================================================
                    FULL WIDTH 1280 DROPDOWN
                ================================================= */}

                {servicesOpen && (
                  <div
                    className="fixed top-[92px] left-1/2 -translate-x-1/2 w-[min(1280px,calc(100vw-32px))]"
                    onMouseLeave={() => {
                      setServicesOpen(false);
                      setActiveService(null);
                    }}
                  >
                    {/* TOP ARROW */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-sky-100 z-0" />

                    {/* =================================================
                        MAIN DROPDOWN
                    ================================================= */}

                    <div className="relative bg-white rounded-b-2xl border-x border-b border-sky-100 shadow-[0_30px_90px_rgba(15,76,110,0.20)] overflow-visible">
                      {/* =================================================
                          HEADER
                      ================================================= */}

                      <div className="relative overflow-hidden px-8 py-6 bg-gradient-to-r from-[#EFF9FE] via-white to-[#F4FBFE] border-b border-sky-100 rounded-b-none">
                        {/* Background decoration */}
                        <div className="absolute -right-10 -top-20 w-56 h-56 rounded-full bg-sky-100/50" />

                        <div className="absolute right-40 -bottom-20 w-40 h-40 rounded-full bg-blue-50/80" />

                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-sky-100 shadow-[0_5px_18px_rgba(15,76,110,0.08)] flex items-center justify-center text-[#1687C5]">
                              <Hammer size={25} strokeWidth={1.7} />
                            </div>

                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1687C5]">
                                Our Expertise
                              </p>

                              <h3 className="mt-1 text-[22px] font-bold tracking-tight text-[#12324A]">
                                Metal Fabrication Services
                              </h3>

                              <p className="mt-1.5 text-[12px] text-slate-500">
                                Precision fabrication solutions for residential,
                                commercial & industrial requirements.
                              </p>
                            </div>
                          </div>

                          <Link
                            href="/services"
                            onClick={() => {
                              setServicesOpen(false);
                              setActiveService(null);
                            }}
                            className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-sky-200 text-[#0879BD] text-[12px] font-bold hover:bg-[#1687C5] hover:text-white hover:border-[#1687C5] transition-all duration-300"
                          >
                            View All Services
                            <ArrowUpRight
                              size={15}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>

                      {/* =================================================
                          SERVICES GRID
                          3 COLUMNS
                      ================================================= */}

                      <div className="p-6 grid grid-cols-3 gap-4">
                        {services.map((service, index) => {
                          const Icon = service.icon;

                          return (
                            <div
                              key={service.title}
                              className="relative"
                              onMouseEnter={() => setActiveService(index)}
                            >
                              {/* =================================================
                                  SERVICE CARD
                              ================================================= */}

                              <Link
                                href={service.href}
                                onClick={() => {
                                  setServicesOpen(false);
                                  setActiveService(null);
                                }}
                                className={`group/card relative flex items-center gap-4 min-h-[100px] p-5 rounded-2xl border transition-all duration-300 ${
                                  activeService === index
                                    ? "bg-[#F1FAFE] border-[#8BD3EF] shadow-[0_10px_30px_rgba(14,116,144,0.10)] -translate-y-0.5"
                                    : "bg-white border-slate-100 hover:bg-[#F7FCFF] hover:border-sky-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(15,76,110,0.06)]"
                                }`}
                              >
                                {/* NUMBER */}
                                <span
                                  className={`absolute top-3 right-4 text-[10px] font-bold transition-colors ${
                                    activeService === index
                                      ? "text-[#8CCFEA]"
                                      : "text-slate-200"
                                  }`}
                                >
                                  {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* ICON */}

                                <div
                                  className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    activeService === index
                                      ? "bg-[#1687C5] text-white shadow-[0_6px_18px_rgba(22,135,197,0.22)]"
                                      : "bg-[#EAF7FD] text-[#1687C5] group-hover/card:bg-[#1687C5] group-hover/card:text-white"
                                  }`}
                                >
                                  <Icon size={22} strokeWidth={1.8} />
                                </div>

                                {/* CONTENT */}

                                <div className="min-w-0 flex-1 pr-3">
                                  <div className="flex items-center gap-1.5">
                                    <span
                                      className={`text-[15px] font-bold leading-5 transition-colors ${
                                        activeService === index
                                          ? "text-[#0879BD]"
                                          : "text-[#12324A] group-hover/card:text-[#0879BD]"
                                      }`}
                                    >
                                      {service.title}
                                    </span>

                                    <ChevronRight
                                      size={15}
                                      className={`shrink-0 transition-all duration-300 ${
                                        activeService === index
                                          ? "translate-x-1 text-[#1687C5]"
                                          : "text-slate-300 group-hover/card:text-[#1687C5]"
                                      }`}
                                    />
                                  </div>

                                  <p className="mt-1.5 text-[12px] leading-[17px] text-slate-500 line-clamp-2">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>

                              {/* =================================================
                                  SUB SERVICES
                              ================================================= */}

                              {activeService === index && (
                                <div
                                  className="absolute z-[100] left-0 top-[calc(100%+10px)] w-full"
                                  onMouseEnter={() => setActiveService(index)}
                                >
                                  {/* Arrow */}

                                  <div className="absolute -top-1.5 left-8 w-3 h-3 rotate-45 bg-[#F8FCFE] border-l border-t border-sky-200" />

                                  <div className="relative bg-[#F8FCFE] border border-sky-200 rounded-xl shadow-[0_18px_50px_rgba(15,76,110,0.18)] p-4">
                                    {/* Heading */}

                                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-sky-100">
                                      <div>
                                        <p className="text-[9px] uppercase tracking-[0.18em] font-bold text-[#1687C5]">
                                          Explore
                                        </p>

                                        <p className="text-[13px] font-bold text-[#12324A] mt-1">
                                          {service.title}
                                        </p>
                                      </div>

                                      <ArrowUpRight
                                        size={15}
                                        className="text-[#1687C5]"
                                      />
                                    </div>

                                    {/* SUB LINKS */}

                                    <div className="space-y-1">
                                      {service.items.map((item) => (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          onClick={() => {
                                            setServicesOpen(false);
                                            setActiveService(null);
                                          }}
                                          className="group/sub flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] font-medium text-slate-600 hover:text-[#0879BD] hover:bg-white transition-all duration-200"
                                        >
                                          <span className="w-6 h-6 rounded-md bg-sky-50 flex items-center justify-center text-[#46A9D8] group-hover/sub:bg-[#1687C5] group-hover/sub:text-white transition-all duration-200">
                                            <ChevronRight size={12} />
                                          </span>

                                          <span className="flex-1">
                                            {item.name}
                                          </span>

                                          <ArrowUpRight
                                            size={11}
                                            className="opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all"
                                          />
                                        </Link>
                                      ))}
                                    </div>

                                    {/* EXPLORE */}

                                    <Link
                                      href={service.href}
                                      onClick={() => {
                                        setServicesOpen(false);
                                        setActiveService(null);
                                      }}
                                      className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-white border border-sky-100 text-[#1687C5] text-[11px] font-bold hover:bg-[#1687C5] hover:text-white hover:border-[#1687C5] transition-all duration-300"
                                    >
                                      Explore {service.title}
                                      <ArrowUpRight size={12} />
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* =================================================
                          FOOTER
                      ================================================= */}

                      <div className="px-7 py-4.5 bg-gradient-to-r from-[#F1FAFE] via-[#F8FCFE] to-white border-t border-sky-100 rounded-b-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="hidden sm:flex w-10 h-10 rounded-xl bg-white border border-sky-100 shadow-sm items-center justify-center text-[#1687C5]">
                              <Ruler size={17} />
                            </div>

                            <div>
                              <p className="text-[12px] font-bold text-[#12324A]">
                                Have a custom fabrication requirement?
                              </p>

                              <p className="text-[11px] text-slate-500 mt-0.5">
                                Tell us about your project and get a tailored
                                solution.
                              </p>
                            </div>
                          </div>

                          <Link
                            href="/enquiry"
                            onClick={() => {
                              setServicesOpen(false);
                              setActiveService(null);
                            }}
                            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1687C5] text-white text-[12px] font-bold shadow-[0_6px_20px_rgba(22,135,197,0.20)] hover:bg-[#0B6FA8] hover:shadow-[0_10px_28px_rgba(22,135,197,0.28)] transition-all duration-300"
                          >
                            Send Enquiry
                            <ArrowUpRight
                              size={14}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* GALLERY */}

              <Link
                href="/gallery"
                className="relative py-8 text-[16px] font-semibold text-[#17384F] hover:text-[#1687C5] transition-colors duration-300 group"
              >
                Gallery
                <span className="absolute left-0 right-0 bottom-[18px] mx-auto h-[2px] w-0 rounded-full bg-[#1687C5] transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* ENQUIRY */}

              <Link
                href="/enquiry"
                className="relative py-8 text-[16px] font-semibold text-[#17384F] hover:text-[#1687C5] transition-colors duration-300 group"
              >
                Enquiry
                <span className="absolute left-0 right-0 bottom-[18px] mx-auto h-[2px] w-0 rounded-full bg-[#1687C5] transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* CONTACT */}

              <Link
                href="/contact"
                className="relative py-8 text-[16px] font-semibold text-[#17384F] hover:text-[#1687C5] transition-colors duration-300 group"
              >
                Contact
                <span className="absolute left-0 right-0 bottom-[18px] mx-auto h-[2px] w-0 rounded-full bg-[#1687C5] transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            {/* ==================================================
                RIGHT SIDE
            ================================================== */}

            <div className="hidden md:flex items-center gap-3">
              {/* PHONE */}

              <a
                href="tel:+919649957698"
                className="hidden xl:flex items-center gap-2 px-3 py-2.5 rounded-lg text-[#17384F] hover:bg-sky-50 hover:text-[#1687C5] transition-all duration-300"
              >
                <Phone size={17} strokeWidth={1.8} className="text-[#1687C5]" />

                <span className="text-[12px] font-semibold whitespace-nowrap">
                  +91 96499 57698
                </span>
              </a>

              {/* CTA */}

              <Link
                href="/enquiry"
                className="group relative inline-flex items-center gap-2 px-5 py-3.5 rounded-xl overflow-hidden bg-[#1687C5] text-white text-[14px] font-bold shadow-[0_6px_20px_rgba(22,135,197,0.20)] hover:bg-[#0B6FA8] hover:shadow-[0_10px_28px_rgba(22,135,197,0.30)] transition-all duration-300"
              >
                <span className="relative z-10">Get Quote</span>

                <ArrowUpRight
                  size={16}
                  className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* ==================================================
                MOBILE BUTTON
            ================================================== */}

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => {
                setIsOpen((prev) => !prev);
                setServicesOpen(false);
                setActiveService(null);
              }}
              className="md:hidden w-11 h-11 rounded-xl bg-[#EFF9FE] border border-sky-100 text-[#12324A] flex items-center justify-center hover:bg-[#1687C5] hover:text-white transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE MENU
      ======================================================== */}

      <div
        className={`md:hidden bg-white border-b border-sky-100 shadow-[0_15px_35px_rgba(15,76,110,0.12)] transition-all duration-300 overflow-hidden ${
          isOpen
            ? "max-h-[calc(100vh-92px)] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 py-5">
          {/* HOME */}

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between py-4 border-b border-slate-100 text-[16px] font-semibold text-[#17384F]"
          >
            Home
            <ArrowUpRight size={16} className="text-sky-400" />
          </Link>

          {/* ABOUT */}

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between py-4 border-b border-slate-100 text-[16px] font-semibold text-[#17384F]"
          >
            About
            <ArrowUpRight size={16} className="text-sky-400" />
          </Link>

          {/* ====================================================
              MOBILE SERVICES
          ==================================================== */}

          <div className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-4 text-[16px] font-semibold text-[#17384F]"
            >
              <span className="flex items-center gap-2">
                Services
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-50 text-[#1687C5]">
                  8
                </span>
              </span>

              <ChevronDown
                size={19}
                className={`text-[#1687C5] transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-[1400px] pb-3" : "max-h-0"
              }`}
            >
              <div className="rounded-xl bg-[#F6FBFE] border border-sky-100 overflow-hidden">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="border-b last:border-b-0 border-sky-100"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileCategoryOpen(
                            mobileCategoryOpen === index ? null : index,
                          )
                        }
                        className="w-full flex items-center gap-3 px-4 py-4 text-left"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-white border border-sky-100 text-[#1687C5] flex items-center justify-center">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-bold text-[#12324A]">
                            {service.title}
                          </p>

                          <p className="text-[10px] text-slate-500 mt-0.5">
                            {service.items.length} services available
                          </p>
                        </div>

                        <ChevronDown
                          size={17}
                          className={`shrink-0 text-[#1687C5] transition-transform duration-300 ${
                            mobileCategoryOpen === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* MOBILE SUB SERVICES */}

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileCategoryOpen === index
                            ? "max-h-72 pb-3"
                            : "max-h-0"
                        }`}
                      >
                        <div className="ml-[60px] mr-4 space-y-1">
                          {service.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileServicesOpen(false);
                                setMobileCategoryOpen(null);
                              }}
                              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[12px] text-slate-600 hover:bg-white hover:text-[#1687C5] transition-colors"
                            >
                              <ChevronRight
                                size={13}
                                className="text-[#46A9D8]"
                              />

                              {item.name}
                            </Link>
                          ))}

                          <Link
                            href={service.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                              setMobileCategoryOpen(null);
                            }}
                            className="flex items-center gap-1.5 px-3 py-2.5 mt-1 text-[11px] font-bold text-[#1687C5]"
                          >
                            View Service
                            <ArrowUpRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-[#1687C5] text-white text-[13px] font-bold"
              >
                View All Services
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* GALLERY */}

          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between py-4 border-b border-slate-100 text-[16px] font-semibold text-[#17384F]"
          >
            Gallery
            <ArrowUpRight size={16} className="text-sky-400" />
          </Link>

          {/* ENQUIRY */}

          <Link
            href="/enquiry"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between py-4 border-b border-slate-100 text-[16px] font-semibold text-[#17384F]"
          >
            Enquiry
            <ArrowUpRight size={16} className="text-sky-400" />
          </Link>

          {/* CONTACT */}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between py-4 text-[16px] font-semibold text-[#17384F]"
          >
            Contact
            <ArrowUpRight size={16} className="text-sky-400" />
          </Link>

          {/* ====================================================
              MOBILE CONTACT
          ==================================================== */}

          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#EFF9FE] to-[#F8FCFE] border border-sky-100">
            <a
              href="tel:+919649957698"
              className="flex items-center gap-3 text-[13px] font-semibold text-[#17384F]"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-sky-100 flex items-center justify-center text-[#1687C5]">
                <Phone size={15} />
              </div>
              +91 96499 57698
            </a>

            <a
              href="mailto:info@welldone-metalworks.in"
              className="mt-3 flex items-center gap-3 text-[13px] font-semibold text-[#17384F]"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-sky-100 flex items-center justify-center text-[#1687C5]">
                <Mail size={15} />
              </div>
              info@welldone-metalworks.in
            </a>

            {/* SOCIAL */}

            <div className="mt-4 pt-3 border-t border-sky-100 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white border border-sky-100 flex items-center justify-center text-slate-500 hover:bg-[#1687C5] hover:text-white transition-all"
              >
                <Facebook size={16} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white border border-sky-100 flex items-center justify-center text-slate-500 hover:bg-[#1687C5] hover:text-white transition-all"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-sky-100 flex items-center justify-center text-slate-500 hover:bg-[#1687C5] hover:text-white transition-all"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* MOBILE CTA */}

          <Link
            href="/enquiry"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#1687C5] text-white text-[14px] font-bold shadow-[0_6px_20px_rgba(22,135,197,0.20)]"
          >
            Get Quote
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
