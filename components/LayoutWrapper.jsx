"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isLandingPage = pathname === "/metal-fabrication-ahmedabad";

  return (
    <>
      {!isLandingPage && <Navbar />}

      <main>{children}</main>

      {!isLandingPage && <Footer />}

      {!isLandingPage && <CallButton />}
      {!isLandingPage && <WhatsAppButton />}
    </>
  );
}