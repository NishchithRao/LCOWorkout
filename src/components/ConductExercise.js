import React, { useState, useEffect } from "react";
import Base from "./Base";
import Sound from "react-sound";
import sound1 from "../assets/audio/1.mp3";
import sound2 from "../assets/audio/18.mp3";
import sound3 from "../assets/audio/14.mp3";
import sound4 from "../assets/audio/34.mp3";
import sound5 from "../assets/audio/50.mp3";
import "../css/conductExercise.css";
import Countdown from "react-countdown";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { Redirect } from "react-router-dom";

const ConductExercise = (props) => {
  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("selected"))
  );
  const [workoutNum, setWorkoutNum] = useState(
    parseInt(localStorage.getItem("exerciseNum"))
  );
  const [songs, setSongs] = useState([sound1, sound2, sound3, sound4, sound5]);
  const [status, setStatus] = useState(Sound.status.PLAYING);
  const [selected, Setselected] = useState(
    parseInt(localStorage.getItem("exerciseNum")) < 4 ? true : false
  );
  const [check, SetCheck] = useState(
    parseInt(localStorage.getItem("set")) > 0 ? true : false
  );
  let { name, duration, url } = workouts[workoutNum];
  const [time, setTime] = useState(duration);
  const [showSet, setShowSet] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [progress, setProgress] = useState(1);

  setTimeout(() => {
    setStatus(Sound.status.PAUSED);
  }, duration * 1050);

  const Redirectto = () => {
    {
      setTimeout(() => {
        setRedirect(true);
      }, duration * 1100);
      if (redirect) {
        return (
          <Redirect
            to={{
              pathname: "/break",
              state: {
                num: parseInt(localStorage.getItem("exerciseNum")) + 1,
                condn: selected,
                checker: check,
                setnum: parseInt(localStorage.getItem("set")) - 1,
              },
            }}
          />
        );
      }
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    console.log(songs[localStorage.getItem("exerciseNum")]);
    const progresses =
      progress < 100 &&
      setInterval(() => setProgress(progress + 100 / duration), 1000);
    return () => clearInterval([progresses]);
  }, [progress]);

  useEffect(() => {
    showSet === parseInt(localStorage.getItem("set"))
      ? setShowSet(0)
      : setShowSet(showSet + 1);
  }, []);

  return (
    <div>
      <Base />
      <div className="conductExercise">
        <p className="name">{name}</p>
        <p className="displaySet">
          Set:
          <span className="Set">{showSet}</span>
        </p>
        <div className="img-container">
          <img src={process.env.PUBLIC_URL + url} alt="" />
        </div>
        <Progress
          style={{
            width: 300,
            margin: "30px auto",
          }}
          theme={{
            success: {
              symbol: ``,
              trailColor: "rgba(111,111,111,0.12)",
              color: "rgb(189, 33, 217)",
              symbolColor: "rgb(189, 33, 217)",
            },
          }}
          percent={progress}
          status={"success"}
        />
        <p className="time">00:{time < 10 ? "0" + time : time}</p>
        <Sound
          playStatus={status}
          url={songs[parseInt(localStorage.getItem("exerciseNum"))]}
        />
        {Redirectto()}
      </div>
    </div>
  );
};

export default ConductExercise;
