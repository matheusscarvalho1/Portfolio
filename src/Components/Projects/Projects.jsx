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
                image="../images/MC_LOGO.png"
                title="FSW Donalds"
                description="🍔 Token de atendimento de uma rede de restaurantes completa, com o seeds armazenando dados de lanches, restaurantes e renderização desses dados em telas interativas ao cliente."
                info="Para informações mais detalhadas do projeto, acesse o Github."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="GitHub"
                  target="_blank"
                  href="https://github.com/matheusscarvalho1/fsw-donalds"
                  rel="noreferrer"
                />
              </ButtonWrapper>
            </ProjectWrapper>
            <ProjectWrapper>
              <Project
                image="../images/API_LOGO.png"
                title="APIs JWT Token"
                description="🔒APIs protegidas por autenticação JWT utilizando rotas dinâmicas do nextjs."
                info="Para informações mais detalhadas do projeto, acesse o Github."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="GitHub"
                  target="_blank"
                  href="https://github.com/matheusscarvalho1/api-auth-jwt"
                  rel="noreferrer"
                />
              </ButtonWrapper>
            </ProjectWrapper>
            <ProjectWrapper>
              <Project
                image="../images/Project-Portfolio.png"
                title="Projeto Site Portfólio"
                description="💼 Projeto criado em React para servir de portfólio mostrando minha história, minhas Hard Skills como programador, minhas Soft Skills como colega de trabalho, minhas experiências como desenvolvedor utilizando as habilidades citadas no projeto e contato caso queira entrar em contato comigo."
                info="Para informações mais detalhadas do projeto, acesse o Github."
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
                image="../images/Project-Barber-Shop.png"
                title="Projeto Barber Shop"
                description="💈✂️ Página Web responsiva desenvolvida em React.JS de
                uma barbearia ilustrando os tipos de serviços prestados,
                história da barbearia, localização e formulário para agendamento
                de horário."
                info="Para informações mais detalhadas do projeto, acesse o Github."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="Acesse"
                  target="_blank"
                  href="https://barber-shop-projeto.vercel.app"
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
                image="../images/CRUD_ICON.png"
                title="Projeto Simulador de CRUD"
                description="📁 O projeto simula uma CRUD, então é possível criar, listar, editar e apagar dados de clientes, clientes esses que já estão 'cadastrados' préviamente através de uma API com informações como foto, nome e email, e também criado uma simulação de um sistema de login utilizado Context API para consumir dados globais do usuário logado."
                info="Para informações mais detalhadas do projeto, acesse o Github."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="Acesse"
                  target="_blank"
                  href="https://projeto-simulador-de-crud.vercel.app"
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
                image="../images/Project-Teslabank.svg"
                title="Projeto Tesla Bank"
                description="💸 O TeslaBank é um site empresarial desenvolvido para oferecer serviços bancários inovadores e centrados no cliente. O projeto foi construído utilizando as tecnologias React e Tailwind CSS, garantindo uma experiência de usuário moderna e responsiva (parte responsiva ainda em desenvolvimento)."
                info="Para informações mais detalhadas do projeto, acesse o Github."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="Acesse"
                  target="_blank"
                  href="https://tesla-bank-v1.vercel.app"
                  rel="noreferrer"
                />
                <ProjectButton
                  title="GitHub"
                  target="_blank"
                  href="https://github.com/matheusscarvalho1/teslaBank"
                  rel="noreferrer"
                />
              </ButtonWrapper>
            </ProjectWrapper>

            <ProjectWrapper>
              <Project
                image="../images/PROJECT_FORECAST_WEATHER.svg"
                title="Projeto Clima Hoje"
                description="🌦️ Criação de uma aplicação web utilizando React e CSS Modules em que mostra a temperatura da cidade ao decorrer do dia, contemplando também a sensação térmica, a chance de chuva, a velocidade do vento, e o índice UV, além disso mostra as temperaturas máximas e mínimas dos outros dias da semana."
                info="Para informações mais detalhadas do projeto, acesse o Github."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="Acesse"
                  target="_blank"
                  href="https://projeto-clima-hoje.vercel.app/"
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
                image="../images/TODO_ICON.png"
                title="To Do List"
                description="✅ Projeto elaborado em React, utilizando Redux (apesar de não ser necessário por conta da aplicação ser pequena, mas foi utilizado para fins de aprimorar o conhecimento em React Redux), para criar global state na aplicação, afim de desenvolver uma lista de tarefas de coisas que precisam ser feitas no dia a dia."
                info="Para informações mais detalhadas do projeto, acesse o Github."
              />
              <ButtonWrapper>
                <ProjectButton
                  title="Acesse"
                  target="_blank"
                  href="https://redux-to-do-list-lilac.vercel.app"
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

            <ProjectWrapper>
              <Project
                image="../images/PROJECT-STEAM-ICON.png"
                title="Projeto Steam Minimalista"
                description="🎮 Criação de uma aplicação web utilizando React baseado na plataforma Steam que é uma um software de gestão de direitos digitais, plataformas digitais como jogos e aplicativos de programação e fornece serviços facilitados como atualização automática de jogos. (Projeto em manutenção - Logo será disponibilizado)."
                info="Para informações mais detalhadas do projeto, acesse o Github."
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
          </ProjectsContent>
        </Content>
      </Container>
    </>
  );
};
export default Projects;
