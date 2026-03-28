"use client";

import Banner from "../components/Home/Banner";
import AboutHome from "../components/Home/AboutHome";
import ServicesHome from "../components/Home/ServicesHome";
import FAQ from "../components/Home/FAQ";
import WhyChooseUs from "../components/About/WhyChooseUs";
import ContactEnquiry from "../components/Home/ContactEnquiry";
import MapEmbed from "../components/Contact/MapEmbed";
import TrustSection from "../components/Home/TrustSection"
export default function Home() {
  return (
    <div className="pt-24 overflow-x-hidden">

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Welldone Metalworks",
            image: "https://welldone-metalworks.in/banner/banner05.webp",
            "@id": "https://welldone-metalworks.in",
            url: "https://welldone-metalworks.in",
            telephone: "+91 96499 57698",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN"
            },
            areaServed: "Ahmedabad",
            serviceType: "Metal Fabrication Services"
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Metal Fabrication",
            provider: {
              "@type": "LocalBusiness",
              name: "Welldone Metalworks"
            },
            areaServed: {
              "@type": "City",
              name: "Ahmedabad"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What metal fabrication services do you provide in Ahmedabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Welldone Metalworks provides custom metal fabrication, gazebo structures, railings, security gates, decorative metal panels and sports fencing."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide custom metal fabrication?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we design and fabricate custom metal structures for residential and commercial projects."
                }
              }
            ]
          })
        }}
      />

      <Banner />
      <AboutHome />
      <ServicesHome />
      <FAQ />
      <TrustSection />
      <WhyChooseUs />
      <ContactEnquiry />
      <MapEmbed />

    </div>
  );
}