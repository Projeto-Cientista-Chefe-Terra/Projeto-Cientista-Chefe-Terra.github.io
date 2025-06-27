"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { MemberCard, MemberCardProps } from "./MemberCard";
import "swiper/css";
import styles from "./styles.module.css";
import { FreeMode } from "swiper/modules";
import H3 from "../../Titles/h3";


interface TeamCardsRowProps {
  groupName: string;
  jsonPeople?: MemberCardProps[];
}

export default function TeamCardsRow({
  groupName = "Coordenadoras",
  jsonPeople,
}: TeamCardsRowProps) {
  return (
    <div className="lg:mb-12">
      <H3>{groupName}</H3>
      {/* Pode ser interessante colocar um aulto moviment */}
      <div className="lg:mx-10">
        <Swiper
          className=""
          spaceBetween={16}
          navigation={false}
          slidesPerView={"auto"}
          mousewheel={false}
          freeMode={true}
          modules={[FreeMode]}
        >
          {jsonPeople ? (
            jsonPeople.map((member, i) => (
              <SwiperSlide className={`${styles.funciona} `} key={i}>
                <MemberCard
                  name={member.name}
                  linkLattes={member.linkLattes}
                  resume={member.resume}
                  roler={member.roler}
                  imgLink={member.imgLink}
                />
              </SwiperSlide>
            ))
          ) : (
            <>
              <SwiperSlide className={`${styles.funciona} `}>
                <MemberCard />
              </SwiperSlide>
              <SwiperSlide className={`${styles.funciona} `}>
                <MemberCard />
              </SwiperSlide>
              <SwiperSlide className={`${styles.funciona} `}>
                <MemberCard />
              </SwiperSlide>
              <SwiperSlide className={`${styles.funciona} `}>
                <MemberCard />
              </SwiperSlide>
              <SwiperSlide className={`${styles.funciona}`}>
                <MemberCard />
              </SwiperSlide>
              <SwiperSlide className={`${styles.funciona}`}>
                <MemberCard />
              </SwiperSlide>
              <SwiperSlide className={`${styles.funciona}`}>
                <MemberCard />
              </SwiperSlide>
            </>
          )}
        </Swiper>
        {/* Colocar aqui forma de fazer a rolagem horizontal */}
        {/* <div className="space-x-4 flex flex-row overflow-hidden w-10/12 justify-center">
          <MemberCard />
        <MemberCard />
        <MemberCard />
        </div> */}
      </div>
    </div>
  );
}
