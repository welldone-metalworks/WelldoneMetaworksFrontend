"use client";

import Image from "next/image";
import { ArrowUpRight, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  // =========================================================
  // GARDEN STRUCTURE
  // =========================================================
  ...Array.from({ length: 15 }, (_, i) => ({
    src: `/gallery/garden/garden${String(i + 1).padStart(2, "0")}.jpg`,
    category: "Garden Structure",
  })),

  // =========================================================
  // GAZEBO STRUCTURE
  // gazebo02 is intentionally skipped because it does not
  // exist in the current gallery asset naming.
  // =========================================================
  {
    src: "/gallery/gazebo/gazebo01.jpg",
    category: "Gazebo Structure",
  },

  ...Array.from({ length: 65 }, (_, i) => {
    const number = i + 3;

    return {
      src: `/gallery/gazebo/gazebo${String(number).padStart(2, "0")}.jpg`,
      category: "Gazebo Structure",
    };
  }),

  // =========================================================
  // RAILING STRUCTURE
  // Existing asset folder/file naming uses "ralling".
  // =========================================================
  ...Array.from({ length: 31 }, (_, i) => ({
    src: `/gallery/railing/ralling${String(i + 1).padStart(2, "0")}.jpg`,
    category: "Railing Structure",
  })),

  // =========================================================
  // HEAVY CONVENTIONAL
  // Existing filename uses "heavy_convenstional".
  // =========================================================
  ...Array.from({ length: 6 }, (_, i) => ({
    src: `/gallery/heavy/heavy_convenstional${String(i + 1).padStart(2, "0")}.jpg`,
    category: "Heavy Conventional",
  })),

  // =========================================================
  // POLYCARBONATE ROOFING
  // =========================================================
  ...Array.from({ length: 9 }, (_, i) => ({
    src: `/gallery/roof/polycarbonate_roof${String(i + 1).padStart(2, "0")}.jpg`,
    category: "Polycarbonate Roofing",
  })),
];

export default function GalleryGrid({
  activeCategory = "All",
  onImageClick,
}) {
  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="gallery"
      className="min-w-0 bg-wm-surface-soft pb-20 sm:pb-24 lg:pb-28"
    >
      {/* =========================================================
          GALLERY HEADER
      ========================================================= */}
      <div className="mb-8 flex flex-col gap-4 border-b border-wm-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="wm-eyebrow">
            <span className="h-px w-8 bg-wm-primary" />
            Project Gallery
          </div>

          <h2 className="wm-heading mt-4 text-2xl sm:text-3xl">
            Selected fabrication work.
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-wm-muted">
            {filteredImages.length}{" "}
            {filteredImages.length === 1 ? "image" : "images"}
          </span>

          <span className="h-1.5 w-1.5 bg-wm-primary" />
        </div>
      </div>

      {/* =========================================================
          IMAGE GRID
      ========================================================= */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12"
        >
          {filteredImages.map((image, index) => {
            /*
             * Editorial image rhythm.
             *
             * Every few images gets a wider presentation so the
             * gallery doesn't feel like a repetitive product grid.
             */
            const isFeature =
              index % 7 === 0 || index % 7 === 3;

            const columnClass = isFeature
              ? "lg:col-span-6"
              : "lg:col-span-3";

            return (
              <motion.button
                key={`${image.src}-${index}`}
                layout
                type="button"
                onClick={() =>
                  onImageClick?.(
                    image,
                    index,
                    filteredImages
                  )
                }
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.025, 0.3),
                }}
                className={`group relative block w-full overflow-hidden border border-wm-border bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-wm-primary ${columnClass}`}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <div
                  className={`relative overflow-hidden ${
                    isFeature
                      ? "aspect-[1.45/1]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`${image.category} fabrication work by Welldone Metalworks`}
                    fill
                    sizes={
                      isFeature
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  {/* =================================================
                      HOVER OVERLAY
                  ================================================= */}
                  <div className="absolute inset-0 bg-wm-navy/0 transition-colors duration-300 group-hover:bg-wm-navy/45" />

                  {/* =================================================
                      CATEGORY LABEL
                  ================================================= */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-block bg-white/95 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em] text-wm-heading transition-opacity duration-300 group-hover:opacity-0">
                      {image.category}
                    </span>
                  </div>

                  {/* =================================================
                      EXPAND ICON
                  ================================================= */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center bg-white text-wm-heading opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand
                      size={15}
                      strokeWidth={2}
                    />
                  </div>

                  {/* =================================================
                      HOVER INFORMATION
                  ================================================= */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-primary-light">
                          Welldone Metalworks
                        </p>

                        <p className="mt-1 text-sm font-extrabold text-white">
                          {image.category}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={2}
                        className="shrink-0 text-white"
                      />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* =========================================================
          EMPTY STATE
      ========================================================= */}
      {filteredImages.length === 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="border border-wm-border bg-white px-6 py-16 text-center"
        >
          <p className="text-sm font-bold text-wm-heading">
            No images available in this category.
          </p>

          <p className="mt-2 text-sm text-wm-muted">
            Please select another fabrication category.
          </p>
        </motion.div>
      )}

      {/* =========================================================
          GALLERY FOOTER
      ========================================================= */}
      {filteredImages.length > 0 && (
        <div className="mt-6 flex items-center justify-between border-t border-wm-border pt-5">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
            Custom MS Fabrication
          </p>

          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-wm-placeholder">
            Ahmedabad & Gandhinagar
          </p>
        </div>
      )}
    </section>
  );
}