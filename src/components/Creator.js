import React from "react";
import "../css/Creator.css";
import { Link, withRouter } from "react-router-dom";
const Creator = () => {
  return (
    <div className="profile">
      <div className="details">
        <div className="details-text">
          <h1 className="text-white">Nishchit Rao</h1>
          <ul className="salutes">
            <li>Developer</li>
            <li>|</li>
            <li>Mechanical Engineer</li>
          </ul>
          <p className="description">
            A wierd guy trying to balance his interests and duties, who loves to
            read and resides in Fitional State,Fictional City,near Fictional
            lake,India.
          </p>
          <h5>Price for the App: Rs.4000</h5>
          <h6>To know more:</h6>
          <div>
            <a
              href="https://www.youtube.com/watch?v=VFrKjhcTAzE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
      <div className="head">
        <Link to="/">
          <button className="angleBracket">
            <i className="fa fa-home"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Creator);
