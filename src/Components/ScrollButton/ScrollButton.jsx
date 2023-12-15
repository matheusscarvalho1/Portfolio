import { ScrollToTopButton } from "./ScrollButtonStyles";
import { Link as ScrollLink } from "react-scroll";

const ScrollButton = () => {
  return (
    <>
      <ScrollLink to="showcase" spy={true} smooth={true} duration={100}>
        <ScrollToTopButton>
          <img src="../images/UP_ARROW_ICON.png" alt="Seta para cima" />
        </ScrollToTopButton>
      </ScrollLink>
    </>
  );
};

export default ScrollButton;
