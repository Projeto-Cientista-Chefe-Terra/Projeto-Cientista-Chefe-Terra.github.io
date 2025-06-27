import TeamCardsRow from "@/components/ui/Cards/TeamCardsRow/teamCardsRow";
import PageTitle from "@/components/ui/Titles/pageTitle";

export default function Equipe() {
  return (
    <div className="mb-auto mx-4 mt-7  lg:mx-12 lg:mt-12">
      <PageTitle title="Equipe" />

      {/* linhas de menbros */}
      <TeamCardsRow
        groupName="Coordenadoras"
        jsonPeople={[
          {
            name: "Maria Inês Escobar da Costa",
            roler: "Coordenação Geral da Pesquisa",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4750638J7",
            resume:
              "Graduada em Agronomia pela Universidade Federal de Viçosa, Mestra em Política Pública e Meio Ambiente pela UnB e Doutora em Educação pela USP.",
            linkLattes: "http://lattes.cnpq.br/2359052636977383",
          },
          {
            name: "Christine Farias Coelho",
            roler:
              "Coordenação de campo e de interface de plataformas de dados",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4442401T9",
            resume:
              "Cientista Ambiental pela UFPE, Mestra em Desenvolvimento e Meio Ambiente pela UFC e Doutora em Engª Agrícola pela UFC.",
            linkLattes: "http://lattes.cnpq.br/1472233199190560",
          },
          {
            name: "Kelly Maria Gomes Menezes",
            roler: "Coordenação das pesquisas qualitativas",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4745219J6",
            resume:
              "Doutora e Mestra em Administração e Controladoria pela UFC , Especialista Gestão Pública pela UECE.",
            linkLattes: "http://lattes.cnpq.br/5768872699906558",
          },
          {
            name: "Maria de Nazaré Moraes Soares",
            roler: "Coordenação de análise de dados quantitativos",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4407536H4",
            resume:
              "Doutora e Mestra em Administração e Controladoria pela UFC , Especialista Gestão Pública pela UECE.",
            linkLattes: "http://lattes.cnpq.br/3073541276192824",
          },
        ]}
      />
      <TeamCardsRow
        groupName="Pesquisadores"
        jsonPeople={[
          {
            name: "Juliana Azevedo da Silva",
            roler: "Pesquisadora voluntária",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2562795E3",
            resume:
              "Graduada em Economia Ecológica (UFC), mestranda em Desenvolvimento e Meio Ambinete (UFC)",
            linkLattes: "http://lattes.cnpq.br/7266072421228618",
          },
          {
            name: "Weldes Santos Alexandre",
            roler: "Pesquisador voluntária",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8563893Y9",
            resume:
              "Weldes Santos Alexandre é graduado em Agronomia pela Universidade Federal do Cariri (UFCA) e atualmente cursa mestrado em Desenvolvimento e Meio Ambiente na Universidade Federal do Ceará (UFC).",
            linkLattes: "http://lattes.cnpq.br/1967666536541863",
          },
        ]}
      />
      <TeamCardsRow
        groupName="Especialistas"
        jsonPeople={[
          {
            name: "Érika Roanna da Silva",
            roler: "Especialista em SIG e elaboração de mapas",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8644580P2",
            resume:
              "Mestra em Engenharia Agrícola, com graduação em Economia Ecológica e se especializando em Geoprocessamento para recursos hídricos.",
            linkLattes: "http://lattes.cnpq.br/1221207746147800",
          },
          {
            name: "Wellington Wagner Ferreira Sarmento",
            roler:
              "Especialista em machine learning e projetista de software de apoio à tomada de decisão em governança",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4790501Z2",
            resume:
              "Mestre em Eng. de Teleinformática e doutorando em Eng. Elétrica (UFC).",
            linkLattes: "http://lattes.cnpq.br/1015561507843037",
          },
        ]}
      />
      <TeamCardsRow
        groupName="Bolsistas"
        jsonPeople={[
          {
            name: "André Domingues",
            roler: "Bolsista do time de Desenvolvimento",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K1534216J4",
            resume: "Graduando em Sistemas e Mídias Digitais (UFC)",
            linkLattes: "http://lattes.cnpq.br/2410740190230098",
          },

          {
            name: "Bárbara Sheyla Pereira Lima Moreira",
            roler: "Bolsista",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2134496U3",
            resume:
              "Mestra em Engenharia Agrícola, com graduação em Economia Ecológica e se especializando em Geoprocessamento para recursos hídricos.",
            linkLattes: "http://lattes.cnpq.br/7595375305413599",
          },
          {
            name: "Bruno Silva Pereira ",
            roler: "Bolsista",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4463304U4",
            resume:
              "Engenheiro Sanitarista e Ambiental pelo IFCR Campus Maracanaú, Mestre em Tecnologia e Gestão Ambiental pelo IFCE Campus Fortaleza e Doutorado em Engenharia Agrícola pela UFC. ",
            linkLattes: "http://lattes.cnpq.br/7052032053133307",
          },
          {
            name: "Fernando Alexandre de Sousa Abreu",
            roler: "Bolsista PIBIC",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K1702676D3",
            resume: "Graduando em Economia Ecológica (UFC)",
            linkLattes: "http://lattes.cnpq.br/5876082275432472",
          },

          {
            name: "Wesley Barbosa",
            roler: "Bolsista de ...",
            imgLink:
              "https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K1797030H6",
            resume: "Graduando em Sistemas e Mídias Digitais (UFC)",
            linkLattes: "http://lattes.cnpq.br/2798355782409582",
          },
        ]}
      />
    </div>
  );
}
