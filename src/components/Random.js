import React, { useState } from "react";
import Base from "./Base";
import "../css/Home.css";
import { Link, withRouter } from "react-router-dom";
import { generate } from "./randomGennerator";
import "../css/Random.css";

const Random = () => {
  const [set, setSet] = useState("");
  const [arr, setArr] = useState([]);
  localStorage.setItem("set", set);
  const handleChange = (event) => {
    setSet(event.target.value);
  };
  if (arr.length >= 0 && arr.length < 5) {
    setArr([...arr, generate(arr)]);
  }
  localStorage.setItem("array", JSON.stringify(Array.from(arr)));

  return (
    <div>
      <Base title={"LCO Workout"} />
      <div className="Random">
        <input
          type="number"
          placeholder="No. of Sets:"
          autoFocus
          onChange={handleChange}
          value={set}
        />
        <Link
          to={{
            pathname: `${
              parseInt(localStorage.getItem("choice")) ? "/day" : "/select"
            }`,
            state: {
              name: "singham",
            },
          }}
        >
          <button className="start">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Random);
