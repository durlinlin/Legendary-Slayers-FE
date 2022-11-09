import React from "react";
import { useRef } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      userName: username,
      passWord: password,
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(
      "https://legendary-slayers-be-production.up.railway.app/users/signIn",
      {
        method: "POST",
        headers: myHeaders,
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
        navigate("/userProfile");
      });
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
        <button>Log In</button>
        <button>
          <Link to="/signUp">Create account</Link>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
