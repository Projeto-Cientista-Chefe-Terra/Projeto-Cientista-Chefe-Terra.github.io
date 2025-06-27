"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import GalleryImgs from "./galleryImgs";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useCallback, useEffect, useRef, useState } from "react";
import GalleryModal from "./ImageModal/galleryModal";
import { galleryImgProps } from "./interfaces/interfaces";
import GalleryButtom from "../Buttoms/galleryButtom";
import { sliceList } from "@/utils/listUtils";

export default function GalleryEvent({ data }: { data: galleryImgProps[] }) {
  const swiperRef = useRef<SwiperClass>(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.slideNext();
  }, [swiperRef]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [modalData, setModalData] = useState<galleryImgProps>({
    path: "/Assets/cat_teste.jpg",
    alt: "",
    size: 800,
    description: "",
  });

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [width, setWidth] = useState<number>(0);

  const openModal = (modData: galleryImgProps) => {
    // Nó futuro usar o indice da foto para abrir ela
    setModalData(modData);
    setShowModal(true);
  };

  const sliceData = sliceList(data, 6);
  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false); // Fecha o modal
      }
    };
    
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-12">
      <GalleryModal
        modalData={modalData}
        isvisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
      

      {width < 640 ? <div></div> : <div></div>}
      <div className="bg-cor6b rounded-2xl flex flex-row items-center justify-center lg:mx-14 px-2 space-x-1 p-1 lg:py-7 box-shadow ">
        <GalleryButtom
          ariaText="Voltar Imagens"
          text="<"
          maxIndex={sliceData.length - 1}
          currentIndex={swiperIndex}
          onclick={prevSlide}
        />
        <Swiper
          className="block w-full"
          slidesPerView={1}
          navigation
          pagination={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setSwiperIndex(swiper.activeIndex);
          }}
          modules={[Navigation, Pagination]}
        >
          {sliceData.map((slicedData, index) => {
            return (
              <SwiperSlide key={index}>
                <GalleryImgs
                  data={slicedData}
                  onClick={(modData) => {
                    openModal(modData);
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <GalleryButtom
          ariaText="Avançar Imagens"
          text=">"
          maxIndex={sliceData.length - 1}
          currentIndex={swiperIndex}
          onclick={nextSlide}
        />
      </div>
    </div>
  );
}
