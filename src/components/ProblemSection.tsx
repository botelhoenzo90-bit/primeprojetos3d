import { motion } from "framer-motion";
import { Search, Clock3, Wallet, Printer, CheckCircle2, Layers3, Target, Zap } from "lucide-react";

const pairs = [
  { painIcon: Search, solutionIcon: Layers3, pain: "Perde tempo procurando arquivos espalhados pela internet.", solution: "Tenha uma biblioteca organizada para explorar muitas ideias em um só lugar." },
  { painIcon: Clock3, solutionIcon: Zap, pain: "Sua impressora fica parada porque falta inspiração para o próximo projeto.", solution: "Descubra novas opções de modelos e planeje melhor suas próximas impressões." },
  { painIcon: Wallet, solutionIcon: Target, pain: "Não sabe quais tipos de peças pode testar para vender.", solution: "Explore nichos variados e avalie quais produtos fazem sentido para seu público." },
  { painIcon: Printer, solutionIcon: CheckCircle2, pain: "Criar modelos do zero exige tempo e habilidades de modelagem.", solution: "Comece por arquivos prontos para preparar no seu fatiador, ajustando conforme sua impressora." },
];

const ProblemSection = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-9">
        <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-orange-700 mb-4">CHEGA DE PERDER TEMPO</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight">4 dificuldades que travam suas impressões — <span className="text-blue-700">e como virar esse jogo.</span></h2>
        <p className="text-slate-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">Menos busca sem fim. Mais opções para testar, criar e descobrir seu próximo projeto.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {pairs.map((pair, i) => {
          const PainIcon = pair.painIcon;
          const SolutionIcon = pair.solutionIcon;
          return <motion.article key={pair.pain} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} whileHover={{ y: -3 }} className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-md">
            <div className="flex items-start gap-3 rounded-2xl bg-rose-50 p-4 mb-3"><div className="rounded-xl bg-rose-100 p-2 shrink-0"><PainIcon className="w-5 h-5 text-rose-600" /></div><div><p className="text-[10px] font-black tracking-widest text-rose-600 uppercase mb-1">A DOR</p><p className="font-bold leading-snug text-slate-800">{pair.pain}</p></div></div>
            <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4"><div className="rounded-xl bg-emerald-100 p-2 shrink-0"><SolutionIcon className="w-5 h-5 text-emerald-700" /></div><div><p className="text-[10px] font-black tracking-widest text-emerald-700 uppercase mb-1">A SOLUÇÃO</p><p className="font-semibold leading-snug text-slate-700">{pair.solution}</p></div></div>
          </motion.article>;
        })}
      </div>
      <div className="text-center mt-8"><a href="#oferta" className="inline-flex items-center justify-center rounded-full bg-[#FF4500] px-8 py-4 text-sm md:text-lg font-black text-white shadow-lg transition hover:bg-[#E63E00]">QUERO MAIS IDEIAS PARA IMPRIMIR</a></div>
    </div>
  </section>
);
export default ProblemSection;
