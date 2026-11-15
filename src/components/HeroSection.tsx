import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/topo/logo.png.asset.json";
import marketplaces from "@/assets/topo/marketplaces-transparent.webp.asset.json";
import printer from "@/assets/topo/impressora-oficina.webp.asset.json";
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
      <img src={logo.url} alt="Prime Biblioteca 3D" className="w-48 md:w-64 h-auto mb-5" loading="eager" />
      <div className="hero-title mb-5 w-full max-w-5xl text-center" role="heading" aria-level={1}>
        <div className="whitespace-nowrap text-[clamp(0.82rem,4.15vw,3.45rem)] font-black italic leading-[1.08] tracking-[-0.055em] text-white [font-family:Arial_Black,Arial,sans-serif] [text-shadow:0_4px_0_#071b45,0_7px_12px_rgba(0,0,0,.55)]">
          <span>Transforme sua </span><span className="text-[#ff9d00]">Impressora 3D</span>
        </div>
        <div className="my-2 rounded-[1.1rem] border-[3px] border-[#ffb21b] bg-gradient-to-b from-[#ff9b00] via-[#ff6500] to-[#ed3d00] px-2 py-2 shadow-[0_5px_0_#b92d00,0_9px_18px_rgba(235,76,0,.38)] md:my-3 md:rounded-[1.5rem] md:px-5 md:py-3">
          <div className="whitespace-nowrap text-[clamp(0.88rem,4.25vw,3.5rem)] font-black italic leading-none tracking-[-0.055em] text-white [font-family:Arial_Black,Arial,sans-serif] [text-shadow:0_3px_5px_rgba(116,31,0,.5)]">
            em uma Máquina de Criar
          </div>
        </div>
        <div className="relative rounded-[1.1rem] border-[3px] border-[#0759ce] bg-gradient-to-b from-[#073c9b] via-[#05286e] to-[#031747] px-2 py-2 shadow-[0_5px_0_#03143c,0_10px_22px_rgba(0,53,150,.5)] md:rounded-[1.5rem] md:px-5 md:py-3">
          <div className="whitespace-nowrap text-[clamp(0.72rem,3.75vw,3.05rem)] font-black italic leading-tight tracking-[-0.055em] text-white [font-family:Arial_Black,Arial,sans-serif] [text-shadow:0_3px_5px_rgba(0,0,0,.55)]">
            <span>Produtos que Vendem </span><span className="text-[#ff9d00]">Todos os Dias</span>
          </div>
          <div className="mx-auto mt-1 h-[4px] w-2/5 rounded-full bg-gradient-to-r from-transparent via-[#ff9d00] to-transparent md:mt-2 md:h-[6px]" />
        </div>
      </div>
      <p className="max-w-3xl text-muted-foreground text-base md:text-xl leading-relaxed mb-5">Tenha acesso a uma biblioteca com mais de <strong className="inline-block rounded-md bg-primary text-primary-foreground px-2 py-0.5">100 mil arquivos STL</strong> prontos para imprimir e vender na:</p>
      <img src={marketplaces.url} alt="Mercado Livre, Shopee, TikTok Shop e sua cidade" className="w-full max-w-[310px] md:max-w-[350px] h-auto mb-4" />
      <img src={printer.url} alt="Impressora 3D com modelos articulados, vasos, miniaturas e peças decorativas" className="w-full max-w-[300px] md:max-w-[340px] aspect-square object-cover rounded-2xl shadow-lg border border-blue-100" loading="eager" />
      <Button asChild className="mt-6 h-auto w-full max-w-md whitespace-normal bg-cta hover:bg-cta-hover prime-cta text-primary-foreground font-black text-base md:text-lg px-6 py-4 rounded-lg">
        <a href="#oferta">QUERO COMEÇAR AGORA <span aria-hidden="true">↓</span></a>
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
