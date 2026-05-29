import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿El material es digital?", a: "Sí. Después de la compra recibes acceso inmediato al material en formato digital para verlo desde celular, tablet o computadora." },
  { q: "¿Necesito experiencia en la cocina?", a: "No. Las recetas fueron pensadas para principiantes y también para quien ya cocina. Todo viene explicado paso a paso." },
  { q: "¿Las recetas usan ingredientes caros?", a: "No. La propuesta es justamente facilitar tu rutina con ingredientes accesibles y fáciles de encontrar." },
  { q: "¿Cuánto tardan las recetas?", a: "La mayoría de las recetas está pensada para prepararse en hasta 20 minutos usando la airfryer." },
  { q: "¿Qué tipo de recetas voy a encontrar?", a: "Vas a encontrar recetas prácticas para el día a día: carnes, pollo, pescados, platos principales, acompañamientos y hasta postres en la airfryer." },
  { q: "¿Cómo funciona la garantía?", a: "Tienes 7 días para probar el contenido. Si no te gusta, puedes pedir el reembolso del 100% de tu compra." },
  { q: "¿Cómo recibo el acceso?", a: "Justo después de la confirmación del pago recibirás el acceso por e-mail." },
  { q: "¿Sirve para quien llega sin tiempo a casa?", a: "Sí. Este recetario fue creado exactamente para ayudarte a decidir rápido qué preparar, sin improvisar ni pedir delivery." },
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
              <HelpCircle className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Dudas Comunes
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-3 tracking-tight">
            Preguntas <span className="text-cta">frecuentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-[#32CD32]/10 rounded-xl border border-[#32CD32]/30 px-5"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8 flex flex-col items-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-cta hover:bg-cta-hover text-cream font-bold text-sm md:text-lg px-6 md:px-8 py-4 rounded-xl transition-colors whitespace-nowrap mb-2"
          >
            ¿AÚN TIENES DUDAS? ¡COMPRA SIN RIESGO! 🔥
          </motion.a>
          <p className="text-xs md:text-sm text-green-title font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantía de 7 días · Acceso inmediato por e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
