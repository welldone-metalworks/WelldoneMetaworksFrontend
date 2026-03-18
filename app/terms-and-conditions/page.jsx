import { ShieldCheck, FileText, Lock, Phone, Scale } from "lucide-react";

// ✅ SEO METADATA
export const metadata = {
  title: "Terms & Conditions | Welldone Metalworks",
  description:
    "Read the Terms & Conditions of Welldone Metalworks covering pricing, timelines, policies, and service guidelines for metal fabrication.",
  keywords: [
    "terms and conditions",
    "metal fabrication terms",
    "welldone metalworks policy",
    "fabrication service agreement",
  ],
  alternates: {
    canonical: "https://welldone-metalworks.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Welldone Metalworks",
    description:
      "Understand the terms for using Welldone Metalworks services including pricing, timelines, and project policies.",
    url: "https://welldone-metalworks.in/terms-and-conditions",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "https://welldone-metalworks.in/og-image.jpg", // replace with your image
        width: 1200,
        height: 630,
        alt: "Welldone Metalworks",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Welldone Metalworks",
    description:
      "View service terms, pricing policies, and conditions of Welldone Metalworks.",
    images: ["https://welldone-metalworks.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditions() {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* ===== SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms & Conditions",
            url: "https://welldone-metalworks.in/terms-and-conditions",
            description:
              "Terms and Conditions of Welldone Metalworks outlining policies, payments, and service agreements.",
            publisher: {
              "@type": "Organization",
              name: "Welldone Metalworks",
              url: "https://welldone-metalworks.in",
            },
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-10 px-6 bg-gradient-to-r from-[#981d13]/10 to-[#cd2b14]/10">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm text-gray-500 mb-2">
            Home / <span className="text-gray-800 font-medium">Terms & Conditions</span>
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 max-w-2xl text-sm md:text-base">
            These Terms & Conditions govern your use of services provided by{" "}
            <span className="font-semibold text-gray-900">Welldone Metalworks</span>. 
            By using our services, you agree to comply with the terms outlined below.
          </p>

        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Highlight */}
          <div className="bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white p-5 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-1">
              Commitment to Quality & Transparency
            </h2>
            <p className="text-sm opacity-90">
              We believe in clear communication, high-quality workmanship, and fair business practices.
            </p>
          </div>

          {[
            {
              icon: <FileText className="text-[#cd2b14]" />,
              title: "Use of Our Services",
              text: "You agree to provide accurate project details and cooperate during fabrication and installation."
            },
            {
              icon: <Scale className="text-[#cd2b14]" />,
              title: "Quotations & Pricing",
              text: "Prices depend on materials, design complexity, and site conditions."
            },
            {
              icon: <Lock className="text-[#cd2b14]" />,
              title: "Payments",
              text: "Advance payments may be required before starting the project."
            },
            {
              icon: <ShieldCheck className="text-[#cd2b14]" />,
              title: "Project Timelines",
              text: "Timelines may vary due to external conditions like weather or material availability."
            },
            {
              icon: <FileText className="text-[#cd2b14]" />,
              title: "Customization & Changes",
              text: "Changes after confirmation may affect cost and delivery time."
            },
            {
              icon: <ShieldCheck className="text-[#cd2b14]" />,
              title: "Liability",
              text: "We are not responsible for damage due to misuse or external factors."
            },
            {
              icon: <Lock className="text-[#cd2b14]" />,
              title: "Intellectual Property",
              text: "All designs remain property of Welldone Metalworks."
            },
            {
              icon: <FileText className="text-[#cd2b14]" />,
              title: "Termination",
              text: "We may cancel services if terms are violated."
            },
            {
              icon: <Scale className="text-[#cd2b14]" />,
              title: "Updates to Terms",
              text: "Terms may change periodically."
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#981d13] to-[#cd2b14] p-8 rounded-2xl text-white text-center shadow-xl">

            <h2 className="text-xl md:text-3xl font-bold mb-3">
              Ready to Start Your Project?
            </h2>

            <div className="flex justify-center gap-3 flex-wrap">
              <a href="tel:+919649957698" className="bg-white text-[#981d13] px-5 py-2 rounded-full">
                Call Now
              </a>
              <a href="/contact" className="border border-white px-5 py-2 rounded-full">
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="pb-12 px-6 text-center">
        <Phone className="mx-auto text-[#cd2b14] mb-2" />
        <p className="text-gray-600 text-sm">
          info@welldone-metalworks.in | +91 96499 57698
        </p>
      </section>

    </div>
  );
}