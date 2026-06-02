import HeroSection from "@/components/About/HeroSection";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import MapEmbed from "@/components/Contact/MapEmbed";

export const metadata = {
  title:
    "Contact Welldone Metalworks | Metal Fabrication Company in Ahmedabad",
  description:
    "Contact Welldone Metalworks for professional metal fabrication services in Ahmedabad including custom fabrication, gazebos, railings, security gates and decorative metal structures.",
  keywords:
    "contact metal fabrication Ahmedabad, metal fabrication company Ahmedabad contact, custom metal fabrication Ahmedabad contact",

  openGraph: {
    title: "Contact Welldone Metalworks",
    description:
      "Get in touch with Welldone Metalworks for custom metal fabrication services in Ahmedabad.",
    url: "https://welldone-metalworks.in/contact",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "https://welldone-metalworks.in/Banner/banner02.webp",
        width: 1200,
        height: 630,
        alt: "Contact Welldone Metalworks",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://welldone-metalworks.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24">

      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Welldone Metalworks",
            url: "https://welldone-metalworks.in/contact",
            description:
              "Contact Welldone Metalworks for professional metal fabrication services in Ahmedabad.",
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
        title="Contact Us"
        breadcrumb="Contact"
        bgImage="/Banner/banner02.webp"
      />

      <ContactInfo />
      <ContactForm />
      <MapEmbed />

    </div>
  );
}