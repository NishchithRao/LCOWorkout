import React, { useState, useEffect } from "react";
import "../css/Break.css";
import { Progress } from "react-sweet-progress";
import { Redirect } from "react-router-dom";

const Break = (props) => {
  const { num, condn, checker, setnum } = props.location.state;
  const [percent, setPercent] = useState(0);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const percentage =
      percent < 100 && setInterval(() => setPercent(percent + 100 / 40), 1000);
    return () => clearInterval([percentage]);
  }, [percent]);

  const Redirectto = () => {
    {
      setTimeout(() => {
        setRedirect(true);
      }, 40150);
      if (redirect) {
        return <Redirect to="/exercise" />;
      }
    }
  };
  if (condn) {
    localStorage.setItem("exerciseNum", num);
  } else {
    localStorage.setItem("set", setnum);
    if (checker) {
      return <Redirect to="/completed" />;
    } else {
      localStorage.setItem("exerciseNum", 0);
    }
  }

  return (
    <div className="Break">
      <h1>Take a Break!</h1>
      <Progress
        className="Progress"
        percent={percent}
        type="circle"
        status={"success"}
      />
      <p>
        Take a deep breath,relax and prepare yourself for the next exercise!!!
      </p>
      {Redirectto()}
    </div>
  );
};

export default Break;
