import styled from "styled-components";

export const ShowcaseComponent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: fit-content;

  background-image: url("../images/developer.png");
  background-size: cover;
  background-position: center;

  background-color: rgba(0, 0, 0, 0.6); /* Setando o overlay */
  background-blend-mode: color; /* Misturar o ovelay setado acima com a imagem do  background-image*/

  h1 {
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }

  p {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.25rem; /* 1.25*16 = 20 pixels*/
    border-bottom: 1.5px solid white;
    padding-bottom: 8px;
    padding-right: 8px;
    padding-left: 8px;
    letter-spacing: 0.15rem;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 3rem;
      text-align: center;
      line-height: 3.3rem;
    }
    p {
      font-size: 0.875rem;
      text-align: center;
      margin-top: 15px;
    }
  }
`;
