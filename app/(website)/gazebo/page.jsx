import Hero from "@/components/Gazebo/Hero";
import About from "@/components/Gazebo/About";
import Services from "@/components/Gazebo/Services";
import Features from "@/components/Gazebo/Features";
import Gallery from "@/components/Gazebo/Gallery";
import Lifestyle from "@/components/Gazebo/Lifestyle";
import Process from "@/components/Gazebo/Process";
import Testimonials from "@/components/Gazebo/Testimonials";
import FAQ from "@/components/Gazebo/FAQ";
import CTA from "@/components/Gazebo/CTA";

//
// SEO METADATA
//
export const metadata = {
  title:
    "Premium Gazebo, Pergola & Canopy Structures | Welldone Metalworks",

  description:
    "Welldone Metalworks provides premium gazebo, pergola & canopy structures for villas, rooftops, farmhouses & luxury outdoor with modern architectural designs.",

  keywords: [
    "Gazebo Structure",
    "Pergola Design",
    "Canopy Structure",
    "Outdoor Gazebo",
    "Luxury Gazebo",
    "Modern Pergola",
    "Terrace Gazebo",
    "Rooftop Pergola",
    "Outdoor Canopy",
    "Metal Gazebo",
    "Gazebo Ahmedabad",
    "Pergola Ahmedabad",
    "Canopy Ahmedabad",
    "Welldone Metalworks",
  ],

  authors: [
    {
      name: "Welldone Metalworks",
    },
  ],

  creator: "Welldone Metalworks",

  publisher: "Welldone Metalworks",

  metadataBase: new URL("https://www.welldonemetalworks.com"),

  alternates: {
    canonical: "/gazebo",
  },

  openGraph: {
    title:
      "Premium Gazebo, Pergola & Canopy Structures | Welldone Metalworks",

    description:
      "Luxury gazebo, pergola & canopy solutions designed for villas, rooftops & premium outdoor living spaces.",

    url: "https://www.welldonemetalworks.com/gazebo",

    siteName: "Welldone Metalworks",

    images: [
      {
        url: "/og-gazebo.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Gazebo Structures",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Premium Gazebo, Pergola & Canopy Structures | Welldone Metalworks",

    description:
      "Luxury outdoor gazebo, pergola & canopy structures for villas & premium spaces.",

    images: ["/og-gazebo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Metal Fabrication",
};

//
// JSON-LD SCHEMA
//
const schemaData = {
  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  name: "Welldone Metalworks",

  image:
    "https://www.welldonemetalworks.com/og-gazebo.jpg",

  url: "https://www.welldonemetalworks.com/gazebo",

  telephone: "+91 9649957698",

  address: {
    "@type": "PostalAddress",

    addressCountry: "IN",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Ahmedabad",
    },
    {
      "@type": "State",
      name: "Gujarat",
    },
  ],

  description:
    "Welldone Metalworks provides premium gazebo, pergola & canopy structures with modern architectural designs for luxury outdoor spaces.",

  serviceType: [
    "Gazebo Structure",
    "Pergola Structure",
    "Canopy Structure",
    "Outdoor Metal Fabrication",
  ],

  priceRange: "₹₹₹",

  sameAs: [
    "https://www.instagram.com/",
    "https://www.facebook.com/",
  ],
};

export default function GazeboPage() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* PAGE */}
      <main className="bg-white overflow-hidden">

        <Hero />

        <About />

        <Services />

        <Features />

        <Gallery />

        <Lifestyle />

        <Process />

        <Testimonials />

        <FAQ />

        <CTA />

      </main>
    </>
  );
}