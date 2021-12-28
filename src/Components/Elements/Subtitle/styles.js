import styled from 'styled-components';

export const Subtitle = styled.h2`

  margin-top: 1rem;

  &::before{
    content: '<h2> ';
  }

  &::after {
    content: ' </h2>';
  }

  &::before, &::after{
    color: var(--cyan);
  }
`;
