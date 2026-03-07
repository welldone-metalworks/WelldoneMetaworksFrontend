"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import HeroSection from "../../components/About/HeroSection";

export default function GalleryPage() {
  // Categories
  const categories = [
    "All",
    "Garden Structure",
    "Gazebo Structure",
    "Railing Structure",
    "Heavy Conventional",
    "Polycarbonate Roofing",
  ];

  // Gallery data
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

  // Flatten all images
  const allImages = galleryData.flatMap((group) =>
    group.images.map((src) => ({
      src,
      category: group.category,
    }))
  );

  // Filter images
  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero */}
      <HeroSection
        title="Our Gallery"
        breadcrumb="Gallery"
        bgImage="/banner/banner02.jpg"
      />

      <div className="pt-10 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-8 text-[var(--color-dark)]">
            Our Gallery
          </h1>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => {
              const globalIndex = allImages.findIndex(
                (i) => i.src === img.src
              );

              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(globalIndex);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.category}
                    width={400}
                    height={300}
                    className="rounded-xl shadow-md w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold rounded-xl">
                    View
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={allImages.map((img) => ({ src: img.src }))}
        />
      </div>
    </div>
  );
}
  