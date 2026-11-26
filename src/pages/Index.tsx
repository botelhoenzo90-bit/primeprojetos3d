import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import RecipeCarousel from "@/components/RecipeCarousel";
import VSLSection from "@/components/VSLSection";
import NutriSection from "@/components/NutriSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import DeliverySection from "@/components/DeliverySection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import SalesNotification from "@/components/SalesNotification";
const Index = () => (
  <div className="prime-page min-h-screen overflow-x-hidden">
    <UrgencyBar />
    <div className="pt-[37px] md:pt-10">
      <HeroSection />
      <RecipeCarousel />
      <VSLSection />
      <NutriSection />
      <TestimonialsSection />
      <BonusSection />
      <OfferSection />
      <GuaranteeSection />
      <DeliverySection />
      <CompatibilitySection />
      <FAQSection />
      <FooterSection />
    </div>
    <SalesNotification />
  </div>
);
export default Index;
