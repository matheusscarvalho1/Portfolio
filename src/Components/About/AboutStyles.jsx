import styled from "styled-components";

export const AboutComponent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-right: 50px;
    margin-left: 50px;
  }

  div {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: white;
    line-height: 2rem;
    margin-bottom: 40px;
    padding: 0.025px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      width: 400px;
      height: 400px;
      margin-right: 0;
    }

    p {
      font-size: 0.875rem;
      margin-top: 15px;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 20px;
  border-radius: 10px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
    background-color: #202020;
  }

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    left: 20px;
  }
`;
