import styled from "styled-components";

export const ProjectBtn = styled.button`
  border: none;
  padding: 20px;
  border-radius: 10px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 10px;
  margin-top: 50px;
  width: 150px;

  a {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background-color: #202020;
  }
  @media (max-width: 1024px) {
  }
`;
