(() => {
  'use strict'

  const data = window.PORTFOLIO_DATA
  if (!data?.profile) return

  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char])

  function credentialsGrid() {
    const groups = [...new Set(data.profile.certifications.map((item) => item.group))]
    return groups.map((group) => `
      <section class="credential-group">
        <h3>${escapeHtml(group)}</h3>
        <div class="credentials-grid">
          ${data.profile.certifications.filter((item) => item.group === group).map((item) => `
            <article class="credential-card">
              <div class="credential-mark" aria-hidden="true">✓</div>
              <div>
                <strong>${escapeHtml(item.name)}</strong>
                <span>${escapeHtml(item.issuer)} · ${escapeHtml(item.issued)}</span>
              </div>
            </article>`).join('')}
        </div>
      </section>`).join('')
  }

  function recommendationsGrid() {
    return data.profile.recommendations.map((item) => `
      <article class="recommendation-card">
        <div class="recommendation-symbol" aria-hidden="true">“</div>
        <p>${escapeHtml(item.summary)}</p>
        <strong>${escapeHtml(item.author)}</strong>
        <span>Recomendação recebida no LinkedIn</span>
      </article>`).join('')
  }

  function fullSection() {
    return `<section id="credenciais" class="section professional-proof-section">
      <div class="container">
        <div class="section-head proof-heading">
          <div>
            <span class="eyebrow">Credenciais e reconhecimento</span>
            <h2>Formação contínua apoiada por experiência prática.</h2>
            <p>Certificações em gestão, liderança, agilidade, tecnologia e qualidade complementam a atuação em projetos corporativos e produtos digitais.</p>
          </div>
          <div class="proof-stats" aria-label="Resumo profissional">
            <div><strong>${data.profile.certifications.length}</strong><span>certificações</span></div>
            <div><strong>${data.profile.recommendationCount}</strong><span>recomendações no LinkedIn</span></div>
          </div>
        </div>

        <div class="credentials-wrapper">${credentialsGrid()}</div>

        <div class="recommendations-heading">
          <div><span class="eyebrow">Recomendações</span><h2>Reconhecimento de quem trabalhou comigo.</h2></div>
          <a class="text-link" href="${escapeHtml(data.site.linkedin)}" target="_blank" rel="noopener noreferrer">Ver perfil completo no LinkedIn ↗</a>
        </div>
        <div class="recommendations-grid">${recommendationsGrid()}</div>
        <p class="recommendations-note">Os textos acima são sínteses editoriais de recomendações públicas. As versões completas permanecem disponíveis no LinkedIn.</p>
      </div>
    </section>`
  }

  function compactSection() {
    return `<section id="prova-profissional" class="section professional-proof-preview">
      <div class="container proof-preview-card">
        <div>
          <span class="eyebrow">Credenciais</span>
          <h2>Conhecimento validado e liderança reconhecida.</h2>
          <p>${data.profile.certifications.length} certificações profissionais e ${data.profile.recommendationCount} recomendações recebidas no LinkedIn reforçam uma trajetória orientada por aprendizado contínuo, colaboração e entrega.</p>
        </div>
        <div class="proof-preview-actions">
          <a class="button button-secondary" href="#/sobre">Ver certificações e recomendações</a>
          <a class="text-link" href="${escapeHtml(data.site.linkedin)}" target="_blank" rel="noopener noreferrer">Abrir LinkedIn ↗</a>
        </div>
      </div>
    </section>`
  }

  function enhanceRoute() {
    const route = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean)

    document.querySelector('#credenciais')?.remove()
    document.querySelector('#prova-profissional')?.remove()

    if (route.length === 0) {
      const aboutSection = document.querySelector('.about-preview')?.closest('section')
      aboutSection?.insertAdjacentHTML('afterend', compactSection())
      return
    }

    if (route[0] === 'sobre' && route.length === 1) {
      const microsoftSection = document.querySelector('.microsoft-expertise-section')
      microsoftSection?.insertAdjacentHTML('afterend', fullSection())
    }
  }

  window.addEventListener('hashchange', () => requestAnimationFrame(enhanceRoute))
  requestAnimationFrame(enhanceRoute)
})()
