import Image from "next/image";
import Link from "next/link";
import {
  FaHammer,
  FaWrench,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaPaintBrush,
  FaCheckCircle,
} from "react-icons/fa";
import HeroSection from "../../../components/About/HeroSection";

/* ===========================
   SERVICES DATA (IMPORTANT)
=========================== */
const servicesData = {
  "custom-metal-fabrication": {
    icon: <FaHammer />,
    title: "Custom Metal Fabrication",
    description:
      "We design and build unique metal solutions tailored to your needs. Whether it's industrial or decorative, precision is guaranteed.",
    highlights: [
      "High-quality stainless steel, aluminum & iron work",
      "Advanced CNC cutting & bending machines",
      "Durable designs built for long-lasting use",
      "Fully customized to your requirements",
    ],
    process: [
      "Consultation & requirement gathering",
      "Design & 3D modeling",
      "Fabrication & assembly",
      "Quality testing & delivery",
    ],
    whyChoose: [
      "Expert team with 10+ years of experience",
      "On-time delivery with no compromise on quality",
      "Competitive pricing and transparent process",
    ],
    image: "/services/custom_fabrication.jpg",
  },

  "structural-metalworks": {
    icon: <FaWrench />,
    title: "Structural Metalworks",
    description:
      "From industrial frameworks to construction supports, we deliver safe and strong structures that stand the test of time.",
    highlights: [
      "Beams, columns, and trusses fabrication",
      "Earthquake & weather-resistant structures",
      "Compliance with safety standards",
    ],
    process: [
      "Structural design & analysis",
      "Material preparation & cutting",
      "Assembly & welding",
      "Final inspection & approval",
    ],
    whyChoose: [
      "Trusted by major industries & contractors",
      "State-of-the-art welding techniques",
      "Expert quality inspection",
    ],
    image: "/services/structural02.jpg",
  },

  "decorative-metalwork": {
    icon: <FaTools />,
    title: "Decorative Metalwork",
    description:
      "Elegant decorative elements like railings, gates, panels, and custom metal furniture.",
    highlights: [
      "Designer gates & railings",
      "Custom metal furniture",
      "Durable yet aesthetic designs",
    ],
    process: [
      "Concept design",
      "Metal shaping & engraving",
      "Finishing & detailing",
      "Installation",
    ],
    whyChoose: [
      "Unique custom designs",
      "Attention to fine details",
      "Modern & traditional blend",
    ],
    image: "/services/decorative01.jpg",
  },

  "metal-finishing": {
    icon: <FaCogs />,
    title: "Metal Finishing & Coating",
    description:
      "Premium finishing services including powder coating, painting, and galvanizing.",
    highlights: [
      "Rust & corrosion resistance",
      "Wide color & texture options",
      "Long-lasting coatings",
    ],
    process: [
      "Surface preparation",
      "Coating application",
      "Curing process",
      "Final inspection",
    ],
    whyChoose: [
      "Premium finishing quality",
      "Enhanced durability",
      "Improved aesthetics",
    ],
    image: "/services/metal_coating.jpg",
  },

  "welding-repairs": {
    icon: <FaShieldAlt />,
    title: "Welding and Repairs",
    description:
      "Professional MIG, TIG & arc welding services with reliable repair solutions.",
    highlights: [
      "Certified welders",
      "Emergency repair services",
      "Structural reinforcement",
    ],
    process: [
      "Damage assessment",
      "Surface preparation",
      "Welding & repair",
      "Strength testing",
    ],
    whyChoose: [
      "Fast & reliable service",
      "Certified professionals",
      "Restores strength",
    ],
    image: "/services/welding.jpg",
  },

  "custom-painting": {
    icon: <FaPaintBrush />,
    title: "Custom Painting & Design",
    description:
      "Custom paint finishes, textures, and patterns to make your metal projects stand out.",
    highlights: [
      "Custom color themes",
      "Durable coatings",
      "Creative designs",
    ],
    process: [
      "Surface cleaning",
      "Primer application",
      "Painting & design",
      "Protective coating",
    ],
    whyChoose: [
      "Creative solutions",
      "High-quality paints",
      "Perfect finish",
    ],
    image: "/services/decorative02.jpg",
  },
};

/* ===========================
   PAGE COMPONENT
=========================== */
export default async function ServiceDetailPage({ params }) {
  const { serviceId } = params;
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <p className="text-center text-red-500 mt-24">
        Service not found.
      </p>
    );
  }

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Service Details"
        breadcrumb="Services"
        bgImage="/banner/banner02.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Image
            src={service.image}
            alt={service.title}
            width={700}
            height={450}
            className="rounded-2xl shadow-lg object-cover"
          />

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl text-[var(--color-primary)]">
                {service.icon}
              </div>
              <h1 className="text-4xl font-bold text-[var(--color-dark)]">
                {service.title}
              </h1>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              {service.description}
            </p>

            <h2 className="text-2xl font-semibold mb-3">
              Key Highlights
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {service.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-5xl mx-auto mt-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow"
              >
                <div className="text-[var(--color-primary)] font-bold mb-2">
                  Step {i + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div className="max-w-5xl mx-auto mt-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose This Service?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.whyChoose.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl"
              >
                <FaCheckCircle className="text-[var(--color-primary)] text-xl mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]
                       text-white px-8 py-3 rounded-full font-semibold"
          >
            ← Back to Services
          </Link>
        </div>
      </section>
    </>
  );
}
