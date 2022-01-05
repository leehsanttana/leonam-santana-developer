import React from "react";
import * as C from "./styles";
import Subtitle from "../Elements/Subtitle";
import Button from "../Elements/Button";

const Project = ({ setActiveModal, project }) => {
  function handleClick() {
    setActiveModal(project);
  }

  return (
    <C.Project>
      <C.ProjectWrapper>
        <img src={project.image} alt="imagem-do-projeto" />
        <div>
          <Button onClick={handleClick}>Veja +</Button>
        </div>
      </C.ProjectWrapper>
      <Subtitle subtitle={project.name} />
    </C.Project>
  );
};

export default Project;
