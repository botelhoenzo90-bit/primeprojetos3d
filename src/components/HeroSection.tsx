import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF7FF] via-white to-[#F6FAFF] py-8 md:py-14">
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm mb-5">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span className="text-xs md:text-sm font-black uppercase tracking-wide text-[#17324D]">Biblioteca digital com +100 mil modelos 3D</span>
        </div>

        <h1 className="text-[30px] md:text-6xl font-black text-[#17324D] leading-[1.04] mb-5 max-w-4xl tracking-tight">
          VOCÊ NÃO COMPROU UMA IMPRESSORA 3D PARA DEIXÁ-LA <span className="text-blue-700">PARADA.</span>
        </h1>

        <div className="w-full max-w-4xl mb-6">
          <div className="aspect-video w-full rounded-2xl md:rounded-3xl border border-blue-200 bg-[#10243A] shadow-2xl overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#17324D] via-[#10243A] to-black" />
            <div className="relative z-10 px-6 text-center">
              <div className="mx-auto mb-3 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/70 flex items-center justify-center">
                <div className="ml-1 w-0 h-0 border-y-[10px] md:border-y-[12px] border-y-transparent border-l-[15px] md:border-l-[18px] border-l-white" />
              </div>
              <p className="text-white font-black text-sm md:text-lg uppercase tracking-wider">Espaço para sua VSL</p>
              <p className="text-blue-100/80 text-xs md:text-sm mt-1">Vídeo de apresentação da biblioteca</p>
            </div>
          </div>
        </div>

        <p className="text-[#334155] text-base md:text-xl font-medium mb-3 max-w-3xl mx-auto leading-relaxed">
          Acesse uma biblioteca organizada com modelos selecionados e diferentes categorias para descobrir novas ideias, testar produtos e ampliar as possibilidades da sua impressão 3D.
        </p>
        <p className="text-blue-800 font-black text-base md:text-lg mb-5">Menos tempo procurando STL. Mais tempo testando produtos.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-left max-w-3xl w-full mb-7">
          {[
            "Modelos selecionados",
            "Diversas categorias para explorar",
            "Biblioteca organizada",
            "Novas ideias de produtos",
            "Acesso rápido aos arquivos",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-[#17324D] font-bold text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-8 md:px-10 py-5 rounded-full text-center shadow-lg transition-all uppercase tracking-wide mb-3">
          QUERO DESCOBRIR O QUE IMPRIMIR <span aria-hidden="true">↓</span>
        </motion.a>
        <p className="text-[10px] md:text-xs text-[#17324D] font-bold tracking-wide flex flex-wrap justify-center items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-600" /> ACESSO DIGITAL <span>•</span> LIBERAÇÃO RÁPIDA <span>•</span> BIBLIOTECA ORGANIZADA
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
