import React from "react";
import "./SignUp.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="signIn-container">
      <form className="signIn-form" onSubmit={handleFormSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          ref={usernameRef}
          placeholder="Username"
          name="username"
          id="username"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          autoComplete="on"
        />
        <button>Submit</button>
        <Link to="/signIn">Sign In</Link>
      </form>
    </div>
  );
}

export default SignUp;