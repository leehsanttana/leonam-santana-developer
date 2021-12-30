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
    height: 40px;
    border: ${(props) => (props.active ? "none" : "2px solid var(--purple)")};
    padding: 0.6rem 0.3rem;
    background: none;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s ease;

    div {
      width: 30px;
      height: 2px;
      background: ${(props) => (props.active ? "none" : "var(--purple)")};
      transition: 0.3s ease;

      &:nth-child(2n + 1) {
        background: ${(props) =>
          props.active ? "var(--cyan)" : "var(--purple)"};
      }

      &:first-child {
        transform: ${(props) => (props.active ? "rotate(45deg)" : "none")};
        position: relative;
        top: ${(props) => (props.active ? "9px" : "none")};
      }

      &:last-child {
        transform: ${(props) => (props.active ? "rotate(-45deg)" : "none")};
        position: relative;
        top: ${(props) => (props.active ? "-9px" : "none")};
      }
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
      flex-direction: column;
      background: var(--modal-purple);
      position: fixed;
      right: ${(props) => (props.active ? "0" : "-100%")};
      top: 0;
      left: ${(props) => (props.active ? "0" : "100%")};
      height: 100%;
      transition: 0.3s ease-in-out;
      z-index: 2000;
      padding: 30px 50px;

      li {
        margin-top: 4rem;
        margin-left: -1.25rem;
        text-align: center;

        &:hover {
          margin-left: 0;
        }
      }

      div {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        align-items: center;

        img {
          max-width: 100%;
        }
      }
    }
  }
`;
