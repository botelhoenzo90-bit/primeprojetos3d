import { motion } from "framer-motion";
import { X, ArrowDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Sin tiempo para preparar comida saludable",
    "Te cansaste de improvisar comidas todos los días",
    "Terminas comiendo chatarra por la practicidad",
    "Intentas comer mejor, pero nunca logras mantenerlo",
  ];

  return (
    <section className="py-8 md:py-12 bg-cream border-b border-red-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-5xl font-black text-green-title leading-tight uppercase tracking-tighter whitespace-nowrap">
            ¿ESTO TE SUCEDE A TI?
          </h2>
        </div>
        <div className="space-y-4 mb-10">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl md:text-2xl font-black text-green-title uppercase tracking-tight">
              Entonces necesitas esto
            </h3>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-8 h-8 text-cta" />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-gradient-to-br from-green-title via-green-800 to-green-900 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-green-900/40 border border-cta/30 overflow-hidden"
          >
            {/* Glow orbs */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-cta/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-cta/15 rounded-full blur-3xl" />
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cta to-transparent" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-cta text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cta/40">
                ✨ La Solución 🔥
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
                🍗 Recetas Prácticas en Airfryer <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-cta to-yellow-300 bg-clip-text text-transparent">
                  para todos los momentos ✨
                </span>
              </h2>
              <div className="w-16 h-1 bg-cta/70 rounded-full mx-auto my-4" />
              <p className="text-white/90 text-sm md:text-lg font-medium">
                +200 recetas listas en hasta 20 minutos para tu día a día.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
