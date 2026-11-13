import { motion } from "framer-motion";
import { ShieldCheck, Puzzle } from "lucide-react";
const marketplaces = [
  { name: "Shopee", className: "bg-[#EE4D2D] text-white", mark: "S" },
  { name: "Mercado Livre", className: "bg-[#FFE600] text-[#17324D]", mark: "🤝" },
  { name: "TikTok", className: "bg-[#111111] text-white", mark: "♪" },
  { name: "Amazon", className: "bg-white text-[#111827]", mark: "a" },
];
const HeroSection = () => (
  <section className="relative overflow-hidden bg-cream text-green-title py-9 md:py-14">
    <div className="max-w-6xl mx-auto px-4 relative z-10"><div className="flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-[#FFD700] bg-[#FFF7CC] px-5 py-2.5 mb-6 shadow-sm"><Puzzle className="w-5 h-5 text-[#2677C9]" /><span className="text-[11px] sm:text-sm md:text-base font-black uppercase tracking-wide text-[#17324D]">Biblioteca de Arquivos para Impressão 3D</span></div>
      <h1 className="max-w-6xl text-[35px] sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight mb-6 text-green-title">
        Transforme sua <span className="text-[#2677C9]">Impressora 3D</span> em uma
        <span className="block mt-1"><span className="inline-block rounded-xl bg-[#FFD700] px-3 py-1 text-[#17324D] shadow-sm">Máquina de Criar Produtos</span></span>
        <span className="block mt-1 text-cta">que Vendem Todos os Dias</span>
      </h1>
      <p className="max-w-4xl text-[#334155] text-base md:text-2xl leading-relaxed mb-6">Tenha acesso a uma biblioteca com <span className="inline-block rounded-lg bg-[#2677C9] px-2 py-0.5 font-extrabold text-white">+ de 100.000 arquivos STL</span> prontos para imprimir e vender na:</p>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">{marketplaces.map((market) => <div key={market.name} className={`flex min-w-[138px] sm:min-w-[170px] items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-base md:text-lg font-extrabold shadow-sm ${market.className}`}><span className="text-2xl leading-none">{market.mark}</span><span>{market.name}</span></div>)}</div>
      <div className="w-full max-w-[310px] sm:max-w-[360px] mb-2"><div className="aspect-square overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-lg"><img src="/imagens/bonus/articulados.webp" alt="Modelos articulados prontos para impressão 3D" className="h-full w-full object-cover" loading="eager" /></div></div>
      <motion.a href="#oferta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-7 inline-flex items-center justify-center gap-2 w-full md:w-auto bg-cta hover:opacity-90 text-white font-black text-base md:text-xl px-10 md:px-14 py-5 rounded-xl text-center shadow-lg transition-all uppercase">QUERO COMEÇAR AGORA <span aria-hidden="true">↓</span></motion.a>
      <p className="mt-3 text-[10px] md:text-xs text-slate-500 font-medium"><ShieldCheck className="inline h-4 w-4 mr-1 text-green-600" /> Produto digital • Acesso enviado após a confirmação do pagamento</p>
    </div></div>
  </section>
);
export default HeroSection;