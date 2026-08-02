# Marcelo Ramos — Product & Project Studio

Portfólio profissional e catálogo estático de projetos e produtos digitais.

## Por que esta versão é gratuita

- HTML, CSS e JavaScript puros
- Sem dependências e sem processo de build
- Sem banco de dados, login, checkout ou backend
- Hospedagem gratuita no GitHub Pages
- Manutenção simples pelo Codex

## Estrutura

- `index.html`: estrutura principal
- `styles.css`: design responsivo
- `data.js`: projetos, produtos, perfil e links
- `app.js`: navegação, filtros e renderização
- `assets/`: foto e identidade visual
- `AGENTS.md`: regras para o Codex

## Adicionar projeto ou produto

Edite `data.js` e copie um objeto existente. Os cards, filtros e páginas individuais são gerados automaticamente.

Links externos aparecem apenas quando `purchaseUrl`, `projectUrl` ou `externalUrl` estão preenchidos.

## Publicar no GitHub Pages

1. Envie todos os arquivos para a branch `main`.
2. Abra **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Selecione `main` e `/ (root)`.
5. Salve.

Endereço esperado:

`https://marcelohr100-bit.github.io/marcelo-ramos-portfolio/`
## Produtos publicados

O catálogo atual apresenta quatro produtos reais comercializados externamente no Gumroad:

- 90 Second Shield
- SBOM Drift Desk
- CRA 24H Incident Desk
- A50 Agency Desk

As capas usadas no portfólio ficam em `assets/products/` e podem ser substituídas sem alterar a lógica do site.

