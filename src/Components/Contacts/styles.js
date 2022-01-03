import styled from "styled-components";

export const Contacts = styled.section`
  padding: 50px 160px;

  @media only screen and (max-width: 992px) {
    padding: 50px 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px;
  }

  p {
    &::before {
      content: "<p> ";
    }
    &::after {
      content: " </p>";
    }
    &::before,
    &::after {
      color: var(--cyan);
    }
  }
`;

export const SocialLinks = styled.ul`
  margin-top: 60px;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li {
    list-style-type: none;
    background: var(--purple);
    transition: 0.3s ease-in-out;

    .icons {
      padding: 1.2rem 1.5rem;
      width: 45px;
      height: 45px;

      @media only screen and (max-width: 768px) {
        width: 35px;
        height: 35px;
      }
    }

    &:hover {
      transform: scale(0.9);
    }

    @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
