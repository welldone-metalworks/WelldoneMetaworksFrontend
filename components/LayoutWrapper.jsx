"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const landingPages = [
    "/gazebo",
    "/pergola",
    "/canopy",
,
  ];

  const isLandingPage = landingPages.some((route) =>
    pathname.startsWith(route)
  );

  const isAdminRoute = pathname.startsWith("/admin");

  const hideWebsiteLayout = isLandingPage || isAdminRoute;

  return (
    <>
      {!hideWebsiteLayout && <Navbar />}

      <main>{children}</main>

      {!hideWebsiteLayout && <Footer />}

      {!hideWebsiteLayout && <FloatingContact />}
    </>
  );
}