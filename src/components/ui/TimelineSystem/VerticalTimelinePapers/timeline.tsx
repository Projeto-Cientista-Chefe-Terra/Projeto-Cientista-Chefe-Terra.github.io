import { Fragment } from "react";
import H2 from "../../Titles/h2";
import { Circle } from "./circle";
import { VerticalLine } from "./verticalLine";
import { PaperCard } from "./paperCard";
import Buttom from "../../Buttoms/buttom";
import Card from "../../Cards/card";

export interface paperProps {
  data: string;
  autores: string;
  nomeArtigo: string;
  tipoArtigo: string;
  descricaoArtigo: string;
  linkDownload: string;
}

interface Timelineprops {
  data?: paperProps[];
}

export const Timeline = ({ data }: Timelineprops) => {
  return (
    <div className=" overflow-hidden flex flex-row  flex-wrap gap-y-3 justify-start w-12/12 my-4">
      {data
        ? data.map(
            (
              {
                autores,
                data,
                linkDownload,
                descricaoArtigo,
                nomeArtigo,
                tipoArtigo,
              },
              i
            ) => {
              return (
                <Fragment key={i}>
                  <div className="group  relative lg:w-1/2 lg:min-w-[35rem]">
                    <div className="flex items-center  space-x-3 ">
                      <div className="justify-center lg:items-center lg:flex lg:space-x-3">

                      <span className="text-2xl font-bold ">
                        {data.slice(-4)}
                      </span>
                      <div className="flex justify-center ">
                        <Circle />
                        <VerticalLine />
                      </div>
                      </div>
                      <H2> {tipoArtigo} </H2>
                      {/* / Vai ser menor */}
                    </div>
                    <div>
                      <div className="lg:ml-[6rem] grid grid-cols-[0_auto_1fr] lg:gap-x-2 items-center ">
                        <div></div>

                        <PaperCard
                          autores={autores}
                          descricaoArtigo={descricaoArtigo}
                          nomeArtigo={nomeArtigo}
                          data={data}
                        />
                      </div>
                      <div className="flex justify-end ">
                        {/* Colocar Flecha apontando */}
                        <Buttom
                          path={linkDownload}
                          texto="Download"
                          className="w-fit px-3 z-10 mr-2  lg:invisible group-hover:visible   transition-opacity ease-in-out duration-300 lg:opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            }
          )
        : [1, 2].map((ele, i) => {
            return (
              <Fragment key={i}>
                <div className="group mb-10">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold">20XX</span>
                    <div className="flex justify-center">
                      <Circle />
                      <VerticalLine />
                    </div>
                    <H2> Publicações </H2>
                    {/* / Vai ser menor */}
                  </div>
                  <div>
                    <div className="ml-[6rem] grid grid-cols-[0_auto_1fr] gap-x-2 items-center ">
                      <div></div>

                      <Card className="transition duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-black     flex flex-col gap-y-2 shadow-md rounded-xl p-4">
                        <div className="text-black font-bold text-lg border-b border-darkBrown">
                          Nome do artigo
                        </div>
                        <div className="text-sm">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ad, nesciunt totam! Sit esseuasi. sit amet
                          consectetur adipisicing elit. Ad, nesciunt totam! Sit
                          esseuasi.
                        </div>
                        <div className="text-black  flex justify-between text-sm border-darkBrown">
                          <p className="italic">Nomes dos A...</p>
                          <div className="flex justify-end">
                            <span className="font-bold text-sm">
                              14 de Março de 2025
                            </span>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex justify-end ">
                      {/* Colocar Flecha apontando */}
                      <Buttom
                        path=""
                        texto="Download"
                        className="w-fit px-3 z-10 mr-2  invisible group-hover:visible  transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
    </div>
  );
};
