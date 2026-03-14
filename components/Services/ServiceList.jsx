"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHammer,
  FaWrench,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaPaintBrush,
} from "react-icons/fa";

function ServiceCard({ icon, title, description, id }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        bg-white
        rounded-3xl
        p-8
        shadow-lg
        hover:shadow-2xl
        border border-gray-100
        transition
        group
      "
    >
      {/* gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]" />

      {/* icon */}
      <div className="
        w-16 h-16
        flex items-center justify-center
        rounded-2xl
        text-white
        text-2xl
        mb-6
        bg-gradient-to-r
        from-[#981d13]
        via-[#b72d2c]
        to-[#cd2b14]
        shadow-lg
      ">
        {icon}
      </div>

      {/* title */}
      <h3 className="text-xl font-bold text-[#111827] mb-3">
        {title}
      </h3>

      {/* description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={`/services/${id}`}
        className="
          inline-block
          mt-6
          font-semibold
          text-[#cd2b14]
          hover:underline
        "
      >
        Learn More →
      </Link>

      {/* hover glow */}
      <div className="
        absolute
        -bottom-10
        -right-10
        w-32
        h-32
        bg-[#cd2b14]/10
        rounded-full
        blur-2xl
        opacity-0
        group-hover:opacity-100
        transition
      " />
    </motion.div>
  );
}

export default function ServicesList() {
  const services = [
    {
      id: "custom-metal-fabrication",
      icon: <FaHammer />,
      title: "Custom Metal Fabrication",
      description:
        "Precision metal fabrication tailored to your exact specifications and structural needs.",
    },
    {
      id: "structural-metalworks",
      icon: <FaWrench />,
      title: "Structural Metalworks",
      description:
        "Durable and reliable structural metal components designed for strength and longevity.",
    },
    {
      id: "decorative-metalwork",
      icon: <FaTools />,
      title: "Decorative Metalwork",
      description:
        "Elegant and creative metal designs crafted for modern architectural spaces.",
    },
    {
      id: "metal-finishing",
      icon: <FaCogs />,
      title: "Metal Finishing & Coating",
      description:
        "High-quality finishing techniques and coatings that enhance durability and appearance.",
    },
    {
      id: "welding-repairs",
      icon: <FaShieldAlt />,
      title: "Welding & Repairs",
      description:
        "Expert welding services and structural repairs for long-lasting performance.",
    },
    {
      id: "custom-painting",
      icon: <FaPaintBrush />,
      title: "Custom Painting & Design",
      description:
        "Professional painting and finishing to give your metalwork a premium look.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#f9fafb] overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#cd2b14]/20 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#981d13]/20 blur-[140px] rounded-full"></div>

      <div className="max-w-[1280px] mx-auto px-6">

        {/* header */}
        <div className="text-center mb-16">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#111827]
          ">
            Our Services
          </h2>

          <div className="w-20 h-[4px] bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
            Welldone Metalworks provides high-quality fabrication services
            with precision engineering and modern craftsmanship.
          </p>

        </div>

        {/* grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}