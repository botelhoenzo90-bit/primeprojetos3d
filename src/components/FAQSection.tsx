import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "O que está incluído na biblioteca?", a: "O acesso inclui os arquivos e as coleções descritos no plano escolhido. Confira os detalhes da oferta e do checkout antes de finalizar a compra." },
  { q: "Como recebo meu acesso?", a: "Após a confirmação do pagamento, você receberá as instruções de acesso pelos canais informados no momento da compra." },
  { q: "Os modelos funcionam em qualquer impressora 3D?", a: "Os arquivos STL são compatíveis com muitos fluxos de impressão 3D, mas você deve conferir o formato e ajustar o modelo no fatiador conforme sua impressora e material." },
  { q: "Preciso saber criar modelos em 3D?", a: "Não é necessário modelar do zero para explorar os arquivos. Você precisará preparar e fatiar os modelos de acordo com o equipamento que utiliza." },
  { q: "A biblioteca realmente tem mais de 100 mil modelos?", a: "A biblioteca é apresentada com mais de 100 mil modelos 3D. Consulte a descrição do plano para confirmar o conteúdo incluído e as condições de acesso." },
  { q: "Posso vender os produtos que imprimir?", a: "Isso depende da licença de cada arquivo. Antes de comercializar peças físicas, confira se o modelo permite uso comercial e respeite os direitos do criador." },
  { q: "Como funciona a garantia?", a: "A oferta informa garantia de 7 dias. Se precisar solicitar reembolso, siga as condições e o procedimento da plataforma de pagamento." },
  { q: "O acesso é físico ou digital?", a: "O produto é digital. O acesso é liberado após a confirmação do pagamento, conforme as instruções enviadas." },
];

const FAQSection = () => (
  <section className="py-12 md:py-16 bg-cream">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <div className="flex justify-center mb-5"><span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full border border-[#FFD700]"><HelpCircle className="w-4 h-4 text-[#FF4500]" /> TIRE SUAS DÚVIDAS</span></div>
        <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mb-3">Tudo o que você precisa <span className="text-cta">saber antes de acessar</span></h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Respostas diretas para você entender o conteúdo, o acesso e as condições da biblioteca.</p>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border border-blue-100 px-5 shadow-sm"><AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent></AccordionItem>)}
      </Accordion>
      <div className="text-center mt-8 flex flex-col items-center">
        <motion.a href="#oferta" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-lg px-6 md:px-8 py-4 rounded-full transition-colors mb-2">QUERO VER OS PLANOS</motion.a>
        <p className="text-xs md:text-sm text-green-title font-semibold">🛡️ Garantia de 7 dias · Acesso digital</p>
      </div>
    </div>
  </section>
);

export default FAQSection;
