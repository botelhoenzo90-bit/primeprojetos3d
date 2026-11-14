import SectionCTA from "@/components/SectionCTA";
import logo from "@/assets/topo/logo.png.asset.json";
const FooterSection = () => (
  <footer className="bg-green-title py-12 px-4 text-center">
    <div className="max-w-4xl mx-auto space-y-4">
      <img src={logo.url} alt="Prime Biblioteca 3D" className="w-48 md:w-56 h-auto mx-auto mb-5" loading="lazy" />
      <p className="text-cream/70 text-xs md:text-sm font-body leading-relaxed max-w-2xl mx-auto">
        Os arquivos são digitais e os resultados de impressão variam conforme modelo, impressora, material, fatiador e configurações utilizadas. Verifique os direitos de uso de cada arquivo antes de comercializar peças.
      </p>
      <SectionCTA label="ACESSAR A BIBLIOTECA 3D" />
      <div className="w-12 h-px bg-cream/20 mx-auto my-4"></div>
      <p className="text-cream/90 text-sm font-bold font-body">
        © 2026 Prime Projetos 3D. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default FooterSection;
