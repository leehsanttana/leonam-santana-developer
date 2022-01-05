import styled from "styled-components";

export const Loading = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(118, 49, 187, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease;
  animation: hideLoading 1s ease 2s forwards;

  @keyframes hideLoading {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  div {
    width: 100px;
    height: 100px;
    border: 5px solid #0faacd;
    transform: rotate(45deg);
    background: transparent;
    animation: fluidColor 4s forwards infinite;

    @keyframes fluidColor {
      0% {
        transform: rotate(45deg);
      }

      100% {
        transform: rotate(225deg);
      }
    }
  }
`;
