"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Metal Gates",
    "Railings",
    "Gazebo Structures",
    "Polycarbonate Roofing",
    "Steel Structures",
    "Custom Fabrication",
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1f1f1f] via-[#242424] to-[#2a2a2a] text-gray-300 pt-16 pb-8 overflow-hidden">

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#cd2b14] to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-[#cd2b14]/10 blur-[160px]" />
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#981d13]/10 blur-[160px]" />

      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

          {/* Brand */}
          <div>

            <Image
              src="/logo.png"
              alt="Welldone Metalworks"
              width={110}
              height={50}
              className="mb-4"
            />

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Welldone Metalworks delivers premium fabrication solutions
              including gates.
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2c2c2c] border border-white/10 hover:bg-[#cd2b14] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2c2c2c] border border-white/10 hover:bg-[#cd2b14] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2c2c2c] border border-white/10 hover:bg-[#cd2b14] transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#cd2b14] rounded-full"></span>
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">

              {links.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <span className="text-[#cd2b14]">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#cd2b14] rounded-full"></span>
              Services
            </h3>

            <ul className="space-y-2 text-sm">

              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <span className="text-[#cd2b14]">→</span>
                    {service}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#cd2b14] rounded-full"></span>
              Contact
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#cd2b14]" />
                <p>Sola Gham, Ahmedabad</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#cd2b14]" />
                <p>+91 96499 57698</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#cd2b14]" />
                <p>info@welldonemetalworks.com</p>
              </div>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#cd2b14] rounded-full"></span>
              Legal
            </h3>

            <ul className="space-y-2 text-sm">

              {legal.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-[#b72d2c] to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 text-sm text-gray-400 gap-3">

          <p>
            © {new Date().getFullYear()} Welldone Metalworks. All rights reserved.
          </p>

          <p>
            Crafted with precision metal engineering.
          </p>

        </div>

      </div>

    </footer>
  );
}