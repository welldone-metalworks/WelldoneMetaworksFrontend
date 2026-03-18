import { ShieldCheck, Lock, FileText, Phone } from "lucide-react";

// ✅ SEO METADATA
export const metadata = {
  title: "Privacy Policy – Secure & Trusted | Welldone Metalworks",
  description:
    "Read the Privacy Policy of Welldone Metalworks. We ensure complete protection of your personal data and provide secure metal fabrication services.",
  keywords: [
    "privacy policy",
    "metal fabrication privacy",
    "welldone metalworks",
    "data protection metal company",
  ],
  alternates: {
    canonical: "https://welldone-metalworks.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Welldone Metalworks",
    description:
      "We protect your data while delivering premium metal fabrication services including railings, gates, sheds, and custom solutions.",
    url: "https://welldone-metalworks.in/privacy-policy",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "https://welldone-metalworks.in/og-image.jpg", // 🔁 replace with your image
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
    title: "Privacy Policy | Welldone Metalworks",
    description:
      "Learn how Welldone Metalworks protects your data and ensures secure services.",
    images: ["https://welldone-metalworks.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* ===== SCHEMA (STRUCTURED DATA) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://welldone-metalworks.in/privacy-policy",
            description:
              "Privacy Policy of Welldone Metalworks ensuring data protection and secure fabrication services.",
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
            Home / <span className="text-gray-800 font-medium">Privacy Policy</span>
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Privacy Policy
          </h1>

          <p className="text-gray-600 max-w-2xl text-sm md:text-base">
            At <span className="font-semibold text-gray-900">Welldone Metalworks</span>, 
            we provide high-quality fabrication services including railings, gates, sheds, doors, gazebo structures, 
            and custom metal solutions — while maintaining the highest standards of data privacy and protection.
          </p>

        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Highlight */}
          <div className="bg-gradient-to-r from-[#981d13] to-[#cd2b14] text-white p-5 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-1">
              Your Trust is Our Foundation
            </h2>
            <p className="text-sm opacity-90">
              Just like our metal structures, our commitment to protecting your data is strong, reliable, and long-lasting.
            </p>
          </div>

          {[
            {
              icon: <ShieldCheck className="text-[#cd2b14]" />,
              title: "Information We Collect",
              text: "We collect basic information such as your name, phone number, email address, and project requirements."
            },
            {
              icon: <FileText className="text-[#cd2b14]" />,
              title: "How We Use Your Information",
              text: "Your data is used to provide quotations, understand project needs, and improve our services."
            },
            {
              icon: <Lock className="text-[#cd2b14]" />,
              title: "Data Security",
              text: "We use modern security practices to protect your personal data."
            },
            {
              icon: <ShieldCheck className="text-[#cd2b14]" />,
              title: "No Data Selling",
              text: "We never sell or share your personal data."
            },
            {
              icon: <FileText className="text-[#cd2b14]" />,
              title: "Cookies & Analytics",
              text: "We use cookies to enhance user experience."
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
              Need Custom Metal Fabrication?
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