import SkillBar from "./SkillBar";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Skills() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

  const codingSkills = [
    { name: "HTML5", value: 83 },
    { name: "CSS", value: 86 },
    { name: "JavaScript", value: 70 },
    { name: "Tailwind", value: 90 },
    { name: "React", value: 75 },
    { name: "Git & Github", value: 83 },
  ];

  const personalSkills = [
    { name: "Communication", value: 86 },
    { name: "Self-Learning", value: 91 },
    { name: "Initiative", value: 90 },
    { name: "Problem Solving", value: 82 },
    { name: "Commitment", value: 93 },
    { name: "Team Work", value: 90 },
  ];

  return (
    <>
      <section
        ref={ref}
        id="skills"
        className={`sections-container fade-in-section scroll-mt-20 ${
          isIntersecting ? "is-visible" : ""
        }`}
      >
        <div className="section-content">
          <h2 className="section-title">Skills</h2>
          <div className="grid w-full grid-rows-2 gap-y-6 px-5 md:col-span-full md:gap-y-12 lg:gap-y-0 lg:grid-rows-1 lg:col-span-10 lg:col-start-1 lg:grid-cols-10 lg:gap-x-6 lg:px-0">
            {/* Coding Skills */}
            <div className="lg:col-start-1 lg:col-span-5">
              <h3 className="color-text text-lg font-medium lg:text-xl">
                Coding Skills
              </h3>
              <div className="h-fit border-2 border-primary bg-princ-box p-3 dark:border-primary-dark dark:bg-princ-box-dark lg:space-y-8">
                {codingSkills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    value={skill.value}
                  />
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div className="lg:col-start-6 lg:col-span-5">
              <h3 className="color-text text-lg font-medium lg:text-xl">
                Personal Skills
              </h3>
              <div className="h-fit gap-y-5 border-2 border-primary bg-princ-box p-3 dark:border-primary-dark dark:bg-princ-box-dark lg:space-y-8">
                {personalSkills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    value={skill.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
