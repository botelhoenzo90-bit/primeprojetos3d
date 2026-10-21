import { motion } from "framer-motion";
import { Star, ShieldCheck, Flame, CarFront, House, KeyRound, ToyBrick } from "lucide-react";

const categories = [
  { icon: CarFront, title: "Veículos", color: "bg-blue-50" },
  { icon: House, title: "Decoração", color: "bg-amber-50" },
  { icon: KeyRound, title: "Chaveiros", color: "bg-violet-50" },
  { icon: ToyBrick, title: "Articulados", color: "bg-emerald-50" },
];

const HeroSection = () => (
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
      <div className="w-full max-w-[520px] mx-auto mb-5 rounded-3xl border border-blue-100 bg-white p-4 md:p-5 shadow-xl">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((item) => {
            const Icon = item.icon;
            return <div key={item.title} className={item.color + " rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center gap-2 min-h-28"}><Icon className="w-9 h-9 md:w-11 md:h-11 text-blue-800" strokeWidth={1.7} /><span className="font-extrabold text-sm md:text-base text-[#17324D]">{item.title}</span></div>;
          })}
        </div>
        <p className="text-center text-xs md:text-sm text-slate-500 font-semibold mt-3">Uma amostra das categorias que você pode explorar</p>
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
        <p className="text-xs md:text-sm text-[#17324D] font-semibold mb-4 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-600" /> Garantia de 7 dias • Acesso após confirmação</p>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#D4A900]" />)}</div>
          <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Explore milhares de possibilidades em 3D</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
