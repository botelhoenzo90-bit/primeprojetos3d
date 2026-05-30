import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Sem tempo para preparar comida saudável",
    "Você se cansou de improvisar refeições todos os dias",
    "Acaba comendo besteira pela praticidade",
    "Tenta comer melhor, mas nunca consegue manter",
    "Faz sempre as mesmas receitas na airfryer",
  ];

  return (
    <section className="py-8 md:py-12 bg-cream border-b border-red-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-5xl font-black text-green-title leading-tight uppercase tracking-tighter whitespace-nowrap">
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
      </div>
    </section>
  );
};

export default ProblemSection;
