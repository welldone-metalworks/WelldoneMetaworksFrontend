"use client";

import Banner from "../components/Home/Banner";
import AboutHome from "../components/Home/AboutHome";
import ServicesHome from "../components/Home/ServicesHome";
import FAQ from "../components/Home/FAQ";
import WhyChooseUs from "../components/About/WhyChooseUs";
import ContactEnquiry from "../components/Home/ContactEnquiry";
import MapEmbed from "../components/Contact/MapEmbed";

export default function Home() {
  return (
    <div className="pt-24 overflow-x-hidden">
      <Banner />
      <AboutHome />
      <ServicesHome />
      <FAQ />
      <WhyChooseUs />
      <ContactEnquiry />
      <MapEmbed />
    </div>
  );
}
