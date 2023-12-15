import { ProjectItem, ProjectText, ProjectImg } from "./ProjectStyles";

const Project = ({ image, title, description }) => {
  return (
    <>
      <ProjectItem>
        <ProjectImg src={image} alt={image} />
        <ProjectText>
          <h3>{title}</h3>
          <p>{description}</p>
        </ProjectText>
      </ProjectItem>
    </>
  );
};

export default Project;
