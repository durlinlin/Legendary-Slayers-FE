import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="signIn-container">
      <form className="signIn-form" onSubmit={handleFormSubmit}>
        <h1>Sign In</h1>

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
      </form>
    </div>
  );
}

export default SignIn;
