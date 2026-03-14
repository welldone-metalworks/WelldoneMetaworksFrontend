import HeroSection from "../../components/About/HeroSection";
import ContactInfo from "../../components/Enquiry/ContactInfo";
import EnquiryForm from "../../components/Enquiry/EnquiryForm";

export const metadata = {
  title:
    "Request a Quote | Metal Fabrication Services in Ahmedabad | Welldone Metalworks",
  description:
    "Send your enquiry to Welldone Metalworks for custom metal fabrication services in Ahmedabad including gazebo structures, railings, security gates and architectural metalwork.",
  keywords:
    "metal fabrication enquiry Ahmedabad, custom metal fabrication quote Ahmedabad, gazebo fabrication enquiry Ahmedabad",

  openGraph: {
    title: "Request a Metal Fabrication Quote | Welldone Metalworks",
    description:
      "Contact Welldone Metalworks for custom metal fabrication enquiries and project discussions in Ahmedabad.",
    url: "https://welldone-metalworks.in/enquiry",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "https://welldone-metalworks.in/Banner/banner02.webp",
        width: 1200,
        height: 630,
        alt: "Metal Fabrication Enquiry",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://welldone-metalworks.in/enquiry",
  },
};

export default function EnquiryPage() {
  return (
    <div className="pt-24">

      {/* Enquiry Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Metal Fabrication Enquiry",
            url: "https://welldone-metalworks.in/enquiry",
            description:
              "Send your enquiry to Welldone Metalworks for custom metal fabrication services in Ahmedabad.",
          }),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Welldone Metalworks",
            image: "https://welldone-metalworks.in/Banner/banner02.webp",
            url: "https://welldone-metalworks.in",
            telephone: "+91 96499 57698",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
            areaServed: "Ahmedabad",
            serviceType: "Metal Fabrication Services",
          }),
        }}
      />

      <HeroSection
        title="Enquiry Form"
        breadcrumb="Enquiry"
        bgImage="/Banner/banner02.webp"
      />

      <ContactInfo />

      <EnquiryForm />

    </div>
  );
}