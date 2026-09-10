import ServicesHero from "@/components/Services/ServicesHero";
import ServicesOverview from "@/components/Services/ServicesOverview";
import ServicesGrid from "@/components/Services/ServicesGrid";
import ServicesProcess from "@/components/Services/ServicesProcess";
import ServicesCoverage from "@/components/Services/ServicesCoverage";
import ServicesCTA from "@/components/Services/ServicesCTA";
import { services } from "@/data/services";

export const metadata = {
  title:
    "Metal Fabrication Services in Ahmedabad & Gandhinagar | Welldone Metalworks",

  description:
    "Explore Welldone Metalworks services including custom Mild Steel garden structures, gazebo structures, railings, heavy conventional fabrication and polycarbonate roofing across Ahmedabad and Gandhinagar.",

  keywords: [
    "metal fabrication Ahmedabad",
    "MS fabrication Ahmedabad",
    "Mild Steel fabrication Ahmedabad",
    "metal fabrication Gandhinagar",
    "MS fabrication Gandhinagar",
    "garden structure fabrication Ahmedabad",
    "gazebo fabrication Ahmedabad",
    "railing fabrication Ahmedabad",
    "heavy fabrication Ahmedabad",
    "polycarbonate roofing Ahmedabad",
  ],

  alternates: {
    canonical: "https://welldone-metalworks.in/services",
  },

  openGraph: {
    title:
      "Metal Fabrication Services in Ahmedabad & Gandhinagar | Welldone Metalworks",

    description:
      "Custom Mild Steel fabrication services including garden structures, gazebos, railings, heavy conventional fabrication and polycarbonate roofing.",

    url: "https://welldone-metalworks.in/services",

    siteName: "Welldone Metalworks",

    images: [
      {
        url: "https://welldone-metalworks.in/Banner/banner02.webp",
        width: 1200,
        height: 630,
        alt: "Welldone Metalworks metal fabrication services",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Metal Fabrication Services in Ahmedabad & Gandhinagar | Welldone Metalworks",
    description:
      "Custom Mild Steel fabrication services for residential, commercial and project-specific requirements.",
    images: ["https://welldone-metalworks.in/Banner/banner02.webp"],
  },
};

export default function ServicesPage() {
  const serviceListSchema = services.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
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
    provider: {
      "@type": "LocalBusiness",
      name: "Welldone Metalworks",
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://welldone-metalworks.in/services#webpage",
        url: "https://welldone-metalworks.in/services",
        name:
          "Metal Fabrication Services in Ahmedabad & Gandhinagar | Welldone Metalworks",
        description:
          "Custom Mild Steel fabrication services for residential, commercial and project-specific requirements.",
      },

      {
        "@type": "ItemList",
        "@id": "https://welldone-metalworks.in/services#services",
        name: "Welldone Metalworks Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `https://welldone-metalworks.in/services/${service.slug}`,
        })),
      },

      ...serviceListSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

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