import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Gift, X, Sparkles, Crown } from "lucide-react";
import produtoImg from "@/assets/produto-oferta-new.png";
import produtoMockup from "@/assets/produto-mockup.png";
import paymentMethods from "@/assets/payment-methods.jpg";

const premiumReceberItems = [
  "+200 Receitas Práticas na Airfryer",
  "Receitas completas e variadas",
  "Passo a passo de cada receita",
  "Tempos e temperaturas indicados",
  "Acesso vitalício e imediato",
  "Atualizações futuras",
  "Garantia de 7 dias",
];

const premiumBonusItems = [
  "+250 Receitas com Whey Protein",
  "Marmitas Fit",
  "Sucos Detox",
];

const OfferSection = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  React.useEffect(() => {
    if (showUpsell) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showUpsell]);

  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>, url: string, _value: number, _planName: string) => {
    e.preventDefault();

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
              <Crown className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" /> Oferta Exclusiva
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-center text-green-title mb-4 tracking-tight"
          >
            Garanta seu acesso às <span className="text-cta">receitas</span>
          </motion.h2>
          <p className="text-center text-sm md:text-lg text-green-title font-semibold max-w-2xl mx-auto mb-8 px-2">
            ☕ Por menos do que você gasta em um café, você tem acesso a <span className="font-extrabold text-cta">+200 receitas</span> que vão facilitar sua rotina para <span className="underline">sempre</span>.
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
                    80% de Desconto!
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h2 className="text-center text-2xl md:text-3xl font-extrabold text-green-600 mt-2 mb-2">
                    Receitas na Airfryer
                  </h2>

                  <p className="text-center text-sm text-foreground font-semibold mb-3">
                    Restam apenas <span className="font-extrabold underline text-red-600">03 vagas</span> com desconto!
                  </p>

                  <img
                    src={produtoImg}
                      alt="Produto de receitas na airfryer"
                    className="w-1/2 mx-auto rounded-xl mb-4"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="text-center mb-4">
                    <span className="text-red-600 font-extrabold line-through text-3xl md:text-4xl block mb-0.5">R$ 97,00</span>
                    <p className="text-sm text-foreground font-semibold mb-0.5">por apenas</p>
                    <div className="text-5xl md:text-6xl font-extrabold text-green-600">
                      R$ 27<span className="text-3xl">,90</span>
                    </div>
                    <div className="inline-block bg-green-100 text-green-700 font-bold text-sm px-4 py-1 rounded-full mt-2">
                      Você economiza R$ 69,10!
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
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          </div>
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-dashed border-sage my-3" />

                  <h3 className="text-center font-extrabold text-green-title text-sm uppercase tracking-wider mb-3">
                    Bônus Inclusos:
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
                    <motion.a
                      href="https://pay.cakto.com.br/36cgyiw_840628"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/36cgyiw_840628', 27.90, 'Receitas na Airfryer - Premium')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block w-full bg-cta hover:bg-cta-hover text-white font-black text-sm md:text-xl px-4 py-5 rounded-full text-center shadow-lg shadow-orange-200 transition-all uppercase tracking-wide mb-4 cursor-pointer"
                    >
                      <Zap className="w-5 h-5 inline mr-2" />
                      SIM! QUERO MINHAS +200 RECEITAS AGORA
                    </motion.a>
                    <p className="text-center text-xs md:text-sm text-[#064E3B] font-semibold -mt-2 mb-2 flex items-center justify-center gap-1.5">
                      🛡️ Garantia de 7 dias · Acesso imediato por e-mail
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

                    <div className="mt-3 border border-green-500/40 rounded-xl p-2.5 text-center bg-green-500/10">
                      <p className="text-sm font-bold text-green-600 flex items-center justify-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        Acesso imediato após a compra!
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Finalizou o pedido? Confira seu e-mail e acesse agora mesmo.
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
                  alt="Pacote +200 Receitas na Airfryer com bônus"
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
                  onClick={(e) => handleCheckout(e, 'https://pay.cakto.com.br/etagmjj_848143', 14.90, 'Receitas na Airfryer - Upsell Premium')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="block bg-cta hover:bg-cta-hover text-cream font-bold text-sm px-4 py-2.5 rounded-xl transition-colors animate-pulse-glow w-full text-center uppercase whitespace-nowrap cursor-pointer mb-1.5"
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
                    handleCheckout(e, 'https://pay.cakto.com.br/kv9j6ie_848142', 9.90, 'Receitas na Airfryer - Básico');
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
    </>
  );
};

export default OfferSection;
