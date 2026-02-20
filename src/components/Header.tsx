import { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

import { navItems } from "../data/NavItens";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";

type ToggleTheme = {
  onToggleTheme: () => void;
};

function Header({ onToggleTheme }: ToggleTheme) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  function toggleMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <nav
      className="flex items-center justify-between px-4 py-3"
      role="navigation"
    >
      <div className="text-base font-bold md:text-xl xl:text-2xl">
        <a className="gradient-on-text" href="./">
          {" "}
          Matheus{" "}
        </a>
      </div>

      <div
        // Desktop Navigation
        className="hidden space-x-8 sm:flex md:text-lg xl:text-xl"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            className="color-text transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
            href={item.href}
          >
            {item.label}
          </a>
        ))}

        <ToggleThemeButton
          id="theme-toggle"
          className="cursor-pointer"
          onClick={onToggleTheme}
        >
          Tema
        </ToggleThemeButton>
      </div>

      <button
        // Hamburger Menu for Mobile
        id="hamburger-menu"
        aria-expanded={isMenuOpen}
        aria-controls="nav-overlay"
        aria-label="Menu Button"
        className="text-text-color focus:outline-none sm:hidden dark:text-text-color-dark"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 -scale-x-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h10M4 18h5"
          ></path>
        </svg>
      </button>

      <div
        // Mobile Navigation Overlay
        ref={menuRef}
        id="nav-overlay"
        className={`fixed right-0 top-0 z-[900] h-[100vh] w-48 transform ease-linear transition-transform duration-300  flex-col bg-princ-box  dark:bg-princ-box-dark md:text-lg xl:text-xl ${
          isMenuOpen ? "flex translate-x-0" : "hidden translate-x-full"
        }`}
      >
        <ul className="mt-16 flex flex-col items-start space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                className="color-text text-xs font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
                href={item.href}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <ToggleThemeButton
              id="mobile-theme-toggle"
              className="text-xs font-semibold"
              onClick={onToggleTheme}
            >
              Tema
            </ToggleThemeButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
