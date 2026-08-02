# Instruções para o Codex

## Objetivo

Manter um portfólio estático, responsivo, acessível e gratuito para Marcelo Henrique Ramos.

## Regras obrigatórias

- Não adicionar serviços pagos, banco de dados, autenticação, checkout ou backend.
- Não inventar produtos, clientes, resultados, métricas, depoimentos ou preços.
- O catálogo comercial deve conter apenas os produtos confirmados em `data.js`.
- Cada produto deve manter exatamente duas ofertas oficiais em `purchaseLinks`: Gumroad e Payhip.
- Preços e condições comerciais não devem ser armazenados no site; podem mudar nas plataformas de venda.
- Cases profissionais devem permanecer anonimizados e sem informações confidenciais.
- Não criar filtros ou controles quando o volume de conteúdo não justificar sua existência.
- Todo campo em `data.js` deve ser efetivamente usado pela interface.
- Preservar funcionamento no GitHub Pages sem processo de build.

## Validação obrigatória após alterações

- Executar `node --check app.js`.
- Executar `node --check data.js`.
- Confirmar ausência de slugs duplicados.
- Confirmar que todas as imagens existem e que cada produto possui links válidos para Gumroad e Payhip.
- Testar as rotas em desktop e celular.
- Verificar ausência de erros no console e de rolagem horizontal.
