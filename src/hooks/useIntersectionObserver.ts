import { useState, useRef, useEffect, useMemo, type RefObject } from "react";

type ObserverResponse<T> = [RefObject<T | null>, boolean];

export default function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): ObserverResponse<T> {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef<T | null>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const memoizedOptions = useMemo(
    () => ({
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? "0px",
      threshold: options?.threshold ?? 0,
    }),
    [options?.root, options?.rootMargin, options?.threshold],
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting((prev) =>
        prev === entry.isIntersecting ? prev : entry.isIntersecting,
      );
    }, memoizedOptions);

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.unobserve(element);
    };
  }, [memoizedOptions]);

  return [ref, isIntersecting];
}
