import { useState, useEffect } from "react";
import { CheckCircle2, PackageCheck, MapPin, Sparkles } from "lucide-react";

const SalesNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setShow(true);
      window.setTimeout(() => setShow(false), 4200);
    };
    const interval = window.setInterval(showNotification, 18000);
    const initial = window.setTimeout(showNotification, 6500);
    return () => { window.clearInterval(interval); window.clearTimeout(initial); };
  }, []);

  return (
    <div className={`fixed bottom-3 left-3 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`} style={{ pointerEvents: "none" }} aria-live="polite">
      <div className="bg-[#F0FFF4] text-slate-800 px-3 py-2.5 rounded-xl shadow-[0_6px_22px_rgba(34,197,94,0.24)] flex items-start gap-2.5 w-[235px] border border-green-300">
        <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 text-green-800" /></div>
        <div className="text-xs leading-tight min-w-0">
          <p className="font-extrabold text-green-900 flex items-center gap-1"><Sparkles className="w-3 h-3" /> Prime Projetos 3D</p>
          <p className="text-green-800 font-bold mt-1 flex items-center gap-1"><MapPin className="w-3 h-3 shrink-0" /> Ana • Curitiba, PR</p>
          <p className="text-slate-700 text-[11px] mt-1">Sua próxima ideia pode virar seu próximo projeto!</p>
          <p className="text-[9px] text-green-800/80 mt-1 font-semibold">Exemplo ilustrativo de notificação</p>
        </div>
      </div>
    </div>
  );
};
export default SalesNotification;
