import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  "Comentários sobre pack de modelos 3D.png",
  "Comentários sobre pack de projetos 3D.png",
  "Depoimento sobre Buggy 3D Impresso.png",
  "Depoimento sobre Pack de Projetos 3D (2).png",
  "Depoimento sobre Pack de Projetos 3D.png",
  "Depoimento sobre pack de projetos 3D (1).png",
  "Depoimentos sobre o Pack 3D.png",
];

const TestimonialsSection = () => {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="py-12 md:py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap border border-[#FFD700]">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> DEPOIMENTOS E EXPERIÊNCIAS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-green-title mb-2 leading-tight px-1 tracking-tight">
            Veja o que estão falando <span className="text-cta">sobre o Pack 3D</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-medium">Relatos e comentários de quem já conhece os projetos e arquivos 3D.</p>
        </motion.div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee-testimonials" style={{ width: `${doubled.length * 304}px` }}>
          {doubled.map((file, i) => (
            <div key={i} className="flex-shrink-0 w-72 mx-2">
              <img src={`/imagens/depoimentos/${encodeURIComponent(file)}`} alt={`Depoimento de cliente ${(i % testimonials.length) + 1}`} className="w-72 h-[420px] object-contain bg-white rounded-2xl shadow-xl" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-sage/20 px-6 py-5 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] fill-[#FFD700]" />)}</div>
          <p className="text-sm md:text-base font-bold text-green-title">Conteúdos e projetos para explorar novas categorias</p>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">Veja os relatos e descubra novas possibilidades para suas impressões</p>
        </motion.div>
      </div>
      <div className="text-center mt-8">
        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2 animate-pulse-soft">QUERO DESCOBRIR O QUE IMPRIMIR</motion.a>
        <p className="text-xs md:text-sm text-[#064E3B] font-semibold">🛡️ Garantia de 7 dias · Acesso digital imediato</p>
      </div>
    </section>
  );
};
export default TestimonialsSection;
