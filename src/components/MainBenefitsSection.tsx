import { motion } from "framer-motion";
import { Zap, Layers, Search, Clock, Flame, Sparkles, Printer, PackageCheck } from "lucide-react";

const benefits = [
  { icon: Layers, text: "+100 mil modelos STL para explorar por categoria" },
  { icon: Search, text: "Descubra ideias para novos produtos" },
  { icon: Zap, text: "Menos tempo procurando STL, mais tempo testando" },
  { icon: Clock, text: "Escolha modelos para testar em pequenas quantidades" },
  { icon: Flame, text: "Categorias de decoração, utilidades e colecionáveis" },
  { icon: Sparkles, text: "Inspiração para ampliar seu catálogo de produtos" },
  { icon: Printer, text: "Arquivos digitais para preparar no seu fatiador" },
  { icon: PackageCheck, text: "Biblioteca principal + 19 coleções bônus no Premium" },
];

const MainBenefitsSection = () => (
  <section className="py-10 md:py-14 bg-cream">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-7">
        <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-5 px-4 py-1.5 rounded-full border border-[#FFD700]"><Zap className="w-4 h-4 text-[#FF4500]" /> SUA PRÓXIMA IDEIA COMEÇA AQUI</span>
        <h2 className="text-[28px] md:text-5xl font-black text-green-title leading-tight mb-3 max-w-4xl mx-auto">O problema não é ter poucos arquivos. <span className="text-cta">É encontrar boas ideias para testar.</span></h2>
        <p className="text-green-title text-base md:text-xl font-medium max-w-2xl mx-auto">Encontre categorias, escolha modelos que façam sentido para sua estrutura e comece a testar novas possibilidades sem depender de buscas intermináveis.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-100 shadow-sm"><div className="flex-shrink-0 w-10 h-10 rounded-full bg-cta/15 flex items-center justify-center"><Icon className="w-5 h-5 text-cta" /></div><h3 className="text-base md:text-lg font-bold text-green-title leading-tight">{benefit.text}</h3></motion.div>;
        })}
      </div>
      <div className="text-center mt-8 flex flex-col items-center">
        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-xl px-10 py-5 rounded-full text-center shadow-lg transition-all uppercase tracking-wide mb-2">QUERO ENCONTRAR NOVAS IDEIAS</motion.a>
        <p className="text-xs md:text-sm text-green-title font-semibold">🛡️ Garantia de 7 dias · Acesso digital</p>
      </div>
    </div>
  </section>
);

export default MainBenefitsSection;
