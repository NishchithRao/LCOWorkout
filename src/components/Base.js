import React from "react";
import Header from "./Header";

const Base = props => {
  return (
    <div>
      <Header title={props.title} />
    </div>
  );
};

export default Base;
