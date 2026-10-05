import GalleryPageClient from "./GalleryPageClient";

const productionUrl = "https://welldone-metalworks.in";

/* =========================================================
   METADATA
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
       BASE URL
    ======================================================= */

    metadataBase: new URL(siteUrl),

    /* =======================================================
       TITLE
    ======================================================= */

    title:
      "Metal Fabrication Gallery Ahmedabad | Welldone Metalworks",

    /* =======================================================
       DESCRIPTION
    ======================================================= */

    description:
      "Explore Welldone Metalworks projects including MS gates, railings, staircases, sheds, gazebos, canopies and custom metal fabrication in Ahmedabad.",

    /* =======================================================
       KEYWORDS
    ======================================================= */

    keywords: [
      "metal fabrication gallery Ahmedabad",
      "metal fabrication projects Ahmedabad",
      "MS fabrication projects Ahmedabad",
      "metal fabrication photos Ahmedabad",
      "metal gates Ahmedabad",
      "metal railings Ahmedabad",
      "staircase fabrication Ahmedabad",
      "MS staircase Ahmedabad",
      "industrial shed Ahmedabad",
      "MS shed fabrication Ahmedabad",
      "metal canopy Ahmedabad",
      "gazebo fabrication Ahmedabad",
      "custom metal fabrication Ahmedabad",
      "structural fabrication Ahmedabad",
      "welding work Ahmedabad",
      "metal fabrication Gandhinagar",
    ],

    /* =======================================================
       CANONICAL
    ======================================================= */

    alternates: {
      canonical: "/gallery",
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

      url: `${siteUrl}/gallery`,

      siteName: "Welldone Metalworks",

      locale: "en_IN",

      title:
        "Metal Fabrication Gallery Ahmedabad | Welldone Metalworks",

      description:
        "Explore MS gates, railings, staircases, sheds, gazebos, canopies and custom metal fabrication projects by Welldone Metalworks.",

      images: [
        {
          url: "/Banner/banner05.webp",
          width: 1200,
          height: 630,
          alt:
            "Welldone Metalworks metal fabrication project gallery Ahmedabad",
        },
      ],
    },

    /* =======================================================
       TWITTER / X
    ======================================================= */

    twitter: {
      card: "summary_large_image",

      title:
        "Metal Fabrication Gallery Ahmedabad | Welldone Metalworks",

      description:
        "View Welldone Metalworks MS gates, railings, staircases, sheds, gazebos and custom fabrication projects.",

      images: ["/Banner/banner05.webp"],
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
   SEO + AEO + GEO + IMAGE GALLERY
========================================================= */

const gallerySchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =======================================================
       LOCAL BUSINESS
    ======================================================= */

    {
      "@type": "LocalBusiness",

      "@id": `${productionUrl}/#business`,

      name: "Welldone Metalworks",

      url: productionUrl,

      logo: `${productionUrl}/logo/logo.png`,

      image: `${productionUrl}/Banner/banner05.webp`,

      description:
        "Welldone Metalworks provides custom mild steel fabrication services in Ahmedabad and Gandhinagar.",

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
        "Metal gates",
        "Metal railings",
        "Staircase fabrication",
        "Industrial sheds",
        "Metal canopies",
        "Gazebos",
        "Structural fabrication",
        "Custom metal fabrication",
        "Welding",
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
       GALLERY PAGE
    ======================================================= */

    {
      "@type": "ImageGallery",

      "@id": `${productionUrl}/gallery#gallery`,

      url: `${productionUrl}/gallery`,

      name:
        "Metal Fabrication Gallery Ahmedabad | Welldone Metalworks",

      description:
        "A project gallery showcasing mild steel gates, railings, staircases, sheds, gazebos, canopies, structural fabrication and custom metalwork by Welldone Metalworks.",

      isPartOf: {
        "@id": `${productionUrl}/#website`,
      },

      about: {
        "@id": `${productionUrl}/#business`,
      },

      mainEntityOfPage: {
        "@id": `${productionUrl}/gallery#webpage`,
      },

      inLanguage: "en-IN",
    },


    /* =======================================================
       WEBPAGE
    ======================================================= */

    {
      "@type": "WebPage",

      "@id": `${productionUrl}/gallery#webpage`,

      url: `${productionUrl}/gallery`,

      name:
        "Metal Fabrication Gallery Ahmedabad | Welldone Metalworks",

      description:
        "Explore Welldone Metalworks projects including MS gates, railings, staircases, sheds, gazebos, canopies and custom metal fabrication in Ahmedabad.",

      isPartOf: {
        "@id": `${productionUrl}/#website`,
      },

      about: {
        "@id": `${productionUrl}/#business`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: `${productionUrl}/Banner/banner05.webp`,

        width: 1200,

        height: 630,
      },

      breadcrumb: {
        "@id": `${productionUrl}/gallery#breadcrumb`,
      },

      inLanguage: "en-IN",
    },


    /* =======================================================
       BREADCRUMB
    ======================================================= */

    {
      "@type": "BreadcrumbList",

      "@id": `${productionUrl}/gallery#breadcrumb`,

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

          name: "Gallery",

          item: `${productionUrl}/gallery`,
        },
      ],
    },


    /* =======================================================
       GALLERY SERVICE CONTEXT
    ======================================================= */

    {
      "@type": "Service",

      "@id": `${productionUrl}/gallery#fabrication-service`,

      name: "Custom Mild Steel Fabrication",

      serviceType: "Mild Steel Metal Fabrication",

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
    },
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function GalleryPage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema),
        }}
      />

      <GalleryPageClient />
    </>
  );
}