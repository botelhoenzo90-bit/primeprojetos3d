import { Printer, Layers } from "lucide-react";
const printers = ["Creality", "Anycubic", "Elegoo", "Artillery", "Kingroon", "Prusa", "FlashForge"];
const slicers = ["PrusaSlicer", "Bambu Studio", "OrcaSlicer", "ChiTuBox", "Simplify3D", "Cura"];
const CompatibilitySection = () => (
  <section className="bg-cream py-6 md:py-8 text-green-title" aria-label="Compatibilidade">
    <div className="mx-auto max-w-4xl px-4">
      <h2 className="text-xl md:text-3xl font-black text-center leading-tight">Compatível com diversas <span className="text-cta">impressoras 3D</span></h2>
      <p className="mt-2 text-xs md:text-sm text-muted-foreground text-center">Arquivos STL para diferentes impressoras. Ajuste no fatiador conforme seu equipamento.</p>
      <div className="mt-5 grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="border-t border-border pt-3">
          <h3 className="flex items-center gap-2 text-sm font-bold mb-2"><Printer className="w-4 h-4 text-primary" /> Impressoras</h3>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{printers.join(" · ")}</p>
        </div>
        <div className="border-t border-border pt-3">
          <h3 className="flex items-center gap-2 text-sm font-bold mb-2"><Layers className="w-4 h-4 text-primary" /> Fatiadores</h3>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{slicers.join(" · ")}</p>
        </div>
      </div>
    </div>
  </section>
);
export default CompatibilitySection;
