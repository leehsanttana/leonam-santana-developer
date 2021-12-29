import React from "react";
import * as C from "./styles";
import logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <C.Header>
      <C.Brand>
        <img src={logo} alt="Leonam Santana" />
      </C.Brand>
      <C.Nav>
        <ul>
          <li>
            <a href="">home</a>{" "}
          </li>
          <li>
            <a href="">sobre</a>{" "}
          </li>
          <li>
            <a href="">portfolio</a>{" "}
          </li>
          <li>
            <a href="">contatos</a>{" "}
          </li>
        </ul>
      </C.Nav>
      <button>x</button>
    </C.Header>
  );
};

export default Header;
