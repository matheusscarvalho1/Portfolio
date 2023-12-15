import { ProjectBtn } from "./ProjectButtonStyles";

const ProjectButton = ({ href, title, target, rel, onClick }) => {
  return (
    <>
      <a href={href} target={target} rel={rel} onClick={onClick}>
        <ProjectBtn>{title}</ProjectBtn>
      </a>
    </>
  );
};

export default ProjectButton;
