import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;

  ul {
    display: flex;
    list-style: none;
  }

  ul > li {
    margin-right: 40px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    opacity: 50%;
    transition: opacity 0.5s;
    color: white;
  }

  ul > li:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;
