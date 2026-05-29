import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const names = [
  "Ana Silva", "Maria Santos", "Juliana Alves", "Carla Oliveira", "Fernanda Lima", "Patrícia Costa", "Camila Rocha",
  "Beatriz Martins", "Luciana Souza", "Amanda Ferreira", "Renata Nunes", "Larissa Mendes", "Priscila Barbosa", "Tatiane Ribeiro",
  "Rafaela Castro", "Débora Cardoso", "Vanessa Teixeira", "Bruna Moreira", "Natália Dias", "Gabriela Araújo",
];

const SalesNotification = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setName(randomName);
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    };

    const interval = setInterval(showNotification, 10000);
    const initial = setTimeout(showNotification, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 ${show ? "animate-slide-in-notification" : "animate-slide-out-notification"}`}
      style={{ pointerEvents: "none" }}
    >
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgba(22,163,74,0.4)] flex items-center gap-3 max-w-[280px] backdrop-blur-sm border border-green-400/30">
        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <div className="text-sm leading-tight">
          <span className="font-bold">{name}</span>
          <p className="text-green-100 text-xs mt-0.5">acaba de asegurar sus recetas! ✨</p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
