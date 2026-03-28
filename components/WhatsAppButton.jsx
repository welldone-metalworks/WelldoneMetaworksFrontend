"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919649957598"; // WhatsApp Business number (no +, no spaces)

  const message =
    "Hi, I need metal fabrication service in Ahmedabad. Please share details.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);

    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Mobile → open app | Desktop → open web
    const url = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        {/* Icon */}
        <FaWhatsapp size={22} />

        {/* Text */}
        <span className="text-sm font-semibold">
          Get Quote
        </span>
      </button>
    </div>
  );
}