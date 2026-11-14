import { useState, useEffect } from "react";
import { UserRound, CheckCircle2 } from "lucide-react";
const notifications = ["Novos projetos esperando pela sua criatividade.","Explore novas ideias para sua próxima impressão.","Sua biblioteca 3D está pronta para ser explorada."];
const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let hideTimer: number | undefined;
    const showNotification = () => {
      setCurrent((value) => (value + 1) % notifications.length);
      setShow(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setShow(false), 5200);
    };
    const interval = window.setInterval(showNotification, 14000);
    const initial = window.setTimeout(showNotification, 5000);
    return () => { window.clearInterval(interval); window.clearTimeout(initial); window.clearTimeout(hideTimer); };
  }, []);
  return <div className={`fixed bottom-3 left-3 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`} style={{ pointerEvents: "none" }} aria-live="polite">
    <div className="sales-notification flex w-[min(260px,calc(100vw-24px))] sm:w-[310px] items-center gap-2 rounded-lg border px-2.5 py-2 sm:px-3.5 sm:py-3">
      <div className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-primary-foreground/35 bg-primary-foreground/15"><UserRound className="h-5 w-5 sm:h-6 sm:w-6" /></div>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="text-xs sm:text-sm font-extrabold">Biblioteca Premium Prime 3D</div>
        <p className="mt-1 text-[11px] sm:text-xs font-semibold leading-snug">{notifications[current]}</p>
        <p className="mt-1 flex items-center gap-1 text-[9px] sm:text-[10px] font-bold opacity-90"><CheckCircle2 className="h-3 w-3 shrink-0" /> Biblioteca digital disponível</p>
      </div>
    </div>
  </div>;
};
export default SalesNotification;