import { Printer, Layers } from "lucide-react";

const printers = ["Creality", "Anycubic", "Elegoo", "Artillery", "Kingroon", "Prusa", "FlashForge"];
const slicers = ["PrusaSlicer", "Bambu Studio", "OrcaSlicer", "ChiTuBox", "Simplify3D", "Cura"];

const CompatibilityCarousel = ({ title, items, icon: Icon, duration }: { title: string; items: string[]; icon: typeof Printer; duration: string }) => (
  <div className="min-w-0 w-full">
    <h3 className="mb-3 flex items-center justify-center gap-2 text-sm sm:text-base font-extrabold text-green-title">
      <Icon className="h-4 w-4 shrink-0 text-primary" />
      {title}
    </h3>
    <div className="compatibility-marquee w-full overflow-hidden" aria-label={title}>
      <div className="compatibility-marquee-track flex w-max" style={{ animationDuration: duration }}>
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} aria-hidden={copy > 0} className="flex shrink-0 gap-3 pr-3">
            {items.map((name) => (
              <div key={name} className="flex min-h-[58px] w-[138px] shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 px-3 py-3 text-center text-sm font-extrabold leading-tight text-green-title sm:w-[158px]">
                {name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CompatibilitySection = () => (
  <section className="bg-sage-light py-8 md:py-11 text-green-title overflow-hidden" aria-label="Compatibilidade">
    <div className="w-full">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-green-title">
          Compatível com diversas <span className="text-heading-highlight">impressoras 3D</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
          Arquivos STL para diferentes impressoras. Ajuste o arquivo no fatiador de acordo com seu equipamento.
        </p>
      </div>
      <style>{`
        @keyframes compatibility-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .compatibility-marquee-track {
          animation-name: compatibility-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .compatibility-marquee-track { animation-play-state: paused; }
        }
      `}</style>
      <div className="mt-6 space-y-5">
        <CompatibilityCarousel title="Impressoras 3D" items={printers} icon={Printer} duration="26s" />
        <CompatibilityCarousel title="Programas fatiadores" items={slicers} icon={Layers} duration="23s" />
      </div>
    </div>
  </section>
);

export default CompatibilitySection;
