import SectionCTA from "@/components/SectionCTA";
import { motion } from "framer-motion";
const proofs = [
  { image: "USQ9ivu.png", alt: "Pesquisa de mercado e oportunidades para impressão 3D" },
  { image: "k8NGhmh.png", alt: "Análise de produtos e procura em marketplaces" },
  { image: "proof_1.webp", alt: "Exemplo de pesquisa de mercado" },
  { image: "proof_2.webp", alt: "Exemplo adicional de pesquisa de mercado" },
];
const VSLSection = () => (
  <section className="py-12 md:py-16 bg-white overflow-hidden">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-10">
        <span className="inline-flex items-center gap-2 bg-[#FFD700] text-[#17324D] text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full">PESQUISA DE MERCADO</span>
        <h2 className="text-2xl md:text-4xl font-black text-[#17324D] leading-tight mb-4">ANTES DE IMPRIMIR, VEJA O QUE JÁ ESTÁ SENDO OFERTADO NO MERCADO</h2>
        <p className="text-slate-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">Use referências de marketplaces para observar categorias, produtos e apresentações que já existem no mercado e encontrar novas ideias para seus próprios testes.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-7">
        {proofs.map((proof, index) => (
          <motion.figure key={proof.image} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F4F8FC] shadow-lg">
            <img src={`/imagens/pesquisa-mercado/${proof.image}`} alt={proof.alt} loading="lazy" decoding="async" className="block w-full h-auto object-contain" />
          </motion.figure>
        ))}
      </div>
      <div className="text-center"><p className="inline-block rounded-lg bg-[#FFD700] px-4 py-2 text-lg md:text-2xl font-black text-[#17324D]">Pesquise. Escolha. Produza. Venda.</p></div>
      <SectionCTA label="QUERO TER ESSAS POSSIBILIDADES" />
    </div>
  </section>
);
export default VSLSection;
