import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <div className="ml-auto d-flex align-items-center ">
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <Link to="/home" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item">
            <h5 className="nav-link text-white">Sultans Dine</h5>
          </li>
          <li className="nav-item">
            <h5 className="nav-link text-white">Logout</h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
