"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function MapEmbed() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* MAP */}
      <div className="relative w-full h-[400px]">

  <iframe
    title="Welldone Metalworks Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.551184310247!2d72.51386717477196!3d23.08122021413805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8342441cd9ff%3A0x7f3b4b1c80023719!2sWellDone%20Metalworks!5e1!3m2!1sen!2sin!4v1773210364073!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 w-full h-full"
  />

  {/* FIXED OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-transparent pointer-events-none"></div>

</div>

    </section>
  );
}