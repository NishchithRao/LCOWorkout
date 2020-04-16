import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Exercises.css";
const Exercises = (props) => {
  const [values] = useState({
    name: props.workout.name,
    duration: props.workout.duration,
    url: props.workout.url,
    number: props.number,
  });
  const { name, duration, url } = values;
  return (
    <Link
      className="selectExercises"
      to={{
        pathname: "/random",
        state: {
          Exercises: props.workout,
        },
      }}
    >
      <div className="card">
        <img src={url} alt="" />
        <div className="main-det">
          <p className="name">{name}</p>
          <p>{duration} secs</p>
        </div>
        <button className="start-card">Start</button>
      </div>
    </Link>
  );
};

export default withRouter(Exercises);
