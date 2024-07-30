import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";

import "./App.css";
import NetWorth from "./components/NetWorth.jsx";
import Assets from "./components/Assets.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/networth" element={<NetWorth />} />
      </Routes>
    </>
  );
}

export default App;
