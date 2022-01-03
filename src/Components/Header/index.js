import { React, useState, useEffect, useRef } from "react";
import * as C from "./styles";
import logo from "../../Assets/logo.png";
import useMedia from "../../Hooks/useMedia";
import InternalLink from "../Elements/InternalLink";

const Header = ({ linkHome, linkAbout, linkProjects, linkContacts }) => {
  const mobile = useMedia("(max-width: 768px)");
  const [activeMenu, setActivemenu] = useState(false);
  const [changeColor, setChangeColor] = useState(null);

  const refHeader = useRef();

  useEffect(() => {
    function changeBgColor() {
      if (
        window.pageYOffset > refHeader.current.getBoundingClientRect().height
      ) {
        setChangeColor(changeColor);
      }
    }

    window.addEventListener("scroll", changeBgColor);
  }, []);

  function handleClick() {
    setActivemenu(!activeMenu);
  }

  return (
    <C.Header active={activeMenu} linkAbout={linkAbout} ref={refHeader}>
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
            <InternalLink
              href="#home"
              activeMenu={activeMenu}
              setActivemenu={setActivemenu}
              linkRef={linkHome}
            >
              home
            </InternalLink>
          </li>
          <li>
            <InternalLink
              href="#about"
              activeMenu={activeMenu}
              setActivemenu={setActivemenu}
              linkRef={linkAbout}
            >
              sobre
            </InternalLink>
          </li>
          <li>
            <InternalLink
              href="#projects"
              activeMenu={activeMenu}
              setActivemenu={setActivemenu}
              linkRef={linkProjects}
            >
              portfolio
            </InternalLink>
          </li>
          <li>
            <InternalLink
              href="#contacts"
              activeMenu={activeMenu}
              setActivemenu={setActivemenu}
              linkRef={linkContacts}
            >
              contatos
            </InternalLink>
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
