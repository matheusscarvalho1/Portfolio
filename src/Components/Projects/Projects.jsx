import {
  ProjectsContent,
  ProjectWrapper,
  ButtonWrapper,
} from "./ProjectsStyles";

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
                image="../images/Project-Barber-Shop.png"
                title="Projeto Barber Shop"
                description="💈✂️ Página Web responsiva desenvolvida em Next.JS de
                uma barbearia ilustrando os tipos de serviços prestados,
                história da barbearia, localização e formulário para agendamento
                de horário."
              />
              <ButtonWrapper>
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
              </ButtonWrapper>
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/Project-Portfolio.png"
                title="Projeto Site Portfólio"
                description="Projeto criado em React para servir de portfólio mostrando minha história, minhas Hard Skills como programador, minhas Soft Skills como colega de trabalho, minhas experiência como desenvolvedor utilizando as habilidades citadas no projeto e contato caso queira entrar em contato comigo."
              />
              <ButtonWrapper>
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
              </ButtonWrapper>
            </ProjectWrapper>
            <ProjectWrapper>
              <Project
                image="../images/PROJECT-STEAM-ICON.png"
                title="Projeto Steam Minimalista"
                description="🎮 Criação de uma aplicação web utilizando React baseado na plataforma Steam que é uma um software de gestão de direitos digitais, plataformas digitais como jogos e aplicativos de programação e fornece serviços facilitados como atualização automática de jogos. (Projeto em manutenção - Logo será disponibilizado)."
              />
              <ButtonWrapper>
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
              </ButtonWrapper>
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/PROJECT_FORECAST_WEATHER.svg"
                title="Projeto Clima Hoje"
                description="🌦️ Criação de uma aplicação web utilizando React e CSS Modules em que mostra a temperatura da cidade ao decorrer do dia, contemplando também a sensação térmica, a chance de chuva, a velocidade do vento, e o índice UV, além disso mostra as temperaturas máximas e mínimas dos outros dias da semana."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="Acesse"
                  target="_blank"
                  href="https://app-previsao-do-tempo-six.vercel.app"
                  rel="noreferrer"
                />
                <ProjectButton
                  title="GitHub"
                  target="_blank"
                  href="https://github.com/matheusscarvalho1/app-previsao-do-tempo"
                  rel="noreferrer"
                />
              </ButtonWrapper>
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/LOADING.png"
                title="Projeto Simulador de CRUD"
                description="Projeto desenvolvido com React.JS, estilizado com Material UI e com navegação utilizando React Router, o projeto simula uma CRUD, então é possível criar, listar, editar e apagar dados de clientes, clientes esses que já estão 'cadastrados' préviamente através de uma API com informações como foto, nome e email."
              />
              <ButtonWrapper>
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
              </ButtonWrapper>
            </ProjectWrapper>
            <ProjectWrapper>
              <Project
                image="../images/LOADING.png"
                title="Projeto Site Corporativo"
                description="📱 Página Web responsiva pensando também nos usuários mobile, aplicação desenvolvida utilizando TailwindCSS desenvolvida com Vite + React (Parte responsiva ainda está em desenvolvimento);"
              />
              <ButtonWrapper>
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
              </ButtonWrapper>
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/LOADING.png"
                title="To Do List"
                description="Projeto simples de um 'to do list' utilizando redux para criar global state na aplicação."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="Acesse"
                  target="_blank"
                  href="https://todo-list-redux-peach.vercel.app"
                  rel="noreferrer"
                />
                <ProjectButton
                  title="GitHub"
                  target="_blank"
                  href="https://github.com/matheusscarvalho1/todo-list-redux"
                  rel="noreferrer"
                />
              </ButtonWrapper>
            </ProjectWrapper>
          </ProjectsContent>
        </Content>
      </Container>
    </>
  );
};
export default Projects;
