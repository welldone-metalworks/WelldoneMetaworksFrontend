import EnquiryHero from "@/components/Enquiry/EnquiryHero";
import ContactInfo from "@/components/Enquiry/ContactInfo";
import EnquiryForm from "@/components/Enquiry/EnquiryForm";
import EnquiryProcess from "@/components/Enquiry/EnquiryProcess";
import EnquiryCTA from "@/components/Enquiry/EnquiryCTA";

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
      "Request a Quote | Metal Fabrication Ahmedabad",

    /* =======================================================
       DESCRIPTION
       Short and conversion focused
    ======================================================= */

    description:
      "Request a quote for mild steel fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds and custom metalwork.",

    /* =======================================================
       KEYWORDS
    ======================================================= */

    keywords: [
      "metal fabrication quote Ahmedabad",
      "metal fabrication enquiry Ahmedabad",
      "metal fabrication quotation Ahmedabad",
      "MS fabrication quote Ahmedabad",
      "mild steel fabrication quote Ahmedabad",
      "custom metal fabrication Ahmedabad",
      "metal fabricator Ahmedabad",
      "fabrication enquiry Ahmedabad",
      "metal fabrication Gandhinagar",
      "MS fabrication Gandhinagar",
      "gate fabrication quote Ahmedabad",
      "railing fabrication quote Ahmedabad",
      "staircase fabrication quote Ahmedabad",
      "shed fabrication quote Ahmedabad",
      "custom fabrication quote Ahmedabad",
    ],

    /* =======================================================
       CANONICAL
    ======================================================= */

    alternates: {
      canonical: "/enquiry",
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

      url: `${siteUrl}/enquiry`,

      siteName: "Welldone Metalworks",

      locale: "en_IN",

      title:
        "Request a Quote | Metal Fabrication Ahmedabad",

      description:
        "Request a quote for mild steel fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds and custom metalwork.",

      images: [
        {
          url: "/Banner/banner02.webp",
          width: 1200,
          height: 630,
          alt:
            "Request a metal fabrication quote from Welldone Metalworks",
        },
      ],
    },

    /* =======================================================
       TWITTER / X
    ======================================================= */

    twitter: {
      card: "summary_large_image",

      title:
        "Request a Quote | Metal Fabrication Ahmedabad",

      description:
        "Request a quote for mild steel gates, railings, staircases, sheds and custom fabrication in Ahmedabad.",

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
   SEO + AEO + GEO + CONVERSION PAGE
========================================================= */

const enquirySchema = {
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

      "@id": `${productionUrl}/enquiry#webpage`,

      url: `${productionUrl}/enquiry`,

      name:
        "Request a Quote | Metal Fabrication Ahmedabad",

      description:
        "Request a quote for mild steel fabrication in Ahmedabad and Gandhinagar, including gates, railings, staircases, sheds and custom metalwork.",

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
        "@id": `${productionUrl}/enquiry#breadcrumb`,
      },

      inLanguage: "en-IN",
    },


    /* =======================================================
       SERVICE
    ======================================================= */

    {
      "@type": "Service",

      "@id": `${productionUrl}/enquiry#fabrication-service`,

      name: "Custom Mild Steel Fabrication",

      serviceType:
        "Mild Steel Metal Fabrication",

      description:
        "Custom mild steel fabrication services for gates, railings, staircases, sheds, canopies, gazebos and structural metalwork.",

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

      "@id": `${productionUrl}/enquiry#breadcrumb`,

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

          name: "Enquiry",

          item: `${productionUrl}/enquiry`,
        },
      ],
    },
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function EnquiryPage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(enquirySchema),
        }}
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main>
        <EnquiryHero />

        <ContactInfo />

        <EnquiryForm />

        <EnquiryProcess />

        <EnquiryCTA />
      </main>
    </>
  );
}