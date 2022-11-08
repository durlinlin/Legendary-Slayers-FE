import React from "react";

function SignIn() {
  return (
    <div className="signIn-container">
      <form>
        <h1>Sign In</h1>

        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
      </form>
    </div>
  );
}

export default SignIn;
