import { useState, useEffect } from "react";
import { CheckCircle2, PackageCheck } from "lucide-react";

const SalesNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setShow(true);
      window.setTimeout(() => setShow(false), 3600);
    };
    const interval = window.setInterval(showNotification, 15000);
    const initial = window.setTimeout(showNotification, 6500);
    return () => { window.clearInterval(interval); window.clearTimeout(initial); };
  }, []);

  return (
    <div className={`fixed bottom-3 left-3 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`} style={{ pointerEvents: "none" }} aria-live="polite">
      <div className="bg-white text-slate-800 px-2.5 py-2 rounded-xl shadow-[0_5px_18px_rgba(22,163,74,0.18)] flex items-center gap-2 w-[220px] border border-green-200">
        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 text-green-700" /></div>
        <div className="text-xs leading-tight min-w-0">
          <p className="font-extrabold text-slate-900">Prime Projetos 3D</p>
          <p className="text-green-700 font-semibold mt-0.5 flex items-center gap-1"><PackageCheck className="w-3 h-3 shrink-0" /> Biblioteca digital</p>
          <p className="text-slate-500 text-[10px] mt-0.5">Acesso após confirmação da compra</p>
        </div>
      </div>
    </div>
  );
};
export default SalesNotification;
