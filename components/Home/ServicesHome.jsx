"use client";

import { motion } from "framer-motion";
import { Hammer, Wrench, Star, Layers, Shield, Grid } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: <Hammer size={26} />,
    title: "Custom Fabrication",
    description: "Custom steel and metal fabrication tailored to your needs.",
    slug: "custom-metal-fabrication",
    image: "/HomeImg/post7.webp",
  },
  {
    icon: <Wrench size={26} />,
    title: "Gazebo Structures",
    description: "Elegant metal gazebos and outdoor garden structures.",
    slug: "gazebo-garden-structures",
    image: "/HomeImg/gazebo.webp",
  },
  {
    icon: <Grid size={26} />,
    title: "Sports Court Fencing",
    description: "Durable metal fencing structures for sports courts and play areas.",
    slug: "sports-court-fencing",
    image: "/HomeImg/Sports.webp",
  },
  {
    icon: <Layers size={26} />,
    title: "Railing & Fencing",
    description: "Modern railings and fencing with strong metal frames.",
    slug: "railing-fencing",
    image: "/HomeImg/post9.jpeg",
  },
  {
    icon: <Shield size={26} />,
    title: "Security Gates",
    description: "Heavy-duty metal gates designed for safety and durability.",
    slug: "security-gates",
    image: "/HomeImg/gates.webp",
  },
  {
    icon: <Grid size={26} />,
    title: "Metal Panels",
    description: "Decorative metal panels and grills for modern spaces.",
    slug: "metal-grills-panels",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
];

export default function ServicesHome() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-[1280px] mx-auto text-center px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#981d13] via-[#b72d2c] to-[#cd2b14]">
            Services
          </span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our premium metal fabrication solutions designed for
          durability, safety, and modern architecture.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition"></div>

            {/* Gradient Accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                style={{
                  background: "linear-gradient(135deg,#981d13,#b72d2c,#cd2b14)",
                }}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              <p className="text-sm text-gray-200 mb-4">
                {service.description}
              </p>

              <button
                onClick={() => router.push(`/services/${service.slug}`)}
                className="border border-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                View Service
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
