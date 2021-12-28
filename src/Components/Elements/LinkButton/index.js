import React from "react";
import * as C from "./styles";

const LinkButton = ({ children, href }) => {
  return <C.LinkButton href={href}>{children}</C.LinkButton>;
};

export default LinkButton;
