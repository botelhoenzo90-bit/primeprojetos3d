import { motion } from "framer-motion";
import { UtensilsCrossed, ChefHat, Flame, Timer, ListChecks, Gift, PiggyBank, CookingPot, Smile, Heart, BookOpen } from "lucide-react";
import geladeiraImg from "@/assets/produto-mockup.png";

const benefits = [
  { icon: UtensilsCrossed, title: "+200 recetas prácticas en airfryer" },
  { icon: ChefHat, title: "Platos completos para almuerzo, cena y postre" },
  { icon: CookingPot, title: "Recetas económicas y fáciles de hacer" },
  { icon: Flame, title: "Variaciones para no aburrirte del menú" },
  { icon: Timer, title: "Listas en hasta 20 minutos" },
  { icon: ListChecks, title: "Paso a paso de preparación" },
  { icon: Gift, title: "3 Bonos incluidos" },
  { icon: PiggyBank, title: "Ahorrar dinero evitando delivery" },
  { icon: Smile, title: "Más practicidad para tu rutina" },
  { icon: Heart, title: "Nunca más quedarte sin ideas para cocinar" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Guía de Aprendizaje
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-3 tracking-tight">
            Lo que vas a <span className="text-cta">aprender:</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="space-y-3 inline-flex flex-col items-start">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex items-center gap-3 py-2"
              >
                <b.icon className="w-6 h-6 text-cta flex-shrink-0" />
                <span className="text-base font-semibold text-foreground">{b.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
            <img
              src={geladeiraImg}
              alt="Mockup del producto de recetas en airfryer"
              className="w-full max-w-md rounded-2xl shadow-xl border-4 border-primary"
            loading="lazy"
          />
        </motion.div>

        <div className="text-center flex flex-col items-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2"
          >
            ¡QUIERO COCINAR EN LA AIRFRYER! 🍊
          </motion.a>
          <p className="text-xs md:text-sm text-green-title font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantía de 7 días · Acceso inmediato por e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
