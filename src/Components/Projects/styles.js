import styled from "styled-components";

export const Projects = styled.section`
  visibility: hidden;
  padding: 50px 160px;

  @media only screen and (max-width: 992px) {
    padding: 50px 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px;
  }
`;

export const ListProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;

    h2 {
      text-align: center;
    }
  }
`;
