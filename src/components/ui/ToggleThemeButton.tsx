import { ButtonHTMLAttributes } from "react";

type ThemeToggleBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  className?: string;
};

export function ToggleThemeButton({
  id,
  onClick,
  className = "",
}: ThemeToggleBtnProps) {
  return (
    <button
      type="button"
      id={id}
      onClick={onClick}
      aria-label="Toggle theme"
      className={`text-gradient from-[#1A2B47] via-[#2C4260] to-[#4A5B73] bg-gradient-to-r dark:from-[#FF6347] dark:via-[#FFBD99] dark:to-[#FFDAB9] ${className}`}
    >
      Tema
    </button>
  );
}
