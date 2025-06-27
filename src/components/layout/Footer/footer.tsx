import SliderPartners from "./sliderPartners/sliderPartners";
import Image from "next/image";
import ScrollUpBTN from "./scroolToUpBtn";
import NavigatorBar from "./NavigatorBar/navigatoBar";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import CopyButton from "./copyButton";

const iconSize = 30;

export default function Footer() {
  return (
    <footer className="">
      <SliderPartners />
      <div className=" flex flex-col ">
        <div className="h-6 "></div>
        <div className="bg-cor6b pt-2 flex-grow flex-col justify-center text-black">
          <div className=" space-y-3 lg:mx-24">
            <div className=" p-2 flex justify-between items-center">
              <Image
                src={"/Icons/CC_Terra.png"}
                alt=""
                width={90}
                height={90}
              />
              <ScrollUpBTN />
            </div>
            <hr className="border-gray-500" />
            <NavigatorBar />
            <hr className="border-gray-500" />
            <div className="p-2 flex flex-col lg:flex-row justify-center ">
              <div className="flex flex-wrap justify-center gap-x-3 lg:gap-0 lg:justify-between lg:w-2/6 items-center">
                <div className="flex w-full lg:w-fit justify-center">

                <p className="uppercase font-bold text-base-dynamic">
                  Nossas redes:
                </p>
                </div>
                <a
                  href={"https://www.instagram.com/cientistachefe.terra/"}
                  target="_blank"
                >
                  <FaInstagram
                    size={iconSize}
                    aria-label="Ir para o Instagram do projeto"
                    role="img"
                  />
                </a>
                {/* TODO: Adicionar Likedin caso necessário */}
                <a href={""} target="_blank">
                  <FaLinkedin
                    size={iconSize}
                    aria-label="Ir para o Linkedin do projeto"
                    role="img"
                  />
                </a>
                {/* TODO: Adicionar ação de mandar email to: cientistachefe.terra@ufc.br */}
                <a href={"mailto:cientistachefe.terra@ufc.br"} target="_blank">
                  <Image
                    alt="Mandar email para o projeto"
                    src={"/Icons/Gmail-Logo.wine.svg"}
                    width={iconSize + 10}
                    height={iconSize + 10}
                  />
                </a>
                <a href={""} target="_blank">
                  <FaGithub
                    size={iconSize}
                    aria-label="Ir para o Github do projeto"
                    role="img"
                  />
                </a>
              </div>
              <div className="flex justify-center flex-grow mt-5 lg:mt-0">
                <div className="flex items-center space-x-3">
                  <div className="flex mr-1">
                    <p className="text-center ">
                      <IoShareSocialOutline size={25} />
                    </p>
                    <span className="uppercase font-bold text-base-dynamic">
                      Compartilhe:
                    </span>
                  </div>

                  <CopyButton text="teste" />
                  <FiMail size={28} />
                </div>
              </div>
            </div>
            <hr className="border-gray-500 pb-2" />
          </div>
        </div>
        <div className="bg-darkBrown h-5"></div>
      </div>
    </footer>
  );
}
