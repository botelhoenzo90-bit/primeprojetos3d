import { motion } from "framer-motion";
import { Gift, CarFront, KeyRound, ToyBrick, House, Gamepad2, Sparkles, Lamp, Trophy, Coffee, Castle, Heart, Box, PawPrint, Image } from "lucide-react";

const bonuses = [
  { icon: CarFront, title: "Pack de Veículos 3D", desc: "Miniaturas de carros e outros veículos para explorar o nicho de colecionáveis." },
  { icon: Gamepad2, title: "Coleção de Heróis", desc: "Personagens e figuras para ampliar projetos voltados ao público geek." },
  { icon: KeyRound, title: "Pack de Chaveiros", desc: "Peças pequenas e variadas para testar produtos rápidos e personalizados." },
  { icon: ToyBrick, title: "Modelos Articulados", desc: "Modelos flexíveis e articulados para explorar impressões com movimento." },
  { icon: Sparkles, title: "Clássicos dos Desenhos", desc: "Referências nostálgicas para ampliar a variedade do seu catálogo." },
  { icon: Trophy, title: "Cosplay 3D", desc: "Peças e máscaras para projetos maiores e de apresentação elaborada." },
  { icon: Heart, title: "Coleção Pokémon", desc: "Modelos para explorar o público geek e colecionador." },
  { icon: House, title: "Coleção de Natal", desc: "Decorações sazonais para planejar produtos em épocas comemorativas." },
  { icon: Trophy, title: "Coleção Copa do Mundo", desc: "Ideias temáticas para planejar impressões ligadas a eventos esportivos." },
  { icon: Sparkles, title: "Mascotes Esportivos", desc: "Modelos temáticos para explorar públicos de times e comunidades locais." },
  { icon: Lamp, title: "Luminárias 3D", desc: "Peças decorativas com luz para testar projetos de apresentação diferenciada." },
  { icon: PawPrint, title: "Bichinhos Amigurumi 3D", desc: "Modelos com visual fofo para decoração, presentes e colecionáveis." },
  { icon: Box, title: "Coleção estilo LEGO", desc: "Minifiguras, organizadores e peças inspiradas em construções modulares." },
  { icon: Gamepad2, title: "Universo Minecraft", desc: "Personagens, blocos e objetos com estética pixelada para projetos temáticos." },
  { icon: Coffee, title: "Porta-copos Monster", desc: "Peças decorativas com visual marcante para ampliar as opções de utilidades." },
  { icon: Coffee, title: "Canecas de Times", desc: "Modelos temáticos para explorar ideias voltadas a torcedores." },
  { icon: Castle, title: "Réplicas de Estádios", desc: "Maquetes e miniaturas para decoração e colecionadores de futebol." },
  { icon: Coffee, title: "Caneca Estilo Moletom", desc: "Um conceito criativo de design para testar projetos diferenciados." },
  { icon: Gamepad2, title: "Canecas de Games", desc: "Modelos temáticos para explorar o universo gamer e a cultura geek." },
];
const BonusSection = () => {
  const loop = [...bonuses, ...bonuses];
  return (
    <section className="py-12 md:py-16 bg-[#EFF7FF] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-white text-[#17324D] text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100"><Gift className="w-4 h-4 text-[#FF4500]" /> 19 COLEÇÕES TEMÁTICAS NO PREMIUM</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight tracking-tight mb-3">Mais variedade para <span className="text-blue-700">seus próximos projetos.</span></h2>
          <p className="text-slate-600 text-base md:text-xl font-medium max-w-2xl mx-auto">Explore coleções temáticas de diferentes estilos e encontre referências para ampliar suas ideias de impressão.</p>
        </motion.div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((b, i) => { const Icon = b.icon; return <article key={i} className="w-[260px] md:w-[300px] shrink-0 mx-2 rounded-3xl bg-white p-6 shadow-lg border border-blue-100 text-center flex flex-col items-center min-h-[270px]">
            <div className="w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center gap-2 mb-4"><Image className="w-8 h-8 text-blue-300" /><span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Espaço para imagem</span></div>
            <span className="inline-block bg-blue-700 text-white font-extrabold text-[10px] px-3 py-1 rounded-full mb-2 tracking-wide">COLEÇÃO {(i % bonuses.length) + 1}</span>
            <h3 className="font-extrabold text-lg text-[#17324D] mb-2">{b.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            <span className="mt-auto pt-4 text-green-700 font-extrabold text-xs bg-green-50 px-4 py-2 rounded-full">INCLUSO NO PREMIUM</span>
          </article>; })}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mt-8 bg-white border border-green-200 rounded-2xl px-6 py-4 text-center shadow-sm">
          <p className="text-lg md:text-xl font-black text-[#17324D]">🎁 19 coleções para explorar novos estilos e categorias</p>
          <p className="text-sm text-slate-600 font-medium mt-1">Mais referências para escolher seus próximos projetos e ampliar seu repertório de impressão.</p>
        </div>
        <div className="text-center mt-8 flex flex-col items-center">
          <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full md:w-auto bg-[#15803D] hover:bg-[#166534] text-white font-black text-sm md:text-xl px-10 py-5 rounded-full text-center shadow-lg transition-all uppercase tracking-wide mb-2">QUERO CONHECER AS 19 COLEÇÕES</motion.a>
          <p className="text-xs md:text-sm text-[#334155] font-semibold">🛡️ Garantia de 7 dias • Acesso digital</p>
        </div>
      </div>
    </section>
  );
};
export default BonusSection;
