import TechnologyIcon from "../ui/TechnologyIcon";

import { projects } from "../../data/ProjectsItens";
import { RevealSection } from "../ui/RevealSection";

function Projects() {
  return (
    <RevealSection
      id="projects"
      title="Projetos"
      threshold={0}
      rootMargin="0px 0px -25% 0px"
    >
      <div className="flex flex-col gap-y-5 md:col-span-10 lg:grid-cols-10 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-10 lg:grid">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className={`m-3 lg:col-span-5 lg:m-0 lg:h-fit lg:grid lg:grid-rows-[auto_auto_auto] lg:gap-2`}
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
                  src={project.imageMobile}
                  srcSet={`${project.imageMobile} 480w, ${project.imageTablet} 800w, ${project.imageDesktop} 1200w`}
                  sizes="(max-width: 768px) 95vw, 50vw"
                  alt={`Uma imagem do projeto ${project.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full"
                  width={1323}
                  height={688}
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
    </RevealSection>
  );
}

export default Projects;
