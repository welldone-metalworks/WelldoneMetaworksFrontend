import LandingHero from "@/components/MetalFabricationAhmedabad/LandingHero";
import BusinessSnapshot from "@/components/MetalFabricationAhmedabad/BusinessSnapshot";
import FabricationServices from "@/components/MetalFabricationAhmedabad/FabricationServices";
import WhyMSFabrication from "@/components/MetalFabricationAhmedabad/WhyMSFabrication";
import FabricationProcess from "@/components/MetalFabricationAhmedabad/FabricationProcess";
import ApplicationsSection from "@/components/MetalFabricationAhmedabad/ApplicationsSection";
import MeasurementInstallation from "@/components/MetalFabricationAhmedabad/MeasurementInstallation";
import ProjectShowcase from "@/components/MetalFabricationAhmedabad/ProjectShowcase";
import AhmedabadServiceArea from "@/components/MetalFabricationAhmedabad/AhmedabadServiceArea";
import Testimonials from "@/components/MetalFabricationAhmedabad/Testimonials";
import FAQ from "@/components/MetalFabricationAhmedabad/FAQ";
import QuoteSection from "@/components/MetalFabricationAhmedabad/QuoteSection";
import FinalCTA from "@/components/MetalFabricationAhmedabad/FinalCTA";

export const metadata = {
  title: "Metal Fabrication Ahmedabad | Custom MS Fabrication | Welldone Metalworks",
  description:
    "Custom MS metal fabrication in Ahmedabad for gates, railings, sheds, gazebos, pergolas and other fabrication requirements, with site measurement and installation support.",
  alternates: {
    canonical: "https://welldone-metalworks.in/metal-fabrication-ahmedabad",
  },
  openGraph: {
    title: "Metal Fabrication Ahmedabad | Welldone Metalworks",
    description:
      "Custom mild-steel metal fabrication in Ahmedabad and Gandhinagar for gates, railings, sheds, gazebos, pergolas and other custom requirements.",
    url: "https://welldone-metalworks.in/metal-fabrication-ahmedabad",
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <main>
      <LandingHero />

      <BusinessSnapshot />

      <FabricationServices />

      <WhyMSFabrication />

      <FabricationProcess />

      <ApplicationsSection />

      <MeasurementInstallation />

      <ProjectShowcase />

      <AhmedabadServiceArea />

      {/* Pass your existing genuine testimonials here */}
      <Testimonials />

      <FAQ />

      <QuoteSection />

      <FinalCTA />
    </main>
  );
}