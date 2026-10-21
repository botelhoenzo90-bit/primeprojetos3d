import { motion } from "framer-motion";
import { Smartphone, Monitor, Printer, Zap } from "lucide-react";

const items = [
  { icon: Smartphone, emoji: "📱", title: "Acesse sua conta", desc: "Entre na plataforma pelo dispositivo compatível." },
  { icon: Monitor, emoji: "💻", title: "Explore a biblioteca", desc: "Navegue pelas categorias e encontre modelos." },
  { icon: Printer, emoji: "🖨️", title: "Prepare a impressão", desc: "Baixe o arquivo disponível e abra no seu fatiador." },
  { icon: Zap, emoji: "⚡", title: "Comece sem esperar", desc: "O acesso é liberado após a confirmação do pagamento." },
];

const DeliverySection = () => (
  <section className="py-12 md:py-16 bg-white border-b border-blue-100">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs md:text-sm font-black uppercase tracking-wider px-4 py-2 rounded-full border border-blue-100">ACESSO PELA PLATAFORMA</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mt-4">Como você vai <span className="text-blue-700">acessar:</span></h2>
        <p className="text-slate-600 font-semibold text-base md:text-lg mt-3 max-w-2xl mx-auto">Depois da confirmação do pagamento, siga as instruções para entrar na plataforma e começar a explorar os arquivos.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F4F8FC] rounded-2xl p-5 md:p-6 border border-blue-100 shadow-sm text-center flex flex-col items-center">
            <div className="text-4xl mb-3">{item.emoji}</div><h3 className="text-base md:text-lg font-extrabold text-[#17324D] mb-1">{item.title}</h3><p className="text-sm text-slate-600 font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverySection;
