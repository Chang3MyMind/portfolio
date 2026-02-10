import { useContext } from "react";

import Notification from "./components/ui/Notification";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

import { NotificationContext } from "./context/NotificationContext";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { notification } = useContext(NotificationContext);

  const { toggleTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-background-dark transition-transform ease-out duration-300">
      {notification.visible && <Notification />}
      <header className=" sticky top-0 z-10 bg-white shadow-md dark:bg-princ-box-dark">
        <Header onToggleTheme={toggleTheme} />
      </header>

      <main className="flex-grow space-y-16 md:space-y-28 lg:space-y-40 py-16 md:py-28 xl:py-36">
        <Hero /> <About /> <Skills /> <Projects /> <Contact />
      </main>

      <footer className="flex flex-col bg-background-dark pb-7 pt-7 dark:bg-background">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
