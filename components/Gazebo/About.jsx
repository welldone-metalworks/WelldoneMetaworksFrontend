"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  const features = [
    "Premium Modern Designs",
    "Heavy Duty Metal Structures",
    "Waterproof Roofing Solutions",
    "Professional Installation Team",
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-wm-surface-soft
        py-10
        sm:py-12
        md:py-14
        lg:py-16
      "
    >

      {/* =====================================================
          BACKGROUND GLOWS
          ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[300px]
          md:w-[450px]
          h-[300px]
          md:h-[450px]
          bg-wm-primary/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[300px]
          md:w-[450px]
          h-[300px]
          md:h-[450px]
          bg-wm-accent/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      {/* =====================================================
          BACKGROUND TEXT
          ===================================================== */}

      <div
        className="
          absolute
          top-6
          md:top-10
          left-0
          w-full
          flex
          justify-center
          pointer-events-none
          overflow-hidden
        "
      >
        <h1
          className="
            text-[60px]
            sm:text-[90px]
            md:text-[140px]
            lg:text-[170px]
            font-extrabold
            text-wm-primary/[0.045]
            tracking-widest
            whitespace-nowrap
          "
        >
          WELLDONE
        </h1>
      </div>

      {/* =====================================================
          CONTAINER
          ===================================================== */}

      <div
        className="
          relative
          max-w-[1280px]
          mx-auto
          px-5
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-20
            items-center
          "
        >

          {/* =================================================
              IMAGE SECTION
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* IMAGE FRAME */}

            <div
              className="
                p-[2px]
                rounded-[28px]
                bg-gradient-to-r
                from-wm-primary-dark
                via-wm-primary
                to-wm-primary-light
                shadow-wm-lg
              "
            >

              <div
                className="
                  bg-white
                  rounded-[26px]
                  overflow-hidden
                "
              >

                <img
                  src="/gazebo/gazebo_about.webp"
                  alt="Welldone Metalworks premium gazebo craftsmanship"
                  className="
                    w-full
                    h-[320px]
                    sm:h-[450px]
                    md:h-[550px]
                    object-cover
                    hover:scale-[1.02]
                    transition-transform
                    duration-700
                  "
                />

              </div>

            </div>

            {/* =================================================
                EXPERIENCE CARD
                ================================================= */}

            <div
              className="
                absolute
                -bottom-6
                sm:-bottom-8
                left-5
                sm:left-8
                bg-white/95
                backdrop-blur-xl
                border
                border-wm-border
                rounded-2xl
                sm:rounded-3xl
                shadow-wm-lg
                px-5
                sm:px-7
                py-4
                sm:py-6
              "
            >

              <div className="flex items-center gap-4">

                {/* ICON */}

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-wm-primary-dark
                    via-wm-primary
                    to-wm-primary-light
                    flex
                    items-center
                    justify-center
                    shadow-wm-md
                  "
                >

                  <Award
                    className="
                      w-6
                      h-6
                      text-white
                    "
                  />

                </div>

                {/* EXPERIENCE */}

                <div>

                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      bg-gradient-to-r
                      from-wm-primary-dark
                      via-wm-primary
                      to-wm-primary-light
                      bg-clip-text
                      text-transparent
                    "
                  >
                    7+
                  </h3>

                  <p
                    className="
                      text-wm-body
                      text-sm
                      sm:text-base
                    "
                  >
                    Years Experience
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* =================================================
              CONTENT SECTION
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            {/* =================================================
                LABEL
                ================================================= */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-wm-surface-green
                border
                border-wm-border-green
                px-5
                py-2
                rounded-full
              "
            >

              <ShieldCheck
                className="
                  w-4
                  h-4
                  text-wm-primary
                "
              />

              <p
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-wm-primary-dark
                "
              >
                About Welldone Metalworks
              </p>

            </div>

            {/* =================================================
                HEADING
                ================================================= */}

            <h2
              className="
                mt-6
                sm:mt-8
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                leading-[1.1]
                tracking-tight
                text-wm-heading
              "
            >

              Crafted For

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-wm-primary-dark
                  via-wm-primary
                  to-wm-primary-light
                  bg-clip-text
                  text-transparent
                "
              >
                Premium Outdoor
              </span>

              Living Spaces

            </h2>

            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <p
              className="
                mt-6
                sm:mt-8
                text-base
                sm:text-lg
                md:text-xl
                text-wm-body
                leading-8
                sm:leading-9
              "
            >
              At Welldone Metalworks, we specialize in luxury gazebo,
              pergola & canopy structures designed for villas,
              rooftops, farmhouses & premium residential spaces.
              Our focus is on delivering elegant architectural
              designs with durable metal craftsmanship.
            </p>

            {/* =================================================
                FEATURES
                ================================================= */}

            <div
              className="
                mt-8
                sm:mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              "
            >

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <CheckCircle
                    className="
                      w-5
                      h-5
                      text-wm-primary
                      flex-shrink-0
                    "
                  />

                  <p
                    className="
                      text-wm-text
                      font-medium
                      text-sm
                      sm:text-base
                    "
                  >
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* =================================================
                STATS
                ================================================= */}


          </motion.div>

        </div>

      </div>
    </section>
  );
}