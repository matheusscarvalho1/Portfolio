import styled from "styled-components";

export const AboutComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 0 50px;
  }

  div {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: #ffffff;
    line-height: 2rem;
    margin-bottom: 24px;
    padding: 0;
  }

  ul {
    list-style: disc inside;
    margin-bottom: 24px;
    padding-left: 1.5rem;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      width: 200px;
      height: 200px;
      margin: 0 auto 20px;
    }

    p {
      font-size: 0.875rem;
      margin-top: 15px;
    }

    ul {
      padding-left: 1rem;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 24px;

  &:hover {
    cursor: pointer;
    background-color: #333333;
  }
`;
