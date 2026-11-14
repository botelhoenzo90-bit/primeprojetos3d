import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
const SectionCTA = ({ label = "QUERO CONHECER A BIBLIOTECA" }: { label?: string }) => (
  <div className="mt-8 md:mt-10 flex flex-col items-center text-center">
    <Button asChild className="h-auto w-full max-w-sm whitespace-normal rounded-lg bg-cta hover:bg-cta-hover px-6 py-4 text-sm md:text-base font-black uppercase text-primary-foreground">
      <a href="#oferta">{label} <ArrowRight className="h-5 w-5 shrink-0" /></a>
    </Button>
    <p className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> Acesso pelo WhatsApp</span><span className="inline-flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Garantia de 7 dias</span></p>
  </div>
);
export default SectionCTA;
