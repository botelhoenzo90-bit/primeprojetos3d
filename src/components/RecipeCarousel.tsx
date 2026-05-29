import recipe1 from "@/assets/airfryer-recipe-1.png";
import recipe2 from "@/assets/airfryer-recipe-2.png";
import recipe3 from "@/assets/airfryer-recipe-3.png";
import recipe4 from "@/assets/airfryer-recipe-4.png";
import recipe5 from "@/assets/airfryer-recipe-5.png";
import recipe6 from "@/assets/airfryer-recipe-6.png";
import recipe7 from "@/assets/airfryer-recipe-7.png";
import recipe8 from "@/assets/airfryer-recipe-8.png";
import recipe9 from "@/assets/airfryer-recipe-9.png";
import recipe10 from "@/assets/airfryer-recipe-10.png";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

const images = [
  { src: recipe1, label: "Bife con papas doradas", time: "20 min", badge: "Doradito sin ensuciar" },
  { src: recipe2, label: "Tortilla cremosa rellena", time: "18 min", badge: "Perfecta para una cena rápida" },
  { src: recipe3, label: "Salmón con vegetales", time: "17 min", badge: "Jugoso por dentro" },
  { src: recipe4, label: "Pollo cítrico crocante", time: "22 min", badge: "Costra crocante" },
  { src: recipe5, label: "Costillas barbecue", time: "25 min", badge: "Terminado caramelizado" },
  { src: recipe6, label: "Berenjena gratinada", time: "19 min", badge: "Gratinada y práctica" },
  { src: recipe7, label: "Pollo con calabaza asada", time: "20 min", badge: "Comida completa" },
  { src: recipe8, label: "Pan casero crocante", time: "25 min", badge: "Corteza dorada por fuera" },
  { src: recipe9, label: "Bizcocho de chocolate", time: "22 min", badge: "Húmedo y esponjoso" },
  { src: recipe10, label: "Lasaña gratinada", time: "30 min", badge: "Queso derretido perfecto" },
];

const doubled = [...images, ...images];

const RecipeCarousel = () => {
  return (
    <section className="py-8 bg-[#22c55e]/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
              <ChefHat className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Recetas en Airfryer
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-3 tracking-tight">
              Algunas recetas que <span className="text-cta">vas a preparar:</span>
            </h2>
            <p className="text-green-title text-base md:text-xl font-medium max-w-2xl mx-auto">
              Prácticas, sabrosas y perfectas para facilitar tu rutina con la airfryer.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee" style={{ width: `${doubled.length * 280}px` }}>
          {doubled.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-64 mx-2">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-64 h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-3 text-center">
                  <p className="font-bold text-green-title text-sm">{img.label}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">⏱️ Listo en {img.time}</p>
                  <span className="inline-block text-xs bg-cta/10 text-cta font-semibold px-2 py-0.5 rounded-full mt-1">
                    🔥 {img.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default RecipeCarousel;
