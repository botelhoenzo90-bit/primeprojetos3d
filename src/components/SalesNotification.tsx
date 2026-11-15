import { useState, useEffect } from "react";
import { UserRound } from "lucide-react";

const demoNotifications = [
  { name: "Mariana Oliveira", city: "Curitiba, PR" },
  { name: "Lucas Ferreira", city: "Campinas, SP" },
  { name: "Beatriz Santos", city: "Joinville, SC" },
  { name: "Rafael Almeida", city: "Belo Horizonte, MG" },
  { name: "Camila Rodrigues", city: "Londrina, PR" },
];

const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let hideTimer: number | undefined;
    const showNotification = () => {
      setCurrent((value) => (value + 1) % demoNotifications.length);
      setShow(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setShow(false), 6000);
    };
    const interval = window.setInterval(showNotification, 11000);
    const initial = window.setTimeout(showNotification, 3500);
    return () => { window.clearInterval(interval); window.clearTimeout(initial); window.clearTimeout(hideTimer); };
  }, []);
  const person = demoNotifications[current];
  return <div className={`fixed bottom-3 left-3 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`} style={{ pointerEvents: "none" }} aria-live="polite">
    <div className="sales-notification flex w-[min(290px,calc(100vw-24px))] sm:w-[340px] items-center gap-3 rounded-xl border px-3 py-3 sm:px-4 sm:py-3.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary-foreground/35 bg-primary-foreground/15"><UserRound className="h-6 w-6" /></div>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="text-sm sm:text-base font-extrabold">{person.name}</div>
        <p className="text-[11px] sm:text-xs opacity-90">{person.city}</p>
        <p className="mt-1 text-xs sm:text-sm font-semibold leading-snug">Acabou de adquirir a Biblioteca de Projetos 3D!</p>
      </div>
    </div>
  </div>;
};
export default SalesNotification;