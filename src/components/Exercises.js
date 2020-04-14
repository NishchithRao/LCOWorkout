import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Exercises.css";
const Exercises = (props) => {
  const [values, setValues] = useState({
    name: props.workout.name,
    duration: props.workout.duration,
    set:
      localStorage.getItem("set") === ""
        ? 1
        : parseInt(localStorage.getItem("set")),
    url: props.workout.url,
    number: props.number,
  });
  const { name, duration, set, url, number } = values;
  console.log(name, `"${url}"`);

  return (
    <Link
      to={{
        pathname: "/exercise",
        state: {
          name: name,
        },
      }}
    >
      <div className="card">
        <img src={url} alt="" />
        <div className="main-det">
          <p className="name">{name}</p>
          <p>{duration} mins</p>
        </div>
        <button className="start-card">Start</button>
      </div>
    </Link>
  );
};

export default withRouter(Exercises);
