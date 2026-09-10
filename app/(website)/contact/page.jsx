import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactContent from "@/components/Contact/ContactContent";
import ContactForm from "@/components/Contact/ContactForm";
import MapEmbed from "@/components/Contact/MapEmbed";
import ContactCTA from "@/components/Contact/ContactCTA";

export const metadata = {
  title:
    "Contact Welldone Metalworks | Metal Fabrication Company in Ahmedabad",

  description:
    "Contact Welldone Metalworks for custom mild-steel metal fabrication services in Ahmedabad and Gandhinagar, including gates, railings, garden structures, gazebos and roofing structures.",

  keywords:
    "contact metal fabrication Ahmedabad, metal fabrication company Ahmedabad contact, custom metal fabrication Ahmedabad, mild steel fabrication Ahmedabad, metal fabrication Gandhinagar contact",

  openGraph: {
    title: "Contact Welldone Metalworks",

    description:
      "Get in touch with Welldone Metalworks for custom mild-steel fabrication services in Ahmedabad and Gandhinagar.",

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
    <main>
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
              "Contact Welldone Metalworks for custom mild-steel metal fabrication services in Ahmedabad and Gandhinagar.",
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
            image:
              "https://welldone-metalworks.in/Banner/banner02.webp",
            url: "https://welldone-metalworks.in",
            telephone: "+91 96499 57698",
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

            serviceType: "Mild Steel Metal Fabrication Services",
          }),
        }}
      />

      <ContactHero />

      <ContactInfo />

      <ContactContent />

      <ContactForm />

      <MapEmbed />

      <ContactCTA />
    </main>
  );
}