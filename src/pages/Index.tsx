import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import InfoMarquee from "@/components/InfoMarquee";
import MainBenefitsSection from "@/components/MainBenefitsSection";
import VSLSection from "@/components/VSLSection";
import RecipeCarousel from "@/components/RecipeCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import NutriSection from "@/components/NutriSection";
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
      <InfoMarquee />
      <MainBenefitsSection />
      <RecipeCarousel />
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
