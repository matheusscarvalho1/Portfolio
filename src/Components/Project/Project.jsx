import { ProjectItem, ProjectText } from "./ProjectStyles";

const Project = ({ image, title, description }) => {
  return (
    <>
      <ProjectItem>
        <ProjectText>
          <img src={image} alt={image} />
          <h3>{title}</h3>
          <p>{description}</p>
        </ProjectText>
      </ProjectItem>
    </>
  );
};

export default Project;
