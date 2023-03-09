import React, {useState, useEffect} from "react";
import Home from "./pages/Home";
import Navbar from "./containers/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import {
  Routes,
  Route,
} from "react-router-dom";
import UserDetail from "./containers/UserDetail/UserDetail";
import fetchData from './utils/api'


function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchData().then((res) => {
        setData(res.data.users)
    }).catch(err => console.log("err",err))

  }, [query])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home data={data} setData={setData} />} />
        <Route path="/userdetails/:userId" element={<UserDetail data={data} />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
