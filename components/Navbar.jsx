"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Enquiry", href: "/enquiry" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* ---------- Top Bar ---------- */}
      <div className="hidden md:block bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white text-sm">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex gap-6">
            <span>📞 +91 96499 57698</span>
            <span>✉️ info@welldone-metalworks.in</span>
          </div>

          <div className="flex gap-4 ">
            <a href="#" className="hover:scale-110 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <div className="backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Welldone Metalworks"
              width={180}
              height={72}
              className="h-[70px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 font-semibold text-[17px]">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="relative group text-gray-800"
              >
                {link.name}

                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#cd2b14] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative inline-flex items-center px-7 py-3 font-semibold text-white rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]"></span>

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#cd2b14] via-[#b72d2c] to-[#981d13]"></span>

              <span className="relative">Get Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="max-w-[1280px] mx-auto px-6 py-6 space-y-5">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-[#cd2b14]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
