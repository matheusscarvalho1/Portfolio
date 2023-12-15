import { ProjectItem, ProjectText, ProjectImg } from "./ProjectStyles";
import ProjectButton from "../ProjectButton/ProjectButton";
const Project = ({ image, title, description }) => {
  return (
    <>
      <ProjectItem>
        <ProjectImg src={image} alt={image} />
        <ProjectText>
          <h3>{title}</h3>
          <p>{description}</p>

          <ProjectButton
            title="Ver projeto"
            target="_blank"
            href="https://projeto-barber-shop-xi.vercel.app"
            rel="noreferrer"
          />
          <ProjectButton
            title="GitHub"
            target="_blank"
            href="https://github.com/matheusscarvalho1/Projeto-Barber-Shop"
            rel="noreferrer"
          />
        </ProjectText>
      </ProjectItem>
    </>
  );
};

export default Project;
