import styled from "styled-components";

export const SkillsContent = styled.div`
  margin-top: 108px;
  display: flex;
  justify-content: space-between;
`;

export const SkillItem = styled.div`
  background-color: #202020;
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 10px;

  @media (max-width: 1024px) {
    padding: 20px;

    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 0.875rem;
    }
  }

  span {
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
    font-weight: 500;
  }

  p {
    color: white;
    opacity: 75%;
  }
`;
