import styled from "styled-components";

export const Footer = styled.footer`
  padding: 1.5rem 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-transform: capitalize;
    text-decoration: underline;
    color: var(--cyan);
    margin-left: 0.3rem;
  }

  img {
    margin-top: 0.6rem;
  }

  @media only screen and (max-width: 992px) {
    padding: 1.25rem 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px;
  }
`;
