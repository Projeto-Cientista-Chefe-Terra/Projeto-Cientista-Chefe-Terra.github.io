"use client";
import { useCallback, useEffect } from "react";
import FontButton from "./fontButton";

export default function AcessibilityBar() {
  const minSize = 0.8; // 80%
  const maxSize = 1.2; // 120%
  const step = 0.1;

  useEffect(() => {
    const savedSize = localStorage.getItem("fontSizeMultiplier");
    if (savedSize) {
      setFontSize(parseFloat(savedSize));
    }
  }, []);

  const adjustSize = useCallback((step: number): void => {
    const current =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--font-size-multiplier"
        )
      ) || 1;
    const newSize = Math.min(Math.max(current + step, minSize), maxSize);
    setFontSize(newSize);
  }, []);

  const setFontSize = (size: number): void => {
    document.documentElement.style.setProperty(
      "--font-size-multiplier",
      size.toString()
    );
    localStorage.setItem("fontSizeMultiplier", size.toString());
  };

  const resetSize = (): void => {
    setFontSize(1);
  };

  // Listeners para atalhos de teclado. Talvez depois
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.ctrlKey && (e.key === "+" || e.key === "=")) {
  //       e.preventDefault();
  //       adjustSize(step);
  //     }
  //     if (e.ctrlKey && e.key === "-") {
  //       e.preventDefault();
  //       adjustSize(-step);
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   Remove o listener ao desmontar o componente
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [adjustSize, step]);

  // * Coloquei fixado só para testes
  return (
    <div className="bg-lightBrown pb-1 pl-2 pt-1 flex gap-x-4 items-center shadow-lg w-[100dvw] lg:w-auto">
      <p className="text-sm-dynamic"></p>
      {/* <div>Contraste</div> // ADD Depois */}

      <p className="text-sm-dynamic text-white font-bold">Tamanho da Letra:</p>
      <div className="flex flex-row justify-center items-end">
        <FontButton onClick={() => adjustSize(step)}>
          <span className="px-2 py-1 text-lg-dynamic font-bold">A+</span>
        </FontButton>
        <FontButton onClick={() => resetSize()}>
          <span className="px-3 py-1 text-lg-dynamic font-bold">A</span>
        </FontButton>
        <FontButton onClick={() => adjustSize(-step)}>
          <span className="px-2 py-1 text-lg-dynamic font-bold">A-</span>
        </FontButton>
      </div>
    </div>
  );
}
