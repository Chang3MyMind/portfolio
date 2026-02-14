import type { ReactNode } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type RevealSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  threshold?: number;
  scrollMtClass?: string;
};

export function RevealSection({
  id,
  title,
  children,
  threshold = 0.5,
  scrollMtClass = "scroll-mt-24",
}: RevealSectionProps) {
  const [ref, visible] = useIntersectionObserver({ threshold });

  return (
    <section
      ref={ref}
      id={id}
      className={[
        "sections-container mx-auto fade-in-section",
        scrollMtClass,
        visible ? "is-visible" : "",
      ].join(" ")}
    >
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
