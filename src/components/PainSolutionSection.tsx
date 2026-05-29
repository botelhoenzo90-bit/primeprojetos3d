import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const before = [
  "Gasta $50 a $100 por mes con Delivery",
  "Promete “el lunes empiezo” hace meses",
  "Come cualquier cosa por falta de tiempo",
  "Se siente pesada, hinchada y sin energía",
  "Siente culpa después de comer comida chatarra",
  "Quiere adelgazar hace años y no avanza",
];

const after = [
  "Comidas listas en hasta 20 minutos en la airfryer",
  "Platos sabrosos, prácticos y más saludables cada día",
  "Ver tu cuerpo deshinchándose en pocos días",
  "Ahorrar cientos de dólares dejando el delivery",
  "Nunca más perder tiempo pensando “¿qué voy a cocinar?”",
];

const PainSolutionSection = () => {
  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-6 px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> La Verdad Que Nadie Te Cuenta
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#064E3B] leading-tight mb-3">
            Tu Vida <span className="text-red-600">ANTES</span> y <span className="text-green-600">DESPUÉS</span>
          </h2>
          <p className="text-base md:text-xl text-foreground font-semibold max-w-3xl mx-auto">
            Descubre cómo <span className="font-extrabold text-green-700">cambiar el rumbo hoy</span> y dejar de <span className="font-extrabold text-red-600">sabotear tus resultados</span> todos los días
          </p>
        </motion.div>

        {/* Comparativo Antes / Depois */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 md:p-8 border-2 border-red-500 shadow-xl relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs md:text-sm font-extrabold uppercase tracking-wider px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
              😩 Tu vida HOY
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-red-700 text-center mb-6 mt-3">
              Cansada, Culpada y Sin Resultados
            </h3>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/60 rounded-lg p-3 border border-red-200">
                  <span className="text-2xl flex-shrink-0">❌</span>
                  <span className="text-base md:text-lg text-foreground font-medium pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DEPOIS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8 border-2 border-green-600 shadow-xl relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs md:text-sm font-extrabold uppercase tracking-wider px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
              ✨ Recetas en Airfryer
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-green-700 text-center mb-6 mt-3">
              Ligera, Delgada y En Control Total
            </h3>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/80 rounded-lg p-3 border border-green-300">
                  <span className="text-2xl flex-shrink-0">✅</span>
                  <span className="text-base md:text-lg text-foreground font-bold pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Frase de impacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-green-900 rounded-2xl p-6 md:p-8 mt-10 max-w-3xl mx-auto shadow-2xl border-2 border-green-700"
        >
          <p className="text-center text-sm md:text-2xl font-extrabold text-white leading-snug">
            La elección es tuya: continuar <span className="text-yellow-300">gastando $100/mes</span> en comida mala,<br className="hidden md:block" />
            o <span className="text-yellow-300">cambiar el rumbo HOY</span> por menos de <span className="text-yellow-300">$ 6</span>. 🔥
          </p>
        </motion.div>

        <div className="text-center mt-8 flex flex-col items-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-12 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-2"
          >
            ¡EMPEZAR MI TRANSFORMACIÓN HOY! 💪
          </motion.a>
          <p className="text-xs md:text-sm text-[#064E3B] font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantía de 7 días · Acceso inmediato por e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;
