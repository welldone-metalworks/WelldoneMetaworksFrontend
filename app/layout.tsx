import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://welldone-metalworks.in"), // ✅ ADD THIS

  title: "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",
  description:
    "Welldone Metalworks offers expert metal fabrication, MS sheds, railings, and custom steel work in Ahmedabad. Get a free quote today!",
  keywords: [
    "metal fabrication Ahmedabad",
    "ms fabrication work",
    "industrial shed fabrication",
    "steel fabrication Gujarat",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* ✅ Sticky WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}