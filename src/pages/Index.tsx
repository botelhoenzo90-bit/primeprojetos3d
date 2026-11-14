import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import InfoMarquee from "@/components/InfoMarquee";
import MainBenefitsSection from "@/components/MainBenefitsSection";
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
  <div className="min-h-screen overflow-x-hidden">
    <UrgencyBar />
    <div className="pt-16 sm:pt-14">
      <HeroSection />
      <RecipeCarousel />
      <InfoMarquee />
      <MainBenefitsSection />
      <CompatibilitySection />
      <VSLSection />
      <NutriSection />
      <TestimonialsSection />
      <BonusSection />
      <OfferSection />
      <GuaranteeSection />
      <DeliverySection />
      <FAQSection />
      <FooterSection />
    </div>
    <SalesNotification />
  </div>
);
export default Index;
