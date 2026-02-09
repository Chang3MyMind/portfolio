import { useState, useRef, useEffect, useMemo, type RefObject } from "react";

type ObserverResponse<T> = [RefObject<T | null>, boolean];

export default function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): ObserverResponse<T> {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  const memoizedOptions = useMemo(
    () => ({
      root: options?.root,
      rootMargin: options?.rootMargin,
      threshold: options?.threshold,
    }),
    [options?.root, options?.rootMargin, options?.threshold],
  );
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, memoizedOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [memoizedOptions]);

  return [ref, isIntersecting];
}
