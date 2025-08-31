import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Hero() {
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <>
      <section id="hero" className="sections-container">
        <div className="section-content md:grid-rows-3 lg:gap-y-10">
          <p className="color-text text-center text-xs font-normal md:col-span-full md:row-span-1 md:row-start-1 md:mx-auto md:text-base lg:text-lg xl:text-xl">
            Hello, I'm Matheus Mattos. A passionate Front-End Developer.
          </p>
          <h1 className="flex items-center justify-center gap-x-2 color-text text-center text-lg font-semibold md:col-span-full md:row-span-1 md:row-start-2 md:mx-auto md:text-3xl lg:text-4xl xl:text-5xl">
            &lt;
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'Crafting intuitive <span class="gradient-on-text"> Front-End </span> experiences.'
                  )
                  .pauseFor(1000)
                  .callFunction(() => {
                    setTypingComplete(true);
                  })
                  .start();
              }}
              options={{
                delay: 50,
                wrapperClassName: "color-text",
                dangerouslyAllowHTML: true,
              }}
            />
            {typingComplete && "/>"}
          </h1>
          <div className="row-start-3 flex gap-5 p-2 md:col-span-full md:row-span-1 md:mx-auto lg:gap-10">
            <button
              className="color-text gradient-on-bg h-fit p-3 text-xs font-medium md:text-base lg:text-lg xl:text-xl"
              type="button"
            >
              Download CV
            </button>
            <a
              className="text-2xl text-background-dark md:text-4xl dark:text-background xl:text-[42px]"
              href="https://www.linkedin.com/in/matheusmattos4"
              target="_blank"
              aria-label="Link to my LinkedIn profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="text-2xl text-background-dark md:text-4xl dark:text-background xl:text-[42px]"
              href="https://github.com/Chang3MyMind"
              target="_blank"
              aria-label="Link to my Github profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <button
              className="color-text gradient-on-bg h-fit p-3 text-xs font-medium md:text-base lg:text-lg xl:text-xl"
              type="button"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
