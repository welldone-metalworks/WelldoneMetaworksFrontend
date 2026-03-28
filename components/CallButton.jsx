"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  const phoneNumber = "919649957698";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-5 left-5 z-[9999] flex items-center gap-2 
      bg-gradient-to-r from-red-600 to-red-500 
      hover:from-red-700 hover:to-red-600 
      text-white px-5 py-3 rounded-full shadow-2xl 
      transition-all duration-300 
      hover:scale-110 active:scale-95"
    >
      <Phone size={20} />

      <span className="text-sm font-semibold hidden sm:inline">
        Call Now
      </span>
    </a>
  );
}