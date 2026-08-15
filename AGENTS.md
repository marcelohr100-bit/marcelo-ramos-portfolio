# Instruções para o Codex — Marcelo Ramos Portfolio

## Posicionamento obrigatório

O site deve comunicar primeiro: Senior Project Manager, PMO, Portfolio & Project Governance, Agile/Hybrid Delivery e Digital Transformation.

Microsoft Dynamics 365 é diferenciação técnica relevante, mas secundária à identidade principal de gestão.

Innovation Lab é complementar e nunca deve aparecer antes de expertise, cases e trajetória na Home.

## Regras de verdade

- Não inventar métricas, resultados, clientes, cargos, responsabilidades, tecnologias dominadas hands-on, certificações ou depoimentos.
- Cases profissionais devem permanecer anonimizados quando necessário.
- `Technology Ecosystem` descreve o contexto técnico do projeto; não atribui desenvolvimento hands-on a Marcelo.
- Não apresentar Marcelo como PMP sem certificação correspondente.
- “Certified Ethical Hacking” deve exibir Udemy como emissor e não pode ser confundido com CEH da EC-Council.
- Não inserir Open to Work, Hire me, Contrate-me ou linguagem de freelancer.

## Arquitetura

- Preservar HTML estático e GitHub Pages sem framework pesado.
- Rotas estratégicas são URLs reais, sem `#/`.
- Toda página estratégica precisa de title, description, canonical, OG, Twitter Card e JSON-LD adequado.
- Manter `sitemap.xml` e `robots.txt` sincronizados.
- PT-BR é o idioma publicado. `/en/` só deve ser criado com tradução humana/revisada de alta qualidade.

## Innovation Lab

- Preservar os seis produtos confirmados em `data.js`.
- Links Gumroad e Payhip ficam nas páginas individuais.
- Não exibir preços locais; consultar plataforma externa.
- 90 Second Shield não deve ser destaque da Home profissional.

## QA obrigatório

Execute `node qa.mjs` após alterações e teste visualmente 320, 360, 390, 430, 768, 1024 e 1440 px.
