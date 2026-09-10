import EnquiryHero from "@/components/Enquiry/EnquiryHero";
import ContactInfo from "@/components/Enquiry/ContactInfo";
import EnquiryForm from "@/components/Enquiry/EnquiryForm";
import EnquiryProcess from "@/components/Enquiry/EnquiryProcess";
import EnquiryCTA from "@/components/Enquiry/EnquiryCTA";

export const metadata = {
  title:
    "Request a Quote | Metal Fabrication Services in Ahmedabad | Welldone Metalworks",

  description:
    "Send your enquiry to Welldone Metalworks for custom mild-steel metal fabrication services in Ahmedabad and Gandhinagar, including gates, railings, garden structures, gazebos and roofing structures.",

  keywords:
    "metal fabrication enquiry Ahmedabad, custom metal fabrication quote Ahmedabad, mild steel fabrication Ahmedabad, metal fabrication Gandhinagar, fabrication enquiry Ahmedabad",

  openGraph: {
    title: "Request a Metal Fabrication Quote | Welldone Metalworks",

    description:
      "Contact Welldone Metalworks to discuss your custom mild-steel fabrication requirement in Ahmedabad and Gandhinagar.",

    url: "https://welldone-metalworks.in/enquiry",

    siteName: "Welldone Metalworks",

    images: [
      {
        url: "https://welldone-metalworks.in/Banner/banner02.webp",
        width: 1200,
        height: 630,
        alt: "Welldone Metalworks - Metal Fabrication Enquiry",
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
    <main>
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
              "Send your enquiry to Welldone Metalworks for custom mild-steel metal fabrication services in Ahmedabad and Gandhinagar.",
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

      <EnquiryHero />

      <ContactInfo />

      <EnquiryForm />

      <EnquiryProcess />

      <EnquiryCTA />
    </main>
  );
}