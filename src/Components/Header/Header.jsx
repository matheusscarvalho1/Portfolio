import { HeaderComponent } from "./HeaderStyles";
import { Link } from "react-scroll";
import { handleDownload } from "../Download";

const Header = () => {
  return (
    <>
      <HeaderComponent>
        <nav>
          <ul>
            <li>
              <Link to="home" spy={true} smooth={true} duration={100}>
                Início
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={100}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} duration={100}>
                Habilidades
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} duration={100}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={100}>
                Contato
              </Link>
            </li>
            <li onClick={handleDownload}>Download CV</li>
          </ul>
        </nav>
      </HeaderComponent>
    </>
  );
};

export default Header;
