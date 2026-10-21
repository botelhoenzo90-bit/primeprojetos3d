import { motion } from "framer-motion";
import { Smartphone, Monitor, Printer, Zap } from "lucide-react";

const items = [
  {
    icon: Smartphone,
    emoji: "📱",
    title: "No Celular",
    desc: "Consulte sua coleção onde estiver",
  },
  {
    icon: Monitor,
    emoji: "💻",
    title: "No Computador",
    desc: "Organize e encontre modelos",
  },
  {
    icon: Printer,
    emoji: "🖨️",
    title: "Para Imprimir",
    desc: "Arquivos STL para fatiar e imprimir",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Envio Imediato",
    desc: "Liberado em segundos",
  },
];

const DeliverySection = () => {
  return (
    <section className="py-12 md:py-16 bg-cream border-b border-blue-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
            ACESSO DIGITAL
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-green-title leading-tight mt-4">
            Como você vai <span className="text-cta">ACESSAR</span>:
          </h2>
          <p className="text-muted-foreground font-bold text-base md:text-lg mt-2">
            Receba as instruções de acesso após a confirmação do pagamento
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm text-center flex flex-col items-center"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="text-base md:text-lg font-extrabold text-green-title mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
