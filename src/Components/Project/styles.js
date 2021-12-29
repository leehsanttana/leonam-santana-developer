import styled from "styled-components";

export const Project = styled.div``;

export const ProjectWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    position: relative;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
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
    z-index: 1000;
    background: #55189269;
  }
`;
