import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

type FontAwesomeIconType = {
  type: "fa";
  icon: IconDefinition;
  color: string;
};

type ImageIconType = {
  type: "img";
  src: string;
};

type IconMapValue = FontAwesomeIconType | ImageIconType;

const iconMap: Record<string, IconMapValue> = {
  HTML: { type: "fa", icon: faHtml5, color: "#E34F26" },
  CSS: { type: "fa", icon: faCss3, color: "#1572B6" },
  JavaScript: { type: "fa", icon: faJs, color: "#F7DF1E" },
  React: { type: "fa", icon: faReact, color: "#61DAFB" },
  NodeJs: { type: "fa", icon: faNodeJs, color: "#339933" },
  Tailwind: { type: "img", src: "/img/tailwindIcon.svg" },
  Vite: { type: "img", src: "/img/vite.svg" },
  TypeScript: { type: "img", src: "/img/typeScriptIcon.svg" },
  NextJs: { type: "img", src: "/img/nextJsIcon.svg" },
  Zod: { type: "img", src: "/img/Zod.svg" },
};

type TechnologyIconProps = {
  technology: keyof typeof iconMap;
};

export default function TechnologyIcon({ technology }: TechnologyIconProps) {
  const tech = iconMap[technology];

  if (!tech) {
    return null;
  }

  if (tech.type === "img") {
    return (
      <img
        className="w-4 md:w-5 lg:w-6 "
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
