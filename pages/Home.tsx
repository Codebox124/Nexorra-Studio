"use client";
import CTASection from "@/components/home/CTASection";
import FeaturedWork from "@/components/home/FeaturedWork";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";

function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <StatsSection />
      <FeaturedWork />
      <ServicesOverview />
      <Testimonials />
      <CTASection />
    </div>
  );
}

export default Home;
