import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SectionCTA = ({ label = "QUERO CONHECER A BIBLIOTECA" }: { label?: string }) => (
  <div className="mt-7 md:mt-9 flex flex-col items-center text-center">
    <Button asChild className="h-auto w-full max-w-sm whitespace-normal rounded-xl bg-[#E85D25] hover:bg-[#CF4D1B] px-6 py-4 text-sm md:text-base font-black uppercase text-white shadow-md">
      <a href="#oferta" className="flex items-center justify-center gap-2 text-center leading-tight">{label} <ArrowRight className="h-5 w-5 shrink-0" /></a>
    </Button>
    <div className="mt-4 flex w-full max-w-md flex-wrap items-center justify-center gap-2">
      <span className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs sm:text-sm font-extrabold leading-tight text-emerald-800">
        <MessageCircle className="h-4 w-4 shrink-0 text-emerald-700" /> Acesso pelo WhatsApp
      </span>
      <span className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-xs sm:text-sm font-extrabold leading-tight text-blue-800">
        <ShieldCheck className="h-4 w-4 shrink-0 text-blue-700" /> Garantia de 7 dias
      </span>
    </div>
  </div>
);

export default SectionCTA;
