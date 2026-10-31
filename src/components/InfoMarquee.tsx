import { useMemo } from "react";
import { Zap, Printer, Layers3, Lightbulb, ShoppingBag } from "lucide-react";

const items = [
  { icon: Layers3, text: "+100 MIL MODELOS 3D PARA EXPLORAR" },
  { icon: Printer, text: "IDEIAS PARA TIRAR SUA IMPRESSORA DO PAPEL" },
  { icon: ShoppingBag, text: "ENCONTRE PRODUTOS PARA TESTAR E VENDER" },
  { icon: Lightbulb, text: "27 CATEGORIAS PARA INSPIRAR SEUS PROJETOS" },
  { icon: Zap, text: "ACESSO DIGITAL RÁPIDO E ORGANIZADO" },
];

const InfoMarquee = () => {
  const repeated = useMemo(() => [...items, ...items], []);
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#123B67] via-[#1769AA] to-[#123B67] py-4 md:py-5 text-white shadow-inner" aria-label="Destaques da biblioteca Prime Projetos 3D">
      <div className="flex w-max animate-marquee items-center">
        {repeated.map(({ icon: Icon, text }, index) => (
          <div key={index} className="mx-5 md:mx-8 flex shrink-0 items-center gap-2.5">
            <Icon className="h-4 w-4 text-[#FFD84D] md:h-5 md:w-5" strokeWidth={2.5} />
            <span className="text-[11px] font-extrabold tracking-wide md:text-sm drop-shadow-sm">{text}</span>
            <span className="ml-3 text-[#FFD84D]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoMarquee;
