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
      <h1 className="hero-title max-w-4xl text-[31px] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight mb-5">
        <span className="block text-[#17324D]">Transforme sua impressora 3D</span>
        <span className="block text-[#1676D2]">em uma máquina de criar</span>
        <span className="block text-[#17324D]">produtos que <span className="text-[#E85D25]">vendem todos os dias</span></span>
      </h1>
      <p className="max-w-3xl text-muted-foreground text-base md:text-xl leading-relaxed mb-5">Tenha acesso a uma biblioteca com mais de <strong className="inline-block rounded-md bg-primary text-primary-foreground px-2 py-0.5">100 mil arquivos STL</strong> prontos para imprimir e vender na:</p>
      <img src={marketplaces.url} alt="Mercado Livre, Shopee, TikTok Shop e sua cidade" className="w-full max-w-[310px] md:max-w-[350px] h-auto mb-4" />
      <img src={printer.url} alt="Impressora 3D com modelos articulados, vasos, miniaturas e peças decorativas" className="w-full max-w-[300px] md:max-w-[340px] aspect-square object-cover rounded-2xl shadow-lg border border-blue-100" loading="eager" />
      <Button asChild className="mt-6 h-auto w-full max-w-md whitespace-normal bg-cta hover:bg-cta-hover text-primary-foreground font-black text-base md:text-lg px-6 py-4 rounded-lg">
        <a href="#oferta">QUERO COMEÇAR AGORA <span aria-hidden="true">↓</span></a>
      </Button>
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex justify-center -space-x-2" aria-label="Fotos ilustrativas de perfis">
          {profiles.map((profile, i) => <img key={profile.asset_id} src={profile.url} alt={`Perfil ilustrativo ${i + 1}`} className="w-11 h-11 rounded-full object-cover border-2 border-background" />)}
        </div>
        <div className="flex gap-1 text-gold" aria-label="Cinco estrelas decorativas">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
        <p className="text-sm md:text-base font-extrabold text-[#17324D]">4,9 / 5,0 <span className="font-medium text-muted-foreground">• 3742 avaliações!</span></p>
      </div>
    </div>
  </section>
);
export default HeroSection;
