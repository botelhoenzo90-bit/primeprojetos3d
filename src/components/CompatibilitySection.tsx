import { Printer, Layers } from "lucide-react";

const printers = ["Creality", "Anycubic", "Elegoo", "Artillery", "Kingroon", "Prusa", "FlashForge"];
const slicers = ["PrusaSlicer", "Bambu Studio", "OrcaSlicer", "ChiTuBox", "Simplify3D", "Cura"];

const CompatibilityCarousel = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof Printer }) => (
  <div className="min-w-0 w-full">
    <h3 className="mb-3 flex items-center justify-center gap-2 text-sm sm:text-base font-extrabold text-[#17324D]">
      <Icon className="h-4 w-4 shrink-0 text-[#1676D2]" />
      {title}
    </h3>
    <div className="compatibility-carousel flex w-full min-w-0 gap-3 overflow-x-auto overscroll-x-contain pb-3 snap-x snap-mandatory" aria-label={title}>
      {items.map((name) => (
        <div key={name} className="flex min-h-[58px] w-[138px] shrink-0 snap-start items-center justify-center rounded-xl border border-blue-200 bg-blue-50/70 px-3 py-3 text-center text-sm font-extrabold leading-tight text-[#17324D] sm:w-[158px]">
          {name}
        </div>
      ))}
    </div>
  </div>
);

const CompatibilitySection = () => (
  <section className="bg-[#F2F7FC] py-8 md:py-11 text-[#17324D]" aria-label="Compatibilidade">
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#17324D]">
          Compatível com diversas <span className="text-[#1676D2]">impressoras 3D</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
          Arquivos STL para diferentes impressoras. Ajuste o arquivo no fatiador de acordo com seu equipamento.
        </p>
      </div>
      <div className="mt-6 space-y-5">
        <CompatibilityCarousel title="Impressoras 3D" items={printers} icon={Printer} />
        <CompatibilityCarousel title="Programas fatiadores" items={slicers} icon={Layers} />
      </div>
    </div>
  </section>
);

export default CompatibilitySection;
