import styled from 'styled-components';

export const Header = styled.header`
  padding: 1.25rem 160px;
  display: flex;
  justify-content: space-between;
`;

export const Brand = styled.div`
  width: 160px;
`;

export const Nav = styled.nav`

ul{
  display: flex;
  list-style-type: none;
  gap: .2rem;
}

a{
  font-size: 1.125rem;
}

a::before{
  content: '< ';
}

a::after {
  content: ' />';
}

a::before,
a::after {
  color: var(--cyan);
  visibility: hidden;
  opacity: 0;
  transition: .3s ease-in-out;
}

li:hover a::before, li:hover a::after{
  visibility: visible;
  opacity: 1;
}

`;
