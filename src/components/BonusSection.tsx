import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const bonuses = [
  { image: "veiculos.webp", title: "Pack de Veículos 3D", desc: "Miniaturas de carros e outros veículos para explorar o nicho de colecionáveis." },
  { image: "herois.webp", title: "Coleção de Heróis", desc: "Personagens e figuras para ampliar projetos voltados ao público geek." },
  { image: "chaveiros.webp", title: "Pack de Chaveiros", desc: "Peças pequenas e variadas para testar produtos rápidos e personalizados." },
  { image: "articulados.webp", title: "Modelos Articulados", desc: "Modelos flexíveis e articulados para explorar impressões com movimento." },
  { image: "desenhos.webp", title: "Clássicos dos Desenhos", desc: "Referências nostálgicas para ampliar a variedade do seu catálogo." },
  { image: "cosplay.webp", title: "Cosplay 3D", desc: "Peças e máscaras para projetos maiores e de apresentação elaborada." },
  { image: "pokemon.webp", title: "Coleção Pokémon", desc: "Modelos para explorar o público geek e colecionador." },
  { image: "natal.webp", title: "Coleção de Natal", desc: "Decorações sazonais para planejar produtos em épocas comemorativas." },
  { image: "copa.webp", title: "Coleção Copa do Mundo", desc: "Ideias temáticas para planejar impressões ligadas a eventos esportivos." },
  { image: "mascotes.webp", title: "Mascotes Esportivos", desc: "Modelos temáticos para explorar públicos de times e comunidades locais." },
  { image: "luminarias_bonus.webp", title: "Luminárias 3D", desc: "Peças decorativas com luz para testar projetos diferenciados." },
  { image: "amigurumi.webp", title: "Bichinhos Amigurumi 3D", desc: "Modelos com visual fofo para decoração, presentes e colecionáveis." },
  { image: "lego_bonus.webp", title: "Coleção estilo LEGO", desc: "Minifiguras, organizadores e peças inspiradas em construções modulares." },
  { image: "minecraft_bonus.webp", title: "Universo Minecraft", desc: "Personagens, blocos e objetos com estética pixelada." },
  { image: "MLWW9d1.png", title: "Coleção especial 15", desc: "Mais modelos para ampliar suas possibilidades de impressão." },
  { image: "VcahILv.png", title: "Coleção especial 16", desc: "Uma seleção extra de projetos para explorar novas ideias." },
  { image: "gg0YzCN.png", title: "Coleção especial 17", desc: "Conteúdos adicionais para diversificar seu catálogo." },
  { image: "kMoygo7.png", title: "Coleção especial 18", desc: "Mais referências visuais para seus próximos projetos." },
  { image: "zuajik7.png", title: "Coleção especial 19", desc: "Uma coleção extra incluída no acesso Premium." },
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
          {loop.map((b, i) => (
            <article key={i} className="w-[260px] md:w-[300px] shrink-0 mx-2 rounded-3xl bg-white p-4 shadow-lg border border-blue-100 text-center flex flex-col min-h-[330px]">
              <div className="w-full aspect-[4/3] shrink-0 rounded-lg overflow-hidden bg-muted mb-4">
                <img src={`/imagens/bonus/${b.image}`} alt={b.title} loading="lazy" decoding="async" className="block w-full h-full object-cover" />
              </div>
              <span className="inline-block self-center bg-blue-700 text-white font-extrabold text-[10px] px-3 py-1 rounded-full mb-2 tracking-wide">COLEÇÃO {(i % bonuses.length) + 1}</span>
              <h3 className="font-extrabold text-lg text-[#17324D] mb-2">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              <span className="mt-auto pt-4 text-green-700 font-extrabold text-xs bg-green-50 px-4 py-2 rounded-full">INCLUSO NO PREMIUM</span>
            </article>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mt-8 flex flex-col items-center">
          <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block w-full md:w-auto bg-[#15803D] hover:bg-[#166534] text-white font-black text-sm md:text-xl px-10 py-5 rounded-full text-center shadow-lg transition-all uppercase tracking-wide mb-2">QUERO CONHECER AS 19 COLEÇÕES</motion.a>
          <p className="text-xs md:text-sm text-[#334155] font-semibold">🛡️ Garantia de 7 dias • Acesso digital</p>
        </div>
      </div>
    </section>
  );
};
export default BonusSection;
