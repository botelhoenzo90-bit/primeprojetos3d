import { motion } from "framer-motion";
import { UtensilsCrossed, ChefHat, Flame, Timer, ListChecks, Gift, PiggyBank, CookingPot, Smile, Heart, BookOpen } from "lucide-react";
import geladeiraImg from "@/assets/produto-mockup.png";

const benefits = [
  { icon: UtensilsCrossed, title: "+100 mil arquivos STL organizados por categorias" },
  { icon: ChefHat, title: "Modelos para decoração, colecionáveis, utilidades e presentes" },
  { icon: CookingPot, title: "Ideias para imprimir, personalizar e explorar novos nichos" },
  { icon: Flame, title: "Variedade para sua impressora não ficar sem projetos" },
  { icon: Timer, title: "Arquivos digitais prontos para preparar no fatiador" },
  { icon: ListChecks, title: "Categorias para facilitar a busca por modelos" },
  { icon: Gift, title: "Coleções bônus inclusas no plano Premium" },
  { icon: PiggyBank, title: "Reduzir o tempo gasto procurando arquivos avulsos" },
  { icon: Smile, title: "Mais praticidade para planejar suas impressões" },
  { icon: Heart, title: "Tenha novas ideias para imprimir durante o ano" },
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
            <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Guia de Aprendizado
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-3 tracking-tight">
            O que você vai <span className="text-cta">encontrar:</span>
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
              alt="Biblioteca digital de arquivos STL 3D"
              className="w-full max-w-md rounded-2xl shadow-xl border-4 border-primary"
            loading="lazy"
          />
        </motion.div>

        <div className="text-center flex flex-col items-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2 animate-pulse-soft"
          >
            QUERO EXPLORAR A BIBLIOTECA STL!
          </motion.a>
          <p className="text-xs md:text-sm text-green-title font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantia de 7 dias · Acesso imediato por e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
