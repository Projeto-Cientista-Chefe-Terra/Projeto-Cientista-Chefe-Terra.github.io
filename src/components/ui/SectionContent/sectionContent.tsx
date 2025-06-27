import { sectionContents, SectionModel } from "@/data/sectionIds";
import H3 from "../Titles/h3";
import PSection from "./pSection";
import H4 from "../Titles/h4";

interface SectionContentProps {
  className?: string;
}

export default function SectionContent({ className }: SectionContentProps) {
  const renderText = (texts?: string[]) => {
    if (!texts) {
      return;
    }

    const formatedtexts = (
      <>
        {texts.map((text_splited, i) => {
          if (text_splited == "/table1") {
            return (
              <div key={i} className="overflow-auto">
                <h3 className="text-center mb-2">
                  Tabela 1 - Quantidade de Assentamentos/Imóveis e de Famílias
                  por Tipologia
                </h3>
                <table className="w-full  table-auto rounded-sm border">
                  <thead>
                    <tr>
                      <th scope="col">
                        <strong>Tipologia</strong>
                      </th>
                      <th scope="col">
                        <strong>Quantidade de Assentamentos/Imóveis</strong>
                      </th>
                      <th scope="col">
                        <strong>Quantidade de Famílias</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Projeto São José – Ação Fundiária (PNCF)</td>
                      <td>44</td>
                      <td>497</td>
                    </tr>
                    <tr>
                      <td>Cédula da Terra (PNCF)</td>
                      <td>114</td>
                      <td>1.513</td>
                    </tr>
                    <tr>
                      <td>Projetos de Assentamentos Estaduais (PNRA)</td>
                      <td>40</td>
                      <td>692</td>
                    </tr>
                    <tr>
                      <td>Áreas em processo de Reconhecimento</td>
                      <td>19</td>
                      <td>433</td>
                    </tr>
                    <tr>
                      <td>Projeto Uruanan Área Reformada do Pirangi</td>
                      <td>18 grupos</td>
                      <td>595</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>TOTAL</strong>
                      </td>
                      <td>
                        <strong>235 áreas</strong>
                      </td>
                      <td>
                        <strong>3730 famílias</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <span className="text-center block m-2">
                  Fonte: IDACE, 2023.
                </span>
              </div>
            );
          }

          return (
            <PSection key={i}>
              {text_splited}
            </PSection>
          );
        })}
      </>
    );

    return formatedtexts;
  };

  const renderSection = (
    section: SectionModel,
    key: number,
    extraClassName?: string
  ) => {
    let renderedSection = <div></div>;

    renderedSection = (
      <div className={extraClassName} key={section.id + key}>
        <H3 id={section.id}>{section.label}</H3>
        {renderText(section.texts)}
        {section.subSections?.map((subsection) =>
          renderSubSection(subsection, key)
        )}
      </div>
    );

    return renderedSection;
  };

  const renderSubSection = (subsection: SectionModel, key: number) => {
    let renderedSubSection = <div></div>;
    renderedSubSection = (
      <div className="ps-4" key={subsection.id + key}>
        <H4 className="text-2xl-dynamic" id={subsection.id}>{subsection.label}</H4>
        <PSection>{subsection!.texts}</PSection>
        {/* <p className="indent-8 bg-black"></p> */}

        {subsection.subSections?.map((subsection) =>
          renderSubSection(subsection, key)
        )}
      </div>
    );

    return renderedSubSection;
  };

  return (
    <div className={`${className}`}>
      <nav>
        
          {sectionContents.map((section, i) => {
            return renderSection(section, i);
          })}
        
      </nav>
    </div>
  );
}
