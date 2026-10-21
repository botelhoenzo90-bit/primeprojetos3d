import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Gift, X, Sparkles, Crown } from "lucide-react";
import produtoImg from "@/assets/produto-oferta-new.png";
import produtoMockup from "@/assets/produto-mockup.png";
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
  "Chaveiros Personalizados 3D",
  "Modelos Flexíveis e Articulados",
  "Coleção de Decoração e Utilidades",
  "Colecionáveis e Personagens",
  "Ideias Criativas para Presentes",
];

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

  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>, url: string, value: number, planName: string) => {
    e.preventDefault();

    // Fire Meta Pixel InitiateCheckout
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        // @ts-ignore
        window.fbq('track', 'InitiateCheckout', {
          content_name: planName,
          content_category: 'Arquivos STL 3D',
          value: value,
          currency: 'BRL',
          num_items: 1,
        });
      }
    } catch (err) {
      console.warn('fbq InitiateCheckout failed', err);
    }

    // Microsoft Clarity custom event
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
        // @ts-ignore
        window.clarity('event', 'InitiateCheckout');
        // @ts-ignore
        window.clarity('set', 'plan', planName);
      }
    } catch (err) {
      console.warn('clarity event failed', err);
    }

    const currentUrlParams = new URLSearchParams(window.location.search);

    const baseTargetUrl = e.currentTarget.href || url;
    const checkoutUrl = new URL(baseTargetUrl);

    currentUrlParams.forEach((v, key) => {
      checkoutUrl.searchParams.set(key, v);
    });

    window.location.href = checkoutUrl.toString();
  };

  return (
    <>
      <section id="oferta" className="py-8 md:py-12 bg-cream">
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
            className="text-4xl md:text-6xl font-black text-center text-green-title mb-4 tracking-tight"
          >
            Garanta sua biblioteca STL <span className="text-cta">com 6 bônus extras</span>
          </motion.h2>
          <p className="text-center text-sm md:text-lg text-green-title font-semibold max-w-2xl mx-auto mb-8 px-2">
            🚀 Tenha mais de 100 mil modelos STL para explorar e leve 6 coleções bônus no pacote Premium. Escolha seu plano e confira todos os detalhes antes de finalizar.
          </p>
          <div className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
            {/* PLANO PREMIUM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl shadow-2xl border-[3px] border-sage overflow-visible h-full flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max">
                  <div className="bg-cta text-white text-[11px] md:text-xs font-black px-5 py-1.5 rounded-full uppercase shadow-md whitespace-nowrap">
                    🔥 Mais Vendido!
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="text-center mb-1">
                    <span className="inline-block bg-green-600 text-white text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      Pacote Premium
                    </span>
                  </div>
                  <h2 className="text-center text-2xl md:text-3xl font-extrabold text-blue-700 mt-1 mb-2">
                    Biblioteca STL 3D
                  </h2>

                  <p className="text-center text-sm text-foreground font-semibold mb-3">
                    Último dia da promoção: 21/10/2026. Confira as condições do plano no checkout.
                  </p>

                  <img
                    src={produtoImg}
                      alt="Biblioteca digital de arquivos STL para impressão 3D"
                    className="w-1/2 mx-auto rounded-xl mb-4"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="text-center mb-4">
                    <span className="text-red-600 font-extrabold line-through text-3xl md:text-4xl block mb-0.5">R$ 97,00</span>
                    <p className="text-sm text-foreground font-semibold mb-0.5">por apenas</p>
                    <div className="text-5xl md:text-6xl font-extrabold text-blue-700">
                      R$ 29<span className="text-3xl">,90</span>
                    </div>
                    <div className="inline-block bg-blue-50 text-blue-700 font-bold text-sm px-4 py-1 rounded-full mt-2">
                      Você economiza R$ 67,10!
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
                    6 Bônus Inclusos:
                  </h3>
                  <div className="flex justify-center mb-4">
                    <ul className="space-y-2 inline-flex flex-col">
                      {premiumBonusItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                            <Gift className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="rounded-full mb-4">
                      <a
                        href="https://pay.cakto.com.br/36cgyiw_840628"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/36cgyiw_840628', 29.90, 'Biblioteca STL 3D - Premium')}
                        className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm md:text-xl px-4 py-5 rounded-full text-center transition-all uppercase tracking-wide cursor-pointer"
                      >
                        <Zap className="w-5 h-5 inline mr-2" />
                        SIM! QUERO ACESSAR A BIBLIOTECA STL
                      </a>
                    </div>
                    <p className="text-center text-xs md:text-sm text-[#064E3B] font-semibold -mt-2 mb-2 flex items-center justify-center gap-1.5">
                      🛡️ Garantia de 7 dias · Acesso digital
                    </p>

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

                    <p className="text-center text-[11px] text-muted-foreground mt-1 italic">
                      e muito mais...
                    </p>

                    <div className="mt-3 border border-blue-500/40 rounded-xl p-2.5 text-center bg-blue-500/10">
                      <p className="text-sm font-bold text-blue-700 flex items-center justify-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        Acesso imediato após a compra!
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Após a confirmação, confira as instruções de acesso e comece a explorar os arquivos.
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
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="text-center mb-1">
                    <span className="inline-block bg-gray-200 text-gray-600 text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-gray-300">
                      Pacote Inicial
                    </span>
                  </div>
                  <h2 className="text-center text-2xl md:text-3xl font-extrabold text-cta mt-1 mb-2">
                    Biblioteca STL 3D
                  </h2>

                  <div className="text-center mb-4 mt-2">
                    <span className="text-red-600 font-extrabold line-through text-2xl md:text-3xl block mb-0.5">R$ 47,00</span>
                    <p className="text-sm text-foreground font-semibold mb-0.5">por apenas</p>
                    <div className="text-5xl md:text-6xl font-extrabold text-blue-700">
                      R$ 9<span className="text-3xl">,90</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-300 my-3" />

                  <h3 className="text-center font-extrabold text-cta text-sm uppercase tracking-wider mb-3">
                    O que você vai receber:
                  </h3>
                  <div className="flex justify-center mb-3">
                    <ul className="space-y-2 inline-flex flex-col">
                      {basicReceberItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-cta" />
                          </div>
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                      {basicMissingItems.map((item, i) => (
                        <li key={`miss-${i}`} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                            <X className="w-3.5 h-3.5 text-red-500" />
                          </div>
                          <span className="text-sm text-foreground line-through decoration-red-400 decoration-1">{item}</span>
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
                      <button
                        type="button"
                        onClick={() => setShowBasicUpsell(true)}
                        className="inline-block w-full bg-gray-500 hover:bg-gray-600 text-white font-black text-sm md:text-lg px-4 py-4 rounded-full text-center transition-all uppercase tracking-wide cursor-pointer"
                      >
                        QUERO O PACOTE BÁSICO
                      </button>
                    </div>
                    <p className="text-center text-xs md:text-sm text-[#064E3B] font-semibold -mt-2 mb-2 flex items-center justify-center gap-1.5">
                      🛡️ Garantia de 7 dias · Acesso digital
                    </p>

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

                    <div className="mt-3 border border-blue-500/40 rounded-xl p-2.5 text-center bg-blue-500/10">
                      <p className="text-sm font-bold text-blue-700 flex items-center justify-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        Acesso imediato após a compra!
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Após a confirmação, confira as instruções de acesso e comece a explorar os arquivos.
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

              <div className="bg-gradient-to-r from-cta to-green-600 text-white py-2 px-4 text-center">
                <p className="text-xs font-bold uppercase tracking-wide mb-0.5">⚡ Pacote Premium ⚡</p>
                <p className="text-[10px] opacity-90 mb-1">Leve o pacote completo com todos os bônus!</p>
                <div className="inline-flex items-center justify-center gap-2 bg-white rounded-lg px-3 py-1">
                  <span className="line-through text-red-600 text-lg font-extrabold">R$ 97,00</span>
                  <span className="text-xl font-extrabold text-cta">R$ 14,90</span>
                  <span className="bg-cta/20 text-cta text-[10px] font-bold px-1.5 py-0.5 rounded">-85%</span>
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
                        <div className="w-3.5 h-3.5 rounded-full bg-cta/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-cta" />
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

                <motion.a
                  href="https://pay.cakto.com.br/etagmjj_848143"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/etagmjj_848143', 14.90, 'Biblioteca STL 3D - Upsell Premium')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="block bg-cta hover:bg-cta-hover text-cream font-bold text-sm px-4 py-2.5 rounded-xl transition-colors w-full text-center uppercase whitespace-nowrap cursor-pointer mb-1.5"
                >
                  <Zap className="w-4 h-4 inline mr-1" />
                  SIM! Quero por R$ 14,90
                </motion.a>

                <motion.a
                  href="https://pay.cakto.com.br/kv9j6ie_848142"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    setShowUpsell(false);
                    handleCheckout(e, 'https://pay.cakto.com.br/kv9j6ie_848142', 9.90, 'Biblioteca STL 3D - Básico');
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="block bg-gray-200 hover:bg-gray-300 text-gray-500 font-semibold text-[10px] px-4 py-1.5 rounded-xl transition-colors w-full text-center cursor-pointer border-2 border-gray-500"
                >
                  Não, quero apenas o Básico — R$ 9,90
                </motion.a>

                <div className="flex items-center justify-center gap-1.5 mt-1.5 text-[10px] text-muted-foreground">
                  <ShieldCheck className="w-3 h-3 text-cta" />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowBasicUpsell(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 22, stiffness: 320 }}
              className="bg-white rounded-2xl shadow-2xl border-2 border-cta overflow-hidden max-w-sm w-full relative max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowBasicUpsell(false)}
                className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer shadow"
                aria-label="Fechar"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="bg-gradient-to-r from-red-600 to-cta text-white py-1.5 px-3 text-center flex-shrink-0">
                <div className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[13px] font-black uppercase tracking-wider">Oferta Especial Relâmpago!</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] font-semibold opacity-95 leading-tight">
                  Leve tudo do Plano Premium por apenas:
                </p>
              </div>

              <div className="px-4 py-2 flex-1">
                <img
                  src={produtoImg}
                  alt="Pacote Premium de Arquivos STL 3D"
                  className="w-[42%] mx-auto rounded-xl mb-2"
                  loading="lazy"
                  decoding="async"
                />

                <div className="text-center mb-2">
                  <span className="text-red-600 font-extrabold line-through text-base block leading-tight">R$ 97,00</span>
                  <p className="text-[10px] text-foreground font-semibold leading-tight">por apenas</p>
                  <div className="text-3xl font-extrabold text-blue-700 leading-none">
                    R$ 19<span className="text-lg">,90</span>
                  </div>
                  <div className="inline-block bg-blue-50 text-blue-700 font-bold text-[10px] px-2 py-0.5 rounded-full mt-1">
                    Economize R$ 77,10!
                  </div>
                </div>

                <div className="border-t border-dashed border-cta/40 my-1.5" />

                <div className="flex justify-center">
                  <ul className="space-y-1 inline-flex flex-col">
                    {premiumReceberItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-cta/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-cta" />
                        </div>
                        <span className="text-[10px] text-foreground">{item}</span>
                      </li>
                    ))}
                    {premiumBonusItems.map((item, i) => (
                      <li key={`b-${i}`} className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                          <Gift className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-[10px] font-semibold text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-3 pb-2 pt-1 flex-shrink-0">
                <motion.a
                  href="https://pay.cakto.com.br/whodr5r_907770"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/whodr5r_907770', 19.90, 'Biblioteca STL 3D - Upsell Premium 19,90')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="block bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-3 py-2.5 rounded-full transition-colors w-full text-center uppercase cursor-pointer mb-1"
                >
                  <Zap className="w-3.5 h-3.5 inline mr-1" />
                  SIM! Quero o Premium por R$ 19,90
                </motion.a>

                <a
                  href="https://pay.cakto.com.br/3bjr73a_907769"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    setShowBasicUpsell(false);
                    handleCheckout(e, 'https://pay.cakto.com.br/3bjr73a_907769', 9.90, 'Biblioteca STL 3D - Básico');
                  }}
                  className="block bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-[10px] px-3 py-1 rounded-full transition-colors w-full text-center cursor-pointer border border-gray-300 mb-1.5"
                >
                  Não, quero apenas o Básico — R$ 9,90
                </a>

                <div className="flex items-center justify-center gap-2">
                  <img
                    src={paymentMethods}
                    alt="Métodos de pagamento aceitos"
                    className="w-[55%] max-w-[160px]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="border border-blue-500/40 rounded-lg px-1.5 py-1 text-center bg-blue-500/10 flex-1">
                    <p className="text-[9px] font-bold text-blue-700 flex items-center justify-center gap-0.5 leading-tight">
                      <Zap className="w-2.5 h-2.5" />
                      Acesso imediato!
                    </p>
                    <p className="text-[8px] text-muted-foreground leading-tight">
                      Garantia 7 dias
                    </p>
                  </div>
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
