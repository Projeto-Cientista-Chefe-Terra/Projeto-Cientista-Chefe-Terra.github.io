export interface FAQProps {
  question: string;
  answer: string;
  olList?: string[];
  ulList?: string[];
}

export const FAQContent: FAQProps[] = [
  {
    question: "O que é o Projeto Cientista Chefe Terra?",
    answer:
      "O Projeto Cientista Chefe Terra é uma iniciativa que nasce da parceria entre o Instituto de Desenvolvimento Agrário do Ceará (IDACE) e pesquisadores das Instituições de Ensino Superior do estado. Trata-se de um projeto interdisciplinar que visa apoiar a Política Estadual de Regularização Fundiária Rural, trabalhando na construção de uma governança fundiária inovadora que integra questões ambientais e sociais. O projeto está alinhado às Diretrizes Voluntárias para a Governança Responsável da Terra (DVGT) e à Agenda 2030, buscando fortalecer o processo de democratização da terra e contribuir para a erradicação da pobreza e da fome no Ceará.",
  },
  {
    question: "O que é governança fundiária e por que ela é importante?",
    answer:
      "A governança fundiária refere-se ao conjunto de instituições, mecanismos e processos pelos quais as decisões sobre acesso e uso da terra são tomadas e implementadas. Ela é importante porque estabelece como os direitos à terra são definidos, documentados e transferidos, além de determinar como os conflitos são resolvidos e como os interesses concorrentes são gerenciados. Uma boa governança fundiária é fundamental para garantir segurança jurídica, reduzir conflitos, promover o desenvolvimento sustentável, proteger os direitos de comunidades tradicionais e vulneráveis, e permitir o uso eficiente dos recursos naturais. No contexto do Ceará, a governança fundiária é essencial para enfrentar desafios como a informalidade na ocupação de terras, disputas territoriais e a necessidade de conservação ambiental.",
  },
  {
    question:
      "O que são as Diretrizes Voluntárias para a Governança Responsável da Terra (DVGT)?",
    answer:
      "As Diretrizes Voluntárias para a Governança Responsável da Terra, dos Recursos Pesqueiros e Florestais (DVGT) são um conjunto de princípios e práticas aprovadas em 2012 pelo Comitê de Segurança Alimentar Mundial das Nações Unidas. Elas foram desenvolvidas para orientar os países na elaboração de programas, leis e políticas que compreendam a segurança alimentar, o direito de posse e o acesso equitativo à terra, à pesca e às florestas como elementos fundamentais na erradicação da fome e da pobreza. As DVGT são um instrumento que os países podem adaptar e adotar para alcançar a segurança alimentar das populações, trazendo benefícios especialmente para pessoas em situação de vulnerabilidade. No Projeto Cientista Chefe Terra, essas diretrizes são utilizadas como base para o desenvolvimento de ferramentas e metodologias de governança fundiária no Ceará.",
  },
  {
    question: "Qual é o papel do IDACE na regularização fundiária do Ceará?",
    answer:
      "O Instituto do Desenvolvimento Agrário do Ceará (IDACE) é uma Autarquia Especial vinculada à Secretaria do Desenvolvimento Agrário do Ceará (SDA), responsável pela promoção e execução da política agrária estadual. Criado pela Lei Nº 11.412 de 1987, o IDACE desenvolve atividades relativas à organização da estrutura fundiária, com ênfase no assentamento e reassentamento rural, e possui amplos poderes para promover a distribuição de terras devolutas, conforme legislação específica. Entre suas atribuições estão o levantamento, identificação e georreferenciamento de imóveis rurais, a implantação do Cadastro de Imóveis Rurais de Uso Múltiplo, a regularização de territórios originários e tradicionais, e a execução de programas de regularização fundiária dirigidos aos legítimos possuidores de terras devolutas estaduais, priorizando agricultores familiares.",
  },
  {
    question: "O que é a metodologia LGAF utilizada no projeto?",
    answer:
      'A metodologia "Marco de Avaliação da Governança de Terras" (Land Governance Assessment Framework - LGAF) é uma ferramenta desenvolvida pelo Banco Mundial para avaliar a governança fundiária. No Projeto Cientista Chefe Terra, essa metodologia é adaptada para o contexto cearense e utilizada para realizar um estudo comparativo sobre governança fundiária, desmatamento e proteção de serviços ecossistêmicos. A LGAF envolve a coleta de dados por meio de um roteiro estruturado, onde especialistas de instituições fundiárias, academia e sociedade civil chegam a um consenso sobre a condição da governança da terra. A metodologia utiliza técnicas como grupos focais e painéis de especialistas, avaliando cinco áreas temáticas: reconhecimento e respeito dos direitos existentes, ordenamento, gestão ambiental, gestão das terras públicas, prestação pública de informações sobre terras, e resolução de litígios e gestão de conflitos.',
  },
  {
    question:
      "Quais são os principais objetivos do Projeto Cientista Chefe Terra?",
    answer:
      "O objetivo geral do Projeto Cientista Chefe Terra é contribuir com a Política Estadual de Regularização Fundiária Rural e o Reordenamento Agrário do Ceará, construindo inovação no conceito de governança fundiária que integre questões ambientais e sociais. Os objetivos específicos incluem: ",
    olList: [
      "Elaborar estudo comparativo sobre Governança Fundiária versus especulação fundiária/grilagem de terra, desmatamento e proteção de serviços ecossistêmicos, correlacionando ao contexto econômico-ecológico do Ceará.",
      "Investigar as estratégias de reprodução social em Assentamentos Estaduais, compreendendo as novas dinâmicas territoriais e relações campo-cidade.",
      "Desenvolver software interativo para apoio à tomada de decisão na governança fundiária cearense, integrando dados da malha fundiária com base cartográfica.",
    ],
  },
  {
    question:
      "Como o Projeto Cientista Chefe Terra contribui para os Objetivos de Desenvolvimento Sustentável (ODS)?",
    answer:
      "O Projeto Cientista Chefe Terra contribui diretamente para vários Objetivos de Desenvolvimento Sustentável da Agenda 2030 da ONU, especialmente: ",
    ulList: [
      "ODS 2 (Fome Zero e Agricultura Sustentável): Através da investigação da reprodução social em assentamentos estaduais e do desenvolvimento de novas cadeias produtivas.",
      "ODS 8 (Trabalho Decente e Crescimento Econômico): Promovendo o crescimento econômico inclusivo e sustentável em áreas rurais.",
      "ODS 13 (Ação Contra a Mudança Global do Clima): Por meio de estudos de governança agrária e ambiental em modelos de dupla afetação territorial.",
      "ODS 16 (Paz, Justiça e Instituições Eficazes): Desenvolvendo software de apoio à tomada de decisão para governança fundiária com base nas diretrizes do DVGT.",
      "ODS 17 (Parcerias e Meios de Implementação): Fortalecendo parcerias entre instituições governamentais, academia e comunidades para implementação de políticas públicas eficazes.",
    ],
  },
  {
    question:
      "O que é a Lei Wilson Brandão (Lei 17.533/21) e qual sua importância?",
    answer:
      "A Lei 17.533/21, conhecida como Lei Wilson Brandão, dispõe sobre a Política Estadual de Regularização Fundiária Rural do Ceará. Publicada em 2021, ela estabelece princípios, objetivos e estratégias para a formulação e implementação dessa política, proporcionando a realização de ações governamentais dirigidas ao processo de inclusão social no meio rural e ao acesso a políticas públicas de âmbito social, ambiental e econômico. A importância dessa lei está em fornecer um marco legal atualizado para a regularização fundiária no estado, facilitando o acesso à terra por parte de agricultores familiares e comunidades tradicionais, além de promover maior segurança jurídica e possibilitar o acesso a crédito rural, assistência técnica e outros benefícios para os produtores rurais.",
  },
  {
    question:
      "O que são assentamentos de reforma agrária e como eles funcionam no Ceará?",
    answer:
      "Assentamentos de reforma agrária são áreas de terra destinadas a famílias sem terra ou com pouca terra, visando a democratização da propriedade rural e o desenvolvimento da agricultura familiar. No Ceará, existem diferentes tipologias de assentamentos, como os Projetos de Assentamentos Estaduais (PNRA), áreas do Projeto São José – Ação Fundiária, áreas do programa Cédula da Terra, entre outros. Segundo dados do IDACE de 2023, o estado conta com 235 áreas de assentamento, beneficiando 3.730 famílias. Os assentamentos funcionam com base na posse coletiva e na partilha dos recursos naturais, exigindo instrumentos de gestão e acompanhamento. O IDACE é responsável pela criação, organização e acompanhamento desses assentamentos, trabalhando em parceria com prefeituras e outros órgãos para viabilizar o trabalho de regularização fundiária.",
  },
  {
    question:
      "O que é o software interativo que está sendo desenvolvido pelo projeto?",
    answer:
      "O software interativo em desenvolvimento pelo Projeto Cientista Chefe Terra é uma ferramenta tecnológica que integrará dados da malha fundiária do Ceará com base cartográfica. Projetado em parceria com a equipe técnica do IDACE e STI, este sistema permitirá visualizar e analisar informações georreferenciadas sobre a estrutura fundiária do estado. O objetivo é construir um instrumental acessível para pesquisa, elaboração de política pública e superação de conflitos, contribuindo para a garantia de direitos relacionados à terra e aos territórios, especialmente de comunidades tradicionais e originárias. O software utilizará parâmetros existentes nas Diretrizes Voluntárias para a Governança Responsável da Terra (DVGT) e será uma interface amigável para apoiar a tomada de decisão na governança fundiária cearense.",
  },
  {
    question:
      "Qual a relação entre regularização fundiária e proteção ambiental?",
    answer:
      "A regularização fundiária e a proteção ambiental são temas intrinsecamente relacionados, especialmente no contexto atual de crise climática. A governança fundiária responsável deve considerar não apenas aspectos sociais e econômicos, mas também ambientais, promovendo o uso sustentável dos recursos naturais. O Projeto Cientista Chefe Terra aborda essa relação através de estudos sobre governança fundiária versus desmatamento e proteção de serviços ecossistêmicos. A regularização fundiária, quando bem implementada, pode contribuir para a conservação ambiental ao definir claramente os direitos e responsabilidades dos proprietários de terra, facilitar o monitoramento do uso do solo, promover práticas agrícolas sustentáveis e reduzir conflitos por recursos naturais. Além disso, a segurança da posse da terra incentiva investimentos de longo prazo em práticas de conservação e recuperação ambiental.",
  },
  {
    question:
      "Como o projeto aborda a questão dos territórios indígenas no Ceará?",
    answer:
      "O Projeto Cientista Chefe Terra reconhece a importância dos territórios indígenas para a reprodução sociocultural desses povos e aborda essa questão de forma específica. O projeto trabalha em consonância com o acordo de cooperação técnica firmado entre o IDACE e a Fundação Nacional dos Povos Indígenas (FUNAI), que visa a futura demarcação de territórios indígenas no Ceará, incluindo os territórios Tremembé de Queimadas, Jenipapo-Kanindé, Pitaguary e Tapeba. O software interativo em desenvolvimento pelo projeto pretende incluir uma estratégia específica para a instrumentalização das Diretrizes Voluntárias para a Governança Responsável da Terra (DVGT) pelos povos indígenas, resultando em marcos apropriados para a atuação dos organismos multilaterais. O projeto também considera as particularidades culturais, sociais e históricas dos povos indígenas na elaboração de políticas de governança fundiária.",
  },
  {
    question:
      'O que significa "descaracterização" de assentamentos e por que isso é estudado no projeto?',
    answer:
      'A "descaracterização" de assentamentos refere-se a mudanças nas características originais dessas áreas, que podem incluir alterações no uso da terra, nas relações sociais, nas atividades produtivas ou na organização comunitária. No Projeto Cientista Chefe Terra, esse fenômeno é estudado para compreender as novas dinâmicas territoriais e relações campo-cidade que surgem nos assentamentos de reforma agrária do Ceará. O projeto investiga assentamentos com aparente processo de descaracterização para entender se essas mudanças representam problemas ou se, na verdade, estão apontando para novos elementos que precisam ser considerados na política fundiária, como questões de sucessão familiar e desenvolvimento de novas cadeias produtivas. Esse estudo é importante para adaptar as políticas públicas às realidades em transformação e garantir a sustentabilidade dos assentamentos a longo prazo.',
  },
  {
    question:
      "Quais são os principais desafios da governança fundiária no Ceará atualmente?",
    answer:
      "Os principais desafios da governança fundiária no Ceará atualmente incluem:",
    olList: [
      "Alto nível de informalidade na ocupação das terras, dificultando o acesso a políticas públicas e crédito rural.",
      "Disputas pela terra e conflitos por recursos naturais, especialmente em áreas de interesse de grandes empreendimentos.",
      "Gestão de bens coletivos em assentamentos e comunidades tradicionais.",
      "Necessidade de conciliar regularização fundiária com proteção ambiental no contexto da crise climática.",
      "Garantia dos direitos territoriais de povos indígenas e comunidades tradicionais.",
      "Adaptação às novas configurações sociais e produtivas nos assentamentos de reforma agrária.",
      "Desenvolvimento de sistemas de informação eficientes sobre a realidade fundiária.",
      "Implementação efetiva da Lei Wilson Brandão (Lei 17.533/21) e das Diretrizes Voluntárias para a Governança Responsável da Terra (DVGT).",
      "Integração entre diferentes órgãos e políticas públicas relacionadas à questão fundiária.",
      "Capacitação técnica e fortalecimento institucional para lidar com a complexidade da governança fundiária.",
    ],
  },
  {
    question: "O que é um Módulo Fiscal?",
    answer:
      "É uma unidade de medida agrária, definida pela Lei nº 6.746/1979, que representa a área mínima considerada economicamente viável para uma propriedade rural, conforme critérios do INCRA.",
  },
  {
    question: "O módulo fiscal é igual em todos os municípios?",
    answer:
      "Não. O valor do módulo fiscal varia de município para município, conforme definido pelo INCRA.",
  },
  {
    question:
      "Segundo a legislação atual do Brasil, como podem ser definidas as categorias  Pequena, Média e Grande Propriedades Rurais?",
    answer:
      "Segundo a Lei nº 8.629/1993, art. 4º, pequena propriedade rural é aquela com área de até 4 módulos fiscais; média propriedade é a que possui área superior a 4 até 15 módulos fiscais; e grande propriedade é a que excede 15 módulos fiscais, sendo o módulo fiscal definido conforme critérios do INCRA para cada município.",
  },
  {
    question: "O que define um assentamento?",
    answer:
      "Um assentamento é definido, segundo a legislação agrária brasileira, como uma área destinada pelo poder público para a implementação do Programa de Reforma Agrária, onde famílias são instaladas para desenvolver atividades agrícolas sob supervisão e apoio do INCRA, com o objetivo de promover a inclusão social, a regularização fundiária e o desenvolvimento sustentável no meio rural (Lei nº 8.629/1993, art. 2º; Decreto nº 9.311/2018).",
  },
];
