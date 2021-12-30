import styled from "styled-components";

export const Title = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    display: block;
    width: auto;

    &::before {
      content: "<h1> ";
    }

    &::after {
      content: " </h1>";
    }

    &::before,
    &::after {
      color: var(--cyan);
    }
  }

  div {
    width: 100%;
    height: 2px;
    background: var(--cyan);
  }

  @media screen and (max-width: 600px) {
    gap: 2rem;
  }
`;
