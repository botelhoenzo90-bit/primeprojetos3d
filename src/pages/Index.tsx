import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import MainBenefitsSection from "@/components/MainBenefitsSection";
import VSLSection from "@/components/VSLSection";
import RecipeCarousel from "@/components/RecipeCarousel";
import RecipePagesCarousel from "@/components/RecipePagesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import ProblemSection from "@/components/ProblemSection";
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
      <div className="bg-[#FAF9F6] h-px w-full" />
      <MainBenefitsSection />
      <RecipeCarousel />
      <RecipePagesCarousel />
      <ProblemSection />
      <NutriSection />
      <VSLSection />
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
