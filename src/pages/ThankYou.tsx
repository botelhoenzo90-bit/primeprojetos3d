import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/topo/logo.png.asset.json";
import { trackPurchase } from "@/lib/meta-events";

const ThankYou = () => {
  const reported = useRef(false);

  useEffect(() => {
    document.title = "Pagamento aprovado | Prime Biblioteca 3D";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  useEffect(() => {
    if (reported.current) return;
    reported.current = true;
    void trackPurchase(window.location.search);
  }, []);

  return (
    <div className="prime-page min-h-screen bg-cream">
      <div className="max-w-2xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        <img src={logo.url} alt="Prime Biblioteca 3D" className="w-48 md:w-56 h-auto mb-6" loading="eager" />
        <h1 className="text-2xl md:text-4xl font-black text-green-title leading-tight mb-4">
          Pagamento aprovado!
        </h1>
        <p className="text-base md:text-lg font-semibold text-green-title max-w-lg mb-2">
          Obrigado pela compra. Em instantes você recebe o acesso por WhatsApp e e-mail.
        </p>
        <p className="text-sm text-muted-foreground max-w-lg mb-8">
          Se não receber em até 10 minutos, confira a caixa de spam ou responda a mensagem que enviamos.
        </p>
        <Button asChild className="h-auto whitespace-normal bg-cta hover:bg-cta-hover prime-cta text-primary-foreground font-black text-base md:text-lg px-6 py-4 rounded-lg">
          <a href="/">VOLTAR PARA O SITE</a>
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
