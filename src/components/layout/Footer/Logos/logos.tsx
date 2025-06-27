"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import Logo from "./logo";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { sliceList } from "@/utils/listUtils";

// TODO Colocar informações de parceiros presentes no sheets

export default function Logos() {
  const logoData = [
    {
      path: "/Icons/funcap.png",
      institu: "Fundação Cearense de Desenvolvimento Científico e Tecnológico",
      sigla: "FUNCAP",
      desc: "Fundação que fomenta a pesquisa científica, tecnológica e a formação de recursos humanos no Ceará.",
      link: "https://www.funcap.ce.gov.br/",
    },
    {
      path: "/Icons/Idace.png",
      institu: "Instituto do Desenvolvimento Agrário do Ceará",
      sigla: "IDACE",
      desc: "Autarquia que executa a política agrária do Ceará, promovendo assentamentos e regularização fundiária.",
      link: "https://www.idace.ce.gov.br/",
    },
    {
      path: "/Icons/ufc_logo.png",
      institu: "Universidade Federal do Ceará",
      sigla: "UFC",
      desc: "Universidade pública que atua com excelência em ensino, pesquisa e extensão, impulsionando o desenvolvimento sustentável.",
      link: "https://www.ufc.br/",
    },
    {
      path: "/Icons/CCMA.png",
      institu: "Cientista Chefe Meio Ambiente",
      sigla: "",
      desc: "Atua na formulação de políticas de inovação e apoio à gestão ambiental no Ceará.",
      link: "https://www.instagram.com/cientistachefemeioambiente/?hl=pt-br",
    },
    {
      path: "/Icons/CCCIIS.png",
      institu: "Cientista Chefe da Cultura",
      sigla: "",
      desc: "Defende a cultura como um direito fundamental e como construção coletiva de grupos historicamente excluídos.",
      link: "https://www.instagram.com/cientistachefedacultura/?hl=pt-br",
    },
    {
      path: "/Icons/CCA.png",
      institu: "Cientista Chefe Agricultura",
      sigla: "",
      desc: "Promove soluções sustentáveis para o uso da água e a modernização da produção agropecuária.",
      link: "https://www.instagram.com/cientistachefeagricultura/?hl=pt-br",
    },
    {
      path: "/Icons/CCRH.png",
      institu: "Cientista Chefe Recursos Hídricos",
      sigla: "",
      desc: "Garante água de qualidade e quantidade, prevenindo secas e cheias para o desenvolvimento sustentável.",
      link: "https://www.instagram.com/aguacientistachefe/?hl=pt-br",
    },
    {
      path: "/Icons/CCIC.png",
      institu: "Cientista Chefe Infraestrutura Costeira",
      sigla: "",
      desc: "Planeja obras no litoral com foco em sustentabilidade e adaptação às mudanças climáticas.",
      link: "https://www.instagram.com/cientistachefe.infracosteira/?hl=pt-br",
    },
    {
      path: "/Icons/SDA.png",
      institu: "Secretaria do Desenvolvimento Agrário",
      sigla: "SDA",
      desc: "Coordena políticas públicas para o desenvolvimento agropecuário, com foco na agricultura familiar.",
      link: "https://www.sda.ce.gov.br/",
    },
    {
      path: "/Icons/SMAMC.png",
      institu: "Secretaria do Meio Ambiente e Mudança do Clima",
      sigla: "SEMA",
      desc: "Planeja e executa ações ambientais, gerindo Unidades de Conservação e promovendo educação ambiental.",
      link: "https://www.sema.ce.gov.br/",
    },
    {
      path: "/Icons/SRH.png",
      institu: "Secretaria de Recursos Hídricos do Ceará",
      sigla: "SRH",
      desc: "Gerencia os recursos hídricos do Ceará, articulando ações integradas para seu uso sustentável.",
      link: "https://www.srh.ce.gov.br/",
    },
    {
      path: "/Icons/SPI.png",
      institu: "Secretaria Dos Povos Indígenas",
      sigla: "SEPINCE",
      desc: "Formula políticas de proteção aos povos indígenas e seus territórios, assegurando sua cultura e autonomia.",
      link: "https://www.povosindigenas.ce.gov.br/",
    },
    {
      path: "/Icons/SECULT.png",
      institu: "Secretaria da Cultura do Ceará",
      sigla: "SECULT",
      desc: "Garante o acesso à cultura como direito fundamental da população cearense.",
      link: "https://www.secult.ce.gov.br/",
    },
    {
      path: "/Icons/SEJUV.png",
      institu: "Secretaria da Juventude do Ceará",
      sigla: "SEJUV",
      desc: "Desenvolve políticas públicas com foco nas juventudes da periferia, do interior e de grupos marginalizados.",
      link: "https://www.juventude.ce.gov.br/",
    },
    {
      path: "/Icons/SEDIH.png",
      institu: "Secretaria dos Direitos Humanos",
      sigla: "SEDIH",
      desc: "Promove a igualdade, a liberdade e a dignidade por meio de políticas afirmativas e inclusivas.",
      link: "https://www.direitoshumanos.ce.gov.br/",
    },
    {
      path: "/Icons/SEIR.png",
      institu: "Secretaria da Igualdade Racial",
      sigla: "SEIR",
      desc: "Implementa ações para enfrentar o racismo e promover a inclusão socioeconômica de grupos racializados.",
      link: "https://www.igualdaderacial.ce.gov.br/",
    },
  ];

  // TODO Fazer todas as logos ficarem com sensações de tamanho parecidas
  const showLogos = () => {
    const listLogos = logoData.map(({ path, link, sigla, institu, desc }) => (
      <Logo
        path={`${path}`}
        link={`${link}`}
        size={500}
        sigla={sigla}
        institu={institu}
        key={path}
        desc={desc}
      />
    ));
    return listLogos;
  };

  const logos = sliceList(showLogos(), 5);

  return (
    <Swiper
      className="flex w-full mb-4"
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 1300, // Remove o delay entre os slides
        disableOnInteraction: false, // Continua o autoplay após interação do usuário
        pauseOnMouseEnter: true, // Não pausa ao passar o mouse
      }}
      speed={3000} // Velocidade da transição (em milissegundos)
      loop={true} // Ativa o loop infinito
      freeMode={true}
      modules={[FreeMode, Autoplay]}
    >
      {logos.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="flex w-full flex-wrap justify-center">
              {item.map((logo, j) => {
                return (
                  <div key={j} className=" w-30">
                    {logo}
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
