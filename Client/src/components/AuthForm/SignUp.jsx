import React from "react";
import "./SignUp.css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//npm i jwt-decode
function SignUp() {
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      userName: username,
      passWord: password,
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(
      "https://legendary-slayers-be-production.up.railway.app/users/signUp",
      {
        method: "POST",
        headers: myHeaders,
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
      });
  }
  return (
    <div className="signIn-container">
      <form className="signIn-form" onSubmit={handleFormSubmit}>
        <Link to="/signIn">Go Back</Link>
        <h1>Sign Up</h1>
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

export default SignUp;
