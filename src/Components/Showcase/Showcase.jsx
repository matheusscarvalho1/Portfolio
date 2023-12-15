import { ShowcaseComponent } from "./ShowcaseStyles";

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
    </>
  );
};

export default Showcase;
