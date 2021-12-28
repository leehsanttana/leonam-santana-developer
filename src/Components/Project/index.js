import React from "react";
import * as C from "./styles";
import Subtitle from "../Elements/Subtitle";

const Project = ({ href }) => {
  return (
    <C.Project>
      <C.ProjectWrapper>
        <div>
          <button>Veja +</button>
        </div>
      </C.ProjectWrapper>
      <Subtitle subtitle="Nome do Projeto:" />
    </C.Project>
  );
};

export default Project;
