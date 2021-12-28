import styled from "styled-components";

export const Project = styled.div``;

export const ProjectWrapper = styled.div`
  width: 100%;
  height: 450px;
  background: var(--purple);
  position: relative;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #551892;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    opacity: 0;
  }

  &:hover div {
    visibility: visible;
    opacity: 1;
  }

  button {
    background: var(--cyan);
    padding: 1.24rem 4rem;
    text-transform: capitalize;
    font-weight: 500;
    display: inline-block;
    transition: 0.5s ease-in-out;
    border: none;
    color: var(--white);
    font-size: 1.1rem;

    &:hover {
      transform: scale(0.935);
    }
  }
`;
