"use client";

import Image from "next/image";
import { ArrowUpRight, Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

/* =========================================================
   IMAGE GENERATOR
========================================================= */

const createImages = (prefix, count, category, subcategory = null) =>
  Array.from({ length: count }, (_, i) => {
    const number = String(i + 1).padStart(2, "0");

    return {
      src: `/GalleryImage/${prefix}-${number}.jpg`,
      category,
      subcategory,
    };
  });

/* =========================================================
   GALLERY DATA
   Total relevant gallery images: 382
   Business logo intentionally excluded.
========================================================= */

const galleryData = [
  /* =======================================================
     GATES
  ======================================================= */

  ...createImages("ms-metal-gate", 32, "Gates", "Metal Gates"),

  ...createImages("ms-main-gate", 8, "Gates", "Main Gates"),

  /* =======================================================
     RAILINGS
  ======================================================= */

  ...createImages(
    "ms-balcony-railing",
    24,
    "Railings",
    "Balcony Railings"
  ),

  ...createImages(
    "ms-staircase-railing",
    21,
    "Railings",
    "Staircase Railings"
  ),

  /* =======================================================
     STAIRCASES
  ======================================================= */

  ...createImages(
    "ms-staircase",
    25,
    "Staircases",
    "Metal Staircases"
  ),

  ...createImages(
    "ms-spiral-staircase",
    9,
    "Staircases",
    "Spiral Staircases"
  ),

  ...createImages(
    "ms-fire-escape-staircase",
    1,
    "Staircases",
    "Fire Escape Staircases"
  ),

  /* =======================================================
     SHEDS & CANOPIES
  ======================================================= */

  ...createImages(
    "ms-industrial-shed",
    17,
    "Sheds & Canopies",
    "Industrial Sheds"
  ),

  ...createImages(
    "ms-metal-canopy",
    19,
    "Sheds & Canopies",
    "Metal Canopies"
  ),

  ...createImages(
    "ms-metal-roofing",
    9,
    "Sheds & Canopies",
    "Metal Roofing"
  ),

  /* =======================================================
     GAZEBOS & OUTDOOR
  ======================================================= */

  ...createImages(
    "ms-gazebo",
    9,
    "Gazebos & Outdoor",
    "Gazebos"
  ),

  ...createImages(
    "ms-outdoor-metalwork",
    2,
    "Gazebos & Outdoor",
    "Outdoor Metalwork"
  ),

  /* =======================================================
     CUSTOM / STRUCTURAL FABRICATION
  ======================================================= */

  ...createImages(
    "ms-custom-metal-fabrication",
    14,
    "Custom Fabrication",
    "Custom Metal Fabrication"
  ),

  ...createImages(
    "ms-structural-fabrication",
    8,
    "Custom Fabrication",
    "Structural Fabrication"
  ),

  ...createImages(
    "ms-metal-component",
    2,
    "Custom Fabrication",
    "Metal Components"
  ),

  /* =======================================================
     DOORS
  ======================================================= */

  ...createImages(
    "ms-metal-door",
    33,
    "Doors",
    "Metal Doors"
  ),

  ...createImages(
    "ms-decorative-metal-door",
    10,
    "Doors",
    "Decorative Metal Doors"
  ),

  /* =======================================================
     INDUSTRIAL & STORAGE
  ======================================================= */

  ...createImages(
    "ms-metal-storage-rack",
    11,
    "Industrial & Storage",
    "Storage Racks"
  ),

  ...createImages(
    "ms-metal-partition",
    4,
    "Industrial & Storage",
    "Metal Partitions"
  ),

  ...createImages(
    "ms-glass-metal-partition",
    11,
    "Industrial & Storage",
    "Glass Metal Partitions"
  ),

  /* =======================================================
     ARCHITECTURAL METALWORK
  ======================================================= */

  ...createImages(
    "ms-architectural-metalwork",
    40,
    "Architectural Metalwork",
    "Architectural Metalwork"
  ),

  ...createImages(
    "ms-decorative-metalwork",
    3,
    "Architectural Metalwork",
    "Decorative Metalwork"
  ),

  ...createImages(
    "ms-metal-arch",
    2,
    "Architectural Metalwork",
    "Metal Arches"
  ),

  ...createImages(
    "ms-ceiling-metalwork",
    2,
    "Architectural Metalwork",
    "Ceiling Metalwork"
  ),

  ...createImages(
    "ms-metal-signage",
    1,
    "Architectural Metalwork",
    "Metal Signage"
  ),

  /* =======================================================
     WELDING
  ======================================================= */

  ...createImages(
    "ms-welding-process",
    49,
    "Welding",
    "Welding & Installation"
  ),

  /* =======================================================
     WINDOW GRILLS
  ======================================================= */

  ...createImages(
    "ms-window-grill",
    15,
    "Window Grills",
    "Window Grills"
  ),

  /* =======================================================
     OTHER METALWORK
  ======================================================= */

  ...createImages(
    "",
    1,
    "Miscellaneous Metalwork"
  ),
];

/* =========================================================
   CATEGORY CONFIGURATION
========================================================= */

const categories = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Gates",
    value: "Gates",
  },
  {
    label: "Railings",
    value: "Railings",
  },
  {
    label: "Staircases",
    value: "Staircases",
  },
  {
    label: "Sheds & Canopies",
    value: "Sheds & Canopies",
  },
  {
    label: "Gazebos & Outdoor",
    value: "Gazebos & Outdoor",
  },
  {
    label: "Custom Fabrication",
    value: "Custom Fabrication",
  },
  {
    label: "Doors",
    value: "Doors",
  },
  {
    label: "Industrial & Storage",
    value: "Industrial & Storage",
  },
  {
    label: "Architectural",
    value: "Architectural Metalwork",
  },
  {
    label: "Welding",
    value: "Welding",
  },
  {
    label: "Window Grills",
    value: "Window Grills",
  },
  {
    label: "Other",
    value: "Other Metalwork",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function GalleryGrid({
  activeCategory,
  onCategoryChange,
  onImageClick,
}) {
  const [internalCategory, setInternalCategory] = useState("All");

  /*
   * Supports both:
   *
   * 1. Controlled usage from parent
   * 2. Standalone usage
   */
  const selectedCategory =
    activeCategory !== undefined
      ? activeCategory
      : internalCategory;

  const handleCategoryChange = (category) => {
    setInternalCategory(category);
    onCategoryChange?.(category);
  };

  /* =======================================================
     FILTER IMAGES
  ======================================================= */

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryData;
    }

    return galleryData.filter(
      (image) => image.category === selectedCategory
    );
  }, [selectedCategory]);

  /* =======================================================
     CATEGORY COUNT
  ======================================================= */

  const getCategoryCount = (category) => {
    if (category === "All") {
      return galleryData.length;
    }

    return galleryData.filter(
      (image) => image.category === category
    ).length;
  };

  return (
    <section
      id="gallery"
      className="min-w-0 bg-wm-surface-soft pb-20 sm:pb-24 lg:pb-28"
    >
      {/* =====================================================
          CATEGORY TABS
      ===================================================== */}

      <div className="mb-8 border-b border-wm-border">
        <div className="-mx-2 overflow-x-auto px-2 pb-px scrollbar-none">
          <div className="flex min-w-max items-center gap-2">
            {categories.map((category) => {
              const isActive =
                selectedCategory === category.value;

              const count = getCategoryCount(category.value);

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category.value)
                  }
                  className={`
                    group relative flex items-center gap-2
                    whitespace-nowrap px-4 py-3
                    text-[10px] font-extrabold uppercase
                    tracking-[0.13em]
                    transition-all duration-300
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-wm-primary
                    ${
                      isActive
                        ? "text-wm-heading"
                        : "text-wm-muted hover:text-wm-heading"
                    }
                  `}
                >
                  <span>{category.label}</span>

                  <span
                    className={`
                      text-[9px] font-bold
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-wm-primary"
                          : "text-wm-placeholder"
                      }
                    `}
                  >
                    {count}
                  </span>

                  <span
                    className={`
                      absolute bottom-0 left-0 h-[2px]
                      bg-wm-primary
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          GALLERY HEADER
      ===================================================== */}

      <div className="mb-8 flex flex-col gap-4 border-b border-wm-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="wm-eyebrow">
            <span className="h-px w-8 bg-wm-primary" />

            Project Gallery
          </div>

          <h2 className="wm-heading mt-4 text-2xl sm:text-3xl">
            {selectedCategory === "All"
              ? "Selected fabrication work."
              : `${selectedCategory} projects.`}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-wm-muted">
            {filteredImages.length}{" "}
            {filteredImages.length === 1
              ? "image"
              : "images"}
          </span>

          <span className="h-1.5 w-1.5 bg-wm-primary" />

          <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-wm-placeholder">
            MS Fabrication
          </span>
        </div>
      </div>

      {/* =====================================================
          IMAGE GRID
      ===================================================== */}

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12"
        >
          {filteredImages.map((image, index) => {
            /*
             * Editorial image rhythm.
             *
             * Every few images becomes wider so the
             * gallery does not feel like a repetitive grid.
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
                className={`
                  group relative block w-full overflow-hidden
                  border border-wm-border bg-white text-left
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-wm-primary
                  ${columnClass}
                `}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className={`
                    relative overflow-hidden
                    ${
                      isFeature
                        ? "aspect-[1.45/1]"
                        : "aspect-square"
                    }
                  `}
                >
                  <Image
                    src={image.src}
                    alt={`${image.subcategory || image.category} ${
                      image.category
                    } work by Welldone Metalworks in Ahmedabad`}
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
                      {image.subcategory || image.category}
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
                          {image.subcategory ||
                            image.category}
                        </p>

                        <p className="mt-1 text-[10px] font-medium text-white/70">
                          Ahmedabad & Gandhinagar
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

      {/* =====================================================
          EMPTY STATE
      ===================================================== */}

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

      {/* =====================================================
          GALLERY FOOTER
      ===================================================== */}

      {filteredImages.length > 0 && (
        <div className="mt-6 flex flex-col gap-2 border-t border-wm-border pt-5 sm:flex-row sm:items-center sm:justify-between">
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