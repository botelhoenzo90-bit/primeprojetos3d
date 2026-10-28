import { motion } from "framer-motion";
import { Search, Clock3, Layers3, Target, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Pare de procurar em todo lugar", desc: "Reúna sua busca em uma biblioteca organizada por categorias." },
  { icon: Layers3, number: "02", title: "Explore novas possibilidades", desc: "Compare ideias de decoração, utilidades, veículos e colecionáveis." },
  { icon: Target, number: "03", title: "Escolha com intenção", desc: "Considere seu equipamento, o tempo de impressão e o público que deseja atender." },
  { icon: Clock3, number: "04", title: "Teste antes de ampliar", desc: "Comece em pequena escala, observe a resposta e decida os próximos passos." },
];

const ProblemSection = () => (
  <section className="relative overflow-hidden py-12 md:py-16 bg-[#10243A]">
    <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="container mx-auto px-4 max-w-6xl relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-9">
        <span className="inline-flex rounded-full bg-[#FFD700] px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-wider text-[#10243A] mb-4">CHEGA DE PERDER TEMPO</span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Sua próxima impressão não precisa começar com <span className="text-[#FFD700]">uma busca interminável.</span></h2>
        <p className="text-blue-100 mt-4 text-base md:text-lg max-w-2xl leading-relaxed">Em vez de abrir dezenas de sites e salvar arquivos sem organização, tenha um ponto de partida para explorar categorias, comparar possibilidades e planejar seus testes.</p>
      </motion.div>
      <div className="max-w-4xl border-t border-white/15">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return <motion.div key={step.number} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="grid grid-cols-[42px_1fr] md:grid-cols-[56px_1fr_1.2fr] gap-3 md:gap-6 items-start py-5 border-b border-white/15">
            <span className="text-[#FFD700] font-black text-sm md:text-base pt-1">{step.number}</span>
            <div className="flex items-start gap-3">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] shrink-0 mt-0.5" />
              <h3 className="text-base md:text-lg font-extrabold text-white leading-snug">{step.title}</h3>
            </div>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed col-start-2 md:col-start-auto md:pl-2">{step.desc}</p>
          </motion.div>;
        })}
      </div>
      <div className="mt-8">
        <a href="#oferta" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4500] px-7 py-4 text-sm md:text-lg font-black text-white shadow-lg transition hover:bg-[#E63E00]">QUERO DESCOBRIR NOVAS IDEIAS <ArrowRight className="w-5 h-5" /></a>
      </div>
    </div>
  </section>
);

export default ProblemSection;
