import { useState, useRef, useEffect } from "react";

function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const callback = (entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;
