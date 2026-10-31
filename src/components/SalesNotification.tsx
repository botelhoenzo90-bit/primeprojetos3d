import { useState, useEffect } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const notifications = [
  { name: "Mariana S.", action: "garantiu seu acesso ao Pack de Modelos 3D!", time: "há 1 min" },
  { name: "Carlos R.", action: "já pode explorar +100 mil modelos 3D!", time: "há 2 min" },
  { name: "Juliana M.", action: "desbloqueou ideias para imprimir e vender!", time: "há 3 min" },
  { name: "Rafael P.", action: "garantiu acesso à biblioteca Prime 3D!", time: "há 4 min" },
];

const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      setCurrent((value) => (value + 1) % notifications.length);
      setShow(true);
      window.setTimeout(() => setShow(false), 4600);
    };
    const interval = window.setInterval(showNotification, 20000);
    const initial = window.setTimeout(showNotification, 7000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(initial);
    };
  }, []);

  const notification = notifications[current];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"}`}
      style={{ pointerEvents: "none" }}
      aria-live="polite"
    >
      <div className="flex w-[min(345px,calc(100vw-32px))] items-center gap-3 rounded-[20px] border border-white/15 bg-[#18B95B] px-4 py-3.5 text-white shadow-[0_10px_30px_rgba(13,145,69,0.28)]">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#18B95B] bg-white/30" />
          <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2.2} />
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="truncate text-[16px] font-extrabold tracking-tight">{notification.name}</span>
            <Sparkles className="h-4 w-4 shrink-0 text-yellow-200" />
          </div>
          <p className="text-[13px] font-semibold leading-snug text-white">{notification.action}</p>
          <p className="mt-1 text-[12px] text-white/85">Atividade ilustrativa · {notification.time}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
