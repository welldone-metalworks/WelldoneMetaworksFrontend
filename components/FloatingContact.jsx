"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  const phoneNumber = "919649957698";

  const whatsappMessage =
    "Hi, I need metal fabrication service in Ahmedabad. Please share details.";

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-[9999]
        flex
        flex-col
        gap-2.5
      "
    >
      {/* =====================================================
          WHATSAPP
      ====================================================== */}
      <button
        type="button"
        onClick={handleWhatsApp}
        aria-label="Chat with Welldone Metalworks on WhatsApp"
        className="
          group
          flex
          h-12
          w-12
          items-center
          justify-center
          gap-2.5
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_24px_rgba(37,211,102,0.25)]
          transition-all
          duration-300
          hover:scale-105
          hover:bg-[#20bd5a]
          sm:h-auto
          sm:w-auto
          sm:justify-start
          sm:rounded-xl
          sm:px-4
          sm:py-3
        "
      >
        <FaWhatsapp
          size={21}
          className="shrink-0"
        />

        <span
          className="
            hidden
            text-xs
            font-bold
            sm:block
          "
        >
          WhatsApp
        </span>
      </button>

      {/* =====================================================
          CALL
      ====================================================== */}
      <button
        type="button"
        onClick={handleCall}
        aria-label="Call Welldone Metalworks"
        className="
          group
          flex
          h-12
          w-12
          items-center
          justify-center
          gap-2.5
          rounded-full
          bg-wm-navy
          text-white
          shadow-[0_8px_24px_rgba(15,35,55,0.22)]
          transition-all
          duration-300
          hover:scale-105
          hover:bg-wm-primary-dark
          sm:h-auto
          sm:w-auto
          sm:justify-start
          sm:rounded-xl
          sm:px-4
          sm:py-3
        "
      >
        <Phone
          size={19}
          strokeWidth={2}
          className="shrink-0"
        />

        <span
          className="
            hidden
            text-xs
            font-bold
            sm:block
          "
        >
          Call Now
        </span>
      </button>
    </div>
  );
}