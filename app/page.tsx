import Home from "../pages-ui/Home";

export const metadata = {
  title:
    "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",
  description:
    "Welldone Metalworks provides premium metal fabrication services in Ahmedabad including custom fabrication, gazebo structures, security gates, railings, decorative metal panels and sports fencing.",
  keywords:
    "metal fabrication Ahmedabad, custom metal fabrication, gazebo structures Ahmedabad, metal railing fabrication, security gates Ahmedabad, metal fabrication company Ahmedabad",

  openGraph: {
    title: "Welldone Metalworks | Metal Fabrication Ahmedabad",
    description:
      "Premium metal fabrication services in Ahmedabad including gazebos, railings, gates and custom steel structures.",
    url: "https://welldone-metalworks.in",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "/banner/banner05.webp",
        width: 1200,
        height: 630,
        alt: "Metal Fabrication Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://welldone-metalworks.in",
  },
};

export default function Page() {
  return <Home />;
}