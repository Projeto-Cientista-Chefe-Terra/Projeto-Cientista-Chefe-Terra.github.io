"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const AudioHandler = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  const handleClick = async () => {
    await audioRef.current?.play();
  };

 
  useEffect(() => {
    // Cria o elemento de áudio apenas no client-side
    audioRef.current = new Audio("/Sounds/taDa.mp3");
    audioRef.current.preload = "auto";

    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (error) {
        console.log("Reprodução automática bloqueada" + error);
        
      }
    };

    // Executa na primeira carga e nas mudanças de rota
    playAudio();

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [pathname]); // Dispara quando a rota muda

  return  <button onClick={handleClick}>Ativar som</button>;
};

export default AudioHandler;
