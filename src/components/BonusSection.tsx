import { motion } from "framer-motion";
import { Flame, Gift } from "lucide-react";
import bonusMarmita from "@/assets/bonus-marmita.jpg";
import bonusSuco from "@/assets/bonus-suco.jpg";
import bonusWhey from "@/assets/bonus-whey.jpg";

const bonuses = [
  { img: bonusMarmita, title: "Marmitas Fit", desc: "Receitas de marmitas saudáveis e práticas para a semana toda" },
  { img: bonusSuco, title: "Sucos Detox", desc: "Receitas de sucos detox para turbinar sua saúde e energia" },
  { img: bonusWhey, title: "+250 Receitas com Whey Protein", desc: "Receitas deliciosas e criativas usando whey protein no dia a dia" },
];

const BonusSection = () => {
  return (
    <section className="py-12 md:py-16 bg-[#22c55e]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            <Gift className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Presentes Especiais
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#022C22] leading-tight tracking-tight mb-3">
            Além das receitas, <span className="text-[#16a34a]">você ganha mais!</span>
          </h2>
          <p className="text-[#064E3B] text-base md:text-xl font-medium max-w-2xl mx-auto">
            Bônus exclusivos para acelerar seus resultados e facilitar sua rotina.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sage/20 flex flex-col"
            >
              <img src={b.img} alt={b.title} className="w-full aspect-square object-cover object-top" loading="lazy" decoding="async" width={512} height={512} />

              <div className="p-5 text-center flex flex-col flex-1">
                <span className="inline-block bg-green-highlight text-white font-extrabold text-xs px-3 py-1 rounded-full mb-2 tracking-wide">
                  BÔNUS
                </span>
                <h3 className="font-bold text-lg text-green-title mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{b.desc}</p>

                <div className="mt-auto flex flex-col items-center gap-1">
                  <span className="text-red-500 font-bold line-through text-lg">R$ 67,00</span>
                  <span className="text-emerald-600 font-extrabold text-xl bg-emerald-50 px-4 py-1 rounded-full">GRÁTIS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-8 bg-gradient-to-r from-[#FFD700]/20 via-orange-100 to-[#FFD700]/20 border-2 border-dashed border-[#FF4500] rounded-2xl px-6 py-4 text-center"
        >
          <p className="text-base md:text-xl font-black text-[#022C22] uppercase tracking-wide flex items-center justify-center gap-2 flex-wrap">
            🎁 Todos esses bônus exclusivos <span className="text-[#FF4500]">100% GRÁTIS!</span>
          </p>
          <p className="text-xs md:text-sm text-[#064E3B] font-semibold mt-1">
            Você leva tudo isso na sua compra de hoje — sem pagar nada a mais.
          </p>
        </motion.div>


        <div className="text-center mt-8 flex flex-col items-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2"
          >
            QUERO TUDO ISSO AGORA! 🎁
          </motion.a>
          <p className="text-xs md:text-sm text-[#064E3B] font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantia de 7 dias · Acesso imediato por e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
