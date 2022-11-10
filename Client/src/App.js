import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useFetcher } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";
import Items from "./components/Items/Items";
import SignIn from "./components/AuthForm/SignIn";
import SignUp from "./components/AuthForm/SignUp";
import UserProfile from "./components/User/UserProfile";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(
        "https://legendary-slayers-be-production.up.railway.app/users/verify",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setUser(res);
        });
    }
  }, []);
  console.log(user);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} />} />
        {user && (
          <Route
            path="/userProfile"
            element={<UserProfile user={user} setUser={setUser} />}
          />
        )}
        <Route path="/champions" element={<Characters />} />
        <Route path="/champions/:champion_name" element={<CharacterInfo />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
