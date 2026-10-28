import { useState, useEffect } from "react";
import { CheckCircle2, PackageCheck, Sparkles } from "lucide-react";

const SalesNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setShow(true);
      window.setTimeout(() => setShow(false), 4600);
    };
    const interval = window.setInterval(showNotification, 20000);
    const initial = window.setTimeout(showNotification, 7000);
    return () => { window.clearInterval(interval); window.clearTimeout(initial); };
  }, []);

  return (
    <div className={`fixed bottom-3 left-3 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`} style={{ pointerEvents: "none" }} aria-live="polite">
      <div className="flex w-[270px] items-start gap-3 rounded-2xl border border-emerald-200 bg-[#F0FFF4] px-3.5 py-3 text-slate-800 shadow-[0_8px_28px_rgba(16,185,129,0.22)]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white shadow-sm">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="min-w-0 flex-1 text-xs leading-snug">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="font-extrabold text-emerald-950">Prime Projetos 3D</span>
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          </div>
          <p className="flex items-center gap-1 font-bold text-emerald-800"><PackageCheck className="h-3.5 w-3.5 shrink-0" /> Acesso à biblioteca digital</p>
          <p className="mt-1 text-slate-700">Explore modelos e encontre sua próxima ideia para imprimir.</p>
          <p className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-emerald-700/80">Prévia demonstrativa · não representa uma venda real</p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
