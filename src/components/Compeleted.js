import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../css/Completed.css";

const Compeleted = () => {
  const [redirect, setRedirect] = useState(false);
  const Redirectto = () => {
    setRedirect(true);
  };
  setTimeout(Redirectto, 4000);
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="completed">
      <h1>Completed!!</h1>
    </div>
  );
};

export default Compeleted;
