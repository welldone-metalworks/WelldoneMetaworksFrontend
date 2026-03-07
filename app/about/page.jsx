import HeroSection from "../../components/About/HeroSection";
import CompanyIntro from "../../components/About/CompanyIntro";
import MissionVision from "../../components/About/MissionVision";
import WhyChooseUs from "../../components/About/WhyChooseUs";
import CallToAction from "../../components/About/CallToAction";

export const metadata = {
  title: "About Us | Welldone Metalworks",
  description:
    "Learn more about Welldone Metalworks, our mission, vision, and commitment to high-quality metal fabrication services.",
};

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        title="About Us"
        breadcrumb="About"
        bgImage="/banner/banner02.jpg"
      />

      <CompanyIntro />
      <MissionVision />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}
