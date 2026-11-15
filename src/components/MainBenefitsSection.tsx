import SectionCTA from "@/components/SectionCTA";
import { motion } from "framer-motion";
import { Lightbulb, Search, Printer, FolderKanban, Timer, Layers3 } from "lucide-react";

const benefits = [
  { icon: Search, text: "Mais de 100 mil modelos 3D. Tudo organizado por categoria." },
  { icon: Layers3, text: "Explore coleções de decoração, utilidades, presentes e temas sazonais." },
  { icon: Timer, text: "Chega de buscar em vários sites. Encontre tudo em um só lugar." },
  { icon: Printer, text: "Crie peças, personalize produtos e descubra novas oportunidades de venda." },
  { icon: Lightbulb, text: "Participe de uma comunidade gratuita. Tire dúvidas e troque ideias." },
];

const MainBenefitsSection = () => (
  <section className="py-12 md:py-16 bg-cream">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-6 md:mb-8">
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
          <motion.div key={text} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center gap-3 md:gap-4 rounded-xl border border-blue-100 bg-white/85 px-4 py-2.5 md:px-5 md:py-3 shadow-sm text-left">
            <span className="flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[#2677C9]">
              <Icon className="w-4.5 h-4.5 md:w-5 md:h-5" strokeWidth={2.2} />
            </span>
            <p className="text-[13px] md:text-sm font-bold text-[#17324D] leading-snug">{text}</p>
          </motion.div>
        ))}
      </div>
      <SectionCTA label="QUERO OS 100 MIL MODELOS" />
    </div>
  </section>
);

export default MainBenefitsSection;
