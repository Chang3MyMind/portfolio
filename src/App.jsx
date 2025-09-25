import { useState, useEffect } from "react";

import Notification from "./components/Notification";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  const [notification, setNotification] = useState({
    visible: false,
    title: "",
    message: "",
    type: "",
  });

  function setErrorModal() {
    setNotification({
      visible: true,
      title: "Falha ao enviar o e-mail.",
      message: "Ocorreu um erro ao enviar o email, tente novamente mais tarde.",
      type: "error",
    });
  }

  function setSendModal() {
    setNotification({
      visible: true,
      title: "E-mail enviado com sucesso.",
      message:
        "E-mail enviado, obrigado por entrar em contato, em breve responderemos.",
      type: "send",
    });
  }

  function onClose() {
    setNotification({ visible: false, title: "", message: "", type: "" });
  }

  useEffect(() => {
    if (notification.visible && notification.type === "send") {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

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
        {notification.visible ? (
          <Notification notification={notification} onCloseClick={onClose} />
        ) : (
          ""
        )}
        <header className=" sticky top-0 z-10 bg-white shadow-md dark:bg-princ-box-dark">
          <Header onToggleTheme={toggleTheme} />
        </header>

        <main className="flex-grow space-y-16 md:space-y-28 lg:space-y-40 py-16 md:py-28 xl:py-36">
          <Hero /> <About /> <Skills /> <Projects />{" "}
          <Contact setSendModal={setSendModal} setErrorModal={setErrorModal} />
        </main>

        <footer className="flex flex-col bg-background-dark pb-7 pt-7 dark:bg-background">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
