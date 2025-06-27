import Gallery from "@/components/ui/GalleryEvents/gallery";
import H2 from "@/components/ui/Titles/h2";
import PageTitle from "@/components/ui/Titles/pageTitle";
import { getPathInsidelist, processarArquivoTxt } from "@/utils/imgHandle";
import { eventInformation } from "@/utils/interfaces";
import { separeteTxtAndImages } from "@/utils/listUtils";
import path from "path";

// Add Formato baseado em como estão os arquivos atualmente
// ADD Accessibilidade do ALT na medida do possível

const eventosPrincipais = getPathInsidelist(
  path.join("public/Assets/GalleryAssets/")
);

function getInfoFromTXT(path: string | undefined): eventInformation {
  const conteudo = processarArquivoTxt(path ?? "Error");

  const linhas = conteudo.split("\n").filter((linha) => linha.trim() !== "");

  const titulo = linhas[0].trim();

  const dataLinha = linhas.find((linha) => linha.startsWith("Data: "));
  const data = dataLinha ? dataLinha.replace("Data: ", "").trim() : "";

  const participantesLinha = linhas.find((linha) =>
    linha.startsWith("Participantes: ")
  );
  const participantes = participantesLinha
    ? participantesLinha
        .replace("Participantes: ", "")
        .split(";")
        .map((nome) => nome.trim())
    : [];

  const descricaoLinha = linhas.find((linha) =>
    linha.startsWith("Descrição: ")
  );
  const descricao = descricaoLinha
    ? descricaoLinha.replace("Descrição: ", "").trim()
    : "";

  return {
    titulo,
    data,
    participantes,
    descricao,
    isRoot: false
  };
}

export default function Galeria() {
  return (
    <div className="mb-auto mt-7 mx-4 lg:mx-12 lg:mt-12">
      <PageTitle title="Galeria" />
      {eventosPrincipais.map((evento) => {
        const eventoPath = path.join(`public/Assets/GalleryAssets/${evento}`);
        const items = getPathInsidelist(eventoPath);
        const hasSubpastas = !items.some((item) => item.includes(".jpg"));

        return (
          <div key={evento}>
            {hasSubpastas ? <H2>{evento}</H2> : <></> }
            {(hasSubpastas ? items : [evento]).map((item) => {
              const imagesPath = hasSubpastas
                ? path.join(eventoPath, item)
                : eventoPath;

              const { txtFile, images } = separeteTxtAndImages(
                getPathInsidelist(imagesPath)
              );

              const txtInfo = getInfoFromTXT(
                path.join(imagesPath, txtFile ?? "ERROR")
              );
              
              if(!hasSubpastas){
                txtInfo.isRoot = true;
              }

              const data = images.map((img) => ({
                path: `/Assets/GalleryAssets/${evento}${
                  hasSubpastas ? `/${item}` : ""
                }/${img}`,
                size: 800,
              }));

              return <Gallery key={item} information={txtInfo} data={data} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
