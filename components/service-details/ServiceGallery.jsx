"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceGallery({ data }) {
  if (!data?.images?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--wm-surface-soft)] py-10 sm:py-12 lg:py-14">
      <div className="wm-container">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="wm-eyebrow mb-5">
              <span className="h-px w-7 bg-[var(--wm-primary)]" />
              {data.number} / {data.eyebrow}
            </div>

            <h2 className="wm-heading max-w-2xl text-4xl leading-[1.04] sm:text-5xl lg:text-[54px]">
              {data.title}
            </h2>

            {data.description && (
              <p className="wm-body mt-5 max-w-2xl text-sm sm:text-base">
                {data.description}
              </p>
            )}
          </div>

          <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-[var(--wm-muted)]">
            FABRICATION / PROJECT WORK
          </span>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[250px] sm:grid-cols-3 lg:auto-rows-[280px] lg:grid-cols-4">
          {data.images.map((image, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.05, 0.2),
                }}
                className={`group relative overflow-hidden bg-[var(--wm-border)] ${
                  isLarge
                    ? "col-span-2 row-span-2"
                    : "col-span-1 row-span-1"
                }`}
              >
                <Image
                  src={image}
                  alt={`${data.title} fabrication work - Welldone Metalworks`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,50,74,0.65)] via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.15em] text-white">
                    WORK / {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}