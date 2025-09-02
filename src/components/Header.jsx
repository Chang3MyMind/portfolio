import { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function Header({ onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  function toggleMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <>
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

        <div className="hidden space-x-8 sm:flex md:text-lg xl:text-xl">
          <a
            className="color-text transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
            href="#hero"
          >
            Home
          </a>
          <a
            className="color-text transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
            href="#about"
          >
            About
          </a>
          <a
            className="color-text transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="color-text transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="color-text transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
            href="#contact"
          >
            Contact
          </a>
          <a
            id="theme-toggle"
            href="#"
            aria-label="Toggle theme"
            className="text-gradient from-[#1A2B47] via-[#2C4260] to-[#4A5B73] bg-gradient-to-r dark:from-[#FF6347] dark:via-[#FFBD99] dark:to-[#FFDAB9]"
            onClick={onToggleTheme}
          >
            Theme
          </a>
        </div>

        <button
          id="hamburger-menu"
          aria-expanded="false"
          aria-controls="nav-overlay"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 -scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h10M4 18h5"
            ></path>
          </svg>
        </button>

        <div
          ref={menuRef}
          id="nav-overlay"
          className={`fixed right-0 top-0 z-[900] h-[100vh] w-48 transform ease-linear transition-transform duration-300  flex-col bg-princ-box  dark:bg-princ-box-dark md:text-lg xl:text-xl ${
            isMenuOpen ? "flex translate-x-0" : "hidden translate-x-full"
          }`}
        >
          <ul className="mt-16 flex flex-col items-start space-y-4 p-4">
            <li>
              <a
                className="color-text text-xs font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
                href="#hero"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="color-text text-xs font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
                href="#about"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="color-text text-xs font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
                href="#skills"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="color-text text-xs font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
                href="#projects"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="color-text text-xs font-semibold transition-colors duration-300 hover:text-primary dark:hover:text-primary-dark"
                href="#contact"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                id="mobile-theme-toggle"
                href="#"
                aria-label="Toggle theme"
                className="text-gradient from-[#1A2B47] via-[#2C4260] to-[#4A5B73] bg-gradient-to-r dark:from-[#FF6347] dark:via-[#FFBD99] dark:to-[#FFDAB9] "
                onClick={onToggleTheme}
              >
                Theme
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
