import { motion } from "framer-motion";
import { Flame, Gift } from "lucide-react";
import bonusMarmita from "@/assets/bonus-marmita.jpg";
import bonusSuco from "@/assets/bonus-suco.jpg";
import bonusWhey from "@/assets/bonus-whey.jpg";

const bonuses = [
  { img: bonusMarmita, title: "Viandas Fit", desc: "Recetas de viandas saludables y prácticas para toda la semana" },
  { img: bonusSuco, title: "Jugos Detox", desc: "Recetas de jugos detox para potenciar tu salud y energía" },
  { img: bonusWhey, title: "+250 Recetas con Whey Protein", desc: "Recetas deliciosas y creativas usando whey protein en el día a día" },
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
            <Gift className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Regalos Especiales
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#022C22] leading-tight tracking-tight mb-3">
            ¡Además de las recetas, <span className="text-[#16a34a]">ganas más!</span>
          </h2>
          <p className="text-[#064E3B] text-base md:text-xl font-medium max-w-2xl mx-auto">
            Bonos exclusivos para acelerar tus resultados y facilitar tu rutina.
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
              {/* Image */}
              <img src={b.img} alt={b.title} className="w-full aspect-square object-cover object-top" loading="lazy" decoding="async" width={512} height={512} />

              {/* Title + Subtitle */}
              <div className="p-5 text-center flex flex-col flex-1">
                <span className="inline-block bg-green-highlight text-white font-extrabold text-xs px-3 py-1 rounded-full mb-2 tracking-wide">
                  BONO
                </span>
                <h3 className="font-bold text-lg text-green-title mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{b.desc}</p>

                {/* Price */}
                <div className="mt-auto flex flex-col items-center gap-1">
                  <span className="text-red-500 font-bold line-through text-lg">$ 12.00</span>
                  <span className="text-emerald-600 font-extrabold text-xl bg-emerald-50 px-4 py-1 rounded-full">GRATIS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Removido o card de valor total dos bônus conforme solicitado */}

        <div className="text-center mt-8 flex flex-col items-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2"
          >
            ¡QUIERO TODO ESTO AHORA! 🎁
          </motion.a>
          <p className="text-xs md:text-sm text-[#064E3B] font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantía de 7 días · Acceso inmediato por e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
