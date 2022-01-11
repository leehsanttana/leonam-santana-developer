import styled from "styled-components";

export const Loading = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(118, 49, 187, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease;
  animation: ${(props) =>
    props.loading ? "hideLoading 1s ease forwards" : ""};
  position: fixed;
  z-index: 9999;

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
    animation: rotateSquare 1s linear forwards infinite;

    @keyframes rotateSquare {
      0% {
        transform: rotate(45deg);
      }

      100% {
        transform: rotate(225deg);
      }
    }
  }

  img {
    position: absolute;
    transform: scale(0.9);
    animation: pulseLogo 0.8s ease forwards infinite alternate;

    @keyframes pulseLogo {
      0% {
        transform: scale(0.8);
      }

      100% {
        transform: scaleX(1);
        transform: scaleY(1.1);
      }
    }
  }
`;
