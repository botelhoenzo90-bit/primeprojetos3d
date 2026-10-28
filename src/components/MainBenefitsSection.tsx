import { motion } from "framer-motion";
import { Lightbulb, Search, Printer, FolderKanban, Timer, PackageCheck } from "lucide-react";

const benefits = [
  { icon: Lightbulb, title: "Mais ideias para imprimir", desc: "Explore uma grande variedade de modelos para encontrar seu próximo projeto." },
  { icon: Search, title: "Novos nichos para explorar", desc: "Descubra estilos e categorias que podem inspirar produtos diferentes." },
  { icon: Printer, title: "Projetos para sua impressora", desc: "Escolha arquivos considerando seu equipamento e materiais disponíveis." },
  { icon: FolderKanban, title: "Tudo mais organizado", desc: "Navegue por categorias e encontre opções com mais praticidade." },
  { icon: Timer, title: "Menos tempo procurando", desc: "Tenha mais referências reunidas em uma biblioteca digital." },
  { icon: PackageCheck, title: "Amplie seu catálogo", desc: "Use novas ideias para planejar testes e desenvolver sua linha de produtos." },
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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 md:gap-x-8 md:gap-y-9 max-w-5xl mx-auto">
        {benefits.map(({ icon: Icon, title, desc }, index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="flex flex-col items-center text-center px-2 md:px-5">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-3">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-cta" strokeWidth={2.2} />
            </div>
            <h3 className="text-sm md:text-lg font-black text-green-title leading-snug mb-2">{title}</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xs">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MainBenefitsSection;
