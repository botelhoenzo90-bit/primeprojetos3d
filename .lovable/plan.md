Para traduzir a página para o espanhol para o mercado LATAM, realizarei as seguintes alterações:

1. Atualizar o arquivo `index.html`:
   - Mudar `lang="pt-BR"` para `lang="es"`.
   - Atualizar `title`, `description` e outras metatags para espanhol.

2. Atualizar componentes de texto (`src/components/`):
   - **HeroSection.tsx**: Traduzir o título, subtítulo, botões e textos de prova social.
   - **OfferSection.tsx**: Traduzir títulos de planos, descrições dos itens, labels e mensagens de checkout.
   - **BenefitsSection.tsx**: Traduzir o título, a lista de benefícios e os textos dos botões.
   - **FAQSection.tsx**: Traduzir as perguntas e respostas.
   - **Outros componentes**: Revisar e traduzir `SalesNotification.tsx`, `FooterSection.tsx` (se necessário), etc.

3. Verificações:
   - Garantir que a moeda e referências monetárias (R$) sejam ajustadas se necessário (embora o preço esteja fixo, as labels "Real" ou "BRL" devem ser revistas).
   - Manter a lógica do TikTok Pixel intacta.
