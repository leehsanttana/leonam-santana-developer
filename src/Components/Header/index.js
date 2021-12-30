import { React, useState } from "react";
import * as C from "./styles";
import logo from "../../Assets/logo.png";
import useMedia from "../../Hooks/useMedia";

const Header = () => {
  const mobile = useMedia("(max-width: 768px)");
  const [activeMenu, setActivemenu] = useState(false);

  function handleClick() {
    setActivemenu(!activeMenu);
  }

  return (
    <C.Header active={activeMenu} id="home">
      <C.Brand>
        <img src={logo} alt="Leonam Santana" />
      </C.Brand>
      <C.Nav active={activeMenu}>
        <ul>
          {mobile && (
            <div>
              <img src={logo} alt="Leonam Santana" />
              <button onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          )}
          <li>
            <a href="#home" onClick={handleClick}>
              home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleClick}>
              sobre
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClick}>
              portfolio
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={handleClick}>
              contatos
            </a>
          </li>
        </ul>
      </C.Nav>
      {mobile && (
        <button onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      )}
    </C.Header>
  );
};

export default Header;
