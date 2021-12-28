import React from "react";
import * as C from "./styles";
import { CaretForwardOutline } from "react-ionicons";

const NextButton = () => {
  return (
    <C.NextButton>
      Próximo <CaretForwardOutline cssClasses="icons" />
    </C.NextButton>
  );
};

export default NextButton;
