import React from "react";
import * as C from "./styles";

const ModalProject = ({ activeModal }) => {
  if (activeModal === true) {
    return (
      <C.ModalProject>
        <C.ModalProjectWrapper>...</C.ModalProjectWrapper>
      </C.ModalProject>
    );
  } else return null;
};

export default ModalProject;
