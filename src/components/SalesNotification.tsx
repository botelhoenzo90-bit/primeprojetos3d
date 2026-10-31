import { useState, useEffect } from "react";
import { CheckCircle2, PackageCheck } from "lucide-react";

// Exemplos demonstrativos de layout. Substitua por dados de pedidos reais antes de publicar.
const notifications = [
  { name: "Mariana S.", city: "Curitiba - PR" },
  { name: "Rafael M.", city: "São Paulo - SP" },
  { name: "Camila R.", city: "Belo Horizonte - MG" },
  { name: "Lucas A.", city: "Porto Alegre - RS" },
];

const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      setCurrent((value) => (value + 1) % notifications.length);
      setShow(true);
      window.setTimeout(() => setShow(false), 4200);
    };
    const interval = window.setInterval(showNotification, 24000);
    const initial = window.setTimeout(showNotification, 9000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(initial);
    };
  }, []);

  const notification = notifications[current];

  return (
    <div
      className={`fixed bottom-3 left-3 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`}
      style={{ pointerEvents: "none" }}
      aria-live="polite"
    >
      <div className="flex w-[min(270px,calc(100vw-24px))] items-center gap-2.5 rounded-[15px] border border-emerald-100 bg-[#18A957] px-2.5 py-2 text-white shadow-[0_6px_18px_rgba(13,145,69,0.2)]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15">
          <span className="text-[10px] font-black tracking-wide">{notification.name.split(" ").map(part => part[0]).join("")}</span>
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[12px] font-extrabold">{notification.name}</div>
          <div className="mt-0.5 text-[9px] font-medium text-white/85">{notification.city}</div>
          <p className="mt-1 flex items-center gap-1 text-[10px] font-bold leading-snug text-white">
            <PackageCheck className="h-3 w-3 shrink-0" />
            Acabou de adquirir o Pacote Premium 3D!
            <CheckCircle2 className="h-3 w-3 shrink-0" />
          </p>
          <p className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-white/75">Exemplo ilustrativo de notificação</p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
