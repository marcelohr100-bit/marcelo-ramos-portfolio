(() => {
  const data = window.PORTFOLIO_DATA
  const main = document.querySelector('#main')
  const nav = document.querySelector('#nav')
  const menuButton = document.querySelector('#menu-button')
  document.querySelector('#year').textContent = new Date().getFullYear()
  document.querySelector('#skip-link')?.addEventListener('click', () => {
    main.setAttribute('tabindex', '-1')
    main.focus()
  })

  const escapeHtml = (value='') => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[char]))
  const list = items => `<ul class="bullet-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
  const chips = items => `<div class="chip-cloud">${items.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>`
  const externalButton = (url, label) => url ? `<a class="button button-primary" href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>` : ''

  function mockup(item, compact=false) {
    if (item.image) {
      return `<figure class="product-cover ${compact?'compact':''}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || `Capa de ${item.name}`)}" loading="lazy"><figcaption>${escapeHtml(item.label || 'Produto digital')}</figcaption></figure>`
    }
    const variant = item.variant || 'dashboard'
    let content = ''
    if (variant === 'dashboard') content = `<div class="mockup-dashboard"><div class="mockup-sidebar"></div><div class="mockup-main"><div class="mockup-kpis"><span></span><span></span><span></span></div><div class="mockup-chart"><b></b><b></b><b></b><b></b><b></b><b></b></div><div class="mockup-lines"><span></span><span></span><span></span></div></div></div>`
    if (variant === 'menu') content = `<div class="mockup-menu"><div class="mockup-phone">${'<div class="mockup-food"><span></span><span></span></div>'.repeat(3)}</div><div class="mockup-order"><span></span><span></span><span></span><button>Pedido</button></div></div>`
    if (variant === 'roadmap') content = `<div class="mockup-roadmap">${['Descoberta','Protótipo','MVP','Lançamento'].map(x=>`<div><small>${x}</small><span></span></div>`).join('')}</div>`
    if (variant === 'workflow') content = `<div class="mockup-workflow"><div class="node">Início</div><em></em><div class="node">Aprovação</div><em></em><div class="node">Execução</div><div class="audit"><span></span><span></span><span></span></div></div>`
    return `<div class="mockup mockup-${item.accent||'mixed'} ${compact?'compact':''}"><div class="mockup-topbar"><i></i><i></i><i></i></div>${content}<span class="mockup-label">${escapeHtml(item.label||'Projeto')}</span></div>`
  }

  function projectCard(project) {
    return `<article class="card">${mockup(project,true)}<div class="card-body"><div class="meta-row"><span class="status">${escapeHtml(project.status)}</span><span>${escapeHtml(project.category)}</span></div><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.shortDescription)}</p>${chips(project.technologies.slice(0,4))}<a class="text-link" href="#/projetos/${project.slug}">Ver projeto →</a></div></article>`
  }
  function productCard(product) {
    return `<article class="card">${mockup(product,true)}<div class="card-body"><div class="meta-row"><span class="status">${escapeHtml(product.status)}</span><span>${escapeHtml(product.type)}</span></div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.summary)}</p>${product.price?`<strong class="price">${escapeHtml(product.price)}</strong>`:''}<div class="card-actions"><a class="button button-secondary" href="#/produtos/${product.slug}">Detalhes</a>${externalButton(product.externalUrl,'Comprar')}</div></div></article>`
  }

  function setTitle(title, description) {
    document.title = title
    document.querySelector('meta[name="description"]').setAttribute('content', description)
  }
  function pageHero(eyebrow, title, description) { return `<section class="page-hero"><div class="container"><span class="eyebrow dark">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div></section>` }

  function renderHome() {
    setTitle(data.site.name, data.site.subtitle)
    const featuredProjects = data.projects.filter(x=>x.featured).slice(0,3)
    const featuredProducts = data.products.filter(x=>x.featured).slice(0,3)
    main.innerHTML = `
      <section class="hero"><div class="hero-grid-bg"></div><div class="container hero-grid">
        <div class="hero-copy"><span class="eyebrow dark">Product &amp; Project Studio</span><h1>${data.site.tagline}</h1><p>${data.site.subtitle}</p><div class="hero-actions"><a class="button button-primary" href="#/projetos">Conhecer projetos →</a><a class="button button-ghost-dark" href="#/produtos">Ver produtos</a><a class="button button-link-dark" href="${data.site.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div class="hero-meta"><span>${data.site.owner}</span><span>${data.site.location}</span></div></div>
        <div class="hero-visual"><div class="hero-card hero-card-main">${mockup(data.projects[0])}</div><div class="hero-card hero-card-top">${mockup(data.projects[2])}</div><div class="hero-card hero-card-bottom">${mockup(data.projects[1])}</div></div>
      </div></section>
      <section class="section container"><div class="section-head"><div><span class="eyebrow">Portfólio</span><h2>Projetos em destaque</h2><p>Problema, estratégia, solução e aprendizados — sem maquiagem corporativa.</p></div><a class="text-link" href="#/projetos">Ver todos →</a></div><div class="cards-grid">${featuredProjects.map(projectCard).join('')}</div></section>
      <section class="section section-soft"><div class="container"><div class="section-head"><div><span class="eyebrow">Produtos</span><h2>Produtos digitais publicados</h2><p>Ferramentas e guias reais disponíveis para compra e entrega externa pelo Gumroad.</p></div><a class="text-link" href="#/produtos">Ver catálogo →</a></div><div class="cards-grid">${featuredProducts.map(productCard).join('')}</div></div></section>
      <section class="section container"><div class="section-head"><div><span class="eyebrow">Método</span><h2>Da dor ao produto</h2><p>Uma linha de trabalho pragmática para não construir feature gourmet que ninguém pediu.</p></div></div><ol class="process-grid">${data.process.map(step=>`<li><span>${step.number}</span><h3>${step.title}</h3><p>${step.text}</p></li>`).join('')}</ol></section>
      <section class="section section-soft"><div class="container about-preview"><img src="assets/profile.png" alt="Marcelo Henrique Ramos em ambiente profissional"><div><span class="eyebrow">Sobre</span><h2>Gestão, produto e tecnologia na mesma conversa.</h2><p>Sou Gerente de Projetos de Tecnologia, com formação em Ciência da Computação, MBA em Gestão de Projetos Ágeis e pós-graduação em Cloud Computing. Atuo traduzindo problemas de negócio em escopo, prioridades e soluções digitais viáveis.</p>${chips(data.specialties.slice(0,8))}<a class="button button-secondary" href="#/sobre">Conhecer trajetória</a></div></div></section>
      <section class="section container"><div class="section-head"><div><span class="eyebrow">Stack</span><h2>Tecnologias e ferramentas</h2><p>O conjunto muda conforme o problema. A decisão técnica vem depois da necessidade.</p></div></div><div class="tech-grid">${data.techGroups.map(g=>`<article><h3>${g.title}</h3>${chips(g.items)}</article>`).join('')}</div></section>
      <section class="section container"><div class="final-cta"><span class="eyebrow dark">Vamos conversar</span><h2>Tem um problema que pode virar produto?</h2><p>Conheça os projetos ou fale comigo pelo LinkedIn.</p><div><a class="button button-primary" href="#/projetos">Explorar projetos</a><a class="button button-ghost-dark" href="${data.site.linkedin}" target="_blank" rel="noreferrer">Abrir LinkedIn</a></div></div></section>`
  }

  function renderProjects() {
    setTitle('Projetos — Marcelo Ramos Studio','Portfólio de projetos de tecnologia e produtos digitais.')
    main.innerHTML = `${pageHero('Portfólio','Projetos','Cases reais e conceitos identificados com transparência.')}<section class="section container"><div class="filter-panel" id="project-filters"><label class="search-box">⌕<input id="project-query" placeholder="Buscar por nome ou descrição"></label><select id="project-category"><option value="">Categoria: todas</option>${[...new Set(data.projects.map(x=>x.category))].map(x=>`<option>${x}</option>`).join('')}</select><select id="project-status"><option value="">Status: todos</option>${[...new Set(data.projects.map(x=>x.status))].map(x=>`<option>${x}</option>`).join('')}</select><select id="project-tech"><option value="">Tecnologia: todas</option>${[...new Set(data.projects.flatMap(x=>x.technologies))].sort().map(x=>`<option>${x}</option>`).join('')}</select><div class="filter-footer"><span id="project-count"></span><button id="project-reset">Limpar filtros</button></div></div><div class="cards-grid list-grid" id="project-list"></div></section>`
    const draw=()=>{ const q=document.querySelector('#project-query').value.toLowerCase(); const c=document.querySelector('#project-category').value; const s=document.querySelector('#project-status').value; const t=document.querySelector('#project-tech').value; const result=data.projects.filter(p=>(!q||[p.name,p.shortDescription,p.category,...p.technologies].join(' ').toLowerCase().includes(q))&&(!c||p.category===c)&&(!s||p.status===s)&&(!t||p.technologies.includes(t))); document.querySelector('#project-list').innerHTML=result.map(projectCard).join('')||'<div class="empty-state">Nenhum projeto encontrado.</div>'; document.querySelector('#project-count').textContent=`${result.length} resultado(s)` }
    document.querySelectorAll('#project-filters input,#project-filters select').forEach(el=>el.addEventListener('input',draw)); document.querySelector('#project-reset').onclick=()=>{document.querySelectorAll('#project-filters input,#project-filters select').forEach(el=>el.value='');draw()}; draw()
  }

  function renderProducts() {
    setTitle('Produtos — Marcelo Ramos Studio','Catálogo de produtos digitais e links externos de compra.')
    main.innerHTML = `${pageHero('Catálogo','Produtos','O site apresenta as soluções; a compra acontece em plataformas externas.')}<section class="section container"><div class="filter-panel" id="product-filters"><label class="search-box">⌕<input id="product-query" placeholder="Buscar por nome ou descrição"></label><select id="product-category"><option value="">Categoria: todas</option>${[...new Set(data.products.map(x=>x.category))].map(x=>`<option>${x}</option>`).join('')}</select><select id="product-status"><option value="">Status: todos</option>${[...new Set(data.products.map(x=>x.status))].map(x=>`<option>${x}</option>`).join('')}</select><select id="product-audience"><option value="">Público: todos</option>${[...new Set(data.products.map(x=>x.audience))].map(x=>`<option>${x}</option>`).join('')}</select><div class="filter-footer"><span id="product-count"></span><button id="product-reset">Limpar filtros</button></div></div><div class="cards-grid list-grid" id="product-list"></div></section>`
    const draw=()=>{ const q=document.querySelector('#product-query').value.toLowerCase(); const c=document.querySelector('#product-category').value; const s=document.querySelector('#product-status').value; const a=document.querySelector('#product-audience').value; const result=data.products.filter(p=>(!q||[p.name,p.summary,p.category,p.audience].join(' ').toLowerCase().includes(q))&&(!c||p.category===c)&&(!s||p.status===s)&&(!a||p.audience===a)); document.querySelector('#product-list').innerHTML=result.map(productCard).join('')||'<div class="empty-state">Nenhum produto encontrado.</div>'; document.querySelector('#product-count').textContent=`${result.length} resultado(s)` }
    document.querySelectorAll('#product-filters input,#product-filters select').forEach(el=>el.addEventListener('input',draw)); document.querySelector('#product-reset').onclick=()=>{document.querySelectorAll('#product-filters input,#product-filters select').forEach(el=>el.value='');draw()}; draw()
  }

  function renderProject(slug) {
    const p=data.projects.find(x=>x.slug===slug); if(!p) return renderNotFound()
    setTitle(`${p.name} — Projeto | Marcelo Ramos Studio`,p.shortDescription)
    main.innerHTML=`<section class="detail-hero"><div class="container detail-hero-grid"><div><a class="back-link" href="#/projetos">← Voltar para projetos</a><div class="meta-row detail-meta"><span class="status">${p.status}</span><span>${p.category}</span><span>${p.period}</span></div><h1>${p.name}</h1><p>${p.shortDescription}</p><div class="hero-actions">${externalButton(p.projectUrl,'Acessar projeto')}${externalButton(p.purchaseUrl,'Ver produto')}</div></div>${mockup(p)}</div></section><section class="section container detail-content"><div class="two-columns"><article><h2>Contexto</h2><p>${p.context}</p></article><article><h2>Problema</h2><p>${p.problem}</p></article></div><div class="two-columns"><article><h2>Objetivos</h2>${list(p.objectives)}</article><article><h2>Processo</h2>${list(p.process)}</article></div><article><h2>Solução</h2><p>${p.solution}</p></article><div class="two-columns"><article><h2>Funcionalidades</h2>${list(p.features)}</article><article><h2>Tecnologias</h2>${chips(p.technologies)}</article></div>${p.roadmap?`<article><h2>Roadmap futuro</h2><p class="note">Os itens abaixo não fazem parte do MVP atual.</p>${list(p.roadmap)}</article>`:''}<article><h2>Aprendizados</h2>${list(p.learnings)}</article></section>`
  }

  function renderProduct(slug) {
    const p=data.products.find(x=>x.slug===slug); if(!p) return renderNotFound()
    setTitle(`${p.name} — Produto | Marcelo Ramos Studio`,p.summary)
    main.innerHTML=`<section class="detail-hero"><div class="container detail-hero-grid"><div><a class="back-link" href="#/produtos">← Voltar para produtos</a><div class="meta-row detail-meta"><span class="status">${p.status}</span><span>${p.type}</span><span>${p.audience}</span></div><h1>${p.name}</h1><p>${p.description}</p>${p.price?`<div class="detail-price">${p.price}</div>`:''}<div class="hero-actions">${p.externalUrl?externalButton(p.externalUrl,'Comprar em site externo'):'<span class="button button-disabled">Ainda não disponível</span>'}</div></div>${mockup(p)}</div></section><section class="section container detail-content"><div class="two-columns"><article><h2>Problema resolvido</h2><p>${p.problemSolved}</p></article><article><h2>Forma de entrega</h2><p>${p.delivery}</p></article></div><div class="two-columns"><article><h2>Benefícios</h2>${list(p.benefits)}</article><article><h2>Funcionalidades</h2>${list(p.features)}</article></div><article><h2>O que está incluído</h2>${list(p.included)}</article><article><h2>Perguntas frequentes</h2><div class="faq-grid">${p.faq.map(x=>`<div><h3>${x.question}</h3><p>${x.answer}</p></div>`).join('')}</div></article>${p.projectSlug?`<a class="button button-secondary" href="#/projetos/${p.projectSlug}">Ver projeto relacionado</a>`:''}</section>`
  }

  function renderAbout() {
    setTitle('Sobre Marcelo Ramos — Product & Project Studio','Trajetória profissional, formação e especialidades de Marcelo Henrique Ramos.')
    main.innerHTML=`${pageHero('Sobre',data.site.owner,data.site.role)}<section class="section container about-page"><img src="assets/profile.png" alt="Marcelo Henrique Ramos em ambiente profissional"><div><span class="eyebrow">Perfil profissional</span><h2>Projetos bem executados começam com problemas bem entendidos.</h2><p>Atuo na interseção entre gestão de projetos, produto e tecnologia. Minha responsabilidade é transformar necessidades de negócio em escopo claro, prioridades objetivas e entregas acompanháveis.</p><p>Minha experiência inclui projetos corporativos com Microsoft Dynamics 365, ERP e CRM, liderança de equipes, gestão de stakeholders, planejamento e criação de produtos digitais próprios.</p><a class="button button-primary" href="${data.site.linkedin}" target="_blank" rel="noreferrer">Abrir LinkedIn ↗</a></div></section><section class="section section-soft"><div class="container two-columns"><article><h2>Formação</h2>${list(data.education)}</article><article><h2>Especialidades</h2>${chips(data.specialties)}</article></div></section><section class="section container"><div class="section-head"><div><span class="eyebrow">Ferramentas</span><h2>Stack de atuação</h2></div></div><div class="tech-grid">${data.techGroups.map(g=>`<article><h3>${g.title}</h3>${chips(g.items)}</article>`).join('')}</div></section>`
  }

  function renderContact() {
    setTitle('Contato — Marcelo Ramos Studio','Entre em contato com Marcelo Henrique Ramos pelo LinkedIn.')
    main.innerHTML=`${pageHero('Contato','Vamos conversar','O canal público configurado neste MVP é o LinkedIn.')}<section class="section container contact-grid"><a class="contact-card" href="${data.site.linkedin}" target="_blank" rel="noreferrer"><div><h2>LinkedIn</h2><p>Oportunidades profissionais, parcerias e conversas sobre produtos digitais.</p><strong>Abrir perfil ↗</strong></div></a><article class="contact-card muted-card"><div><h2>Site estático e privado por padrão</h2><p>Não há formulário, banco de dados ou armazenamento de mensagens. Isso reduz custo, manutenção e exposição de dados.</p></div></article></section>`
  }

  function renderNotFound() { setTitle('Página não encontrada — Marcelo Ramos Studio','A página solicitada não existe.'); main.innerHTML='<section class="not-found"><div><strong>404</strong><h1>Página não encontrada</h1><p>Esse caminho não existe ou foi alterado.</p><a class="button button-primary" href="#/">Voltar ao início</a></div></section>' }

  function router() {
    nav.classList.remove('nav-open'); menuButton.setAttribute('aria-expanded','false')
    const route=(location.hash.replace(/^#\/?/,'')||'').split('/').filter(Boolean)
    document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===location.hash || (location.hash===''&&a.getAttribute('href')==='#/')))
    if(route.length===0) renderHome(); else if(route[0]==='projetos'&&route.length===1) renderProjects(); else if(route[0]==='projetos'&&route[1]) renderProject(route[1]); else if(route[0]==='produtos'&&route.length===1) renderProducts(); else if(route[0]==='produtos'&&route[1]) renderProduct(route[1]); else if(route[0]==='sobre') renderAbout(); else if(route[0]==='contato') renderContact(); else renderNotFound()
    window.scrollTo({top:0,behavior:'instant'})
  }
  menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('nav-open');menuButton.setAttribute('aria-expanded',String(open))})
  window.addEventListener('hashchange',router); router()
})()
