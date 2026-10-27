import { motion } from "framer-motion";
import { Search, Eye, Package, BarChart3, ArrowRight } from "lucide-react";

const researchSteps = [
  { icon: Eye, number: "01", title: "Observe", desc: "Veja como produtos semelhantes são apresentados em marketplaces." },
  { icon: Search, number: "02", title: "Compare", desc: "Observe fotos, variações, avaliações e dúvidas que aparecem nas ofertas." },
  { icon: Package, number: "03", title: "Escolha", desc: "Selecione um modelo que faça sentido para seu equipamento, tempo e custo." },
  { icon: BarChart3, number: "04", title: "Teste", desc: "Produza uma pequena quantidade e avalie a resposta do seu público antes de ampliar." },
];

const VSLSection = () => (
  <section className="py-12 md:py-16 bg-[#EFF7FF]">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <span className="inline-flex items-center gap-2 bg-white text-blue-800 text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100">PESQUISE ANTES DE PRODUZIR</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">Antes de imprimir, <span className="text-blue-700">observe o mercado.</span></h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Use referências públicas de marketplaces para investigar categorias, apresentações e ideias. Você não precisa começar cada pesquisa com uma tela em branco.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {researchSteps.map((step, i) => { const Icon = step.icon; return (
          <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="rounded-2xl bg-white border border-blue-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4"><span className="text-xs font-black tracking-widest text-blue-700">{step.number}</span><div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"><Icon className="w-5 h-5 text-blue-700" /></div></div>
            <h3 className="font-extrabold text-lg text-[#17324D] mb-2">{step.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
          </motion.article>
        ); })}
      </div>
      <p className="text-[11px] md:text-xs text-slate-500 text-center mt-5 max-w-3xl mx-auto">A pesquisa de mercado é uma referência, não uma garantia de vendas. Os resultados dependem de preço, qualidade, divulgação, execução, direitos de uso dos modelos e demanda.</p>
      <div className="text-center mt-7">
        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-lg px-8 py-4 rounded-full uppercase tracking-wide">QUERO ACESSAR A BIBLIOTECA <ArrowRight className="w-5 h-5" /></motion.a>
      </div>
    </div>
  </section>
);

export default VSLSection;
