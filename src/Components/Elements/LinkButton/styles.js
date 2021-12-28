import styled from "styled-components";

export const LinkButton = styled.a`
  padding: 1.24rem 1rem;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(0.935);
  }

  .icons {
    width: 35px;
    height: 35px;
    fill: var(--white);
    color: var(--white);
    transition: 0.4s ease;

    &:hover {
      fill: var(--cyan);
      color: var(--cyan);
    }
  }

  a:hover {
    transform: scale(0.9);
  }
`;
