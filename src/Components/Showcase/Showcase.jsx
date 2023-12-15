import { ShowcaseComponent } from "./ShowcaseStyles";
import ScrollButton from "../ScrollButton/ScrollButton";

const Showcase = ({ id }) => {
  return (
    <>
      <ShowcaseComponent id={id}>
        <h1>
          Oi, eu sou <br />
          Matheus Carvalho!
        </h1>
        <p>A Professional Web Developer</p>
      </ShowcaseComponent>
      <ScrollButton />
    </>
  );
};

export default Showcase;
