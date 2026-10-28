import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const benefits = [
  "Explore mais de 100 mil modelos 3D organizados por categoria.",
  "Descubra novas ideias para ampliar seu catálogo de produtos.",
  "Encontre opções de decoração, utilidades, veículos e colecionáveis.",
  "Escolha modelos que façam sentido para sua impressora e seu público.",
  "Passe menos tempo procurando arquivos em diferentes sites.",
  "Use cada modelo como ponto de partida para planejar seus próximos testes.",
];

const MainBenefitsSection = () => (
  <section className="py-10 md:py-14 bg-cream">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-7">
        <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full border border-[#FFD700]">
          <Zap className="w-4 h-4 text-[#FF4500]" /> MAIS POSSIBILIDADES PARA SUA IMPRESSORA
        </span>
        <h2 className="text-[28px] md:text-5xl font-black text-green-title leading-tight max-w-4xl mx-auto">
          Menos busca, <span className="text-cta">mais ideias para imprimir.</span>
        </h2>
      </div>
      <div className="max-w-4xl mx-auto divide-y divide-slate-200 border-y border-slate-200">
        {benefits.map((benefit, index) => (
          <motion.div key={benefit} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="flex items-start gap-3 py-4 md:py-5">
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cta shrink-0 mt-0.5" />
            <p className="text-base md:text-lg font-bold text-green-title leading-snug">{benefit}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-7">
        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-lg px-8 md:px-10 py-4 rounded-full shadow-lg transition-all uppercase tracking-wide">
          QUERO ENCONTRAR NOVAS IDEIAS
        </motion.a>
      </div>
    </div>
  </section>
);

export default MainBenefitsSection;
