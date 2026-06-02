"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const landingPages = [
    "/gazebo",
    "/pergola",
    "/canopy",
    "/metal-fabrication-ahmedabad",
  ];

  const isLandingPage = landingPages.some((route) =>
    pathname.startsWith(route)
  );

  const isAdminRoute = pathname.startsWith("/admin");

  const hideWebsiteLayout =
    isLandingPage || isAdminRoute;

  return (
    <>
      {!hideWebsiteLayout && <Navbar />}

      <main>{children}</main>

      {!hideWebsiteLayout && <Footer />}

      {!hideWebsiteLayout && <CallButton />}

      {!hideWebsiteLayout && <WhatsAppButton />}
    </>
  );
}