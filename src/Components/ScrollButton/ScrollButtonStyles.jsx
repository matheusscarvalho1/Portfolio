import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  background-color: #000;
  display: block;
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  margin: 10px;
  z-index: 999;

  img {
    width: 100%;
  }

  &:hover {
    background-color: #202020;
  }
`;
