import { motion } from "framer-motion";
import { TrendingUp, Search, ShoppingBag } from "lucide-react";

const proofs = [
  { image: "USQ9ivu.png", alt: "Pesquisa de mercado e oportunidades para impressão 3D" },
  { image: "k8NGhmh.png", alt: "Análise de produtos e procura em marketplaces" },
  { image: "proof_1.webp", alt: "Exemplo de pesquisa de mercado" },
  { image: "proof_2.webp", alt: "Exemplo adicional de pesquisa de mercado" },
];

const ResearchMarketSection = () => (
  <section className="py-12 md:py-16 bg-white overflow-hidden">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-xs md:text-sm font-black tracking-wider text-blue-800 uppercase"><TrendingUp className="w-4 h-4" /> PESQUISA DE MERCADO</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-[#17324D]">Escolha seus próximos produtos com <span className="text-blue-700">mais estratégia.</span></h2>
        <p className="mt-3 max-w-3xl mx-auto text-slate-600 text-base md:text-lg">Veja exemplos de pesquisas e referências para identificar oportunidades, observar tendências e planejar o que produzir.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
        {proofs.map((proof, i) => (
          <motion.figure key={proof.image} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
            <img src={`/imagens/pesquisa-mercado/${proof.image}`} alt={proof.alt} loading="lazy" decoding="async" className="block w-full h-auto object-contain" />
          </motion.figure>
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-semibold text-slate-600">
        <span className="flex items-center gap-2"><Search className="w-4 h-4 text-blue-700" /> Pesquise antes de produzir</span>
        <span className="hidden sm:block text-slate-300">•</span>
        <span className="flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-blue-700" /> Observe o que o mercado procura</span>
      </div>
    </div>
  </section>
);
export default ResearchMarketSection;
