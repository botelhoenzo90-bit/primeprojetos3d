import { motion } from "framer-motion";
import { Star, ShieldCheck, Layers3, FolderOpen, Lightbulb, Zap, Search, Printer } from "lucide-react";

const highlights = [
  { icon: Star, label: "Modelos selecionados" },
  { icon: Layers3, label: "Diversas categorias para explorar" },
  { icon: FolderOpen, label: "Biblioteca organizada" },
  { icon: Lightbulb, label: "Novas ideias de produtos" },
  { icon: Zap, label: "Acesso rápido aos arquivos" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF7FF] via-white to-[#F6FAFF] py-8 md:py-12">
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm mb-5">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span className="text-xs md:text-sm font-black uppercase tracking-wide text-[#17324D]">Biblioteca digital com +100 mil modelos 3D</span>
        </div>

        <h1 className="text-[30px] md:text-6xl font-black text-[#17324D] leading-[1.04] mb-5 max-w-4xl tracking-tight">
          VOCÊ NÃO COMPROU UMA IMPRESSORA 3D PARA DEIXÁ-LA <span className="text-[#E0A800]">PARADA.</span>
        </h1>

        <p className="text-[#334155] text-base md:text-xl font-medium mb-5 max-w-3xl mx-auto leading-relaxed">
          Acesse uma biblioteca organizada com modelos selecionados e diferentes categorias para descobrir novas ideias, testar produtos e ampliar as possibilidades da sua impressão 3D.
        </p>
        <p className="text-[#15803D] font-black text-base md:text-lg mb-5">Menos tempo procurando produtos. Mais tempo vendendo.</p>

        <div className="w-full max-w-[340px] mb-6">
          <div className="aspect-[9/16] w-full rounded-2xl md:rounded-3xl border border-blue-200 bg-[#10243A] shadow-2xl overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#17324D] via-[#10243A] to-black" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />
            <div className="relative z-10 px-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center shadow-lg shadow-blue-950/40">
                <div className="ml-1 w-0 h-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white" />
              </div>
              <p className="text-white font-black text-sm md:text-base uppercase tracking-wider">Sua VSL vertical</p>
              <p className="text-blue-100/80 text-xs mt-2">Espaço reservado para o vídeo em formato vertical (9:16)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 max-w-5xl w-full mb-7">
          {highlights.map(({ icon: Icon, label }, index) => (
            <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`min-h-[122px] flex flex-col items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-white px-3 py-4 shadow-sm hover:shadow-md hover:border-amber-200 transition-all ${index < 3 ? "sm:col-span-2" : "sm:col-span-2"} ${index === 3 ? "sm:col-start-2" : ""} ${index === 4 ? "sm:col-start-4" : ""}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-300 bg-amber-50 text-[#17324D] shadow-sm"><Icon className="w-5 h-5" /></span>
              <span className="text-[#17324D] font-extrabold text-xs md:text-sm leading-snug text-center">{label}</span>
            </motion.div>
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
