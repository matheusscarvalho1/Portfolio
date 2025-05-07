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
                <strong>Engenheiro de Computação</strong> pela UFMT, atualmente
                <strong>Desenvolvedor Back-end</strong> na Ginco Urbanismo e
                possuo experiência profissional também com{" "}
                <strong>desenvolvimento Front-end</strong> na TAVWEB, possuo com
                certificação em
                <strong>Formação Full Stack JavaScript</strong>. Perfil
                analítico,colaborativo e focado em resultados. Experiência com
                desenvolvimento de APIs em Node.js, integração de sistemas e
                criação de interfaces responsivas em React e em Next. Ao longo
                da minha jornada, contribui em reduzir em 20% o tempo de
                processos internos da empresa e melhorar em 25% a performance de
                carregamento de páginas web.
                <br /> Busco evolução contínua como desenvolvedor de software.
              </p>
              <p>
                <strong>
                  Atualmente atuo como Desenvolvedor Back End na Ginco Urbanismo
                  e sou responsável pelo:
                </strong>
              </p>
              <ul>
                <li>
                  Desenvolvimento, testes (unitários e de integração) e
                  documentação de APIs internas em Node.js com Fastify,
                  utilizando Swagger e Prisma ORM, com foco em performance,
                  escalabilidade e segurança de microsserviços;
                </li>
                <br />
                <li>
                  Otimização do tempo de resposta de serviços backend em até 10%
                  por meio de análise de logs e refatoração de código;
                </li>
                <br />
                <li>
                  Digitalização de fluxos internos via formulários inteligentes
                  no FLUIG, resultando na redução de 20% no tempo total de
                  andamento dos processos;
                </li>
                <br />
                <li>
                  Integração entre sistemas (CRM, ERP, site e app), garantindo
                  fluxo contínuo de dados e conectividade com serviços externos;
                </li>
                <br />
                <li>
                  Monitoramento ativo de sistemas com Grafana, utilizando logs
                  para garantir a estabilidade e performance contínuas;
                </li>
                <br />
                <li>
                  Criação de sistemas de autenticação e autorização com JWT e
                  OAuth2 para plataformas de alto tráfego;
                </li>
                <br />
                <li>
                  Implementação de microsserviços utilizando Node.js e
                  TypeScript, otimizando a comunicação entre sistemas internos;
                </li>
                <br />
                <li>
                  Desenvolvimento de integrações seguras com serviços de
                  terceiros (Google APIs) via APIs REST;
                </li>
                <br />
                <li>
                  Implementação de controle de versionamento de APIs utilizando
                  Swagger para documentação técnica e integração com equipes
                  externas;
                </li>
                <br />
                <li>
                  Responsável pela criação de middlewares customizados para
                  gerenciamento de erros, autenticação e autorização em
                  servidores Fastify;
                </li>
              </ul>
              <p>
                <strong>Tecnologias mais utilizadas:</strong> TypeScript,
                JavaScript, Node.js, Fastify, Next.js, Grafana (Logs), Docker,
                Prisma ORM, Swagger, Azure Data Studio, DBeaver.
              </p>
              <p>
                <strong>
                  Como freelancer: Atuei como Desenvolvedor Front-end
                </strong>{" "}
                na TAVWEB - colaborei em projeto de uma plataforma voltada ao
                gerenciamento e encaminhamento de documentos entre setores da
                empresa. O projeto posteriormente utilizou inteligência
                artificial para leitura, filtragem e extração de dados
                relevantes desses documentos armazenados.
                <br />
                Então, fui responsável pelo:
              </p>
              <ul>
                <li>
                  Desenvolvimento e manutenção de interfaces responsivas e
                  interativas utilizando React.js, Next.js, TypeScript e
                  Tailwind CSS, com foco em performance e experiência do
                  usuário;
                </li>
                <br />
                <li>
                  Aplicação de padrões modernos de UI/UX e componentização, com
                  uso de design systems reutilizáveis, garantindo consistência
                  visual e menor tempo de desenvolvimento;
                </li>
                <br />
                <li>
                  Implementei integração com APIs REST para garantir fluidez na
                  comunicação com os sistemas internos da empresa, reduzindo
                  falhas e aumentando a confiabilidade dos dados exibidos;
                </li>
                <br />
                <li>
                  Trabalhei de forma colaborativa com o time de backend e design
                  para garantir entregas alinhadas aos objetivos do negócio.
                </li>
                <br />
                <li>
                  Otimizei o desempenho em páginas críticas, alcançando uma
                  redução de até 25% no tempo de carregamento, validada com
                  DevTools. Essa melhoria foi possível por meio da refatoração
                  de componentes React para evitar renderizações desnecessárias,
                  da implementação de lazy loading em seções do layout e da
                  simplificação do gerenciamento de estado, reduzindo o uso
                  excessivo de useEffect. Também otimizei o carregamento de
                  assets com o uso do 'next/image' para comportar imagens e
                  adotei o Promise.all para realizar chamadas paralelas a
                  múltiplas APIs, reduzindo o tempo de resposta geral da
                  aplicação.
                </li>
              </ul>
              <p>
                <strong>Tecnologias mais utilizadas:</strong> TypeScript,
                JavaScript, Next.js, React.js, Tailwind.
              </p>
              <br />
              <p>
                Através dessas experiências e de projetos pessoais, tenho
                experiência com sistemas distribuídos, microsserviços e APIs
                REST. No dia a dia para desenvolver meus projetos pessoais,
                utilizo: <strong>Node.js</strong> (Fastify, Express),{" "}
                <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
                <strong>TypeScript</strong>, <strong>PostgreSQL</strong>,{" "}
                <strong>Prisma ORM</strong>, <strong>Docker</strong>,{" "}
                <strong>TailwindCSS</strong>, <strong>Material UI</strong>,{" "}
                <strong>shadcn UI</strong> e <strong>Grafana</strong>.
              </p>
              <p>
                Agora, meu foco está em aprimorar minha atuação em{" "}
                <strong>Front End</strong>, aproveitando minha bagagem de
                backend para criar soluções completas e bem integradas, com
                ênfase em performance, usabilidade e experiência do usuário.
              </p>
            </div>
          </AboutComponent>
        </Content>
      </Container>
    </>
  );
};

export default About;
