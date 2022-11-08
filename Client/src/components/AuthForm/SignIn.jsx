import React from "react";
import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="signIn-container">
      <form className="signIn-form" onSubmit={handleFormSubmit}>
        <h1>Sign In</h1>

        <input
          type="text"
          value={username}
          placeholder="Username"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          value={password}
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
