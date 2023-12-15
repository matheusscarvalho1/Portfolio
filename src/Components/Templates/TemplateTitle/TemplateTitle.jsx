import { TemplateTitle } from "./TitleStyles";

const Title = ({ id, children }) => {
  return (
    <>
      <TemplateTitle id={id}>{children}</TemplateTitle>
    </>
  );
};

export default Title;
