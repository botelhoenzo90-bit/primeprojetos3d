import { motion } from "framer-motion";
import { Star, ShieldCheck, Flame, Zap } from "lucide-react";
import heroImg from "@/assets/hero-airfryer-new.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#EFF7FF] pt-8 pb-0 md:pt-16">
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
          <Flame className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> +100 MIL MODELOS STL • BIBLIOTECA DIGITAL
        </div>
        
        <h1 className="text-[20px] md:text-4xl font-black text-green-title leading-snug md:leading-[1.15] mb-4 max-w-[370px] md:max-w-5xl md:px-4 tracking-tight">
          <span className="text-cta">Transforme sua impressora 3D em uma verdadeira central de possibilidades com +100 MIL arquivos STL</span> — e tenha sempre um novo projeto pronto para imprimir
        </h1>

        <p className="text-green-title/90 text-[13px] md:text-xl font-medium mb-6 max-w-4xl mx-auto px-1 md:px-12 leading-tight md:leading-relaxed">
          Chega de perder horas procurando modelos espalhados pela internet. Explore coleções organizadas por categorias, encontre sua próxima impressão e amplie as possibilidades de criar, colecionar e vender peças físicas.
        </p>

        <div className="w-full max-w-[320px] md:max-w-[380px] mx-auto mb-6 rounded-2xl shadow-2xl relative border-4 border-cta overflow-hidden">
          <img
            src={heroImg}
            alt="+100 mil arquivos STL para impressão 3D"
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
          className="w-full max-w-[360px] mx-auto mb-5 mt-3 rounded-2xl bg-white border-2 border-cta shadow-xl p-5 pt-7 text-center relative"
        >
          {/* Selo de oferta no meio da borda superior */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap z-20">
            ⚡ Oferta Especial
          </div>

          <p className="text-[18px] font-bold text-gray-700 mt-2 mb-1">
            De <span className="text-red-600 line-through font-black">R$ 97,00</span>
          </p>
          <p className="text-[17px] font-bold text-gray-700 flex items-baseline justify-center gap-1.5 flex-wrap">
            por apenas
            <span className="text-blue-700 font-black text-4xl leading-none">R$ 9,90</span>
          </p>

          <div className="mt-2 inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-blue-200">
            <span className="font-black">Acesso</span> digital · pagamento único
          </div>
        </motion.div>

        <div className="flex flex-col items-center w-full">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-[13px] md:text-xl px-10 py-5 rounded-full text-center transition-all uppercase tracking-wide mb-2 whitespace-nowrap"
          >
            QUERO ACESSAR A BIBLIOTECA STL AGORA!
          </motion.a>
          <p className="text-[11px] md:text-sm text-green-title font-semibold mb-4 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Garantia de 7 dias · Acesso digital após a confirmação
          </p>

          <div className="flex flex-col items-center gap-1 mb-8">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase tracking-tighter">Biblioteca STL · Modelos para diferentes projetos</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
