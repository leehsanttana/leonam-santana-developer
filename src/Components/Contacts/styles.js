import styled from 'styled-components';

export const Contacts = styled.section`
  padding: 50px 160px; 
`;

export const SocialLinks = styled.ul`
  margin-top: 60px;
  display: flex;
  gap: 2rem;

  li{
    list-style-type: none;
    background: var(--purple);
    transition: .3s ease-in-out;

    .icons{
      display: block;
      padding: 2.5rem;
      width: 35px;
      height: 35px;
      fill: var(--white);
      transition: .4s ease;
    }

    &:hover{
      transform: scale(0.9);
    }
  }
`;
