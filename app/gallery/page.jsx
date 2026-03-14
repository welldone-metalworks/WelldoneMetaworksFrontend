"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import HeroSection from "../../components/About/HeroSection";

export default function GalleryPage() {

  const categories = [
    "All",
    "Garden Structure",
    "Gazebo Structure",
    "Railing Structure",
    "Heavy Conventional",
    "Polycarbonate Roofing",
  ];

  const galleryData = [
    {
      category: "Garden Structure",
      images: [
        "/gallery/garden/garden01.jpg",
        "/gallery/garden/garden02.jpg",
        "/gallery/garden/garden03.jpg",
        "/gallery/garden/garden04.jpg",
        "/gallery/garden/garden05.jpg",
        "/gallery/garden/garden06.jpg",
        "/gallery/garden/garden07.jpg",
        "/gallery/garden/garden08.jpg",
        "/gallery/garden/garden09.jpg",
        "/gallery/garden/garden10.jpg",
        "/gallery/garden/garden11.jpg",
        "/gallery/garden/garden12.jpg",
        "/gallery/garden/garden13.jpg",
        "/gallery/garden/garden14.jpg",
        "/gallery/garden/garden15.jpg",
      ],
    },
    {
      category: "Gazebo Structure",
      images: [
        "/gallery/gazebo/gazebo01.jpg",
        "/gallery/gazebo/gazebo03.jpg",
        "/gallery/gazebo/gazebo04.jpg",
        "/gallery/gazebo/gazebo05.jpg",
        "/gallery/gazebo/gazebo06.jpg",
        "/gallery/gazebo/gazebo07.jpg",
        "/gallery/gazebo/gazebo08.jpg",
        "/gallery/gazebo/gazebo09.jpg",
        "/gallery/gazebo/gazebo10.jpg",
        "/gallery/gazebo/gazebo11.jpg",
        "/gallery/gazebo/gazebo12.jpg",
        "/gallery/gazebo/gazebo13.jpg",
        "/gallery/gazebo/gazebo14.jpg",
        "/gallery/gazebo/gazebo15.jpg",
        "/gallery/gazebo/gazebo16.jpg",
        "/gallery/gazebo/gazebo17.jpg",
        "/gallery/gazebo/gazebo18.jpg",
        "/gallery/gazebo/gazebo19.jpg",
        "/gallery/gazebo/gazebo20.jpg",
        "/gallery/gazebo/gazebo21.jpg",
        "/gallery/gazebo/gazebo22.jpg",
        "/gallery/gazebo/gazebo23.jpg",
        "/gallery/gazebo/gazebo24.jpg",
        "/gallery/gazebo/gazebo25.jpg",
        "/gallery/gazebo/gazebo26.jpg",
        "/gallery/gazebo/gazebo27.jpg",
        "/gallery/gazebo/gazebo28.jpg",
        "/gallery/gazebo/gazebo29.jpg",
        "/gallery/gazebo/gazebo30.jpg",
        "/gallery/gazebo/gazebo31.jpg",
        "/gallery/gazebo/gazebo32.jpg",
        "/gallery/gazebo/gazebo33.jpg",
        "/gallery/gazebo/gazebo34.jpg",
        "/gallery/gazebo/gazebo35.jpg",
        "/gallery/gazebo/gazebo36.jpg",
        "/gallery/gazebo/gazebo37.jpg",
        "/gallery/gazebo/gazebo38.jpg",
        "/gallery/gazebo/gazebo39.jpg",
        "/gallery/gazebo/gazebo40.jpg",
        "/gallery/gazebo/gazebo41.jpg",
        "/gallery/gazebo/gazebo42.jpg",
        "/gallery/gazebo/gazebo43.jpg",
        "/gallery/gazebo/gazebo44.jpg",
        "/gallery/gazebo/gazebo45.jpg",
        "/gallery/gazebo/gazebo46.jpg",
        "/gallery/gazebo/gazebo47.jpg",
        "/gallery/gazebo/gazebo48.jpg",
        "/gallery/gazebo/gazebo49.jpg",
        "/gallery/gazebo/gazebo50.jpg",
        "/gallery/gazebo/gazebo51.jpg",
        "/gallery/gazebo/gazebo52.jpg",
        "/gallery/gazebo/gazebo53.jpg",
        "/gallery/gazebo/gazebo54.jpg",
        "/gallery/gazebo/gazebo55.jpg",
        "/gallery/gazebo/gazebo56.jpg",
        "/gallery/gazebo/gazebo57.jpg",
        "/gallery/gazebo/gazebo58.jpg",
        "/gallery/gazebo/gazebo59.jpg",
        "/gallery/gazebo/gazebo60.jpg",
        "/gallery/gazebo/gazebo61.jpg",
        "/gallery/gazebo/gazebo62.jpg",
        "/gallery/gazebo/gazebo63.jpg",
        "/gallery/gazebo/gazebo64.jpg",
        "/gallery/gazebo/gazebo65.jpg",
        "/gallery/gazebo/gazebo66.jpg",
        "/gallery/gazebo/gazebo67.jpg",
      ],
    },
    {
      category: "Railing Structure",
      images: [
        "/gallery/railing/ralling01.jpg",
        "/gallery/railing/ralling02.jpg",
        "/gallery/railing/ralling03.jpg",
        "/gallery/railing/ralling04.jpg",
        "/gallery/railing/ralling05.jpg",
        "/gallery/railing/ralling06.jpg",
        "/gallery/railing/ralling07.jpg",
        "/gallery/railing/ralling08.jpg",
        "/gallery/railing/ralling09.jpg",
        "/gallery/railing/ralling10.jpg",
        "/gallery/railing/ralling11.jpg",
        "/gallery/railing/ralling12.jpg",
        "/gallery/railing/ralling13.jpg",
        "/gallery/railing/ralling14.jpg",
        "/gallery/railing/ralling15.jpg",
        "/gallery/railing/ralling16.jpg",
        "/gallery/railing/ralling17.jpg",
        "/gallery/railing/ralling18.jpg",
        "/gallery/railing/ralling19.jpg",
        "/gallery/railing/ralling20.jpg",
        "/gallery/railing/ralling21.jpg",
        "/gallery/railing/ralling22.jpg",
        "/gallery/railing/ralling23.jpg",
        "/gallery/railing/ralling24.jpg",
        "/gallery/railing/ralling25.jpg",
        "/gallery/railing/ralling26.jpg",
        "/gallery/railing/ralling27.jpg",
        "/gallery/railing/ralling28.jpg",
        "/gallery/railing/ralling29.jpg",
        "/gallery/railing/ralling30.jpg",
        "/gallery/railing/ralling31.jpg",
      ],
    },
    {
      category: "Heavy Conventional",
      images: [
        "/gallery/heavy/heavy_convenstional01.jpg",
        "/gallery/heavy/heavy_convenstional02.jpg",
        "/gallery/heavy/heavy_convenstional03.jpg",
        "/gallery/heavy/heavy_convenstional04.jpg",
        "/gallery/heavy/heavy_convenstional05.jpg",
        "/gallery/heavy/heavy_convenstional06.jpg",
      ],
    },
    {
      category: "Polycarbonate Roofing",
      images: [
        "/gallery/roof/polycarbonate_roof01.jpg",
        "/gallery/roof/polycarbonate_roof02.jpg",
        "/gallery/roof/polycarbonate_roof03.jpg",
        "/gallery/roof/polycarbonate_roof04.jpg",
        "/gallery/roof/polycarbonate_roof05.jpg",
        "/gallery/roof/polycarbonate_roof06.jpg",
        "/gallery/roof/polycarbonate_roof07.jpg",
        "/gallery/roof/polycarbonate_roof08.jpg",
        "/gallery/roof/polycarbonate_roof09.jpg",
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = galleryData.flatMap((group) =>
    group.images.map((src) => ({
      src,
      category: group.category,
    }))
  );

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-24 bg-[#f9fafb]">

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Welldone Metalworks Metal Fabrication Project Gallery",
            url: "https://welldone-metalworks.in/gallery",
            description:
              "Gallery of metal fabrication projects including gazebo structures, garden metal structures, railing fabrication and roofing systems in Ahmedabad.",
            publisher: {
              "@type": "Organization",
              name: "Welldone Metalworks",
            },
          }),
        }}
      />

      <HeroSection
        title="Our Gallery"
        breadcrumb="Gallery"
        bgImage="/Banner/banner02.webp"
      />

      {/* SEO Content Section */}
      <section className="py-14 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Metal Fabrication Projects in Ahmedabad
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Welldone Metalworks showcases a wide range of completed metal fabrication projects across Ahmedabad.
            Our gallery highlights real fabrication work including gazebo structures, garden metal structures,
            railing fabrication, heavy conventional metal fabrication and polycarbonate roofing systems.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Each project represents our dedication to precision engineering, durable materials and modern fabrication
            techniques. From residential garden structures to commercial metal installations, our team ensures that
            every project is strong, reliable and architecturally impressive.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Explore our fabrication work to understand the quality and craftsmanship delivered by Welldone Metalworks.
            If you are planning a custom metal fabrication project in Ahmedabad, our experienced team can provide
            tailored solutions designed for durability and modern design.
          </p>

        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#111827]">
              Our Fabrication Work Showcase
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  activeCategory === cat
                    ? "text-white"
                    : "bg-white border text-gray-700"
                }`}
                style={
                  activeCategory === cat
                    ? {
                        background:
                          "linear-gradient(to right,#981d13,#b72d2c,#cd2b14)",
                      }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredImages.map((img, index) => {

              const globalIndex = allImages.findIndex((i) => i.src === img.src);

              return (
                <div
                  key={index}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
                  onClick={() => {
                    setCurrentIndex(globalIndex);
                    setOpen(true);
                  }}
                >

                  <Image
                    src={img.src}
                    alt={`Metal fabrication ${img.category} project by Welldone Metalworks Ahmedabad`}
                    width={500}
                    height={400}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
                    <ZoomIn size={20} />
                    <span className="text-sm mt-2">{img.category}</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={allImages.map((img) => ({ src: img.src }))}
      />

    </div>
  );
}