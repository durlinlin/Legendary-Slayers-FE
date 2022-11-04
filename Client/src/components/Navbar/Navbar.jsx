import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://media.discordapp.net/attachments/573166469525798922/1038163144746467408/unknown.png?width=1562&height=983"
          alt="League of legends logo"
        />
      </Link>
      <ul>
        <Link to="/champions">All Champions</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
