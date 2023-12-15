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
                title="Acesse"
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
                description="📱 Página Web responsiva pensando também nos usuários mobile, aplicação desenvolvida utilizando TailwindCSS desenvolvida com Vite + React (ainda em desenvolvimento)."
              />
              <ProjectButton
                title="Acesse"
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
                description="Projeto criado para servir de portfolio mostrando minha história, minhas Hard Skills como programador, minhas Soft Skills como colega de trabalho, minhas experiência como desenvolvedor utilizando as habilidades citadas no projeto e contato caso queiras entrar em contato comigo."
                details="Para mais informações clique em "
              />
              <ProjectButton
                title="Acesse"
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
                title="Projeto simulador de CRUD"
                description="Projeto desenvolvido com React.JS, estilizado com Material UI e com navegação utilizando React Router, o projeto simula uma CRUD, então é possível criar, listar, editar e apagar dados de clientes, clientes esses que já estão 'cadastrados' préviamente através de uma API com informações como foto, nome e email."
              />
              <ProjectButton
                title="Acesse"
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
                image="../images/project-4.png"
                title="To Do List"
                description="Projeto simples de um 'to do list' utilizando redux para criar global state na aplicação."
              />
              <ProjectButton
                title="Acesse"
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
                image="../images/project-4.png"
                title="Projeto Steam Minimalista"
                description="🎮 Criação de uma aplicação web utilizando React.js e Next.js da Steam que é uma um software de gestão de direitos digitais, plataformas digitais como jogos e aplicativos de programação e fornece serviços facilitados como atualização automática de jogos."
              />
              <ProjectButton
                title="Acesse"
                target="_blank"
                href="#"
                rel="noreferrer"
              />
              <ProjectButton
                title="GitHub"
                target="_blank"
                href="https://github.com/matheusscarvalho1/minimalist-steam-react.js-next.js"
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
