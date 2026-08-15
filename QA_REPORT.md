# Relatório de qualidade — Executive Technology Portfolio

**Status:** aprovado para produção.

## QA automatizado

GitHub Actions — workflow `Portfolio Quality`:

- `node qa.mjs`
- **94 verificações aprovadas**
- **0 falhas**
- merge candidate validado com conclusão `success`

O QA cobre:

- remoção do branding `Product & Project Studio` das áreas principais
- hero executivo e nova hierarquia da Home
- Core Expertise
- rotas estratégicas sem hash routing
- títulos e descriptions próprios
- canonical
- Open Graph
- Twitter Cards
- JSON-LD
- sitemap e robots
- seis produtos preservados
- 90 Second Shield fora dos destaques da Home
- dois cases reais preservados
- estrutura de dados pronta para seis categorias futuras de cases
- certificações e emissor
- ausência de PMP não comprovado
- diferenciação do certificado `Certified Ethical Hacking — Udemy` em relação à CEH da EC-Council
- recomendações e sínteses editoriais
- LinkedIn
- Gumroad e Payhip
- foto profissional preservada
- imagem Open Graph
- viewport com zoom habilitado
- skip link e main focável
- ausência de dados pessoais sensíveis conhecidos

## QA visual

Foram validadas **56 combinações de viewport × página**:

- 7 larguras: 320, 360, 390, 430, 768, 1024 e 1440 px
- 8 rotas representativas
- ausência de overflow horizontal
- menu mobile
- hero
- Core Expertise
- cases
- recomendações
- Enterprise Technology Expertise
- Innovation Lab
- footer

Screenshots finais foram produzidos para:

- Home desktop
- Home mobile
- Projetos
- Sobre
- Innovation Lab

## SEO / arquitetura

- páginas estratégicas convertidas para HTML estático indexável
- URLs reais para `/projetos/`, `/expertise/`, `/sobre/`, `/innovation-lab/` e `/contato/`
- páginas individuais para cases e produtos
- `sitemap.xml`
- `robots.txt`
- JSON-LD `Person/ProfilePage`
- `assets/og-cover.png` em 1200 × 630
- PT-BR publicado; arquitetura preparada para futura versão humana/revisada em `/en/`

## Arquivos legados removidos

Foram removidos arquivos de runtime da arquitetura anterior que deixaram de ser utilizados:

- `identity.css`
- `quality.css`
- `profile-data.js`
- `profile-sections.js`
- `QA_LAST_RUN.md`
- `qa-report.json`

A identidade Fluent-inspired continua preservada por `styles.css` + `executive.css`.
