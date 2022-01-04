import React from "react";
import * as C from "./styles";

const ExternalLink = ({ children, href }) => {
  return (
    <C.ExternalLink href={href} target="_blank">
      {children}
    </C.ExternalLink>
  );
};

export default ExternalLink;
