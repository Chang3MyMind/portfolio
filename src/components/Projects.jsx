import TechnologyIcon from "./TechnologyIcon";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import useWindowSize from "../hooks/useWindowSize";

const projects = [
  {
    id: 1,
    name: "Projeto de E-commerce",
    technologies: ["React", "Tailwind", "NodeJs"],
    image: "src/assets/img/Frame 16.png",
    link: "https://github.com/seu-usuario/projeto-1",
  },
  {
    id: 2,
    name: "Landing Page Responsiva",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "src/assets/img/Frame 16.png",
    link: "https://github.com/seu-usuario/projeto-2",
  },
  {
    id: 3,
    name: "Sistema de Blog",
    technologies: ["React", "Tailwind", "JavaScript"],
    image: "src/assets/img/Frame 16.png",
    link: "https://github.com/seu-usuario/projeto-3",
  },
  {
    id: 4,
    name: "Portfólio Pessoal",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    image: "src/assets/img/Frame 16.png",
    link: "https://github.com/seu-usuario/projeto-4",
  },
];

function Projects() {
  const { width } = useWindowSize();

  const threshold = width < 1024 ? 0.15 : 0.5;

  const [ref, isIntersecting] = useIntersectionObserver({ threshold });

  return (
    <section
      ref={ref}
      id="projects"
      className={`sections-container fade-in-section scroll-mt-24 ${
        isIntersecting ? "is-visible" : ""
      }`}
    >
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="flex flex-col gap-y-5 md:col-span-10 lg:grid-cols-10 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-10 lg:grid">
          {projects.map((project, index) => {
            const colStart = index % 2 === 0 ? 1 : 6;
            const rowStart = Math.floor(index / 2) + 1;
            return (
              <div
                key={project.id}
                className={`m-3 lg:col-span-5 lg:m-0 lg:h-fit lg:col-start-${colStart} lg:row-start-${rowStart}`}
              >
                <h3 className="color-text font-medium md:text-lg lg:text-xl">
                  {project.name}
                </h3>
                <a
                  aria-label={`link to project ${project.name}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block h-full w-full"
                >
                  <img
                    src={project.image}
                    alt={`Uma imagem do projeto ${project.name}`}
                    className="h-full w-full"
                  />
                </a>
                <div className="flex items-center gap-2 mt-2">
                  <h4 className="color-text text-xs font-normal md:text-base xl:text-xl">
                    Technologies:
                  </h4>
                  {project.technologies.map((tech) => (
                    <TechnologyIcon key={tech} technology={tech} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
