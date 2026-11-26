import SectionCTA from "@/components/SectionCTA";
import WistiaVideo from "@/components/WistiaVideo";
import { motion } from "framer-motion";
import { FolderOpen, Users, ShieldCheck, PlayCircle } from "lucide-react";

const features = [
  { icon: FolderOpen, title: "TUDO SEPARADO POR CATEGORIA", desc: "Decoração, utilidades, brinquedos, datas comemorativas e muito mais, organizados para você achar em segundos." },
  { icon: Users, title: "COMUNIDADE GRATUITA EXCLUSIVA", desc: "Tire dúvidas, troque ideias e compartilhe suas criações com outros apaixonados por impressão 3D." },
  { icon: ShieldCheck, title: "MODELOS PRONTOS PARA VENDER", desc: "Peças selecionadas com potencial de venda para você imprimir, testar e lucrar sem começar do zero." },
];

const NutriSection = () => (
  <section className="py-12 md:py-16 bg-[#EFF7FF]">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-7">
        <span className="inline-flex items-center gap-2 bg-white text-blue-800 text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100">POR DENTRO DA BIBLIOTECA</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">Veja como é a biblioteca <span className="text-blue-700">por dentro!</span></h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Assista ao vídeo e descubra como é fácil navegar pelas categorias, encontrar o modelo ideal e baixar o arquivo STL pronto para imprimir em poucos cliques.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-8">
        <p className="mb-3 flex items-center justify-center gap-2 text-center text-sm md:text-base font-extrabold text-green-title"><PlayCircle className="h-5 w-5 shrink-0 text-heading-highlight" /> Clique no vídeo e conheça a biblioteca por dentro</p>
        <div className="w-full rounded-2xl md:rounded-3xl border border-blue-200 bg-[#10243A] shadow-2xl overflow-hidden">
          <WistiaVideo mediaId="m2f6qcvqu7" aspect={1.8823529411764706} />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => { const Icon = feature.icon; return (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="flex items-start gap-3 border-t-2 border-blue-200 pt-5">
            <div className="rounded-xl bg-white p-3 shadow-sm"><Icon className="w-5 h-5 text-blue-700" /></div>
            <div><h3 className="font-black text-sm md:text-base text-[#17324D] tracking-wide">{feature.title}</h3><p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">{feature.desc}</p></div>
          </motion.div>
        ); })}
      </div>
      <SectionCTA label="GARANTIR ACESSO À BIBLIOTECA" />
    </div>
  </section>
);

export default NutriSection;
