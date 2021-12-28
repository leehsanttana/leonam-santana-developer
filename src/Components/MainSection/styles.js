import styled from "styled-components";

export const MainSection = styled.section`
  padding: 60px 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const Column1 = styled.div`
  .mainImage {
    width: 100%;
    height: 640px;
    background: var(--purple);
    border-radius: 100px 20px 200px 20px;
    transform: rotate(5deg);
  }
`;

export const Column2 = styled.div`
  z-index: 1000;
`;

export const InitialTitle = styled.div`
  width: 100%;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.25rem;
    text-transform: uppercase;
    font-weight: 500;

    &::before {
      content: "";
      display: inline-block;
      width: 330px;
      height: 2px;
      margin-left: 1.8rem;
      background: var(--white);
    }
  }
`;

export const MainTitle = styled.div`
  h1 {
    font-size: 4.5rem;
    text-transform: uppercase;
    text-align: right;
  }
`;

export const MainSubtitle = styled.div`
  h2 {
    text-transform: uppercase;
    font-weight: 300;
    margin-left: 1.8rem;
  }
`;

export const SocialLinks = styled.ul`
  margin-top: 2rem;
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  justify-content: flex-end;

  .icons {
    width: 35px;
    height: 35px;
    fill: var(--white);
    transition: 0.4s ease;
  }

  a:hover .icons {
    fill: var(--purple);
    transform: scale(0.9);
  }
`;
