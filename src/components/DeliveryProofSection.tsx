import { motion } from "framer-motion";
import { Mail, MessageCircle, Star } from "lucide-react";

const DeliveryProofSection = () => (
  <section className="bg-[#080b10] px-4 py-5 md:py-8">
    <div className="mx-auto max-w-6xl space-y-4 md:space-y-5">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-center gap-5 rounded-[26px] border border-slate-700 bg-[#0c1016] px-5 py-6 md:px-9 md:py-8">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-950/40"><Mail className="h-8 w-8 text-white" /></div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl md:text-3xl font-black text-white leading-tight">Você recebe o acesso <span className="text-orange-500">automaticamente no seu e-mail e WhatsApp</span></h2>
          <p className="mt-2 text-sm md:text-lg leading-relaxed text-slate-300">Após a confirmação do pagamento, enviamos as orientações de acesso para o e-mail informado na compra e também pelo WhatsApp.</p>
        </div>
        <div className="hidden sm:flex ml-auto h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500/15"><MessageCircle className="h-7 w-7 text-green-400" /></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-5 rounded-[26px] border border-emerald-800 bg-[#06150f] px-5 py-7 md:px-8 md:py-9">
        <div className="text-center sm:text-left">
          <h3 className="text-xl md:text-2xl font-black text-white">AVALIAÇÃO 4,9</h3>
          <div className="mt-1 flex justify-center sm:justify-start gap-1 text-3xl leading-none text-orange-500" aria-label="Cinco estrelas">★★★★★</div>
        </div>
        <div className="flex justify-center -space-x-3" aria-hidden="true">
          {["#2563eb","#db8b62","#64748b","#d97706","#0f766e","#475569"].map((color, i) => <div key={i} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-800 text-sm font-black text-white shadow-md" style={{ backgroundColor: color }}>{["P","3","D","★","P","3"][i]}</div>)}
        </div>
        <div className="text-center sm:text-right"><p className="text-lg md:text-2xl font-extrabold text-white">Avaliação dos compradores</p><p className="mt-1 text-sm text-emerald-200/70">Experiências compartilhadas por clientes</p></div>
        <div className="sm:hidden flex items-center justify-center gap-1 text-orange-500"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
      </motion.div>
    </div>
  </section>
);

export default DeliveryProofSection;
