import Logomarca from "@/components/layout/logoMarca";
import Buttom from "@/components/ui/Buttoms/buttom";
import Card from "@/components/ui/Cards/card";
import GalleryEvent from "@/components/ui/GalleryEvents/galleryEvent";
import NumeredCards from "@/components/ui/NumeredCards/numeredCards";
import H1 from "@/components/ui/Titles/h1";
import H2 from "@/components/ui/Titles/h2";
import { getPathInsidelist } from "@/utils/imgHandle";

export default function Home() {
  const destaquesList = getPathInsidelist("public/Assets/HighlightAssets");
  const imgsDestaque = destaquesList.map((img) => ({
    path: `/Assets/HighlightAssets/${img}`,
    size: 800,
  }));

  return (
    <div className="mb-auto mx-3 lg:mx-12 mt-12">
      <div className=" justify-between lg:flex">
        <Logomarca />
        <div className="lg:w-[32.75rem] lg:mr-12 space-y-2">
          <H1> Quem somos ? </H1>
          <Card>
            <p className="text-justify text-base-dynamic">
              O Projeto Cientista Chefe Terra nasce da parceria entre o IDACE e
              pesquisadores das Instituições de Ensino Superior do Ceará. Somos
              uma equipe interdisciplinar comprometida com a Política Estadual
              de Regularização Fundiária Rural, trabalhando na construção de uma
              governança fundiária inovadora que integra questões ambientais e
              sociais. Atuamos alinhados às Diretrizes Voluntárias para a
              Governança Responsável da Terra e à Agenda 2030, buscando
              fortalecer a democratização da terra, garantir o acesso equitativo
              aos recursos naturais e contribuir para a erradicação da pobreza e
              da fome.
            </p>
          </Card>
          <div className="flex justify-end">
            <Buttom path="/sobre" texto={"Saiba mais"} className="mt-6" />
          </div>
        </div>
      </div>

      {/* Ações e resultados */}
      <div className="mb-10">
        <H2>Nossas Ações e Resultados</H2>
        <NumeredCards />
      </div>
      <div>
        <H2>Destaques do Projeto</H2>
        <GalleryEvent data={imgsDestaque} />

        <div className="flex justify-end">
          <Buttom path="/galeria" texto={"Ver a Galeria"} className="" />
        </div>
      </div>
    </div>
  );
}
