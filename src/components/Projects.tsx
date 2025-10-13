import TechnologyIcon from "./TechnologyIcon";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import useWindowSize from "../hooks/useWindowSize";

const projects = [
  {
    id: 1,
    name: "Trilha Challenge Junior",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    image: "/img/desafioJunior.png",
    link: "https://github.com/Chang3MyMind/TrilhaChallengeJunior",
  },
  {
    id: 2,
    name: "Discord Page",
    technologies: ["HTML", "Tailwind"],
    image: "/img/desafioResponsividade.png",
    link: "https://github.com/Chang3MyMind/desafio-responsividade",
  },

  {
    id: 3,
    name: "Portfolio (Legado)",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/img/projetoLegado.png",
    link: "https://github.com/Chang3MyMind/chang3mymind.github.io",
  },
  {
    id: 4,
    name: "Gerenciador de Finanças",
    technologies: ["React", "Tailwind", "JavaScript", "Vite"],
    image: "/img/gerenciadorFinancas.png",
    link: "https://github.com/Chang3MyMind/Gerenciador-de-financas",
  },
  {
    id: 5,
    name: "Cartão de Visitas Digital",
    technologies: ["NextJs", "TypeScript", "React", "Tailwind", "Zod"],
    image: "/img/cartaoDeVisitas.png",
    link: "https://github.com/Chang3MyMind/Cartao-de-Vistas-Digital",
  },
  /* Template{
    id: 5,
    name: "Portfólio Pessoal",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    image: "/img/Frame 16.png",
    link: "https://github.com/seu-usuario/projeto-4",
  },*/
];

function Projects() {
  const { width } = useWindowSize();

  const threshold = width < 1024 ? 0.15 : 0.4;

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
        <h2 className="section-title">Projetos</h2>
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
                    Tecnologias Utilizadas:
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
