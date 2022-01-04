import React from "react";
import * as C from "./styles";

const Loading = ({ loading }) => {
  return (
    <C.Loading loading={loading}>
      <div></div>
    </C.Loading>
  );
};

export default Loading;
