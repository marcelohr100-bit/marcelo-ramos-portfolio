window.PORTFOLIO_DATA = {
  site: {
    name: 'Marcelo Ramos — Product & Project Studio',
    owner: 'Marcelo Henrique Ramos',
    location: 'Ribeirão Preto/SP — Brasil',
    role: 'Gerente de Projetos de Tecnologia · Product Builder · Transformação Digital',
    tagline: 'Transformo problemas reais em produtos digitais escaláveis.',
    subtitle: 'Combino gestão de projetos, estratégia de produto e tecnologia para criar soluções digitais que geram valor para pessoas e empresas.',
    linkedin: 'https://www.linkedin.com/in/marcelo-ramos-245246137'
  },
  specialties: ['Gestão de projetos e produtos','Microsoft Dynamics 365','ERP e CRM','Transformação digital','Inteligência Artificial aplicada','Cloud Computing','Metodologias ágeis','Planejamento estratégico','Liderança de equipes','Regras de negócio','Prototipação','MVPs e validação'],
  education: ['Bacharelado em Ciência da Computação','MBA em Gestão de Projetos com Metodologias Ágeis','Pós-graduação em Gestão de Projetos de Cloud Computing'],
  process: [
    { number:'01', title:'Descoberta', text:'Entendimento do problema, público, regras de negócio e restrições.' },
    { number:'02', title:'Estratégia', text:'Definição de escopo, prioridades, riscos e critérios de sucesso.' },
    { number:'03', title:'Prototipação', text:'Fluxos e protótipos navegáveis para validar antes de construir.' },
    { number:'04', title:'Planejamento', text:'Backlog, roadmap e arquitetura adequados ao estágio do produto.' },
    { number:'05', title:'Construção', text:'Execução incremental, acompanhamento e controle de qualidade.' },
    { number:'06', title:'Evolução', text:'Aprendizados, documentação e melhorias baseadas em uso real.' }
  ],
  techGroups: [
    { title:'Gestão e Produto', items:['Scrum','Kanban','Jira','Azure DevOps','Microsoft Project','Figma'] },
    { title:'Microsoft', items:['Dynamics 365','Power Platform','Azure','ERP','CRM'] },
    { title:'Construção', items:['React','TypeScript','Next.js','Tailwind CSS','APIs REST','Vercel'] },
    { title:'Dados e IA', items:['Power BI','SQL','PostgreSQL','Supabase','LLMs','Automação'] }
  ],
  projects: [
    {
      slug:'smartmenu-ai', name:'SmartMenu AI', shortDescription:'Plataforma SaaS de cardápio digital e operação de atendimento para restaurantes.', category:'SaaS · Food Service', status:'Em desenvolvimento', period:'2026 — atual', technologies:['Next.js','React','TypeScript','Tailwind CSS','Supabase','PostgreSQL','Vercel'], featured:true, accent:'blue', label:'Projeto em desenvolvimento', variant:'menu',
      context:'Restaurantes precisam modernizar a experiência da mesa sem exigir instalação de aplicativo e sem aumentar o atrito da equipe operacional.',
      problem:'Cardápios impressos e PDFs são difíceis de atualizar, enquanto pedidos, chamadas ao garçom e solicitações de conta continuam fragmentados.',
      objectives:['Criar um cardápio digital acessível por QR Code por mesa','Permitir carrinho, pedidos e acompanhamento de status','Centralizar chamadas de garçom e solicitação de conta','Entregar visões específicas para atendimento, cozinha e administração'],
      process:['Mapeamento das jornadas de cliente, garçom, cozinha e administrador','Especificação funcional e regras de negócio','Prototipação navegável e validação da experiência','Planejamento de MVP e arquitetura evolutiva'],
      solution:'Uma plataforma web responsiva que conecta a experiência do cliente na mesa à operação do restaurante, mantendo o fluxo simples e sem aplicativo nativo.',
      features:['QR Code individual por mesa','Cardápio organizado por categorias','Carrinho e envio de pedidos','Chamar garçom','Solicitar conta','Painel de cozinha','Administração de cardápio e mesas'],
      roadmap:['Pagamentos integrados','Reservas','Programa de fidelidade','Recomendações avançadas com IA'],
      learnings:['A operação precisa ser tão simples quanto a experiência do cliente.','O MVP deve priorizar pedido e atendimento antes de recursos avançados de fidelização.']
    },
    {
      slug:'chronos-workflow-platform', name:'Chronos Workflow Platform', shortDescription:'Solução para digitalização e automação de processos empresariais com configuração no-code.', category:'Automação de Processos', status:'Online', period:'Produto publicado', technologies:['SaaS','Workflow','No-code','Cloud'], featured:true, accent:'green', label:'Produto disponível', variant:'workflow', purchaseUrl:'https://payhip.com/b/fETNY',
      context:'Empresas ainda dependem de processos manuais, documentos dispersos e pouca rastreabilidade das atividades executadas.',
      problem:'Fluxos manuais dificultam o trabalho remoto, aumentam riscos de perda de informação e reduzem a capacidade de auditoria.',
      objectives:['Digitalizar processos empresariais recorrentes','Permitir configuração de fluxos sem código','Registrar histórico e trilha de auditoria','Reduzir dependência de infraestrutura própria'],
      process:['Definição do problema de automação','Estruturação da proposta de valor','Organização dos recursos principais','Publicação em plataforma externa de comercialização'],
      solution:'Uma plataforma de workflow pronta para uso, com formulários personalizáveis, configuração de processos e recursos de segurança e backup.',
      features:['Configuração de processos no-code','Assistente para criação de fluxos','Formulários e campos personalizáveis','Trilha de auditoria','Backups automáticos','Operação em nuvem'],
      learnings:['Produtos B2B precisam explicar o ganho operacional com extrema clareza.','A compra externa simplifica o portfólio e reduz manutenção técnica do site institucional.']
    },
    {
      slug:'project-command', name:'Project Command', shortDescription:'Conceito de dashboard executivo para portfólio, marcos, riscos e decisões.', category:'Gestão de Projetos', status:'Conceito demonstrativo', period:'Conceito editável', technologies:['React','TypeScript','Power BI','Azure DevOps'], featured:true, accent:'violet', label:'Conteúdo de demonstração', variant:'dashboard',
      context:'Times executivos precisam consolidar informações de projetos dispersas em planilhas, apresentações e ferramentas.',
      problem:'A falta de uma visão única prejudica a leitura rápida de status, riscos, marcos e próximos passos.',
      objectives:['Consolidar o portfólio','Destacar riscos e bloqueios','Facilitar reuniões executivas'],
      process:['Seleção de indicadores','Modelagem de informação','Prototipação da visão executiva'],
      solution:'Um conceito de dashboard para apresentar como o portfólio poderá organizar casos reais no futuro.',
      features:['Status consolidado','Marcos','Riscos','Pendências','Detalhamento por projeto'],
      learnings:['Este item é demonstrativo e deverá ser substituído por um projeto real quando houver conteúdo aprovado.']
    },
    {
      slug:'launchkit-ai', name:'LaunchKit AI', shortDescription:'Conceito de kit com modelos, checklists e prompts para criação de produtos digitais.', category:'Produto Digital', status:'Conceito demonstrativo', period:'Conceito editável', technologies:['IA Generativa','Templates','Automação','Figma'], featured:false, accent:'mixed', label:'Conteúdo de demonstração', variant:'roadmap',
      context:'Criadores independentes repetem etapas de definição, validação e lançamento sem um processo reutilizável.',
      problem:'A falta de uma trilha clara causa decisões improvisadas e retrabalho.',
      objectives:['Organizar a jornada de criação','Fornecer modelos reutilizáveis','Apoiar rascunhos com IA'],
      process:['Mapeamento das etapas','Criação de modelos','Organização de checklists'],
      solution:'Um conceito de kit navegável para estruturar a criação de produtos digitais.',
      features:['Trilha de etapas','Modelo de MVP','Checklists','Biblioteca de prompts'],
      learnings:['Este conteúdo é apenas uma demonstração da estrutura do portfólio.']
    }
  ],
  products: [
    {
      slug:'chronos-workflow-platform', name:'Chronos Workflow Platform', summary:'Plataforma SaaS para digitalizar e automatizar processos empresariais.', category:'Automação de Processos', audience:'Empresas e equipes operacionais', type:'SaaS', status:'Disponível', price:'US$ 2+', accent:'green', featured:true, label:'Produto disponível', variant:'workflow', externalUrl:'https://payhip.com/b/fETNY', projectSlug:'chronos-workflow-platform',
      description:'Uma solução voltada à digitalização de workflows, com configuração no-code, formulários personalizáveis, trilha de auditoria e operação em nuvem.',
      problemSolved:'Reduz a dependência de processos manuais, planilhas dispersas e documentos sem rastreabilidade.',
      benefits:['Processos mais organizados','Configuração sem código','Maior rastreabilidade','Apoio ao trabalho remoto'],
      features:['Workflow pronto para uso','Assistente de processos','Formulários personalizáveis','Backups','Auditoria'],
      included:['Acesso à página externa do produto','Informações de aquisição e uso disponibilizadas pela plataforma de venda'],
      delivery:'A contratação e a entrega acontecem integralmente pela plataforma externa Payhip.',
      faq:[{question:'O pagamento acontece neste site?',answer:'Não. O botão direciona para a página externa e segura de compra.'},{question:'O produto exige servidor próprio?',answer:'A proposta é operar em nuvem, reduzindo a necessidade de infraestrutura própria.'}]
    },
    {
      slug:'smartmenu-ai', name:'SmartMenu AI', summary:'SaaS de cardápio digital e operação de atendimento para restaurantes.', category:'Food Service', audience:'Restaurantes, bares e cafeterias', type:'SaaS', status:'Em desenvolvimento', accent:'blue', featured:true, label:'Projeto em desenvolvimento', variant:'menu', projectSlug:'smartmenu-ai',
      description:'Produto em especificação e prototipação. Ainda não está disponível para compra.',
      problemSolved:'Centraliza cardápio, pedidos, chamadas de atendimento, cozinha e administração em uma experiência web.',
      benefits:['Menos atrito para o cliente','Operação mais organizada','Atualização centralizada do cardápio'],
      features:['QR Code por mesa','Carrinho','Pedidos','Chamar garçom','Solicitar conta','Painel de cozinha'],
      included:['Produto ainda não comercializado'],
      delivery:'O formato de contratação será definido após a conclusão e validação do MVP.',
      faq:[{question:'Já posso comprar?',answer:'Não. O produto está em desenvolvimento.'},{question:'Será um aplicativo?',answer:'A proposta atual é uma plataforma web responsiva, sem instalação obrigatória.'}]
    },
    {
      slug:'project-command', name:'Project Command', summary:'Conceito demonstrativo de dashboard executivo para gestão de portfólio.', category:'Gestão de Projetos', audience:'PMOs e lideranças', type:'Aplicação web', status:'Conceito demonstrativo', accent:'violet', featured:false, label:'Conteúdo de demonstração', variant:'dashboard', projectSlug:'project-command',
      description:'Item criado apenas para demonstrar como futuros produtos poderão aparecer no catálogo.',
      problemSolved:'Exemplo de consolidação de status, riscos e marcos.', benefits:['Demonstração visual da estrutura do catálogo'], features:['Cards','Filtros','Página de detalhes'], included:['Nenhum produto comercializado'], delivery:'Não aplicável.', faq:[{question:'Este produto existe?',answer:'É apenas um conceito demonstrativo do protótipo.'}]
    }
  ]
}
