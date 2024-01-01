import { ProjectItem, ProjectText, ProjectImg } from "./ProjectStyles";

const Project = ({ image, title, description, info }) => {
  return (
    <>
      <ProjectItem>
        <ProjectImg src={image} alt={image} />
        <ProjectText>
          <h3>{title}</h3>
        </ProjectText>
        <ProjectText>
          <p>{description}</p>
          <small>{info}</small>
        </ProjectText>
      </ProjectItem>
    </>
  );
};

export default Project;
