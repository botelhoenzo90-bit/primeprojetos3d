import { motion } from "framer-motion";
import { FolderOpen, Zap, ShieldCheck } from "lucide-react";

const features = [
  { icon: FolderOpen, title: "ORGANIZAÇÃO POR CATEGORIA", desc: "Encontre rapidamente o tipo de produto que deseja explorar." },
  { icon: Zap, title: "ACESSO AOS ARQUIVOS", desc: "Localize os modelos sem depender de pesquisas intermináveis em diferentes sites." },
  { icon: ShieldCheck, title: "MODELOS SELECIONADOS", desc: "Tenha novas opções para explorar sem começar cada pesquisa do zero." },
];

const NutriSection = () => (
  <section className="py-12 md:py-16 bg-[#EFF7FF]">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-7">
        <span className="inline-flex items-center gap-2 bg-white text-blue-800 text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100">BIBLIOTECA ORGANIZADA</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">Encontre seu próximo projeto em <span className="text-blue-700">menos tempo.</span></h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Explore diferentes categorias e encontre novas possibilidades para sua impressão 3D.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-8">
        <div className="aspect-video w-full rounded-2xl md:rounded-3xl border border-blue-200 bg-[#10243A] shadow-2xl overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#17324D] via-[#10243A] to-black" />
          <div className="relative z-10 px-6 text-center">
            <div className="mx-auto mb-3 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/70 flex items-center justify-center">
              <div className="ml-1 w-0 h-0 border-y-[10px] md:border-y-[12px] border-y-transparent border-l-[15px] md:border-l-[18px] border-l-white" />
            </div>
            <p className="text-white font-black text-sm md:text-lg uppercase tracking-wider">Espaço para sua VSL horizontal</p>
            <p className="text-blue-100/80 text-xs md:text-sm mt-1">Adicione aqui o vídeo de apresentação da biblioteca</p>
          </div>
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
    </div>
  </section>
);

export default NutriSection;
