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

  &:nth-child(even) {
    justify-content: flex-end;
    text-align: right;
  }
`;

export const ProjectText = styled.text`
  max-width: 900px;
  &:nth-child(even) {
    order: 1;
  }
`;

export const ProjectImg = styled.img`
  width: 300px;
  height: 300px;

  &:nth-child(even) {
    order: 2;
  }
`;

export const ProjectItemImage = styled.div`
  width: 300px;
  height: 300px;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

// export const ProjectItem1 = styled(ProjectItemImage)`
//   background-image: url("./public/images/project-1.png");
// `;

// export const ProjectItem2 = styled(ProjectItemImage)`
//   background-image: url("./public/images/project-2.png");
//   order: 1;
//   margin-left: 50px;
// `;

// export const ProjectItem3 = styled(ProjectItemImage)`
//   background-image: url("./public/images/project-3.png");
// `;

// export const ProjectItem4 = styled(ProjectItemImage)`
//   background-image: url("./public/images/project-4.png");
//   order: 1;
//   margin-left: 50px;
// `;
