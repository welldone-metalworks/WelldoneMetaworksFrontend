import HeroSection from "../../components/About/HeroSection";
import ContactInfo from "../../components/Enquiry/ContactInfo";
import EnquiryForm from "../../components/Enquiry/EnquiryForm";

export const metadata = {
  title: "Enquiry | Welldone Metalworks",
  description:
    "Send your enquiry to Welldone Metalworks. Get in touch for custom metal fabrication, services, and project discussions.",
};

export default function EnquiryPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <HeroSection
        title="Enquiry Form"
        breadcrumb="Enquiry"
        bgImage="/banner/banner02.webp"
      />

      {/* Contact Info */}
      <ContactInfo />

      {/* Enquiry Form */}
      <EnquiryForm />
    </div>
  );
}
