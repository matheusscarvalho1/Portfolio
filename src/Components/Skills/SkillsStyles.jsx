import styled from "styled-components";

export const SkillsComponent = styled.div`
  margin-top: 108px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
`;
