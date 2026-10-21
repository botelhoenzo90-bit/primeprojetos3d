import { motion } from "framer-motion";
import model1 from "@/assets/airfryer-recipe-1.png";
import model2 from "@/assets/airfryer-recipe-2.png";
import model3 from "@/assets/airfryer-recipe-3.png";
import model4 from "@/assets/airfryer-recipe-4.png";
import model5 from "@/assets/airfryer-recipe-5.png";
import model6 from "@/assets/airfryer-recipe-6.png";
import model7 from "@/assets/airfryer-recipe-7.png";
import model8 from "@/assets/airfryer-recipe-8.png";
import model9 from "@/assets/airfryer-recipe-9.png";
import model10 from "@/assets/airfryer-recipe-10.png";

const models = [model1, model2, model3, model4, model5, model6, model7, model8, model9, model10];
const doubled = [...models, ...models];

const RecipePagesCarousel = () => (
  <section className="py-5 md:py-8 bg-[#EFF7FF] overflow-hidden">
    <div className="container mx-auto px-4 mb-4">
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <p className="text-sm md:text-base font-extrabold uppercase tracking-wider text-blue-700">Mais ideias. Mais possibilidades.</p>
      </motion.div>
    </div>
    <div className="relative">
      <div className="flex animate-marquee-reverse" style={{ width: `${doubled.length * 280}px` }}>
        {doubled.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-64 mx-2">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img src={img} alt={`Ideia visual para impressão 3D ${(i % models.length) + 1}`} className="w-64 h-64 object-cover" loading="lazy" decoding="async" />
              <div className="px-3 py-2 text-center"><p className="font-bold text-[#17324D] text-sm">Inspire seu próximo projeto</p><p className="text-xs text-slate-500">Modelo digital para explorar</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecipePagesCarousel;
