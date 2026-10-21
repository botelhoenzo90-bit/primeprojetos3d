import { motion } from "framer-motion";
import { X, ArrowDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Perde horas procurando arquivos STL em sites e grupos",
    "Encontra modelos incompletos, mal organizados ou difíceis de localizar",
    "Gasta com arquivos avulsos sem montar uma biblioteca diversificada",
    "Fica sem ideias para novos produtos, presentes ou colecionáveis",
    "Deixa a impressora parada porque não sabe o que imprimir",
  ];

  return (
    <section className="py-8 md:py-12 bg-cream border-b border-red-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-5xl font-black text-red-500 leading-tight uppercase tracking-tighter whitespace-nowrap">
            ISSO ACONTECE COM VOCÊ?
          </h2>
        </div>
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl border border-red-100/50 shadow-sm"
            >
              <div className="bg-red-500 rounded-full p-1 flex-shrink-0 mt-0.5">
                <X className="w-4 h-4 text-white" />
              </div>
              <p className="text-green-title font-bold text-base md:text-lg leading-snug">
                {problem}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-8"
        >
          <p className="text-green-title font-black text-lg md:text-xl mb-2 text-center">
            Sua próxima ideia pode estar na biblioteca 👇
          </p>
          <ArrowDown className="w-8 h-8 text-cta animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
