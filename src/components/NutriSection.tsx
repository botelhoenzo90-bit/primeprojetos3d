import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import nutriImg from "@/assets/nutri-juliana.png";

const NutriSection = () => {
  return (
    <section className="py-8 bg-[#22c55e]/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            <Leaf className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> PARA QUEM CRIA EM 3D
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-6 tracking-tight">
            Sua impressora <span className="text-cta">pode ir além</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <img
              src={nutriImg}
              alt="Nutricionista Juliana Alves apresentando receitas para airfryer"
              className="w-full max-w-sm rounded-3xl shadow-2xl border-4 border-primary object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <p className="text-green-title text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto px-2">
            Uma boa biblioteca digital ajuda você a explorar diferentes ideias sem começar cada projeto do zero. Tenha mais variedade para imprimir, personalizar, colecionar e avaliar quais tipos de peças fazem sentido para seus objetivos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NutriSection;
