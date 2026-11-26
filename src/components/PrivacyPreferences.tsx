import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { needsAnswer, onConsentChange, readChoice, saveChoices, type Purpose } from '@/lib/consent';
import { useEffect, useRef, useState } from 'react';

const purposes: Purpose[] = ['analytics', 'advertising'];

const PrivacyPreferences = () => {
  const [panel, setPanel] = useState<'banner' | 'settings' | null>(null);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const policyRef = useRef<HTMLDetailsElement>(null);
  const settingsRef = useRef<HTMLButtonElement>(null);
  const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;

  useEffect(() => {
    let active = true;
    const refresh = async () => {
      const required = await needsAnswer(purposes);
      if (!active) return;
      setAnalytics(readChoice('analytics') === 'granted');
      setAdvertising(readChoice('advertising') === 'granted');
      setPanel(current => current === 'settings' ? current : required ? 'banner' : null);
    };
    void refresh();
    const unsubscribe = onConsentChange(() => { void refresh(); });
    return () => { active = false; unsubscribe(); };
  }, []);

  useEffect(() => { if (panel) panelRef.current?.focus(); }, [panel]);

  const openSettings = () => {
    setAnalytics(readChoice('analytics') === 'granted');
    setAdvertising(readChoice('advertising') === 'granted');
    setPanel('settings');
  };
  const save = (all?: boolean) => {
    saveChoices({
      analytics: (all ?? analytics) ? 'granted' : 'denied',
      advertising: (all ?? advertising) ? 'granted' : 'denied',
    });
    setPanel(null);
    settingsRef.current?.focus({ preventScroll: true });
  };
  const showPolicy = () => {
    if (policyRef.current) policyRef.current.open = true;
    setPanel(null);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-cream">
        <Button ref={settingsRef} variant="ghost" size="sm" onClick={openSettings}>Configurações de cookies</Button>
        <a href="#politica-privacidade" onClick={showPolicy} className="underline">Política de privacidade</a>
      </div>
      <details id="politica-privacidade" ref={policyRef} className="mx-auto max-w-2xl text-left text-xs text-cream/90">
        <summary className="cursor-pointer">Política de privacidade e publicidade</summary>
        <div className="mt-3 space-y-3 leading-relaxed">
          <p>Contamos visitas com a Lovable sem cookies e sem identificar você. São medidos páginas visitadas, origem, país, navegador e dispositivo, tempo na página, velocidade e erros. Nas regiões com aviso, cliques aguardam sua autorização para análise. Os detalhes ficam disponíveis por 90 dias e os totais diários por um ano.</p>
          <p>Quando a análise é permitida, o Microsoft Clarity usa cookies para registrar cliques, rolagem e movimentos na página e entender como ela é usada. Ele não recebe dados de pagamento.</p>
          <p>Quando a publicidade é permitida, o pixel da Meta compartilha visitas, endereço da página, informações do navegador e identificadores de cookies com a Meta para medir e otimizar anúncios e formar públicos. Esta página não envia dados de formulários nem confirmações de compras para a Meta.</p>
          <p>Quando a publicidade é permitida, a Cakto guarda neste site os parâmetros de campanha e de clique do anúncio por 90 dias e um identificador aleatório do visitante, repassando a campanha aos links de pagamento. Também recebe visitas, tipo de dispositivo, origem e campanha para medir visitas e atribuir vendas aos anúncios. O identificador do visitante permanece até a retirada da autorização ou limpeza dos dados do navegador.</p>
          <p>Na UE/EEE, Reino Unido, Suíça, em todo o Canadá e quando a localização é desconhecida, Meta e Cakto aguardam sua autorização para publicidade. Nas outras regiões, podem funcionar sem uma escolha prévia, salvo recusa ou sinal de privacidade do navegador.</p>
          <p>Você pode aceitar ou recusar cada finalidade em Configurações de cookies e retirar a autorização a qualquer momento. A recusa interrompe novos envios de publicidade, remove os dados de campanha da Cakto deste navegador e vale também nas outras abas abertas. Dados já enviados não são apagados por essa escolha. O sinal Global Privacy Control impede a publicidade mesmo após uma aceitação anterior. Suas escolhas são guardadas neste navegador, por até 365 dias ao aceitar ou 183 dias ao recusar; após esse prazo podemos perguntar novamente.</p>
          <p>O pagamento acontece no site da Cakto, sujeito à política de privacidade daquele serviço. O vídeo é fornecido pela Wistia, que recebe os dados necessários para entregar o conteúdo, como endereço IP e informações do navegador.</p>
        </div>
      </details>
      {panel && (
        <div ref={panelRef} role="dialog" aria-modal="false" aria-labelledby="consent-title" tabIndex={-1} className="fixed bottom-3 left-3 right-3 z-[100] mx-auto max-w-xl max-h-[85dvh] overflow-y-auto rounded-lg border border-border bg-background p-4 text-left text-foreground shadow-lg sm:p-5">
          <h2 id="consent-title" className="text-lg font-extrabold">{panel === 'banner' ? 'Sua privacidade, sua escolha' : 'Configurações de cookies'}</h2>
          {panel === 'banner' ? (
            <div className="mt-2 space-y-2 text-sm leading-relaxed">
              <p>Contamos visitas sem cookies. Se você aceitar análise, também medimos cliques e o uso da página com o Microsoft Clarity.</p>
              <p>Com sua autorização para publicidade, usamos cookies e armazenamento no navegador para medir anúncios, guardar campanhas por 90 dias, associá-las ao pagamento e formar públicos.</p>
            </div>
          ) : (
            <div className="mt-3 space-y-3 text-sm">
              {gpc && <p>O sinal de privacidade do seu navegador está ativo. As opções permanecem desativadas.</p>}
              <div className="flex justify-between gap-3 border-b border-border pb-3"><span className="font-bold">Necessários</span><span>Sempre ativos</span></div>
              <label className="flex items-center justify-between gap-3"><span>Análise, fornecida pela Lovable e Microsoft Clarity</span><Switch aria-label="Análise, fornecida pela Lovable e Microsoft Clarity" checked={analytics} disabled={gpc} onCheckedChange={setAnalytics} /></label>
              <label className="flex items-center justify-between gap-3"><span>Publicidade, fornecida pela Meta e Cakto</span><Switch aria-label="Publicidade, fornecida pela Meta e Cakto" checked={advertising} disabled={gpc} onCheckedChange={setAdvertising} /></label>
            </div>
          )}
          <a href="#politica-privacidade" onClick={showPolicy} className="mt-3 inline-block text-xs text-primary underline">Política de privacidade</a>
          {panel === 'banner' ? (
            <>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={() => save(true)}>Aceitar tudo</Button>
                <Button variant="outline" onClick={() => save(false)}>Recusar tudo</Button>
              </div>
              <Button variant="ghost" className="mt-2 w-full" onClick={openSettings}>Configurações de cookies</Button>
            </>
          ) : <Button variant="outline" className="mt-3 w-full" onClick={() => save()}>Salvar preferências</Button>}
        </div>
      )}
    </>
  );
};
export default PrivacyPreferences;