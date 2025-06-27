"use client";

import Card from "@/components/ui/Cards/card";
import PageTitle from "@/components/ui/Titles/pageTitle";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
// TODO Desenvolver a lógica de mandar emails
// * Depois conferir se não dá problema o Use CLiente nesse local talvez funcione se fosse dentro do componenete do botão de enviar o email

const sendEmail = () => {
  console.log("mandando E-mail. (Em desenvolvimento)");
};

const iconSize = 80;

export default function Contato() {
  return (
    <div className="mb-auto mx-4 mt-7  lg:mx-12 lg:mt-12">
      <PageTitle title="Fale Conosco" />
      <div className="flex justify-center">
        <Card className="lg:w-11/12 space-y-5 mt-4">
          <div>
            <label
              className="text-black text-lg-dynamic font-bold"
              htmlFor="messageinput"
              aria-label="Mensagem"
            >
              Mensagem:
            </label>
            <textarea
              id="messageinput"
              className="bg-transparent border w-full h-[15rem]  pl-5 text-black placeholder:text-black placeholder:align-top pt-5 text-xl-dynamic"
              placeholder="Escreva sua mensagem aqui..."
              required
            />
          </div>
          <div>
            <label
              className="text-black text-lg-dynamic font-bold"
              aria-label="Email"
              htmlFor="emailInput"
            >
              Email:
            </label>
            <input
              id="emailInput"
              type="text"
              className="bg-transparent border w-full h-[4.5rem] pl-5 text-black placeholder:text-black text-xl-dynamic"
              placeholder="Digite seu email para contato:"
              required
            />
          </div>
          <input
            className="bg-lightBrown w-full p-10 font-bold text-2xl-dynamic text-white rounded-2xl box-shadow hover:cursor-pointer hover:bg-darkBrown "
            type="button"
            value="Enviar"
            aria-label="Enviar mensagem"
            onClick={sendEmail}
          />
        </Card>
      </div>
      <div className="flex justify-center flex-col items-center space-y-5 my-10">
        <h4 className="text-4xl-dynamic text-center">
          Encontre-nos nas redes sociais
        </h4>
        <div className="flex justify-center lg:justify-between lg:w-2/6 items-center">
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
              width={iconSize + 25}
              height={iconSize + 25}
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
      </div>
    </div>
  );
}
