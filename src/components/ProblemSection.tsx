import { motion } from "framer-motion";
import { X, ArrowDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Perder tempo procurando modelos em sites e grupos diferentes",
    "Não encontrar uma ideia interessante para a próxima impressão",
    "Comprar arquivos avulsos sem construir uma coleção variada",
    "Deixar a impressora parada por falta de inspiração",
  ];
  return (
    <section className="py-10 md:py-14 bg-cream border-b border-red-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-6"><h2 className="text-2xl md:text-5xl font-black text-red-500 leading-tight uppercase tracking-tight">Sua impressão poderia render muito mais?</h2><p className="text-slate-600 mt-3 text-base md:text-lg">Não deixe a busca por arquivos atrapalhar sua criatividade.</p></div>
        <div className="space-y-3">
          {problems.map((problem, index) => <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl border border-red-100 shadow-sm"><div className="bg-red-500 rounded-full p-1 flex-shrink-0 mt-0.5"><X className="w-4 h-4 text-white" /></div><p className="text-green-title font-bold text-base md:text-lg leading-snug">{problem}</p></motion.div>)}
        </div>
        <div className="flex flex-col items-center mt-7"><p className="text-green-title font-black text-lg md:text-xl mb-2 text-center">Descubra uma forma mais prática de encontrar ideias 👇</p><ArrowDown className="w-8 h-8 text-cta animate-bounce" /></div>
      </div>
    </section>
  );
};

export default ProblemSection;
