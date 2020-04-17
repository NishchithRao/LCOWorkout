import React, { useState } from "react";
import Exercises from "./Exercises";
import Base from "./Base";
import { withRouter } from "react-router-dom";

const PassExercises = (props) => {
  const [exercise] = useState({
    num: JSON.parse(localStorage.getItem("num1")),
    workout: [
      {
        name: "Pushups",
        duration: 90,
        url: "/images/1.png",
      },
      {
        name: "Flat Bench Press",
        duration: 120,
        url: "/images/1.png",
      },
      {
        name: "Decline Crunches",
        duration: 100,
        url: "/images/14.png",
      },
      {
        name: "Incline Bench Press",
        duration: 120,
        url: "/images/11.png",
      },
      {
        name: "Bicep Curls",
        duration: 150,
        url: "/images/7.png",
      },
      {
        name: "Shoulder Press",
        duration: 145,
        url: "/images/13.png",
      },
      {
        name: "Pilates",
        duration: 60,
        url: "/images/5.png",
      },
      {
        name: "Plank",
        duration: 120,
        url: "/images/8.png",
      },
      {
        name: "Vrukshasan",
        duration: 60,
        url: "/images/9.png",
      },
      {
        name: "Abdominal Crunches",
        duration: 130,
        url: "/images/2.png",
      },
      {
        name: "Pushups",
        duration: 140,
        url: "/images/1.png",
      },
    ],
  });

  const { workout, num } = exercise;
  localStorage.setItem(
    "selected",
    JSON.stringify([
      workout[num[0]],
      workout[num[1]],
      workout[num[2]],
      workout[num[3]],
      workout[num[4]],
    ])
  );
  const [day, setDay] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const today = new Date();
  localStorage.setItem("exerciseNum", 0);
  return (
    <div>
      <Base />
      <h3 className="text-center">{day[today.getDay()]}&nbsp;Specials</h3>
      <div
        id="carouselExampleControls1"
        className="carousel slide mobile-carousel"
        data-ride="carousel"
      >
        <div id="ExerciseIndicators" className="carousel slide">
          <ol className="carousel-indicators">
            <li
              data-target="#ExerciseIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#ExerciseIndicators" data-slide-to="1"></li>
            <li data-target="#ExerciseIndicators" data-slide-to="2"></li>
            <li data-target="#ExerciseIndicators" data-slide-to="3"></li>
            <li data-target="#ExerciseIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active my-5">
              <Exercises workout={workout[num[0]]} number={num[0]} />
            </div>
            <div className="carousel-item my-5">
              <Exercises workout={workout[num[1]]} number={num[1]} />
            </div>
            <div className="carousel-item my-5">
              <Exercises workout={workout[num[2]]} number={num[3]} />
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
      </div>
    </div>
  );
};

export default withRouter(PassExercises);
