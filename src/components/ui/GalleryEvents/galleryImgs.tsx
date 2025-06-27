import Image from "next/image";
import { galleryImgProps } from "./interfaces/interfaces";
import {
  colSpanClasses,
  colStartClasses,
  GridKey,
  rowSpanClasses,
  rowStartClasses,
} from "@/utils/GridClasses/gridClasses";

interface galleryImgsProps {
  data: galleryImgProps[];
  onClick: (modalData: galleryImgProps) => void;
}

type LayoutItem = {
  colSpan: number;
  rowSpan: number;
  colStart: number;
  rowStart: number;
  objectFit: "cover" | "contain" | "none" | "fill" | "scale-down"; // Tipagem explícita
};

const layout6: LayoutItem[] = [
  { colSpan: 2, rowSpan: 3, colStart: 1, rowStart: 1, objectFit: "cover" },
  { colSpan: 4, rowSpan: 6, colStart: 3, rowStart: 1, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 1, rowStart: 4, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 1, rowStart: 7, objectFit: "cover" },
  { colSpan: 7, rowSpan: 3, colStart: 3, rowStart: 7, objectFit: "cover" },
  { colSpan: 3, rowSpan: 6, colStart: 7, rowStart: 1, objectFit: "cover" },
];

const layout234: LayoutItem[] = [
  { colSpan: 6, rowSpan: 9, colStart: 0, rowStart: 0, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 7, rowStart: 0, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 7, rowStart: 0, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 7, rowStart: 0, objectFit: "cover" },
];

const layout5: LayoutItem[] = [
  { colSpan: 6, rowSpan: 4, colStart: 1, rowStart: 1, objectFit: "cover" },
  { colSpan: 6, rowSpan: 5, colStart: 1, rowStart: 5, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 7, rowStart: 1, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 7, rowStart: 4, objectFit: "cover" },
  { colSpan: 2, rowSpan: 3, colStart: 7, rowStart: 7, objectFit: "cover" },
];

export default function GalleryImgs({ data, onClick }: galleryImgsProps) {
  let currentLayout = layout6;

  function setGridLayout() {
    if (data.length == 5) {
      currentLayout = layout5;
    }

    if (data.length < 5 && data.length >= 1) {
      currentLayout = layout234;

      if (data.length == 5) {
        currentLayout[4].colSpan = 3;
      }

      if (data.length == 4) {
        currentLayout[0].colSpan = 6;
        currentLayout[1].rowSpan = 3;
        currentLayout[2].rowSpan = 3;
      }
      if (data.length == 3) {
        currentLayout[0].colSpan = 6;
        currentLayout[1].rowSpan = 5;
        currentLayout[2].rowSpan = 4;
      }
      if (data.length == 2) {
        currentLayout[0].rowSpan = 9;
        currentLayout[0].colSpan = 6;
        currentLayout[1].rowSpan = 9;
      }

      if (data.length == 1) {
        currentLayout[0].colSpan = 8;
      }
    }
  }

  return (
    <div className="w-full h-[36rem] px-4 items-center lg:justify-center flex">
      <div className="flex flex-wrap flex-row justify-between lg:grid lg:grid-cols-8 lg:grid-rows-9 gap-2 lg:w-full  lg:h-full">
        {data.map((item, index) => {
          setGridLayout();

          const { colSpan, rowSpan, colStart, rowStart, objectFit } =
            currentLayout[index];
          return (
            <div
              key={index}
              className={`${colSpanClasses[colSpan as GridKey]} ${
                rowSpanClasses[rowSpan as GridKey]
              } ${colStartClasses[colStart as GridKey]} ${
                rowStartClasses[rowStart as GridKey]
              } bg-black rounded-2xl box-shadow overflow-hidden h-40 w-32 lg:w-full lg:h-full`}
            >
              <Image
                style={{
                  objectFit: objectFit,
                  overflow: "hidden",
                }}
                src={item.path}
                alt={item.alt ?? ""}
                height={item.size}
                width={item.size}
                className="hover/edit:opacity-55 h-full lg:w-full hover:cursor-pointer"
                onClick={() => onClick(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
