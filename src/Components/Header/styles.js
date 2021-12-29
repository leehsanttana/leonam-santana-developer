import styled from "styled-components";

export const Header = styled.header`
  padding: 1.25rem 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 992px) {
    padding: 1.25rem 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px;
  }

  button {
    display: none;

    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export const Brand = styled.div`
  img {
    width: 100%;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    gap: 1.2em;
  }

  li {
    margin-right: -1.25rem;
    transition: 0.3s ease-in-out;

    &:hover {
      margin-right: 0;
    }
  }

  a {
    font-size: 1.125rem;
  }

  a::before {
    content: "< ";
  }

  a::after {
    content: " />";
  }

  a::before,
  a::after {
    color: var(--cyan);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  li:hover a::before,
  li:hover a::after {
    visibility: visible;
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    ul {
      display: block;
    }
  }
`;
