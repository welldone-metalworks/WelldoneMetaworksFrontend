"use client";

import { ArrowUpRight, Images, MoveUpRight } from "lucide-react";

const projects = [
  {
    image: "/Banner/banner01.webp",
    category: "MS Fabrication",
    number: "01",
    title: "Custom MS Fabrication",
    description:
      "Fabricated metalwork developed around the project's required dimensions and application.",
  },
  {
    image: "/Banner/banner02.webp",
    category: "Shed Fabrication",
    number: "02",
    title: "MS Shed Work",
    description:
      "Practical MS shed fabrication for covered areas and site-specific requirements.",
  },
  {
    image: "/Banner/banner03.webp",
    category: "Custom Metalwork",
    number: "03",
    title: "Site-Specific Fabrication",
    description:
      "Custom fabrication planned according to the available space, dimensions and intended use.",
  },
];

export default function ProjectShowcase() {
  const trackGallery = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "gallery_view", {
        page_type: "local_landing",
        gallery_location: "project_showcase",
      });
    }

    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "gallery_view",
        page_type: "local_landing",
        gallery_location: "project_showcase",
        page_path: window.location.pathname,
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[var(--wm-surface-soft)] py-10 lg:py-14">
      {/* Background technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22,135,197,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,135,197,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="wm-container relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="wm-eyebrow flex items-center gap-2">
              <span className="h-px w-7 bg-[var(--wm-primary)]" />
              Project Showcase
            </div>

            <h2 className="wm-heading mt-4 text-3xl leading-[1.08] sm:text-4xl lg:text-[48px]">
              A closer look at our
              <span className="text-[var(--wm-primary)]">
                {" "}
                fabrication work.
              </span>
            </h2>

            <p className="wm-body mt-5 max-w-2xl text-sm sm:text-base">
              Explore fabrication imagery from Welldone Metalworks and get a
              closer look at the type of MS fabrication work handled for
              different project requirements.
            </p>
          </div>

          {/* Gallery link */}
          <a
            href="/gallery"
            onClick={trackGallery}
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[var(--wm-border-blue)] bg-white px-5 py-3 text-sm font-extrabold text-[var(--wm-primary)] shadow-[var(--wm-shadow-sm)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--wm-primary)] hover:text-[var(--wm-primary-dark)] hover:shadow-[var(--wm-shadow-md)]"
          >
            <span>View Full Gallery</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--wm-surface-icon)] transition duration-300 group-hover:bg-[var(--wm-primary)] group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href="/gallery"
              onClick={trackGallery}
              className="group relative overflow-hidden rounded-[24px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-sm)] transition duration-500 hover:-translate-y-2 hover:border-[var(--wm-border-blue)] hover:shadow-[var(--wm-shadow-lg)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--wm-surface-blue)]">
                <img
                  src={project.image}
                  alt={`${project.title} by Welldone Metalworks`}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--wm-navy-dark)]/80 via-[var(--wm-navy-dark)]/5 to-transparent" />

                {/* Project number */}
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[var(--wm-navy-dark)]/65 text-xs font-black text-white backdrop-blur-md">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Image corner icon */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <MoveUpRight size={17} />
                </div>

                {/* Image bottom title */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--wm-primary-light)]">
                        {project.category}
                      </p>

                      <h3 className="mt-1.5 text-xl font-extrabold leading-tight text-white sm:text-[22px]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--wm-primary)] text-white transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[var(--wm-primary)]">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card information */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-5">
                  <p className="text-sm leading-6 text-[var(--wm-body)]">
                    {project.description}
                  </p>

                  <span className="mt-0.5 shrink-0 text-[var(--wm-primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* Technical bottom line */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--wm-primary)]" />
                  <span className="h-px flex-1 bg-[var(--wm-border)] transition duration-500 group-hover:bg-[var(--wm-primary-light)]" />
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[var(--wm-muted)]">
                    View Project
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom portfolio information */}
        <div className="mt-8 overflow-hidden rounded-[20px] border border-[var(--wm-border)] bg-white shadow-[var(--wm-shadow-sm)]">
          <div className="grid md:grid-cols-[auto_1fr_auto] md:items-center">
            {/* Icon */}
            <div className="flex h-full min-h-[76px] items-center justify-center border-b border-[var(--wm-border)] bg-[var(--wm-surface-blue)] px-7 md:border-b-0 md:border-r">
              <Images
                size={22}
                className="text-[var(--wm-primary)]"
              />
            </div>

            {/* Text */}
            <div className="px-6 py-5">
              <p className="text-sm font-extrabold text-[var(--wm-heading)]">
                Explore more fabrication work
              </p>

              <p className="mt-1 text-xs leading-5 text-[var(--wm-muted)]">
                Browse the full gallery for additional fabrication imagery and
                available portfolio examples.
              </p>
            </div>

            {/* CTA */}
            <div className="px-6 pb-5 md:pb-0">
              <a
                href="/gallery"
                onClick={trackGallery}
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--wm-primary)] transition hover:text-[var(--wm-primary-dark)]"
              >
                Open Gallery
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Small factual note */}
        <div className="mt-6 flex items-start justify-center gap-2 text-center text-xs leading-5 text-[var(--wm-muted)]">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--wm-primary)]" />

          <span>
            Project details and imagery are presented according to available
            portfolio information.
          </span>
        </div>
      </div>
    </section>
  );
}