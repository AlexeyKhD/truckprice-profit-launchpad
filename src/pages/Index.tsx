
import { useEffect } from "react";
import MainLayout from "@/components/MainLayout";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RewardSystem from "@/components/RewardSystem";
import PlatformAdvantages from "@/components/PlatformAdvantages";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to element when URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <MainLayout>
      <Hero />
      <HowItWorks />
      <RewardSystem />
      <PlatformAdvantages />
      <Testimonials />
      <Faq />
    </MainLayout>
  );
};

export default Index;
