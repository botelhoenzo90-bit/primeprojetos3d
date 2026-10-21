import { motion } from "framer-motion";
import { Search, FolderOpen, Download, Layers3, Box, MonitorSmartphone, CheckCircle2 } from "lucide-react";

const categories = ["Decoração", "Veículos", "Articulados", "Chaveiros", "Utilidades", "Colecionáveis"];

const NutriSection = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100">POR DENTRO DA PLATAFORMA</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">Encontre seu próximo projeto <span className="text-blue-700">em poucos cliques.</span></h2>
        <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto">Uma experiência digital pensada para você explorar categorias, localizar modelos e organizar suas próximas impressões.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto rounded-3xl border border-blue-100 bg-[#F4F8FC] p-3 md:p-6 shadow-2xl">
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#17324D] text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-300" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-2 text-xs md:text-sm font-bold">Biblioteca STL • Painel de modelos</span>
          </div>
          <div className="grid md:grid-cols-[210px_1fr] min-h-[320px]">
            <aside className="p-4 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Categorias</p>
              {categories.map((category) => <div key={category} className="flex items-center gap-2 rounded-lg px-3 py-2 mb-1 text-sm font-semibold text-slate-700"><FolderOpen className="w-4 h-4 text-blue-600" />{category}</div>)}
            </aside>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-slate-400 text-sm mb-5"><Search className="w-4 h-4" /> Encontre modelos para seu próximo projeto...</div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {[1,2,3,4,5,6].map((item) => <div key={item} className="rounded-xl border border-slate-200 p-3 bg-white"><div className="aspect-square rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center"><Box className="w-10 h-10 md:w-12 md:h-12 text-blue-500" /></div><div className="flex items-center justify-between gap-1 mt-3"><span className="text-xs md:text-sm font-bold text-slate-700">Modelo STL {String(item).padStart(2, "0")}</span><Layers3 className="w-4 h-4 text-blue-600" /></div><div className="flex items-center gap-1 mt-2 text-[10px] md:text-xs font-semibold text-green-700"><CheckCircle2 className="w-3.5 h-3.5" /> Prévia do catálogo</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-7">
        <div className="rounded-2xl bg-blue-50 p-5 text-center"><Search className="w-7 h-7 text-blue-700 mx-auto mb-2" /><h3 className="font-extrabold text-[#17324D]">Explore</h3><p className="text-sm text-slate-600">Navegue por categorias de modelos.</p></div>
        <div className="rounded-2xl bg-blue-50 p-5 text-center"><Download className="w-7 h-7 text-blue-700 mx-auto mb-2" /><h3 className="font-extrabold text-[#17324D]">Acesse</h3><p className="text-sm text-slate-600">Siga as instruções de acesso da plataforma.</p></div>
        <div className="rounded-2xl bg-blue-50 p-5 text-center"><MonitorSmartphone className="w-7 h-7 text-blue-700 mx-auto mb-2" /><h3 className="font-extrabold text-[#17324D]">Use onde preferir</h3><p className="text-sm text-slate-600">Consulte no dispositivo compatível com o acesso.</p></div>
      </div>
    </div>
  </section>
);

export default NutriSection;
