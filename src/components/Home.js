import React from "react";
import { Link, withRouter } from "react-router-dom";
import Base from "./Base";

const Home = () => {
  return (
    <div>
      <Base tittle={""} />
      <div className="Home">
        <h1>LCO Workout</h1>
        <h2>Get up and warm yourself.</h2>
        <p>
          <span>14</span> exercises available.
        </p>
        <p>
          <span>5</span> exercises to choose.
        </p>
        <p>
          <span>2</span> Modes.
        </p>
        <p>
          <span>&#x221E;</span>fun.
        </p>
        <div className="choice-btns">
          <Link to="/random">
            <button
              onClick={() => localStorage.setItem("choice", 0)}
              className="choose"
            >
              Random
            </button>
          </Link>
          <Link to="/random">
            <button
              onClick={() => localStorage.setItem("choice", 1)}
              className="choose"
            >
              Daywise
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
