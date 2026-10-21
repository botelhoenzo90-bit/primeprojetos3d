import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, FolderOpen, Download, Layers3, Box, MonitorSmartphone, CheckCircle2, CarFront, House, KeyRound, ToyBrick, Gamepad2, Lamp } from "lucide-react";

const catalog = [
  { id: 1, title: "Carro esportivo", category: "Veículos", icon: CarFront },
  { id: 2, title: "Moto clássica", category: "Veículos", icon: CarFront },
  { id: 3, title: "Vaso geométrico", category: "Decoração", icon: House },
  { id: 4, title: "Organizador de mesa", category: "Utilidades", icon: Lamp },
  { id: 5, title: "Chaveiro personalizado", category: "Chaveiros", icon: KeyRound },
  { id: 6, title: "Figura articulada", category: "Articulados", icon: ToyBrick },
  { id: 7, title: "Mini personagem", category: "Colecionáveis", icon: Gamepad2 },
  { id: 8, title: "Suporte multiuso", category: "Utilidades", icon: Box },
  { id: 9, title: "Decoração moderna", category: "Decoração", icon: House },
];
const categories = ["Todos", "Veículos", "Decoração", "Articulados", "Chaveiros", "Utilidades", "Colecionáveis"];

const NutriSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = useMemo(() => catalog.filter(item => (activeCategory === "Todos" || item.category === activeCategory) && item.title.toLowerCase().includes(searchTerm.toLowerCase())), [activeCategory, searchTerm]);
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100">POR DENTRO DA PLATAFORMA</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">Explore a biblioteca <span className="text-blue-700">na prática.</span></h2>
          <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto">Clique nas categorias ou pesquise para ver uma demonstração interativa de como os modelos podem ser organizados.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto rounded-3xl border border-blue-100 bg-[#F4F8FC] p-3 md:p-6 shadow-2xl">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#17324D] text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-300" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs md:text-sm font-bold">Demonstração visual • Biblioteca de Projetos 3D</span>
            </div>
            <div className="grid md:grid-cols-[210px_1fr]">
              <aside className="p-3 md:p-4 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200">
                <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Filtrar por categoria</p>
                {categories.map(category => <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`w-full flex items-center gap-2 rounded-xl px-3 py-2.5 mb-1 text-left text-sm font-bold transition ${activeCategory === category ? "bg-blue-700 text-white shadow" : "text-slate-700 hover:bg-blue-100"}`}><FolderOpen className="w-4 h-4 shrink-0" />{category}</button>)}
              </aside>
              <div className="p-4 md:p-6 min-w-0">
                <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-slate-500 text-sm mb-4 bg-white"><Search className="w-4 h-4 shrink-0" /><input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Buscar modelo..." className="w-full outline-none text-slate-800 placeholder:text-slate-400 bg-transparent" /></label>
                <div className="flex items-center justify-between gap-2 mb-4"><p className="font-extrabold text-[#17324D]">{activeCategory === "Todos" ? "Modelos em destaque" : activeCategory}</p><span className="text-xs font-bold text-slate-500">{filtered.length} exemplos</span></div>
                {filtered.length ? <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {filtered.map(item => { const Icon = item.icon; return <button type="button" key={item.id} onClick={() => setSearchTerm(item.title)} className="text-left rounded-xl border border-slate-200 p-3 bg-white hover:border-blue-400 hover:shadow-md transition group"><div className="aspect-square rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-sky-100 transition"><Icon className="w-12 h-12 md:w-14 md:h-14 text-blue-600" /></div><div className="flex items-center justify-between gap-1 mt-3"><span className="text-xs md:text-sm font-bold text-slate-700">{item.title}</span><Layers3 className="w-4 h-4 text-blue-600 shrink-0" /></div><div className="flex items-center gap-1 mt-2 text-[10px] md:text-xs font-semibold text-green-700"><CheckCircle2 className="w-3.5 h-3.5" /> Exemplo ilustrativo</div></button>; })}
                </div> : <div className="rounded-xl bg-slate-50 border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">Nenhum exemplo encontrado. Tente outro termo ou categoria.</div>}
                <p className="text-[10px] text-slate-400 mt-4">Prévia ilustrativa da interface; os cards não representam arquivos para download nesta demonstração.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-7">
          <div className="rounded-2xl bg-blue-50 p-5 text-center"><Search className="w-7 h-7 text-blue-700 mx-auto mb-2" /><h3 className="font-extrabold text-[#17324D]">Explore</h3><p className="text-sm text-slate-600">Filtre por categorias e encontre inspiração.</p></div>
          <div className="rounded-2xl bg-blue-50 p-5 text-center"><Download className="w-7 h-7 text-blue-700 mx-auto mb-2" /><h3 className="font-extrabold text-[#17324D]">Acesse</h3><p className="text-sm text-slate-600">Confira as instruções da plataforma após a compra.</p></div>
          <div className="rounded-2xl bg-blue-50 p-5 text-center"><MonitorSmartphone className="w-7 h-7 text-blue-700 mx-auto mb-2" /><h3 className="font-extrabold text-[#17324D]">Organize-se</h3><p className="text-sm text-slate-600">Explore os exemplos e planeje sua próxima impressão.</p></div>
        </div>
      </div>
    </section>
  );
};
export default NutriSection;
