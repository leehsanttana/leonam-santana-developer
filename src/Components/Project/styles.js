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
`;
