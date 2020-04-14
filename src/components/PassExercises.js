import React, { useState } from "react";
import Exercises from "./Exercises";
import Base from "./Base";
import { Link, withRouter } from "react-router-dom";
import { generate } from "./randomGennerator";

const PassExercises = (props) => {
  const [exercise, setExercise] = useState({
    num: JSON.parse(localStorage.getItem("array")),
    workout: [
      {
        name: "Pushups",
        duration: 4,
        url: "/images/1.png",
      },
      {
        name: "Flat Bench Press",
        duration: 3,
        url: "/images/1.png",
      },
      {
        name: "Decline Crunches",
        duration: 3,
        url: "/images/14.png",
      },
      {
        name: "Incline Bench Press",
        duration: 3,
        url: "/images/11.png",
      },
      {
        name: "Bicep Curls",
        duration: 3,
        url: "/images/7.png",
      },
      {
        name: "Shoulder Press",
        duration: 3,
        url: "/images/13.png",
      },
      {
        name: "Situps",
        duration: 3,
        url: "/images/1.png",
      },
      {
        name: "Vrukshasanaa",
        duration: 3,
        url: "/images/1.png",
      },
      {
        name: "Vrukshasan",
        duration: 3,
        url: "/images/1.png",
      },
      {
        name: "Vrukshasan",
        duration: 3,
        url: "/images/2.png",
      },
      {
        name: "Nidrasan",
        duration: 3,
        url: "/images/3.png",
      },
      {
        name: "Shavasan",
        duration: 3,
        url: "/images/1.png",
      },
      {
        name: "Pull ups",
        duration: 3,
        url: "/images/1.png",
      },
      {
        name: "Pushups",
        duration: 4,
        url: "/images/1.png",
      },
      {
        name: "Pushups",
        duration: 4,
        url: "/images/1.png",
      },
      {
        name: "Pushups",
        duration: 4,
        url: "/images/1.png",
      },
      {
        name: "Pushups",
        duration: 4,
        url: "/images/1.png",
      },
    ],
  });

  const { workout, num } = exercise;
  return (
    <div>
      <Base title="LCO Workout" />

      <div
        id="carouselExampleControls1"
        className="carousel slide mobile-carousel"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active my-5">
            <Exercises workout={workout[num[0]]} number={num[0]} />
          </div>
          <div className="carousel-item my-5">
            <Exercises workout={workout[num[1]]} number={num[1]} />
          </div>
          <div className="carousel-item my-5">
            <Exercises workout={workout[num[2]]} number={num[2]} />
          </div>
          <div className="carousel-item my-5">
            <Exercises workout={workout[num[3]]} number={num[3]} />
          </div>
          <div className="carousel-item my-5">
            <Exercises workout={workout[num[4]]} number={num[4]} />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls1"
          role="button"
          data-slide="prev"
        >
          <span
            className=" carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls1"
          role="button"
          data-slide="next"
        >
          <span
            className=" carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Link className="change-link" to="/select">
        <button
          className="change"
          onClick={() => {
            let array = [];
            for (let i = 0; i <= 5; i++) {
              if (array.length >= 0 && array.length <= 5) {
                array.push(generate(array));
              }
            }
            localStorage.setItem("array", JSON.stringify(Array.from(array)));
            window.location.reload(false);
          }}
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>&nbsp;Refresh
        </button>
      </Link>
    </div>
  );
};

export default withRouter(PassExercises);
