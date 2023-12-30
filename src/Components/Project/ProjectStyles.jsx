import styled from "styled-components";

export const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 40px;

  h3 {
    color: white;
    font-size: 2.25rem;
    font-weight: 500;
  }

  p {
    color: white;
    opacity: 75%;
    line-height: 29px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ProjectText = styled.text`
  max-width: 900px;

  @media (max-width: 1024px) {
    margin-left: 0;
    max-width: 100%;
    text-align: center;
    margin-top: 20px;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.875rem;
    margin-top: 10px;
  }
`;

export const ProjectImg = styled.img`
  width: 250px;
  height: 250px;
`;
