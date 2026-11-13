import { motion } from "framer-motion";

const printers = ["Creality", "Anycubic", "Elegoo", "Artillery", "Kingroon", "Prusa", "FlashForge"];
const slicers = ["PrusaSlicer", "Bambu Studio", "OrcaSlicer", "ChiTuBox", "Simplify3D", "Cura"];

const CompatibilitySection = () => (
  <section className="overflow-hidden bg-[#07090d] px-4 py-12 md:py-16 text-white">
    <div className="mx-auto max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <h2 className="text-3xl md:text-5xl font-black leading-tight">Compatível com diversas <span className="text-orange-500">impressoras 3D</span></h2>
        <p className="mx-auto mt-4 max-w-4xl text-base md:text-xl leading-relaxed text-slate-300">Os arquivos STL podem ser utilizados em diferentes fluxos de impressão 3D. A preparação e a compatibilidade final dependem do fatiador, equipamento e configurações utilizados.</p>
      </motion.div>
      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-700 bg-[#0b0f15] p-2 md:p-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {printers.map((name, i) => <div key={name} className="flex min-h-[58px] items-center justify-center rounded-2xl border border-slate-700 bg-[#11161e] px-2 py-3 text-center text-sm md:text-base font-black text-slate-100">{name}</div>)}
        </div>
      </div>
      <h3 className="mt-9 text-center text-2xl md:text-3xl font-black">Use no seu <span className="text-sky-400">fatiador preferido</span></h3>
      <div className="mt-5 overflow-hidden rounded-3xl border border-slate-700 bg-[#0b0f15] p-2 md:p-3">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
          {slicers.map(name => <div key={name} className="flex min-h-[58px] items-center justify-center rounded-2xl border border-slate-700 bg-[#11161e] px-2 py-3 text-center text-sm md:text-base font-black text-slate-100">{name}</div>)}
        </div>
      </div>
    </div>
  </section>
);

export default CompatibilitySection;
