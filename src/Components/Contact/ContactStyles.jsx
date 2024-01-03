import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  height: 50vh;
  flex-direction: column;
  margin-top: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input {
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
    padding: 50px;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: 10px;
  background-color: #202020;
  padding: 20px;
  color: rgba(255, 255, 255, 0.5);
  resize: none;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #202020;
  padding: 20px;
  color: rgba(255, 255, 255, 0.5);
  resize: none;
`;

export const SubmitButton = styled.input`
  border: none;
  padding: 20px;
  border-radius: 10px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #202020;
  }
`;

export const Email = styled.div`
  background-color: #202020;
  color: white;
  padding: 9px;
  display: block;
  margin-top: 10px;
  font-size: 1rem;
  border-radius: 5px;
  margin-top: 50px;
  width: fit-content;
  text-transform: uppercase;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  div {
    font-weight: 600;
    display: flex;
    margin-left: 5px;
  }
`;
