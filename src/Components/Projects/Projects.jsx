import { ProjectsContent, ProjectWrapper } from "./ProjectsStyles";

import Title from "../Templates/TemplateTitle/TemplateTitle";
import Project from "../Project/Project";
import ProjectButton from "../ProjectButton/ProjectButton";

import Container from "../Templates/TemplateContainer/TemplateContainer";
import Content from "../Templates/TemplateContent/TemplateContent";

const Projects = ({ id }) => {
  return (
    <>
      <Container>
        <Content>
          <Title id={id}>Projetos</Title>
          <ProjectsContent>
            <ProjectWrapper>
              <Project
                image="../images/project-1.png"
                title="Projeto Barber Shop"
                description="💈✂️ Página Web responsiva desenvolvida em React.JS & Next.JS de
                uma barbearia ilustrando os tipos de serviços prestados,
                história da barbearia, localização e formulário para agendamento
                de horário."
              />
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
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/project-2.png"
                title="Projeto site corporativo"
                description="📱 Página Web responsiva pensando também nos usuários mobile, aplicação desenvolvida utilizando TailwindCSS desenvolvida com Vite + React (ainda em desenvolvimento)"
              />
              <ProjectButton
                title="Ver projeto"
                target="_blank"
                href="https://design-responsivo-tailwind.vercel.app"
                rel="noreferrer"
              />
              <ProjectButton
                title="GitHub"
                target="_blank"
                href="https://github.com/matheusscarvalho1/Design-Responsivo-Tailwind"
                rel="noreferrer"
              />
            </ProjectWrapper>
            <ProjectWrapper>
              <Project
                image="../images/project-3.png"
                title="Projeto Site Portifólio"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas illo
                nemo perferendis, exercitationem qui illum quisquam facere quam, nostrum
                magnam atque, id laudantium voluptatum quis cumque? Dolorem natus quaerat
                corporis est quae doloribus aperiam? Repellendus nam reiciendis mollitia
                veniam."
              />
              <ProjectButton
                title="Ver projeto"
                target="_blank"
                href="https://portfolio-matheusscarvalho.vercel.app"
                rel="noreferrer"
              />
              <ProjectButton
                title="GitHub"
                target="_blank"
                href="https://github.com/matheusscarvalho1/portfolio"
                rel="noreferrer"
              />
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/project-4.png"
                title="Projeto simulador de "
                description="Novo projeto consumindo API usando react router, material ui e context API para simular um login no sistema."
              />
              <ProjectButton
                title="Ver projeto"
                target="_blank"
                href="https://project-react-router-material-ui.vercel.app"
                rel="noreferrer"
              />
              <ProjectButton
                title="GitHub"
                target="_blank"
                href="https://github.com/matheusscarvalho1/Project-ReactRouter-MaterialUI-ContextAPI"
                rel="noreferrer"
              />
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/project-5.png"
                title="Projeto 5"
                description="Projeto simples de um todo list utilizando redux para criar global state na aplicação."
              />
              <ProjectButton
                title="Ver projeto"
                target="_blank"
                href="https://todo-list-redux-peach.vercel.app"
              />
              <ProjectButton
                title="GitHub"
                target="_blank"
                href="https://github.com/matheusscarvalho1/todo-list-redux"
                rel="noreferrer"
              />
            </ProjectWrapper>
            <ProjectWrapper>
              <Project
                image="../images/project-6.png"
                title="Projeto 6"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quas illo
                nemo perferendis, exercitationem qui illum quisquam facere quam, nostrum
                magnam atque, id laudantium voluptatum quis cumque? Dolorem natus quaerat
                corporis est quae doloribus aperiam? Repellendus nam reiciendis mollitia
                veniam?"
              />
              <ProjectButton
                title="Ver projeto"
                target="_blank"
                href="#"
                rel="noreferrer"
              />
              <ProjectButton
                title="GitHub"
                target="_blank"
                href="#"
                rel="noreferrer"
              />
            </ProjectWrapper>
          </ProjectsContent>
        </Content>
      </Container>
    </>
  );
};
export default Projects;
