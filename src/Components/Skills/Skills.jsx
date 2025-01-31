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
              description="Com expertise em CSS posso criar designs visualmente atraentes, controlar o layout da página e garantir uma experiência de usuário consistente em diferentes dispositivos. (Possuo experiência tanto utilizando flexbox e grid)."
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
              image="../images/TS_ICON.png"
              title="TypeScript"
              description="Com TypeScript posso criar aplicações mais robustas e escaláveis, graças ao seu sistema de tipos estáticos, que proporciona um código mais legível, manutenível e menos propenso a erros."
            />
            <Skill
              image="../images/REACT_ICON.png"
              title="React.js"
              description="Minha experiência em React permite criar componentes reutilizáveis, gerenciar eficientemente o estado da aplicação e criar aplicações web escaláveis e de alto desempenho. (Possuo experiências em tópicos dentro da biblioteca utilizando: React Hooks e React Router)."
            />
            <Skill
              image="../images/NEXT_ICON.png"
              title="Next.js"
              description="A partir do conhecimento em Next.js, posso criar aplicações web otimizadas para SEO, com carregamento rápido e renderização do lado do servidor, proporcionando uma experiência de usuário aprimorada."
            />
            <Skill
              image="../images/REACT_ICON.png"
              title="React - Context API"
              description="Posso criar aplicações mais organizadas e escaláveis, compartilhando dados entre componentes como um estado global (Global State) de maneira eficiente, graças ao Context API."
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
              title="Shadcn/ui"
              description="Com shadcn/ui, posso criar interfaces modernas e acessíveis, utilizando componentes pré-construídos e altamente personalizáveis, otimizando o desenvolvimento de interfaces de usuário."
            />
            <Skill
              image="../images/NODE_ICON.png"
              title="Node"
              description="O Node me fornece a capacidade de criar aplicações de back-end escaláveis e de alto desempenho, utilizando JavaScript no servidor e podendo assim criar diversas APIs. (Possuo experiência em tópicos dentro da biblioteca utilizando: Express, Fastify e MongoDB)."
            />
            <Skill
              image="../images/FASTIFYJS_ICON.svg"
              title="Fastify"
              description="Framework Node.js com uma grande comunidade que permite criar aplicações web rápidas e eficientes, com suporte a validação de esquemas, injeção de dependências e geração de documentação automática."
            />
            <Skill
              image="../images/EXPRESSJS_ICON.png"
              title="Express"
              description="Outra opção de Framework Node.js que permite criar aplicações web robustas e escaláveis, com rotas, middlewares e integração com bancos de dados de forma eficiente."
            />
            <Skill
              image="../images/PRISMA_ICON.png"
              title="Prisma ORM"
              description="Com Prisma ORM, posso gerenciar bancos de dados de forma eficiente, utilizando uma camada de abstração que simplifica a interação com o banco de dados."
            />
            <Skill
              image="../images/DOCKER_ICON.png"
              title="Docker"
              description="Com Docker, posso criar, implantar e gerenciar aplicações em contêineres, garantindo consistência entre ambientes de desenvolvimento e produção, além de facilitar a escalabilidade e o isolamento de dependências."
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
              description="Possuo experiência teórica em Scrum, sei que através dele é possível liderar equipes de desenvolvimento, planejar sprints e garantir a entrega eficiente de projetos, priorizando a adaptabilidade e a transparência."
            />
          </SkillsComponent>
        </Content>
      </Container>
    </>
  );
};

export default Skills;
