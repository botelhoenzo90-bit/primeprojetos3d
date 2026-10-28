import { motion } from "framer-motion";
import { Lightbulb, Search, Printer, FolderKanban, Timer, PackageCheck, Layers3 } from "lucide-react";

const benefits = [
  { icon: Search, text: "Explore mais de 100 mil modelos 3D organizados por categoria." },
  { icon: Lightbulb, text: "Descubra novas ideias para ampliar seu catálogo de produtos." },
  { icon: Layers3, text: "Encontre opções de decoração, utilidades, veículos e colecionáveis." },
  { icon: Printer, text: "Escolha modelos que façam sentido para sua impressora e seu público." },
  { icon: Timer, text: "Passe menos tempo procurando arquivos em diferentes sites." },
  { icon: PackageCheck, text: "Use cada modelo como ponto de partida para planejar seus próximos testes." },
];

const MainBenefitsSection = () => (
  <section className="py-12 md:py-16 bg-cream">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-9 md:mb-12">
        <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-[#FFD700]">
          <FolderKanban className="w-4 h-4" /> MAIS POSSIBILIDADES PARA SUA IMPRESSORA
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-green-title leading-tight max-w-4xl mx-auto">
          Transforme sua impressora em uma <span className="text-cta">máquina de ideias.</span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-4">Encontre inspiração, explore novas categorias e planeje seus próximos projetos em 3D.</p>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col gap-3 md:gap-4">
        {benefits.map(({ icon: Icon, text }, index) => (
          <motion.div key={text} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center gap-3 md:gap-4 rounded-xl border border-blue-100 bg-white/85 px-4 py-3 md:px-5 md:py-3.5 shadow-sm text-left">
            <span className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[#2677C9]">
              <Icon className="w-4.5 h-4.5 md:w-5 md:h-5" strokeWidth={2.2} />
            </span>
            <p className="text-sm md:text-base font-semibold text-[#17324D] leading-snug">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MainBenefitsSection;
