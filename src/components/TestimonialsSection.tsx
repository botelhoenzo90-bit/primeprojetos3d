import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import canecaPai from "@/assets/depoimentos/caneca-pai.webp.asset.json";
import canecasMengao from "@/assets/depoimentos/canecas-mengao.webp.asset.json";
import cliente1 from "@/assets/depoimentos/cliente-3d-01.webp.asset.json";
import cliente2 from "@/assets/depoimentos/cliente-3d-02.webp.asset.json";
import cliente3 from "@/assets/depoimentos/cliente-3d-03.webp.asset.json";
import cliente4 from "@/assets/depoimentos/cliente-3d-04.webp.asset.json";
import cliente5 from "@/assets/depoimentos/cliente-3d-05.webp.asset.json";
import cliente6 from "@/assets/depoimentos/cliente-3d-06.webp.asset.json";
import cliente7 from "@/assets/depoimentos/cliente-3d-07.webp.asset.json";

const testimonials = [cliente1.url, cliente2.url, cliente3.url, cliente4.url, cliente5.url, cliente6.url, cliente7.url, canecaPai.url, canecasMengao.url];
const TestimonialsSection = () => {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="py-12 md:py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap border border-[#FFD700]">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> DEPOIMENTOS E EXPERIÊNCIAS
          </span>
          <h2 className="mx-auto max-w-4xl text-[clamp(1.55rem,6.6vw,3.75rem)] font-black text-green-title mb-2 leading-tight px-1 tracking-tight">
            <span className="block whitespace-nowrap">Veja o que estão falando</span>
            <span className="block whitespace-nowrap text-heading-highlight">sobre o Pack 3D</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-medium">Relatos e comentários de quem já conhece os projetos e arquivos 3D.</p>
        </motion.div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee-testimonials" style={{ width: `${doubled.length * 304}px` }}>
          {doubled.map((file, i) => (
            <div key={i} className="flex-shrink-0 w-72 mx-2">
              <img src={file} alt={`Depoimento de cliente ${(i % testimonials.length) + 1}`} className="w-72 h-[420px] object-contain bg-white rounded-2xl shadow-xl" loading="eager" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <Button asChild className="h-auto whitespace-normal"><a href="#oferta" className="prime-cta inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-primary-foreground font-black text-sm md:text-xl px-12 py-5 rounded-full text-center  transition-all uppercase tracking-wide mb-2 ">GARANTIR MEU ACESSO AGORA</a></Button>
        <p className="text-xs md:text-sm text-[#064E3B] font-semibold">🛡️ Garantia de 7 dias · Acesso digital imediato</p>
      </div>
    </section>
  );
};
export default TestimonialsSection;
