(() => {
  'use strict'

  const profile = window.PORTFOLIO_DATA?.profile
  if (!profile) return

  profile.certifications = [
    { name: 'Certificate Professional Google Project Management', issuer: 'Google', issued: 'fev. 2024', group: 'Gestão e liderança' },
    { name: 'Agile Scrum Master', issuer: 'Fundação Vanzolini', issued: 'mar. 2023', group: 'Gestão e liderança' },
    { name: 'Certificação em Liderança', issuer: 'PUCRS', issued: 'ago. 2021', group: 'Gestão e liderança' },
    { name: 'Gestão de Projetos e MS Project', issuer: 'Udemy', issued: 'out. 2020', group: 'Gestão e liderança' },
    { name: 'Gestão de Projetos', issuer: 'Fundação Bradesco', issued: 'nov. 2018', group: 'Gestão e liderança' },
    { name: 'Coypu: Automação Web de ponta a ponta com .NETCore', issuer: 'QAninja Academy', issued: 'ago. 2020', group: 'Tecnologia e qualidade' },
    { name: 'UI & UX DESIGN com Adobe XD 2021', issuer: 'Udemy', issued: 'mar. 2020', group: 'Tecnologia e qualidade' },
    { name: 'Linguagem de programação C#', issuer: 'Fundação Bradesco', issued: 'out. 2018', group: 'Tecnologia e qualidade' },
    { name: 'C++ Desenvolvimento Orientado a Objetos', issuer: 'Fundação Bradesco', issued: 'out. 2018', group: 'Tecnologia e qualidade' },
    { name: 'Certified Ethical Hacking', issuer: 'Udemy', issued: 'ago. 2017', group: 'Tecnologia e qualidade' }
  ]

  profile.recommendationCount = 5
  profile.recommendations = [
    {
      author: 'Bruno Iwamoto Bergamini, MSc.',
      summary: 'Destaca dinamismo, busca contínua por melhorias nos processos e capacidade de exercer uma liderança eficiente mesmo diante de desafios.'
    },
    {
      author: 'Lilian Tavares',
      summary: 'Ressalta domínio de metodologias, boas estratégias para os projetos e disposição para apoiar o desenvolvimento e a adaptação de colegas.'
    }
  ]
})()
