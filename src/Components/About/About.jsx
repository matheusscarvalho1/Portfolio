import { AboutComponent } from "./AboutStyles";
import { handleDownload } from "../Download";
import Title from "../Templates/TemplateTitle/TemplateTitle";
import Container from "../Templates/TemplateContainer/TemplateContainer";
import Content from "../Templates/TemplateContent/TemplateContent";
import Button from "../ProjectButton/ProjectButton";

const About = () => {
  return (
    <>
      <Container>
        <Content>
          <Title id="about">Sobre mim</Title>
          <AboutComponent>
            <div>
              <img
                src="../images/github-profile-pic & professional-email-profile-pic.png"
                alt="Matheus de Souza Carvalho"
              />
              <Button
                title="Download Curriculum Vitae"
                onClick={handleDownload}
              />
            </div>
            <div>
              <p>
                Desenvolvedor com 2 anos de experiência com conhecimento na
                stack
                <strong> Frontend</strong> na linguagem de programação
                <strong> JavaScript</strong>, na biblioteca
                <strong> React</strong>, na biblioteca de estilização de
                componentes
                <strong> Styled Components</strong> e também no framework de
                estilização <strong> TailwindCSS</strong>, também possuo
                conhecimento nas tecnologias <strong> HTML</strong>,{" "}
                <strong> CSS</strong>,<strong> GIT</strong>,{" "}
                <strong> GitHub</strong>, através dos cursos tenho noções e
                experiências também envolvendo a stack Backend trabalhando com
                <strong> Node.js</strong>,<strong> Express.js</strong> criando
                <strong> APIs</strong> para acessar banco de dados utilizando
                padrão de
                <strong> arquitetura MVC</strong> para realizar as operações
                básicas de criar, ler, atualizar e deletar informações do banco
                de dados
                <strong> (CRUD)</strong> utilizando{" "}
                <strong>banco de dados SQL</strong> e <strong>noSQL</strong>.{" "}
                Durante esse tempo de experiência, adquirida através de cursos,
                construí projetos responsivos visando a usabilidade e
                praticidade do usuário com o objetivo de sempre atender às
                necessidades de maneira eficaz.
              </p>
              <p>
                Além da minha experiência como desenvolvedor, em 2021 trabalhei
                como estagiário atuando em um time em que tinha uma equipe de
                designers para criação de artes de eventos com transmissões
                online, modelagem de cursos hospedados na plataforma MOODLE
                através do <strong>ADOBE XD</strong>, outra equipe de suporte
                técnico e outra responsável por organizar transmissões online
                pelo youtube. Essa experiência foi de grande importância para
                melhorar minhas <strong> Soft Skills</strong>, já que tive que
                atuar um pouquinho em cada uma dessas áreas citadas, era
                importante a equipe estar alinhada e para isso eram necessários
                uma <strong>boa comunicação</strong>,{" "}
                <strong>organização</strong>,
                <strong> trabalho em equipe</strong>,{" "}
                <strong>adaptabilidade</strong> e <strong>proatividade</strong>.
              </p>
              <p>
                Apesar das experiências já obtidas, atualmente sigo estudando
                através dos cursos: <strong> React</strong>, e depois pretendo
                direcionar meus estudos para <strong> TypeScript</strong> e{" "}
                <strong> Next</strong>, para aprimorar cada vez mais meu
                conhecimento comprometido com a qualidade e a satisfação do
                usuário.
              </p>
            </div>
          </AboutComponent>
        </Content>
      </Container>
    </>
  );
};

export default About;
