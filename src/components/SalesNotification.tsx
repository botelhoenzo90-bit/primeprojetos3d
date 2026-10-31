import { useState, useEffect } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const notifications = [
  { title: "Novas possibilidades para imprimir!", action: "Explore modelos e transforme ideias em produtos." },
  { title: "Sua próxima ideia pode estar aqui.", action: "Mais de 100 mil modelos em diversas categorias." },
  { title: "Inspire-se. Imprima. Coloque à venda.", action: "Descubra projetos para testar na sua impressora 3D." },
  { title: "Biblioteca Prime Projetos 3D", action: "Acesso digital a milhares de ideias para criar." },
];

const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      setCurrent((value) => (value + 1) % notifications.length);
      setShow(true);
      window.setTimeout(() => setShow(false), 3800);
    };
    const interval = window.setInterval(showNotification, 22000);
    const initial = window.setTimeout(showNotification, 8500);
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
      <div className="flex w-[min(285px,calc(100vw-24px))] items-center gap-2.5 rounded-2xl border border-white/20 bg-[#18A957] px-3 py-2.5 text-white shadow-[0_7px_20px_rgba(13,145,69,0.22)]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
          <CheckCircle2 className="h-[18px] w-[18px] text-white" strokeWidth={2.3} />
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="mb-0.5 flex items-center gap-1">
            <span className="truncate text-[12px] font-extrabold">{notification.title}</span>
            <Sparkles className="h-3 w-3 shrink-0 text-yellow-200" />
          </div>
          <p className="text-[10px] font-medium leading-snug text-white/95">{notification.action}</p>
          <p className="mt-1 text-[9px] text-white/75">Destaque da biblioteca · conteúdo ilustrativo</p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
