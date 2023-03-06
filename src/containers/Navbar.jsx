import React from "react";
import logo from "../assets/logo.svg"
import NavLinks from "../components/NavLinks";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-primary justify-content-between p-3">
        <div className="navbar-brand d-flex align-items-center text-white" >
          <img src={logo} alt="logo url" width="30"
                        height="24" className="d-inline-block align-text-top white bg-white m-2" />
          <h5 className="m-1">Cloud Contact</h5>
        </div>
        <NavLinks />
      </div>
    </>
  );
};

export default Navbar;
