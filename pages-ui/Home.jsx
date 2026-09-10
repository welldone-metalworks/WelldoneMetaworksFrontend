"use client";

import Banner from "../components/Home/Banner";
import HomeHighlights from "../components/Home/HomeHighlights";
import AboutHome from "../components/Home/AboutHome";
import WhatWeDo from "../components/Home/WhatWeDo";
import ServicesHome from "../components/Home/ServicesHome";
import FabricationProcess from "../components/Home/FabricationProcess";
import ApplicationsHome from "../components/Home/ApplicationsHome";
import ProjectsHome from "../components/Home/ProjectsHome";
import TrustSection from "../components/Home/TrustSection";
import TestimonialsHome from "../components/Home/TestimonialsHome";
import ServiceAreasHome from "../components/Home/ServiceAreasHome";
import FAQ from "../components/Home/FAQ";
import HomeCTA from "../components/Home/HomeCTA";
import MapEmbed from "../components/Contact/MapEmbed";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">

      {/* =========================================================
          LOCAL BUSINESS SCHEMA
      ========================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://welldone-metalworks.in/#business",
            name: "Welldone Metalworks",
            url: "https://welldone-metalworks.in",
            image:
              "https://welldone-metalworks.in/banner/banner05.webp",
            telephone: "+91 96499 57698",

            description:
              "Welldone Metalworks provides custom metal fabrication, structural metalwork, railings, gates, fencing, gazebo structures and commercial metal fabrication services in Ahmedabad, Gujarat.",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },

            areaServed: [
              {
                "@type": "City",
                name: "Ahmedabad",
              },
              {
                "@type": "State",
                name: "Gujarat",
              },
            ],

            serviceType: [
              "Metal Fabrication",
              "Custom Metal Fabrication",
              "Structural Metal Fabrication",
              "Metal Railings",
              "Metal Gates",
              "Sports Fencing",
              "Gazebo Structures",
              "Decorative Metal Work",
            ],
          }),
        }}
      />

      {/* =========================================================
          SERVICE SCHEMA
      ========================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Metal Fabrication Services",
            name: "Custom Metal Fabrication Services",
            description:
              "Custom metal fabrication and fabrication work for residential, commercial and industrial requirements.",
            provider: {
              "@type": "LocalBusiness",
              name: "Welldone Metalworks",
              url: "https://welldone-metalworks.in",
              telephone: "+91 96499 57698",
            },
            areaServed: {
              "@type": "City",
              name: "Ahmedabad",
            },
          }),
        }}
      />

      {/* =========================================================
          FAQ SCHEMA
      ========================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What metal fabrication services do you provide in Ahmedabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Welldone Metalworks provides custom metal fabrication, structural metalwork, railings, gates, fencing, gazebo structures, decorative metal work and other fabricated metal solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide custom metal fabrication?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Welldone Metalworks undertakes custom fabrication work based on project requirements, dimensions, drawings and site conditions for residential and commercial applications.",
                },
              },
              {
                "@type": "Question",
                name: "Which areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Welldone Metalworks is based in Ahmedabad and serves customers across Ahmedabad and other areas of Gujarat depending on project requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Can you handle fabrication work for commercial projects?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Welldone Metalworks handles metal fabrication requirements for commercial spaces, buildings, properties, outdoor structures and other project-based applications.",
                },
              },
              {
                "@type": "Question",
                name: "How can I get a quotation for my metal fabrication project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "You can contact Welldone Metalworks with your project details, dimensions, drawings, reference images or site requirements. The team can review the requirement and discuss the appropriate fabrication solution and quotation.",
                },
              },
            ],
          }),
        }}
      />

      {/* =========================================================
          01. HERO / BANNER
      ========================================================= */}
      <section>
        <Banner />
      </section>

      {/* =========================================================
          02. QUICK BUSINESS HIGHLIGHTS
      ========================================================= */}
      <section>
        <HomeHighlights />
      </section>

      {/* =========================================================
          03. ABOUT WELLDONE METALWORKS
      ========================================================= */}
      <section>
        <AboutHome />
      </section>

      {/* =========================================================
          04. WHAT WE DO
      ========================================================= */}
      <section>
        <WhatWeDo />
      </section>

      {/* =========================================================
          05. MAIN SERVICES
      ========================================================= */}
      <section>
        <ServicesHome />
      </section>

      {/* =========================================================
          06. FABRICATION PROCESS
      ========================================================= */}
      <section>
        <FabricationProcess />
      </section>

      {/* =========================================================
          07. APPLICATIONS / INDUSTRIES
      ========================================================= */}
      <section>
        <ApplicationsHome />
      </section>

      {/* =========================================================
          08. SELECTED PROJECTS / WORK
      ========================================================= */}
      <section>
        <ProjectsHome />
      </section>

      {/* =========================================================
          09. TRUST / BUSINESS CREDIBILITY
      ========================================================= */}
      <section>
        <TrustSection />
      </section>


      {/* =========================================================
          11. CUSTOMER TESTIMONIALS
      ========================================================= */}
      <section>
        <TestimonialsHome />
      </section>

      {/* =========================================================
          12. SERVICE AREAS
      ========================================================= */}
      <section>
        <ServiceAreasHome />
      </section>

      {/* =========================================================
          13. FAQ
      ========================================================= */}
      <section>
        <FAQ />
      </section>

      {/* =========================================================
          14. FINAL CALL TO ACTION
      ========================================================= */}
      <section>
        <HomeCTA />
      </section>

      {/* =========================================================
          15. LOCATION / MAP
      ========================================================= */}
      <section>
        <MapEmbed />
      </section>

    </div>
  );
} 