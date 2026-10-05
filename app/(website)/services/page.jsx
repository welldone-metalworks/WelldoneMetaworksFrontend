import ServicesHero from "@/components/Services/ServicesHero";
import ServicesOverview from "@/components/Services/ServicesOverview";
import ServicesGrid from "@/components/Services/ServicesGrid";
import ServicesProcess from "@/components/Services/ServicesProcess";
import ServicesCoverage from "@/components/Services/ServicesCoverage";
import ServicesCTA from "@/components/Services/ServicesCTA";
import { services } from "@/data/services";

/* =========================================================
   PRODUCTION URL
========================================================= */

const productionUrl = "https://welldone-metalworks.in";

/* =========================================================
   DYNAMIC METADATA
========================================================= */

export async function generateMetadata() {
  const { headers } = await import("next/headers");

  const headersList = await headers();

  const host = headersList.get("host");

  const isLocalhost =
    host?.includes("localhost") ||
    host?.includes("127.0.0.1");

  const siteUrl = isLocalhost
    ? `http://${host}`
    : productionUrl;

  return {
    /* =======================================================
       BASE
    ======================================================= */

    metadataBase: new URL(siteUrl),

    /* =======================================================
       TITLE
    ======================================================= */

    title:
      "Metal Fabrication Services Ahmedabad | Welldone Metalworks",

    /* =======================================================
       DESCRIPTION
       ~145 characters
    ======================================================= */

    description:
      "Custom mild steel fabrication services in Ahmedabad and Gandhinagar for gates, railings, staircases, sheds, canopies and structural metalwork.",

    /* =======================================================
       KEYWORDS
    ======================================================= */

    keywords: [
      "metal fabrication Ahmedabad",
      "metal fabrication services Ahmedabad",
      "MS fabrication Ahmedabad",
      "mild steel fabrication Ahmedabad",
      "metal fabricator Ahmedabad",
      "custom metal fabrication Ahmedabad",
      "metal fabrication Gandhinagar",
      "MS fabrication Gandhinagar",
      "gate fabrication Ahmedabad",
      "metal railing Ahmedabad",
      "staircase fabrication Ahmedabad",
      "shed fabrication Ahmedabad",
      "industrial shed fabrication Ahmedabad",
      "metal canopy Ahmedabad",
      "gazebo fabrication Ahmedabad",
      "structural fabrication Ahmedabad",
      "welding services Ahmedabad",
    ],

    /* =======================================================
       CANONICAL
    ======================================================= */

    alternates: {
      canonical: "/services",
    },

    /* =======================================================
       ROBOTS
    ======================================================= */

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    /* =======================================================
       OPEN GRAPH
    ======================================================= */

    openGraph: {
      type: "website",

      url: `${siteUrl}/services`,

      siteName: "Welldone Metalworks",

      locale: "en_IN",

      title:
        "Metal Fabrication Services Ahmedabad | Welldone Metalworks",

      description:
        "Custom mild steel fabrication in Ahmedabad and Gandhinagar for gates, railings, staircases, sheds, canopies and structural metalwork.",

      images: [
        {
          url: "/Banner/banner02.webp",
          width: 1200,
          height: 630,
          alt:
            "Welldone Metalworks metal fabrication services in Ahmedabad",
        },
      ],
    },

    /* =======================================================
       TWITTER / X
    ======================================================= */

    twitter: {
      card: "summary_large_image",

      title:
        "Metal Fabrication Services Ahmedabad | Welldone Metalworks",

      description:
        "Custom mild steel fabrication in Ahmedabad and Gandhinagar for gates, railings, staircases, sheds and structural metalwork.",

      images: ["/Banner/banner02.webp"],
    },

    /* =======================================================
       ICONS
    ======================================================= */

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },

    /* =======================================================
       PAGE CLASSIFICATION
    ======================================================= */

    category: "Metal Fabrication",

    applicationName: "Welldone Metalworks",

    creator: "Welldone Metalworks",

    publisher: "Welldone Metalworks",

    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}


/* =========================================================
   STRUCTURED DATA
   SEO + AEO + GEO
========================================================= */

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    /* =======================================================
       LOCAL BUSINESS
    ======================================================= */

    {
      "@type": "LocalBusiness",

      "@id": `${productionUrl}/#business`,

      name: "Welldone Metalworks",

      alternateName:
        "Welldone Metalworks Ahmedabad",

      url: productionUrl,

      logo: `${productionUrl}/logo/logo.png`,

      image: `${productionUrl}/Banner/banner02.webp`,

      description:
        "Welldone Metalworks provides custom mild steel fabrication services for residential, commercial and industrial requirements in Ahmedabad and Gandhinagar.",

      telephone: "+919649957698",

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
            "Sunday",
          ],

          opens: "09:00",

          closes: "19:00",
        },
      ],

      knowsAbout: [
        "Mild steel fabrication",
        "Structural fabrication",
        "Industrial fabrication",
        "Custom metal fabrication",
        "Metal gates",
        "Metal railings",
        "Staircase fabrication",
        "Industrial sheds",
        "Metal canopies",
        "Gazebos",
        "Welding",
        "Metal installation",
      ],
    },


    /* =======================================================
       WEBSITE
    ======================================================= */

    {
      "@type": "WebSite",

      "@id": `${productionUrl}/#website`,

      url: productionUrl,

      name: "Welldone Metalworks",

      publisher: {
        "@id": `${productionUrl}/#business`,
      },

      inLanguage: "en-IN",
    },


    /* =======================================================
       SERVICES COLLECTION PAGE
    ======================================================= */

    {
      "@type": "CollectionPage",

      "@id": `${productionUrl}/services#webpage`,

      url: `${productionUrl}/services`,

      name:
        "Metal Fabrication Services Ahmedabad | Welldone Metalworks",

      description:
        "Custom mild steel fabrication services in Ahmedabad and Gandhinagar for gates, railings, staircases, sheds, canopies and structural metalwork.",

      isPartOf: {
        "@id": `${productionUrl}/#website`,
      },

      about: {
        "@id": `${productionUrl}/#business`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: `${productionUrl}/Banner/banner02.webp`,

        width: 1200,

        height: 630,
      },

      breadcrumb: {
        "@id": `${productionUrl}/services#breadcrumb`,
      },

      inLanguage: "en-IN",
    },


    /* =======================================================
       SERVICE ITEM LIST
    ======================================================= */

    {
      "@type": "ItemList",

      "@id": `${productionUrl}/services#service-list`,

      name: "Welldone Metalworks Fabrication Services",

      description:
        "Mild steel fabrication services offered by Welldone Metalworks in Ahmedabad and Gandhinagar.",

      numberOfItems: services.length,

      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: service.title,

        url: `${productionUrl}/services/${service.slug}`,
      })),
    },


    /* =======================================================
       INDIVIDUAL SERVICE ENTITIES
    ======================================================= */

    ...services.map((service) => ({
      "@type": "Service",

      "@id": `${productionUrl}/services/${service.slug}#service`,

      name: service.title,

      serviceType: service.title,

      description: service.description,

      url: `${productionUrl}/services/${service.slug}`,

      provider: {
        "@id": `${productionUrl}/#business`,
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
    })),


    /* =======================================================
       BREADCRUMB
    ======================================================= */

    {
      "@type": "BreadcrumbList",

      "@id": `${productionUrl}/services#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: productionUrl,
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Services",

          item: `${productionUrl}/services`,
        },
      ],
    },
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main>
        <ServicesHero />

        <ServicesOverview />

        <ServicesGrid />

        <ServicesProcess />

        <ServicesCoverage />

        <ServicesCTA />
      </main>
    </>
  );
}