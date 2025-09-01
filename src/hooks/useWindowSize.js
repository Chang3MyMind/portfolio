import { useState, useEffect } from "react";

function useWindowSize() {
  // Inicia o estado com a largura e altura da janela
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Cria a função que será chamada toda vez que a janela redimensionar
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adiciona o "ouvinte" de evento
    window.addEventListener("resize", handleResize);

    //  Limpeza

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
