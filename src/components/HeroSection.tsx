import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/topo/logo.png.asset.json";
import marketplaces from "@/assets/topo/marketplaces-transparent.webp.asset.json";
import headline from "@/assets/topo/titulo-impressora.webp.asset.json";
import printer from "@/assets/topo/biblioteca-100mil.webp.asset.json";
import perfil1 from "@/assets/perfis/perfil-1.webp.asset.json";
import perfil2 from "@/assets/perfis/perfil-2.webp.asset.json";
import perfil3 from "@/assets/perfis/perfil-3.webp.asset.json";
import perfil4 from "@/assets/perfis/perfil-4.webp.asset.json";
import perfil5 from "@/assets/perfis/perfil-5.webp.asset.json";
import perfil6 from "@/assets/perfis/perfil-6.webp.asset.json";
const profiles = [perfil1, perfil2, perfil3, perfil4, perfil5, perfil6];
const HeroSection = () => (
  <section className="prime-hero bg-cream text-green-title py-6 md:py-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
      <img src={logo.url} alt="Prime Biblioteca 3D" className="w-48 md:w-56 h-auto mb-3" loading="eager" />
      <h1 className="mb-4 w-full max-w-4xl">
        <img src={headline.url} alt="Transforme sua Impressora 3D em uma Máquina de Criar Produtos que Vendem Todos os Dias" className="block w-full h-auto" loading="eager" />
      </h1>
      <p className="hero-subtitle w-full max-w-5xl text-green-title text-base sm:text-lg md:text-2xl font-extrabold leading-snug md:leading-tight mb-5"><span className="md:block">Tenha acesso a uma biblioteca com mais de</span>{" "}<span className="md:block"><strong className="inline-block whitespace-nowrap rounded-md bg-primary text-primary-foreground px-1.5 py-0.5">100 mil arquivos STL</strong> prontos para imprimir e vender no:</span></p>
      <img src={marketplaces.url} alt="Mercado Livre, Shopee, TikTok Shop e sua cidade" className="w-full max-w-[245px] md:max-w-[295px] h-auto mb-3" />
      <img src={printer.url} alt="Mais de 100.000 arquivos STL para impressão 3D" className="w-full max-w-[370px] md:max-w-[460px] aspect-square object-cover rounded-3xl shadow-lg" loading="eager" />
      <Button asChild className="mt-4 h-auto w-full max-w-md whitespace-normal bg-cta hover:bg-cta-hover prime-cta text-primary-foreground font-black text-base md:text-lg px-6 py-4 rounded-lg">
        <a href="#oferta">GARANTIR MEU ACESSO AGORA <span aria-hidden="true">↓</span></a>
      </Button>
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex justify-center -space-x-2" aria-label="Fotos ilustrativas de perfis">
          {profiles.map((profile, i) => <img key={profile.asset_id} src={profile.url} alt={`Perfil ilustrativo ${i + 1}`} className="w-11 h-11 rounded-full object-cover border-2 border-background" />)}
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="flex shrink-0 gap-0.5 text-gold" aria-label="Cinco estrelas decorativas">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-4 w-4 sm:h-[18px] sm:w-[18px] fill-current" />)}</div>
          <p className="whitespace-nowrap text-xs sm:text-sm md:text-base font-extrabold text-[#17324D]">4,9 / 5,0 <span className="font-medium text-muted-foreground">• 3742 avaliações!</span></p>
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
