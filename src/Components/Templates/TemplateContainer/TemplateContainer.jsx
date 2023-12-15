import { TemplateContainer } from "./ContainerStyles";

const Container = ({ children }) => {
  return (
    <>
      <TemplateContainer>{children}</TemplateContainer>;
    </>
  );
};

export default Container;
