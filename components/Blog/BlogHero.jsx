"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  MoveRight,
} from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#12324a] px-4 py-20 text-white sm:px-6 sm:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* =====================================================
          DECORATIVE ELEMENTS
      ===================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[70px] border-[#1687c5]/10" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-[#1687c5]/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[18%] top-[30%] h-24 w-24 rounded-full bg-[#46a9d8]/10 blur-2xl" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">

        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#46a9d8] backdrop-blur-sm">
              <BookOpen size={19} />
            </span>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#46a9d8]">
                Welldone Metalworks
              </p>

              <p className="mt-0.5 text-xs text-white/55">
                Fabrication Knowledge Centre
              </p>
            </div>

          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[68px]">
            Metal Fabrication
            <span className="block text-[#46a9d8]">
              Insights & Expertise
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Practical guides, fabrication insights and project
            knowledge covering mild steel fabrication, structural
            work, gates, railings, staircases, sheds and custom
            metal structures.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">

            <Link
              href="#latest-articles"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#1687c5] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(22,135,197,0.25)] transition-all duration-300 hover:bg-[#0b6fa8] hover:shadow-[0_14px_35px_rgba(22,135,197,0.35)]"
            >
              Explore Articles
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Discuss Your Project
              <MoveRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

        {/* Bottom indicators */}
        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">

          {[
            "MS Fabrication",
            "Structural Work",
            "Staircases",
            "Industrial Sheds",
          ].map((item) => (
            <div
              key={item}
              className="text-xs font-semibold text-white/55"
            >
              <span className="mr-2 text-[#46a9d8]">
                /
              </span>
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BlogHero;