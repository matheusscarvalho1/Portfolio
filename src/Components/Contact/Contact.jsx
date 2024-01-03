import Title from "../Templates/TemplateTitle/TemplateTitle";

import {
  Email,
  ContactForm,
  SubmitButton,
  TextArea,
  FormInput,
} from "./ContactStyles";

import Container from "../Templates/TemplateContainer/TemplateContainer";
import Content from "../Templates/TemplateContent/TemplateContent";

const Contact = ({ id }) => {
  return (
    <>
      <Container>
        <Content>
          <Title id={id}>Entre em contato</Title>
          <Email>
            Email:
            <div>
              <strong>matheusdocarvalho@gmail.com</strong>
            </div>
          </Email>
          <ContactForm
            action="https://formsubmit.co/matheusdocarvalho@gmail.com"
            method="POST"
          >
            <FormInput
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Seu nome"
              required
            />
            <FormInput
              type="email"
              name="email"
              id="email"
              placeholder="Seu e-mail"
              required
            />
            <TextArea
              name="message"
              id="message"
              rows="5"
              placeholder="Sua mensagem"
              required
            />

            <SubmitButton type="submit" value="Enviar" />
          </ContactForm>
        </Content>
      </Container>
    </>
  );
};
export default Contact;
