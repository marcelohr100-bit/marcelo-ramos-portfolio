# Marcelo Ramos — Executive Technology Portfolio

Portfólio profissional de **Marcelo Henrique Ramos**, posicionado prioritariamente em **Project Management, PMO, Portfolio & Project Governance, Agile/Hybrid Delivery e Digital Transformation**.

Microsoft Dynamics 365 permanece como diferenciação técnica relevante dentro de uma identidade profissional mais ampla de gestão e delivery. Produtos próprios ficam organizados em **Innovation Lab** como demonstração complementar de product thinking e iniciativa.

## Estrutura pública

- `/` — apresentação executiva
- `/projetos/` — cases profissionais
- `/expertise/` — core expertise, método e ecossistemas de trabalho
- `/sobre/` — trajetória, formação, certificações e recomendações
- `/innovation-lab/` — produtos, experimentos e soluções digitais
- `/contato/` — conexões profissionais

Cases e produtos possuem URLs estáticas próprias, canonical e metadata individual.

## Arquitetura

- HTML estático compatível com GitHub Pages
- CSS leve, mantendo a identidade Fluent-inspired
- JavaScript mínimo para navegação mobile e acessibilidade
- Sem banco de dados, backend, login ou checkout
- Conteúdo de referência em `data.js`
- Rotas estratégicas sem hash routing
- JSON-LD `Person/ProfilePage`
- Open Graph / Twitter Cards
- `sitemap.xml` e `robots.txt`

## Internacionalização

A arquitetura usa rotas estáticas e metadata por página, permitindo adicionar uma versão humana revisada em `/en/` no futuro. Neste ciclo, somente PT-BR é publicado para evitar tradução de baixa qualidade.

## Publicação

GitHub Pages: `https://marcelohr100-bit.github.io/marcelo-ramos-portfolio/`

Branch: `main` · pasta: `/ (root)`

## QA

Execute:

```bash
node qa.mjs
```

O QA valida posicionamento, rotas, metadata, canonical, Open Graph, JSON-LD, sitemap, links de produtos, certificações, recomendações e ausência de hash routing estratégico.
