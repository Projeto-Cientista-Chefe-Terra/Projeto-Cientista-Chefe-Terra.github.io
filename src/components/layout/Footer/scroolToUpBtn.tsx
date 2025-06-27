"use client";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollUpBTN() {
  return (
    <button
      className="flex items-center"
      onClick={() => {
        window.scrollTo({
          top: 0,

          behavior: "smooth",
        });
      }}
    >
      <p className="text-lg-dynamic mr-2">Voltar ao topo da página</p>
      <FaArrowUp size={40} />
    </button>
  );
}
