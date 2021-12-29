import styled from "styled-components";

export const ModalProject = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background: rgba(25, 15, 41, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalProjectWrapper = styled.div`
  margin: 0 160px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  background: var(--dark-purple);
  border: 2px solid var(--purple);
  padding: 2.5rem;
  position: relative;
`;

export const TitleProject = styled.div`
  grid-column: 1 / 3;
  margin-top: -40px;
`;

export const Column1 = styled.section`
  img {
    width: 100%;
    height: 600px;
  }
`;

export const Column2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    text-align: right;
    margin-top: -0.5rem;

    &::before {
      content: "<p> ";
    }
    &::after {
      content: " </p>";
    }
    &::before,
    &::after {
      color: var(--cyan);
    }
  }
`;

export const SocialLinks = styled.section`
  align-self: flex-start;
  margin-top: 2rem;
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

export const ButtonNext = styled.section`
  position: absolute;
  bottom: 0;
  margin-bottom: 2.5rem;
`;
