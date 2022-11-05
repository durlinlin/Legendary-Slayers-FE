import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/champions" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
