import { motion } from "framer-motion";
import { Gift, CarFront, KeyRound, ToyBrick, House, Gamepad2, Sparkles } from "lucide-react";

const bonuses = [
  { icon: CarFront, title: "Pack de Veículos 3D", desc: "Carros, motos e outros modelos para montar sua coleção." },
  { icon: KeyRound, title: "Chaveiros Personalizados", desc: "Ideias para presentes, lembranças e peças personalizadas." },
  { icon: ToyBrick, title: "Modelos Flexíveis e Articulados", desc: "Peças com movimento para explorar impressões diferentes." },
  { icon: House, title: "Decoração e Utilidades", desc: "Modelos para dar forma a objetos úteis e detalhes decorativos." },
  { icon: Gamepad2, title: "Colecionáveis e Personagens", desc: "Mais variedade para quem gosta de colecionar e exibir suas criações." },
  { icon: Sparkles, title: "Ideias Criativas para Presentes", desc: "Inspiração para projetos personalizados em datas especiais." },
];

const BonusSection = () => (
  <section className="py-12 md:py-16 bg-[#EFF7FF]">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 bg-[#DCEBFF] text-[#17324D] text-[10px] md:text-sm font-black uppercase tracking-wider mb-5 px-4 py-2 rounded-full border border-[#BFDBFE]">
          <Gift className="w-4 h-4 text-[#FF4500]" /> 6 BÔNUS EXTRAS
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight tracking-tight mb-3">
          Você leva a biblioteca <span className="text-blue-700">e mais 6 coleções bônus.</span>
        </h2>
        <p className="text-[#334155] text-base md:text-xl font-medium max-w-2xl mx-auto">
          Mais variedade para encontrar sua próxima ideia e aproveitar melhor cada sessão de impressão.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {bonuses.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} whileHover={{ y: -4 }} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4"><Icon className="w-7 h-7 text-blue-700" /></div>
              <span className="inline-block bg-blue-700 text-white font-extrabold text-[10px] px-3 py-1 rounded-full mb-2 tracking-wide">BÔNUS {i + 1}</span>
              <h3 className="font-extrabold text-lg text-[#17324D] mb-2">{b.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{b.desc}</p>
              <span className="mt-4 inline-block text-green-700 font-extrabold text-sm bg-green-50 px-4 py-1.5 rounded-full">INCLUSO NO PACOTE</span>
            </motion.div>
          );
        })}
      </div>
      <div className="max-w-2xl mx-auto mt-8 bg-white border-2 border-dashed border-[#FF4500] rounded-2xl px-6 py-4 text-center">
        <p className="text-lg md:text-xl font-black text-[#17324D]">🎁 6 BÔNUS PARA AMPLIAR SUAS POSSIBILIDADES</p>
        <p className="text-sm text-[#475569] font-medium mt-1">Confira os detalhes e condições do pacote na oferta antes de finalizar a compra.</p>
      </div>
      <div className="text-center mt-8 flex flex-col items-center">
        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full md:w-auto bg-[#FF4500] hover:bg-[#E63E00] text-white font-black text-sm md:text-xl px-10 py-5 rounded-full text-center shadow-lg transition-all uppercase tracking-wide mb-2">
          QUERO OS 6 BÔNUS + A BIBLIOTECA
        </motion.a>
        <p className="text-xs md:text-sm text-[#334155] font-semibold">🛡️ Garantia de 7 dias • Acesso digital</p>
      </div>
    </div>
  </section>
);

export default BonusSection;
