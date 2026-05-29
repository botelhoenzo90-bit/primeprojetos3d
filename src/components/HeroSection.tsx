import { motion } from "framer-motion";
import { Star, ShieldCheck, Flame } from "lucide-react";
import heroImg from "@/assets/hero-airfryer.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#22c55e]/10 pt-8 pb-0 md:pt-16">
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge superior - Verde suave */}
        <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
          <Flame className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> +3.428 PERSONAS TRANSFORMADAS CON ESTAS RECETAS
        </div>
        
        {/* Titulo principal - Ajustado para desktop */}
        <h1 className="text-[20px] md:text-4xl font-black text-green-title leading-snug md:leading-[1.15] mb-4 max-w-[370px] md:max-w-5xl md:px-4 tracking-tight">
          <span className="text-cta">+200 comidas prácticas listas en hasta 20 minutos en tu airfryer</span> — para que nunca más llegues a casa sin saber qué hacer
        </h1>

        {/* Subtitulo abaixo do titulo */}
        <p className="text-green-title/90 text-[13px] md:text-xl font-medium mb-6 max-w-4xl mx-auto px-1 md:px-12 leading-tight md:leading-relaxed">
          Recetas completas, sabrosas, saludables y prácticas en tu airfryer. Una opción diferente para cada día del año. Para que nunca más tengas que repetir platos, improvisar en la cocina o pedir delivery.
        </p>

        <div className="w-full max-w-[320px] md:max-w-[380px] mx-auto mb-6 rounded-2xl shadow-2xl relative border-4 border-cta overflow-hidden">
          <img
            src={heroImg}
            alt="+200 recetas deliciosas y saludables en airfryer"
            className="w-full h-auto block"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="flex flex-col items-center w-full">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-white font-black text-[13px] md:text-xl px-10 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2 whitespace-nowrap"
          >
            ¡QUIERO MIS +200 RECETAS AHORA! 🔥
          </motion.a>
          <p className="text-[11px] md:text-sm text-green-title font-semibold mb-4 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Garantía de 7 días · Acceso inmediato por e-mail
          </p>

          {/* Avaliações abaixo do botão */}
          <div className="flex flex-col items-center gap-1 mb-8">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase tracking-tighter">4.9/5 · +2.300 evaluaciones</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;