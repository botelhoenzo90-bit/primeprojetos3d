import { useState, useEffect } from "react";
import { UserRound, CheckCircle2 } from "lucide-react";
const notifications = ["Novos projetos esperando pela sua criatividade.","Explore novas ideias para sua próxima impressão.","Sua biblioteca 3D está pronta para ser explorada."];
const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const showNotification = () => {
      setCurrent((value) => (value + 1) % notifications.length);
      setShow(true);
      window.setTimeout(() => setShow(false), 5200);
    };
    const interval = window.setInterval(showNotification, 14000);
    const initial = window.setTimeout(showNotification, 5000);
    return () => { window.clearInterval(interval); window.clearTimeout(initial); };
  }, []);
  return <div className={`fixed bottom-3 left-3 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`} style={{ pointerEvents: "none" }} aria-live="polite">
    <div className="flex w-[min(310px,calc(100vw-24px))] items-center gap-3 rounded-[16px] border border-emerald-100 bg-[#18A957] px-3.5 py-3 text-white shadow-[0_6px_18px_rgba(13,145,69,0.2)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15"><UserRound className="h-6 w-6" /></div>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="text-sm font-extrabold">Biblioteca Premium Prime 3D</div>
        <p className="mt-1 text-xs font-semibold leading-snug text-white">{notifications[current]}</p>
        <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-white/90"><CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> Biblioteca digital disponível</p>
      </div>
    </div>
  </div>;
};
export default SalesNotification;