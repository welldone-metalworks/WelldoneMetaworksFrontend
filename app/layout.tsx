import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
import React from "react";
import LayoutWrapper from "../components/LayoutWrapper"; // 👈 new

export const metadata = {
  metadataBase: new URL("https://welldone-metalworks.in"),
  title: "Metal Fabrication Services in Ahmedabad | Welldone Metalworks",
  description:
    "Welldone Metalworks offers expert metal fabrication services in Ahmedabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}