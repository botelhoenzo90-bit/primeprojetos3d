import { Printer, Layers } from "lucide-react";

const printers = ["Creality", "Anycubic", "Elegoo", "Artillery", "Kingroon", "Prusa", "FlashForge"];
const slicers = ["PrusaSlicer", "Bambu Studio", "OrcaSlicer", "ChiTuBox", "Simplify3D", "Cura"];

const CompatibilityGroup = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof Printer }) => (
  <div className="min-w-0 w-full rounded-2xl border border-blue-100 bg-white p-4 md:p-5 shadow-sm">
    <h3 className="mb-4 flex items-center justify-center gap-2 text-base md:text-lg font-extrabold text-[#17324D]">
      <Icon className="h-5 w-5 shrink-0 text-[#1676D2]" />
      {title}
    </h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      {items.map((name) => (
        <li key={name} className="flex min-h-11 min-w-0 items-center justify-center rounded-xl border border-blue-100 bg-[#F2F7FC] px-2 py-2 text-center text-xs sm:text-sm font-bold leading-tight text-[#17324D] break-words">
          {name}
        </li>
      ))}
    </ul>
  </div>
);

const CompatibilitySection = () => (
  <section className="bg-[#F2F7FC] py-9 md:py-12 text-[#17324D]" aria-label="Compatibilidade">
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#17324D]">
          Compatível com diversas <span className="text-[#1676D2]">impressoras 3D</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
          Arquivos STL para diferentes impressoras. Ajuste o arquivo no fatiador de acordo com seu equipamento.
        </p>
      </div>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <CompatibilityGroup title="Impressoras 3D" items={printers} icon={Printer} />
        <CompatibilityGroup title="Programas fatiadores" items={slicers} icon={Layers} />
      </div>
    </div>
  </section>
);

export default CompatibilitySection;
