import { useState, useEffect } from "react";
import { CheckCircle2, PackageCheck } from "lucide-react";

const examples = [
  { name: "Maria S.", city: "Recife - PE" },
  { name: "Carlos R.", city: "São Paulo - SP" },
  { name: "Ana P.", city: "Curitiba - PR" },
  { name: "Juliana M.", city: "Belo Horizonte - MG" },
  { name: "Rafael L.", city: "Fortaleza - CE" },
];

const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(examples[0]);
  useEffect(() => {
    const showNotification = () => {
      setItem(examples[Math.floor(Math.random() * examples.length)]);
      setShow(true);
      window.setTimeout(() => setShow(false), 4300);
    };
    const interval = window.setInterval(showNotification, 12000);
    const initial = window.setTimeout(showNotification, 5000);
    return () => { window.clearInterval(interval); window.clearTimeout(initial); };
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`} style={{ pointerEvents: "none" }} aria-live="polite">
      <div className="bg-white text-slate-800 px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgba(22,163,74,0.22)] flex items-start gap-3 w-[285px] border border-green-200">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 className="w-5 h-5 text-green-700" /></div>
        <div className="text-sm leading-tight min-w-0">
          <p className="font-extrabold text-slate-900">{item.name}</p>
          <p className="text-slate-500 text-xs mt-0.5">{item.city}</p>
          <p className="text-green-700 text-xs font-bold mt-2 flex items-center gap-1"><PackageCheck className="w-3.5 h-3.5 shrink-0" /> Adquiriu o Pack de Projetos 3D! 🎉</p><p className="text-[9px] text-slate-400 mt-1">Exemplo visual — conecte às vendas reais</p>
        </div>
      </div>
    </div>
  );
};
export default SalesNotification;
