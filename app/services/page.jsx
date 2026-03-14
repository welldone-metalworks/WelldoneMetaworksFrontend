import HeroSection from "../../components/About/HeroSection";
import ServicesList from "../../components/Services/ServiceList";
import ServiceProcess from "../../components/Services/ServiceProcess";

export const metadata = {
  title: "Our Services | Welldone Metalworks",
  description:
    "Explore our complete range of metal fabrication services including custom fabrication, gazebos, roofing, and structural metalworks.",
};

export default function ServicesPage() {
  return (
    <div>
      <HeroSection 
        title="Our Services"
        breadcrumb="Services"
        bgImage="/banner/banner02.webp"
      />
      <ServicesList />
      <ServiceProcess />
    </div>
  );
}
