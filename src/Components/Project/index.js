import React from "react";
import * as C from "./styles";
import Subtitle from "../Elements/Subtitle";
import Button from "../Elements/Button";

const Project = ({ setActiveModal }) => {
  function handleClick() {
    setActiveModal(true);
  }

  return (
    <C.Project>
      <C.ProjectWrapper>
        <div>
          <Button onClick={handleClick}>Veja +</Button>
        </div>
      </C.ProjectWrapper>
      <Subtitle subtitle="Nome do Projeto:" />
    </C.Project>
  );
};

export default Project;
