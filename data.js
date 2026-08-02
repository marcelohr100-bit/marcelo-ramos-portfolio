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
      slug:'90-second-shield',
      name:'90 Second Shield',
      summary:'Guia digital prático e discreto para se preparar para situações de ansiedade social em apenas 90 segundos.',
      category:'Bem-estar e Produtividade',
      audience:'Pessoas que enfrentam ansiedade social',
      type:'Guia digital',
      status:'Disponível no Gumroad',
      accent:'blue',
      featured:true,
      label:'Guia digital B2C',
      image:'assets/products/90-second-shield.svg',
      imageAlt:'Capa ilustrativa do produto 90 Second Shield',
      externalUrl:'https://marceloramos3.gumroad.com/l/90-second-shield',
      description:'Um guia digital direto ao ponto, criado para ajudar o leitor a organizar pensamentos, respiração e próximos passos antes de interações sociais desafiadoras. O conteúdo foi pensado para uso rápido, individual e discreto.',
      problemSolved:'Ajuda a diminuir a sensação de improviso diante de situações sociais ao oferecer uma rotina curta, estruturada e fácil de consultar.',
      benefits:['Rotina prática de 90 segundos','Aplicação discreta em diferentes contextos','Conteúdo objetivo e fácil de consultar','Entrega digital imediata pela plataforma de venda'],
      features:['Protocolo guiado de preparação','Passos curtos e acionáveis','Estratégias para organizar o foco','Orientações de uso responsável'],
      included:['Guia digital do 90 Second Shield','Acesso aos arquivos e instruções disponibilizados na oferta oficial'],
      delivery:'Pagamento, download e suporte comercial são realizados pela página oficial do produto no Gumroad.',
      faq:[
        {question:'O produto substitui terapia ou atendimento médico?',answer:'Não. É um material educacional e de apoio pessoal, sem promessa de cura e sem substituir acompanhamento profissional.'},
        {question:'Onde recebo o material?',answer:'Após a compra, a entrega digital é processada diretamente pelo Gumroad.'}
      ]
    },
    {
      slug:'sbom-drift-desk',
      name:'SBOM Drift Desk',
      summary:'Aplicação offline para comparar SBOMs CycloneDX e SPDX, identificar mudanças e exportar evidências.',
      category:'Cibersegurança e Supply Chain',
      audience:'Times de segurança, compliance e engenharia',
      type:'Aplicação offline',
      status:'Disponível no Gumroad',
      accent:'green',
      featured:true,
      label:'Software de segurança',
      image:'assets/products/sbom-drift-desk.svg',
      imageAlt:'Capa ilustrativa do produto SBOM Drift Desk',
      externalUrl:'https://marceloramos3.gumroad.com/l/sbom-drift-desk',
      description:'Ferramenta executada localmente para comparar versões de Software Bills of Materials e evidenciar alterações entre arquivos CycloneDX e SPDX, sem depender de servidor, conta ou assinatura.',
      problemSolved:'Facilita a identificação de drift entre SBOMs, reduzindo a comparação manual de componentes, versões, hashes, licenças e fornecedores.',
      benefits:['Processamento local e privado','Comparação estruturada de versões','Evidências exportáveis para análise','Sem servidor, login ou assinatura recorrente'],
      features:['Suporte a CycloneDX e SPDX','Detecção de mudanças de versão, hash, licença e fornecedor','Medição de cobertura de campos','Exportação em CSV, HTML e JSON'],
      included:['Pacote digital para download','Aplicação offline e materiais de utilização incluídos na oferta oficial'],
      delivery:'O pacote é adquirido e entregue digitalmente pelo Gumroad para execução no ambiente local do comprador.',
      faq:[
        {question:'Os arquivos são enviados para um servidor?',answer:'A proposta do produto é operar offline, mantendo a análise no ambiente local.'},
        {question:'Quais formatos são comparados?',answer:'O produto foi desenvolvido para trabalhar com SBOMs nos padrões CycloneDX e SPDX.'}
      ]
    },
    {
      slug:'cra-24h-incident-desk',
      name:'CRA 24H Incident Desk',
      summary:'Sistema operacional para organizar prazos, evidências e pacotes de reporte de incidentes relacionados ao Cyber Resilience Act.',
      category:'Compliance e Cibersegurança',
      audience:'Times de segurança, produto e compliance',
      type:'Incident Desk',
      status:'Disponível no Gumroad',
      accent:'violet',
      featured:true,
      label:'CRA reporting toolkit',
      image:'assets/products/cra-24h-incident-desk.svg',
      imageAlt:'Capa ilustrativa do produto CRA 24H Incident Desk',
      externalUrl:'https://marceloramos3.gumroad.com/l/cra-24h-incident-desk',
      description:'Ferramenta operacional para iniciar o relógio a partir da tomada de conhecimento do incidente, acompanhar os marcos de 24 e 72 horas e organizar o pacote final de reporte com responsáveis, contatos e evidências.',
      problemSolved:'Substitui controles improvisados por uma estrutura única para acompanhar prazos críticos e preparar documentação de incidentes relacionados ao CRA.',
      benefits:['Visibilidade imediata dos prazos','Organização centralizada das evidências','Clareza de responsáveis e contatos','Pacotes de reporte preparados de forma consistente'],
      features:['Registro do momento de awareness','Cálculo dos marcos de 24h, 72h e relatório final','Três pacotes de reporte','Controle de evidências, responsáveis e contatos'],
      included:['Pacote digital do CRA 24H Incident Desk','Modelos e materiais operacionais descritos na oferta oficial'],
      delivery:'A compra e a entrega do pacote digital são realizadas pela página oficial do produto no Gumroad.',
      faq:[
        {question:'O produto substitui aconselhamento jurídico?',answer:'Não. É uma ferramenta operacional e não substitui análise jurídica ou regulatória especializada.'},
        {question:'O sistema envia notificações oficiais automaticamente?',answer:'O produto organiza informações e pacotes de reporte; o envio oficial deve seguir o processo definido pela organização.'}
      ]
    },
    {
      slug:'a50-agency-desk',
      name:'A50 Agency Desk',
      summary:'Kit local de transparência para agências, freelancers e criadores que utilizam IA em trabalhos destinados ao mercado europeu.',
      category:'AI Governance e Compliance',
      audience:'Agências, freelancers e criadores que atendem a UE',
      type:'Compliance Kit',
      status:'Disponível no Gumroad',
      accent:'mixed',
      featured:true,
      label:'EU AI transparency kit',
      image:'assets/products/a50-agency-desk.svg',
      imageAlt:'Capa ilustrativa do produto A50 Agency Desk',
      externalUrl:'https://marceloramos3.gumroad.com/l/a50-agency-desk',
      description:'Pacote prático para estruturar transparência no uso de conteúdo gerado ou manipulado por IA em serviços de marketing, criação e comunicação destinados a clientes e públicos europeus.',
      problemSolved:'Ajuda profissionais e pequenas equipes a documentar o uso de IA, selecionar avisos adequados e registrar aprovações sem criar um programa de compliance do zero.',
      benefits:['Processo local e reutilizável','Documentação organizada por trabalho e cliente','Avisos de transparência prontos para adaptação','Menos retrabalho na aprovação de conteúdo'],
      features:['Classificador de obrigações','Registro de conteúdo com IA','Biblioteca de avisos','Fluxo de aprovação do cliente','Modelos de política, contrato e e-mail'],
      included:['Pacote digital A50 Agency Desk','Manual e modelos operacionais descritos na oferta oficial'],
      delivery:'O material é adquirido e entregue digitalmente pelo Gumroad para uso local pelo comprador.',
      faq:[
        {question:'O kit oferece aconselhamento jurídico?',answer:'Não. Ele organiza o processo de transparência e documentação, mas não substitui orientação jurídica.'},
        {question:'Para quem o kit foi criado?',answer:'Para agências, freelancers e criadores que utilizam IA e atendem clientes ou públicos ligados à União Europeia.'}
      ]
    }
  ]
}