export interface SectionModel {
  id: string;
  label: string;
  texts?: string[];
  subSections?: SectionModel[];
  sigla?: string;
}

export const sectionContents: SectionModel[] = [
  {
    id: "t_1",
    label: "Sobre o Projeto",
    texts: [
      "O Projeto Cientista Chefe Terra é uma iniciativa que une o Instituto de Desenvolvimento Agrário do Ceará (IDACE) e pesquisadores das Instituições de Ensino Superior do estado para apoiar a Política Estadual de Regularização Fundiária Rural. Trabalhamos na construção de uma governança fundiária inovadora que integra questões ambientais e sociais, alinhada às Diretrizes Voluntárias para a Governança Responsável da Terra (DVGT) e à Agenda 2030. Nosso foco é fortalecer a democratização da terra, garantir o acesso equitativo aos recursos naturais e contribuir para a erradicação da pobreza e da fome no Ceará.",
      "O objetivo geral do Projeto Cientista Chefe Terra é contribuir com a Política Estadual de Regularização Fundiária Rural e o Reordenamento Agrário do Ceará, construindo inovação no conceito de governança fundiária que integre questões ambientais e sociais. Nossos objetivos específicos incluem:",
      "1. Elaborar estudo comparativo sobre Governança Fundiária versus especulação fundiária/grilagem, desmatamento e proteção de serviços ecossistêmicos.",
      "2. Investigar as estratégias de reprodução social em Assentamentos Estaduais, compreendendo as novas dinâmicas territoriais e relações campo-cidade.",
      "3. Desenvolver software interativo para apoio à tomada de decisão na governança fundiária cearense, integrando dados georreferenciados e cartográficos.",
      "O Projeto Cientista Chefe Terra desenvolve produtos estratégicos para fortalecer a governança fundiária no Ceará:",
      "1. Relatório de Avaliação da Governança Fundiária e Ambiental do Ceará, com recomendações de políticas públicas baseadas na metodologia LGAF.",
      "2. Estudo sobre as novas configurações sociais e produtivas em assentamentos estaduais, identificando desafios e oportunidades para a política fundiária.",
      "3. Software interativo de visualização e análise da malha fundiária cearense, integrando dados georreferenciados e cartográficos para apoio à tomada de decisão.",
      "4. Materiais de divulgação científica, incluindo artigos acadêmicos, cartilhas e conteúdos digitais para disseminação do conhecimento produzido.",
    ],
  },

  {
    id: "t_5",
    label: "Parceiros",
    subSections: [
      {
        id: "s_2_1",
        label:
          "FUNCAP - Fundação Cearense de Desenvolvimento Científico e Tecnológico",
        sigla: "FUNCAP",
        texts: [
          "A Funcap tem por finalidade o amparo à pesquisa científica e tecnológica do Ceará, seja em caráter autônomo ou complementar ao fomento provido pelo Sistema Federal de Ciência e Tecnologia. Compete a ela estimular o desenvolvimento do Estado por meio do incentivo e o fomento à pesquisa, à formação e capacitação de recursos humanos e à difusão do conhecimento produzido.",
          "https://www.funcap.ce.gov.br/",
        ],
      },
      {
        id: "s_2_2",
        label: "IDACE- Instituto do Desenvolvimento Agrário do Ceará",
        sigla: "IDACE",
        texts: [
          "O Instituto do Desenvolvimento Agrário do Ceará (Idace) é uma autarquia especial vinculada à Secretaria do Desenvolvimento Agrário (SDA) do Estado do Ceará, responsável por planejar e executar a política agrária estadual. Sua missão principal é promover a organização da estrutura fundiária, com destaque para ações de assentamento e reassentamento rural, além de atuar na distribuição de terras devolutas, em conformidade com a legislação vigente.",
          "https://www.idace.ce.gov.br/",
        ],
      },
      {
        id: "s_2_3",
        label: "UFC - Universidade Federal do Ceará",
        sigla: "UFC",
        texts: [
          "A UFC é uma instituição pública de ensino superior que tem como objetivos promover ensino, pesquisa e extensão de excelência, formando profissionais qualificados e comprometidos com o desenvolvimento científico, tecnológico e social. Além disso, busca ampliar o acesso ao conhecimento, incentivar a inovação e contribuir para o progresso sustentável do Ceará e do Brasil.",
          "https://www.ufc.br/",
        ],
      },
      {
        id: "s_2_4",
        label: "Cientista Chefe Meio Ambiente",
        texts: [
          "O trabalho do cientista chefe, vinculado à Sema, atua diretamente nas competências da Sema e da Superintendência Estadual do Meio Ambiente (Semace) visando estabelecer políticas de inovação e apoio a ações na política ambiental que tem repercussões econômicas, sociais e ecológicas.",
          "https://www.instagram.com/cientistachefemeioambiente/?hl=pt-br",
        ],
      },
      {
        id: "s_2_5",
        label: "Cientista Chefe da Cultura",
        texts: [
          "O projeto se fundamenta na noção de cidadania cultural, ou seja, compreende a cultura como direito fundamental do cidadão e como direito à criação desse direito por aqueles que, sistemática e deliberadamente, excluídos do direito à cultura.",
          "https://www.instagram.com/cientistachefedacultura/?hl=pt-br",
        ],
      },
      {
        id: "s_2_6",
        label: "Cientista Chefe Agricultura",
        texts: [
          "O projeto propõe a aproximação entre o conhecimento científico e as ações governamentais no setor agropecuário para obter melhorias no uso eficiente da água e no nível tecnológico dos sistemas de produção e o desenvolvimento sustentável no campo.",
          "https://www.instagram.com/cientistachefeagricultura/?hl=pt-br",
        ],
      },
      {
        id: "s_2_7",
        label: "Cientista Chefe Recursos Hídricos",
        texts: [
          "A garantia de água em quantidade e qualidade adequadas para os usos — humanos, econômicos e ecossistêmico – e a prevenção e a resposta a eventos hidrológicos extremos como secas e cheias são condições básicas para o desenvolvimento da sociedade, sendo as mesmas, também, dimensões intrínseca à segurança hídrica.",
          "instagram.com/aguacientistachefe/?hl=pt-br",
        ],
      },
      {
        id: "s_2_8",
        label: "Cientista Chefe Infraestrutura Costeira",
        texts: [
          "Elabora estratégias para o planejamento e a manutenção de obras em áreas litorâneas, conciliando desenvolvimento com mitigação de impactos ambientais e adaptação às mudanças climáticas.",
          "https://www.instagram.com/cientistachefe.infracosteira/?hl=pt-br",
        ],
      },
      {
        id: "s_2_9",
        label: "SDA - Secretaria do Desenvolvimento Agrário",
        sigla: "SDA",
        texts: [
          "A Secretaria do Desenvolvimento Agrário, Órgão da Administração Direta do Governo do Estado do Ceará, tem por finalidade planejar, coordenar e executar, diretamente ou através das suas Vinculadas, as ações do Governo para o desenvolvimento da agropecuária, mediante apoio à agricultura familiar.",
          "https://www.sda.ce.gov.br/",
        ],
      },
      {
        id: "s_2_10",
        label: "SEMA - Secretaria do Meio Ambiente e Mudança do Clima",
        sigla: "SEMA",
        texts: [
          "Os objetivos incluem planejar, implementar e executar a política ambiental do Estado; monitorar e avaliar sua eficácia; articular ações entre diferentes níveis governamentais; gerir Unidades de Conservação estaduais; coordenar projetos de educação ambiental; captar recursos para ações ambientais; revisar a legislação ambiental; coordenar o sistema ambiental estadual; acompanhar políticas públicas com impacto ambiental; e coordenar planos e ações na área.",
          "https://www.sema.ce.gov.br/",
        ],
      },
      {
        id: "s_2_11",
        label: "SRH - Secretaria de Recursos Hídricos do Ceará",
        sigla: "SRH",
        texts: [
          "Cabe a SRH promover o aproveitamento racional e integrado dos Recursos Hídricos do Estado; coordenar, gerenciar e operacionalizar estudos, pesquisas, programas, projetos, obras, produtos e serviços referentes a recursos hídricos e promover a articulação dos órgãos e entidades estaduais do setor com os órgãos e entidades federais e municipais.",
          "https://www.srh.ce.gov.br/",
        ],
      },
      {
        id: "s_2_12",
        label: "SEPINCE - Secretaria Dos Povos Indígenas",
        sigla: "SEPINCE",
        texts: [
          "Assessorar diretamente o Chefe do Executivo na formulação de políticas e diretrizes voltadas à proteção dos direitos dos povos indígenas, preservando-os de ações prejudiciais à cultura e ao pertencimento territorial, contribuindo institucionalmente com a demarcação, a defesa, o usufruto exclusivo e a gestão das terras e dos territórios indígenas, além de zelar pelo cumprimento dos acordos e tratados internacionais, quando relacionados aos povos indígenas.",
          "https://www.povosindigenas.ce.gov.br/",
        ],
      },
      {
        id: "s_2_13",
        label: "SECULT - Secretaria da Cultura do Ceará",
        sigla: "SECULT",
        texts: [
          "Formular, promover e gerir políticas públicas que assegurem o pleno exercício dos direitos culturais para a população do Ceará.",
          "https://www.secult.ce.gov.br/",
        ],
      },
      {
        id: "s_2_14",
        label: "SEJUV - Secretaria da Juventude do Ceará",
        sigla: "SEJUV",
        texts: [
          "Cuidar de quem mais precisa. O programa de governo da Sejuv Ceará tem como guia e foco as juventudes da periferia, do interior do Estado e de grupos marginalizados.",
          "https://www.juventude.ce.gov.br/",
        ],
      },
      {
        id: "s_2_15",
        label: "SEDIH - Secretaria dos Direitos Humanos",
        sigla: "SEDIH",
        texts: [
          "A Secretaria dos Direitos Humanos do Ceará foi criada para atuar de forma direcionada na gestão de políticas públicas relativas aos Direitos Humanos no Estado. Por meio de ações afirmativas e assertivas, objetiva-se contribuir com a garantia da liberdade, igualdade e dignidade do povo cearense.",
          "https://www.direitoshumanos.ce.gov.br/",
        ],
      },
      {
        id: "s_2_16",
        label: "SEIR - Secretaria da Igualdade Racial",
        sigla: "SEIR",
        texts: [
          "Atua alinhada com a 5º diretriz do Governo do Estado: combate ao racismo como uma estratégia estruturante das políticas públicas, por meio da implantação de ações repressivas – indicando que racismo é crime; valorativas e afirmativas – para a superação das discriminações e desigualdades raciais e que oportunizam rede de proteção aos grupos racializados de forma subalterna e sua inclusão socioeconômica.",
          "https://www.igualdaderacial.ce.gov.br/",
        ],
      },
    ],
  },
];
