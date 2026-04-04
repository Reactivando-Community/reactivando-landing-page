export type SlideContext = {
  university: string;
  work: string;
  project: string;
};

export type PresentationSlide = {
  id: number;
  type?: 'intro' | 'timeline' | 'closing';
  image?: string;
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
    insight: string;
    nextStep: string;
    numbers: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  lessons?: string[];
  finalQuote?: string;

  presentationHint?: string | any;
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
    speech: "A velocidade é companheira dos resultados.",
    bullets: [],
    learning: "",
    keyword: "COMPROMISSO COM A PRIORIDADE",
    presentationHint: "Foto à esquerda atuando como background que desvanece suavemente. Textos com grande impacto e títulos de peso à direita."
  },
  {
    id: 1,
    image: '/presentation/slide-1.jpg',
    title: "A Faísca Inicial",
    period: "2016",
    context: {
      university: "Início da Graduação",
      work: "Estágios Iniciais",
      project: "Primeiro Contato (Startup Weekend)"
    },
    speech: "Eu achava que tecnologia era apenas escrever código na faculdade, até que aquelas 54 horas mudaram completamente minha visão de mundo e de negócios.",
    bullets: [
      "54 horas de imersão total",
      "Tensão no primeiro pitch",
      "Visão de negócio vs. Código puro"
    ],
    learning: "A tecnologia é apenas o meio; o fim real é resolver uma dor palpável.",
    keyword: "DESCOBERTA",
    presentationHint: "Fade-in suave a partir de um fundo escuro que se ilumina revelando a palavra 'DESCOBERTA'."
  },
  {
    id: 2,
    image: '/presentation/slide-2.jpg',
    title: "Sujando as Mãos",
    period: "2017",
    context: {
      university: "Aprofundamento Técnico",
      work: "Desenvolvedor Júnior",
      project: "Happy Hour App & Tron"
    },
    speech: "A inspiração não sobrevive sem transpiração. Era a hora de tirar todas aquelas ideias da cabeça, virar noite e ver o aplicativo rodar de fato na mão das pessoas.",
    bullets: [
      "Criação de produtos próprios",
      "Iteração e testes madrugada adentro",
      "O choque com o primeiro usuário real"
    ],
    learning: "Lançar rápido e testar vale mais do que buscar uma versão 1.0 impecável e isolada.",
    keyword: "EXECUÇÃO",
    presentationHint: "Slide up vertical dinâmico, revelando wireframes que se transformam em apps vivos."
  },
  {
    id: 3,
    image: '/presentation/slide-3.jpg',
    title: "A Validar É Preciso",
    period: "2017–2018",
    context: {
      university: "Projetos de Extensão",
      work: "Tech Local",
      project: "Hackathons (Rio Quente + Uber)"
    },
    speech: "Ganhar hackathons em série me ensinou que inovação não é só ter a ideia mais 'disruptiva', mas conseguir provar que ela para em pé sob intensa pressão de gigantes.",
    bullets: [
      "Vitórias seguidas em Hackathons",
      "Desenvolvimento sob pressão extrema",
      "Modelando com o padrão Uber/Grandes Players"
    ],
    learning: "Os gigantes compram a solução validada e clara, não apenas uma stack tecnológica moderna.",
    keyword: "VALIDAÇÃO",
    presentationHint: "Efeito de flash fotográfico entre as trocas, mostrando troféus ou logos corporativos em destaque."
  },
  {
    id: 4,
    image: '/presentation/slide-4.jpg',
    title: "Sentindo o Peso do Tráfego",
    period: "2018",
    context: {
      university: "Foco no TCC",
      work: "Desenvolvedor Pleno",
      project: "Querida Ansiedade (Status de Escala)"
    },
    speech: "Pela primeira vez, não era mais só uma brincadeira de fim de semana. Existiam milhares de pessoas reais que precisavam e dependiam daquele servidor em pé.",
    bullets: [
      "Chegada de milhares de usuários",
      "Primeiro gargalo sério de arquitetura (infra)",
      "Responsabilidade pelo impacto social"
    ],
    learning: "Escalar exige virar a chave mental de 'está funcionando' para 'como evitar que caia'.",
    keyword: "ESCALA",
    presentationHint: "Uma linha gráfica em background subindo abruptamente, simulando picos massivos de acesso."
  },
  {
    id: 5,
    image: '/presentation/slide-5.jpg',
    title: "O Pulo Global",
    period: "2019–2020",
    context: {
      university: "Formatura Concluída",
      work: "Engenharia (Gympass/SP)",
      project: "Pura Liderança Corporativa"
    },
    speech: "A mudança para São Paulo e o contato com a engenharia do Gympass me colocou frente a frente com o padrão global. Ou eu acompanhava, ou ficava para trás.",
    bullets: [
      "Impacto no epicentro de tecnologia BR (SP)",
      "Lidar com microsserviços globais",
      "Primeiros passos formais em liderança tech"
    ],
    learning: "A melhor forma de subir o próprio nível técnico é colocar-se num ambiente onde você seja o menor.",
    keyword: "IMERSÃO",
    presentationHint: "Zoom in profundo simulando a malha urbana metropolitana intercalada com métricas densas de código."
  },
  {
    id: 6,
    image: '/presentation/slide-6.jpg',
    title: "A Era do Produto",
    period: "2020–2021",
    context: {
      university: "Autoeducação Contínua",
      work: "Liderança Técnica",
      project: "Evolua (Produto Paralelo)"
    },
    speech: "Foi criando a Evolua que o estalo ocorreu: codar incrivelmente rápido e limpo é inútil se você estiver programando a funcionalidade errada que ninguém vai usar.",
    bullets: [
      "Pivotagem e visão de Produto vs Tech pura",
      "Equilibrando os vários chapéus do projeto",
      "Os obstáculos na métrica de retenção"
    ],
    learning: "Bons engenheiros criam software com eficiência; engenheiros excelentes questionam por que ele deve ser criado.",
    keyword: "PRODUTO",
    presentationHint: "Componentes na tela que se expandem em wireframes com setas de conversão exibindo o funil."
  },
  {
    id: 7,
    image: '/presentation/slide-7.jpg',
    title: "Liderando a Nuvem Humana",
    period: "2021–2022",
    context: {
      university: "Networking Tático",
      work: "Manager (Itaú)",
      project: "Gestão Escalável (+70 devs)"
    },
    speech: "No Itaú, eu notei que configurar clusters lógicos escaláveis era muito mais fácil do que alinhar cultura e propósito ao longo de um banco inteiro.",
    bullets: [
      "Gestão de escala: liderando +70 pessoas",
      "Enraizamento e sustentabilidade cultural",
      "Sistemas bancários super críticos"
    ],
    learning: "As maiores dificuldades em arquitetura não estão nos componentes técnicos, mas na comunicação da equipe.",
    keyword: "LIDERANÇA",
    presentationHint: "Uma teia animada de diagramas técnicos (nós cibernéticos) que se transformam em íconografia de perfis de pessoas conectadas."
  },
  {
    id: 8,
    image: '/presentation/slide-8.jpg',
    title: "O Sangue Roxo e a Madrugada",
    period: "2022–2023",
    context: {
      university: "Pesquisas Prod.",
      work: "Nubank",
      project: "PubChat"
    },
    speech: "Mesmo operando na maior engrenagem da América Latina dentro do Nubank, a vocação empreendedora criava as startups nas sextas e nos sábados.",
    bullets: [
      "Operações gigantes na América Latina (Nubank)",
      "Side projects agressivos na madrugada (PubChat)",
      "O fervilhar perpétuo do ecossistema pessoal"
    ],
    learning: "Disciplina e resiliência: metodologias de grandes corporações podem ser miniaturizadas para acelerar startups nos fins de semana.",
    keyword: "EQUILÍBRIO",
    presentationHint: "Split screen dinâmico: metade da tela em tom de inovação coorporativa (roxo) e a outra metade escura e 'hacker'."
  },
  {
    id: 9,
    image: '/presentation/slide-9.jpg',
    title: "A Demanda Antecipada",
    period: "2024",
    context: {
      university: "Casting Realidade",
      work: "Virada Total",
      project: "Criação do Pix Aí"
    },
    speech: "Tudo culminou neste ano: foi preciso coragem para largar o barco seguro e focar num projeto onde o mercado demandou e pediu nossa solução até sem termos o código 100% pronto.",
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
    image: '/presentation/slide-13.jpg',
    title: "Isso não foi o fim",
    period: "Conclusão",
    type: "closing",
    highlight: "Nova fase",
    content: {
      headline: "O exit não foi o objetivo final. Foi a transição.",
      story: "Depois de 8 anos tentando… eu finalmente fiz meu primeiro exit. Mas, pela primeira vez, eu entendi que isso era só o começo.",
      insight: "O Pix Aí não foi o destino. Foi o veículo.",
      nextStep: "Agora o jogo é outro: escalar com tudo que eu levei 8 anos pra aprender.",
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
    lessons: [
      "Exit não é fim — é alavanca",
      "Equity é construção de longo prazo",
      "Jogo muda quando você aprende a escalar"
    ],
    finalQuote: "Eu não estou encerrando uma jornada… eu estou começando a próxima com vantagem.",
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
        "Fale mais devagar aqui — esse é o clímax",
        "Olhe para a plateia antes da frase final"
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
  }
};

