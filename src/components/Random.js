import React, { useState } from "react";
import Base from "./Base";
import "../css/Home.css";
import { Link, withRouter } from "react-router-dom";
import "../css/Random.css";

const Random = () => {
  const [set, setSet] = useState(1);
  const handleChange = (event) => {
    setSet(event.target.value);
  };
  localStorage.setItem("set", set);

  return (
    <div>
      <Base />
      <div className="Random">
        <p className="setText">Enter the number of sets:</p>
        <input
          type="number"
          placeholder="No. of Sets:"
          autoFocus
          onChange={handleChange}
          value={set}
        />
        <Link to="/exercise">
          <button className="start">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Random);
