import React from "react";
import * as C from "./styles";

const Button = ({ children, ...props }) => {
  return <C.Button {...props}>{children}</C.Button>;
};

export default Button;
