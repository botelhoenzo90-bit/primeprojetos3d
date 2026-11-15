import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SectionCTA = ({ label = "QUERO CONHECER A BIBLIOTECA" }: { label?: string }) => (
  <div className="mt-7 md:mt-9 flex flex-col items-center text-center">
    <Button asChild className="h-auto w-full max-w-sm whitespace-normal rounded-xl bg-[#E85D25] hover:bg-[#CF4D1B] px-6 py-4 text-sm md:text-base font-black uppercase text-white shadow-md">
      <a href="#oferta" className="flex items-center justify-center gap-2 text-center leading-tight">{label} <ArrowRight className="h-5 w-5 shrink-0" /></a>
    </Button>
    <p className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold leading-tight text-slate-600">
      <span>Acesso pelo WhatsApp</span>
      <span aria-hidden="true" className="text-slate-300">•</span>
      <span>Garantia de 7 dias</span>
    </p>
  </div>
);

export default SectionCTA;
