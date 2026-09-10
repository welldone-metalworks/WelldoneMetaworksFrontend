"use client";

import { motion } from "framer-motion";

const categories = [
  "All",
  "Garden Structure",
  "Gazebo Structure",
  "Railing Structure",
  "Heavy Conventional",
  "Polycarbonate Roofing",
];

export default function GalleryFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="border border-wm-border bg-white">
        <div className="border-b border-wm-border px-5 py-5">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-wm-primary">
            Explore Work
          </p>

          <p className="mt-1 text-xs leading-5 text-wm-muted">
            Filter by fabrication type
          </p>
        </div>

        <div className="p-2">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`group relative flex w-full items-center justify-between px-4 py-3 text-left text-xs font-extrabold transition-all duration-200 ${
                  active
                    ? "bg-wm-primary text-white"
                    : "text-wm-heading hover:bg-wm-surface-blue"
                }`}
              >
                <span>{category}</span>

                {active && (
                  <motion.span
                    layoutId="gallery-filter-active"
                    className="h-1.5 w-1.5 bg-white"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="border-t border-wm-border px-5 py-4">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-wm-muted">
            Material focus
          </p>

          <p className="mt-1 text-xs font-bold text-wm-heading">
            Mild Steel Fabrication
          </p>
        </div>
      </div>
    </aside>
  );
}