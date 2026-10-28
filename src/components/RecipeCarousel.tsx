import { motion } from "framer-motion";
import { CarFront, House, KeyRound, ToyBrick, Gamepad2, Lamp, Sparkles, Box } from "lucide-react";

const models = [
  { icon: CarFront, title: "Veículos", desc: "Carros, motos e muito mais", color: "from-blue-100 to-sky-50" },
  { icon: House, title: "Decoração", desc: "Detalhes para seus espaços", color: "from-orange-100 to-amber-50" },
  { icon: KeyRound, title: "Chaveiros", desc: "Peças para personalizar", color: "from-violet-100 to-purple-50" },
  { icon: ToyBrick, title: "Articulados", desc: "Modelos com movimento", color: "from-emerald-100 to-green-50" },
  { icon: Gamepad2, title: "Colecionáveis", desc: "Para montar sua coleção", color: "from-rose-100 to-pink-50" },
  { icon: Lamp, title: "Utilidades", desc: "Ideias úteis para o dia a dia", color: "from-yellow-100 to-amber-50" },
  { icon: Sparkles, title: "Presentes criativos", desc: "Projetos com personalidade", color: "from-cyan-100 to-blue-50" },
  { icon: Box, title: "Novas ideias", desc: "Descubra o que imprimir", color: "from-slate-100 to-gray-50" },
];
const doubled = [...models, ...models];

const RecipeCarousel = () => (
  <section className="py-8 md:py-10 bg-[#EFF7FF] overflow-hidden">
    <div className="container mx-auto px-4 mb-5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full border border-[#FFD700]">IDEIAS PARA SUA PRÓXIMA IMPRESSÃO</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">O que sua impressora pode <span className="text-blue-700">criar a partir de hoje?</span></h2>
        <p className="text-[#334155] text-base md:text-lg font-medium max-w-2xl mx-auto">De utilidades a peças decorativas e colecionáveis: explore possibilidades para escolher o próximo projeto.</p>
      </motion.div>
    </div>
    <div className="relative">
      <div className="flex animate-marquee" style={{ width: `${doubled.length * 240}px` }}>
        {doubled.map((model, i) => {
          const Icon = model.icon;
          return <div key={i} className="flex-shrink-0 w-56 mx-2"><div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-blue-100"><div className={`h-44 bg-gradient-to-br ${model.color} flex items-center justify-center`}><div className="w-24 h-24 rounded-3xl bg-white/80 shadow-md flex items-center justify-center"><Icon className="w-14 h-14 text-blue-700" strokeWidth={1.6} /></div></div><div className="p-4 text-center"><p className="font-extrabold text-[#17324D] text-base">{model.title}</p><p className="text-slate-500 text-xs mt-1">{model.desc}</p></div></div></div>;
        })}
      </div>
    </div>
  </section>
);

export default RecipeCarousel;
