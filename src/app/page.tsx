"use client";

import { useEffect } from "react";

import NavBar from "@/components/common/NavBar";
import CareerSection from "@/components/sections/CareerSection";
import CompanyHistorySection from "@/components/sections/CompanyHistorySection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import ServiceSection from "@/components/sections/ServiceSection";
import FramerMotionProvider from "@/providers/FramerMotionProvider";

import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <FramerMotionProvider>
      <main className="bg-[#F5F8FA]">
        <NavBar />
        <HeroSection />
        <div className="mx-4 md:mx-[10rem]">
          <ServiceSection />
          <CompanyHistorySection />
        </div>
        <InfoSection />
        <CareerSection />
        <FooterSection />
      </main>
    </FramerMotionProvider>
  );
}
