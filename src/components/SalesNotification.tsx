import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const names = [
  "Ana Silva - São Paulo, SP", "Maria Santos - Rio de Janeiro, RJ", "Juliana Alves - Belo Horizonte, MG", "Carla Oliveira - Curitiba, PR", "Fernanda Lima - Salvador, BA", "Patrícia Costa - Fortaleza, CE", "Camila Rocha - Brasília, DF",
  "Beatriz Martins - Recife, PE", "Luciana Souza - Porto Alegre, RS", "Amanda Ferreira - Goiânia, GO", "Renata Nunes - Manaus, AM", "Larissa Mendes - Belém, PA", "Priscila Barbosa - Vitória, ES", "Tatiane Ribeiro - Campo Grande, MS",
  "Rafaela Castro - Florianópolis, SC", "Débora Cardoso - Natal, RN", "Vanessa Teixeira - São Luís, MA", "Bruna Moreira - Maceió, AL", "Natália Dias - Teresina, PI", "Gabriela Araújo - João Pessoa, PB",
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
    return () => { clearInterval(interval); clearTimeout(initial); };
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 z-50 ${show ? "animate-slide-in-notification" : "animate-slide-out-notification"}`} style={{ pointerEvents: "none" }}>
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgba(22,163,74,0.28)] flex items-center gap-3 max-w-[280px] backdrop-blur-sm border border-green-300/40">
        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-5 h-5 text-white" /></div>
        <div className="text-sm leading-tight"><span className="font-bold">{name}</span><p className="text-green-50 text-xs mt-0.5">acabou de acessar a biblioteca STL! ✨</p></div>
      </div>
    </div>
  );
};

export default SalesNotification;
