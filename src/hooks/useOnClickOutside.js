import { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Se o ref não existir ou o clique for DENTRO do ref, não faça nada
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Se o clique for fora, chame a função handler
      handler(event);
    };

    // Adiciona o ouvinte de cliques
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // A função de limpeza, para remover o ouvinte
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Roda o efeito de novo se o ref ou o handler mudarem
}

export default useOnClickOutside;
