import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import {Home,About,Chart} from "./components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
      <div className="navbar">
          <Navbar />
      </div>
      <div className="header">
        <h1 className="text">Intellect</h1>
        <p className="text-p">“You dont have to control your thoughts. You just have to stop letting them control you.”</p>
      </div>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/chart" element = {<Chart />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
