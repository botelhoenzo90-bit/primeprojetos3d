import { useState, useEffect } from "react";
import { UserRound, CheckCircle2 } from "lucide-react";
const notifications = ["Conheça o Pacote Premium Prime 3D!","Explore milhares de modelos para sua próxima impressão.","Sua biblioteca 3D está pronta para novos projetos."];
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
    <div className="sales-notification flex w-[min(280px,calc(100vw-24px))] sm:w-[330px] items-center gap-3 rounded-xl border px-3 py-3 sm:px-4 sm:py-3.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary-foreground/35 bg-primary-foreground/15"><UserRound className="h-6 w-6" /></div>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="text-sm sm:text-base font-extrabold">Biblioteca Premium</div>
        <p className="mt-1 text-xs sm:text-sm font-semibold leading-snug">{notifications[current]}</p>
        <p className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs font-bold opacity-90"><CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> Acesso digital • Prime 3D</p>
      </div>
    </div>
  </div>;
};
export default SalesNotification;