import { ArrowRight } from "lucide-react";
const SectionCTA = ({ label = "QUERO CONHECER A BIBLIOTECA" }: { label?: string }) => (
  <div className="mt-8 md:mt-10 flex flex-col items-center text-center">
    <a href="#oferta" className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[#FF4500] px-6 py-4 text-sm md:text-base font-black uppercase tracking-wide text-white shadow-lg shadow-orange-200/60 transition-all hover:-translate-y-0.5 hover:bg-[#E63E00] hover:shadow-xl active:translate-y-0">
      {label} <ArrowRight className="h-5 w-5" />
    </a>
  </div>
);
export default SectionCTA;