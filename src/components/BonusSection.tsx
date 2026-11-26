import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gift, MessageCircle, Lightbulb, Check } from "lucide-react";
import communityImage from "@/assets/comunidade/comunidade-impressao-3d.webp.asset.json";

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
  { image: "zuajik7.png", title: "Coleção especial 19", desc: "Uma coleção extra para ampliar seus projetos." },
];

const bonusPrices = [
  47, 39, 27, 57, 34, 67, 44, 54, 37, 49,
  62, 32, 41, 58, 29, 36, 45, 33, 51,
];

const bonusPrice = (index: number) => `${bonusPrices[index % bonusPrices.length]},00`;

const BonusSection = () => {
  const loop = [...bonuses, ...bonuses];
  return (
    <section className="bonus-section py-8 md:py-12 bg-[#EFF7FF] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 bg-white text-[#17324D] text-xs md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-2 rounded-full border border-blue-100"><Gift className="w-4 h-4 text-[#FF4500]" /> 19 COLEÇÕES TEMÁTICAS EXCLUSIVAS</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight tracking-tight mb-3">Mais variedade para <span className="block text-blue-700">seus próximos projetos.</span></h2>
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
              <div className="mt-auto pt-4 flex items-center justify-center gap-2">
                <span className="text-red-600 font-extrabold text-sm line-through decoration-red-500 decoration-2">
                  R$ {bonusPrice(i % bonuses.length)}
                </span>
                <span className="text-green-700 font-black text-sm bg-green-50 px-3 py-1 rounded-full uppercase">
                  Grátis
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <article className="mx-auto mt-8 grid max-w-4xl items-center gap-5 rounded-lg border border-primary/25 bg-background p-5 md:grid-cols-[240px_1fr] md:gap-8 md:p-7" aria-label="Comunidade gratuita inclusa">
          <img src={communityImage.url} alt="Comunidade Impressão 3D no Telegram" loading="lazy" decoding="async" className="mx-auto w-full max-w-[220px] aspect-square rounded-lg object-contain md:max-w-none" />
          <div className="min-w-0 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase text-heading-highlight">Também incluso no seu acesso</span>
            <h3 className="mt-2 text-2xl md:text-3xl font-black leading-tight text-green-title">Comunidade gratuita <span className="text-primary">exclusiva</span></h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">Suas ideias ganham companhia! Participe da nossa comunidade de impressão 3D para tirar dúvidas, compartilhar suas criações e trocar experiências.</p>
            <ul className="mt-5 space-y-3 text-sm font-bold text-green-title text-left">
              <li className="flex items-center gap-3"><MessageCircle className="h-5 w-5 shrink-0 text-primary" /> Tire dúvidas sobre impressão 3D</li>
              <li className="flex items-center gap-3"><Lightbulb className="h-5 w-5 shrink-0 text-primary" /> Troque ideias para novos projetos</li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 shrink-0 text-cta" /> Acesso gratuito, sem custo adicional</li>
            </ul>
          </div>
        </article>
        <div className="text-center mt-8 flex flex-col items-center">
          <Button asChild className="h-auto whitespace-normal"><a href="#oferta" className="prime-cta inline-block w-full md:w-auto bg-cta hover:bg-cta-hover text-primary-foreground font-black text-sm md:text-xl px-10 py-5 rounded-full text-center  transition-all uppercase tracking-wide mb-2">GARANTIR A BIBLIOTECA COM BÔNUS</a></Button>
          <p className="text-xs md:text-sm text-[#334155] font-semibold">🛡️ Garantia de 7 dias • Acesso digital</p>
        </div>
      </div>
    </section>
  );
};
export default BonusSection;
