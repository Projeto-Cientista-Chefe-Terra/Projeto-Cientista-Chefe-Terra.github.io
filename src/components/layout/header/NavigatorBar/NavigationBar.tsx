"use client";
import { useState } from "react";
import NavButton from "./NavButton";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface NavigationBarProps {
  fonte?: string;
}

export default function NavigatorBar({ fonte }: NavigationBarProps) {
  const [open, setOpen] = useState(false);
  // TODO Quando clicar fora ou em algun link tirar menu
  return (
    <div
      className={open ? "bg-black/50 fixed backdrop-blur-sm  z-50 h-full " : ""}
    >
      <div
        className={`${fonte} overflow-hidden  bg-yellow lg:h-16 w-[100dvw] lg:w-full flex justify-end lg:justify-end text-black`}
      >
        <div className={`lg:hidden flex mx-5 z-[60] justify-end`}>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="my-1 w-10 h-10 flex place-content-center items-center"
          >
            {open ? <FaX size={30} /> : <FaBars size={30} />}
            {/* <FaBars size={30} /> */}
          </button>
        </div>
        <div className="lg:relative flex lg:items-center lg:space-x-10 lg:w-1/2 lg:justify-end lg:mx-24 ">
          <div
            className={`absolute lg:relative top-10 lg:top-0 left-0 w-[100dvw] lg:justify-center bg-yellow flex-col items-center gap-6 font-semibold text-lg lg:flex lg:flex-row 
            transition-all duration-500 ease-in-out 
                    ${
                      open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5 lg:translate-y-0 lg:opacity-100 "
                    }`}
          >
            <ul
              onClick={() => {setOpen(false)}}
              className={`${
                open ? "flex flex-col" : "hidden "
              } gap-y-1 lg:gap-y-0 lg:flex w-full lg:justify-between `}
            >
              {[
                { text: "Início", destine: "/" },
                { text: "Sobre", destine: "/sobre" },
                { text: "Galeria", destine: "/galeria" },
                { text: "Publicações", destine: "/publicacoes" },
                { text: "Equipe", destine: "/equipe" },
                { text: "Contato", destine: "/contato" },
              ].map((item) => (
                <NavButton
                  key={item.destine}
                  text={item.text}
                  destine={item.destine}
                  extraClassName="lg:ml-4 hover:bg-darkBrown/35 h-full w-full flex justify-center items-center"
                  extraClassNameSpan="text-xl-dynamic"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grow-0 h-full" onClick={() => {
        setOpen(false)
      }}>

      </div>
    </div>
  );
}
