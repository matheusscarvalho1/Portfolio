import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: black;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: space-around;
  padding: 50px;
  align-items: center;
  position: relative;
  bottom: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialItems = styled.div`
  a {
    margin-right: 25px;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    opacity: 50%;
    transition: opacity 0.5s;
    color: white;

    &:hover {
      opacity: 100%;
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 15px;
  }
`;

export const SocialBtn = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  margin-right: 25px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  opacity: 50%;
  transition: opacity 0.5s, width;

  &:hover {
    opacity: 100%;
  }
`;
