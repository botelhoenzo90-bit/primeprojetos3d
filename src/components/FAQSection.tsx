import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "O material é digital?", a: "Sim. Depois da compra você recebe acesso imediato ao material em formato digital para acessar pelo celular, tablet ou computador." },
  { q: "Preciso ter experiência na cozinha?", a: "Não. As receitas foram pensadas para iniciantes e também para quem já cozinha. Tudo vem explicado passo a passo." },
  { q: "As receitas usam ingredientes caros?", a: "Não. A proposta é justamente facilitar a sua rotina com ingredientes acessíveis e fáceis de encontrar." },
  { q: "Quanto tempo levam as receitas?", a: "A maioria das receitas é pensada para ficar pronta em até 20 minutos usando a airfryer." },
  { q: "Que tipo de receitas vou encontrar?", a: "Você vai encontrar receitas práticas para o dia a dia: carnes, frango, peixes, pratos principais, acompanhamentos e até sobremesas na airfryer." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar o conteúdo. Se não gostar, pode pedir o reembolso de 100% da sua compra." },
  { q: "Como recebo o acesso?", a: "Logo após a confirmação do pagamento você receberá o acesso por e-mail." },
  { q: "Serve para quem chega em casa sem tempo?", a: "Sim. Esse receituário foi criado exatamente para te ajudar a decidir rapidinho o que preparar, sem improvisar nem pedir delivery." },
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
              <HelpCircle className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Dúvidas Comuns
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-3 tracking-tight">
            Perguntas <span className="text-cta">frequentes</span>
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
            AINDA TEM DÚVIDAS? COMPRE SEM RISCO! 🔥
          </motion.a>
          <p className="text-xs md:text-sm text-green-title font-semibold flex items-center justify-center gap-1.5">
            🛡️ Garantia de 7 dias · Acesso imediato por e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
