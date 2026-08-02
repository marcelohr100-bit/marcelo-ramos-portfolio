window.PORTFOLIO_DATA = {
  site: {
    name: 'Marcelo Ramos — Product & Project Studio',
    owner: 'Marcelo Henrique Ramos',
    location: 'Ribeirão Preto/SP — Brasil',
    role: 'Gerente de Projetos de Tecnologia · Product Builder',
    tagline: 'Transformo problemas reais em produtos digitais escaláveis.',
    subtitle: 'Gestão de projetos, estratégia de produto e tecnologia aplicadas a soluções digitais objetivas, úteis e comercializáveis.',
    linkedin: 'https://www.linkedin.com/in/marcelo-ramos-245246137'
  },

  products: [
    {
      slug: '90-second-shield',
      name: '90 Second Shield',
      category: 'Bem-estar',
      type: 'Guia digital',
      audience: 'Pessoas que buscam uma preparação rápida para situações de ansiedade social',
      summary: 'Guia prático e discreto com uma rotina curta para organizar respiração, foco e próximos passos antes de interações sociais desafiadoras.',
      image: 'assets/products/90-second-shield.svg',
      imageAlt: 'Capa ilustrativa do produto 90 Second Shield',
      purchaseLinks: [
        { platform: 'Gumroad', url: 'https://marceloramos3.gumroad.com/l/90-second-shield' },
        { platform: 'Payhip', url: 'https://payhip.com/b/aGNJF' }
      ],
      highlights: [
        'Rotina estruturada para consulta rápida',
        'Passos curtos e acionáveis',
        'Uso individual e discreto',
        'Compra disponível no Gumroad e na Payhip'
      ],
      included: [
        'Guia digital 90 Second Shield',
        'Instruções de uso disponibilizadas na oferta oficial'
      ],
      notice: 'Material educacional de apoio pessoal. Não substitui terapia, diagnóstico ou acompanhamento profissional.'
    },
    {
      slug: 'sbom-drift-desk',
      name: 'SBOM Drift Desk',
      category: 'Cibersegurança',
      type: 'Aplicação offline',
      audience: 'Times de segurança, compliance e engenharia de software',
      summary: 'Ferramenta local para comparar SBOMs CycloneDX e SPDX, identificar alterações e exportar evidências sem depender de servidor ou assinatura.',
      image: 'assets/products/sbom-drift-desk.svg',
      imageAlt: 'Capa ilustrativa do produto SBOM Drift Desk',
      purchaseLinks: [
        { platform: 'Gumroad', url: 'https://marceloramos3.gumroad.com/l/sbom-drift-desk' },
        { platform: 'Payhip', url: 'https://payhip.com/b/swb3H' }
      ],
      highlights: [
        'Comparação de SBOMs CycloneDX e SPDX',
        'Identificação de mudanças em componentes e versões',
        'Processamento local e privado',
        'Exportação de evidências para análise'
      ],
      included: [
        'Aplicação offline para download',
        'Materiais de utilização descritos na oferta oficial'
      ]
    },
    {
      slug: 'cra-24h-incident-desk',
      name: 'CRA 24H Incident Desk',
      category: 'Compliance',
      type: 'Incident Desk',
      audience: 'Times de segurança, produto e compliance',
      summary: 'Kit operacional para acompanhar prazos, responsáveis e evidências de incidentes relacionados ao Cyber Resilience Act.',
      image: 'assets/products/cra-24h-incident-desk.svg',
      imageAlt: 'Capa ilustrativa do produto CRA 24H Incident Desk',
      purchaseLinks: [
        { platform: 'Gumroad', url: 'https://marceloramos3.gumroad.com/l/cra-24h-incident-desk' },
        { platform: 'Payhip', url: 'https://payhip.com/b/VuNvf' }
      ],
      highlights: [
        'Organização dos marcos de 24 e 72 horas',
        'Controle de responsáveis e contatos',
        'Centralização das evidências',
        'Preparação consistente dos pacotes de reporte'
      ],
      included: [
        'Pacote digital CRA 24H Incident Desk',
        'Modelos operacionais descritos na oferta oficial'
      ],
      notice: 'Ferramenta operacional. Não substitui aconselhamento jurídico ou regulatório especializado.'
    },
    {
      slug: 'a50-agency-desk',
      name: 'A50 Agency Desk',
      category: 'AI Governance',
      type: 'Compliance Kit',
      audience: 'Agências, freelancers e criadores que utilizam IA em trabalhos destinados ao mercado europeu',
      summary: 'Kit local para documentar o uso de IA, organizar aprovações e aplicar avisos de transparência em trabalhos criativos e de marketing.',
      image: 'assets/products/a50-agency-desk.svg',
      imageAlt: 'Capa ilustrativa do produto A50 Agency Desk',
      purchaseLinks: [
        { platform: 'Gumroad', url: 'https://marceloramos3.gumroad.com/l/a50-agency-desk' },
        { platform: 'Payhip', url: 'https://payhip.com/b/VJ7qZ' }
      ],
      highlights: [
        'Registro do uso de conteúdo gerado ou manipulado por IA',
        'Biblioteca de avisos para adaptação',
        'Fluxo de aprovação do cliente',
        'Processo local, reutilizável e organizado'
      ],
      included: [
        'Pacote digital A50 Agency Desk',
        'Modelos e materiais descritos na oferta oficial'
      ],
      notice: 'Kit operacional de transparência. Não substitui aconselhamento jurídico.'
    }
  ],

  projects: [
    {
      slug: 'smartmenu-ai',
      name: 'SmartMenu AI',
      category: 'SaaS · Food Service',
      status: 'Em desenvolvimento',
      summary: 'Plataforma web para cardápio digital, pedidos e operação de atendimento em restaurantes.',
      challenge: 'Unificar a experiência do cliente na mesa e a operação do restaurante sem exigir instalação de aplicativo.',
      approach: 'Mapeamento das jornadas, especificação das regras de negócio, prototipação navegável e planejamento incremental do MVP.',
      deliverables: [
        'QR Code individual por mesa',
        'Cardápio por categorias e carrinho',
        'Pedidos, chamada de garçom e solicitação de conta',
        'Visões para cozinha e administração'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Supabase']
    },
    {
      slug: 'integracao-erp-crm',
      name: 'Integração ERP–CRM',
      category: 'Transformação Digital',
      status: 'Case profissional',
      summary: 'Case anonimizado de integração entre CRM, ERP e serviços de automação para sincronizar cadastros, pedidos e regras comerciais.',
      challenge: 'Reduzir falhas de integração e tornar o fluxo entre sistemas mais rastreável para as equipes de negócio e tecnologia.',
      approach: 'Levantamento de regras, priorização de cenários críticos, coordenação entre equipes, validação em homologação e acompanhamento das entregas.',
      deliverables: [
        'Integração de produtos e novos clientes',
        'Tratamento de pedidos não integrados',
        'Fluxos relacionados a comissão de vendas',
        'Testes e acompanhamento de implantação'
      ],
      technologies: ['Dynamics 365', 'Azure Functions', 'Power Automate', 'APIs REST']
    }
  ],

  method: [
    { number: '01', title: 'Entender', text: 'Problema, público, contexto e restrições.' },
    { number: '02', title: 'Priorizar', text: 'Escopo, riscos e proposta de valor.' },
    { number: '03', title: 'Construir', text: 'Protótipo, MVP e execução incremental.' },
    { number: '04', title: 'Evoluir', text: 'Validação, documentação e melhorias.' }
  ],

  profile: {
    intro: 'Atuo na interseção entre gestão de projetos, produto e tecnologia, transformando necessidades de negócio em escopo claro, prioridades objetivas e entregas acompanháveis.',
    specialties: [
      'Gestão de projetos e produtos',
      'Microsoft Dynamics 365',
      'ERP e CRM',
      'Transformação digital',
      'Metodologias ágeis',
      'Cloud Computing',
      'Regras de negócio',
      'Prototipação e MVPs'
    ],
    education: [
      'Bacharelado em Ciência da Computação',
      'MBA em Gestão de Projetos com Metodologias Ágeis',
      'Pós-graduação em Gestão de Projetos de Cloud Computing'
    ],
    tools: ['Dynamics 365', 'Azure', 'Power Platform', 'Azure DevOps', 'Jira', 'Microsoft Project', 'Figma', 'Power BI']
  }
}
