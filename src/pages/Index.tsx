import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import MainBenefitsSection from "@/components/MainBenefitsSection";
import VSLSection from "@/components/VSLSection";
import RecipeCarousel from "@/components/RecipeCarousel";
import RecipePagesCarousel from "@/components/RecipePagesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoTestimonialsCarousel from "@/components/VideoTestimonialsCarousel";
import BonusSection from "@/components/BonusSection";
import ProblemSection from "@/components/ProblemSection";
import OfferSection from "@/components/OfferSection";
import NutriSection from "@/components/NutriSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import SalesNotification from "@/components/SalesNotification";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <UrgencyBar />
      <div className="pt-11 md:pt-12">
        <HeroSection />
        <div className="bg-[#FAF9F6] h-px w-full" /> {/* Separador sutil */}
      <MainBenefitsSection />
      <RecipeCarousel />
      <RecipePagesCarousel />
      {/* VSLSection removida conforme solicitado */}
      <TestimonialsSection />
      <BonusSection />
      <ProblemSection />
      <OfferSection />
      <NutriSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
      </div>
      <SalesNotification />
    </div>
  );
};

export default Index;
