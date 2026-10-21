import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Os arquivos funcionam na minha impressora 3D?", a: "Os arquivos STL são usados em muitos fluxos de impressão 3D. A compatibilidade final depende da impressora, do fatiador e das características de cada modelo." },
  { q: "Preciso saber modelar em 3D para usar os arquivos?", a: "Não é necessário criar modelos do zero para usar arquivos STL. Você precisa conhecer o básico do seu fatiador e ajustar as configurações conforme sua impressora e material." },
  { q: "Quantos arquivos posso baixar?", a: "A quantidade e as condições de download dependem do plano adquirido e das regras de acesso informadas na oferta." },
  { q: "Como recebo o acesso à biblioteca?", a: "Após a confirmação do pagamento, você recebe as instruções de acesso digital pelo canal informado no checkout." },
  { q: "Que tipos de modelos vou encontrar?", a: "A biblioteca reúne categorias variadas, como decoração, articulados, chaveiros, veículos, personagens, utilidades e colecionáveis. As categorias exatas variam conforme o pacote." },
  { q: "Como funciona a garantia de 7 dias?", a: "Você tem 7 dias para testar o conteúdo. Se não gostar, pode pedir o reembolso de 100% da sua compra." },
  { q: "Como recebo o acesso?", a: "Logo após a confirmação do pagamento você receberá o acesso por e-mail." },
  { q: "Posso vender as peças que eu imprimir?", a: "Verifique a licença de cada modelo e as condições comerciais do plano antes de vender peças físicas. Nem todo arquivo permite uso comercial." },
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
              <HelpCircle className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> DÚVIDAS SOBRE OS ARQUIVOS
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
            className="inline-block bg-cta hover:bg-cta-hover text-cream font-bold text-sm md:text-lg px-6 md:px-8 py-4 rounded-xl transition-colors whitespace-nowrap mb-2 animate-pulse-soft"
          >
            QUERO ACESSAR A BIBLIOTECA COM GARANTIA!
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
