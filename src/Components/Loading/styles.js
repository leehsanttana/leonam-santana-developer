import styled from "styled-components";

export const Loading = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(118, 49, 187, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.loading ? "1" : "0")};
  transition: 1s ease;

  div {
    width: 100px;
    height: 100px;
    border: 5px solid #0faacd;
    transform: rotate(45deg);
    background: transparent;
    animation: fluidColor 2s ease forwards infinite;

    @keyframes fluidColor {
      0% {
        transform: rotate(45deg);
      }

      100% {
        transform: rotate(135deg);
      }
    }
  }
`;
