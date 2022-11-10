import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, setUser }) {
  function handleSignOut() {
    localStorage.clear();
    setUser(null);
  }
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
        <Link to="/items">All Items</Link>

        {user && <Link to="/userProfile">Profile</Link>}
        {user && (
          <Link to="/" onClick={handleSignOut}>
            Sign out
          </Link>
        )}
        {!user && <Link to="/signin">Sign In</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
