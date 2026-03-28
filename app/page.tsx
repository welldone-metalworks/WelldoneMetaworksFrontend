import Home from "../pages-ui/Home";

export const metadata = {
  metadataBase: new URL("https://welldone-metalworks.in"),

  title:
    "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",

  description:
    "Metal fabrication services in Ahmedabad. MS sheds, railings, gates & custom steel work. Call now for fast quote!",

  keywords: [
    "metal fabrication Ahmedabad",
    "MS fabrication work Ahmedabad",
    "industrial shed fabrication",
    "steel fabrication Gujarat",
    "custom metal fabrication Ahmedabad",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://welldone-metalworks.in/",
  },

  openGraph: {
    title: "Metal Fabrication Services in Ahmedabad",
    description:
      "Expert metal fabrication services in Ahmedabad for sheds, railings, gates & custom steel work.",
    url: "https://welldone-metalworks.in/",
    siteName: "Welldone Metalworks",
    images: [
      {
        url: "/banner/banner05.webp",
        width: 1200,
        height: 630,
        alt: "Metal Fabrication Services in Ahmedabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Metal Fabrication Services in Ahmedabad",
    description:
      "Custom metal fabrication, sheds, railings & gates in Ahmedabad.",
    images: ["/banner/banner05.webp"],
  },
};

export default function Page() {
  return <Home />;
}