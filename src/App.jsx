import { useState, useEffect } from "react";

import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background dark:bg-background-dark transition-transform ease-out duration-300">
        <header className="bg-white shadow-md dark:bg-princ-box-dark">
          <Header onToggleTheme={toggleTheme} />
        </header>

        <main className="flex-grow space-y-16 md:space-y-28 lg:space-y-40 py-16 md:py-28 xl:py-36">
          <Hero /> <About /> <Skills /> <Projects /> <Contact />
        </main>

        <footer className="flex flex-col bg-background-dark pb-7 pt-7 dark:bg-background">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
