import { ProjectBtn } from "./ProjectButtonStyles";

const ProjectButton = ({ href, title, target, rel }) => {
  return (
    <>
      <a href={href} target={target} rel={rel}>
        <ProjectBtn>{title}</ProjectBtn>
      </a>
    </>
  );
};

export default ProjectButton;
