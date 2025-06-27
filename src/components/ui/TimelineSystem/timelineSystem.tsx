"use client";
import { useState } from "react";
import ButtonFilter from "../Buttoms/buttonFilter";
import { paperProps, Timeline } from "./VerticalTimelinePapers/timeline";

interface TimelineSystemProps {
  articlesList: paperProps[];
}

export default function TimelineSystem({ articlesList }: TimelineSystemProps) {
  const [filteredList, setFilteredList] = useState(articlesList);

  const [selected, setSelected] = useState<number>(0);

  const enumTypes = [
    ["", ""],
    ["Tese", "Teses"],
    ["Dissertação", "Dissertações"],
    ["Monografia", "Monografias"],
    ["Artigo em Evento", "Artigos em Eventos"],
    ["Artigo em Jornal ou Revista", "Artigos em Jornal ou Revista"],
    ["Relatório Técnico", "Relatórios Técnicos"],
    ["Ensaio", "Ensaios"],
  ];

  function filterList(type: string | string[], selected: number, index:number) {
    if (!(selected === index)) {
      setFilteredList(
        articlesList.filter(
          (artigle) =>
            artigle.tipoArtigo == type || type.includes(artigle.tipoArtigo)
        )
      );
    } else {
      setFilteredList(articlesList);
    }
  }

  return (
    <>
      <div className="lg:my-5 flex lg:place-content-center items-center lg:h-[10dvh] gap-2 lg:justify-between row flex-wrap ">
        {enumTypes.map((type, index) => {
          return (
            <ButtonFilter
              key={index}
              onClick={() => {
                filterList(type[0], selected, index);
              }}
              texto={type[1]}
              selected={selected}
              setSelected={setSelected}
              index={index}
            />
          );
        })}
      </div>
      <div className="flex justify-start">
        <Timeline data={filteredList} />
      </div>
    </>
  );
}
