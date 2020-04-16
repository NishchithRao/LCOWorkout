import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Exercises.css";
const Exercises = (props) => {
  console.log(props);
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
        <img src={process.env.PUBLIC_URL + url} alt="" />
        <div className="main-det">
          <p className="name">{name}</p>
          <p>{Math.ceil(duration / 60)} mins</p>
        </div>
        <button className="start-card">Start</button>
      </div>
    </Link>
  );
};

export default withRouter(Exercises);
