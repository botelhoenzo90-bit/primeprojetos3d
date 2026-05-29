import { motion } from "framer-motion";
import page1 from "@/assets/recipe-guide-1.png";
import page2 from "@/assets/recipe-guide-2.png";
import page3 from "@/assets/recipe-guide-3.png";
import page4 from "@/assets/recipe-guide-4.png";
import page5 from "@/assets/recipe-guide-5.png";
import page6 from "@/assets/recipe-guide-6.png";
import page7 from "@/assets/recipe-guide-7.png";
import page8 from "@/assets/recipe-guide-8.png";

const pages = [page1, page2, page3, page4, page5, page6, page7, page8];
const doubled = [...pages, ...pages, ...pages, ...pages];

const RecipePagesCarousel = () => {
  return (
    <section className="pb-8 md:pb-12 bg-[#22c55e]/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl font-black text-green-title leading-tight mb-3 tracking-tight">
            Veja o <span className="text-cta">guia por dentro:</span>
          </h2>
          <p className="text-green-title text-sm md:text-lg font-medium max-w-2xl mx-auto">
            Receitas detalhadas com ingredientes, tempo, temperatura e modo de preparo.
          </p>
        </motion.div>
      </div>
      <div className="relative">
        <div 
          className="flex animate-marquee" 
          style={{ width: `${doubled.length * 280}px` }}
        >
          {doubled.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-64 mx-2">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  src={img}
                  alt={`Página de receita ${(i % pages.length) + 1}`}
                  className="w-64 h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12 mb-8 flex flex-col items-center">
        <motion.a
          href="#oferta"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide cursor-pointer"
        >
          QUERO TODAS AS RECEITAS AGORA! 🔥
        </motion.a>
        <p className="text-xs md:text-sm text-green-title font-semibold mt-2 flex items-center justify-center gap-1.5">
          🛡️ Garantia de 7 dias · Acesso imediato por e-mail
        </p>
      </div>
    </section>
  );
};

export default RecipePagesCarousel;
