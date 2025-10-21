"use client";

import HeroSection from "@/UI/componen-onbording/hero-section";
import NavbarHome from "@/UI/componen-onbording/navbar";
import Products from "@/UI/componen-onbording/product";
import ServiceOnbording from "@/UI/componen-onbording/service-onbording";
import Footer from "@/UI/global/footer";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <HeroSection />
      <Products typeContent="home" />
      <ServiceOnbording />
      <Footer />
    </div>
  );
}
