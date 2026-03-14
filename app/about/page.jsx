import HeroSection from "../../components/About/HeroSection";
import CompanyIntro from "../../components/About/CompanyIntro";
import MissionVision from "../../components/About/MissionVision";
import WhyChooseUs from "../../components/About/WhyChooseUs";
import CallToAction from "../../components/About/CallToAction";

export const metadata = {
  title:
    "About Welldone Metalworks | Metal Fabrication Company in Ahmedabad",
  description:
    "Welldone Metalworks is a trusted metal fabrication company in Ahmedabad providing custom fabrication, gazebo structures, metal railings, security gates and architectural metal solutions.",
  keywords:
    "metal fabrication company Ahmedabad, custom metal fabrication Ahmedabad, gazebo fabrication Ahmedabad, metal railing fabrication, security gate fabrication Ahmedabad",

  openGraph: {
    title: "Welldone Metalworks | Metal Fabrication Ahmedabad",
    description:
      "Professional metal fabrication company in Ahmedabad offering custom steel structures, gazebos, railings and security gates.",
    url: "https://welldone-metalworks.in/about",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "https://welldone-metalworks.in/Banner/banner02.webp",
        width: 1200,
        height: 630,
        alt: "Metal Fabrication Company Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://welldone-metalworks.in/about",
  },
};

export default function AboutPage() {
  return (
    <div>

      {/* About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Welldone Metalworks",
            url: "https://welldone-metalworks.in/about",
            description:
              "Welldone Metalworks is a leading metal fabrication company in Ahmedabad specializing in custom steel structures, railings, security gates and gazebo fabrication.",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Welldone Metalworks",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              telephone: "+91 96499 57698",
            },
          }),
        }}
      />

      <HeroSection
        title="About Us"
        breadcrumb="About"
        bgImage="/Banner/banner02.webp"
      />

      <CompanyIntro />
      <MissionVision />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}