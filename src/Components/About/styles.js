import styled from "styled-components";

export const About = styled.section`
  padding: 50px 160px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 500px;
    margin-left: 1rem;

    div {
      margin-top: 2rem;
    }
  }

  li {
    margin-bottom: 0.3rem;
    list-style-type: circle;

    &::marker {
      color: var(--cyan);
    }
  }
`;

export const TextAboutArea = styled.section`
  margin-bottom: 40px;

  p {
    &:first-child::before {
      content: "<p> ";
    }

    &:last-child::after {
      content: " </p>";
    }

    &:first-child::before,
    &:last-child::after {
      color: var(--cyan);
    }
  }
`;
