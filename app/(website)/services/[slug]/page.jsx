import { notFound } from "next/navigation";

import serviceDetails from "../../../../data/serviceDetails";

import ServiceHero from "../../../../components/service-details/ServiceHero";
import ServiceOverview from "../../../../components/service-details/ServiceOverview";
import ServiceHighlights from "../../../../components/service-details/ServiceHighlights";
import ServiceFeatures from "../../../../components/service-details/ServiceFeatures";
import ServiceBenefits from "../../../../components/service-details/ServiceBenefits";
import ServiceProcess from "../../../../components/service-details/ServiceProcess";
import ServiceMaterials from "../../../../components/service-details/ServiceMaterials";
import ServiceApplications from "../../../../components/service-details/ServiceApplications";
import ServiceStatistics from "../../../../components/service-details/ServiceStatistics";
import ServiceIndustries from "../../../../components/service-details/IndustriesServed";
import ServiceGallery from "../../../../components/service-details/ServiceGallery";
import ServiceFAQ from "../../../../components/service-details/ServiceFAQ";
import RelatedServices from "../../../../components/service-details/RelatedServices";
import ServiceCTA from "../../../../components/service-details/ServiceCTA";

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = serviceDetails[slug];

  if (!service) {
    return {
      title: "Service Not Found | Welldone Metalworks",
    };
  }

  return {
    title: `${service.title} Services in Ahmedabad | Welldone Metalworks`,

    description:
      service.hero?.description ||
      service.overview?.description ||
      `Professional ${service.title.toLowerCase()} services by Welldone Metalworks in Ahmedabad and Gandhinagar.`,

    keywords: [
      `${service.title} Ahmedabad`,
      `${service.title} services Ahmedabad`,
      `${service.title} Gandhinagar`,
      `Mild Steel ${service.title}`,
      `metal fabrication Ahmedabad`,
      `Welldone Metalworks`,
    ],

    alternates: {
      canonical: `https://welldone-metalworks.in/services/${service.slug}`,
    },

    openGraph: {
      title: `${service.title} | Welldone Metalworks`,
      description:
        service.hero?.description ||
        `Professional ${service.title.toLowerCase()} services in Ahmedabad and Gandhinagar.`,

      url: `https://welldone-metalworks.in/services/${service.slug}`,

      siteName: "Welldone Metalworks",

      images: service.hero?.image
        ? [
            {
              url: `https://welldone-metalworks.in${service.hero.image}`,
              alt: `${service.title} - Welldone Metalworks`,
            },
          ]
        : [],

      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: service.title,

    description:
      service.hero?.description ||
      service.overview?.description ||
      "",

    provider: {
      "@type": "LocalBusiness",
      name: "Welldone Metalworks",
      url: "https://welldone-metalworks.in",
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

    serviceType: service.title,

    url: `https://welldone-metalworks.in/services/${service.slug}`,
  };

  const faqStructuredData =
    service.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-white">
      {/* Service structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* FAQ structured data */}
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      )}

      <ServiceHero data={service.hero} />

      <ServiceOverview data={service.overview} />

      <ServiceStatistics data={service.statistics} />

      <ServiceHighlights data={service.highlights} />

      <ServiceFeatures data={service.features} />

      <ServiceBenefits data={service.benefits} />

      <ServiceProcess data={service.process} />

      <ServiceMaterials data={service.materials} />

      <ServiceApplications data={service.applications} />

      <ServiceIndustries data={service.industries} />

      <ServiceGallery data={service.gallery} />

      <ServiceFAQ data={service.faqs} />

      <RelatedServices services={service.relatedServices} />

      <ServiceCTA data={service.cta} />
    </main>
  );
}