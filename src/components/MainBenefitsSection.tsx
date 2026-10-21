import { motion } from "framer-motion";
import { Zap, ChefHat, Utensils, Clock, Flame, Leaf, Heart, Home, Coffee } from "lucide-react";

const benefits = [
  { icon: ChefHat, text: "+100 mil arquivos STL para explorar diferentes nichos" },
  { icon: Utensils, text: "Modelos organizados para encontrar arquivos com mais facilidade" },
  { icon: Zap, text: "Mais tempo criando e menos tempo procurando" },
  { icon: Clock, text: "Arquivos digitais para preparar sua próxima impressão" },
  { icon: Flame, text: "Ideias para decoração, colecionáveis, utilidades e presentes" },
  { icon: Leaf, text: "Opções para makers iniciantes e experientes" },
  { icon: Coffee, text: "Animes, articulados, chaveiros, veículos e muito mais" },
  { icon: Home, text: "Novas possibilidades para imprimir, personalizar e vender" },
];

const MainBenefitsSection = () => {
  return (
    <section className="py-8 bg-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> EXPLORE A BIBLIOTECA 3D:
          </span>
          <h2 className="text-[26px] md:text-[56px] font-black text-green-title leading-[1.1] mb-2 max-w-[340px] md:max-w-none mx-auto px-2">
            Tudo o que você <br className="hidden md:block" />
            pode criar com uma <br className="hidden md:block" />
            <span className="text-cta">biblioteca de arquivos STL</span>
          </h2>
          <p className="text-green-title text-base md:text-xl font-medium max-w-2xl mx-auto mb-8">
            Uma coleção digital para explorar modelos, testar ideias e manter sua impressora 3D com novos projetos.
          </p>
        </div>

        <div className="flex flex-col items-start max-w-fit mx-auto space-y-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 py-1 w-full"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cta/15 flex items-center justify-center">
                <Icon className="w-5 h-5 text-cta" />
              </div>
              <h3 className="text-lg font-bold text-green-title leading-tight text-left">
                {benefit.text}
              </h3>
            </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-8 flex flex-col items-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2 animate-pulse-soft"
          >
            QUERO EXPLORAR OS MODELOS 3D!
          </motion.a>
          <p className="text-xs md:text-sm text-green-title font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantia de 7 dias · Acesso digital imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainBenefitsSection;
