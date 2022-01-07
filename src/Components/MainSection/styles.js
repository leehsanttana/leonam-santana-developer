import styled from "styled-components";

export const MainSection = styled.section`
  padding: 100px 160px 50px 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  transition: 0.5s ease;

  @media only screen and (max-width: 992px) {
    padding: 100px 50px 80px 50px;
  }

  @media only screen and (max-width: 768px) {
    padding: 100px 30px 50px 30px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 480px) {
    padding: 100px 30px 30px 30px;
  }
`;

export const Column1 = styled.div`
  opacity: 0;
  visibility: hidden;
  img {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
`;

export const InitialTitle = styled.div`
  width: 100%;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-size: 2.25rem;
    text-transform: uppercase;
    font-weight: 500;

    &::before {
      content: "";
      display: inline-block;
      width: 160px;
      height: 2px;
      margin-left: 1.8rem;
      background: var(--white);
    }

    @media screen and (max-width: 992px) {
      font-size: 1.2rem;

      &::before {
        width: 180px;
      }
    }

    @media screen and (max-width: 768px) {
      &::before {
        margin-left: 0.8rem;
        width: 100px;
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 2.25rem;
      justify-content: center;

      &::before {
        width: 0;
        height: 0;
        margin-left: 0;
      }
    }

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 1rem;
    }
  }
`;

export const MainTitle = styled.div`
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: right;

    @media screen and (max-width: 992px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.8rem;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.5rem;
    }
  }
`;

export const MainSubtitle = styled.div`
  h2 {
    text-transform: uppercase;
    font-weight: 300;
    margin-left: 1.8rem;

    @media screen and (max-width: 992px) {
      font-size: 1.2rem;
      margin-left: 1.8rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      margin-left: 0.8rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-left: 0;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 1rem;
    }
  }
`;

export const SocialLinks = styled.ul`
  margin-top: 2rem;
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }

  li a {
    padding: 0;
  }
`;
