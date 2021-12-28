import React from "react";
import * as C from "./styles";

const Title = ({ title }) => {
  return (
    <C.Title>
      <h1>{title}</h1>
      <div></div>
    </C.Title>
  );
};

export default Title;
