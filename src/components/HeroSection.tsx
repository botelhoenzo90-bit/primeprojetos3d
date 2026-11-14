import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/topo/logo.png.asset.json";
import marketplaces from "@/assets/topo/marketplaces.webp.asset.json";
import printer from "@/assets/topo/impressora.webp.asset.json";
import profiles from "@/assets/topo/perfis.webp.asset.json";
const HeroSection = () => (
  <section className="prime-hero bg-cream text-green-title py-6 md:py-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
      <img src={logo.url} alt="Prime Biblioteca 3D" className="w-48 md:w-64 h-auto mb-5" loading="eager" />
      <h1 className="hero-title max-w-4xl text-[32px] sm:text-4xl md:text-6xl font-black leading-[1.12] mb-4">
        Transforme sua Impressora 3D em uma <span className="text-cta">Máquina de Criar Produtos que Vendem Todos os Dias</span>
      </h1>
      <p className="max-w-3xl text-muted-foreground text-base md:text-xl leading-relaxed mb-4">Mais de <strong className="text-green-title">100.000 arquivos STL</strong> para imprimir e explorar novas oportunidades de venda.</p>
      <img src={marketplaces.url} alt="Mercado Livre, Shopee, TikTok Shop e sua cidade" className="w-full max-w-[390px] h-auto mb-5" />
      <img src={printer.url} alt="Impressora 3D com modelos articulados, vasos, miniaturas e peças decorativas" className="w-full max-w-[620px] aspect-[3/2] object-cover rounded-lg" loading="eager" fetchPriority="high" />
      <Button asChild className="mt-6 h-auto w-full max-w-md whitespace-normal bg-cta hover:bg-cta-hover text-primary-foreground font-black text-base md:text-lg px-6 py-4 rounded-lg">
        <a href="#oferta">QUERO COMEÇAR AGORA <span aria-hidden="true">↓</span></a>
      </Button>
      <div className="mt-4 flex flex-col items-center gap-2">
        <img src={profiles.url} alt="Imagem ilustrativa de perfis" className="w-44 h-auto rounded-lg" />
        <div className="flex gap-1 text-gold" aria-label="Cinco estrelas decorativas">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
      </div>
    </div>
  </section>
);
export default HeroSection;
