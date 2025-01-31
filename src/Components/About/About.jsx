import { AboutComponent, Button, InfoWrapper } from "./AboutStyles";
import { handleDownload } from "../Download";
import Title from "../Templates/TemplateTitle/TemplateTitle";
import Container from "../Templates/TemplateContainer/TemplateContainer";
import Content from "../Templates/TemplateContent/TemplateContent";

const About = () => {
  return (
    <>
      <Container>
        <Content>
          <Title id="about">Sobre mim</Title>
          <AboutComponent>
            <InfoWrapper>
              <img
                src="../images/github-profile-pic & professional-email-profile-pic.png"
                alt="Matheus de Souza Carvalho"
              />
              <Button onClick={handleDownload}>
                Download Curriculum Vitae
              </Button>
            </InfoWrapper>
            <div>
              <p>
                Sou desenvolvedor de software com mais de 3 anos de experiência
                na construção de soluções web, atuando tanto no{" "}
                <strong>Front End</strong> quanto no <strong>Back End</strong>.
                Utilizo tecnologias como <strong>React.js</strong>,{" "}
                <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
                <strong>TypeScript</strong> e <strong>PostgreSQL</strong>, além
                de ferramentas como <strong>Docker</strong>,{" "}
                <strong>Git</strong> e <strong>GitHub</strong>. Minha abordagem
                é focada em criar aplicações escaláveis, eficientes e centradas
                na experiência do usuário.
              </p>
              <p>
                Atualmente, atuo como{" "}
                <strong>Desenvolvedor Back End na Ginco Urbanismo</strong>, onde
                sou responsável pelo desenvolvimento e manutenção de APIs
                internas, integração entre sistemas (CRM, ERP) e integração de
                serviços externos. Anteriormente, trabalhei como{" "}
                <strong>Desenvolvedor Front End Freelancer na TAV WEB</strong>,
                desenvolvendo interfaces robustas e interativas, garantindo
                usabilidade e integração com sistemas internos. Também tive a
                oportunidade de atuar como{" "}
                <strong>
                  Estagiário na Escola de Saúde Pública do Estado de Mato Grosso
                </strong>
                , onde participei da criação de cursos na plataforma MOODLE e da
                organização de transmissões online.
              </p>
              <p>
                Sou formado em{" "}
                <strong>
                  Engenharia de Computação pela Universidade Federal de Mato
                  Grosso
                </strong>{" "}
                (2017 - 2023) e concluí cursos relevantes como{" "}
                <strong>Formação Full Stack JavaScript</strong>,{" "}
                <strong>CodeStart</strong> e <strong>Formação Next</strong>.
                Esses conhecimentos me permitem atuar de forma abrangente no
                desenvolvimento de soluções web, desde a criação de interfaces
                até a integração de sistemas complexos.
              </p>
              <p>
                Atualmente, estou focado em aprimorar meus conhecimentos em{" "}
                <strong>React</strong>, <strong>TypeScript</strong> e{" "}
                <strong>Next.js</strong>, sempre buscando entregar soluções
                inovadoras e de alta qualidade. Meu objetivo é continuar
                evoluindo como profissional, contribuindo para projetos
                desafiadores e impactantes.
              </p>
            </div>
          </AboutComponent>
        </Content>
      </Container>
    </>
  );
};

export default About;
