"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/banner/banner05.webp",
    title: "Precision Metal Fabrication",
    subtitle:
      "High quality steel structures designed for durability and modern architecture.",
    cta: "Explore Services",
  },
  {
    image: "/banner/banner02.webp",
    title: "Modern Gazebo Structures",
    subtitle:
      "Elegant outdoor metal structures crafted with premium fabrication.",
    cta: "View Projects",
  },
  {
    image: "/banner/banner03.webp",
    title: "Polycarbonate Roofing",
    subtitle:
      "Stylish and weather resistant roofing solutions for modern spaces.",
    cta: "Get Quote",
  },
];

export default function Banner() {
  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <div className="relative w-full h-[520px] md:h-[650px] lg:h-[720px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { duration: 0.9, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center text-white">
            <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-12">
              <motion.div
                key={index + "text"}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slides[index].title}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-6">
                  {slides[index].subtitle}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <button
                    className="px-7 py-3 rounded-md font-semibold shadow-lg transition hover:opacity-90"
                    style={{ background: "#cd2b14" }}
                  >
                    {slides[index].cta}
                  </button>

                  <button className="px-7 py-3 border border-white hover:bg-white hover:text-black transition rounded-md">
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className="w-3 h-3 rounded-full transition"
            style={{
              background: i === index ? "#cd2b14" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
