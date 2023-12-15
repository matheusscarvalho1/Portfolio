import styled from "styled-components";

export const ProjectsContent = styled.div`
  margin-top: 118px;
  padding: 100px;
  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: -50px;
  margin-bottom: 100px;
`;
