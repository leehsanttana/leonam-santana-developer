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
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: var(--dark-purple);
  border: 2px solid var(--purple);
  padding: 2.5rem;
  position: relative;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    margin: 80px;
    overflow-y: scroll;
    height: 600px;
    gap: 0;
    row-gap: 2rem;
  }

  @media only screen and (max-width: 480px) {
    margin: 1rem;
    padding: 1.125rem;
  }
`;

export const TitleProject = styled.div`
  grid-column: 1 / 3;
  margin-top: -40px;

  @media screen and (max-width: 768px) {
    div div {
      display: none;
    }
    h1 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 480px) {
    div {
      gap: 0;
    }
    h1 {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

export const Column1 = styled.section`
  img {
    max-width: 100%;
  }

  @media only screen and (max-width: 992px) {
    grid-column: 1 / 3;
  }
`;

export const Column2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

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

    @media only screen and (max-width: 992px) {
      text-align: left;
    }
  }

  @media only screen and (max-width: 480px) {
    button {
      width: 100%;
    }
  }
`;

export const SocialLinks = styled.section`
  align-self: flex-start;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 1.5rem;
  justify-content: flex-end;
  margin-bottom: 2rem;

  @media only screen and (max-width: 992px) {
    gap: 3rem;
    a {
      padding: 0;
    }
  }
`;
