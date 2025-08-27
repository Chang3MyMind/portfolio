import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="bg-white shadow-md dark:bg-princ-box-dark">
        {" "}
        <Header></Header>
      </header>
      <main className="flex-grow bg-background dark:bg-background-dark space-y-16 min-h-screen md:space-y-28 lg:space-y-40 my-24 md:my-32 xl:space-y-52">
        <Hero /> <About /> <Skills /> <Projects /> <Contact />
      </main>
      <footer className="flex flex-col bg-background-dark pb-7 pt-7 dark:bg-background">
        {" "}
        <Footer />
      </footer>
    </>
  );
}

export default App;
