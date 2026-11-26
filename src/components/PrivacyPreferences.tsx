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
  };

  return (
    <>
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