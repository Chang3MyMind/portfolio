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
          href="https://www.linkedin.com/in/matheusmattos4"
          aria-label="Link to my LinkedIn profile"
        >
          <FontAwesomeIcon className="text-2xl md:text-3xl" icon={faLinkedin} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          href="https://github.com/Chang3MyMind"
          aria-label="Link to my Github profile"
        >
          <FontAwesomeIcon className="text-2xl md:text-3xl" icon={faGithub} />
        </a>
        <a
          className="footer-icon"
          target="_blank"
          href="https://www.instagram.com/m4theus_m4ttos"
          aria-label="Link to my Instagram profile"
        >
          <FontAwesomeIcon
            className="text-2xl md:text-3xl"
            icon={faInstagram}
          />
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-8">
        <h3 className="text-center text-base font-medium text-text-color-dark md:text-lg dark:text-text-color">
          &copy; 2025 Matheus Mattos. Todos os direitos reservados.
        </h3>
      </div>
    </>
  );
}

export default Footer;
