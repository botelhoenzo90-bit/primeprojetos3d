import { motion } from "framer-motion";
import { Star, ShieldCheck, Flame } from "lucide-react";
import heroImg from "@/assets/hero-airfryer-new.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#EFF7FF] pt-8 pb-8 md:pt-14">
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 bg-[#DCEBFF] text-[#17324D] text-[10px] md:text-sm font-black uppercase tracking-wider mb-5 px-4 py-2 rounded-full shadow-sm border border-[#BFDBFE]">
          <Flame className="w-4 h-4 text-[#FF4500]" /> +100 MIL MODELOS STL • ACESSO DIGITAL
        </div>
        <h1 className="text-[30px] md:text-6xl font-black text-[#17324D] leading-[1.05] mb-4 max-w-4xl tracking-tight">
          SUA PRÓXIMA GRANDE IMPRESSÃO <span className="text-cta">COMEÇA AQUI.</span>
        </h1>
        <p className="text-[#334155] text-base md:text-2xl font-semibold mb-6 max-w-3xl mx-auto leading-snug">
          Tenha mais de 100 mil modelos STL para explorar — sem perder horas procurando o que imprimir.
        </p>
        <div className="w-full max-w-[320px] md:max-w-[390px] mx-auto mb-5 rounded-2xl shadow-2xl relative border-4 border-cta overflow-hidden">
          <img src={heroImg} alt="Biblioteca digital com modelos STL para impressão 3D" className="w-full h-auto block" loading="eager" decoding="async" />
        </div>
        <div className="w-full max-w-[360px] mx-auto mb-5 rounded-2xl bg-white border-2 border-cta shadow-xl p-5 text-center">
          <p className="text-xs md:text-sm font-black text-[#17324D] uppercase tracking-wider mb-2">Oferta especial • último dia</p>
          <p className="text-sm font-bold text-gray-700">Acesso digital a partir de</p>
          <p className="text-4xl md:text-5xl font-black text-blue-700 leading-tight">R$ 9,90</p>
          <p className="text-xs font-bold text-gray-600 mt-1">Pagamento único • sem mensalidade</p>
          <p className="text-xs text-red-600 font-extrabold mt-3">PROMOÇÃO VÁLIDA ATÉ 21/10/2026</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-xl px-8 md:px-10 py-5 rounded-full text-center transition-all uppercase tracking-wide mb-2">
            QUERO ACESSAR OS MODELOS STL
          </motion.a>
          <p className="text-xs md:text-sm text-[#17324D] font-semibold mb-4 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-green-600" /> Garantia de 7 dias • Acesso após confirmação
          </p>
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#D4A900]" />)}</div>
            <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Explore milhares de possibilidades em 3D</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
