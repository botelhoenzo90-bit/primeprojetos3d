import { motion } from "framer-motion";
const printers = ["Creality", "Anycubic", "Elegoo", "Artillery", "Kingroon", "Prusa", "FlashForge"];
const slicers = ["PrusaSlicer", "Bambu Studio", "OrcaSlicer", "ChiTuBox", "Simplify3D", "Cura"];
const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="w-full overflow-hidden">
    <div className={`flex w-max gap-3 py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {[...items, ...items, ...items, ...items].map((name, index) => <div key={`${name}-${index}`} className="flex min-w-[150px] md:min-w-[190px] min-h-[62px] items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 text-center text-base md:text-lg font-extrabold text-[#17324D] shadow-sm">{name}</div>)}
    </div>
  </div>
);
const CompatibilitySection = () => (
  <section className="w-full overflow-hidden bg-cream py-12 md:py-16 text-[#17324D]">
    <div className="w-full">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black leading-tight">Compatível com diversas <span className="text-cta">impressoras 3D</span></h2>
        <p className="mx-auto mt-4 max-w-4xl text-base md:text-xl leading-relaxed text-slate-600">Os arquivos STL podem ser utilizados em diferentes fluxos de impressão 3D. A preparação e a compatibilidade final dependem do fatiador, equipamento e configurações utilizados.</p>
      </motion.div>
      <div className="mt-7 w-full"><MarqueeRow items={printers} /></div>
      <h3 className="mt-8 mb-3 px-4 text-center text-2xl md:text-3xl font-black">Use no seu <span className="text-[#2677C9]">fatiador preferido</span></h3>
      <div className="w-full"><MarqueeRow items={slicers} reverse /></div>
    </div>
  </section>
);
export default CompatibilitySection;