import React from "react";
import * as C from "./styles";

const InternalLink = ({
  href,
  children,
  activeMenu,
  setActivemenu,
  linkRef
}) => {
  function handleClick() {
    setActivemenu(!activeMenu);
    linkRef.current.scrollIntoView({ behavior: "smooth" });

    function scrollToPosition(to) {
      window.scroll({
        top: to,
        behavior: "smooth"
      });
    }
    const to = linkRef.current.offsetTop - 50;
    scrollToPosition(to);
  }

  return (
    <C.InternalLink href={href} onClick={handleClick} linkRef={linkRef}>
      {children}
    </C.InternalLink>
  );
};

export default InternalLink;
