import React from "react";

function Navbar() {
  return (
    <nav className="nav-container">
      <img
        src="https://media.discordapp.net/attachments/573166469525798922/1038163144746467408/unknown.png?width=1562&height=983"
        alt="League of legends logo"
      />
      <ul>
        <Link to="/champions">All Champions</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
