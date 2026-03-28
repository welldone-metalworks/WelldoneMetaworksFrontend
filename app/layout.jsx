import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import Script from "next/script"; // 👈 ADD THIS

export const metadata = {
  metadataBase: new URL("https://welldone-metalworks.in"),
  title: "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",
  description:
    "Welldone Metalworks offers expert metal fabrication services in Ahmedabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5S7MZ2457H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5S7MZ2457H');
          `}
        </Script>
      </head>

      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}