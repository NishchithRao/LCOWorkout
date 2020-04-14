import React, { useState } from "react";
import Base from "./Base";
import Sound from "react-sound";
import sound1 from "../assets/audio/1.mp3";
import sound2 from "../assets/audio/18.mp3";
import sound3 from "../assets/audio/14.mp3";
import sound4 from "../assets/audio/34.mp3";
import sound5 from "../assets/audio/50.mp3";
const ConductExercise = (props) => {
  const [songs, setSongs] = useState([sound1, sound2, sound3, sound4, sound5]);
  const { name } = props.location.state;
  console.log(name);
  setTimeout(() => {
    console.log("Should be paused");
    return <Sound url={songs[3]} playStatus={Sound.status.PAUSED} />;
  }, 6000);
  return (
    <div>
      <Base />
      <p id="audi">{name}</p>
      <Sound url={songs[3]} playStatus={Sound.status.PLAYING} />
    </div>
  );
};

export default ConductExercise;
