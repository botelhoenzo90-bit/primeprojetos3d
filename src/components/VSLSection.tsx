import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const VSLSection = () => {
  const [viewers, setViewers] = useState(162);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.floor(Math.random() * 11) - 5;
        return Math.max(120, Math.min(250, prev + change));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-sage-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#064E3B] leading-tight mb-2">
            Descubra como preparar <span className="text-[#16a34a]">refeições perfeitas</span> na airfryer:
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">Assista e veja como é fácil ter refeições saudáveis prontas para a semana toda!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative bg-black rounded-[2.5rem] p-1.5 shadow-2xl max-w-[320px] w-full border-4 border-gray-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
            <div className="rounded-[2.2rem] overflow-hidden bg-black aspect-[9/16]">
              <iframe
                src="https://www.youtube.com/embed/2-A2chrN41w?autoplay=0&rel=0&modestbranding=1"
                title="Veja como funcionam as Receitas na Airfryer"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-black/5 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-black/10 mt-4 shadow-sm animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] md:text-xs text-foreground font-bold uppercase tracking-wider">🔥 {viewers} pessoas assistindo agora!</span>
          </div>

          <div className="text-center mt-6">
            <motion.a
              href="#oferta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-4 animate-pulse-soft"
            >
              QUERO APRENDER AGORA! 🔥
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
