import { useState, useRef, useEffect, type RefObject } from "react";

type ObserverResponse<T> = [RefObject<T | null>, boolean];

export default function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit
): ObserverResponse<T> {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (entry) {
        setIsIntersecting(entry.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}
