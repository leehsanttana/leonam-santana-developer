import { React, useState } from "react";
import * as C from "./styles";
import AltTitle from "../Elements/AltTitle";
import Project from "../Project";
import ModalProject from "../ModalProject";

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <C.Projects>
      <AltTitle title="projetos" />
      <C.ListProjects>
        <Project setActiveModal={setActiveModal} />
        <Project setActiveModal={setActiveModal} />
        <Project setActiveModal={setActiveModal} />
        <Project setActiveModal={setActiveModal} />
      </C.ListProjects>
      <ModalProject activeModal={activeModal} />
    </C.Projects>
  );
};

export default Projects;
