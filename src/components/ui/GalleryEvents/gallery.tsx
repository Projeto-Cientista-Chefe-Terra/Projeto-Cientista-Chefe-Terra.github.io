import { eventInformation } from "@/utils/interfaces";
import H3 from "../Titles/h3";
import GalleryEvent from "./galleryEvent";
import { galleryImgProps } from "./interfaces/interfaces";
import H2 from "../Titles/h2";
export default function Gallery({
  information,
  data,
}: {
  information: eventInformation;
  data: galleryImgProps[];
}) {
  return (
    <>
      {information.isRoot ? (
        <H2>{information.titulo}</H2>
      ) : (
        <H3 className="mt-4">{information.titulo}</H3>
      )}
      <section className=" text-left my-1 mx-14">
        <p className=" pb-4 text-2xl-dynamic text-justify">
          {information.descricao}
        </p>
        <p className="text-lg-dynamic text-right italic">
          Participantes:{" "}
          {information.participantes.length < 3
            ? information.participantes.join(" e ")
            : `${information.participantes.slice(0, -1).join(", ")} e ${
                information.participantes[information.participantes.length - 1]
              }`}
        </p>
        <p className="text-lg-dynamic font-bold text-right">
          Data: {information.data}
        </p>
      </section>
      <GalleryEvent data={data} />
    </>
  );
}
