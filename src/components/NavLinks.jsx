import React from "react";

const NavLinks = () => {
  return (
    <>
      <div className="ml-auto d-flex align-items-center ">
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <h5 className="nav-link text-white">Hello</h5>
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
