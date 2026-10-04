"use client";

import { useState } from "react";

import GalleryHero from "@/components/Gallery/GalleryHero";
import GalleryShowcase from "@/components/Gallery/GalleryShowcase";
import GalleryFilter from "@/components/Gallery/GalleryFilter";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import GallerySeoContent from "@/components/Gallery/GallerySeoContent";
import GalleryCTA from "@/components/Gallery/GalleryCTA";

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main>
      {/* =====================================================
          GALLERY HERO
      ===================================================== */}

      <GalleryHero />

      {/* =====================================================
          FEATURED SHOWCASE
      ===================================================== */}

      <GalleryShowcase />

      {/* =====================================================
          GALLERY CONTENT
      ===================================================== */}

      <div className="wm-container">
        <div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* =================================================
              CATEGORY FILTER
          ================================================= */}

          <GalleryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* =================================================
              GALLERY GRID
          ================================================= */}

          <GalleryGrid
            activeCategory={activeCategory}
          />
        </div>
      </div>

      {/* =====================================================
          SEO CONTENT
      ===================================================== */}

      <GallerySeoContent />

      {/* =====================================================
          CTA
      ===================================================== */}

      <GalleryCTA />
    </main>
  );
}