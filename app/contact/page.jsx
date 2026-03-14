import HeroSection from "@/components/About/HeroSection";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import MapEmbed from "@/components/Contact/MapEmbed";

export const metadata = {
  title: "Contact Us | Welldone Metalworks",
  description: "Get in touch with Welldone Metalworks for custom fabrication services",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <HeroSection
        title="Contact Us"
        breadcrumb="Contact"
        bgImage="/banner/banner02.webp"
      />
      <ContactInfo />
      <ContactForm />
      <MapEmbed />
    </div>
  );
}
