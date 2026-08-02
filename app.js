(() => {
  'use strict'

  const data = window.PORTFOLIO_DATA
  const main = document.querySelector('#main')
  const nav = document.querySelector('#nav')
  const menuButton = document.querySelector('#menu-button')
  const skipButton = document.querySelector('#skip-link')
  document.querySelector('#year').textContent = new Date().getFullYear()

  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char])

  const list = (items = []) => `<ul class="bullet-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
  const chips = (items = []) => `<div class="chip-cloud">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>`
  const purchaseLinks = (product, mode = 'compact') => `<div class="purchase-links ${mode}" aria-label="Comprar ${escapeHtml(product.name)}">${product.purchaseLinks.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.platform)} ↗</a>`).join('')}</div>`

  function setMeta(title, description) {
    document.title = title
    document.querySelector('meta[name="description"]').setAttribute('content', description)
  }

  function productCover(product, compact = false, eager = false) {
    return `<figure class="product-cover${compact ? ' compact' : ''}">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.imageAlt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">
    </figure>`
  }

  function projectVisual(project) {
    const items = project.deliverables.slice(0, 4).map((item) => `<span>${escapeHtml(item)}</span>`).join('')
    return `<div class="project-visual" aria-hidden="true"><div class="project-visual-top"><i></i><i></i><i></i></div><div class="project-visual-grid">${items}</div></div>`
  }

  function productCard(product) {
    return `<article class="card product-card">
      ${productCover(product, true)}
      <div class="card-body">
        <div class="meta-line"><span>${escapeHtml(product.category)}</span><span>${escapeHtml(product.type)}</span></div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.summary)}</p>
        <div class="card-actions">
          <a class="button button-secondary" href="#/produtos/${escapeHtml(product.slug)}">Ver detalhes</a>
          ${purchaseLinks(product)}
        </div>
      </div>
    </article>`
  }

  function projectCard(project) {
    return `<article class="card project-card">
      ${projectVisual(project)}
      <div class="card-body">
        <div class="meta-line"><span>${escapeHtml(project.status)}</span><span>${escapeHtml(project.category)}</span></div>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <a class="text-link" href="#/projetos/${escapeHtml(project.slug)}">Conhecer o projeto →</a>
      </div>
    </article>`
  }

  function pageHero(label, title, description) {
    return `<section class="page-hero"><div class="container"><span class="eyebrow dark">${escapeHtml(label)}</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div></section>`
  }

  function renderHome() {
    setMeta(data.site.name, data.site.subtitle)
    const heroProducts = data.products.slice(0, 3)

    main.innerHTML = `
      <section class="hero">
        <div class="hero-grid-bg"></div>
        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="eyebrow dark">Product &amp; Project Studio</span>
            <h1>${escapeHtml(data.site.tagline)}</h1>
            <p>${escapeHtml(data.site.subtitle)}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#/produtos">Explorar produtos</a>
              <a class="button button-ghost-dark" href="#/projetos">Ver projetos</a>
              <a class="button button-link-dark" href="${escapeHtml(data.site.linkedin)}" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
            <div class="hero-meta"><span>${escapeHtml(data.site.owner)}</span><span>${escapeHtml(data.site.location)}</span></div>
          </div>
          <div class="hero-products" aria-label="Produtos digitais em destaque">
            ${heroProducts.map((product, index) => `<a class="hero-product hero-product-${index + 1}" href="#/produtos/${escapeHtml(product.slug)}">${productCover(product, true, true)}</a>`).join('')}
          </div>
        </div>
      </section>

      <section class="section container" id="produtos-destaque">
        <div class="section-head">
          <div><span class="eyebrow">Catálogo real</span><h2>Produtos em destaque</h2><p>Quatro produtos reais com opções oficiais de compra no Gumroad e na Payhip, sem itens demonstrativos.</p></div>
          <a class="text-link" href="#/produtos">Ver catálogo →</a>
        </div>
        <div class="cards-grid products-grid">${data.products.map(productCard).join('')}</div>
      </section>

      <section class="section section-soft">
        <div class="container">
          <div class="section-head">
            <div><span class="eyebrow">Portfólio</span><h2>Projetos selecionados</h2><p>Cases reais e iniciativas em desenvolvimento, sem conceitos fictícios.</p></div>
            <a class="text-link" href="#/projetos">Ver projetos →</a>
          </div>
          <div class="cards-grid projects-grid">${data.projects.map(projectCard).join('')}</div>
        </div>
      </section>

      <section class="section container">
        <div class="section-head compact-head"><div><span class="eyebrow">Método</span><h2>Do problema à entrega</h2></div></div>
        <ol class="process-grid">${data.method.map((step) => `<li><span>${step.number}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></li>`).join('')}</ol>
      </section>

      <section class="section section-soft">
        <div class="container about-preview">
          <img src="assets/profile.png" alt="Marcelo Henrique Ramos em ambiente profissional" loading="lazy">
          <div><span class="eyebrow">Sobre</span><h2>Gestão, produto e tecnologia na mesma conversa.</h2><p>${escapeHtml(data.profile.intro)}</p>${chips(data.profile.specialties.slice(0, 6))}<a class="button button-secondary" href="#/sobre">Conhecer trajetória</a></div>
        </div>
      </section>

      <section class="section container">
        <div class="final-cta"><span class="eyebrow dark">Contato</span><h2>Vamos conversar sobre projetos e produtos digitais.</h2><p>O canal profissional principal é o LinkedIn.</p><a class="button button-primary" href="${escapeHtml(data.site.linkedin)}" target="_blank" rel="noreferrer">Abrir LinkedIn ↗</a></div>
      </section>`
  }

  function renderProducts() {
    setMeta('Produtos — Marcelo Ramos Studio', 'Produtos digitais publicados por Marcelo Ramos com compra no Gumroad e na Payhip.')
    main.innerHTML = `${pageHero('Produtos', 'Catálogo digital', 'Escolha a plataforma de compra: Gumroad ou Payhip.')}
      <section class="section container"><div class="cards-grid products-grid">${data.products.map(productCard).join('')}</div></section>`
  }

  function renderProjects() {
    setMeta('Projetos — Marcelo Ramos Studio', 'Projetos selecionados de produto, integração e transformação digital.')
    main.innerHTML = `${pageHero('Projetos', 'Projetos selecionados', 'Iniciativas reais e cases profissionais apresentados sem informações confidenciais.')}
      <section class="section container"><div class="cards-grid projects-grid">${data.projects.map(projectCard).join('')}</div></section>`
  }

  function renderProduct(slug) {
    const product = data.products.find((item) => item.slug === slug)
    if (!product) return renderNotFound()

    setMeta(`${product.name} — Produto | Marcelo Ramos Studio`, product.summary)
    main.innerHTML = `
      <section class="detail-hero">
        <div class="container detail-hero-grid">
          <div>
            <a class="back-link" href="#/produtos">← Voltar para produtos</a>
            <div class="meta-line detail-meta"><span>${escapeHtml(product.category)}</span><span>${escapeHtml(product.type)}</span></div>
            <h1>${escapeHtml(product.name)}</h1>
            <p>${escapeHtml(product.summary)}</p>
            ${purchaseLinks(product, 'hero')}
          </div>
          ${productCover(product, false, true)}
        </div>
      </section>
      <section class="section container detail-content">
        <div class="detail-columns">
          <article><span class="eyebrow">Público</span><h2>Para quem é</h2><p>${escapeHtml(product.audience)}</p></article>
          <article><span class="eyebrow">Destaques</span><h2>O que entrega</h2>${list(product.highlights)}</article>
        </div>
        <article class="included-block"><span class="eyebrow">Conteúdo</span><h2>O que está incluído</h2>${list(product.included)}</article>
        ${product.notice ? `<p class="notice">${escapeHtml(product.notice)}</p>` : ''}
        <div class="detail-cta"><p>Preço, versão, impostos e condições de entrega devem ser conferidos na plataforma escolhida.</p></div>
      </section>`
  }

  function renderProject(slug) {
    const project = data.projects.find((item) => item.slug === slug)
    if (!project) return renderNotFound()

    setMeta(`${project.name} — Projeto | Marcelo Ramos Studio`, project.summary)
    main.innerHTML = `
      <section class="detail-hero">
        <div class="container detail-hero-grid">
          <div>
            <a class="back-link" href="#/projetos">← Voltar para projetos</a>
            <div class="meta-line detail-meta"><span>${escapeHtml(project.status)}</span><span>${escapeHtml(project.category)}</span></div>
            <h1>${escapeHtml(project.name)}</h1>
            <p>${escapeHtml(project.summary)}</p>
          </div>
          ${projectVisual(project)}
        </div>
      </section>
      <section class="section container detail-content">
        <div class="detail-columns">
          <article><span class="eyebrow">Desafio</span><h2>Contexto</h2><p>${escapeHtml(project.challenge)}</p></article>
          <article><span class="eyebrow">Abordagem</span><h2>Como foi conduzido</h2><p>${escapeHtml(project.approach)}</p></article>
        </div>
        <article class="included-block"><span class="eyebrow">Entregas</span><h2>Escopo principal</h2>${list(project.deliverables)}</article>
        <article><span class="eyebrow">Tecnologias</span>${chips(project.technologies)}</article>
      </section>`
  }

  function renderAbout() {
    setMeta('Sobre Marcelo Ramos — Product & Project Studio', 'Trajetória profissional, formação e especialidades de Marcelo Henrique Ramos.')
    main.innerHTML = `${pageHero('Sobre', data.site.owner, data.site.role)}
      <section class="section container about-page">
        <img src="assets/profile.png" alt="Marcelo Henrique Ramos em ambiente profissional">
        <div><span class="eyebrow">Perfil profissional</span><h2>Projetos bem executados começam com problemas bem entendidos.</h2><p>${escapeHtml(data.profile.intro)}</p><a class="button button-primary" href="${escapeHtml(data.site.linkedin)}" target="_blank" rel="noreferrer">Abrir LinkedIn ↗</a></div>
      </section>
      <section class="section section-soft"><div class="container profile-grid"><article><h2>Formação</h2>${list(data.profile.education)}</article><article><h2>Especialidades</h2>${chips(data.profile.specialties)}</article><article><h2>Ferramentas</h2>${chips(data.profile.tools)}</article></div></section>`
  }

  function renderContact() {
    setMeta('Contato — Marcelo Ramos Studio', 'Canais profissionais de Marcelo Henrique Ramos.')
    main.innerHTML = `${pageHero('Contato', 'Vamos conversar', 'Oportunidades profissionais, parcerias e conversas sobre produtos digitais.')}
      <section class="section container contact-grid">
        <a class="contact-card" href="${escapeHtml(data.site.linkedin)}" target="_blank" rel="noreferrer"><span>LinkedIn</span><h2>Perfil profissional</h2><p>Carreira, projetos e oportunidades.</p><strong>Abrir perfil ↗</strong></a>
        <a class="contact-card" href="#/produtos"><span>Produtos</span><h2>Catálogo digital</h2><p>Conheça os produtos e escolha entre Gumroad e Payhip.</p><strong>Ver catálogo →</strong></a>
      </section>`
  }

  function renderNotFound() {
    setMeta('Página não encontrada — Marcelo Ramos Studio', 'A página solicitada não existe.')
    main.innerHTML = '<section class="not-found"><div><strong>404</strong><h1>Página não encontrada</h1><p>Esse caminho não existe ou foi alterado.</p><a class="button button-primary" href="#/">Voltar ao início</a></div></section>'
  }

  function setActiveNavigation() {
    document.querySelectorAll('.nav a').forEach((link) => {
      const href = link.getAttribute('href')
      const active = href === '#/' ? !location.hash || location.hash === '#/' : location.hash.startsWith(href)
      link.classList.toggle('active', active)
    })
  }

  function router() {
    nav.classList.remove('nav-open')
    menuButton.setAttribute('aria-expanded', 'false')
    const route = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean)

    if (route.length === 0) renderHome()
    else if (route[0] === 'produtos' && route.length === 1) renderProducts()
    else if (route[0] === 'produtos' && route[1]) renderProduct(route[1])
    else if (route[0] === 'projetos' && route.length === 1) renderProjects()
    else if (route[0] === 'projetos' && route[1]) renderProject(route[1])
    else if (route[0] === 'sobre' && route.length === 1) renderAbout()
    else if (route[0] === 'contato' && route.length === 1) renderContact()
    else renderNotFound()

    setActiveNavigation()
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  skipButton.addEventListener('click', () => main.focus())
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open')
    menuButton.setAttribute('aria-expanded', String(open))
  })
  window.addEventListener('hashchange', router)
  router()
})()
