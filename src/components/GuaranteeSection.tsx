import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import garantiaSelo from "@/assets/garantia-selo.png";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-[#22c55e]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Risco Zero para você
          </span>
          <motion.img
            src={garantiaSelo}
            alt="Selo Garantia 7 Dias"
            className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-title mb-4">
            Garantia de <span className="text-cta">7 dias</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Se em até 7 dias você sentir que o conteúdo não é para você, basta
            enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas,
            sem burocracia. O risco é todo nosso!
          </p>
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2"
          >
            TESTAR SEM RISCO POR 7 DIAS! →
          </motion.a>
          <p className="text-xs md:text-sm text-[#064E3B] font-semibold flex items-center justify-center gap-1.5 justify-center">
            🛡️ Garantia de 7 dias · Acesso imediato por e-mail
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
