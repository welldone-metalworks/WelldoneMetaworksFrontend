import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactContent from "@/components/Contact/ContactContent";
import ContactForm from "@/components/Contact/ContactForm";
import MapEmbed from "@/components/Contact/MapEmbed";
import ContactCTA from "@/components/Contact/ContactCTA";

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
      "Contact Metal Fabrication Company Ahmedabad | Welldone Metalworks",

    /* =======================================================
       DESCRIPTION
       Short + contact focused
    ======================================================= */

    description:
      "Contact Welldone Metalworks for mild steel fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds and custom metalwork.",

    /* =======================================================
       KEYWORDS
    ======================================================= */

    keywords: [
      "contact metal fabrication Ahmedabad",
      "metal fabrication company Ahmedabad contact",
      "metal fabricator Ahmedabad contact",
      "MS fabrication Ahmedabad contact",
      "mild steel fabrication Ahmedabad",
      "custom metal fabrication Ahmedabad",
      "metal fabrication Gandhinagar contact",
      "fabrication company Ahmedabad contact",
      "gate fabrication Ahmedabad",
      "metal railing Ahmedabad",
      "staircase fabrication Ahmedabad",
      "shed fabrication Ahmedabad",
      "custom fabrication Ahmedabad",
    ],

    /* =======================================================
       CANONICAL
    ======================================================= */

    alternates: {
      canonical: "/contact",
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

      url: `${siteUrl}/contact`,

      siteName: "Welldone Metalworks",

      locale: "en_IN",

      title:
        "Contact Welldone Metalworks | Metal Fabrication Ahmedabad",

      description:
        "Contact Welldone Metalworks for mild steel fabrication services in Ahmedabad and Gandhinagar.",

      images: [
        {
          url: "/Banner/banner02.webp",
          width: 1200,
          height: 630,
          alt:
            "Contact Welldone Metalworks metal fabrication company",
        },
      ],
    },

    /* =======================================================
       TWITTER / X
    ======================================================= */

    twitter: {
      card: "summary_large_image",

      title:
        "Contact Welldone Metalworks | Metal Fabrication Ahmedabad",

      description:
        "Contact Welldone Metalworks for mild steel gates, railings, staircases, sheds and custom fabrication.",

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
   SEO + AEO + GEO + CONTACT
========================================================= */

const contactSchema = {
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
        "Welldone Metalworks provides custom mild steel fabrication services in Ahmedabad and Gandhinagar.",

      telephone: "+919649957698",

      email: "info@welldonemetalworks.com",

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
       CONTACT PAGE
    ======================================================= */

    {
      "@type": "ContactPage",

      "@id": `${productionUrl}/contact#webpage`,

      url: `${productionUrl}/contact`,

      name:
        "Contact Welldone Metalworks | Metal Fabrication Ahmedabad",

      description:
        "Contact Welldone Metalworks for mild steel fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds and custom metalwork.",

      isPartOf: {
        "@id": `${productionUrl}/#website`,
      },

      about: {
        "@id": `${productionUrl}/#business`,
      },

      mainEntity: {
        "@id": `${productionUrl}/#business`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        url: `${productionUrl}/Banner/banner02.webp`,

        width: 1200,

        height: 630,
      },

      breadcrumb: {
        "@id": `${productionUrl}/contact#breadcrumb`,
      },

      inLanguage: "en-IN",
    },


    /* =======================================================
       FABRICATION SERVICE
    ======================================================= */

    {
      "@type": "Service",

      "@id": `${productionUrl}/contact#fabrication-service`,

      name: "Mild Steel Metal Fabrication",

      serviceType:
        "Custom Mild Steel Fabrication",

      description:
        "Custom mild steel fabrication for gates, railings, staircases, sheds, canopies, gazebos and structural metalwork.",

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

      "@id": `${productionUrl}/contact#breadcrumb`,

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

          name: "Contact",

          item: `${productionUrl}/contact`,
        },
      ],
    },
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main>
        <ContactHero />

        <ContactInfo />

        <ContactContent />

        <ContactForm />

        <MapEmbed />

        <ContactCTA />
      </main>
    </>
  );
}