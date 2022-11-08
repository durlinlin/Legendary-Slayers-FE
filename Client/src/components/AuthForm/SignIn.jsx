import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signIn-container">
      <form className="signIn-form">
        <h1>Sign In</h1>

        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
