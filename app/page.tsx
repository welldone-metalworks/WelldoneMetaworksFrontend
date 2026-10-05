import Home from "../pages-ui/Home";
import { headers } from "next/headers";

const productionUrl = "https://welldone-metalworks.in";

export async function generateMetadata() {
  const headersList = await headers();

  const host = headersList.get("host");

  /*
   * Use localhost while developing.
   * Use production domain after deployment.
   */
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
      "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",

    /* =======================================================
       DESCRIPTION
       156 characters
    ======================================================= */

    description:
      "Welldone Metalworks offers ms fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds, canopies and custom metalwork.",

    /* =======================================================
       KEYWORDS
    ======================================================= */

    keywords: [
      "metal fabrication Ahmedabad",
      "metal fabrication services Ahmedabad",
      "MS fabrication Ahmedabad",
      "mild steel fabrication Ahmedabad",
      "MS fabrication work Ahmedabad",
      "metal fabricator Ahmedabad",
      "fabrication work Ahmedabad",
      "custom metal fabrication Ahmedabad",
      "gate fabrication Ahmedabad",
      "metal gate fabrication Ahmedabad",
      "staircase fabrication Ahmedabad",
      "staircase railing Ahmedabad",
      "metal railing Ahmedabad",
      "MS shed fabrication Ahmedabad",
      "industrial shed fabrication Ahmedabad",
      "metal canopy Ahmedabad",
      "gazebo fabrication Ahmedabad",
      "structural fabrication Ahmedabad",
      "metal fabrication Gandhinagar",
    ],

    /* =======================================================
       CANONICAL
    ======================================================= */

    alternates: {
      canonical: "/",
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

      url: siteUrl,

      siteName: "Welldone Metalworks",

      locale: "en_IN",

      title:
        "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",

      description:
        "Welldone Metalworks offers mild steel fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds, canopies and custom metalwork.",

      images: [
        {
          url: "/banner/banner05.webp",
          width: 1200,
          height: 630,
          alt:
            "Welldone Metalworks metal fabrication services in Ahmedabad",
        },
      ],
    },

    /* =======================================================
       TWITTER
    ======================================================= */

    twitter: {
      card: "summary_large_image",

      title:
        "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",

      description:
        "Mild steel fabrication in Ahmedabad and Gandhinagar for gates, railings, staircases, sheds and custom metalwork.",

      images: ["/banner/banner05.webp"],
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
       CLASSIFICATION
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
========================================================= */

const structuredData = {
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

      image: `${productionUrl}/banner/banner05.webp`,

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
        "Metal fabrication",
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
       WEBPAGE
    ======================================================= */

    {
      "@type": "WebPage",

      "@id": `${productionUrl}/#webpage`,

      url: productionUrl,

      name:
        "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",

      description:
        "Welldone Metalworks offers mild steel fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds, canopies and custom metalwork.",

      isPartOf: {
        "@id": `${productionUrl}/#website`,
      },

      about: {
        "@id": `${productionUrl}/#business`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: `${productionUrl}/banner/banner05.webp`,

        width: 1200,

        height: 630,
      },

      inLanguage: "en-IN",
    },

    /* =======================================================
       MAIN SERVICE
    ======================================================= */

    {
      "@type": "Service",

      "@id": `${productionUrl}/#metal-fabrication-service`,

      name: "Metal Fabrication Services in Ahmedabad",

      serviceType: "Mild Steel Metal Fabrication",

      description:
        "Custom mild steel fabrication services in Ahmedabad and Gandhinagar for gates, railings, staircases, sheds, canopies and structural metalwork.",

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

    /* =======================================================
       BREADCRUMB
    ======================================================= */

    {
      "@type": "BreadcrumbList",

      "@id": `${productionUrl}/#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: productionUrl,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Home />
    </>
  );
}