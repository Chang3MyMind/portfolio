import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <>
      <section id="hero" className="sections-container scroll-mt-36">
        <div className="section-content md:grid-rows-3 lg:gap-y-10">
          <p className="color-text text-center text-xs font-normal md:col-span-full md:row-span-1 md:row-start-1 md:mx-auto md:text-base lg:text-lg xl:text-xl">
            Olá, sou Matheus Mattos. Desenvolvedor Front-End.
          </p>
          <h1 className="flex items-center justify-center gap-x-2 color-text text-center text-lg font-semibold md:col-span-full md:row-span-1 md:row-start-2 md:mx-auto md:text-3xl lg:text-4xl xl:text-5xl">
            &lt;
            <Typewriter
              options={
                {
                  strings: [
                    'Transformando ideias em <span class="gradient-on-text">interfaces</span>.',
                    'Soluções criativas em <span class="gradient-on-text">Front-End</span>.',
                    'Código e design focados no <span class="gradient-on-text">usuário</span>.',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  wrapperClassName: "color-text",
                  dangerouslyAllowHTML: true,
                } as any
              }
            />
            /&gt;
          </h1>
          <div className="row-start-3 flex gap-5 p-2 md:col-span-full md:row-span-1 md:mx-auto lg:gap-10">
            <a
              href="/Curriculo_Matheus_Mattos_FontEnd_Developer.pdf"
              download
              className="color-text gradient-on-bg h-fit p-3 text-xs font-medium md:text-base lg:text-lg xl:text-xl"
              type="button"
            >
              Download CV
            </a>
            <a
              className="text-2xl text-background-dark md:text-4xl dark:text-background xl:text-[42px]"
              href="https://www.linkedin.com/in/matheusmattos4"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="sr-only">Perfil do LinkedIn</span>
            </a>
            <a
              className="text-2xl text-background-dark md:text-4xl dark:text-background xl:text-[42px]"
              href="https://github.com/Chang3MyMind"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="sr-only">Perfil do GitHub</span>
            </a>
            <a
              href="#contact"
              className="color-text gradient-on-bg h-fit p-3 text-xs font-medium md:text-base lg:text-lg xl:text-xl"
              type="button"
            >
              Contato
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
