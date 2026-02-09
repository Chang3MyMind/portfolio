import { useEffect, useRef, type RefObject } from "react";

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: AnyEvent) => void,
) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      savedHandler.current(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}

export default useOnClickOutside;
