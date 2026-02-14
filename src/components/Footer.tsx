import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="mb-3 flex items-center justify-center gap-x-8">
        <a
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/matheusmattos4"
          aria-label="Link para o meu perfil do Linkedin"
        >
          <FontAwesomeIcon className="text-2xl md:text-3xl" icon={faLinkedin} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Chang3MyMind"
          aria-label="Link para o meu perfil do Github"
        >
          <FontAwesomeIcon className="text-2xl md:text-3xl" icon={faGithub} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/m4theus_m4ttos"
          aria-label="Link para o meu perfil do Instagram"
        >
          <FontAwesomeIcon
            className="text-2xl md:text-3xl"
            icon={faInstagram}
          />
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-8">
        <p className="text-center text-base font-medium text-text-color-dark md:text-lg dark:text-text-color">
          &copy; {new Date().getFullYear()} Matheus Mattos. Todos os direitos
          reservados.
        </p>
      </div>
    </>
  );
}

export default Footer;
