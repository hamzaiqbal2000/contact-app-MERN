import React from "react";
import Home from "./pages/Home";
import Navbar from "./containers/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import UserDetail from "./containers/UserDetail/UserDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/userdetails/:userId" element={<UserDetail />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
