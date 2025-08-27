import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  HTML: { type: "fa", icon: faHtml5, color: "#E34F26" },
  CSS: { type: "fa", icon: faCss3, color: "#1572B6" },
  JavaScript: { type: "fa", icon: faJs, color: "#F7DF1E" },
  React: { type: "fa", icon: faReact, color: "#61DAFB" },
  NodeJs: { type: "fa", icon: faNodeJs, color: "#339933" },
  Tailwind: { type: "img", src: "src/assets/img/tailwindIcon.svg" },
};

function TechnologyIcon({ technology }) {
  const tech = iconMap[technology];

  if (!tech) {
    return null;
  }

  if (tech.type === "img") {
    return (
      <img
        className="md:w-5 lg:w-6 xl:w-8"
        src={tech.src}
        alt={`${technology} Icon`}
      />
    );
  }

  return (
    <FontAwesomeIcon
      icon={tech.icon}
      style={{ color: tech.color }}
      className="md:text-xl lg:text-2xl"
    />
  );
}

export default TechnologyIcon;
