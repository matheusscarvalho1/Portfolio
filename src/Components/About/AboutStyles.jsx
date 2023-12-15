import styled from "styled-components";

export const AboutComponent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: 100vh;

  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin-right: 50px;
    margin-left: 50px;
  }

  div {
    padding: 40px;
  }

  div > button {
    position: relative;
    top: 50px;
    left: 150px;
  }

  p {
    color: white;
    line-height: 2rem;
    margin-bottom: 40px;
    padding: 0.025px;
  }

  button {
    border: none;
    padding: 20px;
    border-radius: 10px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 50px;
    &:hover {
      cursor: pointer;
    }
  }
`;
