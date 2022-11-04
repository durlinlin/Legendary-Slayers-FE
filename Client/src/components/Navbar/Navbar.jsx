import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          className="nav-logoImg"
          src="https://media.discordapp.net/attachments/573166469525798922/1038163237985849457/unknown.png"
          alt="League of legends logo"
        />
      </Link>
      <div className="nav-ul">
        <Link to="/champions">All Champions</Link>
      </div>
    </nav>
  );
}

export default Navbar;
