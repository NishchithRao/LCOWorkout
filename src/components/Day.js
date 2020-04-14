import React, { useState } from "react";
import Base from "./Base";
import Exercises from "./Exercises";
import { Link } from "react-router-dom";

const Day = () => {
  const [exercise, setExercise] = useState({
    num: new Date().getDay(),
    workout: [
      {
        name: "Pushups",
        duration: 4,
        url: "../assets/audio/18.mp3",
        day: [0, 1],
      },
      {
        name: "Flat Bench Press",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [1, 2],
      },
      {
        name: "Decline Crunches",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [2, 3],
      },
      {
        name: "Incline Bench Press",
        duration: 3,
        url: "./assets/audio/18.mp3",
        day: [3, 4],
      },
      {
        name: "Bicep Curls",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [4, 5],
      },
      {
        name: "Shoulder Press",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [5, 6],
      },
      {
        name: "Situps",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [0, 1],
      },
      {
        name: "Vrukshasanaa",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [1, 2],
      },
      {
        name: "Vrukshasan",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [2, 3],
      },
      {
        name: "Vrukshasan",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [3, 4],
      },
      {
        name: "Nidrasan",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [4, 5],
      },
      {
        name: "Shavasan",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [5, 6],
      },
      {
        name: "Pull ups",
        duration: 3,
        url: "../assets/audio/18.mp3",
        day: [13, 14],
      },
      {
        name: "Pushups",
        duration: 4,
        url: "../assets/audio/18.mp3",
        d3ay: 43,
      },
      {
        name: "Pushups",
        duration: 4,
        url: "../assets/audio/18.mp3",
        day: 3,
      },
      {
        name: "Pushups",
        duration: 4,
        url: "../assets/audio/18.mp3",
        day: 4,
      },
      {
        name: "Pushups",
        duration: 4,
        url: "../assets/audio/18.mp3",
        day: 6,
      },
    ],
  });

  const { workout, num } = exercise;
  return (
    <div>
      <Base />
      <Exercises workout={workout[num]} number={num} />
    </div>
  );
};

export default Day;
