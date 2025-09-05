import useIntersectionObserver from "../hooks/useIntersectionObserver";

function About() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <>
      <section
        ref={ref}
        id="about"
        className={`sections-container fade-in-section scroll-mt-24 ${
          isIntersecting ? "is-visible" : ""
        }`}
      >
        <div className="section-content">
          <h2 className="section-title">About</h2>
          <div className="grid grid-cols-1 grid-rows-2 p-5 pt-0 md:col-span-full md:gap-0 md:grid-cols-2 md:grid-rows-1 xl:gap-5 row">
            <div className="mb-3 mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full md:mb-0 md:h-56 md:w-56 lg:h-80 lg:w-80">
              <img
                src="/img/Face_Foto.png"
                alt="Uma foto de perfil do Matheus Mattos"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="my-auto">
              <h3 className="color-text text-justify text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                Hello! I’m Matheus Mattos, a Front-End Developer passionate
                about crafting responsive and accessible interfaces. I
                specialize in HTML5, CSS3, and modern JavaScript ES6+. I'm
                currently focused on building my portfolio to showcase my work
                and further develop my skills with clean and scalable code.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
