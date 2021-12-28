import styled from "styled-components";

export const NextButton = styled.button`
  background: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: var(--cyan);
  cursor: pointer;

  .icons {
    margin-top: 5px;
    width: 60px;
    height: 60px;
    fill: var(--cyan);
    transition: 0.4s ease;
  }

  &:hover .icons {
    transform: scale(0.9);
  }
`;
