import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="nav">
      <h1> Logo </h1>{" "}
      <ul className="nav-links">
        <Link to="/about" style={navStyle}>
          <li> About </li>{" "}
        </Link>
        <Link to="/shop" style={navStyle}>
          <li> Shop </li>{" "}
        </Link>
      </ul>{" "}
    </nav>
  );
}

export default Nav;
