import styled from 'styled-components';

export const MainSection = styled.section`
  padding: 60px 160px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  position: relative;
`;

export const Column1 = styled.div`

  .mainImage{
    width: 450px;
    height: 540px;
    background: var(--purple);
    border-radius: 100px 20px 200px 20px;
    transform: rotate(5deg);
  }


`;

export const Column2 = styled.div`

  position: absolute;
  right: 250px;
  z-index: 1000;

`;

export const InitialTitle = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    width: 330px;
    height: 2px;
    background: var(--white);
  }

  h2{
    font-size: 2.25rem;
    text-transform: uppercase;
    font-weight: 500;
  }

`;

export const MainTitle = styled.div`
  h1{
    font-size: 4.5rem;
    text-transform: uppercase;
  }
`;

export const MainSubtitle = styled.div`
  h2{
    text-transform: uppercase;
    font-weight: 300;
  }
`;

export const SocialLinks = styled.ul`

  margin-top: 2rem;
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  justify-content: flex-end;

  .icons{
    width: 35px;
    height: 35px;
    fill: var(--white);
    transition: .4s ease;
  }

  a:hover .icons{
    fill: var(--purple);
    transform: scale(0.9);
  }
`;
