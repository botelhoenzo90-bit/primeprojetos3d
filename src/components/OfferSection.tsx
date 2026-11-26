import React, { useState } from "react";
import { OFFER_PRICES } from "@/lib/offer-prices";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Gift, X, Sparkles, Crown } from "lucide-react";
import produtoAsset from "@/assets/oferta/biblioteca-prime-recortada.webp.asset.json";
const produtoImg = produtoAsset.url;
const produtoMockup = produtoAsset.url;
import paymentMethods from "@/assets/payment-methods.png";

const premiumReceberItems = [
  "+100.000 arquivos STL para impressão 3D",
  "Biblioteca com categorias variadas de modelos",
  "Arquivos digitais para diferentes projetos",
  "Acesso organizado por categorias",
  "Modelos para explorar, fatiar e imprimir",
  "Acesso digital após a confirmação",
  "Variedade para novos projetos",
  "Garantia de 7 dias",
];

const premiumBonusItems = [
  "Pack de Veículos 3D",
  "Coleção de Heróis",
  "Pack de Chaveiros",
  "Modelos Flexíveis e Articulados",
  "Clássicos dos Desenhos",
  "Cosplay 3D e Máscaras",
  "Coleção Pokémon",
  "Coleção de Natal",
  "Coleção Copa do Mundo",
  "Mascotes Esportivos",
  "Mais de 250 Luminárias 3D",
  "Bichinhos Amigurumi 3D",
  "Coleção estilo LEGO",
  "Universo Minecraft",
  "Porta-copos Monster",
  "Canecas de Times",
  "Réplicas de Estádios",
  "Caneca Estilo Moletom",
  "Canecas de Games",
];

const bonusPrices = [
  47, 39, 27, 57, 34, 67, 44, 54, 37, 49,
  62, 32, 41, 58, 29, 36, 45, 33, 51,
];

const bonusPrice = (index: number) => `${bonusPrices[index % bonusPrices.length]},00`;

const basicReceberItems = [
  "+50.000 arquivos STL",
  "Acesso organizado por categorias",
  "Acesso digital após a confirmação",
  "Garantia de 7 dias",
];

const basicMissingItems = [
  "Biblioteca com categorias variadas de modelos",
  "Arquivos digitais para diferentes projetos",
  "Modelos para explorar, fatiar e imprimir",
  "Variedade para novos projetos",
];

const OfferSection = () => {
  const [showUpsell, setShowUpsell] = useState(false);
  const [showBasicUpsell, setShowBasicUpsell] = useState(false);

  React.useEffect(() => {
    if (showUpsell || showBasicUpsell) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showUpsell, showBasicUpsell]);

  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();

    const checkoutUrl = new URL(url);

    window.location.href = checkoutUrl.toString();
  };

  return (
    <>
      <section id="oferta" className="py-7 md:py-10 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-black text-[10px] md:text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-[#FFD700]">
              <Crown className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Oferta Especial
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="offer-title max-w-4xl mx-auto text-[1.45rem] leading-[1.16] sm:text-3xl md:text-5xl font-black text-center text-green-title mb-4 tracking-tight px-2"
          >
            Crie, imprima e explore novas possibilidades <span className="text-[#f97316]">com a Biblioteca 3D Premium</span>
          </motion.h2>
          <p className="text-center text-base md:text-2xl text-green-title font-extrabold max-w-2xl mx-auto mb-4 px-2 leading-snug">
            Escolha o pacote ideal para você<br className="md:hidden" /> e comece agora mesmo!
          </p>
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center gap-2 bg-red-600 text-white text-[11px] md:text-base font-black uppercase tracking-wide px-4 py-2 md:px-7 md:py-2.5 rounded-full text-center whitespace-nowrap border-2 border-black shadow-[0_3px_0_#000]">
              <span className="w-2 h-2 shrink-0 rounded-full bg-white animate-pulse" aria-hidden="true" />
              Restam apenas 3 vagas no valor promocional
            </span>
          </div>
          <div className="max-w-6xl mx-auto mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* PLANO PREMIUM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl shadow-2xl border-[3px] border-sage overflow-visible h-full flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max">
                  <div className="bg-green-600 text-white text-sm md:text-xl font-black px-5 py-1.5 rounded-full uppercase shadow-[0_3px_0_#000] whitespace-nowrap">
                    97% escolhem esse pacote!
                  </div>
                </div>

                <div className="p-5 pt-8 md:p-6 md:pt-9 flex flex-col flex-1">
                  <div className="text-center mb-1">
                    <span className="inline-block bg-orange-500 text-white text-xs md:text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Pacote Premium
                    </span>
                  </div>
                  <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-700 mt-2 mb-3">
                    Biblioteca STL 3D
                  </h2>

                  <p className="text-center text-sm text-foreground font-semibold mb-3">
                    Pagamento único • Acesso digital após a confirmação
                  </p>

                  <img
                    src={produtoImg}
                      alt="Biblioteca digital de arquivos STL para impressão 3D"
                    className="w-full h-auto object-contain mx-auto rounded-lg mb-4"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="text-center mb-4">
                    <span className="text-red-600 font-extrabold line-through text-3xl md:text-4xl block mb-0.5">R$ 97,00</span>
                    <p className="text-sm text-foreground font-semibold mb-0.5">por apenas</p>
                    <div className="text-5xl md:text-6xl font-extrabold text-green-700">
                      R$ 39<span className="text-3xl">,90</span>
                    </div>
                    <div className="inline-block bg-green-50 text-green-700 font-bold text-sm px-4 py-1 rounded-full mt-2">
                      Você economiza R$ 57,10!
                    </div>
                  </div>

                  <div className="border-t border-dashed border-sage my-3" />

                  <h3 className="text-center font-extrabold text-green-title text-sm uppercase tracking-wider mb-3">
                    O que você vai receber:
                  </h3>
                  <div className="flex justify-center mb-3">
                    <ul className="space-y-2 inline-flex flex-col">
                      {premiumReceberItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-blue-700" />
                          </div>
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-dashed border-sage my-3" />

                  <h3 className="text-center font-extrabold text-green-title text-sm uppercase tracking-wider mb-3">
                    19 Bônus Inclusos:
                  </h3>
                  <div className="flex justify-center mb-4">
                    <ul className="space-y-2 inline-flex flex-col w-full">
                      {premiumBonusItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5 w-full">
                          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                            <Gift className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-foreground flex-1 text-left min-w-0">{item}</span>
                          <span className="text-red-600 font-extrabold text-xs line-through decoration-red-500 decoration-2 whitespace-nowrap">R$ {bonusPrice(i)}</span>
                          <span className="text-green-700 font-black text-[11px] bg-green-50 px-1.5 py-0.5 rounded-full uppercase whitespace-nowrap">Grátis</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="rounded-full mb-4">
                      <Button asChild className="h-auto whitespace-normal"><a
                        href="https://pay.cakto.com.br/vfa8ugj_1323876"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/vfa8ugj_1323876')}
                        className="flex w-full min-h-[58px] items-center justify-center gap-2 bg-cta hover:bg-cta-hover prime-cta text-white font-black text-sm sm:text-base md:text-xl px-4 py-4 md:py-5 rounded-full text-center leading-tight transition-all uppercase tracking-wide cursor-pointer shadow-lg shadow-green-200"
                      >
                        <Zap className="w-5 h-5 inline mr-2" />
                        QUERO O PREMIUM COMPLETO
                      </a></Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-cta" />
                      <span>Pagamento 100% seguro via cartão, Pix ou boleto</span>
                    </div>

                    <img
                      src={paymentMethods}
                      alt="Métodos de pagamento aceitos: Pix, Visa, Mastercard, Elo, American Express, boleto"
                      className="w-full max-w-md mx-auto mt-3"
                      loading="lazy"
                      decoding="async"
                    />

                    
                    <div className="mt-3 border border-blue-200 rounded-lg p-2 text-center bg-blue-50">
                      <p className="text-xs font-extrabold text-blue-800 flex items-center justify-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        Acesso pelo WhatsApp e e-mail
                      </p>
                      <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                        Enviado após a confirmação do pagamento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PLANO BÁSICO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl shadow-lg border-[3px] border-gray-300 overflow-visible h-full flex flex-col">
                <div className="p-5 pt-8 md:p-6 md:pt-9 flex flex-col flex-1">
                  <div className="text-center mb-1">
                    <span className="inline-block bg-gray-200 text-gray-600 text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-gray-300">
                      Pacote Básico
                    </span>
                  </div>
                  <h2 className="text-center text-3xl md:text-4xl font-extrabold text-heading-highlight mt-2 mb-3">
                    Biblioteca STL 3D
                  </h2>

                  <div className="text-center mb-4 mt-2">
                    <span className="text-red-600 font-extrabold line-through text-2xl md:text-3xl block mb-0.5">R$ 47,00</span>
                    <p className="text-sm text-foreground font-semibold mb-0.5">por apenas</p>
                    <div className="text-5xl md:text-6xl font-extrabold text-green-700">
                      {OFFER_PRICES.basic.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-300 my-3" />

                  <h3 className="text-center font-extrabold text-heading-highlight text-sm uppercase tracking-wider mb-3">
                    O que você vai receber:
                  </h3>
                  <div className="flex justify-center mb-3">
                    <ul className="space-y-2 inline-flex flex-col">
                      {basicReceberItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-cta" />
                          </div>
                          <span className="text-sm font-bold text-green-600">{item}</span>
                        </li>
                      ))}
                      {basicMissingItems.map((item, i) => (
                        <li key={`miss-${i}`} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                            <X className="w-3.5 h-3.5 text-red-500" />
                          </div>
                          <span className="text-sm font-bold text-foreground line-through decoration-red-400 decoration-1">{item}</span>
                        </li>
                      ))}
                      {premiumBonusItems.map((item, i) => (
                        <li key={`bonus-${i}`} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                            <X className="w-3.5 h-3.5 text-red-500" />
                          </div>
                          <span className="text-sm font-semibold text-foreground line-through decoration-red-400 decoration-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="rounded-full mb-4">
                      <Button
                        type="button"
                        onClick={() => setShowBasicUpsell(true)}
                        className="w-full min-h-[56px] whitespace-normal bg-slate-500 hover:bg-slate-600 prime-cta-basic text-white font-black text-sm md:text-lg px-4 py-4 rounded-full text-center leading-tight transition-all uppercase tracking-wide cursor-pointer shadow-md"
                      >
                        ESCOLHER PACOTE BÁSICO
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-cta" />
                      <span>Pagamento 100% seguro via cartão, Pix ou boleto</span>
                    </div>

                    <img
                      src={paymentMethods}
                      alt="Métodos de pagamento aceitos"
                      className="w-full max-w-md mx-auto mt-3"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="mt-3 border border-primary/30 rounded-lg p-2 text-center bg-primary/5">
                      <p className="text-xs font-bold text-primary flex items-center justify-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        Acesso pelo WhatsApp e e-mail
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Enviado após a confirmação do pagamento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UPSELL POPUP */}
      <AnimatePresence>
        {showUpsell && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-hidden"
            onClick={() => setShowUpsell(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl border-2 border-cta overflow-hidden max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowUpsell(false)}
                className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 text-center">
                <p className="text-xs font-bold uppercase tracking-wide mb-0.5">⚡ Pacote Premium ⚡</p>
                <p className="text-[10px] opacity-90 mb-1">Leve o pacote completo com todos os bônus!</p>
                <div className="inline-flex items-center justify-center gap-2 bg-white rounded-lg px-3 py-1">
                  <span className="line-through text-red-600 text-lg font-extrabold">R$ 97,00</span>
                  <span className="text-xl font-extrabold text-green-700">R$ 14,90</span>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded">-85%</span>
                </div>
              </div>

              <div className="bg-red-600 text-white py-1.5 px-3 text-center">
                <p className="text-sm font-extrabold uppercase tracking-wider">🔥 Oferta Relâmpago!</p>
              </div>

              <div className="px-4 py-2">
                <img
                  src={produtoMockup}
                  alt="Pacote Premium de Arquivos STL 3D com bônus"
                  className="w-full max-w-[140px] mx-auto mb-1.5"
                  loading="lazy"
                  decoding="async"
                />

                <h4 className="text-center font-extrabold text-green-title text-xs uppercase tracking-wider mb-1.5">
                  O que você vai receber:
                </h4>
                <div className="flex justify-center mb-2">
                  <ul className="space-y-1 inline-flex flex-col">
                    {premiumReceberItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-green-600/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-green-700" />
                        </div>
                        <span className="text-xs text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-dashed border-sage my-1.5" />

                <h4 className="text-center font-extrabold text-green-title text-xs uppercase tracking-wider mb-1.5">
                  🎁 Bônus Inclusos:
                </h4>
                <div className="flex justify-center mb-3">
                  <ul className="space-y-1 inline-flex flex-col">
                    {premiumBonusItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                          <Gift className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="h-auto whitespace-normal"><a
                  href="https://pay.cakto.com.br/vfhdgrk_1350699"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/vfhdgrk_1350699')}
                  className="block bg-green-600 hover:bg-green-700 prime-cta text-white font-black text-sm px-4 py-2.5 rounded-xl transition-colors w-full text-center uppercase whitespace-nowrap cursor-pointer mb-1.5"
                >
                  <Zap className="w-4 h-4 inline mr-1" />
                  SIM! Quero por R$ 14,90
                </a></Button>

                <Button asChild className="h-auto whitespace-normal"><a
                  href="https://pay.cakto.com.br/buf4wp3_1350697"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    setShowUpsell(false);
                    handleCheckout(e, 'https://pay.cakto.com.br/buf4wp3_1350697');
                  }}
                  className="prime-cta-basic block font-semibold text-[10px] px-4 py-1.5 rounded-xl transition-colors w-full text-center cursor-pointer"
                >
                  Continuar com o Básico — {OFFER_PRICES.basic.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </a></Button>

                <div className="flex items-center justify-center gap-1.5 mt-1.5 text-[10px] text-muted-foreground">
                  <ShieldCheck className="w-3 h-3 text-green-700" />
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BASIC → PREMIUM UPSELL POPUP */}
      <AnimatePresence>
        {showBasicUpsell && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 bg-foreground/70 backdrop-blur-sm"
            onClick={() => setShowBasicUpsell(false)}
          >
            <motion.div
              role="dialog" aria-modal="true" aria-labelledby="upgrade-title"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="upgrade-popup bg-background rounded-lg shadow-2xl border-2 border-heading-highlight w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => { if (e.key === 'Escape') setShowBasicUpsell(false); }}
            >
              <Button variant="ghost" size="icon" onClick={() => setShowBasicUpsell(false)} aria-label="Fechar oferta" className="absolute top-1 right-1 z-10 h-7 w-7 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"><X className="h-4 w-4" /></Button>
              <div className="rounded-t-md bg-heading-highlight text-primary-foreground px-8 py-3 text-center">
                <h3 id="upgrade-title" className="text-sm font-black uppercase">⚡ Oferta Especial Relâmpago!</h3>
                <p className="mt-1 text-xs font-semibold">Leve a biblioteca completa por apenas:</p>
              </div>
              <div className="upgrade-content px-4 py-3">
                <div className="upgrade-overview">
                <img src={produtoImg} alt="Biblioteca 3D completa" className="upgrade-image w-full h-20 object-contain mx-auto" />
                <div className="text-center mt-1">
                  <span className="text-destructive font-extrabold line-through text-lg">R$ 97,00</span>
                  <p className="text-4xl font-black text-cta leading-tight">{OFFER_PRICES.upgrade.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                  <p className="text-xs font-bold text-cta">Economize R$ 67,10!</p>
                </div>
                </div>
                <ul className="upgrade-inclusions my-3 space-y-1.5 text-xs font-semibold leading-snug text-foreground">
                  {[
                    '+100 mil STL organizados por categoria',
                    '19 coleções: veículos, heróis e chaveiros',
                    'Articulados, cosplay, Pokémon e LEGO',
                    'Minecraft, Natal, Copa e mascotes',
                    '+250 luminárias e bichinhos amigurumi',
                    'Canecas temáticas e réplicas de estádios',
                    'Após confirmação: WhatsApp e e-mail',
                    'Pagamento único + garantia de 7 dias',
                  ].map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0 text-cta" /><span className="min-w-0">{item}</span></li>)}
                </ul>
                <div className="upgrade-actions flex flex-col gap-2">
                  <Button asChild className="prime-cta h-auto w-full whitespace-normal rounded-lg px-3 py-3 text-sm font-black">
                    <a href="https://pay.cakto.com.br/vfhdgrk_1350699" onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/vfhdgrk_1350699')}>GARANTIR TUDO POR R$ 29,90</a>
                  </Button>
                  <Button asChild className="prime-cta-basic h-auto min-h-9 w-full whitespace-normal rounded-lg px-2 py-2 text-xs text-primary-foreground">
                    <a href="https://pay.cakto.com.br/buf4wp3_1350697" onClick={(e) => { setShowBasicUpsell(false); handleCheckout(e, 'https://pay.cakto.com.br/buf4wp3_1350697'); }}>Continuar com o Básico — {OFFER_PRICES.basic.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</a>
                  </Button>
                </div>
                <div className="upgrade-payment mt-2 flex items-center justify-center gap-2">
                  <img src={paymentMethods} alt="Métodos de pagamento aceitos" className="w-36 h-8 object-contain" />
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground"><ShieldCheck className="h-4 w-4 shrink-0 text-cta" />Pagamento seguro</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfferSection;
