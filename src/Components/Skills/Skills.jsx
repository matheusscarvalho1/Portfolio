import Skill from "../Skill/Skill";
//import Container from "../Templates/TemplateContainer/TemplateContainer";
//import Content from "../Templates/TemplateContent/TemplateContent";
import Title from "../Templates/TemplateTitle/TemplateTitle";

import { SkillsComponent } from "./SkillsStyles";
const Skills = ({ id }) => {
  return (
    <>
      <Title id={id}>Habilidades</Title>
      <SkillsComponent>
        <Skill
          image="../images/HTML_ICON.png"
          title="HTML"
          description="HTML é a linguagem essencial para construir o esqueleto de páginas web. Com um domínio amplo de HTML, posso criar estruturas de página semânticas, incorporar multimídia, e garantir uma base sólida para a construção de interfaces web. Meu conhecimento abrange a utilização de tags HTML para definir elementos como cabeçalhos, parágrafos, listas, links e formulários, proporcionando uma base robusta para o desenvolvimento web."
        />
        <Skill
          image="../images/CSS_ICON.png"
          title="CSS"
          description="CSS é a linguagem de estilo fundamental para a web, responsável por aprimorar a apresentação de documentos HTML. Com expertise em CSS, posso criar designs visualmente atraentes, controlar o layout da página e garantir uma experiência de usuário consistente em diferentes dispositivos. (Flexbox e Grid)"
        />
        <Skill
          image="../images/SASS_ICON.png"
          title="SASS"
          description="SASS é uma extensão poderosa do CSS que simplifica o processo de estilização. Minha proficiência em SASS me permite aproveitar recursos como variáveis, mixins e aninhamento, otimizando a escrita e a manutenção do código CSS."
        />
        <Skill
          image="../images/BOOTSTRAP_ICON.png"
          title="Bootstrap CSS"
          description="Bootstrap é um framework front-end robusto que agiliza o desenvolvimento web. Com habilidades avançadas em Bootstrap, sou capaz de utilizar sua grade responsiva, componentes reutilizáveis e estilos predefinidos para criar interfaces elegantes e totalmente responsivas de maneira eficiente."
        />
        <Skill
          image="../images/JS_ICON.png"
          title="JavaScript"
          description="JavaScript é a linguagem de programação que impulsiona a interatividade dinâmica em páginas web. Com sólidos conhecimentos em JavaScript, posso criar funcionalidades avançadas, manipular o DOM de forma eficiente e aprimorar a experiência do usuário por meio de interações dinâmicas."
        />
        <Skill
          image="../images/JQUERY_ICON.png"
          title="jQuery"
          description="jQuery é uma biblioteca JavaScript popular que simplifica tarefas comuns no desenvolvimento web. Com habilidades especializadas em jQuery, posso acelerar o desenvolvimento ao utilizar seus métodos simplificados para manipulação do DOM, tratamento de eventos e execução de chamadas AJAX."
        />
        <Skill
          image="../images/REACT_ICON.png"
          title="React.js"
          description="React.js é uma biblioteca JavaScript moderna para construir interfaces de usuário reativas e eficientes. Minha experiência em React.js permite criar componentes reutilizáveis, gerenciar eficientemente o estado da aplicação e criar aplicações web escaláveis e de alto desempenho. (Possuo experiências em tópicos dentro da biblioteca também utilizando: React Hooks e React Router)"
        />
        <Skill
          image="../images/REACT_ICON.png"
          title="React Context API"
          description="A Context API do React é uma ferramenta poderosa para gerenciamento de estado em aplicações React. Com habilidades na Context API, posso criar aplicações mais organizadas e escaláveis, compartilhando dados entre componentes de maneira eficiente."
        />
        <Skill
          image="../images/REDUX_ICON.png"
          title="Redux"
          description="Redux é uma biblioteca popular para gerenciamento de estado em aplicações JavaScript. Com profundo entendimento em Redux, sou capaz de criar arquiteturas de aplicações coesas, gerenciando o estado de forma previsível e escalável."
        />
        <Skill
          image="../images/TAILWIND_ICON.png"
          title="Tailwind CSS"
          description="Tailwind CSS é um framework utility-first que oferece classes utilitárias para estilização eficiente. Com experiência em Tailwind CSS, posso criar designs personalizados de forma rápida e consistente, aproveitando suas classes utilitárias pragmáticas."
        />
        <Skill
          image="../images/STYLED_COMPONENTS_ICON.png"
          title="Styled Components"
          description="Styled Components é uma biblioteca para React que permite a estilização por meio de JavaScript. Minha habilidade em Styled Components possibilita criar componentes React com estilos encapsulados, facilitando a manutenção e a reutilização de código."
        />
        <Skill
          image="../images/MATERIAL_UI_ICON.png"
          title="Material UI"
          description="Material UI é uma biblioteca de componentes React que segue as diretrizes de design do Material Design. Com conhecimentos em Material UI, posso criar interfaces atraentes e consistentes, utilizando componentes prontos para uso que seguem as melhores práticas de design."
        />
        <Skill
          image="../images/GIT_ICON.png"
          title="GIT"
          description="Git é um sistema de controle de versão essencial para colaboração e rastreamento de alterações no código fonte. Minha experiência em Git permite uma gestão eficiente de projetos, controle de versão confiável e colaboração tranquila em equipes de desenvolvimento."
        />
        <Skill
          image="../images/GITHUB_ICON.png"
          title="GitHub"
          description="GitHub é uma plataforma central para o desenvolvimento colaborativo de software, baseada no sistema de controle de versão Git. Com habilidades avançadas no GitHub, posso efetivamente contribuir para projetos de código aberto, facilitar a colaboração entre equipes e garantir um controle de versão confiável. Minha experiência inclui a criação de repositórios, gerenciamento eficaz de branches, revisão de código, resolução de problemas (issues) e integração contínua."
        />
        <Skill
          image="../images/SCRUM_ICON.png"
          title="SCRUM"
          description="Scrum é uma metodologia ágil que prioriza a flexibilidade e a colaboração para o gerenciamento de projetos. Possuo experiência teórica em scrum,  sei que através dele é possível liderar equipes de desenvolvimento, planejar sprints, e garantir a entrega eficiente de projetos, priorizando a adaptabilidade e a transparência."
        />
      </SkillsComponent>
    </>
  );
};

export default Skills;
