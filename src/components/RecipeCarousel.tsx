import SectionCTA from "@/components/SectionCTA";
import { motion } from "framer-motion";
import organizadores from "@/assets/categorias/organizadores.webp.asset.json";
import vasos from "@/assets/categorias/vasos.webp.asset.json";
import chaveiros from "@/assets/categorias/chaveiros.webp.asset.json";
import articulados from "@/assets/categorias/articulados.webp.asset.json";
import personagens from "@/assets/categorias/personagens.webp.asset.json";
import copa2026 from "@/assets/categorias/copa-2026.webp.asset.json";
import natal from "@/assets/categorias/natal.webp.asset.json";
import pontosTuristicos from "@/assets/categorias/pontos-turisticos.webp.asset.json";
import brinquedos from "@/assets/categorias/brinquedos.webp.asset.json";
import decoracaoSala from "@/assets/categorias/decoracao-sala.webp.asset.json";
import veiculos from "@/assets/categorias/veiculos.webp.asset.json";
import canecas from "@/assets/categorias/canecas.webp.asset.json";
import mascotesFutebol from "@/assets/categorias/mascotes-futebol.webp.asset.json";
import utensiliosCozinha from "@/assets/categorias/utensilios-cozinha.webp.asset.json";
import aeromodelos from "@/assets/categorias/aeromodelos.webp.asset.json";
import armasFicticias from "@/assets/categorias/armas-ficticias.webp.asset.json";
import funkos from "@/assets/categorias/funkos.webp.asset.json";

const models = [
  { img: organizadores.url, title: "Organizadores", desc: "Suportes e organizadores funcionais" },
  { img: vasos.url, title: "Vasos Decorativos", desc: "Vasos e cachepôs para seus espaços" },
  { img: chaveiros.url, title: "Chaveiros", desc: "Escudos de times e personalizados" },
  { img: articulados.url, title: "Articulados", desc: "Dobráveis com movimento" },
  { img: personagens.url, title: "Personagens", desc: "Desenhos animados e figuras fictícias" },
  { img: copa2026.url, title: "Copa 2026", desc: "Coleção Copa do Mundo 2026" },
  { img: natal.url, title: "Natal", desc: "Decorações para o fim de ano" },
  { img: pontosTuristicos.url, title: "Pontos Turísticos", desc: "Minimundo de monumentos" },
  { img: brinquedos.url, title: "Brinquedos Coloridos", desc: "Figuras fofas para presentear" },
  { img: decoracaoSala.url, title: "Decoração de Sala", desc: "Luminárias, vasos e enfeites" },
  { img: veiculos.url, title: "Veículos", desc: "Carros, caminhões e motos" },
  { img: canecas.url, title: "Canecas Personalizadas", desc: "Canecas diferenciadas para vender" },
  { img: mascotesFutebol.url, title: "Mascotes do Futebol", desc: "Mascotes dos times brasileiros" },
  { img: utensiliosCozinha.url, title: "Utensílios de Cozinha", desc: "Suportes e organizadores práticos" },
  { img: aeromodelos.url, title: "Aeromodelos", desc: "Aviões, drones e planadores" },
  { img: armasFicticias.url, title: "Armas Fictícias", desc: "Peças decorativas para cosplay" },
  { img: funkos.url, title: "Funkos 3D", desc: "Heróis e personagens geek" },
];
const doubled = [...models, ...models];
const CARD_W = 272;

const RecipeCarousel = () => (
  <section className="py-8 md:py-10 bg-[#EFF7FF] overflow-hidden">
    <div className="container mx-auto px-4 mb-5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full border border-[#FFD700]">IDEIAS PARA SUA PRÓXIMA IMPRESSÃO</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#17324D] leading-tight mb-3">O que sua impressora pode <span className="text-blue-700">criar a partir de hoje?</span></h2>
        <p className="text-[#334155] text-base md:text-lg font-medium max-w-2xl mx-auto">De utilidades a peças decorativas e colecionáveis: explore possibilidades para escolher o próximo projeto.</p>
      </motion.div>
    </div>
    <div className="relative">
      <div className="flex animate-marquee" style={{ width: `${doubled.length * CARD_W}px` }}>
        {doubled.map((model, i) => (
          <div key={i} className="flex-shrink-0 w-64 mx-2">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-blue-100 h-full flex flex-col">
              <div className="h-40 bg-slate-100">
                <img src={model.img} alt={model.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="font-extrabold text-[#17324D] text-base">{model.title}</p>
                <p className="text-slate-500 text-xs mt-1">{model.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SectionCTA label="VER TODOS OS MODELOS" />
    </div>
  </section>
);

export default RecipeCarousel;
