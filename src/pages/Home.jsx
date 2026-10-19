import React, { useEffect } from "react";
import HomeHero from "@/components/home/HomeHero";
import ProofStrip from "@/components/home/ProofStrip";
import ProductsSection from "@/components/home/ProductsSection";
import HowItWorks from "@/components/home/HowItWorks";
import DeepDives from "@/components/home/DeepDives";
import Audiences from "@/components/home/Audiences";
import HomeFAQ from "@/components/home/HomeFAQ";
import ContactSection from "@/components/home/ContactSection";
import MobileCta from "@/components/home/MobileCta";
import CTABand from "@/components/site/CTABand";

export default function Home() {
  useEffect(() => { document.title = "Turn2Law - India's legal operating system"; }, []);
  return (
    <>
      <HomeHero />
      <ProofStrip />
      <ProductsSection />
      <HowItWorks />
      <DeepDives />
      <Audiences />
      <HomeFAQ />
      <ContactSection />
      <CTABand
        title="Legal work, without the friction."
        primary={{ label: "Get started", to: "/login" }}
        secondary={{ label: "Talk to us", to: "/#contact" }}
      />
      <div className="pb-16" />
      <MobileCta />
    </>
  );
}