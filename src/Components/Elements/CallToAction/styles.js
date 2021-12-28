import styled from 'styled-components';

export const CallToAction = styled.a`
  background: var(--purple);
  padding: 1.24rem 1rem;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  transition: .5s ease-in-out;

  &:hover{
    transform: scale(.935);
  }
`;
