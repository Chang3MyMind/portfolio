import SkillBar from "../ui/SkillBar.js";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function Skills() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

  const codingSkills = [
    {
      name: "HTML5",
      value: 83,
      ariaLabel: "HTML5 codingSkills em 83 porcento",
    },
    { name: "CSS", value: 86, ariaLabel: "CSS codingSkills em 86 porcento" },
    {
      name: "JavaScript",
      value: 70,
      ariaLabel: "JavaScript codingSkills em 70 porcento",
    },
    {
      name: "Tailwind",
      value: 90,
      ariaLabel: "Tailwind codingSkills em 90 porcento",
    },
    {
      name: "React",
      value: 75,
      ariaLabel: "React codingSkills em 75 porcento",
    },
    {
      name: "Git & Github",
      value: 83,
      ariaLabel: "Git & Github codingSkills em 83 porcento",
    },
  ];

  const personalSkills = [
    {
      name: "Comunicação",
      value: 86,
      ariaLabel: "Comunicação personalSkills em 86 porcento",
    },
    {
      name: "Autodidatismo",
      value: 91,
      ariaLabel: "Autodidatismo personalSkills em 91 porcento",
    },
    {
      name: "Proatividade",
      value: 90,
      ariaLabel: "Proatividade personalSkills em 90 porcento",
    },
    {
      name: "Resolução de Problemas",
      value: 82,
      ariaLabel: "Resolução de Problemas personalSkills em 82 porcento",
    },
    {
      name: "Comprometimento",
      value: 93,
      ariaLabel: "Comprometimento personalSkills em 93 porcento",
    },
    {
      name: "Trabalho em Equipe",
      value: 90,
      ariaLabel: "Trabalho em Equipe personalSkills em 90 porcento",
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className={`sections-container fade-in-section scroll-mt-20 ${
        isIntersecting ? "is-visible" : ""
      }`}
    >
      <div className="section-content">
        <h2 className="section-title">Habilidades</h2>
        <div className="grid w-full grid-rows-2 gap-y-6 px-5 md:col-span-full md:gap-y-12 lg:gap-y-0 lg:grid-rows-1 lg:col-span-10 lg:col-start-1 lg:grid-cols-10 lg:gap-x-6 lg:px-0">
          {/* Coding Skills */}
          <div className="lg:col-start-1 lg:col-span-5">
            <p className="color-text text-lg font-medium lg:text-xl">
              Habilidades Técnicas
            </p>
            <div className="h-fit border-2 border-primary bg-princ-box p-3 dark:border-primary-dark dark:bg-princ-box-dark lg:space-y-8">
              {codingSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  value={skill.value}
                  ariaLabel={skill.ariaLabel}
                />
              ))}
            </div>
          </div>

          {/* Personal Skills */}
          <div className="lg:col-start-6 lg:col-span-5">
            <p className="color-text text-lg font-medium lg:text-xl">
              Habilidades Pessoais
            </p>
            <div className="h-fit gap-y-5 border-2 border-primary bg-princ-box p-3 dark:border-primary-dark dark:bg-princ-box-dark lg:space-y-8">
              {personalSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  value={skill.value}
                  ariaLabel={skill.ariaLabel}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
