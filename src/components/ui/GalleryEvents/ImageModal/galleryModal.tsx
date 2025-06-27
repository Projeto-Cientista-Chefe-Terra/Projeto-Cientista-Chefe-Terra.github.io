import Image from "next/image";
import { galleryImgProps } from "../interfaces/interfaces";

interface galleryModalProps {
  modalData: galleryImgProps;
  isvisible: boolean;
  onClose: () => void;
}

export default function GalleryModal({
  modalData,
  isvisible,
  onClose,
}: galleryModalProps) {
  const { path, alt, size } =
    modalData;
  if (!isvisible) return null;

  return (
    <div className="fixed bg-black inset-0 z-50 bg-opacity-55 backdrop-blur-sm flex justify-center items-center">
      <div className="text-black lg:max-w-[100rem] ">
        <div
          className="text-white text-3xl-dynamic text-left ml-6 p-3 place-self-end hover:cursor-pointer"
          onClick={onClose}
        >
          X
        </div>
        {/* Imagem e descrioção */}
        <div className="bg-white flex flex-col lg:flex-row lg:space-x-4 p-3 mx-4 lg:mx-10">
          <div className="bg-darkBrown w-full flex justify-center place-items-center">
            <div className="place-items-center lg:max-h-[80dvh]">
              <Image
                style={{ objectFit: "contain", overflow: "hidden" }}
                src={path}
                alt={alt ?? ""}
                height={size}
                width={size}
                className="lg:max-h-[80dvh]  h-full w-full"
              />
            </div>
          </div>
          {/* <div className=" lg:w-5/12 bg-darkBrown p-5 text-white text-base-dynamic flex flex-col justify-between">
            <div className="leading-6">
              <p className="text-lg-dynamic">
                <strong> Local:</strong> {local ? local : "Não informado."}
              </p>
              <p className="text-lg-dynamic">
                <strong> Pessoas:</strong>
                {pessoas ? pessoas : "Não informado."}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-justify text-base-dynamic">
                {description ? description : "Não informado."}
              </p>
              <p className="underline font-bold text-right text-base-dynamic">
                <a href={link ? link : "#"}> Link da Publicação</a>
              </p>
            </div>
            <div className="flex space-x-3 place-items-center">
              <div className="z-10 rounded-full w-12 h-12 ml-0 bg-gray-500 group-hover:bg-gray-50 "></div>
              <div>
                <p className="text-lg-dynamic">
                  <strong> Tirado/Gravado por:</strong>{" "}
                  {author ? author : "Não informado."}
                </p>
                <p className="text-lg-dynamic">
                  <strong> data:</strong> {date ? date : "Não informado."}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
