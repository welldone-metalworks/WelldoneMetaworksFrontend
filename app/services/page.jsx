import HeroSection from "../../components/About/HeroSection";
import ServicesList from "../../components/Services/ServiceList";
import ServiceProcess from "../../components/Services/ServiceProcess";

export const metadata = {
  title:
    "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",
  description:
    "Welldone Metalworks offers professional metal fabrication services in Ahmedabad including custom metal fabrication, gazebo structures, railings, security gates, sports court fencing and decorative metal panels.",
  keywords:
    "metal fabrication Ahmedabad, custom metal fabrication Ahmedabad, gazebo fabrication Ahmedabad, railing fabrication Ahmedabad, security gate fabrication Ahmedabad",

  openGraph: {
    title: "Metal Fabrication Services | Welldone Metalworks",
    description:
      "Professional metal fabrication services in Ahmedabad including gazebos, railings, security gates and custom steel structures.",
    url: "https://welldone-metalworks.in/services",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "https://welldone-metalworks.in/Banner/banner02.webp",
        width: 1200,
        height: 630,
        alt: "Metal Fabrication Services Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://welldone-metalworks.in/services",
  },
};

export default function ServicesPage() {
  return (
    <div>

      {/* Services Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Metal Fabrication Services",
            provider: {
              "@type": "LocalBusiness",
              name: "Welldone Metalworks",
              areaServed: {
                "@type": "City",
                name: "Ahmedabad",
              },
            },
            description:
              "Professional metal fabrication services including custom metal fabrication, gazebo structures, railings, security gates and decorative metal panels.",
          }),
        }}
      />

      <HeroSection 
        title="Our Services"
        breadcrumb="Services"
        bgImage="/Banner/banner02.webp"
      />

      <ServicesList />

      <ServiceProcess />

    </div>
  );
}