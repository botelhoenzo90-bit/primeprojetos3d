import { Button } from '@/components/ui/button';
import { readChoice, saveChoices } from '@/lib/consent';
import { useState } from 'react';

const PrivacyPreferences = () => {
  const [denied, setDenied] = useState(readChoice('advertising') === 'denied');
  return (
    <details className="text-xs text-cream/90">
      <summary className="cursor-pointer">Privacidade e publicidade</summary>
      <div className="mx-auto mt-3 max-w-xl space-y-3 text-left">
        <p>Quando permitido, compartilhamos com a Meta visitas, endereço desta página, informações do navegador e identificadores de cookies para medir anúncios e formar públicos. Não enviamos dados de formulários nem confirmação de compras.</p>
        <p>Na UE/EEE, Reino Unido, Suíça, Canadá ou quando a localização é desconhecida, este pixel permanece bloqueado sem autorização. O sinal de privacidade do navegador também impede seu uso.</p>
        <Button variant="secondary" size="sm" disabled={denied} onClick={() => { saveChoices({ advertising: 'denied' }); setDenied(true); }}>{denied ? 'Publicidade desativada' : 'Desativar publicidade'}</Button>
      </div>
    </details>
  );
};
export default PrivacyPreferences;