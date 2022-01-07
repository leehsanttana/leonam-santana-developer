import React from "react";
import * as C from "./styles";
import LogoBrand from "../../Assets/ls-logo-brand.png";

const Footer = () => {
  return (
    <C.Footer>
      <small>
        Produzido e Desenvolvido por{" "}
        <a href="https://github.com/leehsanttana/personal-portfolio">
          Leonam Santana
        </a>
        .
      </small>
      <img src={LogoBrand} alt="Leonam Santana" />
    </C.Footer>
  );
};

export default Footer;
