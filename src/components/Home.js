import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Base from "./Base";
import { generate } from "./randomGennerator";

const Home = () => {
  const [arr, setArr] = useState([]);
  if (arr.length >= 0 && arr.length < 5) {
    setArr([...arr, generate(arr)]);
  }
  localStorage.setItem("array", JSON.stringify(Array.from(arr)));
  const today = new Date();
  const [sunday] = useState([0, 2, 3, 5, 7]);
  const [monday] = useState([0, 2, 5, 6, 7]);
  const [tuesday] = useState([0, 3, 5, 8, 9]);
  const [wednesday] = useState([1, 3, 5, 6, 8]);
  const [thursday] = useState([1, 4, 6, 8, 9]);
  const [friday] = useState([2, 4, 7, 8, 9]);
  const [saturday] = useState([0, 1, 2, 3, 7]);
  const [week] = useState([
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  ]);
  localStorage.setItem("num1", JSON.stringify(week[today.getDay()]));

  return (
    <div>
      <Base />
      <div className="Home">
        <div
          className="modal fade"
          id="InfoModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="InfoModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <p className="modal-title" id="InfoModalLabel">
                  Usage Instructions
                </p>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ol>
                  <li>Select between the 2 modes.</li>
                  <li>view selected exercies</li>
                  <li>In Random mode,exercies can be reshuffled</li>
                  <li>
                    In Daywise mode,exercises are fixed and cannot be changed
                  </li>
                  <li>
                    After viewing exercises, select the number of sets you want
                    to perform
                  </li>
                  <li>Perform the exercises while listening to the music</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="main-head">
          <div className="headText">
            <h1>LCO Workout</h1>
            <h2>Get up and get yourself in shape.</h2>
          </div>
          <button
            type="button"
            className="btn modalButton"
            data-toggle="modal"
            data-target="#InfoModal"
          >
            <i className="fa fa-info-circle"></i>
          </button>
        </div>

        <p>
          <span>11</span> exercises available.
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
          <Link to="/select">
            <button className="choose">Random</button>
          </Link>
          <Link to="/day">
            <button className="choose">Daywise</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
