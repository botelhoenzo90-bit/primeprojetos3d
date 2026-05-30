import { motion } from "framer-motion";
import { Star } from "lucide-react";
import dep1 from "@/assets/testimonial-new-1.png";
import dep2 from "@/assets/testimonial-new-2.png";
import dep3 from "@/assets/testimonial-new-3.png";
import dep4 from "@/assets/testimonial-new-4.png";
import dep5 from "@/assets/testimonial-new-5.png";
import dep6 from "@/assets/testimonial-new-6.png";

const testimonials = [dep1, dep2, dep5, dep3, dep4, dep6];
const doubled = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Resultados Reais
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-green-title mb-2 leading-tight px-1 tracking-tight">
            Veja quem já <span className="text-cta">transformou a rotina</span> com nossas receitas
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-medium">
            Veja os resultados reais de quem comprou:
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div
          className="flex animate-marquee-testimonials"
          style={{ width: `${doubled.length * 304}px` }}
        >
          {doubled.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 mx-2">
              <img
                src={img}
                alt={`Depoimento ${(i % testimonials.length) + 1}`}
                className="w-72 h-[420px] object-contain bg-white rounded-2xl shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-sage/20 px-6 py-5 text-center"
        >
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-5xl md:text-6xl font-black text-green-title">4,9</span>
            <span className="text-base text-muted-foreground font-semibold">/ 5</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] fill-[#FFD700]" />
            ))}
          </div>
          <p className="text-sm md:text-base font-bold text-green-title">
            Avaliado por <span className="text-cta">+12.847 clientes</span>
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            98% recomendam para amigos e familiares
          </p>
        </motion.div>
      </div>



      <div className="text-center mt-8">
        <motion.a
          href="#oferta"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2 animate-pulse-soft"
        >
          QUERO MEUS RESULTADOS AGORA! 🔥
        </motion.a>
        <p className="text-xs md:text-sm text-[#064E3B] font-semibold flex items-center justify-center gap-1.5">
          🛡️ Garantia de 7 dias · Acesso imediato por e-mail
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
