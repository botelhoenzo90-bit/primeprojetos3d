import { motion } from "framer-motion";
import { ShieldCheck, Puzzle, ShoppingBag, Music2, Mail, Users, Box } from "lucide-react";

const marketplaces = [
  { name: "Shopee", className: "bg-[#EE4D2D] text-white", mark: "S" },
  { name: "Mercado Livre", className: "bg-[#FFE600] text-[#17324D]", mark: "🤝" },
  { name: "TikTok", className: "bg-[#111111] text-white", mark: "♪" },
  { name: "Amazon", className: "bg-white text-[#111827]", mark: "a" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-black text-white py-8 md:py-12">
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 mb-5">
          <Puzzle className="w-4 h-4 text-lime-300" />
          <span className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-tight text-orange-400">BIBLIOTECA DE ARQUIVOS PARA IMPRESSÃO 3D</span>
        </div>

        <h1 className="max-w-6xl text-[34px] sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight mb-5">
          Transforme sua <span className="text-sky-400">Impressora 3D</span> em uma <span className="text-black bg-gradient-to-r from-yellow-300 to-amber-500 rounded-lg px-2 inline-block">Máquina de Criar Produtos</span> que <span className="text-amber-400">Vendem Todos os Dias</span>
        </h1>

        <p className="max-w-4xl text-white/90 text-base md:text-2xl leading-relaxed mb-6">
          Tenha acesso a uma biblioteca com <span className="inline-block rounded-lg bg-blue-600 px-2 py-0.5 font-extrabold text-white">+ de 100.000 arquivos STL</span> prontos para imprimir e vender na:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {marketplaces.map((market) => (
            <div key={market.name} className={`flex min-w-[138px] sm:min-w-[170px] items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-base md:text-lg font-extrabold shadow-lg ${market.className}`}>
              <span className="text-2xl leading-none">{market.mark}</span><span>{market.name}</span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[310px] sm:max-w-[360px] mb-7">
          <div className="aspect-square overflow-hidden rounded-2xl border border-sky-400/50 bg-[#07111d] shadow-[0_18px_60px_rgba(0,145,255,0.18)]">
            <img src="/imagens/bonus/articulados.webp" alt="Modelos articulados prontos para impressão 3D" className="h-full w-full object-cover" loading="eager" />
          </div>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-sky-500/70 bg-[#07111d]">
          <div className="flex flex-col items-center justify-center gap-1 border-b md:border-b-0 md:border-r border-sky-900/80 px-3 py-4"><Box className="h-6 w-6 text-sky-400" /><strong className="text-xl md:text-2xl font-black">+200.000</strong><span className="text-sm text-blue-100">Arquivos STL no Premium</span></div>
          <div className="flex flex-col items-center justify-center gap-1 border-b md:border-b-0 md:border-r border-sky-900/80 px-3 py-4"><span className="text-2xl text-sky-400">▦</span><strong className="text-xl md:text-2xl font-black">Categorias</strong><span className="text-sm text-blue-100">Variadas</span></div>
          <div className="flex flex-col items-center justify-center gap-1 border-r border-sky-900/80 px-3 py-4"><Mail className="h-6 w-6 text-sky-400" /><strong className="text-xl md:text-2xl font-black">Acesso</strong><span className="text-sm text-blue-100">por e-mail</span></div>
          <div className="flex flex-col items-center justify-center gap-1 px-3 py-4"><Users className="h-6 w-6 text-sky-400" /><strong className="text-xl md:text-2xl font-black">Comunidade</strong><span className="text-sm text-blue-100">3D de ofertas</span></div>
        </div>

        <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-7 inline-flex items-center justify-center gap-2 w-full md:w-auto bg-[#00C853] hover:bg-[#00B84A] text-white font-black text-base md:text-xl px-10 md:px-14 py-5 rounded-xl text-center shadow-lg shadow-green-950/30 transition-all uppercase">
          QUERO COMEÇAR AGORA <span aria-hidden="true">↓</span>
        </motion.a>
        <p className="mt-3 text-[10px] md:text-xs text-slate-400 font-medium"><ShieldCheck className="inline h-4 w-4 mr-1 text-green-400" /> Produto digital • Acesso enviado após a confirmação do pagamento</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
