import { motion } from "framer-motion";
import { Star, ShieldCheck, Flame, Download, CheckCircle2, TrendingUp, Zap, CarFront, House, KeyRound, ToyBrick } from "lucide-react";

const categories = [
  { icon: CarFront, title: "Veículos", color: "bg-blue-50" },
  { icon: House, title: "Decoração", color: "bg-amber-50" },
  { icon: KeyRound, title: "Chaveiros", color: "bg-violet-50" },
  { icon: ToyBrick, title: "Articulados", color: "bg-emerald-50" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF7FF] via-white to-[#F6FAFF] pt-8 pb-10 md:pt-12 md:pb-14">
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-sm mb-4">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span className="text-sm md:text-base font-black text-[#17324D]">IDEIAS PARA SUA PRÓXIMA IMPRESSÃO</span>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-[#DCEBFF] text-[#17324D] text-[10px] md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-[#BFDBFE]">
          <Flame className="w-4 h-4 text-[#FF4500]" /> BIBLIOTECA DIGITAL • +100 MIL MODELOS 3D
        </div>
        <h1 className="text-[30px] md:text-6xl font-black text-[#17324D] leading-[1.04] mb-4 max-w-5xl tracking-tight">
          VOCÊ NÃO COMPROU UMA IMPRESSORA 3D PARA DEIXÁ-LA <span className="text-blue-700">PARADA.</span>
        </h1>
        <p className="text-[#334155] text-base md:text-xl font-semibold mb-6 max-w-3xl mx-auto leading-snug">
          Descubra novas ideias de produtos para imprimir e vender. Explore uma biblioteca organizada por categorias, encontre modelos para testar e passe menos tempo procurando arquivos — e mais tempo produzindo.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-5xl mb-6 text-left">
          {[
            { icon: Download, text: "Encontre ideias sem começar do zero." },
            { icon: CheckCircle2, text: "Categorias organizadas para explorar." },
            { icon: TrendingUp, text: "Escolha modelos e avalie o que faz sentido para seu público." },
            { icon: Zap, text: "Acesso digital após a confirmação." },
          ].map((item, i) => {
            const Icon = item.icon;
            return <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50"><Icon className="h-5 w-5 text-blue-700" /></div>
              <p className="text-sm font-bold leading-snug text-[#17324D]">{item.text}</p>
            </motion.div>;
          })}
        </div>
        <div className="w-full max-w-3xl mx-auto mb-6 rounded-3xl border border-blue-100 bg-white p-4 md:p-6 shadow-xl">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="text-left"><p className="text-xs uppercase tracking-wider font-black text-blue-700">Biblioteca de projetos</p><h2 className="text-lg md:text-2xl font-black text-[#17324D]">Menos tempo procurando STL. Mais tempo testando produtos.</h2></div>
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-green-50 text-green-700 px-3 py-2 text-xs font-extrabold"><ShieldCheck className="w-4 h-4" /> Acesso digital</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className={item.color + " rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center gap-2 min-h-28 border border-white"}>
                <Icon className="w-9 h-9 md:w-11 md:h-11 text-blue-800" strokeWidth={1.7} />
                <span className="font-extrabold text-sm md:text-base text-[#17324D]">{item.title}</span>
              </div>;
            })}
          </div>
          <p className="text-center text-xs md:text-sm text-slate-500 font-semibold mt-3">Exemplos de categorias para inspirar seu próximo projeto</p>
        </div>
        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-8 md:px-10 py-5 rounded-full text-center shadow-lg transition-all uppercase tracking-wide mb-2">
          QUERO DESCOBRIR O QUE IMPRIMIR
        </motion.a>
        <p className="text-xs md:text-sm text-[#17324D] font-semibold flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-600" /> ACESSO DIGITAL • LIBERAÇÃO RÁPIDA • BIBLIOTECA ORGANIZADA</p>
      </div>
    </div>
  </section>
);
export default HeroSection;
