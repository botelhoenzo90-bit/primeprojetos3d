import { motion } from "framer-motion";
import { Star, ShieldCheck, Flame, Zap } from "lucide-react";
import heroImg from "@/assets/hero-airfryer-new.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#22c55e]/10 pt-8 pb-0 md:pt-16">
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
          <Flame className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> +3.428 PESSOAS TRANSFORMADAS COM ESSAS RECEITAS
        </div>
        
        <h1 className="text-[20px] md:text-4xl font-black text-green-title leading-snug md:leading-[1.15] mb-4 max-w-[370px] md:max-w-5xl md:px-4 tracking-tight">
          <span className="text-cta">+200 refeições práticas prontas em até 20 minutos na sua airfryer</span> — para você nunca mais chegar em casa sem saber o que fazer
        </h1>

        <p className="text-green-title/90 text-[13px] md:text-xl font-medium mb-6 max-w-4xl mx-auto px-1 md:px-12 leading-tight md:leading-relaxed">
          Receitas completas, saborosas, saudáveis e práticas na sua airfryer. Uma opção diferente para cada dia do ano. Para você nunca mais precisar repetir pratos, improvisar na cozinha ou pedir delivery.
        </p>

        <div className="w-full max-w-[320px] md:max-w-[380px] mx-auto mb-6 rounded-2xl shadow-2xl relative border-4 border-cta overflow-hidden">
          <img
            src={heroImg}
            alt="+200 receitas deliciosas e saudáveis na airfryer"
            className="w-full h-auto block"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Card promocional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[360px] mx-auto mb-5 rounded-2xl bg-white border-2 border-cta shadow-xl p-5 pt-6 text-center relative overflow-hidden"
        >
          {/* Selo de oferta no meio da borda superior */}
          <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-cta text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap border-2 border-cta z-10">
            ⚡ Oferta Relâmpago
          </div>

          <p className="text-[16px] font-bold text-gray-700 mt-2 mb-1">
            Apenas hoje de <span className="text-red-600 line-through font-black">R$ 97,00</span>
          </p>
          <p className="text-[15px] font-bold text-gray-700 flex items-baseline justify-center gap-1.5 flex-wrap">
            por apenas
            <span className="text-green-600 font-black text-4xl leading-none">R$ 9,90</span>
          </p>

          <div className="mt-2 inline-flex items-center gap-1 bg-green-50 text-green-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-green-200">
            <span className="font-black">90%</span> OFF · Economize R$ 87,10
          </div>
        </motion.div>

        <div className="flex flex-col items-center w-full">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-[13px] md:text-xl px-10 py-5 rounded-full text-center transition-all uppercase tracking-wide mb-2 whitespace-nowrap"
          >
            QUERO MINHAS +200 RECEITAS AGORA! 🔥
          </motion.a>
          <p className="text-[11px] md:text-sm text-green-title font-semibold mb-4 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Garantia de 7 dias · Acesso imediato por e-mail
          </p>

          <div className="flex flex-col items-center gap-1 mb-8">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase tracking-tighter">4.9/5 · +2.300 avaliações</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
