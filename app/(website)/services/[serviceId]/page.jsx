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
  FaArrowRight,
} from "react-icons/fa";

import HeroSection from "@/components/About/HeroSection";

//
// ========================================
// SERVICES DATA
// ========================================
//
const servicesData = {
  "custom-metal-fabrication":
    {
      icon: <FaHammer />,

      title:
        "Custom Metal Fabrication",

      shortTitle:
        "Custom Fabrication",

      description:
        "We design and build premium industrial metal solutions tailored to your exact requirements with precision engineering and modern fabrication techniques.",

      highlights: [
        "High-quality stainless steel, aluminum & iron work",
        "Advanced CNC cutting & bending machines",
        "Durable designs built for long-lasting use",
        "Fully customized industrial solutions",
      ],

      process: [
        "Consultation & requirement gathering",
        "Design & 3D modeling",
        "Fabrication & assembly",
        "Quality testing & delivery",
      ],

      whyChoose: [
        "Expert team with 10+ years of experience",
        "On-time project delivery",
        "Premium industrial-grade materials",
        "Transparent process & competitive pricing",
      ],

      image:
        "/services/custom_fabrication.jpg",
    },

  "structural-metalworks":
    {
      icon: <FaWrench />,

      title:
        "Structural Metalworks",

      shortTitle:
        "Structural Works",

      description:
        "Strong and durable industrial structural fabrication services for warehouses, factories and commercial infrastructure projects.",

      highlights: [
        "Industrial beams & columns fabrication",
        "Weather & corrosion resistant structures",
        "Advanced welding technology",
        "Heavy-duty structural frameworks",
      ],

      process: [
        "Structural design & analysis",
        "Material preparation & cutting",
        "Assembly & welding",
        "Inspection & approval",
      ],

      whyChoose: [
        "Trusted by industrial contractors",
        "Precision structural engineering",
        "Long-lasting heavy-duty construction",
        "Compliance with safety standards",
      ],

      image:
        "/services/structural02.jpg",
    },

  "decorative-metalwork":
    {
      icon: <FaTools />,

      title:
        "Decorative Metalwork",

      shortTitle:
        "Decorative Works",

      description:
        "Elegant decorative metal fabrication solutions including gates, railings, partitions and designer custom metal products.",

      highlights: [
        "Designer gates & railings",
        "Custom decorative metal furniture",
        "Luxury modern finishes",
        "Premium architectural aesthetics",
      ],

      process: [
        "Concept design",
        "Metal shaping & engraving",
        "Finishing & detailing",
        "Professional installation",
      ],

      whyChoose: [
        "Modern & elegant designs",
        "Attention to every detail",
        "High-quality finishing",
        "Fully customized solutions",
      ],

      image:
        "/services/decorative01.jpg",
    },

  "metal-finishing":
    {
      icon: <FaCogs />,

      title:
        "Metal Finishing & Coating",

      shortTitle:
        "Metal Finishing",

      description:
        "Professional powder coating, galvanizing and industrial metal finishing services for enhanced durability and premium appearance.",

      highlights: [
        "Rust & corrosion resistance",
        "Premium powder coating",
        "Industrial-grade finishing",
        "Long-lasting protective coatings",
      ],

      process: [
        "Surface preparation",
        "Coating application",
        "Heat curing process",
        "Final inspection",
      ],

      whyChoose: [
        "Premium finishing quality",
        "Enhanced product durability",
        "Weather-resistant coating",
        "Modern finishing technology",
      ],

      image:
        "/services/metal_coating.jpg",
    },

  "welding-repairs": {
    icon: <FaShieldAlt />,

    title:
      "Welding and Repairs",

    shortTitle:
      "Welding Services",

    description:
      "Professional industrial welding and repair solutions using MIG, TIG and arc welding techniques for maximum strength and durability.",

    highlights: [
      "Certified industrial welders",
      "Emergency repair services",
      "Structural reinforcement",
      "Heavy-duty welding solutions",
    ],

    process: [
      "Damage inspection",
      "Surface preparation",
      "Welding & repairs",
      "Strength testing",
    ],

    whyChoose: [
      "Experienced certified team",
      "Fast & reliable service",
      "Durable repair solutions",
      "Precision welding techniques",
    ],

    image:
      "/services/welding.jpg",
  },

  "custom-painting": {
    icon: <FaPaintBrush />,

    title:
      "Custom Painting & Design",

    shortTitle:
      "Painting & Design",

    description:
      "Premium industrial and decorative painting solutions with durable coatings, textures and customized finishing designs.",

    highlights: [
      "Custom industrial color themes",
      "Weather-resistant coatings",
      "Creative textured finishes",
      "Premium quality paints",
    ],

    process: [
      "Surface cleaning",
      "Primer application",
      "Painting & finishing",
      "Protective coating",
    ],

    whyChoose: [
      "Creative design expertise",
      "Long-lasting paint quality",
      "Professional finishing",
      "Customized color solutions",
    ],

    image:
      "/services/decorative02.jpg",
  },
};

//
// ========================================
// SEO METADATA
// ========================================
//
export async function generateMetadata({
  params,
}) {
  //
  // NEXTJS 16 FIX
  //
  const resolvedParams =
    await params;

  const serviceId =
    resolvedParams?.serviceId ||
    "";

  //
  // FIND SERVICE
  //
  const service =
    servicesData[
      serviceId
    ];

  return {
    title:
      service?.title ||
      "Industrial Services | Welldone Metalworks",

    description:
      service?.description ||
      "Premium industrial fabrication and engineering services.",
  };
}

//
// ========================================
// PAGE COMPONENT
// ========================================
//
export default async function ServiceDetailPage({
  params,
}) {
  //
  // NEXTJS 16 FIX
  //
  const resolvedParams =
    await params;

  const serviceId =
    resolvedParams?.serviceId ||
    "";

  //
  // FIND SERVICE
  //
  const service =
    servicesData[
      serviceId
    ];

  //
  // SERVICE NOT FOUND
  //
  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900">
            Service Not Found
          </h1>

          <p className="text-gray-500 text-lg mt-5 max-w-xl mx-auto">
            The requested
            service could not
            be found.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Back To Services

            <FaArrowRight />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <HeroSection
        title={
          service.title
        }
        breadcrumb="Services"
        bgImage="/banner/banner02.jpg"
      />

      {/* MAIN SECTION */}
      <section className="relative py-24 bg-[#f8f8f8] overflow-hidden">
        {/* BACKGROUND EFFECT */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cd2b14]/5 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* TOP GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[35px] shadow-[0_25px_80px_rgba(0,0,0,0.15)] group">
              <Image
                src={
                  service.image
                }
                alt={
                  service.title
                }
                width={800}
                height={600}
                priority
                className="w-full h-[550px] object-cover group-hover:scale-105 transition-all duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* CONTENT */}
            <div>
              {/* ICON */}
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white flex items-center justify-center text-4xl shadow-2xl">
                {service.icon}
              </div>

              {/* TITLE */}
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mt-8">
                {service.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="text-lg text-gray-600 leading-9 mt-8">
                {
                  service.description
                }
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-10 space-y-5">
                {service.highlights.map(
                  (
                    point,
                    index
                  ) => (
                    <div
                      key={
                        index
                      }
                      className="flex items-start gap-4"
                    >
                      <FaCheckCircle className="text-[#cd2b14] text-xl mt-1" />

                      <p className="text-gray-700 text-lg leading-8">
                        {
                          point
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* PROCESS SECTION */}
          <div className="mt-28">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-[#cd2b14] font-semibold text-sm">
                Work Process
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-5">
                Our Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map(
                (
                  step,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="relative bg-white p-8 rounded-[30px] shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* STEP NUMBER */}
                    <div className="absolute -top-5 left-8 w-12 h-12 rounded-2xl bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white flex items-center justify-center font-black shadow-xl">
                      {index + 1}
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 mt-6">
                      Step{" "}
                      {index + 1}
                    </h3>

                    <p className="text-gray-600 leading-8 mt-5">
                      {step}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* WHY CHOOSE */}
          <div className="mt-28">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.3em] text-[#cd2b14] font-semibold text-sm">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-5">
                Trusted Industrial
                Experts
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.whyChoose.map(
                (
                  point,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="flex items-start gap-5 bg-white p-8 rounded-[30px] shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-100"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white flex items-center justify-center text-xl shrink-0 shadow-lg">
                      <FaCheckCircle />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-gray-900">
                        Premium Quality
                      </h3>

                      <p className="text-gray-600 leading-8 mt-3">
                        {
                          point
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="mt-28">
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1f2937] px-8 md:px-16 py-20 text-center shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#cd2b14]/20 blur-3xl rounded-full" />

              <div className="relative z-10">
                <p className="uppercase tracking-[0.3em] text-[#ff7b67] font-semibold text-sm">
                  Get Started
                </p>

                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mt-6">
                  Need Professional
                  Industrial Services?
                </h2>

                <p className="text-gray-300 text-lg leading-9 max-w-3xl mx-auto mt-8">
                  Contact Welldone
                  Metalworks today
                  for premium
                  industrial
                  fabrication and
                  engineering
                  solutions tailored
                  to your business
                  requirements.
                </p>

                <div className="flex flex-wrap justify-center gap-5 mt-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Get Free Quote

                    <FaArrowRight />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}