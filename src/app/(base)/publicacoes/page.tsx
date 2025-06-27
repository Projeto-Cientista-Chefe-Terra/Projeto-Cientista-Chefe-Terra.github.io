import PageTitle from "@/components/ui/Titles/pageTitle";
import TimelineSystem from "@/components/ui/TimelineSystem/timelineSystem";
import { paperProps } from "@/components/ui/TimelineSystem/VerticalTimelinePapers/timeline";

// const listaPlaceholder1 = [
//   {
//     data: "14 de Março de 2025",
//     autores: "João Silva, Maria Oliveira",
//     nomeArtigo: "Inteligência Artificial e Seu Impacto na Sociedade",
//     tipoArtigo: "Relatório Técnico",
//     descricaoArtigo:
//       "Este artigo explora os avanços da IA e seus efeitos na sociedade moderna.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Carlos Mendes, Ana Souza",
//     nomeArtigo: "Energias Renováveis: O Futuro Sustentável",
//     tipoArtigo: "Relatório Técnico",
//     descricaoArtigo:
//       "Uma análise detalhada das tendências e desafios das energias renováveis.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Pedro Alves",
//     nomeArtigo: "Blockchain e Segurança de Dados",
//     tipoArtigo: "Tese",
//     descricaoArtigo:
//       "Discute a aplicação da tecnologia blockchain na segurança de dados.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Fernanda Costa, Ricardo Lima",
//     nomeArtigo: "Educação a Distância no Brasil: Desafios e Oportunidades",
//     tipoArtigo: "Dissertação",
//     descricaoArtigo:
//       "Aborda os desafios e oportunidades da EAD no contexto brasileiro.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Luciana Gomes",
//     nomeArtigo: "Mudanças Climáticas e Agricultura",
//     tipoArtigo: "Tese",
//     descricaoArtigo:
//       "Analisa os impactos das mudanças climáticas na agricultura global.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Roberto Santos, Clara Ribeiro",
//     nomeArtigo: "Tecnologias Emergentes na Medicina",
//     tipoArtigo: "Artigo em Revista",
//     descricaoArtigo:
//       "Explora as tecnologias emergentes e seu impacto na medicina moderna.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Mariana Costa, Felipe Almeida",
//     nomeArtigo: "A Importância da Filosofia na Ciência",
//     tipoArtigo: "Ensaio",
//     descricaoArtigo:
//       "Reflexões sobre a relação entre filosofia e ciência ao longo da história.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Gabriel Pereira, Sofia Martins",
//     nomeArtigo: "Desenvolvimento Sustentável em Áreas Urbanas",
//     tipoArtigo: "Monografia",
//     descricaoArtigo:
//       "Estudo sobre práticas de desenvolvimento sustentável em cidades.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Rafaela Souza, Bruno Lima",
//     nomeArtigo: "Aplicações de IoT na Indústria 4.0",
//     tipoArtigo: "Artigo em Evento",
//     descricaoArtigo:
//       "Aborda as aplicações da Internet das Coisas na quarta revolução industrial.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Lucas Oliveira, Camila Santos",
//     nomeArtigo: "Impacto da Pandemia na Educação",
//     tipoArtigo: "Artigo em Jornal",
//     descricaoArtigo:
//       "Análise dos efeitos da pandemia no sistema educacional global.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Isabela Fernandes, Gustavo Costa",
//     nomeArtigo: "Tendências em Marketing Digital",
//     tipoArtigo: "Relatório Técnico",
//     descricaoArtigo:
//       "Explora as tendências atuais e futuras no marketing digital.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Daniela Almeida, Thiago Ribeiro",
//     nomeArtigo: "A Evolução da Computação Quântica",
//     tipoArtigo: "Tese",
//     descricaoArtigo:
//       "Estudo sobre os avanços e desafios da computação quântica.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Patrícia Lima, Rodrigo Martins",
//     nomeArtigo: "Gestão de Resíduos Sólidos em Grandes Cidades",
//     tipoArtigo: "Dissertação",
//     descricaoArtigo:
//       "Aborda estratégias eficientes para a gestão de resíduos sólidos urbanos.",
//     linkDownload: "#",
//   },
//   {
//     data: "14 de Março de 2025",
//     autores: "Amanda Costa, Vinícius Oliveira",
//     nomeArtigo: "A Influência da Arte na Sociedade Contemporânea",
//     tipoArtigo: "Ensaio",
//     descricaoArtigo:
//       "Reflexões sobre o papel da arte na formação da sociedade moderna.",
//     linkDownload: "#",
//   },
// ];
const listaPlaceholder: paperProps[] = []


export default function Publicacoes() {
  return (
    <div className="mb-auto mt-7 mx-4 lg:mx-12 lg:mt-12">
      <div className="lg:flex justify-between items-start">
        <PageTitle title="Publicações" />

        {/* <div className="lg:w-[32.75rem] lg:mr-12 mb-8 space-y-2">
        <H2> O que são? </H2>
        <Card>
          <p className="text-justify text-base-dynamic ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            delectus reiciendis voluptatum ipsa earum harum modi quas suscipit
            exercitationem, est eos tenetur nostrum aliquam ad! Ullam, minima
            reiciendis. Quasi, ipsa? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti delectus reiciendis voluptatum ipsa earum
            harum modi quas suscipit exercitationem, est eos tenetur nostrum
            aliquam ad! Ullam, minima reiciendis. Quasi, ipsa?sit amet
            consectetur adipisicing elit. Corrupti delectus reiciendis
            voluptatum ipsa earum harum modi quas suscipit exercitationem, est
            eos tenetur nostrum aliquam ad! Ullam, minima reiciendis. Quasi,
          </p>
        </Card>
      </div> */}
      </div>

      {/* <TimelineSystem articlesList={listaPlaceholder} /> */}
      <TimelineSystem articlesList={listaPlaceholder} />
      {<div className="text-center text-xl-dynamic place-content-center mb-6 font-bold">Publicações em breve...</div>}
    </div>
  );
}
