import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="card width my-2">
        <div className="card-body width nav-head">
          <h3 className="nav-text">Hi This Side I am Navbar</h3>
        </div>
      </div>
      <div className="card width my-5">
        <div className="card-body width">
          <div>
          <NavLink to = "/" className="btn my-2">
            Home
          </NavLink>
          </div>
          <div>
          <NavLink to = "/about" className="btn my-2">
            About
          </NavLink>
          </div>
          <div>
          <NavLink to = "/chart" className="btn my-2">
            Chart
          </NavLink>
          </div>
        </div>
      </div>
      <div className="card width my-2">
        <div className="card-body width">
          <NavLink to = "/" className="btn my-2" disabled = {true}>
            Go somewhere
          </NavLink>
          <NavLink to = "/about" className="btn my-2">
            Go somewhere
          </NavLink>
          <NavLink to = "/chart" className="btn my-2">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </div>
  );
}
