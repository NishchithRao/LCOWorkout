import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="creator">
        <Link to="/creator">
          <button className="burger">
            <div className="b"></div>
            <div className="b-1"></div>
            <div></div>
          </button>
        </Link>
      </div>
      <div className="title">{props.title}</div>
      <Link to="/">
        <button className="angleBracket">
          {" "}
          <i className="fa fa-home"></i>
        </button>
      </Link>
    </div>
  );
};

export default withRouter(Header);
