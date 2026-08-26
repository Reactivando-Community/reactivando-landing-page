export type SlideContext = {
  university: string;
  work: string;
  project: string;
};

export type PresentationSlide = {
  id: number;
  type?: 'intro' | 'timeline' | 'closing';
  image?: string;
  imageOpacity?: number;
  title: string;
  period: string;

  // Intro & Timeline Fields
  context?: SlideContext;
  speech?: string;
  bullets?: string[];
  learning?: string;
  keyword?: string;

  // Closing Fields
  highlight?: string;
  content?: {
    headline: string;
    story: string;
    insight?: string;
    nextStep?: string;
    numbers?: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  lessons?: string[];
  finalQuote?: string;

  presentationHint?: string | any;
  qrCode?: {
    url: string;
    label?: string;
    caption?: string;
  };
  qrCodes?: Array<{
    url: string;
    label?: string;
    caption?: string;
  }>;
  social?: string;
};

export const timelineSlides: PresentationSlide[] = [
  {
    id: 0,
    type: 'intro',
    image: '/pedro.JPG',
    title: "Pedro Goiânia",
    period: "Apresentação",
    context: {
      university: "Desenvolvedor de Software",
      work: "Líder de Comunidade",
      project: "Fundador do Pix Aí"
    },
    social: "Instagram/LinkedIn/GitHub: @pedrogoiania",
    speech: "A velocidade é companheira dos resultados.",
    bullets: [],
    learning: "",
    keyword: "COMPROMISSO COM A PRIORIDADE",
    presentationHint: "Foto à esquerda atuando como background que desvanece suavemente. Textos com grande impacto e títulos de peso à direita."
  },
  {
    id: 1,
    image: '/presentation/slide-2.jpg',
    title: "Da Primeira Linha de Código ao Jogo Global",
    period: "2016–2020",
    context: {
      university: "Extensão e TCC",
      work: "Engenheiro (Gympass/SP)",
      project: "Hackathons & Apps"
    },
    speech: "De 54 horas num Startup Weekend a sustentar sistemas com milhares de acessos e integrar a engenharia global de unicórnios, o código deixou de ser brincadeira e virou responsabilidade real.",
    bullets: [
      "Vitórias em hackathons e criação de apps do zero",
      "O primeiro gargalo sério de infraestrutura (milhares de acessos)",
      "O choque de padrão ao integrar times globais de engenharia"
    ],
    learning: "A melhor forma de crescer rápido é testar sob pressão real e se colocar em salas onde você seja o menor.",
    keyword: "FUNDAÇÃO & ESCALA",
    presentationHint: "Fade-in suave mostrando os troféus de hackathon misturados com código, revelando a palavra 'FUNDAÇÃO'."
  },
  {
    id: 2,
    image: '/presentation/slide-6.jpg',
    title: "Arquitetura de Softwares vs. Arquitetura Humana",
    period: "2020–2023",
    context: {
      university: "Visão de Produto",
      work: "Liderança (Itaú & Nubank)",
      project: "Startups em Paralelo"
    },
    speech: "No Itaú e Nubank percebi que escalar código é mais fácil do que alinhar cultura. E no fim de semana, as táticas gigantes aceleravam meus projetos na madrugada.",
    bullets: [
      "Gestão de escala: liderando +70 pessoas em sistemas bancários",
      "Equilíbrio entre a operação LATAM e projetos paralelos intensos",
      "Mudança de foco: criar o produto certo importa mais do que codar perfeito"
    ],
    learning: "As metodologias de grandes corporações são alavancas massivas se aplicadas com a resiliência do mindset empreendedor.",
    keyword: "VISÃO & PRODUTO",
    presentationHint: "Split screen dinâmico: metade da tela em tom de inovação corporativa (roxo/laranja) e a outra metade escura e 'hacker'."
  },
  {
    id: 3,
    image: '/presentation/slide-9.jpg',
    title: "A Demanda Antecipada",
    period: "2024",
    context: {
      university: "Casting Realidade",
      work: "Virada Total",
      project: "Criação do Pix Aí"
    },
    speech: "Tudo culminou neste ano ao entender o poder de um Ativo Digital: o verdadeiro jogo não é trocar suas horas por salário escrevendo código, mas sim construir um software que roda, escala e gera receita no automático enquanto você dorme.",
    bullets: [
      "Queimando as pontes confortáveis",
      "Demanda batendo à porta no cenário pré-código",
      "Tração de receita e adesão instantâneas"
    ],
    learning: "Quando é a dor quem chama a solução, os clientes se convertem quase no boca-a-boca.",
    keyword: "VIRADA",
    presentationHint: "Efeito rápido de shake; cores mudam repentinamente simbolizando um 'All In'. Gráfico explode positivamente."
  },
  {
    id: 4,
    image: '/presentation/slide-10.jpg',
    title: "Surge o Foguete sem Freio",
    period: "2024–2025",
    context: {
      university: "MBAs de Garagem",
      work: "Founding C-Level",
      project: "Escala massiva no Pix Aí"
    },
    speech: "A adrenalina e o desafio do scale-up são indescritíveis. A guerra é expandir sem perder a alma, com os clientes aumentando num gráfico J diário.",
    bullets: [
      "Formação do squad agressivo perfeito",
      "Noites em claro sustentadas e de extremo valor",
      "Desafio vertiginoso de infraestrutura e produto (J-Curve)"
    ],
    learning: "Crescer absurdamente rápido não é sobre o que priorizar, mas ter a extrema resiliência do que descartar no dia a dia.",
    keyword: "HIPER-ESCALA",
    presentationHint: "Visuais passando rapidamente e um fundo contínuo subindo sem freio, acompanhado por velocímetro."
  },
  {
    id: 5,
    image: '/presentation/slide-11.jpg',
    title: "O Exit e a Linha de Chegada",
    period: "2025",
    context: {
      university: "A Conclusão Lógica",
      work: "Processo de M&A",
      project: "A Venda Transformadora"
    },
    speech: "A venda foi a consolidação e recompensa da ousadia que partiu da faísca. O fim de um capítulo que legitima e recompensa todas as dores físicas reais daqueles anos intensos.",
    bullets: [
      "Processos rígidos e intensivos da venda M&A",
      "A coroação de todo o ecossistema aprendido",
      "Transformação estrutural de vida"
    ],
    learning: "Um evento de liquidez (exit) só liquida o dinheiro; os aprendizados são fundidos no seu DNA com royalties eternos.",
    keyword: "EXIT",
    presentationHint: "Mergulho visual num flash branco que explode na tela, revelando calmamente apenas os títulos e os dados finos e claros na tela pós-explosão de impacto."
  },
  {
    id: 6,
    image: '/presentation/slide-12.jpg',
    title: "Resumo da Ópera (Tudo Tem Começo)",
    period: "Reflexão: 2016–2025",
    context: {
      university: "",
      work: "Sua própria jornada que inicia",
      project: ""
    },
    speech: "De finais de semana sem dormir em 2016, a liderança bancária e, por fim, o ápice da jornada empreendedora: continue iterando sobre você mesmo.",
    bullets: [
      "Uma ideia sem ação no mercado vale rigorosamente zero",
      "O ecossistema é o seu professor mais agressivo",
      "Apaixone-se loucamente pelo problema, seja agnóstico ao código"
    ],
    learning: "Nunca perca aquela coragem brutal que você obteve em seu primeiro final de semana maluco de ideação.",
    keyword: "MOMENTUM",
    presentationHint: "Todas as datas e 'palavras-chave' do arquivo aparecem numa sequência relâmpago horizontal que recua, preenchendo toda a tela, resultando no impacto do final."
  },
  {
    id: 7,
    image: '/presentation/slide-13.jpg',
    title: "Isso não foi o fim",
    period: "Conclusão",
    type: "closing",
    highlight: "Nova fase",
    content: {
      headline: "O exit não foi o objetivo final. Foi a transição.",
      story: "Depois de 8 anos tentando… eu finalmente fiz meu primeiro exit. Mas, pela primeira vez, eu entendi que isso era só o começo.",
      numbers: [
        {
          label: "Exit Pix Aí",
          value: "R$ 796 mil",
          description: "Micro M&A (capital tecnológico + clientes)"
        },
        {
          label: "Modelo",
          value: "100% Equity",
          description: "Transformado em participação na nova empresa"
        },
        {
          label: "Valuation atual",
          value: "R$ 17 milhões",
          description: "Piki Digital"
        },
        {
          label: "Meta",
          value: "R$ 96 milhões",
          description: "Até o final do ano"
        }
      ]
    },
    presentationHint: {
      animation: "fade-in + highlight numbers sequentially",
      emphasis: [
        "R$ 796 mil",
        "100% Equity",
        "R$ 17 milhões",
        "R$ 96 milhões"
      ],
      deliveryTips: [
        "Faça pausa antes de mostrar os números",
        "Revele cada número com timing (um por vez)",
        "Olhe para a plateia"
      ]
    }
  },
  {
    id: 8,
    image: '/presentation/slide-13.jpg',
    title: "A Vantagem da Execução",
    period: "A Próxima Fase",
    type: "closing",
    highlight: "O Novo Jogo",
    content: {
      headline: "O Pix Aí foi o veículo.",
      story: "Ele provou que os fundamentos são inquebráveis e pavimentou o caminho. Agora nós apostamos numa escala maior e com muito mais fundação.",
      insight: "O seu primeiro gol credencializa o seu processo.",
      nextStep: "Agora o jogo é escalar massivamente usando todo o ecossistema que foi gerado ao longo daqueles 8 anos iniciais."
    },
    lessons: [
      "Exit não é fim — é alavanca",
      "Equity é construção de longo prazo",
      "O jogo muda quando você aprende a escalar o processo"
    ],
    finalQuote: "Eu não estou encerrando uma jornada… eu estou começando a próxima com vantagem.",
    presentationHint: {
      animation: "fade-in",
      deliveryTips: [
        "Fale mais devagar aqui — esse é o clímax da apresentação",
        "Olhe fixamente para a plateia antes da frase final, deixe o silêncio atuar"
      ]
    }
  }
];

export const presentationConclusion = {
  image: '/presentation/conclusion.jpg',
  quote: "Desenvolvedores se conformam em implementar software. Construtores de ecossistema forjam futuros reais.",
  cta: "A sua jornada já começou!!!"
};

export const siteEm30MinutosSlides: PresentationSlide[] = [
  {
    id: 0,
    type: 'intro',
    image: '/pedro.JPG',
    title: "Pedro Goiânia",
    period: "Apresentação",
    context: {
      university: "Dev há >10 anos",
      work: "Produtos Digitais & Fintechs",
      project: "Starts & Comunidades"
    },
    speech: "Eu não só desenvolvo software — eu construo produtos que resolvem problemas reais.",
    bullets: [
      "Pedro Goiânia",
      "Desenvolvedor de software há mais de 10 anos",
      "Especialista em produtos digitais e fintechs",
      "Vencedor de 3 hackathons (incluindo Uber)",
      "Organizador de comunidades e eventos de tecnologia",
      "Criador de startups e produtos digitais"
    ],
    keyword: "EXPERIÊNCIA",
    presentationHint: "Fundo escuro moderno, tipografia grande e impactante, destacando a frase."
  },
  {
    id: 1,
    image: '/presentation/slide-1.jpg',
    title: "Como criar um super site em 30 minutos",
    period: "Abertura",
    speech: "Sem enrolação. Sem teoria. Só execução.",
    bullets: [
      "Hoje você vai ver um site sendo criado do zero",
      "Do protótipo ao deploy",
      "Ao vivo (ou quase isso)"
    ],
    keyword: "HOOK",
    presentationHint: "Visual tecnológico, foco total na frase central."
  },
  {
    id: 2,
    image: '/presentation/slide-2.jpg',
    title: "Criar um site ainda é lento demais",
    period: "O Problema",
    speech: "E se isso pudesse ser feito em minutos?",
    bullets: [
      "Demora dias ou semanas",
      "Precisa de várias habilidades",
      "Muito esforço para validar ideias"
    ],
    keyword: "A DOR",
    presentationHint: "Impacto visual da demora e complexidade."
  },
  {
    id: 3,
    image: '/presentation/slide-3.jpg',
    title: "A nova forma de criar produtos",
    period: "A Solução",
    speech: "Você não precisa mais fazer tudo — só precisa saber orquestrar.",
    bullets: [
      "IA + ferramentas modernas",
      "Automação do processo",
      "Velocidade absurda"
    ],
    keyword: "A REVOLUÇÃO",
    presentationHint: "Transição suave para uma estética futurista."
  },
  {
    id: 4,
    image: '/presentation/slide-4.jpg',
    title: "As 5 ferramentas",
    period: "A Stack",
    speech: "Uma stack enxuta e absurdamente poderosa.",
    bullets: [
      "Stitch (prototipação)",
      "Antigravity (geração e automação)",
      "Next.js (estrutura e performance)",
      "GitHub (versionamento e colaboração)",
      "Vercel (deploy)"
    ],
    keyword: "O ARSENAL",
    presentationHint: "Exibir logos ou os nomes grandes."
  },
  {
    id: 5,
    image: '/presentation/slide-5.jpg',
    title: "Do zero ao design em minutos",
    period: "Passo 1: Stitch",
    speech: "Antes você precisava de um designer. Agora você precisa de uma ideia.",
    bullets: [
      "Geração de interfaces",
      "Prototipação rápida",
      "Validação visual imediata"
    ],
    keyword: "PROTOTIPAÇÃO",
    presentationHint: "Animação de wireframe para interface bela."
  },
  {
    id: 6,
    image: '/presentation/slide-6.jpg',
    title: "Transformando design em código",
    period: "Passo 2: Antigravity",
    speech: "Você descreve — ele constrói.",
    bullets: [
      "Geração automática de código",
      "Estrutura pronta",
      "Aceleração do desenvolvimento"
    ],
    keyword: "GERAÇÃO DO CÓDIGO",
    presentationHint: "Chuva de código limpo."
  },
  {
    id: 7,
    image: '/presentation/slide-7.jpg',
    title: "O segredo está na conexão",
    period: "Integração (MCP)",
    speech: "As ferramentas são boas. Mas juntas, são absurdas.",
    bullets: [
      "Integração Stitch + Antigravity via MCP",
      "Fluxo automatizado",
      "Menos trabalho manual"
    ],
    keyword: "A MÁGICA",
    presentationHint: "Cabos ou fluxos conectando os ecossistemas, cores brilhantes."
  },
  {
    id: 8,
    image: '/presentation/slide-8.jpg',
    title: "Transformando em produto real",
    period: "Passo 3: Next.js",
    speech: "Aqui deixa de ser um protótipo… e vira produto.",
    bullets: [
      "SEO otimizado",
      "Alta performance",
      "Estrutura profissional"
    ],
    keyword: "ESTRUTURA",
    presentationHint: "Fundo com código moderno."
  },
  {
    id: 9,
    image: '/presentation/slide-9.jpg',
    title: "Colocando no ar em minutos",
    period: "Passo 4: Vercel",
    speech: "Deploy virou um git push.",
    bullets: [
      "Deploy automático via Git",
      "HTTPS e domínio customizado instantâneo",
      "Integração nativa com Next.js"
    ],
    keyword: "PUBLICAÇÃO",
    presentationHint: "Foguete ou ícone de nuvem."
  },
  {
    id: 10,
    image: '/presentation/slide-10.jpg',
    title: "Do zero ao online",
    period: "O Fluxo Completo",
    speech: "O caminho mais curto entre a ideia e o usuário.",
    bullets: [
      "1. Ideia → Stitch",
      "2. Design → Antigravity",
      "3. Código → Next.js",
      "4. Repositório → GitHub",
      "5. Deploy → Vercel"
    ],
    keyword: "O MÉTODO",
    presentationHint: "Gráfico horizontal mostrando o fluxo claro, passo a passo."
  },
  {
    id: 11,
    image: '/presentation/slide-11.jpg',
    title: "Vamos construir ao vivo",
    period: "Demonstração",
    speech: "Agora é onde tudo acontece.",
    bullets: [
      "Criar uma landing page",
      "Gerar design",
      "Gerar código",
      "Publicar"
    ],
    keyword: "SHOWTIME",
    presentationHint: "Luzes que se focam num terminal."
  },
  {
    id: 12,
    image: '/presentation/slide-12.jpg',
    title: "O jogo mudou",
    period: "Insight principal",
    speech: "Quem executa mais rápido, vence.",
    bullets: [
      "Não é sobre saber programar",
      "É sobre saber usar ferramentas",
      "Velocidade virou vantagem competitiva"
    ],
    keyword: "VANTAGEM",
    presentationHint: "Foco na agilidade."
  },
  {
    id: 13,
    image: '/presentation/slide-13.jpg',
    title: "Nunca foi tão fácil criar",
    period: "Fechamento",
    speech: "Se você consegue pensar, você consegue construir.",
    bullets: [
      "Barreiras diminuíram",
      "Qualquer ideia pode virar produto",
      "O melhor momento é agora"
    ],
    keyword: "HORA DE CRIAR",
    presentationHint: "Palavras grandiosas, fechamento glorioso com a frase final bem destacada."
  }
];

export const siteEm30MinutosConclusion = {
  image: '/presentation/conclusion.jpg',
  quote: "Se você consegue pensar, você consegue construir.",
  cta: "Chegou a hora de executar."
};

export const oMitoMobileSlides: PresentationSlide[] = [
  {
    id: 0,
    type: 'intro',
    image: '/pedro.JPG',
    title: "O Tamanho do Mercado Mobile",
    period: "A Mosca Branca",
    context: {
      university: "Mais Demanda",
      work: "Menos Oferta",
      project: "Alta Retenção"
    },
    speech: "Enquanto muita gente migrou pra web ou dados, o mobile ficou com um gap enorme de profissionais qualificados. Não falta vaga. Falta gente pronta.",
    bullets: [
      "Mobile não morreu — ele estabilizou com alta demanda",
      "Empresas precisam de apps novos, manutenção, performance e escala",
      "React Native / Flutter: Alta demanda, pouca oferta qualificada",
      "Swift (iOS): Mercado premium (EUA e fintechs)",
      "Kotlin (Android): Gigantes e modernização de legado"
    ],
    keyword: "A MOSCA BRANCA",
    presentationHint: "Impacto visual forte com o punchline escrito: 'Não falta vaga. Falta gente pronta.'"
  },
  {
    id: 1,
    type: 'intro',
    image: '/pedro.JPG',
    title: "Pedro Goiânia",
    period: "Quem sou eu",
    context: {
      university: "Desenvolvedor de Software",
      work: "Líder de Comunidade",
      project: "Fundador Engenharia Inversa"
    },
    social: "Instagram/LinkedIn/GitHub: @pedrogoiania",
    speech: "A velocidade é companheira dos resultados.",
    bullets: [],
    learning: "",
    keyword: "COMPROMISSO COM A PRIORIDADE",
    qrCode: {
      url: "/qr/qr-pedrogoiania.svg",
      label: "Vamos nos conectar",
      caption: "77a.it/pedrogoiania"
    },
    presentationHint: "Foto à esquerda atuando como background que desvanece suavemente. Textos com grande impacto e títulos de peso à direita."
  },
  {
    id: 2,
    image: '/presentation/slide-1.jpg',
    title: "O Que Todo Dev Mobile Precisa Saber",
    period: "O Mínimo Esperado",
    speech: "Se você não domina arquitetura, você não é pleno — você é um júnior que sabe framework.",
    bullets: [
      "Não é sobre framework, é sobre fundamentos",
      "Arquitetura: Separação de responsabilidades e código escalável",
      "React Native: MVVM e Clean Architecture",
      "Android: MVVM (ViewModel + Flow/LiveData)",
      "iOS: MVC evoluindo pra MVVM ou VIPER"
    ],
    keyword: "FUNDAMENTOS",
    presentationHint: "Contraste nítido de quem foca em framework VS engenheiro que foca em fundamentos."
  },
  {
    id: 3,
    image: '/presentation/slide-2.jpg',
    title: "Integração e Resiliência",
    period: "Offline-First",
    speech: "Saber consumir API não é saber integrar. App bom não é o que funciona — é o que continua funcionando quando a API falha.",
    bullets: [
      "Saber consumir API ≠ saber integrar",
      "BFF (Backend for Frontend)",
      "Tratamento de erros e Retry policies",
      "Offline-first é o diferencial gigante",
      "Manejo local de cache inteligente"
    ],
    keyword: "RESILIÊNCIA",
    presentationHint: "Apresentar app que funciona mesmo com a internet caindo. Foco visual em estabilidade."
  },
  {
    id: 4,
    image: '/presentation/slide-3.jpg',
    title: "O Grande Diferencial",
    period: "Publicação",
    speech: "Quem sabe publicar, trabalha. Quem não sabe, depende dos outros. 80% dos devs mobile NÃO sabem publicar um app sozinhos.",
    bullets: [
      "80% dos devs mobile sentem medo de publicar o app",
      "Android (Play Store): Build, versionamento, signing",
      "Google Play Console: Domínio de esteira de release",
      "iOS (App Store): Certificados e Provisioning profiles",
      "TestFlight e validações da Apple"
    ],
    keyword: "INDEPENDÊNCIA",
    presentationHint: "Dar foco alarmante no número de '80% não sabem publicar'."
  },
  {
    id: 5,
    image: '/presentation/slide-4.jpg',
    title: "React Native: O Jogo Mudou",
    period: "A Maturidade Adquirida",
    speech: "React Native deixou de ser gambiarra faz tempo.",
    bullets: [
      "React Native hoje é MUITO mais maduro do que a galera imagina",
      "Nova arquitetura (Fabric + TurboModules)",
      "Performance MUITO melhor e em par com o nativo",
      "Melhor e mais fina integração com libs nativas"
    ],
    keyword: "MATURIDADE",
    presentationHint: "Frase de impacto central: 'React Native deixou de ser gambiarra faz tempo.'"
  },
  {
    id: 6,
    image: '/presentation/slide-5.jpg',
    title: "A Stack do Desenvolvedor Completo",
    period: "O Diferencial Técnico",
    speech: "Hoje, começar sem Expo é começar errado.",
    bullets: [
      "Expo virou o ecossistema padrão da indústria cross-platform",
      "OTA (Over The Air): Atualização sem passar pela loja",
      "CI/CD com Fastlane para deploy com 1 comando",
      "Firebase (Crashlytics, Analytics, Remote Config)",
      "NativeWind: O Tailwind e 'Vibe Coding' no Mobile"
    ],
    keyword: "O ARSENAL MOBILE",
    presentationHint: "Passar logo por logo bem rápido. Expo, Fastlane, Firebase, NativeWind."
  },
  {
    id: 7,
    image: '/presentation/slide-6.jpg',
    title: "A Grande Oportunidade Oculta",
    period: "O Cenário Atual",
    speech: "Com muita gente migrando pra web ou IA no topo do hype, o mercado mobile filtrou o nível e sobrou espaço no topo.",
    bullets: [
      "O mercado exige ciclo completo, mas poucos entregam",
      "Déficit gigante de engenheiros que dominam os fundamentos",
      "Autonomia real: hoje um dev solo cria, publica e escala",
      "A era da 'Fabricite': empresas adotando a nova arquitetura"
    ],
    keyword: "OPORTUNIDADE",
    presentationHint: "Focar em como muitos ignoram o óbvio e o dinheiro fica na mesa."
  },
  {
    id: 8,
    image: '/presentation/slide-7.jpg',
    title: "As Novas Regras do Jogo",
    period: "A Transição",
    speech: "Se você quer entrar na tecnologia hoje, mobile ainda é o caminho mais rápido para crescer. Mas apenas para quem sai do básico.",
    bullets: [
      "Saia da caixa de ferramentas inútil",
      "Foque intensamente nos fundamentos definitivos",
      "Offline-first e deploy separam devs de engenheiros",
      "Quem entra hoje dominando isso, é contratado amanha"
    ],
    keyword: "O JOGO",
    presentationHint: "Encorajar quem está começando e provocar quem está estagnado."
  },
  {
    id: 9,
    type: 'closing',
    image: '/presentation/slide-8.jpg',
    title: "Crie, Publique, Escale Sozinho",
    period: "A Grande Vantagem",
    highlight: "Sair do Básico",
    content: {
      headline: "O caminho mais rápido para a independência tech.",
      story: "A janela de oportunidade está aberta, mas ela exige competência técnica de ponta a ponta. Seja a pessoa que constrói e coloca na loja, não apenas quem estiliza telas.",
      insight: "Domine o processo inteiro.",
      nextStep: "De ideação ao deploy, de júnior focado em framework a engenheiro sólido de mobile.",
      numbers: []
    },
    lessons: [
      "Integração ponta a ponta é o novo padrão",
      "A automação tirou do seu caminho as desculpas antigas"
    ],
    finalQuote: "Hoje você consegue criar, publicar e escalar um app sozinho — coisa que há 5 anos era impossível.",
    keyword: "INDEPENDÊNCIA",
    presentationHint: "Deixar o impacto da frase final e pausar."
  },
  {
    id: 10,
    type: 'closing',
    image: '/presentation/conclusion.jpg',
    title: "Escaneie e Continue",
    period: "Links",
    highlight: "Leve com Você",
    content: {
      headline: "Escaneie e leve o conteúdo com você.",
      story: "Aponte a câmera do celular para um dos QR Codes abaixo.",
      numbers: []
    },
    qrCodes: [
      {
        url: "/qr/qr-mobile.svg",
        label: "Mercado Mobile",
        caption: "77a.it/mobile"
      },
      {
        url: "/qr/qr-eiyt.svg",
        label: "Engenharia Inversa",
        caption: "77a.it/eiyt"
      }
    ],
    keyword: "ESCANEIE",
    presentationHint: "Deixe a lâmina no ar tempo suficiente para todo mundo conseguir escanear."
  }
];

export const oMitoMobileConclusion = {
  image: '/presentation/conclusion.jpg',
  quote: "Hoje você consegue criar, publicar e escalar um app sozinho — coisa que há 5 anos era impossível.",
  cta: "Domine o mobile, domine o mercado."
};

export const eventosComunidadeSlides: PresentationSlide[] = [
  {
    id: 0,
    type: 'intro',
    image: '/meetup-16-04.jpeg',
    title: "16/04: Meetup Reactivando",
    period: "Hub Goiás",
    context: {
      university: "Goiânia",
      work: "Reactivando",
      project: "Meetup"
    },
    speech: "O ecossistema não para, o Reactivando também não. Junte-se a nós presencialmente no Hub Goiás e vamos fortalecer a nossa comunidade.",
    bullets: [
      "Hub Goiás - Goiânia",
      "Vagas limitadas",
      "Network presencial"
    ],
    keyword: "MEETUP GYN",
    qrCode: {
      url: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=255-255-255&bgcolor=0-0-0&data=https://hubcommunity.io/events/reactivando-meetup-16",
      label: "Acesse para se inscrever!"
    }
  },
  {
    id: 1,
    image: '/startup_weekend_bg.png',
    title: "1, 2 e 3/Maio: Startup Weekend",
    period: "Anápolis",
    context: {
      university: "Startup Weekend",
      work: "54 Horas",
      project: "Anápolis"
    },
    speech: "54 horas de imersão total para criar uma startup. Valide ideias, trabalhe com pessoas incríveis e lance sua solução.",
    bullets: [
      "Startup Weekend em Anápolis",
      "Dias 1, 2 e 3 de Maio",
      "Use nosso cupom exclusivo: CAPITALTECH"
    ],
    keyword: "SW ANÁPOLIS",
    qrCode: {
      url: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=255-255-255&bgcolor=0-0-0&data=https://startupweekendanapolis.com.br",
      label: "Cupom: CAPITALTECH"
    }
  },
  {
    id: 2,
    image: '/og-image.jpg',
    title: "Comunidade Reactivando",
    period: "Expansão para BSB",
    context: {
      university: "WhatsApp",
      work: "Reactivando",
      project: "Brasília"
    },
    speech: "Já temos um grupo forte de BSB se formando na comunidade. Nossa meta: bater 100 membros no grupo do DF e organizar o primeiro Meetup oficial em Brasília!",
    bullets: [
      "Escaneie o código para entrar",
      "Conecte-se com devs de Brasília",
      "Ajude a organizar nosso meetup presencial"
    ],
    keyword: "COMUNIDADE VIVA",
    qrCode: {
      url: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=255-255-255&bgcolor=0-0-0&data=https://whatsapp.reactivando.io",
      label: "Faça Parte do Grupo!"
    }
  }
];

export const eventosComunidadeConclusion = {
  quote: "Desenvolver sozinho é bom. Evoluir em comunidade é inevitável.",
  cta: "Nos vemos no próximo evento."
};

export const escolherCarreiraSlides: PresentationSlide[] = [
  {
    id: 0,
    type: 'intro',
    image: '/pedro.JPG',
    title: "Pedro Goiânia",
    period: "Apresentação",
    context: {
      university: "Dev há >10 anos",
      work: "Fundador & Builder",
      project: "Comunidades & Startups"
    },
    speech: "Eu não escolhi uma carreira. Eu fui construindo uma, um passo de cada vez.",
    bullets: [
      "Pedro Goiânia",
      "Desenvolvedor de software há mais de 10 anos",
      "Especialista em produtos digitais e fintechs",
      "Vencedor de 3 hackathons (incluindo Uber)",
      "Organizador de comunidades e eventos de tecnologia",
      "Criador de startups e produtos digitais"
    ],
    keyword: "QUEM SOU EU",
    social: "Instagram/LinkedIn/GitHub: @pedrogoiania",
    presentationHint: "Fundo escuro moderno, tipografia grande e impactante, com a foto dominando o lado esquerdo."
  },
  {
    id: 1,
    image: '/presentation/slide-1.jpg',
    title: "Quem aqui já sabe o que quer ser?",
    period: "Abertura",
    speech: "Relaxa… a maioria dos adultos também não sabe.",
    bullets: [
      "70% dos adultos trabalham fora da área que estudaram",
      "Não existe 'escolha certa' — existe movimento",
      "Tá perdido? Isso é mais normal do que parece",
      "Hoje a gente vai falar sobre como sair do lugar sem ter todas as respostas"
    ],
    keyword: "QUEBRA DE PADRÃO",
    presentationHint: "Slide provocativo. A pergunta deve dominar a tela com tipografia gigante. Criar conexão imediata com a plateia."
  },
  {
    id: 2,
    image: '/startup-1-m-thumb.jpeg',
    imageOpacity: 60,
    title: "Eu vendia jujuba no farol",
    period: "O Início Improvável",
    context: {
      university: "Sem noção do futuro",
      work: "Vendendo doces",
      project: "Sobrevivência"
    },
    speech: "Eu não tinha plano nenhum. Eu era um adolescente normal, sem rumo, sem direção. Mas já estava observando o mundo de um jeito diferente — eu só não sabia ainda.",
    bullets: [
      "Adolescência vendendo jujuba no farol de Goiânia",
      "Nenhuma noção de empreendedorismo",
      "Mas já observava comportamentos e oportunidades",
      "A visão já existia ali — disfarçada de necessidade"
    ],
    learning: "Não subestime o que seus instintos de hoje estão te mostrando sobre amanhã.",
    keyword: "ORIGEM",
    presentationHint: "Visual cru e honesto. Foco na autenticidade da história. Mostrar que grandes jornadas começam nos lugares mais improváveis."
  },
  {
    id: 3,
    image: '/presentation/slide-2.jpg',
    title: "Da curiosidade ao código",
    period: "A Descoberta",
    context: {
      university: "IFG",
      work: "Primeiros projetos",
      project: "Hackathons"
    },
    speech: "Eu não tinha um plano. Eu só fui dando o próximo passo. Entrei pro IFG, descobri a tecnologia… e de repente, tudo mudou.",
    bullets: [
      "Entrei pro IFG sem saber o que ia acontecer",
      "Descobri código — e fiquei viciado",
      "Comecei a participar de hackathons",
      "Cada competição me mostrou quem eu poderia ser",
      "A carreira começou sem eu perceber"
    ],
    learning: "A carreira não aparece de uma vez. Ela se revela conforme você se move.",
    keyword: "DESCOBERTA",
    presentationHint: "Energia de hackathon. Mostrar a transformação de 'perdido' pra 'em movimento'. Visual com código e troféus."
  },
  {
    id: 4,
    image: '/presentation/slide-3.jpg',
    title: "A maior mentira sobre carreira",
    period: "Quebrando Mitos",
    speech: "Disseram pra gente que a gente precisa escolher uma carreira cedo… e acertar de primeira. Isso é mentira.",
    bullets: [
      "O mundo mudou — carreiras não são mais lineares",
      "Seus pais escolheram UMA profissão. Você pode ter várias.",
      "De jujuba no farol → desenvolvedor → líder de engenharia → founder",
      "Você pode mudar quantas vezes precisar",
      "A única coisa errada é ficar parado"
    ],
    keyword: "MITO QUEBRADO",
    presentationHint: "Impacto visual forte. A frase 'Isso é mentira' deve marcar o slide com tipografia pesada e contrastante."
  },
  {
    id: 5,
    image: '/presentation/slide-5.jpg',
    title: "Testar ao invés de decidir",
    period: "Como Escolher #1",
    speech: "Você não descobre pensando. Você descobre fazendo.",
    bullets: [
      "Faça um projeto — qualquer um. Mesmo pequeno.",
      "Participe de um evento. Hackathon, meetup, palestra.",
      "Tente coisas diferentes sem medo de errar",
      "Cada teste te elimina uma dúvida",
      "Decisão boa vem depois da experiência, não antes"
    ],
    learning: "Toda vez que você testa algo, você descobre mais sobre você mesmo.",
    keyword: "TESTE",
    presentationHint: "Visual prático e dinâmico. Foco em ação. Ícones de projeto, evento, código."
  },
  {
    id: 6,
    image: '/presentation/slide-7.jpg',
    title: "Siga a curiosidade, não a pressão",
    period: "Como Escolher #2",
    speech: "O que você assiste no YouTube sem ninguém mandar? O que você pesquisa sozinho às 2h da manhã? Ali mora a resposta.",
    bullets: [
      "O que você gosta de ver no YouTube por diversão?",
      "O que você pesquisa sozinho, sem ninguém pedir?",
      "Que tipo de conteúdo te prende por horas?",
      "A curiosidade genuína é o GPS mais confiável",
      "Pressão dos outros te leva pro caminho errado"
    ],
    keyword: "CURIOSIDADE",
    presentationHint: "Visual leve e inspirador. Mostrar a ideia de GPS interior. Cores que transmitem descoberta e exploração."
  },
  {
    id: 7,
    image: '/presentation/slide-4.jpg',
    title: "Aprenda habilidades que valem em qualquer lugar",
    period: "Como Escolher #3",
    speech: "Independente da área que você escolher, tem habilidades que te colocam na frente em qualquer jogo.",
    bullets: [
      "Comunicação — saber se expressar abre todas as portas",
      "Tecnologia — o mundo inteiro roda em código",
      "Resolver problemas — empresas pagam por isso",
      "Trabalhar em equipe — ninguém cresce sozinho",
      "Essas servem pra medicina, direito, tech, design, tudo."
    ],
    keyword: "HABILIDADES",
    presentationHint: "Arsenal de habilidades. Visual tipo inventário de RPG — cada habilidade como um poder desbloqueável."
  },
  {
    id: 8,
    image: '/meetup-16-04.jpeg',
    title: "Ande com gente que está fazendo",
    period: "Como Escolher #4",
    speech: "O ambiente que você está define até onde você vai.",
    bullets: [
      "Vá a eventos (como esse que você está agora)",
      "Entre em comunidades da área que te interessa",
      "Participe de hackathons — o nível sobe absurdamente",
      "Converse com pessoas que já estão no caminho",
      "Você se torna a média das 5 pessoas ao seu redor"
    ],
    learning: "As pessoas certas aceleram 10 anos da sua evolução.",
    keyword: "AMBIENTE",
    presentationHint: "Foto real de comunidade/meetup. Foco na energia coletiva. Pessoas reais fazendo coisas reais."
  },
  {
    id: 9,
    image: '/presentation/slide-9.jpg',
    title: "O que você pode fazer AGORA",
    period: "Ação Imediata",
    speech: "Não espera acabar o ensino médio. Não espera a faculdade. Começa hoje.",
    bullets: [
      "Crie um projeto simples — um app, um site, uma ideia",
      "Participe de um hackathon (mesmo sem saber nada)",
      "Aprenda algo online — YouTube tem conteúdo de graça",
      "Converse com alguém que trabalha na área que te interessa",
      "Entre numa comunidade tech (tipo o Reactivando)"
    ],
    keyword: "COMECE HOJE",
    presentationHint: "Slide de ação. Visual urgente mas acolhedor. Checklist visual com cada item brilhando conforme aparece."
  },
  {
    id: 10,
    type: 'closing',
    image: '/presentation/slide-12.jpg',
    title: "O que você aprendeu hoje",
    period: "Recapitulando",
    highlight: "As 4 Chaves",
    content: {
      headline: "Você não precisa ter todas as respostas.",
      story: "Mas agora você tem 4 chaves que a maioria dos adultos demorou anos pra descobrir.",
      insight: "Teste ao invés de decidir.",
      nextStep: "Siga a curiosidade, aprenda habilidades valiosas e ande com quem está fazendo."
    },
    lessons: [
      "Ninguém acerta de primeira — e tá tudo bem",
      "Curiosidade vale mais que certeza",
      "O ambiente certo muda tudo"
    ],
    keyword: "RECAPITULANDO",
    presentationHint: "Slide de consolidação. Pausar em cada lição. Deixar a plateia absorver."
  },
  {
    id: 11,
    type: 'closing',
    image: '/presentation/slide-13.jpg',
    title: "Você não precisa ter todas as respostas agora",
    period: "Fechamento",
    highlight: "A Verdade",
    content: {
      headline: "O futuro não é decidido em um momento.",
      story: "Ele é construído nas pequenas decisões do dia a dia. Cada teste, cada conversa, cada projeto te leva mais perto de quem você vai se tornar."
    },
    finalQuote: "O mundo não espera quem tá pronto. O mundo é de quem começa.",
    keyword: "COMECE",
    presentationHint: "Impacto emocional máximo. A frase final deve explodir na tela. Foco total nos olhos da plateia antes de revelar."
  }
];

export const escolherCarreiraConclusion = {
  image: '/presentation/conclusion.jpg',
  quote: "O mundo não espera quem tá pronto. O mundo é de quem começa.",
  cta: "Seu próximo passo começa agora."
};

export const presentationsRegistry: Record<string, { title: string, description: string, thumbnail?: string, slides: PresentationSlide[], conclusion: any }> = {
  "minha-jornada": {
    title: "De Desenvolvedor a Founder",
    description: "A linha do tempo: do primeiro Startup Weekend até o Exit da startup.",
    thumbnail: "/startup-1-m-thumb.jpeg",
    slides: timelineSlides,
    conclusion: presentationConclusion
  },
  "site-em-30-minutos": {
    title: "Como criar um super site em 30 minutos",
    description: "Veja um site sendo criado do zero, do protótipo ao deploy, em tempo real com ferramentas modernas e Inteligência Artificial.",
    thumbnail: "/thumb-super-site.jpeg",
    slides: siteEm30MinutosSlides,
    conclusion: siteEm30MinutosConclusion
  },
  "o-mito-mobile": {
    title: "A Mosca Branca: O Mercado Mobile Oculto",
    description: "Por que desenvolvedores mobile completos ditam as regras, saltam pra vagas globais e escalam apps sozinhos — e o que você precisa fazer para se tornar um deles.",
    thumbnail: "/pedro.JPG",
    slides: oMitoMobileSlides,
    conclusion: oMitoMobileConclusion
  },
  "eventos-comunidade": {
    title: "Próximos Eventos da Comunidade",
    description: "Confira os próximos grandes eventos e encontros presenciais envolvendo a comunidade Reactivando e nossos parceiros.",
    thumbnail: "/meetup-16-04.jpeg",
    slides: eventosComunidadeSlides,
    conclusion: eventosComunidadeConclusion
  },
  "escolher-carreira": {
    title: "Como Escolher Carreira Sem Ficar Perdido",
    description: "Você não precisa ter todas as respostas agora. Uma palestra para adolescentes sobre como descobrir seu caminho testando, errando e começando — sem pressão.",
    thumbnail: "/pedro.JPG",
    slides: escolherCarreiraSlides,
    conclusion: escolherCarreiraConclusion
  }
};
