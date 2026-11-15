import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SectionCTA = ({ label = "QUERO CONHECER A BIBLIOTECA", dark = false }: { label?: string; dark?: boolean }) => (
  <div className="mt-7 md:mt-9 flex flex-col items-center text-center">
    <Button asChild className="h-auto w-full max-w-sm whitespace-normal rounded-xl bg-[#E85D25] hover:bg-[#CF4D1B] px-6 py-4 text-sm md:text-base font-black uppercase text-white shadow-md">
      <a href="#oferta" className="flex items-center justify-center gap-2 text-center leading-tight">{label} <ArrowRight className="h-5 w-5 shrink-0" /></a>
    </Button>
    <p className={`mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-bold leading-tight ${dark ? "text-white" : "text-slate-700"}`}>
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <MessageCircle className="h-4 w-4 text-green-500" strokeWidth={2.5} />
        Acesso pelo WhatsApp
      </span>
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <ShieldCheck className={`h-4 w-4 ${dark ? "text-emerald-300" : "text-green-600"}`} strokeWidth={2.5} />
        Garantia de 7 dias
      </span>
    </p>
  </div>
);

export default SectionCTA;
