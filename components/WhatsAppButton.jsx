"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919649957598"; // your number with country code
  const message = "Hello, I want to enquire about metal fabrication services";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Icon */}
        <FaWhatsapp size={22} />

        {/* Text (hidden on mobile, visible on desktop) */}
        <span className="text-sm font-semibold">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}