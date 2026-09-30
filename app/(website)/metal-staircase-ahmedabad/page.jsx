import Hero from "@/components/MetalStaircase/Hero";
import TrustBar from "@/components/MetalStaircase/TrustBar";
import About from "@/components/MetalStaircase/About";
import StaircaseTypes from "@/components/MetalStaircase/StaircaseTypes";
import TechnicalDesigns from "@/components/MetalStaircase/TechnicalDesigns";
import Features from "@/components/MetalStaircase/Features";
import Applications from "@/components/MetalStaircase/Applications";
import Process from "@/components/MetalStaircase/Process";
import Gallery from "@/components/MetalStaircase/Gallery";
import ProjectShowcase from "@/components/MetalStaircase/ProjectShowcase";
import WhyChooseUs from "@/components/MetalStaircase/WhyChooseUs";
import ServiceAreas from "@/components/MetalStaircase/ServiceAreas";
import Testimonials from "@/components/MetalStaircase/Testimonials";
import FAQ from "@/components/MetalStaircase/FAQ";
import QuoteSection from "@/components/MetalStaircase/QuoteSection";
import FinalCTA from "@/components/MetalStaircase/FinalCTA";

/* =========================================================
   SITE CONSTANTS
========================================================= */

const SITE_URL = "https://welldone-metalworks.in";
const PAGE_URL = `${SITE_URL}/metal-staircase-ahmedabad`;

const BUSINESS_NAME = "Welldone Metalworks";
const PHONE = "+91 9649957698";

const HERO_IMAGE = `${SITE_URL}/MetalStaircase/spiral_staircase.png`;

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "Metal Staircase Fabrication in Ahmedabad | Welldone Metalworks",

  description:
    "Custom metal staircase fabrication in Ahmedabad for homes, offices and industrial spaces. Spiral, curved, straight and MS staircases.",

  keywords: [
    "metal staircase fabrication Ahmedabad",
    "metal staircase Ahmedabad",
    "MS staircase fabrication Ahmedabad",
    "custom staircase fabrication Ahmedabad",
    "spiral staircase Ahmedabad",
    "curved staircase Ahmedabad",
    "straight staircase Ahmedabad",
    "industrial staircase Ahmedabad",
    "fire escape staircase Ahmedabad",
    "custom metal staircase",
    "mild steel staircase",
    "metal staircase fabricator Ahmedabad",
    "staircase fabrication Gandhinagar",
    "metal staircase Gandhinagar",
    "Welldone Metalworks",
  ],

  authors: [
    {
      name: BUSINESS_NAME,
    },
  ],

  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,

  alternates: {
    canonical: "/metal-staircase-ahmedabad",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: PAGE_URL,

    siteName: BUSINESS_NAME,

    title:
      "Metal Staircase Fabrication in Ahmedabad | Welldone Metalworks",

    description:
      "Custom spiral, curved, straight, industrial and fire escape metal staircases designed, fabricated and installed in Ahmedabad and Gandhinagar.",

    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 900,
        alt: "Custom metal spiral staircase fabricated by Welldone Metalworks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Metal Staircase Fabrication in Ahmedabad | Welldone Metalworks",

    description:
      "Custom metal staircases including spiral, curved, straight, industrial and fire escape structures.",

    images: [HERO_IMAGE],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Metal Staircase Fabrication",
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const schemaData = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       LOCAL BUSINESS
    ===================================================== */

    {
      "@type": ["LocalBusiness", "ProfessionalService"],

      "@id": `${SITE_URL}/#business`,

      name: BUSINESS_NAME,

      url: SITE_URL,

      telephone: PHONE,

      image: HERO_IMAGE,

      description:
        "Welldone Metalworks provides custom mild steel metal staircase fabrication services in Ahmedabad and Gandhinagar, including spiral, curved, straight, industrial and fire escape staircases.",

      priceRange: "₹₹₹",

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
          "@type": "City",
          name: "Gandhinagar",
        },
        {
          "@type": "AdministrativeArea",
          name: "Gujarat",
        },
      ],

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",

          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],

          opens: "09:00",

          closes: "19:00",
        },
      ],

      makesOffer: [
        {
          "@type": "Offer",

          itemOffered: {
            "@id": `${PAGE_URL}#service`,
          },
        },
      ],
    },

    /* =====================================================
       WEB PAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id": `${PAGE_URL}#webpage`,

      url: PAGE_URL,

      name:
        "Metal Staircase Fabrication in Ahmedabad | Welldone Metalworks",

      description:
        "Custom metal staircase fabrication in Ahmedabad for residential, commercial, industrial and architectural projects.",

      isPartOf: {
        "@type": "WebSite",

        "@id": `${SITE_URL}/#website`,

        url: SITE_URL,

        name: BUSINESS_NAME,
      },

      about: {
        "@id": `${PAGE_URL}#service`,
      },

      mainEntity: {
        "@id": `${PAGE_URL}#service`,
      },

      publisher: {
        "@id": `${SITE_URL}/#business`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: HERO_IMAGE,

        width: 1200,

        height: 900,

        caption:
          "Custom metal spiral staircase by Welldone Metalworks",
      },

      inLanguage: "en-IN",
    },

    /* =====================================================
       SERVICE
    ===================================================== */

    {
      "@type": "Service",

      "@id": `${PAGE_URL}#service`,

      name: "Custom Metal Staircase Fabrication",

      serviceType: "Metal Staircase Fabrication",

      description:
        "Custom mild steel staircase fabrication for residential, commercial, architectural and industrial projects, including spiral, curved, straight, industrial and fire escape staircases.",

      url: PAGE_URL,

      provider: {
        "@id": `${SITE_URL}/#business`,
      },

      areaServed: [
        {
          "@type": "City",
          name: "Ahmedabad",
        },
        {
          "@type": "City",
          name: "Gandhinagar",
        },
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: "Metal Staircase Solutions",

        itemListElement: [
          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Spiral Staircases",

              description:
                "Space-efficient custom spiral metal staircase solutions for residential, commercial and architectural applications.",
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Curved Staircases",

              description:
                "Elegant curved metal staircase structures designed as architectural focal points.",
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Straight Staircases",

              description:
                "Clean and practical straight metal staircase structures developed around available space and project requirements.",
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Industrial Staircases",

              description:
                "Heavy-duty metal staircase structures for factories, warehouses and industrial environments.",
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Fire Escape Staircases",

              description:
                "Functional emergency access metal staircase structures designed around site requirements.",
            },
          },

          {
            "@type": "Offer",

            itemOffered: {
              "@type": "Service",

              name: "Custom Staircases",

              description:
                "Unique metal staircase concepts developed around project and architectural requirements.",
            },
          },
        ],
      },
    },

    /* =====================================================
       BREADCRUMB
    ===================================================== */

    {
      "@type": "BreadcrumbList",

      "@id": `${PAGE_URL}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: SITE_URL,
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Metal Staircase",

          item: PAGE_URL,
        },
      ],
    },
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function MetalStaircasePage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main className="overflow-hidden">
        <Hero />

        <TrustBar />

        <About />

        <StaircaseTypes />

        <TechnicalDesigns />

        <Features />

        <Applications />

        <Process />

        <Gallery />

        <ProjectShowcase />

        <WhyChooseUs />

        <ServiceAreas />

        <Testimonials />

        <FAQ />

        <QuoteSection />

        <FinalCTA />
      </main>
    </>
  );
}