import Skill from "../Skill/Skill";
import Container from "../Templates/TemplateContainer/TemplateContainer";
import Content from "../Templates/TemplateContent/TemplateContent";
import Title from "../Templates/TemplateTitle/TemplateTitle";

import { SkillsComponent } from "./SkillsStyles";
const Skills = ({ id }) => {
  return (
    <>
      <Container>
        <Content>
          <Title id={id}>Habilidades</Title>
          <SkillsComponent>
            <Skill
              image="../images/HTML_ICON.png"
              title="HTML"
              description="Meu conhecimento abrange a utilização de tags HTML para definir elementos, para construir uma aplicação muito bem estruturada, como cabeçalhos, seções, barra de navegação, parágrafos, listas, links e formulários, proporcionando uma base robusta para o desenvolvimento web."
            />
            <Skill
              image="../images/CSS_ICON.png"
              title="CSS"
              description=" Com expertise em CSS posso criar designs visualmente atraentes, controlar o layout da página e garantir uma experiência de usuário consistente em diferentes dispositivos. (Possuo experiência tanto utilizando flexbox e grid)"
            />
            <Skill
              image="../images/SASS_ICON.png"
              title="SASS"
              description="Minha experiência em SASS me permite aproveitar recursos como variáveis, mixins e aninhamento, otimizando a escrita e a manutenção do código CSS."
            />
            <Skill
              image="../images/BOOTSTRAP_ICON.png"
              title="Bootstrap CSS"
              description="Sou capaz de utilizar sua grade responsiva, componentes reutilizáveis e estilos predefinidos para criar interfaces elegantes e totalmente responsivas de maneira eficiente."
            />
            <Skill
              image="../images/JS_ICON.png"
              title="JavaScript"
              description="Posso criar funcionalidades avançadas, manipular o DOM de forma eficiente e aprimorar a experiência do usuário por meio de interações dinâmicas."
            />
            <Skill
              image="../images/JQUERY_ICON.png"
              title="jQuery"
              description="Com minhas habilidades em jQuery, posso acelerar o desenvolvimento ao utilizar seus métodos simplificados para manipulação do DOM, tratamento de eventos e execução de chamadas AJAX."
            />
            <Skill
              image="../images/REACT_ICON.png"
              title="React.js"
              description="Minha experiência em React posso criar componentes reutilizáveis, gerenciar eficientemente o estado da aplicação e criar aplicações web escaláveis e de alto desempenho. (Possuo experiências em tópicos dentro da biblioteca utilizando: React Hooks e React Router)"
            />
            <Skill
              image="../images/REACT_ICON.png"
              title="React - Context API"
              description="Posso criar aplicações mais organizadas e escaláveis, compartilhando dados entre componentes como uma Global State (Estado global) graças ao Context API, de maneira eficiente."
            />
            <Skill
              image="../images/REDUX_ICON.png"
              title="Redux"
              description="Uma outra opção de utilizar um estado global (sem utilizar o Context API), graças ao Redux consigo criar arquiteturas de aplicações coesas, gerenciando o estado de forma previsível e escalável."
            />
            <Skill
              image="../images/TAILWIND_ICON.png"
              title="Tailwind CSS"
              description="Com experiência em Tailwind CSS, posso criar designs personalizados de forma rápida e consistente, aproveitando suas classes utilitárias pragmáticas."
            />
            <Skill
              image="../images/STYLED_COMPONENTS_ICON.png"
              title="Styled Components"
              description="Minha habilidade em Styled Components possibilita criar componentes React com estilos encapsulados, facilitando a manutenção e a reutilização de código."
            />
            <Skill
              image="../images/MATERIAL_UI_ICON.png"
              title="Material UI"
              description="Com conhecimentos em Material UI, posso criar interfaces atraentes e consistentes, utilizando componentes prontos para uso que seguem as melhores práticas de design baseados no Material Design."
            />
            <Skill
              image="../images/GIT_ICON.png"
              title="GIT"
              description="Minha experiência em Git permite uma gestão eficiente dos meus projetos pessoais, controle de versão confiável e colaboração tranquila em equipes de desenvolvimento."
            />
            <Skill
              image="../images/GITHUB_ICON.png"
              title="GitHub"
              description="Minha experiência inclui a criação de repositórios, gerenciamento eficaz de branches, revisão de código, resolução de problemas (issues) e integração contínua."
            />
            <Skill
              image="../images/SCRUM_ICON.png"
              title="SCRUM"
              description="Possuo experiência teórica em scrum,  sei que através dele é possível liderar equipes de desenvolvimento, planejar sprints, e garantir a entrega eficiente de projetos, priorizando a adaptabilidade e a transparência."
            />
          </SkillsComponent>
        </Content>
      </Container>
    </>
  );
};

export default Skills;
