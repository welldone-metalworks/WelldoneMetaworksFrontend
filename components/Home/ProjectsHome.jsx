"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Fence,
  Hammer,
  ImageIcon,
  Ruler,
  Warehouse,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Gates",
    title: "Custom MS Gate Fabrication",
    description:
      "Made-to-measure gate fabrication planned around entrance dimensions, design and practical requirements.",
    icon: Fence,
  },
  {
    number: "02",
    category: "Outdoor",
    title: "MS Gazebo & Outdoor Structure",
    description:
      "Fabricated outdoor structure designed around available space and intended use.",
    icon: Hammer,
  },
  {
    number: "03",
    category: "Sheds",
    title: "Custom MS Shed Structure",
    description:
      "Functional MS shed structure fabricated for a practical covered outdoor requirement.",
    icon: Warehouse,
  },
  {
    number: "04",
    category: "Custom",
    title: "Site-Specific Metalwork",
    description:
      "Custom fabrication developed where standard products do not suit the project dimensions.",
    icon: Ruler,
  },
];

export default function ProjectsHome() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="wm-container">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col gap-5 border-b border-wm-border pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="wm-eyebrow">
              <span className="h-px w-7 bg-wm-primary" />
              Our Work
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-wm-heading sm:text-4xl">
              Fabrication built around real requirements.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-wm-body">
              A look at the type of MS fabrication work we handle across
              residential, commercial and outdoor requirements.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-wm-border bg-white px-4 py-2.5 text-sm font-bold text-wm-navy transition-all duration-300 hover:border-wm-primary hover:text-wm-primary"
          >
            View Gallery
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* =====================================================
            PORTFOLIO LIST
        ====================================================== */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-wm-border">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Link
                key={project.title}
                href="/gallery"
                className={`group relative block bg-white transition-colors duration-300 hover:bg-wm-surface-soft ${
                  index !== projects.length - 1
                    ? "border-b border-wm-border"
                    : ""
                }`}
              >
                <div className="grid items-center lg:grid-cols-[110px_210px_1fr_auto]">
                  {/* Number */}
                  <div className="flex items-center gap-3 px-5 py-4 sm:px-6 lg:py-5">
                    <span className="text-xs font-extrabold tracking-[0.12em] text-wm-primary">
                      {project.number}
                    </span>

                    <span className="h-px w-5 bg-wm-border" />
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-3 border-t border-wm-border px-5 py-4 sm:px-6 lg:border-l lg:border-t-0 lg:py-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-wm-surface-blue text-wm-primary">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-wm-muted">
                      {project.category}
                    </span>
                  </div>

                  {/* Main project information */}
                  <div className="border-t border-wm-border px-5 py-4 sm:px-6 lg:border-l lg:border-t-0 lg:py-5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-extrabold tracking-[-0.015em] text-wm-navy transition-colors duration-300 group-hover:text-wm-primary sm:text-lg">
                        {project.title}
                      </h3>

                      <ImageIcon
                        size={14}
                        className="shrink-0 text-wm-border transition-colors group-hover:text-wm-primary"
                      />
                    </div>

                    <p className="mt-1 max-w-2xl text-xs leading-5 text-wm-muted sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-end border-t border-wm-border px-5 py-4 sm:px-6 lg:border-l lg:border-t-0 lg:py-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-wm-border text-wm-muted transition-all duration-300 group-hover:border-wm-primary group-hover:bg-wm-primary group-hover:text-white">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM PORTFOLIO INFO
        ====================================================== */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-wm-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-wm-primary" />
            <span>
              Verified project photographs can be added as the portfolio
              grows.
            </span>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-1.5 text-xs font-bold text-wm-primary hover:text-wm-primary-dark"
          >
            Explore fabrication work
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}