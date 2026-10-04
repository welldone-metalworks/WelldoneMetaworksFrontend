import HeroSection from "../../../components/About/HeroSection";
import CompanyIntro from "../../../components/About/CompanyIntro";
import MissionVision from "../../../components/About/MissionVision";
import WhyChooseUs from "../../../components/About/WhyChooseUs";
import CallToAction from "../../../components/About/CallToAction";

const productionUrl = "https://welldone-metalworks.in";

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata() {
  const headersList = await import("next/headers").then(
    ({ headers }) => headers()
  );

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
      "About Welldone Metalworks | Metal Fabrication Company in Ahmedabad",

    /* =======================================================
       DESCRIPTION
       Shorter, focused and natural
    ======================================================= */

    description:
      "Learn about Welldone Metalworks, a ms fabrication company serving Ahmedabad and Gandhinagar with gates, railings, staircases, sheds and custom metalwork.",

    /* =======================================================
       KEYWORDS
    ======================================================= */

    keywords: [
      "about Welldone Metalworks",
      "metal fabrication company Ahmedabad",
      "metal fabricator Ahmedabad",
      "mild steel fabrication Ahmedabad",
      "MS fabrication company Ahmedabad",
      "custom metal fabrication Ahmedabad",
      "metal fabrication Gandhinagar",
      "gate fabrication Ahmedabad",
      "metal railing fabrication Ahmedabad",
      "staircase fabrication Ahmedabad",
      "shed fabrication Ahmedabad",
      "gazebo fabrication Ahmedabad",
      "structural fabrication Ahmedabad",
      "industrial fabrication Ahmedabad",
    ],

    /* =======================================================
       CANONICAL
    ======================================================= */

    alternates: {
      canonical: "/about",
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

      url: `${siteUrl}/about`,

      siteName: "Welldone Metalworks",

      locale: "en_IN",

      title:
        "About Welldone Metalworks | Metal Fabrication Company in Ahmedabad",

      description:
        "Learn about Welldone Metalworks and our mild steel fabrication work for gates, railings, staircases, sheds and custom metal structures in Ahmedabad and Gandhinagar.",

      images: [
        {
          url: "/Banner/banner02.webp",
          width: 1200,
          height: 630,
          alt:
            "Welldone Metalworks metal fabrication company in Ahmedabad",
        },
      ],
    },

    /* =======================================================
       TWITTER / X
    ======================================================= */

    twitter: {
      card: "summary_large_image",

      title:
        "About Welldone Metalworks | Metal Fabrication Ahmedabad",

      description:
        "Learn about Welldone Metalworks and our mild steel fabrication services across Ahmedabad and Gandhinagar.",

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
   ABOUT PAGE STRUCTURED DATA

   SEO + AEO + GEO
========================================================= */

const aboutSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =======================================================
       ABOUT PAGE
    ======================================================= */

    {
      "@type": "AboutPage",

      "@id": `${productionUrl}/about#webpage`,

      url: `${productionUrl}/about`,

      name:
        "About Welldone Metalworks | Metal Fabrication Company in Ahmedabad",

      description:
        "Learn about Welldone Metalworks, a mild steel fabrication company serving Ahmedabad and Gandhinagar with gates, railings, staircases, sheds and custom metalwork.",

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
        "@id": `${productionUrl}/about#breadcrumb`,
      },

      inLanguage: "en-IN",
    },


    /* =======================================================
       BUSINESS
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

        {
          "@type": "Place",
          name: "Bopal",
        },

        {
          "@type": "Place",
          name: "South Bopal",
        },

        {
          "@type": "Place",
          name: "Bodakdev",
        },

        {
          "@type": "Place",
          name: "Thaltej",
        },

        {
          "@type": "Place",
          name: "Satellite",
        },

        {
          "@type": "Place",
          name: "Prahladnagar",
        },

        {
          "@type": "Place",
          name: "SG Highway",
        },

        {
          "@type": "Place",
          name: "Vastrapur",
        },

        {
          "@type": "Place",
          name: "Gota",
        },

        {
          "@type": "Place",
          name: "Chandkheda",
        },

        {
          "@type": "Place",
          name: "Shilaj",
        },

        {
          "@type": "Place",
          name: "Shela",
        },

        {
          "@type": "Place",
          name: "Navrangpura",
        },

        {
          "@type": "Place",
          name: "Maninagar",
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
        "Custom metal fabrication",
        "Structural fabrication",
        "Industrial fabrication",
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
       BREADCRUMB
    ======================================================= */

    {
      "@type": "BreadcrumbList",

      "@id": `${productionUrl}/about#breadcrumb`,

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

          name: "About",

          item: `${productionUrl}/about`,
        },
      ],
    },


    /* =======================================================
       COMPANY / ORGANIZATION
    ======================================================= */

    {
      "@type": "Organization",

      "@id": `${productionUrl}/#organization`,

      name: "Welldone Metalworks",

      url: productionUrl,

      logo: {
        "@type": "ImageObject",

        url: `${productionUrl}/logo/logo.png`,
      },

      description:
        "Welldone Metalworks is a mild steel fabrication company serving Ahmedabad and Gandhinagar.",

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

export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <HeroSection
        title="About Us"
        breadcrumb="About"
        bgImage="/Banner/banner02.webp"
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <CompanyIntro />

      <MissionVision />

      <WhyChooseUs />

      <CallToAction />
    </>
  );
}