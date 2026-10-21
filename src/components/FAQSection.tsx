import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "O que vou receber ao comprar?", a: "Você receberá acesso digital conforme o plano escolhido, com os arquivos e coleções descritos na oferta." },
  { q: "Como acesso a plataforma?", a: "Após a confirmação do pagamento, siga as instruções enviadas para entrar na plataforma e acessar o conteúdo contratado." },
  { q: "Os arquivos funcionam na minha impressora 3D?", a: "Os arquivos STL são utilizados em muitos fluxos de impressão 3D. A compatibilidade final depende do modelo, do fatiador, da impressora e das configurações." },
  { q: "Preciso saber modelar em 3D?", a: "Você não precisa criar os modelos do zero. É necessário saber usar o básico do fatiador e ajustar os parâmetros para sua impressora e material." },
  { q: "Quantos arquivos estão incluídos?", a: "A biblioteca é apresentada com mais de 100 mil modelos STL. Confira no checkout os itens e as condições específicas do plano escolhido." },
  { q: "Que tipos de modelos posso encontrar?", a: "Há categorias e coleções variadas, como decoração, veículos, articulados, chaveiros, utilidades e colecionáveis; a disponibilidade depende do pacote." },
  { q: "Posso vender as peças que imprimir?", a: "Verifique a licença de cada arquivo antes de comercializar peças físicas. Nem todo modelo permite uso comercial." },
  { q: "Como funciona a garantia de 7 dias?", a: "Você pode solicitar o reembolso dentro do prazo de garantia, conforme as condições de compra e da plataforma de pagamento." },
];

const FAQSection = () => (
  <section className="py-12 md:py-16 bg-cream">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <div className="flex justify-center mb-5"><span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#FFD700]"><HelpCircle className="w-4 h-4 text-[#FF4500]" /> ANTES DE ACESSAR</span></div>
        <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-3">Perguntas <span className="text-cta">frequentes</span></h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => <AccordionItem key={i} value={`item-${i}`} className="bg-[#EFF7FF] rounded-xl border border-blue-200 px-5"><AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}
      </Accordion>
      <div className="text-center mt-8 flex flex-col items-center">
        <motion.a href="#oferta" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block bg-cta hover:bg-cta-hover text-white font-bold text-sm md:text-lg px-6 md:px-8 py-4 rounded-xl transition-colors mb-2">QUERO VER OS PLANOS</motion.a>
        <p className="text-xs md:text-sm text-green-title font-semibold">🛡️ Garantia de 7 dias · Acesso digital</p>
      </div>
    </div>
  </section>
);

export default FAQSection;
